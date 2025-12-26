
import React, { useState, useEffect, useCallback } from 'react';
import { QuizMode, AppView, Character, Vocabulary, QuizState, UserStats } from './types.ts';
import { HIRAGANA, HIRAGANA_DAKUTEN, KATAKANA, KATAKANA_DAKUTEN } from './constants.ts';
import { VOCAB_N5 } from './vocabN5.ts';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.MENU);
  const [mode, setMode] = useState<QuizMode>(QuizMode.HIRAGANA);
  const [useDakuten, setUseDakuten] = useState<boolean>(false);
  const [quiz, setQuiz] = useState<QuizState | null>(null);
  const [stats, setStats] = useState<UserStats>({ correctCount: 0, totalAttempts: 0, streak: 0 });
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  
  const [studyTab, setStudyTab] = useState<'hiragana' | 'katakana'>('hiragana');
  const [studyShowDakuten, setStudyShowDakuten] = useState<boolean>(true);

  const formatOption = (item: any, currentMode: QuizMode) => {
    if (currentMode === QuizMode.HIRAGANA || currentMode === QuizMode.KATAKANA || currentMode === QuizMode.MIXED) {
      return `${item.thai}(${item.romaji})`;
    }
    if (currentMode === QuizMode.VOCAB) return item.meaning;
    if (currentMode === QuizMode.READING_PRACTICE) return item.thaiReading;
    return '';
  };

  const getFilteredPool = useCallback((targetMode: QuizMode) => {
    if (targetMode === QuizMode.VOCAB || targetMode === QuizMode.READING_PRACTICE) return VOCAB_N5;
    let pool: Character[] = [];
    if (targetMode === QuizMode.HIRAGANA || targetMode === QuizMode.MIXED) {
      pool = [...pool, ...HIRAGANA];
      if (useDakuten) pool = [...pool, ...HIRAGANA_DAKUTEN];
    }
    if (targetMode === QuizMode.KATAKANA || targetMode === QuizMode.MIXED) {
      pool = [...pool, ...KATAKANA];
      if (useDakuten) pool = [...pool, ...KATAKANA_DAKUTEN];
    }
    return pool;
  }, [useDakuten]);

  const generateNewQuestion = useCallback((targetMode?: QuizMode) => {
    const activeMode = targetMode || mode;
    const pool = getFilteredPool(activeMode);
    if (pool.length === 0) return;
    const correct = pool[Math.floor(Math.random() * pool.length)];
    const correctDisplay = formatOption(correct, activeMode);
    const others = pool.filter(c => formatOption(c, activeMode) !== correctDisplay);
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random());
    const distractorOptions: string[] = [];
    for (const item of shuffledOthers) {
      const display = formatOption(item, activeMode);
      if (!distractorOptions.includes(display) && display !== correctDisplay) distractorOptions.push(display);
      if (distractorOptions.length >= 3) break;
    }
    const options = [...distractorOptions, correctDisplay].sort(() => 0.5 - Math.random());
    setQuiz({
      currentCharacter: correct as any,
      options,
      correctAnswer: correctDisplay,
      wrongAttempts: [],
      isVocab: activeMode === QuizMode.VOCAB || activeMode === QuizMode.READING_PRACTICE
    });
    setShowFeedback(false);
  }, [getFilteredPool, mode]);

  const handleStartQuiz = (selectedMode: QuizMode) => {
    setMode(selectedMode);
    setStats({ correctCount: 0, totalAttempts: 0, streak: 0 });
    setView(AppView.QUIZ);
    generateNewQuestion(selectedMode);
  };

  const handleBackToMenu = () => {
    setView(AppView.MENU);
    setQuiz(null);
  };

  const handleAnswer = (optionDisplay: string) => {
    if (!quiz || quiz.wrongAttempts.includes(optionDisplay) || showFeedback) return;
    if (optionDisplay === quiz.correctAnswer) {
      setStats(prev => ({ correctCount: prev.correctCount + 1, totalAttempts: prev.totalAttempts + 1, streak: prev.streak + 1 }));
      setShowFeedback(true);
      setTimeout(() => generateNewQuestion(), 600);
    } else {
      setStats(prev => ({ ...prev, totalAttempts: prev.totalAttempts + 1, streak: 0 }));
      setQuiz(prev => prev ? { ...prev, wrongAttempts: [...prev.wrongAttempts, optionDisplay] } : null);
    }
  };

  if (view === AppView.MENU) {
    return (
      <div className="min-h-screen flex flex-col p-6 view-enter">
        <header className="flex flex-col items-center mt-10 mb-12">
          <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-indigo-200 mb-4">
            あ
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">ZenKana</h1>
          <p className="text-slate-500 font-medium">เรียนภาษาญี่ปุ่นแสนง่าย</p>
        </header>

        <main className="max-w-md mx-auto w-full space-y-4 flex-grow">
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => handleStartQuiz(QuizMode.HIRAGANA)} className="flat-card p-6 flex flex-col items-center hover:bg-slate-50 transition-colors">
              <span className="text-3xl font-bold text-indigo-600">あ</span>
              <span className="text-xs font-bold text-slate-400 mt-2 uppercase">Hiragana</span>
            </button>
            <button onClick={() => handleStartQuiz(QuizMode.KATAKANA)} className="flat-card p-6 flex flex-col items-center hover:bg-slate-50 transition-colors">
              <span className="text-3xl font-bold text-indigo-600">ア</span>
              <span className="text-xs font-bold text-slate-400 mt-2 uppercase">Katakana</span>
            </button>
          </div>

          <div className="flat-card px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <i className="fa-solid fa-wand-magic-sparkles text-sm"></i>
              </div>
              <span className="text-sm font-bold text-slate-700">โหมดเสียงขุ่น (Dakuten)</span>
            </div>
            <button onClick={() => setUseDakuten(!useDakuten)} className={`w-12 h-6 rounded-full relative transition-colors ${useDakuten ? 'bg-indigo-600' : 'bg-slate-200'}`}>
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${useDakuten ? 'left-7' : 'left-1'}`}></div>
            </button>
          </div>

          <div className="space-y-3 pt-4">
            <button onClick={() => handleStartQuiz(QuizMode.READING_PRACTICE)} className="w-full flat-btn-primary py-4 text-sm font-bold shadow-md shadow-indigo-100 flex items-center justify-center gap-3">
              <i className="fa-solid fa-microphone"></i> ฝึกอ่านออกเสียง
            </button>
            <button onClick={() => handleStartQuiz(QuizMode.VOCAB)} className="w-full flat-btn py-4 text-sm font-bold text-slate-700 flex items-center justify-center gap-3">
              <i className="fa-solid fa-language text-indigo-500"></i> ทายคำศัพท์ N5
            </button>
            <button onClick={() => setView(AppView.STUDY)} className="w-full py-4 text-sm font-bold text-slate-400 flex items-center justify-center gap-3 hover:text-slate-600">
              <i className="fa-solid fa-book-open"></i> ตารางตัวอักษร
            </button>
          </div>
        </main>
      </div>
    );
  }

  if (view === AppView.STUDY) {
    const rawPool = studyTab === 'hiragana' 
      ? (studyShowDakuten ? [...HIRAGANA, ...HIRAGANA_DAKUTEN] : HIRAGANA)
      : (studyShowDakuten ? [...KATAKANA, ...KATAKANA_DAKUTEN] : KATAKANA);

    return (
      <div className="min-h-screen flex flex-col p-4 view-enter">
        <header className="flex items-center gap-4 mb-6 pt-4">
          <button onClick={handleBackToMenu} className="w-10 h-10 flat-btn flex items-center justify-center text-slate-600">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <h2 className="text-xl font-bold text-slate-800">ตารางตัวอักษร</h2>
        </header>

        <div className="flat-card p-2 mb-6 flex bg-slate-100/50">
          <button onClick={() => setStudyTab('hiragana')} className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${studyTab === 'hiragana' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'}`}>HIRAGANA</button>
          <button onClick={() => setStudyTab('katakana')} className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${studyTab === 'katakana' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'}`}>KATAKANA</button>
        </div>

        <div className="grid grid-cols-4 gap-2 pb-10">
          {rawPool.map((item, idx) => (
            <div key={`${item.char}-${idx}`} className="flat-card p-4 flex flex-col items-center justify-center gap-1">
              <span className="text-2xl font-bold text-slate-800">{item.char}</span>
              <span className="text-[10px] font-bold text-indigo-400 uppercase">{item.romaji}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col p-5 view-enter bg-white">
      <header className="flex items-center justify-between mb-8">
        <button onClick={handleBackToMenu} className="w-10 h-10 flat-btn flex items-center justify-center text-slate-500">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="flex gap-2">
          <div className="bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
            <i className="fa-solid fa-fire"></i> {stats.streak}
          </div>
          <div className="bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
            <i className="fa-solid fa-star"></i> {stats.correctCount}
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center gap-10">
        {quiz && (
          <>
            <div className={`w-full max-w-xs aspect-square flat-card flex flex-col items-center justify-center transition-all duration-200 ${showFeedback ? 'scale-95 bg-indigo-50' : ''}`}>
              {quiz.isVocab ? (
                <div className="text-center px-6">
                  {(quiz.currentCharacter as Vocabulary).kanji && (
                    <span className="block text-indigo-400 font-bold mb-2 tracking-widest text-sm">{(quiz.currentCharacter as Vocabulary).word}</span>
                  )}
                  <span className={`font-bold leading-none ${showFeedback ? 'text-indigo-600' : 'text-slate-800'} ${(quiz.currentCharacter as any).kanji || (quiz.currentCharacter as any).word.length > 4 ? 'text-4xl' : 'text-6xl'}`}>
                    {(quiz.currentCharacter as any).kanji || (quiz.currentCharacter as any).word}
                  </span>
                  {mode === QuizMode.READING_PRACTICE && (
                    <div className="mt-6 py-2 px-4 bg-slate-50 rounded-xl text-slate-500 text-sm font-medium">
                      {(quiz.currentCharacter as Vocabulary).meaning}
                    </div>
                  )}
                </div>
              ) : (
                <span className={`font-bold transition-all ${showFeedback ? 'text-indigo-600' : 'text-slate-800'} text-8xl`}>
                  {(quiz.currentCharacter as Character).char}
                </span>
              )}
            </div>

            <div className="w-full max-w-sm grid grid-cols-2 gap-3">
              {quiz.options.map((option) => {
                const isWrong = quiz.wrongAttempts.includes(option);
                const isCorrect = showFeedback && option === quiz.correctAnswer;
                const [thaiPart, englishPartWithBracket] = option.split('(');
                const englishPart = englishPartWithBracket ? `(${englishPartWithBracket}` : '';

                return (
                  <button
                    key={option}
                    disabled={showFeedback}
                    onClick={() => handleAnswer(option)}
                    className={`h-24 flat-btn flex flex-col items-center justify-center p-3 ${isWrong ? 'wrong-anim' : isCorrect ? 'correct-anim' : ''}`}
                  >
                    <span className="text-lg font-bold text-center leading-tight">{thaiPart}</span>
                    {englishPart && <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase opacity-60">{englishPart}</span>}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </main>

      <footer className="mt-10 mb-4">
        <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider px-1">
          <span>PROGRESS</span>
          <span>{stats.totalAttempts > 0 ? Math.round((stats.correctCount / stats.totalAttempts) * 100) : 0}% ACCURACY</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-500 transition-all duration-500" 
            style={{ width: `${stats.totalAttempts > 0 ? (stats.correctCount / stats.totalAttempts) * 100 : 0}%` }}
          ></div>
        </div>
      </footer>
    </div>
  );
};

export default App;
