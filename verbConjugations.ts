
import { VerbConjugation } from './types.ts';

export const VERB_CONJUGATIONS: VerbConjugation[] = [
  // ==========================================
  // 1. VERB CONJUGATIONS (Basic & Advanced)
  // ==========================================

  // --- 行く (iku) - ไป (Group 1) ---
  { conjugatedRuby: '行[い]きます', dictionaryRuby: '行[い]く', type: 'Masu Form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะไป', thaiReading: 'อิคิมาสุ' },
  { conjugatedRuby: '行[い]かない', dictionaryRuby: '行[い]く', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ไป', thaiReading: 'อิคานัย' },
  { conjugatedRuby: '行[い]った', dictionaryRuby: '行[い]く', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ไปแล้ว', thaiReading: 'อิตตะ' },
  { conjugatedRuby: '行[い]ける', dictionaryRuby: '行[い]く', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'ไปได้', thaiReading: 'อิเคะรุ' },
  { conjugatedRuby: '行[い]こう', dictionaryRuby: '行[い]く', type: 'Volitional', tenseLabel: 'รูปเชิญชวน', meaning: 'ไปกันเถอะ', thaiReading: 'อิโก' },
  { conjugatedRuby: '行[い]け', dictionaryRuby: '行[い]く', type: 'Imperative', tenseLabel: 'รูปคำสั่ง', meaning: 'จงไป!', thaiReading: 'อิเคะ' },
  { conjugatedRuby: '行[い]かせる', dictionaryRuby: '行[い]く', type: 'Causative', tenseLabel: 'รูปให้กระทำ', meaning: 'สั่งให้ไป / ให้ไป', thaiReading: 'อิคาสะเระรุ' },

  // --- 飲む (nomu) - ดื่ม (Group 1) ---
  { conjugatedRuby: '飲[の]みます', dictionaryRuby: '飲[の]む', type: 'Masu Form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะดื่ม', thaiReading: 'โนมิมาสุ' },
  { conjugatedRuby: '飲[の]まない', dictionaryRuby: '飲[の]む', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ดื่ม', thaiReading: 'โนมานัย' },
  { conjugatedRuby: '飲[の]める', dictionaryRuby: '飲[の]む', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'ดื่มได้', thaiReading: 'โนเมะรุ' },
  { conjugatedRuby: '飲[の]もう', dictionaryRuby: '飲[ของ]む', type: 'Volitional', tenseLabel: 'รูปเชิญชวน', meaning: 'ดื่มกันเถอะ', thaiReading: 'โนโม' },

  // --- 話す (hanasu) - พูด (Group 1) ---
  { conjugatedRuby: '話[はな]せる', dictionaryRuby: '話[はな]す', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'พูดได้', thaiReading: 'ฮานาเซะรุ' },
  { conjugatedRuby: '話[はな]される', dictionaryRuby: '話[はな]す', type: 'Passive', tenseLabel: 'รูปถูกกระทำ', meaning: 'ถูกพูดถึง', thaiReading: 'ฮานาซาเระรุ' },
  { conjugatedRuby: '話[はな]せ', dictionaryRuby: '話[はな]す', type: 'Imperative', tenseLabel: 'รูปคำสั่ง', meaning: 'จงพูด!', thaiReading: 'ฮานาเซะ' },

  // --- 食べる (taberu) - กิน (Group 2) ---
  { conjugatedRuby: '食[た]べます', dictionaryRuby: '食[た]べる', type: 'Masu Form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะกิน', thaiReading: 'ทาเบมาสุ' },
  { conjugatedRuby: '食[た]べない', dictionaryRuby: '食[た]べる', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่กิน', thaiReading: 'ทาเบไน' },
  { conjugatedRuby: '食[た]べた', dictionaryRuby: '食[た]べる', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'กินแล้ว', thaiReading: 'ทาเบตะ' },
  { conjugatedRuby: '食[た]べられる', dictionaryRuby: '食[た]べる', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'กินได้', thaiReading: 'ทาเบราเระรุ' },
  { conjugatedRuby: '食[た]べよう', dictionaryRuby: '食[た]べる', type: 'Volitional', tenseLabel: 'รูปเชิญชวน', meaning: 'กินกันเถอะ', thaiReading: 'ทาเบโย' },
  { conjugatedRuby: '食[た]べろ', dictionaryRuby: '食[た]べる', type: 'Imperative', tenseLabel: 'รูปคำสั่ง', meaning: 'จงกิน!', thaiReading: 'ทาเบโระ' },

  // --- する (suru) - ทำ (Group 3) ---
  { conjugatedRuby: 'できる', dictionaryRuby: 'する', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'ทำได้', thaiReading: 'เดะคิรุ' },
  { conjugatedRuby: 'しよう', dictionaryRuby: 'する', type: 'Volitional', tenseLabel: 'รูปเชิญชวน', meaning: 'ทำกันเถอะ', thaiReading: 'ชิโย' },
  { conjugatedRuby: 'される', dictionaryRuby: 'する', type: 'Passive', tenseLabel: 'รูปถูกกระทำ', meaning: 'ถูกทำ', thaiReading: 'ซาเระรุ' },
  { conjugatedRuby: 'させる', dictionaryRuby: 'する', type: 'Causative', tenseLabel: 'รูปให้กระทำ', meaning: 'สั่งให้ทำ', thaiReading: 'ซาสะเระรุ' },

  // --- 来る (kuru) - มา (Group 3) ---
  { conjugatedRuby: '来[こ]られる', dictionaryRuby: '来[く]る', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'มาได้', thaiReading: 'โคราระเระรุ' },
  { conjugatedRuby: '来[こ]い', dictionaryRuby: '来[く]る', type: 'Imperative', tenseLabel: 'รูปคำสั่ง', meaning: 'จงมา!', thaiReading: 'โค่ย' },

  // ==========================================
  // 2. ADJECTIVE CONJUGATIONS
  // ==========================================

  // --- おいしい (oishii) - อร่อย (i-Adj) ---
  { conjugatedRuby: 'おいしくない', dictionaryRuby: 'おいしい', type: 'i-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่อร่อย', thaiReading: 'โออิชิกุไน' },
  { conjugatedRuby: 'おいしかった', dictionaryRuby: 'おいしい', type: 'i-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'อร่อย (ในอดีต)', thaiReading: 'โออิชิกัตตะ' },
  { conjugatedRuby: 'おいしくなかった', dictionaryRuby: 'おいしい', type: 'i-Adjective', tenseLabel: 'อดีต ปฏิเสธ', meaning: 'ไม่อร่อย (ในอดีต)', thaiReading: 'โออิชิกุนาคัตตะ' },

  // --- 高[たか]い (takai) - สูง/แพง (i-Adj) ---
  { conjugatedRuby: '高[たか]くない', dictionaryRuby: '高[たか]い', type: 'i-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่แพง', thaiReading: 'ทาคาคุนัย' },
  { conjugatedRuby: '高[たか]かった', dictionaryRuby: '高[たか]い', type: 'i-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'แพง (ในอดีต)', thaiReading: 'ทาคาคัตตะ' },

  // --- 静[しず]か (shizuka) - เงียบ (na-Adj) ---
  { conjugatedRuby: '静[しず]かじゃない', dictionaryRuby: '静[しず]か', type: 'na-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่เงียบ', thaiReading: 'ชิซุกะ จะไน' },
  { conjugatedRuby: '静[しず]かだった', dictionaryRuby: '静[しず]か', type: 'na-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'เงียบ (ในอดีต)', thaiReading: 'ชิซุกะ ดัตตะ' },
  { conjugatedRuby: '静[しず]かじゃなかった', dictionaryRuby: '静[しず]か', type: 'na-Adjective', tenseLabel: 'อดีต ปฏิเสธ', meaning: 'ไม่เงียบ (ในอดีต)', thaiReading: 'ชิซุกะ จะนาคัตตะ' },

  // --- きれい (kirei) - สวย/สะอาด (na-Adj) ---
  { conjugatedRuby: 'きれいじゃない', dictionaryRuby: 'きれい', type: 'na-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่สวย/ไม่สะอาด', thaiReading: 'คิเร จะไน' },
  { conjugatedRuby: 'きれいだった', dictionaryRuby: 'きれい', type: 'na-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'สวย (ในอดีต)', thaiReading: 'คิเร ดัตตะ' },
  
  // --- 速[はや]い (hayai) - เร็ว (i-Adj) ---
  { conjugatedRuby: '速[はや]くない', dictionaryRuby: '速[はや]い', type: 'i-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่เร็ว', thaiReading: 'ฮายาคุนัย' },
  { conjugatedRuby: '速[はや]かった', dictionaryRuby: '速[はや]い', type: 'i-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'เร็ว (ในอดีต)', thaiReading: 'ฮายาคัตตะ' },

  // --- 暇[ひま] (hima) - ว่าง (na-Adj) ---
  { conjugatedRuby: '暇[ひま]じゃない', dictionaryRuby: '暇[ひま]', type: 'na-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ว่าง', thaiReading: 'ฮิมะ จะไน' },
  { conjugatedRuby: '暇[ひま]だった', dictionaryRuby: '暇[ひมา]', type: 'na-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'ว่าง (ในอดีต)', thaiReading: 'ฮิมะ ดัตตะ' },
];
