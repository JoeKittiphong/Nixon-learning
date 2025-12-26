
export interface Character {
  char: string;
  romaji: string;
  thai: string;
  type: 'hiragana' | 'katakana' | 'vocab';
  isDakuten?: boolean;
}

export interface Vocabulary {
  word: string;
  kanji?: string;
  romaji: string;
  thaiReading: string; // เพิ่มคำอ่านภาษาไทย
  meaning: string;     // ความหมายภาษาไทย
}

export enum QuizMode {
  HIRAGANA = 'hiragana',
  KATAKANA = 'katakana',
  MIXED = 'mixed',
  VOCAB = 'vocab',           // ทายความหมาย
  READING_PRACTICE = 'reading' // ทายคำอ่าน
}

export enum AppView {
  MENU = 'menu',
  QUIZ = 'quiz',
  STUDY = 'study'
}

export interface QuizState {
  currentCharacter: Character | Vocabulary;
  options: string[];
  correctAnswer: string;
  wrongAttempts: string[];
  isVocab?: boolean;
}

export interface UserStats {
  correctCount: number;
  totalAttempts: number;
  streak: number;
}
