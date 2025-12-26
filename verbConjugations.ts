
import { VerbConjugation } from './types.ts';

export const VERB_CONJUGATIONS: VerbConjugation[] = [
  // --- Group 1 ---
  { conjugatedRuby: '行[い]きます', dictionaryRuby: '行[い]く', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะไป', thaiReading: 'อิคิมาสุ' },
  { conjugatedRuby: '行[い]って', dictionaryRuby: '行[い]く', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'ไป... (แล้ว...)', thaiReading: 'อิตเตะ' },
  { conjugatedRuby: '行[い]かない', dictionaryRuby: '行[い]く', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ไป', thaiReading: 'อิคานัย' },
  { conjugatedRuby: '行[い]った', dictionaryRuby: '行[い]く', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ไปแล้ว', thaiReading: 'อิตตะ' },
  
  { conjugatedRuby: '飲[の]みます', dictionaryRuby: '飲[の]む', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะดื่ม', thaiReading: 'โนมิมาสุ' },
  { conjugatedRuby: '飲[の]んで', dictionaryRuby: '飲[の]む', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'ดื่ม... (แล้ว...)', thaiReading: 'นนเดะ' },
  { conjugatedRuby: '飲[の]まない', dictionaryRuby: '飲[の]む', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ดื่ม', thaiReading: 'โนมานัย' },
  { conjugatedRuby: '飲[の]んだ', dictionaryRuby: '飲[の]む', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ดื่มแล้ว', thaiReading: 'โนนดะ' },
  
  { conjugatedRuby: '買[か]います', dictionaryRuby: '買[か]う', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะซื้อ', thaiReading: 'ไคมาสุ' },
  { conjugatedRuby: '買[か]って', dictionaryRuby: '買[か]う', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'ซื้อ... (แล้ว...)', thaiReading: 'คัตเตะ' },
  { conjugatedRuby: '買[か]わない', dictionaryRuby: '買[か]う', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ซื้อ', thaiReading: 'คาวานัย' },
  { conjugatedRuby: '買[か]った', dictionaryRuby: '買[か]う', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ซื้อแล้ว', thaiReading: 'คัตตะ' },
  
  { conjugatedRuby: '書[か]きます', dictionaryRuby: '書[か]く', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะเขียน', thaiReading: 'คากิมาสุ' },
  { conjugatedRuby: '書[か]いて', dictionaryRuby: '書[か]く', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'เขียน... (แล้ว...)', thaiReading: 'ไคเตะ' },
  { conjugatedRuby: '書[か]かない', dictionaryRuby: '書[か]く', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่เขียน', thaiReading: 'คากานัย' },
  
  { conjugatedRuby: '話[はな]します', dictionaryRuby: '話[はな]す', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะพูดคุย', thaiReading: 'ฮานาชิมาสุ' },
  { conjugatedRuby: '話[はな]して', dictionaryRuby: '話[はな]す', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'พูดคุย... (แล้ว...)', thaiReading: 'ฮานาชิเตะ' },
  { conjugatedRuby: '話[はな]さない', dictionaryRuby: '話[はนา]す', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่พูด', thaiReading: 'ฮานาซานัย' },
  
  { conjugatedRuby: '待[ま]ちます', dictionaryRuby: '待[ま]つ', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะรอ', thaiReading: 'มาจิมาสุ' },
  { conjugatedRuby: '待[ま]って', dictionaryRuby: '待[ま]つ', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'รอ... (แล้ว...)', thaiReading: 'มัตเตะ' },
  { conjugatedRuby: '待[ま]たない', dictionaryRuby: '待[ま]つ', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่รอ', thaiReading: 'มาตานัย' },
  
  { conjugatedRuby: '会[あ]います', dictionaryRuby: '会[あ]う', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะพบ', thaiReading: 'ไอมาสุ' },
  { conjugatedRuby: '会[あ]って', dictionaryRuby: '会[あ]う', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'พบ... (แล้ว...)', thaiReading: 'อัตเตะ' },
  { conjugatedRuby: '会[あ]わない', dictionaryRuby: '会[あ]う', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่พบ', thaiReading: 'ไอวานัย' },

  // --- Group 2 ---
  { conjugatedRuby: '食[た]べます', dictionaryRuby: '食[た]べる', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะกิน', thaiReading: 'ทาเบมาสุ' },
  { conjugatedRuby: '食[た]べて', dictionaryRuby: '食[た]べる', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'กิน... (แล้ว...)', thaiReading: 'ทาเบเตะ' },
  { conjugatedRuby: '食[た]べない', dictionaryRuby: '食[た]べる', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่กิน', thaiReading: 'ทาเบไน' },
  { conjugatedRuby: '食[た]べた', dictionaryRuby: '食[た]べる', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า', meaning: 'กินแล้ว', thaiReading: 'ทาเบตะ' },
  
  { conjugatedRuby: '寝[ね]ます', dictionaryRuby: '寝[ね]る', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะนอน', thaiReading: 'เนมาสุ' },
  { conjugatedRuby: '寝[ね]て', dictionaryRuby: '寝[ね]る', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'นอน... (แล้ว...)', thaiReading: 'เนเตะ' },
  { conjugatedRuby: '寝[ね]ない', dictionaryRuby: '寝[ね]る', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่นอน', thaiReading: 'เนไน' },
  
  { conjugatedRuby: '見[み]ます', dictionaryRuby: '見[み]る', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะดู', thaiReading: 'มิมาสุ' },
  { conjugatedRuby: '見[み]て', dictionaryRuby: '見[み]る', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'ดู... (แล้ว...)', thaiReading: 'มิเตะ' },
  { conjugatedRuby: '見[み]ない', dictionaryRuby: '見[み]る', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ดู', thaiReading: 'มิไน' },
  { conjugatedRuby: '見[み]た', dictionaryRuby: '見[み]る', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ดูแล้ว', thaiReading: 'มิตะ' },

  { conjugatedRuby: '起[お]きます', dictionaryRuby: '起[お]きる', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะตื่น', thaiReading: 'โอกิมาสุ' },
  { conjugatedRuby: '起[お]きて', dictionaryRuby: '起[お]きる', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'ตื่น... (แล้ว...)', thaiReading: 'โอกิเตะ' },
  { conjugatedRuby: '起[お]きない', dictionaryRuby: '起[お]きる', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ตื่น', thaiReading: 'โอกิไน' },

  // --- Group 3 ---
  { conjugatedRuby: '来[き]ます', dictionaryRuby: '来[く]る', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะมา', thaiReading: 'คิมาสุ' },
  { conjugatedRuby: '来[き]て', dictionaryRuby: '来[く]る', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'มา... (แล้ว...)', thaiReading: 'คิเตะ' },
  { conjugatedRuby: '来[こ]ない', dictionaryRuby: '来[く]る', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่มา', thaiReading: 'โคนัย' },
  { conjugatedRuby: '来[き]た', dictionaryRuby: '来[く]る', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า', meaning: 'มาแล้ว', thaiReading: 'คิตะ' },

  { conjugatedRuby: 'します', dictionaryRuby: 'する', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะทำ', thaiReading: 'ชิมาสุ' },
  { conjugatedRuby: 'して', dictionaryRuby: 'する', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'ทำ... (แล้ว...)', thaiReading: 'ชิเตะ' },
  { conjugatedRuby: 'しない', dictionaryRuby: 'する', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ทำ', thaiReading: 'ชินัย' },
  { conjugatedRuby: 'した', dictionaryRuby: 'する', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ทำแล้ว', thaiReading: 'ชิตะ' },
  
  { conjugatedRuby: '勉強[べんきょう]します', dictionaryRuby: '勉強[べんきょう]する', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะเรียน', thaiReading: 'เบนเกียวชิมาสุ' },
  { conjugatedRuby: '勉強[べんきょう]して', dictionaryRuby: '勉強[べんきょう]する', type: 'Te-form', tenseLabel: 'รูปเชื่อมประโยค', meaning: 'เรียน... (แล้ว...)', thaiReading: 'เบนเกียวชิเตะ' },
];
