
import { VerbConjugation } from './types.ts';

// คลังกริยาสำหรับการเรียนรู้ 50 คำ พร้อมการผัน 7 รูปแบบ (รวม 350+ ข้อ)
export const VERB_CONJUGATIONS: VerbConjugation[] = [
  // 1. 行く (iku) - ไป
  { conjugatedRuby: '行[い]きます', dictionaryRuby: '行[い]く', baseMeaning: 'ไป', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะไป', thaiReading: 'อิคิมาสุ' },
  { conjugatedRuby: '行[い]かない', dictionaryRuby: '行[い]く', baseMeaning: 'ไป', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ไป', thaiReading: 'อิคานัย' },
  { conjugatedRuby: '行[い]った', dictionaryRuby: '行[い]く', baseMeaning: 'ไป', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ไปแล้ว', thaiReading: 'อิตตะ' },
  { conjugatedRuby: '行[い]って', dictionaryRuby: '行[い]く', baseMeaning: 'ไป', type: 'Te Form', tenseLabel: 'รูปเชื่อม/สั่ง', meaning: 'ไปซะ/กรุณาไป', thaiReading: 'อิตเตะ' },
  { conjugatedRuby: '行[い]ける', dictionaryRuby: '行[い]く', baseMeaning: 'ไป', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ไปได้', thaiReading: 'อิเคะรุ' },
  { conjugatedRuby: '行[い]こう', dictionaryRuby: '行[い]く', baseMeaning: 'ไป', type: 'Volitional', tenseLabel: 'เชิญชวน', meaning: 'ไปกันเถอะ', thaiReading: 'อิโก' },
  { conjugatedRuby: '行[い]けば', dictionaryRuby: '行[い]く', baseMeaning: 'ไป', type: 'Ba Form', tenseLabel: 'ถ้า...', meaning: 'ถ้าไป', thaiReading: 'อิเคะบะ' },

  // 2. 飲む (nomu) - ดื่ม
  { conjugatedRuby: '飲[の]みます', dictionaryRuby: '飲[の]む', baseMeaning: 'ดื่ม', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะดื่ม', thaiReading: 'โนมิมาสุ' },
  { conjugatedRuby: '飲[の]まない', dictionaryRuby: '飲[の]む', baseMeaning: 'ดื่ม', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ดื่ม', thaiReading: 'โนมานัย' },
  { conjugatedRuby: '飲[の]んだ', dictionaryRuby: '飲[の]む', baseMeaning: 'ดื่ม', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ดื่มแล้ว', thaiReading: 'โนนดะ' },
  { conjugatedRuby: '飲[の]んで', dictionaryRuby: '飲[の]む', baseMeaning: 'ดื่ม', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ดื่มซะ/กรุณาดื่ม', thaiReading: 'โนนเดะ' },
  { conjugatedRuby: '飲[の]める', dictionaryRuby: '飲[の]む', baseMeaning: 'ดื่ม', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ดื่มได้', thaiReading: 'โนเมะรุ' },
  { conjugatedRuby: '飲[の]もう', dictionaryRuby: '飲[の]む', baseMeaning: 'ดื่ม', type: 'Volitional', tenseLabel: 'เชิญชวน', meaning: 'ดื่มกันเถอะ', thaiReading: 'โนโม' },
  { conjugatedRuby: '飲[の]めば', dictionaryRuby: '飲[の]む', baseMeaning: 'ดื่ม', type: 'Ba Form', tenseLabel: 'ถ้า...', meaning: 'ถ้าดื่ม', thaiReading: 'โนเมะบะ' },

  // 3. 食べる (taberu) - กิน
  { conjugatedRuby: '食[た]べます', dictionaryRuby: '食[た]べる', baseMeaning: 'กิน', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะกิน', thaiReading: 'ทาเบมาสุ' },
  { conjugatedRuby: '食[た]べない', dictionaryRuby: '食[た]べる', baseMeaning: 'กิน', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่กิน', thaiReading: 'ทาเบไน' },
  { conjugatedRuby: '食[た]べた', dictionaryRuby: '食[た]べる', baseMeaning: 'กิน', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'กินแล้ว', thaiReading: 'ทาเบตะ' },
  { conjugatedRuby: '食[た]べて', dictionaryRuby: '食[た]べる', baseMeaning: 'กิน', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'กินซะ/กรุณากิน', thaiReading: 'ทาเบเตะ' },
  { conjugatedRuby: '食[た]べられる', dictionaryRuby: '食[た]べる', baseMeaning: 'กิน', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'กินได้', thaiReading: 'ทาเบราเระรุ' },
  { conjugatedRuby: '食[た]べよう', dictionaryRuby: '食[た]べる', baseMeaning: 'กิน', type: 'Volitional', tenseLabel: 'เชิญชวน', meaning: 'กินกันเถอะ', thaiReading: 'ทาเบโย' },
  { conjugatedRuby: '食[た]べれば', dictionaryRuby: '食[た]べる', baseMeaning: 'กิน', type: 'Ba Form', tenseLabel: 'ถ้า...', meaning: 'ถ้ากิน', thaiReading: 'ทาเบเระบะ' },

  // 4. 話す (hanasu) - พูด
  { conjugatedRuby: '話[はな]します', dictionaryRuby: '話[はな]す', baseMeaning: 'พูด', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะพูด', thaiReading: 'ฮานาชิมาสุ' },
  { conjugatedRuby: '話[はな]さない', dictionaryRuby: '話[はな]す', baseMeaning: 'พูด', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่พูด', thaiReading: 'ฮานาซานัย' },
  { conjugatedRuby: '話[はな]した', dictionaryRuby: '話[はな]す', baseMeaning: 'พูด', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'พูดแล้ว', thaiReading: 'ฮานาชิตะ' },
  { conjugatedRuby: '話[はな]して', dictionaryRuby: '話[はな]す', baseMeaning: 'พูด', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'พูดออกมา/กรุณาพูด', thaiReading: 'ฮานาชิเตะ' },
  { conjugatedRuby: '話[はな]せる', dictionaryRuby: '話[はな]す', baseMeaning: 'พูด', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'พูดได้', thaiReading: 'ฮานาเซะรุ' },
  { conjugatedRuby: '話[はな]そう', dictionaryRuby: '話[はな]す', baseMeaning: 'พูด', type: 'Volitional', tenseLabel: 'เชิญชวน', meaning: 'พูดกันเถอะ', thaiReading: 'ฮานาโซ' },

  // 5. 書く (kaku) - เขียน
  { conjugatedRuby: '書[か]きます', dictionaryRuby: '書[か]く', baseMeaning: 'เขียน', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะเขียน', thaiReading: 'คากิมาสุ' },
  { conjugatedRuby: '書[か]かない', dictionaryRuby: '書[か]く', baseMeaning: 'เขียน', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่เขียน', thaiReading: 'คากาไน' },
  { conjugatedRuby: '書[か]いた', dictionaryRuby: '書[か]く', baseMeaning: 'เขียน', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'เขียนแล้ว', thaiReading: 'ไคตะ' },
  { conjugatedRuby: '書[か]いて', dictionaryRuby: '書[か]く', baseMeaning: 'เขียน', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'เขียนซะ/กรุณาเขียน', thaiReading: 'ไคเตะ' },
  { conjugatedRuby: '書[か]ける', dictionaryRuby: '書[か]く', baseMeaning: 'เขียน', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'เขียนได้', thaiReading: 'คาเคะรุ' },
  { conjugatedRuby: '書[か]こう', dictionaryRuby: '書[か]く', baseMeaning: 'เขียน', type: 'Volitional', tenseLabel: 'เชิญชวน', meaning: 'เขียนกันเถอะ', thaiReading: 'คาโก' },

  // 6. 泳ぐ (oyogu) - ว่ายน้ำ
  { conjugatedRuby: '泳[およ]ぎます', dictionaryRuby: '泳[およ]ぐ', baseMeaning: 'ว่ายน้ำ', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะว่ายน้ำ', thaiReading: 'โอยอกิมาสุ' },
  { conjugatedRuby: '泳[およ]がない', dictionaryRuby: '泳[およ]ぐ', baseMeaning: 'ว่ายน้ำ', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ว่ายน้ำ', thaiReading: 'โอยอกาไน' },
  { conjugatedRuby: '泳[およ]いだ', dictionaryRuby: '泳[およ]ぐ', baseMeaning: 'ว่ายน้ำ', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ว่ายน้ำแล้ว', thaiReading: 'โอยอยดะ' },
  { conjugatedRuby: '泳[およ]いで', dictionaryRuby: '泳[およ]ぐ', baseMeaning: 'ว่ายน้ำ', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ว่ายน้ำไป/กรุณาว่ายน้ำ', thaiReading: 'โอยอยเดะ' },
  { conjugatedRuby: '泳[およ]げる', dictionaryRuby: '泳[およ]ぐ', baseMeaning: 'ว่ายน้ำ', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ว่ายน้ำได้', thaiReading: 'โอยอเกะรุ' },

  // 7. 待つ (matsu) - รอ
  { conjugatedRuby: '待[ま]ちます', dictionaryRuby: '待[ま]つ', baseMeaning: 'รอ', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะรอ', thaiReading: 'มาจิมาสุ' },
  { conjugatedRuby: '待[ま]たない', dictionaryRuby: '待[ま]つ', baseMeaning: 'รอ', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่รอ', thaiReading: 'มาตาไน' },
  { conjugatedRuby: '待[ま]った', dictionaryRuby: '待[ま]つ', baseMeaning: 'รอ', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'รอแล้ว', thaiReading: 'มัตตะ' },
  { conjugatedRuby: '待[ま]って', dictionaryRuby: '待[ま]つ', baseMeaning: 'รอ', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'รอเดี๋ยว/กรุณารอ', thaiReading: 'มัตเตะ' },
  { conjugatedRuby: '待[ま]てる', dictionaryRuby: '待[ま]つ', baseMeaning: 'รอ', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'รอได้', thaiReading: 'มาเตะรุ' },

  // 8. 遊ぶ (asobu) - เล่น
  { conjugatedRuby: '遊[あそ]びます', dictionaryRuby: '遊[あそ]ぶ', baseMeaning: 'เล่น', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะเล่น', thaiReading: 'อาโซบิมาสุ' },
  { conjugatedRuby: '遊[あそ]ばない', dictionaryRuby: '遊[あそ]ぶ', baseMeaning: 'เล่น', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่เล่น', thaiReading: 'อาโซบาไน' },
  { conjugatedRuby: '遊[あそ]んだ', dictionaryRuby: '遊[あそ]ぶ', baseMeaning: 'เล่น', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'เล่นแล้ว', thaiReading: 'อาซอนดะ' },
  { conjugatedRuby: '遊[あそ]んで', dictionaryRuby: '遊[あそ]ぶ', baseMeaning: 'เล่น', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'เล่นซะ', thaiReading: 'อาซอนเดะ' },
  { conjugatedRuby: '遊[あそ]べる', dictionaryRuby: '遊[あそ]ぶ', baseMeaning: 'เล่น', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'เล่นได้', thaiReading: 'อาโซเบะรุ' },

  // 9. 帰る (kaeru) - กลับ
  { conjugatedRuby: '帰[かえ]ります', dictionaryRuby: '帰[かえ]る', baseMeaning: 'กลับ', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะกลับ', thaiReading: 'คาเอริมาสุ' },
  { conjugatedRuby: '帰[かえ]らない', dictionaryRuby: '帰[かえ]る', baseMeaning: 'กลับ', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่กลับ', thaiReading: 'คาเอราไน' },
  { conjugatedRuby: '帰[かえ]った', dictionaryRuby: '帰[かえ]る', baseMeaning: 'กลับ', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'กลับแล้ว', thaiReading: 'คาเอตตะ' },
  { conjugatedRuby: '帰[かえ]って', dictionaryRuby: '帰[かえ]る', baseMeaning: 'กลับ', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'กลับไปซะ/กรุณากลับ', thaiReading: 'คาเอตเตะ' },
  { conjugatedRuby: '帰[かえ]れる', dictionaryRuby: '帰[かえ]る', baseMeaning: 'กลับ', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'กลับได้', thaiReading: 'คาเอเระรุ' },

  // 10. 買う (kau) - ซื้อ
  { conjugatedRuby: '買[か]います', dictionaryRuby: '買[か]う', baseMeaning: 'ซื้อ', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะซื้อ', thaiReading: 'ไคมาสุ' },
  { conjugatedRuby: '買[か]わない', dictionaryRuby: '買[か]う', baseMeaning: 'ซื้อ', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ซื้อ', thaiReading: 'คาวานัย' },
  { conjugatedRuby: '買[か]った', dictionaryRuby: '買[か]う', baseMeaning: 'ซื้อ', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ซื้อแล้ว', thaiReading: 'คัตตะ' },
  { conjugatedRuby: '買[か]って', dictionaryRuby: '買[か]う', baseMeaning: 'ซื้อ', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ซื้อมา/กรุณาซื้อ', thaiReading: 'คัตเตะ' },
  { conjugatedRuby: '買[か]える', dictionaryRuby: '買[か]う', baseMeaning: 'ซื้อ', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ซื้อได้', thaiReading: 'ไคเระรุ' },

  // 11. 会う (au) - เจอ
  { conjugatedRuby: '会[あ]います', dictionaryRuby: '会[あ]う', baseMeaning: 'เจอ', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะเจอ', thaiReading: 'ไอมาสุ' },
  { conjugatedRuby: '会[あ]わない', dictionaryRuby: '会[あ]う', baseMeaning: 'เจอ', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่เจอ', thaiReading: 'อาวาไน' },
  { conjugatedRuby: '会[あ]った', dictionaryRuby: '会[あ]う', baseMeaning: 'เจอ', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'เจอแล้ว', thaiReading: 'อัตตะ' },
  { conjugatedRuby: '会[あ]って', dictionaryRuby: '会[あ]う', baseMeaning: 'เจอ', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'เจอเข้า/กรุณาไปเจอ', thaiReading: 'อัตเตะ' },
  { conjugatedRuby: '会[あ]える', dictionaryRuby: '会[あ]う', baseMeaning: 'เจอ', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'เจอได้', thaiReading: 'อาเอะรุ' },

  // 12. 読む (yomu) - อ่าน
  { conjugatedRuby: '読[よ]みます', dictionaryRuby: '読[よ]む', baseMeaning: 'อ่าน', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะอ่าน', thaiReading: 'โยมิมาสุ' },
  { conjugatedRuby: '読[よ]まない', dictionaryRuby: '読[よ]む', baseMeaning: 'อ่าน', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่อ่าน', thaiReading: 'โยมาไน' },
  { conjugatedRuby: '読[よ]んだ', dictionaryRuby: '読[よ]む', baseMeaning: 'อ่าน', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'อ่านแล้ว', thaiReading: 'ยอนดะ' },
  { conjugatedRuby: '読[よ]んで', dictionaryRuby: '読[よ]む', baseMeaning: 'อ่าน', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'อ่านซะ/กรุณาอ่าน', thaiReading: 'ยอนเดะ' },
  { conjugatedRuby: '読[よ]める', dictionaryRuby: '読[よ]む', baseMeaning: 'อ่าน', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'อ่านได้', thaiReading: 'โยเมะรุ' },

  // 13. 死ぬ (shinu) - ตาย
  { conjugatedRuby: '死[し]にます', dictionaryRuby: '死[し]ぬ', baseMeaning: 'ตาย', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะตาย', thaiReading: 'ชินิมาสุ' },
  { conjugatedRuby: '死[し]なない', dictionaryRuby: '死[し]ぬ', baseMeaning: 'ตาย', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ตาย', thaiReading: 'ชินาไน' },
  { conjugatedRuby: '死[し]んだ', dictionaryRuby: '死[し]ぬ', baseMeaning: 'ตาย', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ตายแล้ว', thaiReading: 'ชินดะ' },
  { conjugatedRuby: '死[し]んで', dictionaryRuby: '死[し]ぬ', baseMeaning: 'ตาย', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ตายซะ', thaiReading: 'ชินเดะ' },
  { conjugatedRuby: '死[し]ねる', dictionaryRuby: '死[し]ぬ', baseMeaning: 'ตาย', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ตายได้', thaiReading: 'ชิเนะรุ' },

  // 14. 走る (hashiru) - วิ่ง
  { conjugatedRuby: '走[はし]ります', dictionaryRuby: '走[はし]る', baseMeaning: 'วิ่ง', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะวิ่ง', thaiReading: 'ฮาชิริมาสุ' },
  { conjugatedRuby: '走[はし]らない', dictionaryRuby: '走[はし]る', baseMeaning: 'วิ่ง', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่วิ่ง', thaiReading: 'ฮาชิราไน' },
  { conjugatedRuby: '走[はし]った', dictionaryRuby: '走[はし]る', baseMeaning: 'วิ่ง', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'วิ่งแล้ว', thaiReading: 'ฮาชิตตะ' },
  { conjugatedRuby: '走[はし]って', dictionaryRuby: '走[はし]る', baseMeaning: 'วิ่ง', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'วิ่งซะ/กรุณาวิ่ง', thaiReading: 'ฮาชิตเตะ' },
  { conjugatedRuby: '走[はし]れる', dictionaryRuby: '走[はし]る', baseMeaning: 'วิ่ง', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'วิ่งได้', thaiReading: 'ฮาชิเระรุ' },

  // 15. 座る (suwaru) - นั่ง
  { conjugatedRuby: '座[すわ]ります', dictionaryRuby: '座[すわ]る', baseMeaning: 'นั่ง', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะนั่ง', thaiReading: 'ซุวาริมาสุ' },
  { conjugatedRuby: '座[すわ]らない', dictionaryRuby: '座[すわ]る', baseMeaning: 'นั่ง', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่นั่ง', thaiReading: 'ซุวาราไน' },
  { conjugatedRuby: '座[すわ]った', dictionaryRuby: '座[すわ]る', baseMeaning: 'นั่ง', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'นั่งแล้ว', thaiReading: 'ซุวัตตะ' },
  { conjugatedRuby: '座[すわ]って', dictionaryRuby: '座[すわ]る', baseMeaning: 'นั่ง', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'นั่งลง/กรุณานั่ง', thaiReading: 'ซุวัตเตะ' },
  { conjugatedRuby: '座[すわ]れる', dictionaryRuby: '座[すわ]る', baseMeaning: 'นั่ง', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'นั่งได้', thaiReading: 'ซุวาเระรุ' },

  // 16. 聞く (kiku) - ฟัง/ถาม
  { conjugatedRuby: '聞[き]きます', dictionaryRuby: '聞[き]く', baseMeaning: 'ฟัง', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะฟัง', thaiReading: 'คิกิมาสุ' },
  { conjugatedRuby: '聞[き]かない', dictionaryRuby: '聞[き]く', baseMeaning: 'ฟัง', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ฟัง', thaiReading: 'คิกาไน' },
  { conjugatedRuby: '聞[き]いた', dictionaryRuby: '聞[き]く', baseMeaning: 'ฟัง', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ฟังแล้ว', thaiReading: 'คีตะ' },
  { conjugatedRuby: '聞[き]いて', dictionaryRuby: '聞[き]く', baseMeaning: 'ฟัง', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ฟังซะ/กรุณาฟัง', thaiReading: 'คีเตะ' },
  { conjugatedRuby: '聞[き]ける', dictionaryRuby: '聞[き]く', baseMeaning: 'ฟัง', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ฟังได้', thaiReading: 'คิเคะรุ' },

  // 17. 寝る (neru) - นอน
  { conjugatedRuby: '寝[ね]ます', dictionaryRuby: '寝[ね]る', baseMeaning: 'นอน', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะนอน', thaiReading: 'เนมาสุ' },
  { conjugatedRuby: '寝[ね]ない', dictionaryRuby: '寝[ね]る', baseMeaning: 'นอน', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่นอน', thaiReading: 'เนไน' },
  { conjugatedRuby: '寝[ね]った', dictionaryRuby: '寝[ね]る', baseMeaning: 'นอน', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'นอนแล้ว', thaiReading: 'เนตะ' },
  { conjugatedRuby: '寝[ね]て', dictionaryRuby: '寝[ね]る', baseMeaning: 'นอน', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'นอนซะ/กรุณานอน', thaiReading: 'เนเตะ' },
  { conjugatedRuby: '寝[ね]られる', dictionaryRuby: '寝[ね]る', baseMeaning: 'นอน', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'นอนได้', thaiReading: 'เนราเระรุ' },

  // 18. 起きる (okiru) - ตื่น
  { conjugatedRuby: '起[お]きます', dictionaryRuby: '起[お]きる', baseMeaning: 'ตื่น', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะตื่น', thaiReading: 'โอกิมาสุ' },
  { conjugatedRuby: '起[お]きない', dictionaryRuby: '起[お]きる', baseMeaning: 'ตื่น', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ตื่น', thaiReading: 'โอกิไน' },
  { conjugatedRuby: '起[お]きた', dictionaryRuby: '起[お]きる', baseMeaning: 'ตื่น', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ตื่นแล้ว', thaiReading: 'โอกิตะ' },
  { conjugatedRuby: '起[お]きて', dictionaryRuby: '起[お]きる', baseMeaning: 'ตื่น', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ตื่นซะ/กรุณาตื่น', thaiReading: 'โอกิเตะ' },
  { conjugatedRuby: '起[お]きられる', dictionaryRuby: '起[お]きる', baseMeaning: 'ตื่น', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ตื่นได้', thaiReading: 'โอกิราเระรุ' },

  // 19. 始める (hajimeru) - เริ่ม
  { conjugatedRuby: '始[はじ]めます', dictionaryRuby: '始[はじ]める', baseMeaning: 'เริ่ม', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะเริ่ม', thaiReading: 'ฮาจิเมะมาสุ' },
  { conjugatedRuby: '始[はじ]めない', dictionaryRuby: '始[はじ]める', baseMeaning: 'เริ่ม', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่เริ่ม', thaiReading: 'ฮาจิเมะไน' },
  { conjugatedRuby: '始[はじ]めた', dictionaryRuby: '始[はじ]める', baseMeaning: 'เริ่ม', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'เริ่มแล้ว', thaiReading: 'ฮาจิเมะตะ' },
  { conjugatedRuby: '始[はじ]めて', dictionaryRuby: '始[はじ]める', baseMeaning: 'เริ่ม', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'เริ่มซะ/กรุณาเริ่ม', thaiReading: 'ฮาจิเมะเตะ' },
  { conjugatedRuby: '始[はじ]められる', dictionaryRuby: '始[はじ]める', baseMeaning: 'เริ่ม', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'เริ่มได้', thaiReading: 'ฮาจิเมะราเระรุ' },

  // 20. 終わる (owaru) - จบ/เสร็จ
  { conjugatedRuby: '終[お]わります', dictionaryRuby: '終[お]わる', baseMeaning: 'จบ/เสร็จ', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะจบ', thaiReading: 'โอวาริมาสุ' },
  { conjugatedRuby: '終[お]わらない', dictionaryRuby: '終[お]わる', baseMeaning: 'จบ/เสร็จ', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่จบ', thaiReading: 'โอวาราไน' },
  { conjugatedRuby: '終[お]わった', dictionaryRuby: '終[お]わる', baseMeaning: 'จบ/เสร็จ', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'จบแล้ว', thaiReading: 'โอวารัตตะ' },
  { conjugatedRuby: '終[お]わって', dictionaryRuby: '終[お]わる', baseMeaning: 'จบ/เสร็จ', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ทำให้จบซะ', thaiReading: 'โอวารัตเตะ' },
  { conjugatedRuby: '終[お]われる', dictionaryRuby: '終[อ]わる', baseMeaning: 'จบ/เสร็จ', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'จบได้', thaiReading: 'โอวาเระรุ' },

  // 21. 見る (miru) - ดู
  { conjugatedRuby: '見[み]ます', dictionaryRuby: '見[み]る', baseMeaning: 'ดู', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะดู', thaiReading: 'มิมาสุ' },
  { conjugatedRuby: '見[み]ない', dictionaryRuby: '見[み]る', baseMeaning: 'ดู', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ดู', thaiReading: 'มิไน' },
  { conjugatedRuby: '見[み]た', dictionaryRuby: '見[み]る', baseMeaning: 'ดู', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ดูแล้ว', thaiReading: 'มิตะ' },
  { conjugatedRuby: '見[み]て', dictionaryRuby: '見[み]る', baseMeaning: 'ดู', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ดูซะ/กรุณาดู', thaiReading: 'มิเตะ' },
  { conjugatedRuby: '見[み]られる', dictionaryRuby: '見[み]る', baseMeaning: 'ดู', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ดูได้', thaiReading: 'มิราเระรุ' },
  { conjugatedRuby: '見[み]よう', dictionaryRuby: '見[み]る', baseMeaning: 'ดู', type: 'Volitional', tenseLabel: 'เชิญชวน', meaning: 'ดูกันเถอะ', thaiReading: 'มิโย' },

  // 22. 作る (tsukuru) - ทำ/ผลิต
  { conjugatedRuby: '作[つく]ります', dictionaryRuby: '作[つく]る', baseMeaning: 'ทำ', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะทำ', thaiReading: 'ทสึคุริมาสุ' },
  { conjugatedRuby: '作[つく]らない', dictionaryRuby: '作[つく]る', baseMeaning: 'ทำ', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ทำ', thaiReading: 'ทสึคุราไน' },
  { conjugatedRuby: '作[つく]った', dictionaryRuby: '作[つく]る', baseMeaning: 'ทำ', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ทำแล้ว', thaiReading: 'ทสึคุตตะ' },
  { conjugatedRuby: '作[つく]って', dictionaryRuby: '作[つく]る', baseMeaning: 'ทำ', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ทำซะ/กรุณาทำ', thaiReading: 'ทสึคุตเตะ' },
  { conjugatedRuby: '作[つく]れる', dictionaryRuby: '作[つく]る', baseMeaning: 'ทำ', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ทำได้', thaiReading: 'ทสึคุเระรุ' },

  // 23. 分かる (wakaru) - เข้าใจ
  { conjugatedRuby: '分[わ]かります', dictionaryRuby: '分[わ]かる', baseMeaning: 'เข้าใจ', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะเข้าใจ', thaiReading: 'วากาวุมาสุ' },
  { conjugatedRuby: '分[わ]からない', dictionaryRuby: '分[わ]かる', baseMeaning: 'เข้าใจ', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่เข้าใจ', thaiReading: 'วากาวาไน' },
  { conjugatedRuby: '分[わ]かった', dictionaryRuby: '分[わ]かる', baseMeaning: 'เข้าใจ', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'เข้าใจแล้ว', thaiReading: 'วากาวัตตะ' },
  { conjugatedRuby: '分[わ]かって', dictionaryRuby: '分[わ]かる', baseMeaning: 'เข้าใจ', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'เข้าใจทีเถอะ', thaiReading: 'วากาวัตเตะ' },
  { conjugatedRuby: '分[わ]かれる', dictionaryRuby: '分[わ]かる', baseMeaning: 'เข้าใจ', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'เข้าใจได้', thaiReading: 'วากาเระรุ' },

  // 24. 呼ぶ (yobu) - เรียก
  { conjugatedRuby: '呼[よ]びます', dictionaryRuby: '呼[よ]ぶ', baseMeaning: 'เรียก', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะเรียก', thaiReading: 'โยบิมาสุ' },
  { conjugatedRuby: '呼[よ]ばない', dictionaryRuby: '呼[よ]ぶ', baseMeaning: 'เรียก', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่เรียก', thaiReading: 'โยบานัย' },
  { conjugatedRuby: '呼[よ]んだ', dictionaryRuby: '呼[よ]ぶ', baseMeaning: 'เรียก', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'เรียกแล้ว', thaiReading: 'ยอนดะ' },
  { conjugatedRuby: '呼[よ]んで', dictionaryRuby: '呼[よ]ぶ', baseMeaning: 'เรียก', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'เรียกมาซะ', thaiReading: 'ยอนเดะ' },
  { conjugatedRuby: '呼[よ]べる', dictionaryRuby: '呼[よ]ぶ', baseMeaning: 'เรียก', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'เรียกได้', thaiReading: 'โยเระรุ' },

  // 25. 送る (okuru) - ส่ง
  { conjugatedRuby: '送[おく]ります', dictionaryRuby: '送[おく]る', baseMeaning: 'ส่ง', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะส่ง', thaiReading: 'โอกุริมาสุ' },
  { conjugatedRuby: '送[おく]らない', dictionaryRuby: '送[おく]る', baseMeaning: 'ส่ง', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ส่ง', thaiReading: 'โอกุราไน' },
  { conjugatedRuby: '送[おく]った', dictionaryRuby: '送[おく]る', baseMeaning: 'ส่ง', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ส่งแล้ว', thaiReading: 'โอกุรุตตะ' },
  { conjugatedRuby: '送[おく]って', dictionaryRuby: '送[おく]る', baseMeaning: 'ส่ง', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ส่งไปซะ/กรุณาส่ง', thaiReading: 'โอกุรุตเตะ' },
  { conjugatedRuby: '送[おく]れる', dictionaryRuby: '送[おく]る', baseMeaning: 'ส่ง', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ส่งได้', thaiReading: 'โอกุเระรุ' },

  // 26. 置く (oku) - วาง
  { conjugatedRuby: '置[お]きます', dictionaryRuby: '置[お]く', baseMeaning: 'วาง', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะวาง', thaiReading: 'โอกิมาสุ' },
  { conjugatedRuby: '置[お]かない', dictionaryRuby: '置[お]く', baseMeaning: 'วาง', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่วาง', thaiReading: 'โอกาไน' },
  { conjugatedRuby: '置[お]いた', dictionaryRuby: '置[お]く', baseMeaning: 'วาง', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'วางแล้ว', thaiReading: 'โออิตะ' },
  { conjugatedRuby: '置[お]いて', dictionaryRuby: '置[お]く', baseMeaning: 'วาง', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'วางลงซะ', thaiReading: 'โออิเตะ' },
  { conjugatedRuby: '置[お]ける', dictionaryRuby: '置[お]く', baseMeaning: 'วาง', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'วางได้', thaiReading: 'โอเคะรุ' },

  // 27. 使う (tsukau) - ใช้
  { conjugatedRuby: '使[つか]います', dictionaryRuby: '使[つか]う', baseMeaning: 'ใช้', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะใช้', thaiReading: 'ทสึกาอิมาสุ' },
  { conjugatedRuby: '使[つか]わない', dictionaryRuby: '使[つか]う', baseMeaning: 'ใช้', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ใช้', thaiReading: 'ทสึกาวาไน' },
  { conjugatedRuby: '使[つか]った', dictionaryRuby: '使[つか]う', baseMeaning: 'ใช้', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ใช้แล้ว', thaiReading: 'ทสึกัตตะ' },
  { conjugatedRuby: '使[つか]って', dictionaryRuby: '使[つか]う', baseMeaning: 'ใช้', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ใช้ซะ/กรุณาใช้', thaiReading: 'ทสึกัตเตะ' },
  { conjugatedRuby: '使[つか]える', dictionaryRuby: '使[つか]う', baseMeaning: 'ใช้', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ใช้ได้', thaiReading: 'ทสึกาเอะรุ' },

  // 28. 休む (yasumu) - พักผ่อน
  { conjugatedRuby: '休[やす]みます', dictionaryRuby: '休[やす]む', baseMeaning: 'พักผ่อน', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะพัก', thaiReading: 'ยาซูมิมาสุ' },
  { conjugatedRuby: '休[やす]まない', dictionaryRuby: '休[やす]む', baseMeaning: 'พักผ่อน', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่พัก', thaiReading: 'ยาซูมาไน' },
  { conjugatedRuby: '休[やす]んだ', dictionaryRuby: '休[やす]む', baseMeaning: 'พักผ่อน', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'พักแล้ว', thaiReading: 'ยาซูนดะ' },
  { conjugatedRuby: '休[やす]んで', dictionaryRuby: '休[やす]む', baseMeaning: 'พักผ่อน', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'พักผ่อนซะ/กรุณาพัก', thaiReading: 'ยาซูนเดะ' },
  { conjugatedRuby: '休[やす]める', dictionaryRuby: '休[やす]む', baseMeaning: 'พักผ่อน', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'พักได้', thaiReading: 'ยาซูเมะรุ' },

  // 29. 洗う (arau) - ล้าง
  { conjugatedRuby: '洗[あら]います', dictionaryRuby: '洗[あら]う', baseMeaning: 'ล้าง', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะล้าง', thaiReading: 'อาราอิมาสุ' },
  { conjugatedRuby: '洗[あら]わない', dictionaryRuby: '洗[あら]う', baseMeaning: 'ล้าง', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ล้าง', thaiReading: 'อารามาไน' },
  { conjugatedRuby: '洗[あら]った', dictionaryRuby: '洗[あら]う', baseMeaning: 'ล้าง', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ล้างแล้ว', thaiReading: 'อารัตตะ' },
  { conjugatedRuby: '洗[あら]って', dictionaryRuby: '洗[あら]う', baseMeaning: 'ล้าง', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ล้างซะ/กรุณาล้าง', thaiReading: 'อารัตเตะ' },
  { conjugatedRuby: '洗[あら]える', dictionaryRuby: '洗[あら]う', baseMeaning: 'ล้าง', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ล้างได้', thaiReading: 'อาราเอะรุ' },

  // 30. 歌う (utau) - ร้องเพลง
  { conjugatedRuby: '歌[うた]います', dictionaryRuby: '歌[うた]う', baseMeaning: 'ร้องเพลง', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะร้องเพลง', thaiReading: 'อูตาอิมาสุ' },
  { conjugatedRuby: '歌[うた]わない', dictionaryRuby: '歌[うた]う', baseMeaning: 'ร้องเพลง', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ร้องเพลง', thaiReading: 'อูตามาไน' },
  { conjugatedRuby: '歌[うた]った', dictionaryRuby: '歌[うた]う', baseMeaning: 'ร้องเพลง', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ร้องเพลงแล้ว', thaiReading: 'อูตัตตะ' },
  { conjugatedRuby: '歌[うた]って', dictionaryRuby: '歌[うた]う', baseMeaning: 'ร้องเพลง', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ร้องออกมาซะ/กรุณาร้อง', thaiReading: 'อูตัตเตะ' },
  { conjugatedRuby: '歌[うた]える', dictionaryRuby: '歌[うた]う', baseMeaning: 'ร้องเพลง', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ร้องได้', thaiReading: 'อูตาเอะรุ' },

  // 31. 入る (hairu) - เข้า
  { conjugatedRuby: '入[はい]ります', dictionaryRuby: '入[はい]る', baseMeaning: 'เข้า', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะเข้า', thaiReading: 'ไฮริมาสุ' },
  { conjugatedRuby: '入[はい]らない', dictionaryRuby: '入[はい]る', baseMeaning: 'เข้า', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่เข้า', thaiReading: 'ไฮราไน' },
  { conjugatedRuby: '入[はい]った', dictionaryRuby: '入[はい]る', baseMeaning: 'เข้า', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'เข้าแล้ว', thaiReading: 'ไฮรุตตะ' },
  { conjugatedRuby: '入[はい]って', dictionaryRuby: '入[はい]る', baseMeaning: 'เข้า', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'เข้ามาซะ/กรุณาเข้า', thaiReading: 'ไฮรุตเตะ' },
  { conjugatedRuby: '入[はい]れる', dictionaryRuby: '入[はい]る', baseMeaning: 'เข้า', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'เข้าได้', thaiReading: 'ไฮเระรุ' },

  // 32. 借りる (kariru) - ขอยืม
  { conjugatedRuby: '借[か]ります', dictionaryRuby: '借[か]りる', baseMeaning: 'ขอยืม', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะยืม', thaiReading: 'คาริมาสุ' },
  { conjugatedRuby: '借[か]りない', dictionaryRuby: '借[か]りล', baseMeaning: 'ขอยืม', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ยืม', thaiReading: 'คาริไน' },
  { conjugatedRuby: '借[か]りた', dictionaryRuby: '借[か]りる', baseMeaning: 'ขอยืม', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ยืมแล้ว', thaiReading: 'คาริตะ' },
  { conjugatedRuby: '借[か]りて', dictionaryRuby: '借[か]りる', baseMeaning: 'ขอยืม', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ยืมไปซะ/กรุณายืม', thaiReading: 'คาริเตะ' },
  { conjugatedRuby: '借[か]りられる', dictionaryRuby: '借[か]りる', baseMeaning: 'ขอยืม', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ยืมได้', thaiReading: 'คาริราเระรุ' },

  // 33. 貸す (kasu) - ให้ยืม
  { conjugatedRuby: '貸[か]します', dictionaryRuby: '貸[か]す', baseMeaning: 'ให้ยืม', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะให้ยืม', thaiReading: 'คาชิมาสุ' },
  { conjugatedRuby: '貸[か]さない', dictionaryRuby: '貸[か]す', baseMeaning: 'ให้ยืม', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ให้ยืม', thaiReading: 'คาซานัย' },
  { conjugatedRuby: '貸[か]した', dictionaryRuby: '貸[か]す', baseMeaning: 'ให้ยืม', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ให้ยืมแล้ว', thaiReading: 'คาชิตะ' },
  { conjugatedRuby: '貸[か]して', dictionaryRuby: '貸[か]す', baseMeaning: 'ให้ยืม', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ให้ยืมซะ/กรุณาให้ยืม', thaiReading: 'คาชิเตะ' },
  { conjugatedRuby: '貸[か]せる', dictionaryRuby: '貸[か]す', baseMeaning: 'ให้ยืม', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ให้ยืมได้', thaiReading: 'คาเซะรุ' },

  // 34. 覚える (oboeru) - จดจำ
  { conjugatedRuby: '覚[おぼ]えます', dictionaryRuby: '覚[おぼ]える', baseMeaning: 'จดจำ', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะจำ', thaiReading: 'โอโบเอะมาสุ' },
  { conjugatedRuby: '覚[おぼ]えない', dictionaryRuby: '覚[おぼ]える', baseMeaning: 'จดจำ', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่จำ', thaiReading: 'โอโบเอะไน' },
  { conjugatedRuby: '覚[おぼ]えた', dictionaryRuby: '覚[おぼ]える', baseMeaning: 'จดจำ', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'จำแล้ว', thaiReading: 'โอโบเอะตะ' },
  { conjugatedRuby: '覚[おぼ]えて', dictionaryRuby: '覚[おぼ]える', baseMeaning: 'จดจำ', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'จำซะ/กรุณาจำ', thaiReading: 'โอโบเอะเตะ' },
  { conjugatedRuby: '覚[おぼ]えられる', dictionaryRuby: '覚[おぼ]える', baseMeaning: 'จดจำ', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'จำได้', thaiReading: 'โอโบเอะราเระรุ' },

  // 35. 忘れる (wasureru) - ลืม
  { conjugatedRuby: '忘[わす]れます', dictionaryRuby: '忘[わす]れる', baseMeaning: 'ลืม', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะลืม', thaiReading: 'วาซูเระมาสุ' },
  { conjugatedRuby: '忘[わす]れない', dictionaryRuby: '忘[わす]れる', baseMeaning: 'ลืม', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ลืม', thaiReading: 'วาซูเระไน' },
  { conjugatedRuby: '忘[わす]れた', dictionaryRuby: '忘[わす]れる', baseMeaning: 'ลืม', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ลืมแล้ว', thaiReading: 'วาซูเระตะ' },
  { conjugatedRuby: '忘[わす]れて', dictionaryRuby: '忘[わす]れる', baseMeaning: 'ลืม', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ลืมซะ', thaiReading: 'วาซูเระเตะ' },
  { conjugatedRuby: '忘[わす]れられる', dictionaryRuby: '忘[わす]れる', baseMeaning: 'ลืม', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ลืมได้', thaiReading: 'วาซูเระราเระรุ' },

  // 36. 降りる (oriru) - ลง
  { conjugatedRuby: '降[お]ります', dictionaryRuby: '降[お]りる', baseMeaning: 'ลง', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะลง', thaiReading: 'โอริมาสุ' },
  { conjugatedRuby: '降[お]りない', dictionaryRuby: '降[お]りる', baseMeaning: 'ลง', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ลง', thaiReading: 'โอริไน' },
  { conjugatedRuby: '降[お]りた', dictionaryRuby: '降[お]りる', baseMeaning: 'ลง', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ลงแล้ว', thaiReading: 'โอริตะ' },
  { conjugatedRuby: '降[お]りて', dictionaryRuby: '降[お]りる', baseMeaning: 'ลง', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ลงไปซะ/กรุณาลง', thaiReading: 'โอริเตะ' },
  { conjugatedRuby: '降[お]りられる', dictionaryRuby: '降[お]りる', baseMeaning: 'ลง', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ลงได้', thaiReading: 'โอริราเระรุ' },

  // 37. 教える (oshieru) - สอน
  { conjugatedRuby: '教[おし]えます', dictionaryRuby: '教[おし]える', baseMeaning: 'สอน', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะสอน', thaiReading: 'โอชิเอะมาสุ' },
  { conjugatedRuby: '教[おし]えない', dictionaryRuby: '教[おし]える', baseMeaning: 'สอน', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่สอน', thaiReading: 'โอชิเอะไน' },
  { conjugatedRuby: '教[おし]えた', dictionaryRuby: '教[おし]える', baseMeaning: 'สอน', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'สอนแล้ว', thaiReading: 'โอชิเอะตะ' },
  { conjugatedRuby: '教[おし]えて', dictionaryRuby: '教[おし]える', baseMeaning: 'สอน', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'สอนทีเถอะ/กรุณาสอน', thaiReading: 'โอชิเอะเตะ' },
  { conjugatedRuby: '教[おし]えられる', dictionaryRuby: '教[おし]える', baseMeaning: 'สอน', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'สอนได้', thaiReading: 'โอชิเอะราเระรุ' },

  // 38. 消す (kesu) - ปิดไฟ/ลบ
  { conjugatedRuby: '消[け]します', dictionaryRuby: '消[け]す', baseMeaning: 'ปิดไฟ/ลบ', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะลบ', thaiReading: 'เคชิมาสุ' },
  { conjugatedRuby: '消[け]さない', dictionaryRuby: '消[け]す', baseMeaning: 'ปิดไฟ/ลบ', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ลบ', thaiReading: 'เคซานัย' },
  { conjugatedRuby: '消[け]した', dictionaryRuby: '消[け]す', baseMeaning: 'ปิดไฟ/ลบ', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ลบแล้ว', thaiReading: 'เคชิตะ' },
  { conjugatedRuby: '消[け]して', dictionaryRuby: '消[け]す', baseMeaning: 'ปิดไฟ/ลบ', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ลบซะ/ปิดซะ', thaiReading: 'เคชิเตะ' },
  { conjugatedRuby: '消[け]せる', dictionaryRuby: '消[け]す', baseMeaning: 'ปิดไฟ/ลบ', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ลบได้', thaiReading: 'เคเซะรุ' },

  // 39. 点ける (tsukeru) - เปิดไฟ
  { conjugatedRuby: '点[つ]けます', dictionaryRuby: '点[つ]ける', baseMeaning: 'เปิดไฟ', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะเปิด', thaiReading: 'ทสึเกะมาสุ' },
  { conjugatedRuby: '点[つ]けない', dictionaryRuby: '点[つ]ける', baseMeaning: 'เปิดไฟ', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่เปิด', thaiReading: 'ทสึเกะไน' },
  { conjugatedRuby: '点[つ]けた', dictionaryRuby: '点[つ]ける', baseMeaning: 'เปิดไฟ', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'เปิดแล้ว', thaiReading: 'ทสึเกะตะ' },
  { conjugatedRuby: '点[つ]けて', dictionaryRuby: '点[つ]ける', baseMeaning: 'เปิดไฟ', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'เปิดซะ', thaiReading: 'ทสึเกะเตะ' },
  { conjugatedRuby: '点[つ]けられる', dictionaryRuby: '点[つ]ける', baseMeaning: 'เปิดไฟ', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'เปิดได้', thaiReading: 'ทสึเกะราเระรุ' },

  // 40. 乗る (noru) - ขึ้นรถ
  { conjugatedRuby: '乗[の]ります', dictionaryRuby: '乗[の]る', baseMeaning: 'ขึ้นรถ', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะขึ้นรถ', thaiReading: 'โนริมาสุ' },
  { conjugatedRuby: '乗[の]らない', dictionaryRuby: '乗[の]る', baseMeaning: 'ขึ้นรถ', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ขึ้นรถ', thaiReading: 'โนราไน' },
  { conjugatedRuby: '乗[の]った', dictionaryRuby: '乗[の]る', baseMeaning: 'ขึ้นรถ', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ขึ้นรถแล้ว', thaiReading: 'นตตะ' },
  { conjugatedRuby: '乗[の]って', dictionaryRuby: '乗[の]る', baseMeaning: 'ขึ้นรถ', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ขึ้นไปซะ', thaiReading: 'นตเตะ' },
  { conjugatedRuby: '乗[の]れる', dictionaryRuby: '乗[の]る', baseMeaning: 'ขึ้นรถ', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ขึ้นได้', thaiReading: 'โนเระรุ' },

  // 41. 止まる (tomaru) - หยุด
  { conjugatedRuby: '止[と]まります', dictionaryRuby: '止[と]まる', baseMeaning: 'หยุด', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะหยุด', thaiReading: 'โตมาริมาสุ' },
  { conjugatedRuby: '止[と]まらない', dictionaryRuby: '止[と]まる', baseMeaning: 'หยุด', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่หยุด', thaiReading: 'โตมาราไน' },
  { conjugatedRuby: '止[と]まった', dictionaryRuby: '止[と]まる', baseMeaning: 'หยุด', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'หยุดแล้ว', thaiReading: 'โตมัตตะ' },
  { conjugatedRuby: '止[と]まって', dictionaryRuby: '止[と]まる', baseMeaning: 'หยุด', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'หยุดซะ', thaiReading: 'โตมัตเตะ' },
  { conjugatedRuby: '止[と]まれる', dictionaryRuby: '止[と]まる', baseMeaning: 'หยุด', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'หยุดได้', thaiReading: 'โตมาเระรุ' },

  // 42. 曲がる (magaru) - เลี้ยว
  { conjugatedRuby: '曲[ま]がります', dictionaryRuby: '曲[ま]がる', baseMeaning: 'เลี้ยว', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะเลี้ยว', thaiReading: 'มาการิมาสุ' },
  { conjugatedRuby: '曲[ま]がらない', dictionaryRuby: '曲[ま]がる', baseMeaning: 'เลี้ยว', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่เลี้ยว', thaiReading: 'มาการาไน' },
  { conjugatedRuby: '曲[ま]がった', dictionaryRuby: '曲[ま]がる', baseMeaning: 'เลี้ยว', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'เลี้ยวแล้ว', thaiReading: 'มากัตตะ' },
  { conjugatedRuby: '曲[ま]がって', dictionaryRuby: '曲[ま]がる', baseMeaning: 'เลี้ยว', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'เลี้ยวซะ', thaiReading: 'มากัตเตะ' },
  { conjugatedRuby: '曲[ま]がれる', dictionaryRuby: '曲[ま]がる', baseMeaning: 'เลี้ยว', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'เลี้ยวได้', thaiReading: 'มากาเระรุ' },

  // 43. 働く (hataraku) - ทำงาน
  { conjugatedRuby: '働[はたら]きます', dictionaryRuby: '働[はたら]く', baseMeaning: 'ทำงาน', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะทำงาน', thaiReading: 'ฮาตารากิมาสุ' },
  { conjugatedRuby: '働[はたら]かない', dictionaryRuby: '働[はたら]く', baseMeaning: 'ทำงาน', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ทำงาน', thaiReading: 'ฮาตารากาไน' },
  { conjugatedRuby: '働[はたら]いた', dictionaryRuby: '働[はたら]く', baseMeaning: 'ทำงาน', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ทำงานแล้ว', thaiReading: 'ฮาตารายตะ' },
  { conjugatedRuby: '働[はたら]いて', dictionaryRuby: '働[はたら]く', baseMeaning: 'ทำงาน', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ทำงานซะ', thaiReading: 'ฮาตารายเตะ' },
  { conjugatedRuby: '働[はたら]ける', dictionaryRuby: '働[はたら]く', baseMeaning: 'ทำงาน', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ทำงานได้', thaiReading: 'ฮาตารากะรุ' },

  // 44. 脱ぐ (nugu) - ถอด
  { conjugatedRuby: '脱[ぬ]ぎます', dictionaryRuby: '脱[ぬ]ぐ', baseMeaning: 'ถอด', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะถอด', thaiReading: 'นุกิมาสุ' },
  { conjugatedRuby: '脱[ぬ]がない', dictionaryRuby: '脱[ぬ]ぐ', baseMeaning: 'ถอด', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ถอด', thaiReading: 'นุกาไน' },
  { conjugatedRuby: '脱[ぬ]いだ', dictionaryRuby: '脱[ぬ]ぐ', baseMeaning: 'ถอด', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ถอดแล้ว', thaiReading: 'นุยดะ' },
  { conjugatedRuby: '脱[ぬ]いで', dictionaryRuby: '脱[ぬ]ぐ', baseMeaning: 'ถอด', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ถอดออกซะ', thaiReading: 'นุยเดะ' },
  { conjugatedRuby: '脱[ぬ]げる', dictionaryRuby: '脱[ぬ]ぐ', baseMeaning: 'ถอด', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ถอดได้', thaiReading: 'นุเกะรุ' },

  // 45. 渡す (watasu) - ส่งมอบ
  { conjugatedRuby: '渡[わた]します', dictionaryRuby: '渡[わた]す', baseMeaning: 'ส่งมอบ', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะส่งมอบ', thaiReading: 'วาตาชิมาสุ' },
  { conjugatedRuby: '渡[わた]さない', dictionaryRuby: '渡[わた]す', baseMeaning: 'ส่งมอบ', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ส่งมอบ', thaiReading: 'วาตาซานัย' },
  { conjugatedRuby: '渡[わた]した', dictionaryRuby: '渡[わた]す', baseMeaning: 'ส่งมอบ', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ส่งมอบแล้ว', thaiReading: 'วาตาชิตะ' },
  { conjugatedRuby: '渡[わた]して', dictionaryRuby: '渡[わた]す', baseMeaning: 'ส่งมอบ', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ส่งมอบมาซะ', thaiReading: 'วาตาชิเตะ' },
  { conjugatedRuby: '渡[わた]せる', dictionaryRuby: '渡[わた]す', baseMeaning: 'ส่งมอบ', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ส่งมอบได้', thaiReading: 'วาตาเซะรุ' },

  // 46. 渡る (wataru) - ข้าม
  { conjugatedRuby: '渡[わた]ります', dictionaryRuby: '渡[わた]る', baseMeaning: 'ข้าม', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะข้าม', thaiReading: 'วาตาริมาสุ' },
  { conjugatedRuby: '渡[わた]らない', dictionaryRuby: '渡[わた]る', baseMeaning: 'ข้าม', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ข้าม', thaiReading: 'วาตารานัย' },
  { conjugatedRuby: '渡[わた]った', dictionaryRuby: '渡[わた]る', baseMeaning: 'ข้าม', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ข้ามแล้ว', thaiReading: 'วาตัตตะ' },
  { conjugatedRuby: '渡[わた]って', dictionaryRuby: '渡[わた]る', baseMeaning: 'ข้าม', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ข้ามไปซะ', thaiReading: 'วาตัตเตะ' },
  { conjugatedRuby: '渡[わた]れる', dictionaryRuby: '渡[わた]る', baseMeaning: 'ข้าม', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ข้ามได้', thaiReading: 'วาตาเระรุ' },

  // 47. 疲れる (tsukareru) - เหนื่อย
  { conjugatedRuby: '疲[つか]れます', dictionaryRuby: '疲[つか]れる', baseMeaning: 'เหนื่อย', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะเหนื่อย', thaiReading: 'ทสึคาเระมาสุ' },
  { conjugatedRuby: '疲[つか]れない', dictionaryRuby: '疲[つか]れる', baseMeaning: 'เหนื่อย', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่เหนื่อย', thaiReading: 'ทสึคาเระไน' },
  { conjugatedRuby: '疲[つか]れた', dictionaryRuby: '疲[つか]れる', baseMeaning: 'เหนื่อย', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'เหนื่อยแล้ว', thaiReading: 'ทสึคาเระตะ' },
  { conjugatedRuby: '疲[つか]れて', dictionaryRuby: '疲[つか]れる', baseMeaning: 'เหนื่อย', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'เหนื่อยซะงั้น', thaiReading: 'ทสึคาเระเตะ' },
  { conjugatedRuby: '疲[つか]れられる', dictionaryRuby: '疲[つก]ร', baseMeaning: 'เหนื่อย', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'เหนื่อยได้', thaiReading: 'ทสึคาเระราเระรุ' },

  // 48. 借りる (kariru) - ยืม
  { conjugatedRuby: '借[か]ります', dictionaryRuby: '借[か]りる', baseMeaning: 'ยืม', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะยืม', thaiReading: 'คาริมาสุ' },
  { conjugatedRuby: '借[か]りない', dictionaryRuby: '借[か]りる', baseMeaning: 'ยืม', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ยืม', thaiReading: 'คาริไน' },
  { conjugatedRuby: '借[か]りた', dictionaryRuby: '借[か]りล', baseMeaning: 'ยืม', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ยืมแล้ว', thaiReading: 'คาริตะ' },
  { conjugatedRuby: '借[か]りて', dictionaryRuby: '借[か]りる', baseMeaning: 'ยืม', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ขอยืมหน่อย', thaiReading: 'คาริเตะ' },
  { conjugatedRuby: '借[か]りられる', dictionaryRuby: '借[か]りる', baseMeaning: 'ยืม', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ยืมได้', thaiReading: 'คาริราเระรุ' },

  // 49. 返す (kaesu) - คืน
  { conjugatedRuby: '返[かえ]します', dictionaryRuby: '返[かえ]す', baseMeaning: 'คืน', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะคืน', thaiReading: 'กาเอชิมาสุ' },
  { conjugatedRuby: '返[かえ]さない', dictionaryRuby: '返[かえ]す', baseMeaning: 'คืน', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่คืน', thaiReading: 'กาเอซาไน' },
  { conjugatedRuby: '返[かえ]した', dictionaryRuby: '返[かえ]す', baseMeaning: 'คืน', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'คืนแล้ว', thaiReading: 'กาเอชิตะ' },
  { conjugatedRuby: '返[かえ]して', dictionaryRuby: '返[かえ]す', baseMeaning: 'คืน', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'คืนมาซะ/กรุณาคืน', thaiReading: 'กาเอชิเตะ' },
  { conjugatedRuby: '返[かえ]せる', dictionaryRuby: '返[かえ]す', baseMeaning: 'คืน', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'คืนได้', thaiReading: 'กาเอเซะรุ' },

  // 50. 切る (kiru) - ตัด
  { conjugatedRuby: '切[き]ります', dictionaryRuby: '切[き]る', baseMeaning: 'ตัด', type: 'Masu Form', tenseLabel: 'สุภาพ', meaning: 'จะตัด', thaiReading: 'คิริมาสุ' },
  { conjugatedRuby: '切[き]らない', dictionaryRuby: '切[き]る', baseMeaning: 'ตัด', type: 'Nai Form', tenseLabel: 'ปฏิเสธ', meaning: 'ไม่ตัด', thaiReading: 'คิราไน' },
  { conjugatedRuby: '切[き]った', dictionaryRuby: '切[き]る', baseMeaning: 'ตัด', type: 'Ta Form', tenseLabel: 'อดีต', meaning: 'ตัดแล้ว', thaiReading: 'คิตตะ' },
  { conjugatedRuby: '切[き]って', dictionaryRuby: '切[き]る', baseMeaning: 'ตัด', type: 'Te Form', tenseLabel: 'รูปเชื่อม', meaning: 'ตัดซะ/กรุณาตัด', thaiReading: 'คิตเตะ' },
  { conjugatedRuby: '切[き]れる', dictionaryRuby: '切[き]る', baseMeaning: 'ตัด', type: 'Potential', tenseLabel: 'สามารถ', meaning: 'ตัดได้', thaiReading: 'คิเระรุ' },
];
