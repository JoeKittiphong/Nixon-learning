
import { VerbConjugation } from './types.ts';

export const VERB_CONJUGATIONS: VerbConjugation[] = [
  // ==========================================
  // 1. VERB GROUP 1 (Godan) - Drilling Common Patterns
  // ==========================================

  // --- 行く (iku) - ไป ---
  { conjugatedRuby: '行[い]きます', dictionaryRuby: '行[い]く', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะไป', thaiReading: 'อิคิมาสุ' },
  { conjugatedRuby: '行[い]かない', dictionaryRuby: '行[い]く', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ไป', thaiReading: 'อิคานัย' },
  { conjugatedRuby: '行[い]った', dictionaryRuby: '行[い]く', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ไปแล้ว', thaiReading: 'อิตตะ' },
  { conjugatedRuby: '行[い]って', dictionaryRuby: '行[い]く', type: 'Te Form', tenseLabel: 'รูปเชื่อม/สั่ง', meaning: 'ไป...', thaiReading: 'อิตเตะ' },
  { conjugatedRuby: '行[い]ける', dictionaryRuby: '行[い]く', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'ไปได้', thaiReading: 'อิเคะรุ' },
  { conjugatedRuby: '行[い]こう', dictionaryRuby: '行[い]く', type: 'Volitional', tenseLabel: 'รูปเชิญชวน', meaning: 'ไปกันเถอะ', thaiReading: 'อิโก' },

  // --- 飲む (nomu) - ดื่ม ---
  { conjugatedRuby: '飲[の]みます', dictionaryRuby: '飲[の]む', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะดื่ม', thaiReading: 'โนมิมาสุ' },
  { conjugatedRuby: '飲[の]まない', dictionaryRuby: '飲[の]む', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ดื่ม', thaiReading: 'โนมานัย' },
  { conjugatedRuby: '飲[の]んだ', dictionaryRuby: '飲[ของ]む', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ดื่มแล้ว', thaiReading: 'โนนดะ' },
  { conjugatedRuby: '飲[の]める', dictionaryRuby: '飲[ของ]む', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'ดื่มได้', thaiReading: 'โนเมะรุ' },

  // --- 買う (kau) - ซื้อ ---
  { conjugatedRuby: '買[か]います', dictionaryRuby: '買[か]う', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะซื้อ', thaiReading: 'ไคมาสุ' },
  { conjugatedRuby: '買[か]わない', dictionaryRuby: '買[か]う', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ซื้อ', thaiReading: 'คาวานัย' },
  { conjugatedRuby: '買[か]った', dictionaryRuby: '買[か]う', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ซื้อแล้ว', thaiReading: 'คัตตะ' },
  { conjugatedRuby: '買[か]える', dictionaryRuby: '買[か]う', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'ซื้อได้', thaiReading: 'ไคเระรุ' },

  // --- 話す (hanasu) - พูด ---
  { conjugatedRuby: '話[はな]します', dictionaryRuby: '話[はな]す', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะพูด', thaiReading: 'ฮานาชิมาสุ' },
  { conjugatedRuby: '話[はな]さない', dictionaryRuby: '話[はな]す', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่พูด', thaiReading: 'ฮานาซานัย' },
  { conjugatedRuby: '話[はな]した', dictionaryRuby: '話[はな]す', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'พูดแล้ว', thaiReading: 'ฮานาชิตะ' },
  { conjugatedRuby: '話[はな]せる', dictionaryRuby: '話[はな]す', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'พูดได้', thaiReading: 'ฮานาเซะรุ' },

  // --- 会う (au) - เจอ ---
  { conjugatedRuby: '会[あ]います', dictionaryRuby: '会[あ]う', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะเจอ', thaiReading: 'ไอมาสุ' },
  { conjugatedRuby: '会[あ]わない', dictionaryRuby: '会[あ]う', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่เจอ', thaiReading: 'ไอวานัย' },
  { conjugatedRuby: '会[あ]った', dictionaryRuby: '会[あ]う', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'เจอแล้ว', thaiReading: 'อัตตะ' },

  // --- 待つ (matsu) - รอ ---
  { conjugatedRuby: '待[ま]ちます', dictionaryRuby: '待[ま]つ', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะรอ', thaiReading: 'มาจิมาสุ' },
  { conjugatedRuby: '待[ま]った', dictionaryRuby: '待[ま]つ', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'รอแล้ว', thaiReading: 'มัตตะ' },
  { conjugatedRuby: '待[ま]て', dictionaryRuby: '待[ま]つ', type: 'Imperative', tenseLabel: 'รูปคำสั่ง', meaning: 'รอซะ!', thaiReading: 'มาเตะ' },

  // --- 書く (kaku) - เขียน ---
  { conjugatedRuby: '書[か]きます', dictionaryRuby: '書[か]く', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะเขียน', thaiReading: 'คากิมาสุ' },
  { conjugatedRuby: '書[か]いた', dictionaryRuby: '書[か]く', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'เขียนแล้ว', thaiReading: 'ไคตะ' },
  { conjugatedRuby: '書[か]ける', dictionaryRuby: '書[か]く', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'เขียนได้', thaiReading: 'คาเคะรุ' },

  // --- 泳ぐ (oyogu) - ว่ายน้ำ ---
  { conjugatedRuby: '泳[およ]ぎます', dictionaryRuby: '泳[およ]ぐ', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะว่ายน้ำ', thaiReading: 'โอยอกิมาสุ' },
  { conjugatedRuby: '泳[およ]がない', dictionaryRuby: '泳[およ]ぐ', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ว่ายน้ำ', thaiReading: 'โอยอกานัย' },
  { conjugatedRuby: '泳[およ]いだ', dictionaryRuby: '泳[およ]ぐ', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ว่ายน้ำแล้ว', thaiReading: 'โอยอยดะ' },

  // --- 死ぬ (shinu) - ตาย ---
  { conjugatedRuby: '死[し]にます', dictionaryRuby: '死[し]ぬ', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะตาย', thaiReading: 'ชินิมาสุ' },
  { conjugatedRuby: '死[し]んだ', dictionaryRuby: '死[し]ぬ', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ตายแล้ว', thaiReading: 'ชินดะ' },

  // --- 遊ぶ (asobu) - เล่น ---
  { conjugatedRuby: '遊[あそ]びます', dictionaryRuby: '遊[あそ]ぶ', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะเล่น', thaiReading: 'อาโซบิมาสุ' },
  { conjugatedRuby: '遊[あそ]んだ', dictionaryRuby: '遊[あそ]ぶ', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'เล่นแล้ว', thaiReading: 'อาซอนดะ' },

  // --- 帰る (kaeru) - กลับ (บ้าน) ---
  { conjugatedRuby: '帰[かえ]ります', dictionaryRuby: '帰[かえ]る', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะกลับ', thaiReading: 'คาเอริมาสุ' },
  { conjugatedRuby: '帰[かえ]らない', dictionaryRuby: '帰[かえ]る', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่กลับ', thaiReading: 'คาเอรานัย' },
  { conjugatedRuby: '帰[かえ]った', dictionaryRuby: '帰[かえ]る', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'กลับแล้ว', thaiReading: 'คาเอ็ตตะ' },

  // ==========================================
  // 2. VERB GROUP 2 (Ichidan) - Regular Patterns
  // ==========================================

  // --- 食べる (taberu) - กิน ---
  { conjugatedRuby: '食[た]べます', dictionaryRuby: '食[た]べる', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะกิน', thaiReading: 'ทาเบมาสุ' },
  { conjugatedRuby: '食[た]べない', dictionaryRuby: '食[た]べる', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่กิน', thaiReading: 'ทาเบไน' },
  { conjugatedRuby: '食[た]べた', dictionaryRuby: '食[た]べる', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'กินแล้ว', thaiReading: 'ทาเบตะ' },
  { conjugatedRuby: '食[た]べられる', dictionaryRuby: '食[た]べる', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'กินได้', thaiReading: 'ทาเบราเระรุ' },

  // --- 見る (miru) - ดู ---
  { conjugatedRuby: '見[み]ます', dictionaryRuby: '見[み]る', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะดู', thaiReading: 'มิมาสุ' },
  { conjugatedRuby: '見[み]ない', dictionaryRuby: '見[み]る', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ดู', thaiReading: 'มิไน' },
  { conjugatedRuby: '見[み]た', dictionaryRuby: '見[み]る', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ดูแล้ว', thaiReading: 'มิตะ' },
  { conjugatedRuby: '見[み]られる', dictionaryRuby: '見[み]る', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'ดูได้', thaiReading: 'มิราเระรุ' },

  // --- 寝る (neru) - นอน ---
  { conjugatedRuby: '寝[ね]ます', dictionaryRuby: '寝[ね]る', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะนอน', thaiReading: 'เนมาสุ' },
  { conjugatedRuby: '寝[ね]ない', dictionaryRuby: '寝[ね]る', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่นอน', thaiReading: 'เนไน' },
  { conjugatedRuby: '寝[ね]た', dictionaryRuby: '寝[ね]る', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'นอนแล้ว', thaiReading: 'เนตะ' },

  // --- 起きる (okiru) - ตื่น ---
  { conjugatedRuby: '起[お]きます', dictionaryRuby: '起[お]きる', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะตื่น', thaiReading: 'โอกิมาสุ' },
  { conjugatedRuby: '起[お]きない', dictionaryRuby: '起[お]きる', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ตื่น', thaiReading: 'โอกิไน' },

  // --- 忘れる (wasureru) - ลืม ---
  { conjugatedRuby: '忘[わす]れます', dictionaryRuby: '忘[わす]れる', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะลืม', thaiReading: 'วาซูเระมาสุ' },
  { conjugatedRuby: '忘[わす]れた', dictionaryRuby: '忘[わす]れる', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ลืมไปแล้ว', thaiReading: 'วาซูเระตะ' },

  // --- 教える (oshieru) - สอน ---
  { conjugatedRuby: '教[おし]えます', dictionaryRuby: '教[おし]える', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะสอน', thaiReading: 'โอชิเอะมาสุ' },
  { conjugatedRuby: '教[おし]えた', dictionaryRuby: '教[おし]える', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'สอนแล้ว', thaiReading: 'โอชิเอะตะ' },

  // ==========================================
  // 3. VERB GROUP 3 (Irregular) - Essential Exceptions
  // ==========================================

  // --- する (suru) - ทำ ---
  { conjugatedRuby: 'します', dictionaryRuby: 'する', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะทำ', thaiReading: 'ชิมาสุ' },
  { conjugatedRuby: 'しない', dictionaryRuby: 'する', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ทำ', thaiReading: 'ชินัย' },
  { conjugatedRuby: 'した', dictionaryRuby: 'する', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'ทำแล้ว', thaiReading: 'ชิตะ' },
  { conjugatedRuby: 'できる', dictionaryRuby: 'する', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'ทำได้', thaiReading: 'เดะคิรุ' },
  { conjugatedRuby: 'しよう', dictionaryRuby: 'する', type: 'Volitional', tenseLabel: 'รูปเชิญชวน', meaning: 'ทำกันเถอะ', thaiReading: 'ชิโย' },

  // --- 来る (kuru) - มา ---
  { conjugatedRuby: '来[き]ます', dictionaryRuby: '来[く]る', type: 'Masu Form', tenseLabel: 'ปัจจุบัน สุภาพ', meaning: 'จะมา', thaiReading: 'คิมาสุ' },
  { conjugatedRuby: '来[こ]ない', dictionaryRuby: '来[く]る', type: 'Nai Form', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่มา', thaiReading: 'โคนัย' },
  { conjugatedRuby: '来[き]た', dictionaryRuby: '来[く]る', type: 'Ta Form', tenseLabel: 'อดีต บอกเล่า', meaning: 'มาแล้ว', thaiReading: 'คิตะ' },
  { conjugatedRuby: '来[こ]られる', dictionaryRuby: '来[く]る', type: 'Potential', tenseLabel: 'รูปสามารถ', meaning: 'มาได้', thaiReading: 'โคราระเระรุ' },

  // ==========================================
  // 4. ADJECTIVE CONJUGATIONS (i-Adjectives)
  // ==========================================

  // --- おいしい (oishii) - อร่อย ---
  { conjugatedRuby: 'おいしくない', dictionaryRuby: 'おいしい', type: 'i-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่อร่อย', thaiReading: 'โออิชิกุไน' },
  { conjugatedRuby: 'おいしかった', dictionaryRuby: 'おいしい', type: 'i-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'อร่อย (อดีต)', thaiReading: 'โออิชิกัตตะ' },
  { conjugatedRuby: 'おいしくなかった', dictionaryRuby: 'おいしい', type: 'i-Adjective', tenseLabel: 'อดีต ปฏิเสธ', meaning: 'ไม่อร่อย (อดีต)', thaiReading: 'โออิชิกุนาคัตตะ' },

  // --- 高い (takai) - แพง/สูง ---
  { conjugatedRuby: '高[たか]くない', dictionaryRuby: '高[たか]い', type: 'i-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่แพง/ไม่สูง', thaiReading: 'ทาคาคุนัย' },
  { conjugatedRuby: '高[たか]かった', dictionaryRuby: '高[たか]い', type: 'i-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'แพง (อดีต)', thaiReading: 'ทาคาคัตตะ' },

  // --- 寒い (samui) - หนาว ---
  { conjugatedRuby: '寒[さむ]くない', dictionaryRuby: '寒[さむ]い', type: 'i-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่หนาว', thaiReading: 'ซามุคุนัย' },
  { conjugatedRuby: '寒[さむ]かった', dictionaryRuby: '寒[さむ]い', type: 'i-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'หนาว (อดีต)', thaiReading: 'ซามุคัตตะ' },

  // --- 新しい (atarashii) - ใหม่ ---
  { conjugatedRuby: '新[あたら]しくない', dictionaryRuby: '新[あたら]しい', type: 'i-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ใหม่', thaiReading: 'อาตาราชิคุไน' },
  { conjugatedRuby: '新[あたら]しかった', dictionaryRuby: '新[あたら]しい', type: 'i-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'ใหม่ (อดีต)', thaiReading: 'อาตาราชิคัตตะ' },

  // --- 長い (nagai) - ยาว ---
  { conjugatedRuby: '長[なが]くない', dictionaryRuby: '長[なが]い', type: 'i-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ยาว', thaiReading: 'นางาคุไน' },
  { conjugatedRuby: '長[なが]かった', dictionaryRuby: '長[なが]い', type: 'i-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'ยาว (อดีต)', thaiReading: 'นางากัตตะ' },

  // ==========================================
  // 5. ADJECTIVE CONJUGATIONS (na-Adjectives)
  // ==========================================

  // --- 静か (shizuka) - เงียบ ---
  { conjugatedRuby: '静[しず]かじゃない', dictionaryRuby: '静[しず]か', type: 'na-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่เงียบ', thaiReading: 'ชิซุกะ จะไน' },
  { conjugatedRuby: '静[しず]かだった', dictionaryRuby: '静[しず]か', type: 'na-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'เงียบ (อดีต)', thaiReading: 'ชิซุกะ ดัตตะ' },
  { conjugatedRuby: '静[しず]かじゃなかった', dictionaryRuby: '静[しず]か', type: 'na-Adjective', tenseLabel: 'อดีต ปฏิเสธ', meaning: 'ไม่เงียบ (อดีต)', thaiReading: 'ชิซุกะ จะนาคัตตะ' },

  // --- きれい (kirei) - สวย/สะอาด ---
  { conjugatedRuby: 'きれいじゃない', dictionaryRuby: 'きれい', type: 'na-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่สวย/ไม่สะอาด', thaiReading: 'คิเร จะไน' },
  { conjugatedRuby: 'きれいだった', dictionaryRuby: 'きれい', type: 'na-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'สวย (อดีต)', thaiReading: 'คิเร ดัตตะ' },

  // --- 暇 (hima) - ว่าง ---
  { conjugatedRuby: '暇[ひま]じゃない', dictionaryRuby: '暇[ひま]', type: 'na-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ว่าง', thaiReading: 'ฮิมะ จะไน' },
  { conjugatedRuby: '暇[ひま]だった', dictionaryRuby: '暇[ひま]', type: 'na-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'ว่าง (อดีต)', thaiReading: 'ฮิมะ ดัตตะ' },

  // --- 好き (suki) - ชอบ ---
  { conjugatedRuby: '好[す]きじゃない', dictionaryRuby: '好[す]き', type: 'na-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ชอบ', thaiReading: 'สุกิ จะไน' },
  { conjugatedRuby: '好[す]きだった', dictionaryRuby: '好[す]き', type: 'na-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'เคยชอบ', thaiReading: 'สุกิ ดัตตะ' },

  // --- 有名 (yuumei) - มีชื่อเสียง ---
  { conjugatedRuby: '有名[ゆうめい]じゃない', dictionaryRuby: '有名[ゆうめい]', type: 'na-Adjective', tenseLabel: 'ปัจจุบัน ปฏิเสธ', meaning: 'ไม่ดัง', thaiReading: 'ยูเม จะไน' },
  { conjugatedRuby: '有名[ゆうめい]だった', dictionaryRuby: '有名[ゆうめい]', type: 'na-Adjective', tenseLabel: 'อดีต บอกเล่า', meaning: 'เคยดัง', thaiReading: 'ยูเม ดัตตะ' },
];
