
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
  thaiReading: string;
  meaning: string;
}

export interface VerbConjugation {
  conjugated: string;
  dictionary: string;
  kanji?: string;
  type: string;
  meaning: string;
  thaiReading: string;
}

export enum QuizMode {
  HIRAGANA = 'hiragana',
  KATAKANA = 'katakana',
  MIXED = 'mixed',
  VOCAB = 'vocab',
  READING_PRACTICE = 'reading',
  VERB_CONJUGATION = 'conjugation' // New mode for verb conjugation
}

export enum AppView {
  MENU = 'menu',
  QUIZ = 'quiz',
  STUDY = 'study'
}

export interface QuizState {
  currentCharacter: Character | Vocabulary | VerbConjugation;
  options: string[];
  correctAnswer: string;
  wrongAttempts: string[];
  isVocab?: boolean;
  isConjugation?: boolean;
}

export interface UserStats {
  correctCount: number;
  totalAttempts: number;
  streak: number;
}
