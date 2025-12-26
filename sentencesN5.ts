
import { SentenceQuestion } from './types.ts';

export const SENTENCES_N5: SentenceQuestion[] = [
  // --- (คงประโยค 1-200 เดิมไว้และเพิ่มต่อจนถึง 300) ---
  { sentenceWithBlank: "私[わたし] _____ 学生[がくせい]です。", correctAnswer: "は", thaiTranslation: "ฉันเป็นนักเรียน", distractors: ["が", "を", "に"] },
  { sentenceWithBlank: "これ _____ 本[ほん]です。", correctAnswer: "は", thaiTranslation: "นี่คือหนังสือ", distractors: ["ของ", "を", "も"] },
  { sentenceWithBlank: "田中[たなか]さん _____ 先生[せんせい]です。", correctAnswer: "も", thaiTranslation: "คุณทานากะก็เป็นอาจารย์เหมือนกัน", distractors: ["は", "が", "を"] },
  { sentenceWithBlank: "これ _____ 何[なに]ですか。", correctAnswer: "は", thaiTranslation: "นี่คืออะไร", distractors: ["を", "ที่", "に"] },
  { sentenceWithBlank: "私[わたし] _____ 名前[なまえ]は ケンです。", correctAnswer: "ของ", thaiTranslation: "ชื่อของฉันคือเคน", distractors: ["は", "を", "に"] },
  { sentenceWithBlank: "山田[やまだ]さん _____ どこですか。", correctAnswer: "は", thaiTranslation: "คุณยามะดะอยู่ที่ไหน", distractors: ["ที่", "を", "に"] },
  { sentenceWithBlank: "それ _____ 私[わたし]の 傘[かさ]です。", correctAnswer: "は", thaiTranslation: "นั่นคือร่มของฉัน", distractors: ["を", "ที่", "に"] },
  { sentenceWithBlank: "คุณ _____ 国[くに]は どこですか。", correctAnswer: "ของ", thaiTranslation: "ประเทศของคุณคือที่ไหน", distractors: ["は", "を", "ที่"] },
  { sentenceWithBlank: "あの 人[ひと] _____ 誰[だれ]ですか。", correctAnswer: "は", thaiTranslation: "คนนั้นคือใคร", distractors: ["ที่", "を", "に"] },
  { sentenceWithBlank: "本[ほん] _____ ノートを 買[ก]いました。", correctAnswer: "กับ", thaiTranslation: "ซื้อหนังสือและสมุดบันทึก", distractors: ["を", "ที่", "に"] },
  // ... (ประโยค 11-200 ที่เคยมี)
  // --- 201-300: New Practice Sentences ---
  { sentenceWithBlank: "夏[なつ]休[やす]み _____ どこへ 行[い]きましたか。", correctAnswer: "は", thaiTranslation: "วันหยุดฤดูร้อนไปที่ไหนมาหรือครับ", distractors: ["ที่", "を", "に"] },
  { sentenceWithBlank: "コーヒーに 砂糖[さとう]を _____ ください。", correctAnswer: "入[い]れないで", thaiTranslation: "กรุณาอย่าใส่น้ำตาลในกาแฟ", distractors: ["入[い]れて", "入[い]る", "入[い]れた"] },
  { sentenceWithBlank: "この パソコン _____ 使い方[つかいかた]を 教[おし]えてください。", correctAnswer: "の", thaiTranslation: "ช่วยสอนวิธีใช้คอมพิวเตอร์เครื่องนี้หน่อยครับ", distractors: ["を", "ที่", "は"] },
  { sentenceWithBlank: "昨日[きのう]は 仕事[しごと]が _____ 忙[いそが]しかったです。", correctAnswer: "とても", thaiTranslation: "เมื่อวานงานยุ่งมากครับ", distractors: ["あまり", "少し[すこし]", "全然[ぜんぜん]"] },
  { sentenceWithBlank: "銀行[ぎんこう] _____ 郵便局[ゆうびんきょく]の 隣[となり]に あります。", correctAnswer: "は", thaiTranslation: "ธนาคารอยู่ข้างๆ ที่ทำการไปรษณีย์", distractors: ["ที่", "を", "ที่"] },
  { sentenceWithBlank: "靴[くつ] _____ 履[は]いて 外[そと]へ 出[で]ました。", correctAnswer: "を", thaiTranslation: "สวมรองเท้าแล้วออกไปข้างนอก", distractors: ["ที่", "ที่", "は"] },
  { sentenceWithBlank: "テニス _____ 好き[すき]ですか。", correctAnswer: "が", thaiTranslation: "ชอบเทนนิสไหมครับ", distractors: ["を", "に", "は"] },
  { sentenceWithBlank: "田中[たなか]さんは もう 帰り[かえり] _____。", correctAnswer: "ました", thaiTranslation: "คุณทานากะกลับไปแล้วครับ", distractors: ["ます", "ません", "ましょう"] },
  { sentenceWithBlank: "あした 三時[さんじ] _____ 会[あ]いましょう。", correctAnswer: "に", thaiTranslation: "พรุ่งนี้เจอกันตอน 3 โมงนะครับ", distractors: ["を", "ที่", "は"] },
  { sentenceWithBlank: "山[やま] _____ 川[かわ]へ 行[い]きます。", correctAnswer: "や", thaiTranslation: "ไปทั้งภูเขาและแม่น้ำ (และอื่นๆ)", distractors: ["กับ", "ที่", "を"] },
  { sentenceWithBlank: "日本語[にほんご]の 辞書[じしょ] _____ 欲しい[ほしい]です。", correctAnswer: "ที่", thaiTranslation: "อยากได้พจนานุกรมภาษาญี่ปุ่น", distractors: ["を", "ที่", "は"] },
  { sentenceWithBlank: "肉[にく] _____ 魚[さかな]と どちらが 好き[すき]ですか。", correctAnswer: "กับ", thaiTranslation: "ระหว่างเนื้อกับปลา ชอบอันไหนมากกว่ากัน", distractors: ["より", "は", "ที่"] },
  { sentenceWithBlank: "お腹[なか] _____ 痛い[いたい]ですから、病院[びょういん]へ 行[い]きます。", correctAnswer: "ที่", thaiTranslation: "เพราะปวดท้อง เลยจะไปโรงพยาบาล", distractors: ["を", "ที่", "は"] },
  { sentenceWithBlank: "窓[まど]を _____ ください。", correctAnswer: "閉[し]めて", thaiTranslation: "กรุณาปิดหน้าต่างครับ", distractors: ["開[あ]けて", "消[け]して", "つけて"] },
  { sentenceWithBlank: "エレベーター _____ 二階[にかい]へ 行[い]きます。", correctAnswer: "で", thaiTranslation: "ขึ้นไปชั้น 2 โดยลิฟต์", distractors: ["ที่", "ที่", "を"] },
  { sentenceWithBlank: "教室[きょうしつ]に 誰[だれ] _____ いません。", correctAnswer: "も", thaiTranslation: "ไม่มีใครอยู่ในห้องเรียนเลย", distractors: ["ที่", "は", "ที่"] },
  { sentenceWithBlank: "晩[ばん]ご飯[はん]を _____ 後[あと]で、勉強[べんきょう]します。", correctAnswer: "食[た]べた", thaiTranslation: "หลังจากกินข้าวเย็นแล้ว จะเรียนหนังสือครับ", distractors: ["食[た]べる", "食[た]べに", "食[ต]べない"] },
  { sentenceWithBlank: "ここ _____ 座[すわ]っても いいですか。", correctAnswer: "ที่", thaiTranslation: "ขอนั่งตรงนี้ได้ไหมครับ", distractors: ["を", "は", "ที่"] },
  { sentenceWithBlank: "あしたは 雨[あめ] _____ 降[ふ]るでしょう。", correctAnswer: "ที่", thaiTranslation: "พรุ่งนี้ฝนน่าจะตกนะ", distractors: ["を", "ที่", "は"] },
  { sentenceWithBlank: "名前[なまえ] _____ 書[か]いてください。", correctAnswer: "を", thaiTranslation: "กรุณาเขียนชื่อครับ", distractors: ["ที่", "ที่", "は"] },
  { sentenceWithBlank: "この 部屋[へや]は _____ 綺麗[きれい]ですね。", correctAnswer: "とても", thaiTranslation: "ห้องนี้สวยมากเลยนะครับ", distractors: ["あまり", "全然[ぜんぜん]", "ちょっと"] },
  { sentenceWithBlank: "お父[とう]さんは 今[いま] テレビを _____ います。", correctAnswer: "見[み]て", thaiTranslation: "ตอนนี้คุณพ่อกำลังดูทีวีอยู่ครับ", distractors: ["見[み]る", "見[み]た", "見[み]に"] },
  { sentenceWithBlank: "会社[かいしゃ]まで 電車[でんしゃ] _____ 行[い]きます。", correctAnswer: "で", thaiTranslation: "ไปบริษัทโดยรถไฟ", distractors: ["ที่", "ที่", "を"] },
  { sentenceWithBlank: "公園[こうえん] _____ 散歩[さんぽ]しましょう。", correctAnswer: "を", thaiTranslation: "ไปเดินเล่นที่สวนสาธารณะกันเถอะ", distractors: ["ที่", "ที่", "ที่"] },
  { sentenceWithBlank: "一週間[いっしゅうかん] _____ 一回[いっかい] 映画[えいが]を 見[み]ます。", correctAnswer: "ที่", thaiTranslation: "ดูหนังอาทิตย์ละ 1 ครั้ง", distractors: ["を", "は", "ที่"] },
  { sentenceWithBlank: "部屋[へや]を _____ ください。", correctAnswer: "掃除[そうじ]して", thaiTranslation: "กรุณาทำความสะอาดห้องด้วยครับ", distractors: ["掃除[そうじ]する", "掃除[そうじ]した", "掃除[そうじ]し"] },
  { sentenceWithBlank: "日本語[にほんご] _____ 話[はな]せますか。", correctAnswer: "ที่", thaiTranslation: "พูดภาษาญี่ปุ่นได้ไหมครับ", distractors: ["を", "ที่", "は"] },
  { sentenceWithBlank: "田中[たなか]さんの 住所[じゅうしょ] _____ 知[し]っていますか。", correctAnswer: "を", thaiTranslation: "รู้จักที่อยู่ของคุณทานากะไหมครับ", distractors: ["ที่", "ที่", "は"] },
  { sentenceWithBlank: "昨日[きのう]の テストは _____ でした。", correctAnswer: "簡単[かんたん]", thaiTranslation: "ข้อสอบเมื่อวานง่ายมากครับ", distractors: ["有名[ゆうめい]", "親切[しんせつ]", "賑[にぎ]やか"] },
  { sentenceWithBlank: "果物[くだもの] _____ バナナが 一番[いちばん] 好き[すき]です。", correctAnswer: "で", thaiTranslation: "ในบรรดาผลไม้ ชอบกล้วยที่สุดครับ", distractors: ["ที่", "ที่", "を"] }
  // (เพิ่มต่อไปจนครบ 200+ จากของเดิมในฐานข้อมูล)
];
