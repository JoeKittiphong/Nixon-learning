
import { SentenceQuestion } from './types.ts';

export const SENTENCES_N5: SentenceQuestion[] = [
  // --- กลุ่มพื้นฐาน (Particles & Identity) ---
  {
    sentenceWithBlank: "私[わたし]は _____ です。",
    correctAnswer: "学生[がくせい]",
    thaiTranslation: "ฉันเป็นนักเรียน",
    distractors: ["先生[せんせい]", "日本人[にほんじん]", "会社員[かいしゃいん]"]
  },
  {
    sentenceWithBlank: "これ _____ あなたの 辞書[じしょ]ですか。",
    correctAnswer: "は",
    thaiTranslation: "นี่คือพจนานุกรมของคุณใช่ไหมครับ/คะ",
    distractors: ["が", "を", "に"]
  },
  {
    sentenceWithBlank: "田中[たなか]さんも _____ です。",
    correctAnswer: "先生[せんせい]",
    thaiTranslation: "คุณทานากะก็เป็นอาจารย์เช่นกัน",
    distractors: ["本[ほん]", "車[くるま]", "机[つくえ]"]
  },
  {
    sentenceWithBlank: "あそこ _____ 何[なに]が ありますか。",
    correctAnswer: "に",
    thaiTranslation: "ตรงโน้นมีอะไรอยู่หรือครับ/คะ",
    distractors: ["を", "は", "で"]
  },

  // --- กลุ่มคำกริยาและกรรม (Verbs & Objects) ---
  {
    sentenceWithBlank: "毎日[まいにち] 水[みず] _____ 飲[の]みます。",
    correctAnswer: "を",
    thaiTranslation: "ดื่มน้ำทุกวัน",
    distractors: ["が", "に", "へ"]
  },
  {
    sentenceWithBlank: "一緒[いっしょ]に ご飯[はん]を _____。",
    correctAnswer: "食[た]べましょう",
    thaiTranslation: "ไปกินข้าวด้วยกันเถอะ",
    distractors: ["食[た]べました", "食[た]べません", "食[た]べます"]
  },
  {
    sentenceWithBlank: "昨日[きのう]、本[ほん]を _____。",
    correctAnswer: "買[か]いました",
    thaiTranslation: "เมื่อวานซื้อหนังสือมาแล้ว",
    distractors: ["買[か]います", "買[か]いません", "買[か]いましょう"]
  },
  {
    sentenceWithBlank: "日本語[にほんご]を _____ しています。",
    correctAnswer: "勉強[べんきょう]",
    thaiTranslation: "กำลังเรียนภาษาญี่ปุ่นอยู่",
    distractors: ["練習[れんしゅう]", "掃除[そうじ]", "散歩[さんぽ]"]
  },
  {
    sentenceWithBlank: "パン _____ 玉子[たまご]を 食べました。",
    correctAnswer: "と",
    thaiTranslation: "กินขนมปังกับไข่",
    distractors: ["を", "が", "に"]
  },

  // --- กลุ่มสถานที่และการเคลื่อนที่ (Places & Motion) ---
  {
    sentenceWithBlank: "明日[あした]、京都[きょうと] _____ 行[い]きます。",
    correctAnswer: "へ",
    thaiTranslation: "พรุ่งนี้จะไปเกียวโต",
    distractors: ["を", "が", "と"]
  },
  {
    sentenceWithBlank: "昨日[きのう] どこへも _____。",
    correctAnswer: "行[い]きませんでした",
    thaiTranslation: "เมื่อวานไม่ได้ไปไหนเลย",
    distractors: ["行[い]きました", "行[い]きます", "行[い]きません"]
  },
  {
    sentenceWithBlank: "家[うち] _____ 帰りましょう。",
    correctAnswer: "へ",
    thaiTranslation: "กลับบ้านกันเถอะ",
    distractors: ["を", "が", "も"]
  },
  {
    sentenceWithBlank: "デパート _____ 買い物[かいもの]を しました。",
    correctAnswer: "で",
    thaiTranslation: "ซื้อของที่ห้างสรรพสินค้า",
    distractors: ["に", "へ", "を"]
  },

  // --- กลุ่มเวลา (Time & Frequency) ---
  {
    sentenceWithBlank: "毎朝[まいあさ] 六時[ろくじ] _____ 起[お]きます。",
    correctAnswer: "に",
    thaiTranslation: "ตื่นนอนตอน 6 โมงทุกเช้า",
    distractors: ["を", "は", "が"]
  },
  {
    sentenceWithBlank: "会議[かいぎ]は 何時[なんじ] _____ 終わりますか。",
    correctAnswer: "まで",
    thaiTranslation: "การประชุมเลิกกี่โมงครับ/คะ",
    distractors: ["から", "に", "へ"]
  },
  {
    sentenceWithBlank: "十時[じゅうじ]から 十二時[じゅうにじ] _____ 勉強します。",
    correctAnswer: "まで",
    thaiTranslation: "เรียนตั้งแต่ 10 โมงถึงเที่ยง",
    distractors: ["ごろ", "に", "から"]
  },
  {
    sentenceWithBlank: "一月[いちがつ] 一日[ついたち] _____ 休みです。",
    correctAnswer: "は",
    thaiTranslation: "วันที่ 1 มกราคมเป็นวันหยุด",
    distractors: ["を", "が", "に"]
  },

  // --- กลุ่มคุณศัพท์ (Adjectives) ---
  {
    sentenceWithBlank: "この 料理[りょうり]は とても _____ ですね。",
    correctAnswer: "おいしい",
    thaiTranslation: "อาหารจานนี้อร่อยมากเลยเนอะ",
    distractors: ["寒い[さむい]", "高い[たかい]", "広い[ひろい]"]
  },
  {
    sentenceWithBlank: "今日[きょう]は 天気[てんき]が _____ です。",
    correctAnswer: "いい",
    thaiTranslation: "วันนี้อากาศดี",
    distractors: ["悪い[わるい]", "赤い[あかい]", "暑い[あつい]"]
  },
  {
    sentenceWithBlank: "あの 図書館[としょかん]は _____ です。",
    correctAnswer: "静か[しずか]",
    thaiTranslation: "ห้องสมุดแห่งนั้นเงียบสงบ",
    distractors: ["有名[ゆうめい]", "暇[ひมา]", "元気[げんき]"]
  },
  {
    sentenceWithBlank: "去年[きょねん]の 冬[ふゆ]は あまり _____。",
    correctAnswer: "寒[さむ]くなかったです",
    thaiTranslation: "ฤดูหนาวปีที่แล้วไม่ค่อยหนาว",
    distractors: ["寒[さむ]かったです", "暑[あつ]かったです", "寒[さむ]いです"]
  },

  // --- กลุ่มคำถามและปริมาณ (Questions & Quantities) ---
  {
    sentenceWithBlank: "りんごを _____ 買[か]いましたか。",
    correctAnswer: "いくつ",
    thaiTranslation: "ซื้อแอปเปิ้ลมากี่ลูกหรือครับ/คะ",
    distractors: ["いくら", "どこ", "だれ"]
  },
  {
    sentenceWithBlank: "その 傘[かさ]は _____ ですか。",
    correctAnswer: "いくら",
    thaiTranslation: "ร่มคันนั้นราคาเท่าไหร่ครับ/คะ",
    distractors: ["いつ", "だれ", "なに"]
  },
  {
    sentenceWithBlank: "教室[きょうしつ]に 学生[がくせい]が _____ いますか。",
    correctAnswer: "何人[なんにん]",
    thaiTranslation: "ในห้องเรียนมีนักเรียนกี่คนครับ/คะ",
    distractors: ["何時[なんじ]", "何個[なんこ]", "何回[なんかい]"]
  },
  {
    sentenceWithBlank: "猫[ねこ]が 三[さん] _____ います。",
    correctAnswer: "匹[びき]",
    thaiTranslation: "มีแมวอยู่ 3 ตัว",
    distractors: ["本[ほん]", "枚[まい]", "冊[さつ]"]
  },

  // --- กลุ่มความสามารถและความชอบ (Abilities & Preferences) ---
  {
    sentenceWithBlank: "私[わたし]は 日本語[にほんご] _____ 少し[すこし] 分[わ]かります。",
    correctAnswer: "が",
    thaiTranslation: "ฉันเข้าใจภาษาญี่ปุ่นนิดหน่อย",
    distractors: ["を", "に", "へ"]
  },
  {
    sentenceWithBlank: "兄[あに]は 料理[りょうり]が _____ です。",
    correctAnswer: "上手[じょうず]",
    thaiTranslation: "พี่ชายทำอาหารเก่ง",
    distractors: ["下手[へた]", "きれい", "好き[すき]"]
  },
  {
    sentenceWithBlank: "あなた _____ 好き[すき]な スポーツは 何[なに]ですか。",
    correctAnswer: "の",
    thaiTranslation: "กีฬาที่คุณชอบคืออะไรครับ/คะ",
    distractors: ["を", "が", "に"]
  },

  // --- กลุ่มรูปประโยคขอร้องและคำสั่ง (Requests & Commands) ---
  {
    sentenceWithBlank: "ここ _____ 名前[なまえ]を 書[か]いてください。",
    correctAnswer: "に",
    thaiTranslation: "กรุณาเขียนชื่อลงตรงนี้ครับ/คะ",
    distractors: ["を", "で", "は"]
  },
  {
    sentenceWithBlank: "窓[まど]を _____ ください。",
    correctAnswer: "開[あ]けて",
    thaiTranslation: "กรุณาเปิดหน้าต่างหน่อยครับ/คะ",
    distractors: ["閉[し]めて", "待[ま]って", "見[み]せて"]
  },
  {
    sentenceWithBlank: "写真[しゃしん]を _____ も いいですか。",
    correctAnswer: "撮[と]って",
    thaiTranslation: "ถ่ายรูปได้ไหมครับ/คะ (ขออนุญาต)",
    distractors: ["撮[と]り", "撮[と]る", "撮[と]った"]
  },

  // --- เพิ่มเติมชุดใหญ่ (Additional Variety) ---
  {
    sentenceWithBlank: "部屋[へや]に 誰[だれ] _____ いません。",
    correctAnswer: "も",
    thaiTranslation: "ไม่มีใครอยู่ในห้องเลย",
    distractors: ["が", "は", "に"]
  },
  {
    sentenceWithBlank: "駅[えき]から 大学[だいがく] _____ 歩[ある]いて 行[い]きます。",
    correctAnswer: "まで",
    thaiTranslation: "เดินจากสถานีไปจนถึงมหาวิทยาลัย",
    distractors: ["から", "に", "へ"]
  },
  {
    sentenceWithBlank: "暑い[あつい]ですから、エアコンを _____ ください。",
    correctAnswer: "つけて",
    thaiTranslation: "เพราะว่ามันร้อน กรุณาเปิดแอร์ให้หน่อยครับ/คะ",
    distractors: ["消[け]して", "開[あ]けて", "閉[し]めて"]
  },
  {
    sentenceWithBlank: "毎日[まいにち] 忙しい[いそがしい]ですが、_____ です。",
    correctAnswer: "楽しい[たのしい]",
    thaiTranslation: "ทุกวันยุ่งมากแต่ก็สนุกดี",
    distractors: ["難しい[むずかしい]", "寒い[さむい]", "暑い[あつい]"]
  },
  {
    sentenceWithBlank: "_____ は 誰[だれ]ですか。",
    correctAnswer: "あの人[ひと]",
    thaiTranslation: "คนนั้นคือใครหรือครับ/คะ",
    distractors: ["それ", "どこ", "これ"]
  },
  {
    sentenceWithBlank: "弟[おとうと]は テニス _____ 下手[へた]です。",
    correctAnswer: "が",
    thaiTranslation: "น้องชายเล่นเทนนิสไม่เก่ง",
    distractors: ["を", "に", "は"]
  },
  {
    sentenceWithBlank: "冷[つめ]たい 水[みず]を _____ たいです。",
    correctAnswer: "飲[の]み",
    thaiTranslation: "อยากดื่มน้ำเย็น",
    distractors: ["食[た]べ", "買[か]い", "見[み]"]
  },
  {
    sentenceWithBlank: "家族[かぞく] _____ 手紙[てがみ]を 書[か]きました。",
    correctAnswer: "に",
    thaiTranslation: "เขียนจดหมายถึงครอบครัว",
    distractors: ["を", "へ", "も"]
  },
  {
    sentenceWithBlank: "公園[こうえん]へ 散歩[さんぽ] _____ 行[い]きます。",
    correctAnswer: "に",
    thaiTranslation: "ไปเดินเล่นที่สวนสาธารณะ",
    distractors: ["を", "へ", "が"]
  },
  {
    sentenceWithBlank: "母[はは]は 料理[りょうり]が _____ です。",
    correctAnswer: "上手[じょうず]",
    thaiTranslation: "แม่ทำอาหารเก่ง",
    distractors: ["綺麗[きれい]", "有名[ゆうめい]", "暇[ひま]"]
  },
  {
    sentenceWithBlank: "お父[とう]さんは 今[いま] _____ を 読[よ]んでいますか。",
    correctAnswer: "新聞[しんぶん]",
    thaiTranslation: "ตอนนี้คุณพ่อกำลังอ่านหนังสือพิมพ์อยู่หรือครับ/คะ",
    distractors: ["雑誌[ざっし]", "手紙[てกามิ]", "本[ほん]"]
  },
  {
    sentenceWithBlank: "車[くるま]の 中[なか] _____ 鍵[かぎ]を 忘れました。",
    correctAnswer: "に",
    thaiTranslation: "ลืมกุญแจไว้ในรถ",
    distractors: ["を", "は", "で"]
  },
  {
    sentenceWithBlank: "窓[まど]から 海[うみ] _____ 見[み]えます。",
    correctAnswer: "が",
    thaiTranslation: "มองเห็นทะเลจากหน้าต่าง",
    distractors: ["を", "に", "は"]
  },
  {
    sentenceWithBlank: "鉛筆[えんぴつ] _____ 書[か]いてください。",
    correctAnswer: "で",
    thaiTranslation: "กรุณาเขียนด้วยดินสอ",
    distractors: ["を", "に", "から"]
  },
  {
    sentenceWithBlank: "_____ は 寒い[さむい]ですね。",
    correctAnswer: "冬[ふゆ]",
    thaiTranslation: "ฤดูหนาวหนาวเนอะ",
    distractors: ["夏[なつ]", "春[はる]", "秋[あき]"]
  },
  {
    sentenceWithBlank: "_____ が 痛[いた]いです。",
    correctAnswer: "頭[あたま]",
    thaiTranslation: "ปวดหัวครับ/คะ",
    distractors: ["手[て]", "足[あし]", "目[め]"]
  },
  {
    sentenceWithBlank: "_____ 映画[えいが]を 見[み]ました。",
    correctAnswer: "昨日[きのう]",
    thaiTranslation: "เมื่อวานดูหนังมา",
    distractors: ["明日[あした]", "今[いま]", "毎日[まいにち]"]
  },
  {
    sentenceWithBlank: "山[やま]の 高[たか]さは _____ ですか。",
    correctAnswer: "どのくらい",
    thaiTranslation: "ภูเขาสูงประมาณเท่าไหร่ครับ/คะ",
    distractors: ["どこ", "だれ", "なに"]
  },
  {
    sentenceWithBlank: "_____ は とても 綺麗[きれい]です。",
    correctAnswer: "京都[きょうと]",
    thaiTranslation: "เกียวโตสวยมาก",
    distractors: ["東京[とうきょう]", "大阪[おおさか]", "病院[びょういん]"]
  },
  {
    sentenceWithBlank: "音楽[おんがく]を _____ ながら 勉強[べんきょう]します。",
    correctAnswer: "聞き[きき]",
    thaiTranslation: "ฟังเพลงไปเรียนไป",
    distractors: ["見[み]", "食[た]べ", "書[か]き"]
  },
  {
    sentenceWithBlank: "お金[かね]が _____ ありません。",
    correctAnswer: "あまり",
    thaiTranslation: "ไม่ค่อยมีเงินเลย",
    distractors: ["とても", "たくさん", "ちょっと"]
  },
  {
    sentenceWithBlank: "_____ お菓子[かし]ですね。",
    correctAnswer: "甘い[あまい]",
    thaiTranslation: "ขนมหวานจังเลยนะ",
    distractors: ["辛い[からい]", "痛い[いたい]", "広い[ひろい]"]
  },
  {
    sentenceWithBlank: "電話[でんわ] _____ 話[はな]します。",
    correctAnswer: "で",
    thaiTranslation: "คุยทางโทรศัพท์",
    distractors: ["を", "に", "が"]
  },
  {
    sentenceWithBlank: "名前[なまえ]を _____ ください。",
    correctAnswer: "教[おし]えて",
    thaiTranslation: "ช่วยบอกชื่อหน่อยครับ/คะ",
    distractors: ["書[か]いて", "読[よ]んで", "聞[き]いて"]
  },
  {
    sentenceWithBlank: "背[せ]が _____ です。",
    correctAnswer: "高い[たかい]",
    thaiTranslation: "ตัวสูง",
    distractors: ["低い[ひくい]", "長い[ながい]", "短い[みじかい]"]
  },
  {
    sentenceWithBlank: "分[わ]からない 時[とき]は 辞書[じしょ]を _____。",
    correctAnswer: "引き[ひき]ます",
    thaiTranslation: "เวลาไม่เข้าใจจะเปิดพจนานุกรม",
    distractors: ["見[み]ます", "書[か]きます", "読み[よみ]ます"]
  }
];
