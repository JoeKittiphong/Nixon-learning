
import { VerbConjugation } from './types.ts';

export const VERB_CONJUGATIONS: VerbConjugation[] = [
  // --- Group 1: Verbs ending in -u, -tsu, -ru, -mu, -nu, -bu, -ku, -gu, -su ---
  
  // 行く (iku) - ไป
  { conjugatedRuby: '行[い]きます', dictionaryRuby: '行[い]く', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะไป', thaiReading: 'อิคิมาสุ' },
  { conjugatedRuby: '行[い]って', dictionaryRuby: '行[い]く', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'ไป... (แล้ว)', thaiReading: 'อิตเตะ' },
  { conjugatedRuby: '行[い]かない', dictionaryRuby: '行[い]く', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่ไป', thaiReading: 'อิคานัย' },
  { conjugatedRuby: '行[い]った', dictionaryRuby: '行[い]く', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'ไปแล้ว', thaiReading: 'อิตตะ' },

  // 飲む (nomu) - ดื่ม
  { conjugatedRuby: '飲[の]みます', dictionaryRuby: '飲[の]む', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะดื่ม', thaiReading: 'โนมิมาสุ' },
  { conjugatedRuby: '飲[の]んで', dictionaryRuby: '飲[の]む', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'ดื่ม... (แล้ว)', thaiReading: 'นนเดะ' },
  { conjugatedRuby: '飲[の]まない', dictionaryRuby: '飲[の]む', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่ดื่ม', thaiReading: 'โนมานัย' },
  { conjugatedRuby: '飲[の]んだ', dictionaryRuby: '飲[の]む', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'ดื่มแล้ว', thaiReading: 'โนนดะ' },

  // 買う (kau) - ซื้อ
  { conjugatedRuby: '買[か]います', dictionaryRuby: '買[か]う', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะซื้อ', thaiReading: 'ไคมาสุ' },
  { conjugatedRuby: '買[か]って', dictionaryRuby: '買[か]う', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'ซื้อ... (แล้ว)', thaiReading: 'คัตเตะ' },
  { conjugatedRuby: '買[か]わない', dictionaryRuby: '買[か]วุ', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่ซื้อ', thaiReading: 'คาวานัย' },
  { conjugatedRuby: '買[か]った', dictionaryRuby: '買[か]う', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'ซื้อแล้ว', thaiReading: 'คัตตะ' },

  // 会う (au) - พบ/เจอ
  { conjugatedRuby: '会[あ]います', dictionaryRuby: '会[あ]う', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะพบ', thaiReading: 'ไอมาสุ' },
  { conjugatedRuby: '会[あ]って', dictionaryRuby: '会[あ]う', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'พบ... (แล้ว)', thaiReading: 'อัตเตะ' },
  { conjugatedRuby: '会[あ]わない', dictionaryRuby: '会[あ]う', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่พบ', thaiReading: 'ไอวานัย' },
  { conjugatedRuby: '会[あ]った', dictionaryRuby: '会[あ]う', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'พบแล้ว', thaiReading: 'อัตตะ' },

  // 待つ (matsu) - รอ
  { conjugatedRuby: '待[ま]ちます', dictionaryRuby: '待[ま]つ', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะรอ', thaiReading: 'มาจิมาสุ' },
  { conjugatedRuby: '待[ま]って', dictionaryRuby: '待[ま]つ', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'รอ... (แล้ว)', thaiReading: 'มัตเตะ' },
  { conjugatedRuby: '待[ま]たない', dictionaryRuby: '待[ま]つ', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่รอ', thaiReading: 'มาตานัย' },
  { conjugatedRuby: '待[ま]った', dictionaryRuby: '待[ま]つ', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'รอแล้ว', thaiReading: 'มัตตะ' },

  // 聞く (kiku) - ฟัง/ถาม
  { conjugatedRuby: '聞[き]きます', dictionaryRuby: '聞[き]く', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะฟัง/ถาม', thaiReading: 'คิคิมาสุ' },
  { conjugatedRuby: '聞[き]いて', dictionaryRuby: '聞[き]く', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'ฟัง... (แล้ว)', thaiReading: 'คีเตะ' },
  { conjugatedRuby: '聞[き]かない', dictionaryRuby: '聞[き]く', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่ฟัง', thaiReading: 'คิคานัย' },
  { conjugatedRuby: '聞[き]いた', dictionaryRuby: '聞[き]く', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'ฟังแล้ว', thaiReading: 'คีตะ' },

  // 話す (hanasu) - พูดคุย
  { conjugatedRuby: '話[はな]します', dictionaryRuby: '話[はな]す', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะพูด', thaiReading: 'ฮานาชิมาสุ' },
  { conjugatedRuby: '話[はな]して', dictionaryRuby: '話[はな]す', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'พูด... (แล้ว)', thaiReading: 'ฮานาชิเตะ' },
  { conjugatedRuby: '話[はな]さない', dictionaryRuby: '話[はな]す', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่พูด', thaiReading: 'ฮานาซานัย' },
  { conjugatedRuby: '話[はな]した', dictionaryRuby: '話[はนา]ส', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'พูดแล้ว', thaiReading: 'ฮานาชิตะ' },

  // 書く (kaku) - เขียน
  { conjugatedRuby: '書[か]きます', dictionaryRuby: '書[か]く', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะเขียน', thaiReading: 'คากิมาสุ' },
  { conjugatedRuby: '書[か]いて', dictionaryRuby: '書[か]く', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'เขียน... (แล้ว)', thaiReading: 'ไคเตะ' },
  { conjugatedRuby: '書[か]かない', dictionaryRuby: '書[か]く', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่เขียน', thaiReading: 'คากานัย' },
  { conjugatedRuby: '書[か]いた', dictionaryRuby: '書[か]く', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'เขียนแล้ว', thaiReading: 'ไคตะ' },

  // 泳ぐ (oyogu) - ว่ายน้ำ
  { conjugatedRuby: '泳[およ]ぎます', dictionaryRuby: '泳[およ]ぐ', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะว่ายน้ำ', thaiReading: 'โอยอกิมาสุ' },
  { conjugatedRuby: '泳[およ]いで', dictionaryRuby: '泳[およ]ぐ', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'ว่ายน้ำ... (แล้ว)', thaiReading: 'โอยอยเดะ' },
  { conjugatedRuby: '泳[およ]がない', dictionaryRuby: '泳[およ]ぐ', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่ว่ายน้ำ', thaiReading: 'โอยอกานัย' },
  { conjugatedRuby: '泳[およ]いだ', dictionaryRuby: '泳[อよ]กุ', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'ว่ายน้ำแล้ว', thaiReading: 'โอยอยดะ' },

  // 読む (yomu) - อ่าน
  { conjugatedRuby: '読[よ]みます', dictionaryRuby: '読[よ]む', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะอ่าน', thaiReading: 'โยมิมาสุ' },
  { conjugatedRuby: '読[よ]んで', dictionaryRuby: '読[よ]む', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'อ่าน... (แล้ว)', thaiReading: 'ยอนเดะ' },
  { conjugatedRuby: '読[よ]まない', dictionaryRuby: '読[よ]む', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่อ่าน', thaiReading: 'โยมานัย' },
  { conjugatedRuby: '読[よ]んだ', dictionaryRuby: '読[よ]む', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'อ่านแล้ว', thaiReading: 'ยอนดะ' },

  // 死ぬ (shinu) - ตาย
  { conjugatedRuby: '死[し]にます', dictionaryRuby: '死[し]ぬ', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะตาย', thaiReading: 'ชินิมาสุ' },
  { conjugatedRuby: '死[し]んで', dictionaryRuby: '死[し]ぬ', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'ตาย... (แล้ว)', thaiReading: 'ชินเดะ' },
  { conjugatedRuby: '死[し]なない', dictionaryRuby: '死[し]ぬ', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่ตาย', thaiReading: 'ชินานัย' },

  // --- Group 2: Verbs ending in -eru or -iru ---

  // 食べる (taberu) - กิน
  { conjugatedRuby: '食[た]べます', dictionaryRuby: '食[た]べる', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะกิน', thaiReading: 'ทาเบมาสุ' },
  { conjugatedRuby: '食[た]べて', dictionaryRuby: '食[た]べる', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'กิน... (แล้ว)', thaiReading: 'ทาเบเตะ' },
  { conjugatedRuby: '食[た]べない', dictionaryRuby: '食[た]べる', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่กิน', thaiReading: 'ทาเบไน' },
  { conjugatedRuby: '食[た]べた', dictionaryRuby: '食[た]べる', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'กินแล้ว', thaiReading: 'ทาเบตะ' },

  // 寝る (neru) - นอน
  { conjugatedRuby: '寝[ね]ます', dictionaryRuby: '寝[ね]る', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะนอน', thaiReading: 'เนมาสุ' },
  { conjugatedRuby: '寝[ね]て', dictionaryRuby: '寝[ね]る', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'นอน... (แล้ว)', thaiReading: 'เนเตะ' },
  { conjugatedRuby: '寝[ね]ない', dictionaryRuby: '寝[ね]る', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่นอน', thaiReading: 'เนไน' },
  { conjugatedRuby: '寝[ね]た', dictionaryRuby: '寝[ね]る', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'นอนแล้ว', thaiReading: 'เนตะ' },

  // 見る (miru) - ดู
  { conjugatedRuby: '見[み]ます', dictionaryRuby: '見[み]る', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะดู', thaiReading: 'มิมาสุ' },
  { conjugatedRuby: '見[み]て', dictionaryRuby: '見[み]る', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'ดู... (แล้ว)', thaiReading: 'มิเตะ' },
  { conjugatedRuby: '見[み]ない', dictionaryRuby: '見[み]る', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่ดู', thaiReading: 'มิไน' },
  { conjugatedRuby: '見[み]た', dictionaryRuby: '見[み]る', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'ดูแล้ว', thaiReading: 'มิตะ' },

  // 起きる (okiru) - ตื่น
  { conjugatedRuby: '起[お]กิます', dictionaryRuby: '起[お]きる', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะตื่น', thaiReading: 'โอกิมาสุ' },
  { conjugatedRuby: '起[お]กิて', dictionaryRuby: '起[お]きる', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'ตื่น... (แล้ว)', thaiReading: 'โอกิเตะ' },
  { conjugatedRuby: '起[อ]きない', dictionaryRuby: '起[อ]きる', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่ตื่น', thaiReading: 'โอกิไน' },

  // 教える (oshieru) - สอน
  { conjugatedRuby: '教[おし]えます', dictionaryRuby: '教[おし]える', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะสอน', thaiReading: 'โอชิเอะมาสุ' },
  { conjugatedRuby: '教[おし]えて', dictionaryRuby: '教[おし]える', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'สอน... (แล้ว)', thaiReading: 'โอชิเอะเตะ' },
  { conjugatedRuby: '教[おし]えない', dictionaryRuby: '教[おし]える', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่สอน', thaiReading: 'โอชิเอะไน' },

  // 忘れる (wasureru) - ลืม
  { conjugatedRuby: '忘[わす]れます', dictionaryRuby: '忘[わす]れる', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะลืม', thaiReading: 'วาซูเระมาสุ' },
  { conjugatedRuby: '忘[わす]れて', dictionaryRuby: '忘[わす]れる', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'ลืม... (แล้ว)', thaiReading: 'วาซูเระเตะ' },
  { conjugatedRuby: '忘[わす]れない', dictionaryRuby: '忘[わす]れる', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่ลืม', thaiReading: 'วาซูเระไน' },

  // 借りる (kariru) - ขอยืม
  { conjugatedRuby: '借[か]ります', dictionaryRuby: '借[か]りる', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะขอยืม', thaiReading: 'คาริมาสุ' },
  { conjugatedRuby: '借[か]りて', dictionaryRuby: '借[か]りる', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'ขอยืม... (แล้ว)', thaiReading: 'คาริเตะ' },
  { conjugatedRuby: '借[か]りない', dictionaryRuby: '借[か]りる', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่ยืม', thaiReading: 'คาริไน' },

  // --- Group 3: Irregular Verbs (Suru & Kuru) ---

  // する (suru) - ทำ
  { conjugatedRuby: 'します', dictionaryRuby: 'する', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะทำ', thaiReading: 'ชิมาสุ' },
  { conjugatedRuby: 'して', dictionaryRuby: 'する', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'ทำ... (แล้ว)', thaiReading: 'ชิเตะ' },
  { conjugatedRuby: 'しない', dictionaryRuby: 'する', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่ทำ', thaiReading: 'ชินัย' },
  { conjugatedRuby: 'した', dictionaryRuby: 'する', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'ทำแล้ว', thaiReading: 'ชิตะ' },

  // 来る (kuru) - มา
  { conjugatedRuby: '来[き]ます', dictionaryRuby: '来[く]る', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะมา', thaiReading: 'คิมาสุ' },
  { conjugatedRuby: '来[き]て', dictionaryRuby: '来[く]る', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'มา... (แล้ว)', thaiReading: 'คิเตะ' },
  { conjugatedRuby: '来[こ]ない', dictionaryRuby: '来[く]る', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่มา', thaiReading: 'โคนัย' },
  { conjugatedRuby: '来[き]た', dictionaryRuby: '来[く]る', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'มาแล้ว', thaiReading: 'คิตะ' },

  // 勉強する (benkyou suru) - เรียนหนังสือ
  { conjugatedRuby: '勉強[べんきょう]します', dictionaryRuby: '勉強[べんきょう]する', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะเรียน', thaiReading: 'เบนเกียวชิมาสุ' },
  { conjugatedRuby: '勉強[べんきょう]して', dictionaryRuby: '勉強[べんきょう]する', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'เรียน... (แล้ว)', thaiReading: 'เบนเกียวชิเตะ' },
  { conjugatedRuby: '勉強[べんきょう]しない', dictionaryRuby: '勉強[べんきょう]する', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่เรียน', thaiReading: 'เบนเกียวชินัย' },
  { conjugatedRuby: '勉強[べんきょう]した', dictionaryRuby: '勉強[べんきょう]する', type: 'Ta-form', tenseLabel: 'อดีต บอกเล่า (ธรรมดา)', meaning: 'เรียนแล้ว', thaiReading: 'เบนเกียวชิตะ' },

  // 散歩する (sanpo suru) - เดินเล่น
  { conjugatedRuby: '散歩[さんぽ]します', dictionaryRuby: '散歩[さんぽ]する', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะเดินเล่น', thaiReading: 'ซัมโปะชิมาสุ' },
  { conjugatedRuby: '散歩[さんぽ]して', dictionaryRuby: '散歩[さんぽ]する', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'เดินเล่น... (แล้ว)', thaiReading: 'ซัมโปะชิเตะ' },

  // --- More Group 1 Exceptions ---
  
  // 帰る (kaeru) - กลับ (Looks like Group 2 but is Group 1)
  { conjugatedRuby: '帰[かえ]ります', dictionaryRuby: '帰[かえ]る', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะกลับ', thaiReading: 'คาเอริมาสุ' },
  { conjugatedRuby: '帰[かえ]って', dictionaryRuby: '帰[かえ]る', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'กลับ... (แล้ว)', thaiReading: 'คาเอ็ตเตะ' },
  { conjugatedRuby: '帰[かえ]らない', dictionaryRuby: '帰[かえ]る', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่กลับ', thaiReading: 'คาเอรานัย' },

  // 入る (hairu) - เข้า (Looks like Group 2 but is Group 1)
  { conjugatedRuby: '入[はい]ります', dictionaryRuby: '入[はい]る', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะเข้า', thaiReading: 'ไฮริมาสุ' },
  { conjugatedRuby: '入[はい]って', dictionaryRuby: '入[はい]る', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'เข้า... (แล้ว)', thaiReading: 'ไฮตเตะ' },

  // 走る (hashiru) - วิ่ง (Looks like Group 2 but is Group 1)
  { conjugatedRuby: '走[はし]ります', dictionaryRuby: '走[はし]る', type: 'Masu-form', tenseLabel: 'ปัจจุบัน บอกเล่า (สุภาพ)', meaning: 'จะวิ่ง', thaiReading: 'ฮาชิริมาสุ' },
  { conjugatedRuby: '走[はし]って', dictionaryRuby: '走[はし]る', type: 'Te-form', tenseLabel: 'รูปเชื่อม / สั่ง', meaning: 'วิ่ง... (แล้ว)', thaiReading: 'ฮาชิตเตะ' },
  { conjugatedRuby: '走[はし]らない', dictionaryRuby: '走[はし]る', type: 'Nai-form', tenseLabel: 'ปัจจุบัน ปฏิเสธ (ธรรมดา)', meaning: 'ไม่วิ่ง', thaiReading: 'ฮาชิรานัย' },
];
