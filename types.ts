
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
  conjugatedRuby: string;   // e.g., "行[い]きます"
  dictionaryRuby: string;   // e.g., "行[い]く"
  type: string;             // e.g., "Masu-form"
  tenseLabel: string;       // e.g., "ปัจจุบัน บอกเล่า"
  meaning: string;          // e.g., "จะไป"
  thaiReading: string;
}

export interface SentenceQuestion {
  sentenceWithBlank: string; // e.g., "わたしは _____ です。"
  correctAnswer: string;     // e.g., "がくせい"
  thaiTranslation: string;   // e.g., "ฉันเป็นนักเรียน"
  distractors: string[];    // e.g., ["せんせい", "いぬ", "ほん"]
}

export enum QuizMode {
  HIRAGANA = 'hiragana',
  KATAKANA = 'katakana',
  MIXED = 'mixed',
  VOCAB = 'vocab',
  READING_PRACTICE = 'reading',
  VERB_CONJUGATION = 'conjugation',
  SENTENCE_FILL = 'sentence'
}

export enum AppView {
  MENU = 'menu',
  QUIZ = 'quiz',
  STUDY = 'study'
}

export interface QuizState {
  currentCharacter: Character | Vocabulary | VerbConjugation | SentenceQuestion;
  options: string[];
  correctAnswer: string;
  wrongAttempts: string[];
  isVocab?: boolean;
  isConjugation?: boolean;
  isSentence?: boolean;
}

export interface UserStats {
  correctCount: number;
  totalAttempts: number;
  streak: number;
}
