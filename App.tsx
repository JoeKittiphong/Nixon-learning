
import React, { useState, useEffect, useCallback } from 'react';
import { QuizMode, AppView, Character, Vocabulary, VerbConjugation, SentenceQuestion, QuizState, UserStats } from './types.ts';
import { HIRAGANA, HIRAGANA_DAKUTEN, KATAKANA, KATAKANA_DAKUTEN } from './constants.ts';
import { VOCAB_N5 } from './vocabN5.ts';
import { VERB_CONJUGATIONS } from './verbConjugations.ts';
import { SENTENCES_N5 } from './sentencesN5.ts';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.MENU);
  const [mode, setMode] = useState<QuizMode>(QuizMode.HIRAGANA);
  const [useDakuten, setUseDakuten] = useState<boolean>(false);
  const [quiz, setQuiz] = useState<QuizState | null>(null);
  const [stats, setStats] = useState<UserStats>({ correctCount: 0, totalAttempts: 0, streak: 0 });
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  const [studyTab, setStudyTab] = useState<'hiragana' | 'katakana'>('hiragana');

  const renderRuby = (text: string, className: string = "") => {
    const parts = text.split(/([^\u3040-\u309F\u30A0-\u30FF]+\[[^\]]+\])/g);
    return (
      <span className={className}>
        {parts.map((part, index) => {
          const match = part.match(/([^\[]+)\[([^\]]+)\]/);
          if (match) {
            return (
              <ruby key={index}>
                {match[1]}
                <rt className="text-[0.45em] mb-[-0.1em] font-medium opacity-80">{match[2]}</rt>
              </ruby>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </span>
    );
  };

  const getBadgeColor = (type: string) => {
    if (type.includes('i-Adjective')) return 'bg-orange-100 text-orange-700';
    if (type.includes('na-Adjective')) return 'bg-blue-100 text-blue-700';
    return 'bg-emerald-100 text-emerald-700';
  };

  const formatOption = (item: any, currentMode: QuizMode) => {
    if (currentMode === QuizMode.HIRAGANA || currentMode === QuizMode.KATAKANA || currentMode === QuizMode.MIXED) {
      return `${item.thai}(${item.romaji})`;
    }
    if (currentMode === QuizMode.VOCAB) return item.meaning;
    if (currentMode === QuizMode.READING_PRACTICE) return item.thaiReading;
    if (currentMode === QuizMode.VERB_CONJUGATION) return (item as VerbConjugation).dictionaryRuby;
    if (currentMode === QuizMode.SENTENCE_FILL) return (item as string); 
    return '';
  };

  const getFilteredPool = useCallback((targetMode: QuizMode) => {
    if (targetMode === QuizMode.SENTENCE_FILL) return SENTENCES_N5;
    if (targetMode === QuizMode.VERB_CONJUGATION) return VERB_CONJUGATIONS;
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
    
    if (activeMode === QuizMode.SENTENCE_FILL) {
      const q = pool[Math.floor(Math.random() * pool.length)] as SentenceQuestion;
      const options = [...q.distractors, q.correctAnswer].sort(() => 0.5 - Math.random());
      setQuiz({
        currentCharacter: q,
        options,
        correctAnswer: q.correctAnswer,
        wrongAttempts: [],
        isSentence: true
      });
      setShowFeedback(false);
      return;
    }

    const correct = pool[Math.floor(Math.random() * pool.length)];
    const correctDisplay = formatOption(correct, activeMode);
    const others = pool.filter(c => formatOption(c, activeMode) !== correctDisplay);
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random());
    const distractorOptions: string[] = [];
    
    for (const item of shuffledOthers) {
      const display = formatOption(item, activeMode);
      if (!distractorOptions.includes(display) && display !== correctDisplay) {
        distractorOptions.push(display);
      }
      if (distractorOptions.length >= 3) break;
    }
    
    while (distractorOptions.length < 3) distractorOptions.push("???");
    const options = [...distractorOptions, correctDisplay].sort(() => 0.5 - Math.random());
    
    setQuiz({
      currentCharacter: correct as any,
      options,
      correctAnswer: correctDisplay,
      wrongAttempts: [],
      isVocab: activeMode === QuizMode.VOCAB || activeMode === QuizMode.READING_PRACTICE,
      isConjugation: activeMode === QuizMode.VERB_CONJUGATION
    });
    setShowFeedback(false);
  }, [getFilteredPool, mode]);

  const handleStartQuiz = (selectedMode: QuizMode) => {
    setMode(selectedMode);
    setStats({ correctCount: 0, totalAttempts: 0, streak: 0 });
    setView(AppView.QUIZ);
    generateNewQuestion(selectedMode);
    setIsModalOpen(false);
  };

  const handleAnswer = (optionDisplay: string) => {
    if (!quiz || quiz.wrongAttempts.includes(optionDisplay) || showFeedback) return;
    if (optionDisplay === quiz.correctAnswer) {
      setStats(prev => ({ correctCount: prev.correctCount + 1, totalAttempts: prev.totalAttempts + 1, streak: prev.streak + 1 }));
      setShowFeedback(true);
      setTimeout(() => generateNewQuestion(), 1000);
    } else {
      setStats(prev => ({ ...prev, totalAttempts: prev.totalAttempts + 1, streak: 0 }));
      setQuiz(prev => prev ? { ...prev, wrongAttempts: [...prev.wrongAttempts, optionDisplay] } : null);
    }
  };

  if (view === AppView.MENU) {
    return (
      <div className="min-h-screen flex flex-col p-6 view-enter bg-[#fdfdfd]">
        <header className="flex flex-col items-center mt-6 mb-10">
          <div className="w-16 h-16 bg-indigo-600 rounded-[20px] flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-indigo-100 mb-3">
            あ
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">ZenKana</h1>
          <p className="text-slate-400 text-sm font-medium">เส้นทางการเรียนรู้ภาษาญี่ปุ่น</p>
        </header>

        <main className="max-w-md mx-auto w-full space-y-8 flex-grow pb-10">
          {/* Step 1: Alphabet */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 mb-2 px-1">
              <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold">1</span>
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Alphabet Basics</h2>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-white border-2 border-slate-100 rounded-[24px] p-5 flex items-center gap-4 hover:border-indigo-200 transition-all active:scale-[0.98] group shadow-sm"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <i className="fa-solid fa-shapes text-lg"></i>
              </div>
              <div className="text-left flex-grow">
                <h3 className="font-bold text-slate-800 text-lg leading-tight">ฝึกจำตัวอักษร</h3>
                <p className="text-slate-400 text-xs">Hiragana & Katakana</p>
              </div>
              <i className="fa-solid fa-chevron-right text-slate-300"></i>
            </button>
          </section>

          {/* Step 2: Vocab */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 mb-2 px-1">
              <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold">2</span>
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Vocabulary</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <button 
                onClick={() => handleStartQuiz(QuizMode.VOCAB)}
                className="bg-white border-2 border-slate-100 rounded-[24px] p-5 flex items-center gap-4 hover:border-emerald-200 transition-all active:scale-[0.98] group shadow-sm"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-language"></i>
                </div>
                <div className="text-left flex-grow">
                  <h3 className="font-bold text-slate-800 text-lg leading-tight">ทายคำศัพท์ N5</h3>
                  <p className="text-slate-400 text-xs">คลังศัพท์พื้นฐาน</p>
                </div>
              </button>
              <button 
                onClick={() => handleStartQuiz(QuizMode.READING_PRACTICE)}
                className="bg-white border-2 border-slate-100 rounded-[24px] p-5 flex items-center gap-4 hover:border-emerald-200 transition-all active:scale-[0.98] group shadow-sm"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-microphone"></i>
                </div>
                <div className="text-left flex-grow">
                  <h3 className="font-bold text-slate-800 text-lg leading-tight">ฝึกอ่านออกเสียง</h3>
                  <p className="text-slate-400 text-xs">เน้นการออกเสียงที่ถูกต้อง</p>
                </div>
              </button>
            </div>
          </section>

          {/* Step 3: Grammar */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 mb-2 px-1">
              <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold">3</span>
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Grammar & Sentences</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <button 
                onClick={() => handleStartQuiz(QuizMode.VERB_CONJUGATION)}
                className="bg-white border-2 border-slate-100 rounded-[24px] p-5 flex items-center gap-4 hover:border-orange-200 transition-all active:scale-[0.98] group shadow-sm"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 text-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-sync"></i>
                </div>
                <div className="text-left flex-grow">
                  <h3 className="font-bold text-slate-800 text-lg leading-tight">ผันกริยา & คุณศัพท์</h3>
                  <p className="text-slate-400 text-xs">โครงสร้างประโยคพื้นฐาน</p>
                </div>
              </button>
              <button 
                onClick={() => handleStartQuiz(QuizMode.SENTENCE_FILL)}
                className="bg-white border-2 border-slate-100 rounded-[24px] p-5 flex items-center gap-4 hover:border-orange-200 transition-all active:scale-[0.98] group shadow-sm"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 text-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-pencil"></i>
                </div>
                <div className="text-left flex-grow">
                  <h3 className="font-bold text-slate-800 text-lg leading-tight">เติมคำในประโยค (N5)</h3>
                  <p className="text-slate-400 text-xs">ฝึกฝนในสถานการณ์จริง</p>
                </div>
              </button>
            </div>
          </section>

          <button 
            onClick={() => setView(AppView.STUDY)}
            className="w-full py-6 text-sm font-bold text-slate-400 flex items-center justify-center gap-3 hover:text-indigo-500 transition-colors border-t border-slate-100"
          >
            <i className="fa-solid fa-book-open"></i> เปิดดูตารางตัวอักษรทั้งหมด
          </button>
        </main>

        {/* Modal Selection */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-sm rounded-[32px] p-8 shadow-2xl scale-in-center animate-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">เลือกโหมดฝึก</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600"><i className="fa-solid fa-xmark text-xl"></i></button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-2">
                  <button onClick={() => handleStartQuiz(QuizMode.HIRAGANA)} className="w-full py-4 px-6 rounded-2xl border-2 border-slate-100 hover:border-indigo-500 hover:bg-indigo-50 font-bold text-slate-700 flex justify-between items-center group transition-all">
                    <span>Hiragana (あ)</span>
                    <i className="fa-solid fa-chevron-right opacity-0 group-hover:opacity-100 text-indigo-500"></i>
                  </button>
                  <button onClick={() => handleStartQuiz(QuizMode.KATAKANA)} className="w-full py-4 px-6 rounded-2xl border-2 border-slate-100 hover:border-indigo-500 hover:bg-indigo-50 font-bold text-slate-700 flex justify-between items-center group transition-all">
                    <span>Katakana (ア)</span>
                    <i className="fa-solid fa-chevron-right opacity-0 group-hover:opacity-100 text-indigo-500"></i>
                  </button>
                  <button onClick={() => handleStartQuiz(QuizMode.MIXED)} className="w-full py-4 px-6 rounded-2xl border-2 border-slate-100 hover:border-indigo-500 hover:bg-indigo-50 font-bold text-slate-700 flex justify-between items-center group transition-all">
                    <span>Mixed (あ+ア)</span>
                    <i className="fa-solid fa-chevron-right opacity-0 group-hover:opacity-100 text-indigo-500"></i>
                  </button>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <i className="fa-solid fa-wand-magic-sparkles text-indigo-500"></i>
                      <span className="text-sm font-bold text-slate-600">รวมเสียงขุ่น (Dakuten)</span>
                    </div>
                    <button onClick={() => setUseDakuten(!useDakuten)} className={`w-12 h-6 rounded-full relative transition-colors ${useDakuten ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${useDakuten ? 'left-7' : 'left-1'}`}></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (view === AppView.STUDY) {
    const rawPool = studyTab === 'hiragana' 
      ? (useDakuten ? [...HIRAGANA, ...HIRAGANA_DAKUTEN] : HIRAGANA)
      : (useDakuten ? [...KATAKANA, ...KATAKANA_DAKUTEN] : KATAKANA);

    return (
      <div className="min-h-screen flex flex-col p-4 view-enter bg-white">
        <header className="flex items-center gap-4 mb-6 pt-4">
          <button onClick={() => setView(AppView.MENU)} className="w-10 h-10 flat-btn flex items-center justify-center text-slate-600 border-none bg-slate-100">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <h2 className="text-xl font-bold text-slate-800">ตารางตัวอักษร</h2>
        </header>

        <div className="flat-card p-2 mb-6 flex bg-slate-50 border border-slate-100">
          <button onClick={() => setStudyTab('hiragana')} className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${studyTab === 'hiragana' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}>HIRAGANA</button>
          <button onClick={() => setStudyTab('katakana')} className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${studyTab === 'katakana' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}>KATAKANA</button>
        </div>

        <div className="grid grid-cols-4 gap-2 pb-10">
          {rawPool.map((item, idx) => (
            <div key={`${item.char}-${idx}`} className="bg-white border border-slate-100 p-4 rounded-[20px] flex flex-col items-center justify-center gap-1 shadow-sm">
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
        <button onClick={() => setView(AppView.MENU)} className="w-10 h-10 flat-btn flex items-center justify-center text-slate-500 border-none bg-slate-50">
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

      <main className="flex-grow flex flex-col items-center justify-center gap-6">
        {quiz && (
          <>
            <div className={`w-full max-w-sm flat-card py-10 px-6 flex flex-col items-center justify-center transition-all duration-300 border-2 ${showFeedback ? 'border-indigo-500 bg-indigo-50 scale-95' : 'border-transparent'}`}>
              {quiz.isSentence ? (
                <div className="text-center w-full">
                  <div className="text-3xl font-bold text-slate-800 mb-8 leading-relaxed">
                    {(quiz.currentCharacter as SentenceQuestion).sentenceWithBlank.split('_____').map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {renderRuby(part)}
                        {i < arr.length - 1 && (
                          <span className={`inline-block border-b-4 mx-2 px-4 min-w-[120px] pb-1 ${showFeedback ? 'text-indigo-600 border-indigo-400' : 'text-slate-200 border-slate-300'}`}>
                            {showFeedback ? renderRuby(quiz.correctAnswer) : ''}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="py-3 px-6 bg-indigo-50 text-indigo-700 rounded-2xl text-lg font-bold inline-block border border-indigo-100 shadow-sm">
                    {(quiz.currentCharacter as SentenceQuestion).thaiTranslation}
                  </div>
                </div>
              ) : quiz.isConjugation ? (
                <div className="text-center">
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className={`inline-block px-3 py-1 text-[9px] font-extrabold rounded-full uppercase tracking-wider ${getBadgeColor((quiz.currentCharacter as VerbConjugation).type)}`}>
                      {(quiz.currentCharacter as VerbConjugation).type}
                    </span>
                    <span className="inline-block px-3 py-1 bg-slate-800 text-white text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                      {(quiz.currentCharacter as VerbConjugation).tenseLabel}
                    </span>
                  </div>
                  <div className="text-6xl font-black text-slate-800 mb-6">
                    {renderRuby((quiz.currentCharacter as VerbConjugation).conjugatedRuby)}
                  </div>
                  <div className="py-2.5 px-6 bg-slate-100 rounded-2xl text-slate-700 text-lg font-bold inline-block">
                    {(quiz.currentCharacter as VerbConjugation).meaning}
                  </div>
                </div>
              ) : quiz.isVocab ? (
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
                return (
                  <button
                    key={option}
                    disabled={showFeedback}
                    onClick={() => handleAnswer(option)}
                    className={`h-28 flat-btn flex flex-col items-center justify-center p-3 border-2 transition-all ${isWrong ? 'wrong-anim' : isCorrect ? 'correct-anim border-green-500 shadow-lg shadow-green-100' : 'border-slate-100'}`}
                  >
                    {quiz.isSentence ? (
                      <span className="text-xl font-bold">{renderRuby(option)}</span>
                    ) : quiz.isConjugation ? (
                      <span className="text-2xl font-bold">{renderRuby(option)}</span>
                    ) : (
                      <>
                        <span className="text-lg font-bold text-center leading-tight">{option.split('(')[0]}</span>
                        {option.includes('(') && (
                          <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase opacity-60">
                            ({option.split('(')[1]}
                          </span>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </main>

      <footer className="mt-10 mb-4 px-2">
        <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">
          <span>ความแม่นยำ</span>
          <span>{stats.totalAttempts > 0 ? Math.round((stats.correctCount / stats.totalAttempts) * 100) : 0}%</span>
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
