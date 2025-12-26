
export interface VerbConjugation {
  conjugated: string;      // รูปที่ผันแล้ว (โจทย์)
  dictionary: string;      // รูปพจนานุกรม (คำตอบ)
  kanji?: string;          // คันจิของรูปพจนานุกรม
  type: string;            // ประเภทการผัน (เช่น Masu-form, Te-form)
  meaning: string;         // ความหมาย
  thaiReading: string;     // คำอ่านรูปที่ผันแล้ว
}

export const VERB_CONJUGATIONS: VerbConjugation[] = [
  // --- Group 1 ---
  { conjugated: 'いきます', dictionary: 'いく', kanji: '行く', type: 'Masu-form', meaning: 'ไป', thaiReading: 'อิคิมาสุ' },
  { conjugated: 'いって', dictionary: 'いく', kanji: '行く', type: 'Te-form', meaning: 'ไป', thaiReading: 'อิตเตะ' },
  { conjugated: 'いかない', dictionary: 'いく', kanji: '行く', type: 'Nai-form', meaning: 'ไม่ไป', thaiReading: 'อิคานัย' },
  { conjugated: 'いった', dictionary: 'いく', kanji: '行く', type: 'Ta-form', meaning: 'ไปแล้ว', thaiReading: 'อิตตะ' },
  
  { conjugated: 'のみます', dictionary: 'のむ', kanji: '飲む', type: 'Masu-form', meaning: 'ดื่ม', thaiReading: 'โนมิมาสุ' },
  { conjugated: 'のんで', dictionary: 'のむ', kanji: '飲む', type: 'Te-form', meaning: 'ดื่ม', thaiReading: 'นนเดะ' },
  { conjugated: 'のまない', dictionary: 'のむ', kanji: '飲む', type: 'Nai-form', meaning: 'ไม่ดื่ม', thaiReading: 'โนมานัย' },
  
  { conjugated: 'かいます', dictionary: 'かう', kanji: '買う', type: 'Masu-form', meaning: 'ซื้อ', thaiReading: 'ไคมาสุ' },
  { conjugated: 'かって', dictionary: 'かう', kanji: '買う', type: 'Te-form', meaning: 'ซื้อ', thaiReading: 'คัตเตะ' },
  { conjugated: 'かわない', dictionary: 'かう', kanji: '買う', type: 'Nai-form', meaning: 'ไม่ซื้อ', thaiReading: 'คาวานัย' },
  
  { conjugated: 'あらいます', dictionary: 'あらう', kanji: '洗う', type: 'Masu-form', meaning: 'ล้าง', thaiReading: 'อะไรมาสุ' },
  { conjugated: 'あらって', dictionary: 'あらう', kanji: '洗う', type: 'Te-form', meaning: 'ล้าง', thaiReading: 'อารัตเตะ' },
  
  { conjugated: 'まちます', dictionary: 'まつ', kanji: '待つ', type: 'Masu-form', meaning: 'รอ', thaiReading: 'มาจิมาสุ' },
  { conjugated: 'まって', dictionary: 'まつ', kanji: '待つ', type: 'Te-form', meaning: 'รอ', thaiReading: 'มัตเตะ' },
  
  { conjugated: 'あそびます', dictionary: 'あそぶ', kanji: '遊ぶ', type: 'Masu-form', meaning: 'เล่น', thaiReading: 'อาโซบิมาสุ' },
  { conjugated: 'あそんで', dictionary: 'あそぶ', kanji: '遊ぶ', type: 'Te-form', meaning: 'เล่น', thaiReading: 'อาซอนเดะ' },
  
  { conjugated: 'しにます', dictionary: 'しぬ', kanji: '死ぬ', type: 'Masu-form', meaning: 'ตาย', thaiReading: 'ชินิมาสุ' },
  { conjugated: 'しんで', dictionary: 'しぬ', kanji: '死ぬ', type: 'Te-form', meaning: 'ตาย', thaiReading: 'ชินเดะ' },

  { conjugated: 'ききます', dictionary: 'きく', kanji: '聞く', type: 'Masu-form', meaning: 'ฟัง/ถาม', thaiReading: 'คิคิมาสุ' },
  { conjugated: 'きいて', dictionary: 'きく', kanji: '聞く', type: 'Te-form', meaning: 'ฟัง/ถาม', thaiReading: 'คีเตะ' },

  { conjugated: 'およぎます', dictionary: 'およぐ', kanji: '泳ぐ', type: 'Masu-form', meaning: 'ว่ายน้ำ', thaiReading: 'โอยอกิมะสุ' },
  { conjugated: 'およいで', dictionary: 'およぐ', kanji: '泳ぐ', type: 'Te-form', meaning: 'ว่ายน้ำ', thaiReading: 'โอยอยเดะ' },

  { conjugated: 'はなします', dictionary: 'はなす', kanji: '話す', type: 'Masu-form', meaning: 'พูดคุย', thaiReading: 'ฮานาชิมาสุ' },
  { conjugated: 'はなして', dictionary: 'はなす', kanji: '話す', type: 'Te-form', meaning: 'พูดคุย', thaiReading: 'ฮานาชิเตะ' },

  // --- Group 2 ---
  { conjugated: 'たべます', dictionary: 'たべる', kanji: '食べる', type: 'Masu-form', meaning: 'กิน', thaiReading: 'ทาเบมาสุ' },
  { conjugated: 'たべて', dictionary: 'たべる', kanji: '食べる', type: 'Te-form', meaning: 'กิน', thaiReading: 'ทาเบเตะ' },
  { conjugated: 'たべない', dictionary: 'たべる', kanji: '食べる', type: 'Nai-form', meaning: 'ไม่กิน', thaiReading: 'ทาเบไน' },
  { conjugated: 'たべた', dictionary: 'たべる', kanji: '食べる', type: 'Ta-form', meaning: 'กินแล้ว', thaiReading: 'ทาเบตะ' },

  { conjugated: 'ねます', dictionary: 'ねる', kanji: '寝る', type: 'Masu-form', meaning: 'นอน', thaiReading: 'เนมาสุ' },
  { conjugated: 'ねて', dictionary: 'ねる', kanji: '寝る', type: 'Te-form', meaning: 'นอน', thaiReading: 'เนเตะ' },
  { conjugated: 'ねない', dictionary: 'ねる', kanji: '寝る', type: 'Nai-form', meaning: 'ไม่นอน', thaiReading: 'เนไน' },

  { conjugated: 'みます', dictionary: 'みる', kanji: '見る', type: 'Masu-form', meaning: 'ดู', thaiReading: 'มิมาสุ' },
  { conjugated: 'みて', dictionary: 'みる', kanji: '見る', type: 'Te-form', meaning: 'ดู', thaiReading: 'มิเตะ' },
  { conjugated: 'みない', dictionary: 'みる', kanji: '見る', type: 'Nai-form', meaning: 'ไม่ดู', thaiReading: 'มิไน' },

  { conjugated: 'おきます', dictionary: 'おきる', kanji: '起きる', type: 'Masu-form', meaning: 'ตื่น', thaiReading: 'โอกิมาสุ' },
  { conjugated: 'おきて', dictionary: 'おきる', kanji: '起きる', type: 'Te-form', meaning: 'ตื่น', thaiReading: 'โอกิเตะ' },

  { conjugated: 'かります', dictionary: 'かりる', kanji: '借りる', type: 'Masu-form', meaning: 'ขอยืม', thaiReading: 'คาริมาสุ' },
  { conjugated: 'かりて', dictionary: 'かりる', kanji: '借りる', type: 'Te-form', meaning: 'ขอยืม', thaiReading: 'คาริเตะ' },

  // --- Group 3 (Irregular) ---
  { conjugated: 'きます', dictionary: 'くる', kanji: '来る', type: 'Masu-form', meaning: 'มา', thaiReading: 'คิมาสุ' },
  { conjugated: 'きて', dictionary: 'くる', kanji: '来る', type: 'Te-form', meaning: 'มา', thaiReading: 'คิเตะ' },
  { conjugated: 'こない', dictionary: 'くる', kanji: '来る', type: 'Nai-form', meaning: 'ไม่มา', thaiReading: 'โคนัย' },
  { conjugated: 'きた', dictionary: 'くる', kanji: '来る', type: 'Ta-form', meaning: 'มาแล้ว', thaiReading: 'คิตะ' },

  { conjugated: 'します', dictionary: 'する', type: 'Masu-form', meaning: 'ทำ', thaiReading: 'ชิมาสุ' },
  { conjugated: 'して', dictionary: 'する', type: 'Te-form', meaning: 'ทำ', thaiReading: 'ชิเตะ' },
  { conjugated: 'しない', dictionary: 'する', type: 'Nai-form', meaning: 'ไม่ทำ', thaiReading: 'ชินัย' },
  { conjugated: 'した', dictionary: 'する', type: 'Ta-form', meaning: 'ทำแล้ว', thaiReading: 'ชิตะ' },

  { conjugated: 'べんきょうします', dictionary: 'べんきょうする', kanji: '勉強する', type: 'Masu-form', meaning: 'เรียน', thaiReading: 'เบนเกียวชิมาสุ' },
  { conjugated: 'べんきょうして', dictionary: 'べんきょうする', kanji: '勉強する', type: 'Te-form', meaning: 'เรียน', thaiReading: 'เบนเกียวชิเตะ' },
  { conjugated: 'さんぽします', dictionary: 'さんぽする', kanji: '散歩する', type: 'Masu-form', meaning: 'เดินเล่น', thaiReading: 'ซัมโปะชิมาสุ' },
  { conjugated: 'さんぽして', dictionary: 'さんぽする', kanji: '散歩する', type: 'Te-form', meaning: 'เดินเล่น', thaiReading: 'ซัมโปะชิเตะ' },
];
