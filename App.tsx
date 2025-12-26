
import React, { useState, useEffect, useCallback } from 'react';
import { QuizMode, AppView, Character, Vocabulary, QuizState, UserStats } from './types';
import { HIRAGANA, HIRAGANA_DAKUTEN, KATAKANA, KATAKANA_DAKUTEN } from './constants';
import { VOCAB_N5 } from './vocabN5';

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
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md gnm-card rounded-[3.5rem] p-10 relative overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-32 h-32 bg-indigo-300/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-32 h-32 bg-purple-300/20 blur-3xl rounded-full"></div>
          
          <div className="flex flex-col items-center mb-12 relative z-10">
            <div className="w-28 h-28 gnm-btn rounded-full flex items-center justify-center mb-6">
              <span className="text-6xl font-black text-indigo-500">あ</span>
            </div>
            <h1 className="text-4xl font-black text-slate-800 tracking-tight gnm-text-shadow">ZenKana</h1>
            <p className="text-slate-500 text-center mt-2 font-semibold">Learn Japanese Effortlessly</p>
          </div>

          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <button onClick={() => handleStartQuiz(QuizMode.HIRAGANA)} className="gnm-btn rounded-3xl p-6 flex flex-col items-center group">
                  <span className="text-3xl font-bold text-slate-800">あ</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase mt-2 tracking-widest">Hiragana</span>
                </button>
                <button onClick={() => handleStartQuiz(QuizMode.KATAKANA)} className="gnm-btn rounded-3xl p-6 flex flex-col items-center group">
                  <span className="text-3xl font-bold text-slate-800">ア</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase mt-2 tracking-widest">Katakana</span>
                </button>
              </div>

              <div className="flex items-center justify-between px-5 py-4 gnm-inset rounded-2xl">
                <span className="text-sm font-bold text-slate-600">ตัวช่วย Dakuten (゛)</span>
                <button onClick={() => setUseDakuten(!useDakuten)} className={`w-14 h-8 rounded-full p-1 transition-all duration-300 ${useDakuten ? 'bg-indigo-300/40' : 'bg-slate-300/20'}`}>
                  <div className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-all duration-300 ${useDakuten ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <button onClick={() => handleStartQuiz(QuizMode.READING_PRACTICE)} className="w-full gnm-btn py-5 rounded-3xl text-indigo-600 font-bold flex items-center justify-center gap-3">
                <i className="fa-solid fa-microphone-lines opacity-50"></i> ฝึกอ่านออกเสียง
              </button>
              <button onClick={() => handleStartQuiz(QuizMode.VOCAB)} className="w-full gnm-btn py-5 rounded-3xl text-slate-700 font-bold flex items-center justify-center gap-3">
                <i className="fa-solid fa-language opacity-50"></i> ทายคำศัพท์ N5
              </button>
            </div>

            <button onClick={() => setView(AppView.STUDY)} className="w-full gnm-inset py-4 rounded-3xl text-slate-500 font-bold flex items-center justify-center gap-3 transition-all hover:text-slate-700">
              ตารางเรียนรู้ <i className="fa-solid fa-book-open text-[10px]"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (view === AppView.STUDY) {
    const rawPool = studyTab === 'hiragana' 
      ? (studyShowDakuten ? [...HIRAGANA, ...HIRAGANA_DAKUTEN] : HIRAGANA)
      : (studyShowDakuten ? [...KATAKANA, ...KATAKANA_DAKUTEN] : KATAKANA);

    return (
      <div className="min-h-screen flex flex-col p-6 md:p-10">
        <div className="max-w-5xl w-full mx-auto">
          <div className="flex items-center justify-between mb-10">
            <button onClick={handleBackToMenu} className="w-12 h-12 gnm-btn flex items-center justify-center rounded-2xl text-slate-600">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Alphabet Table</h2>
            <div className="w-12"></div>
          </div>

          <div className="gnm-card rounded-[2.5rem] p-6 mb-10 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex gnm-inset p-1.5 rounded-2xl w-full md:w-auto">
              <button onClick={() => setStudyTab('hiragana')} className={`flex-1 md:w-40 py-3 rounded-xl text-xs font-black transition-all ${studyTab === 'hiragana' ? 'bg-white/80 text-indigo-600 shadow-sm' : 'text-slate-500'}`}>HIRAGANA</button>
              <button onClick={() => setStudyTab('katakana')} className={`flex-1 md:w-40 py-3 rounded-xl text-xs font-black transition-all ${studyTab === 'katakana' ? 'bg-white/80 text-indigo-600 shadow-sm' : 'text-slate-500'}`}>KATAKANA</button>
            </div>
            <label className="flex items-center gap-4 cursor-pointer">
              <span className="text-sm font-bold text-slate-500">รวมเสียงขุ่น</span>
              <button onClick={() => setStudyShowDakuten(!studyShowDakuten)} className={`w-14 h-8 rounded-full p-1 transition-all ${studyShowDakuten ? 'bg-indigo-300/40' : 'bg-slate-300/20'}`}>
                <div className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-all ${studyShowDakuten ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </button>
            </label>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-5 pb-20">
            {rawPool.map((item, idx) => (
              <div key={`${item.char}-${idx}`} className="gnm-btn rounded-3xl p-5 flex flex-col items-center justify-center gap-2 aspect-square">
                <span className="text-3xl font-bold text-slate-800">{item.char}</span>
                <span className="text-[10px] font-black text-indigo-400 uppercase opacity-60">{item.romaji}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col p-6 md:p-10">
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between mb-10">
        <button onClick={handleBackToMenu} className="w-12 h-12 gnm-btn flex items-center justify-center rounded-2xl text-slate-600">
          <i className="fa-solid fa-times"></i>
        </button>
        <div className="flex gap-4">
          <div className="gnm-btn px-6 py-2.5 rounded-2xl flex items-center gap-3">
            <i className="fa-solid fa-fire text-orange-500"></i>
            <span className="font-black text-slate-700">{stats.streak}</span>
          </div>
          <div className="gnm-btn px-6 py-2.5 rounded-2xl flex items-center gap-3">
            <i className="fa-solid fa-check text-indigo-500"></i>
            <span className="font-black text-slate-700">{stats.correctCount}</span>
          </div>
        </div>
      </div>

      <div className="max-w-md w-full mx-auto flex-grow flex flex-col items-center justify-center gap-12">
        {quiz && (
          <>
            <div className={`relative w-full gnm-card rounded-[4rem] p-16 flex flex-col items-center justify-center transition-all duration-300 ${showFeedback ? 'bg-green-500/10 scale-95 shadow-xl' : ''}`}>
              {quiz.isVocab ? (
                <div className="flex flex-col items-center text-center">
                  {(quiz.currentCharacter as Vocabulary).kanji ? (
                    <>
                      <span className="text-xl text-indigo-400 font-bold mb-3 tracking-widest uppercase opacity-60">{(quiz.currentCharacter as Vocabulary).word}</span>
                      <span className={`font-black transition-all duration-300 ${showFeedback ? 'text-green-600' : 'text-slate-800'} text-8xl`}>
                        {(quiz.currentCharacter as Vocabulary).kanji}
                      </span>
                    </>
                  ) : (
                    <span className={`font-black transition-all duration-300 ${showFeedback ? 'text-green-600' : 'text-slate-800'} text-7xl`}>
                      {(quiz.currentCharacter as Vocabulary).word}
                    </span>
                  )}
                  {mode === QuizMode.READING_PRACTICE && (
                    <div className="mt-8 gnm-inset px-8 py-3 rounded-2xl">
                      <span className="text-slate-500 font-bold text-lg italic">
                        {(quiz.currentCharacter as Vocabulary).meaning}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <span className={`font-black transition-all duration-300 ${showFeedback ? 'text-green-600' : 'text-slate-800'} text-9xl`}>
                  {(quiz.currentCharacter as Character).char}
                </span>
              )}
            </div>

            <div className="w-full grid grid-cols-2 gap-6">
              {quiz.options.map((option) => {
                const isWrong = quiz.wrongAttempts.includes(option);
                const isCorrectFeedback = showFeedback && option === quiz.correctAnswer;
                const [thaiPart, englishPartWithBracket] = option.split('(');
                const englishPart = englishPartWithBracket ? `(${englishPartWithBracket}` : '';

                return (
                  <button
                    key={option}
                    disabled={showFeedback}
                    onClick={() => handleAnswer(option)}
                    className={`h-36 rounded-[2.5rem] font-bold transition-all gnm-btn flex flex-col items-center justify-center p-6 ${isWrong ? 'gnm-pressed bg-wrong text-red-600' : isCorrectFeedback ? 'gnm-pressed bg-correct text-green-700' : 'text-slate-700'}`}
                  >
                    <span className="text-2xl text-center leading-tight font-black">{thaiPart}</span>
                    {englishPart && <span className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-tighter opacity-60">{englishPart}</span>}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="max-w-md w-full mx-auto mt-12 mb-6">
        <div className="flex justify-between text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 px-2">
          <span>LEARNING PROGRESS</span>
          <span>{stats.totalAttempts > 0 ? Math.round((stats.correctCount / stats.totalAttempts) * 100) : 0}% ACCURACY</span>
        </div>
        <div className="h-4 gnm-inset rounded-full p-1 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transition-all duration-1000" 
            style={{ width: `${stats.totalAttempts > 0 ? (stats.correctCount / stats.totalAttempts) * 100 : 0}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default App;
