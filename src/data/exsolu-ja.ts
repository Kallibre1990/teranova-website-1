// Japanese translation of the restricted public projection; source claims are not expanded.
export const japaneseCopy = {
  company: 'NOVAMEDINTL / EXSOLU', professionalTitle: 'プロフェッショナル向け化粧品', skincare: '毎日のスキンケア',
  about: '私たちは、自社ブランドEXSOLUのプロフェッショナル向け化粧品と毎日のスキンケア製品を開発・製造しています。処方の研究、お客様の要望に応じたOEM・ODM開発、生産品質管理に取り組んでいます。',
  story: 'EXSOLUは、ExtraordinaryとSolutionを組み合わせた名前です。相互に補完する2つの製品ラインを通じて、プロフェッショナルのスキンケアと日々のホームケアをつなぎます。',
  ingredients: '主な配合成分', description: '製品説明', pack: '包装',
  attribution: '以下の説明と効果は、NOVAMEDINTLの製品資料に記載されたものです。化粧品の説明であり、独立した検証によって確立された臨床結果を示すものではありません。',
  caution: 'プロフェッショナル向け製品ラインには、通常の化粧品関連書類を提供しています。製品の分類と認められる使用方法は、仕向け先の市場によって異なります。製品の使用説明書に従ってください。このカタログは施術手順を提供するものではありません。',
  compositionNote: '製品資料で開示している成分の一部を掲載しています。これらは全成分のINCIリストではありません。',
  professional: 'プロフェッショナル向けラインでは、バイオポリマー、エクソソーム、肌や頭皮のケア成分を配合した処方を含む17製品を展開しています。',
  daily: 'スキンケアラインは、ナイトマスクと、うるおい、ハリ、明るくつやのある印象の肌を目指す美容液の計5製品で構成しています。',
  notice: '製品の使用説明書と仕向け先市場の要件に従ってください。',
  nad: '製造元の指示：注射しないでください。ネブライザー用の形態です。製造元の使用説明書に従ってください。',
} as const;

export const japaneseBoosters: Record<string, { description: string; ingredients: string }> = {
  PCL: { description: '粒子を含まないPCLコロイドとヒアルロン酸を配合した化粧品処方です。肌のハリと密度感をケアします。', ingredients: '粒子を含まないPCLコロイド、ヒアルロン酸' },
  dPLLA: { description: '肌のハリと密度感をケアする低分子dPLLA処方です。', ingredients: '低分子dPLLA' },
  DAEMU: { description: '次のケアに入る前の準備段階として位置づける、プロフェッショナル向け化粧品です。', ingredients: '' },
  YURI: { description: '引き締まった印象のフェイスラインを目指す、プロフェッショナル向け化粧品です。', ingredients: '' },
  PP: { description: '肌のハリと弾力をケアする、プロフェッショナル向け化粧品です。', ingredients: '' },
  'BOOST SOLUTION': { description: 'エクソソーム、コラーゲントリペプチド、ヒアルロン酸を配合し、うるおいと弾力をケアする化粧品です。', ingredients: 'エクソソーム、コラーゲントリペプチド、ヒアルロン酸' },
  'HYDRO-WHITE': { description: 'エクソソーム、ヒアルロン酸、トラネキサム酸を配合し、うるおいを与え、均一な印象の肌色を目指す化粧品です。', ingredients: 'エクソソーム、ヒアルロン酸、トラネキサム酸' },
  'EXO-PLUS': { description: 'PDRNでコーティングしたエクソソームを配合した、プロフェッショナル向け頭皮ケア製品です。', ingredients: 'ナノ粒子10億個／PDRNでコーティングしたエクソソーム' },
  'EXOBENE-S': { description: 'エクソソーム、ヒアルロン酸、アミノ酸を配合し、なめらかでハリがあり、うるおった印象の肌を目指す化粧品です。', ingredients: 'エクソソーム、ヒアルロン酸、アミノ酸' },
  'EXOBENE-H': { description: 'エクソソーム、ナイアシンアミド、ビオチン、銅ペプチドを配合した頭皮・ヘアケア製品です。', ingredients: 'エクソソーム、ナイアシンアミド、ビオチン、銅ペプチド' },
  SOSU: { description: '当社のプロフェッショナル向けウェルネスラインに属する、高麗人参をベースとした製品です。', ingredients: '' },
  SAMSHIN: { description: '当社のプロフェッショナル向けウェルネスラインに属する、植物をベースとした製品です。', ingredients: '' },
  NOPA: { description: '当社のプロフェッショナル向けウェルネスラインに属する、植物をベースとした製品です。', ingredients: '' },
  'DANGUN-S': { description: 'DANGUNウェルネスラインの、高麗人参をベースとした処方です。', ingredients: '' },
  'DANGUN-SS': { description: 'DANGUNウェルネスラインで濃度を変えた製品です。', ingredients: '' },
  'DANGUN-SM': { description: 'DANGUNウェルネスラインの別処方の製品です。', ingredients: '' },
  'NAD+ AIR SHOT': { description: '1バイアルあたりNAD+ 100 mgとNMN 40 mgを含有します。ネブライザー用の形態です。', ingredients: '' },
};

export const japaneseSkincare: Record<string, { name: string; description: string; ingredients: string }> = {
  S0: {
    name: 'スパイダーシルク キトサン スーパーマスク',
    description: '夜に肌に塗り、翌朝に洗い流します。キトサン（40,000 ppm）とクモの糸由来のバイオペプチドを配合し、肌にやわらかな保湿膜を形成します。夜の間にうるおいを与え、健やかで整った印象の肌を保つのを助けます。',
    ingredients: 'キトサン（40,000 ppm）、クモの糸由来バイオペプチド（SR-PEPTIDE）、ナイアシンアミド、トラネキサム酸、複合コラーゲン',
  },
  S1: {
    name: 'EXSOLU ローズ ファーミング セラム',
    description: 'ローズPDRNを中心に、日々の保湿とハリのケアを目的として開発した美容液です。ローズPDRN（加水分解DNA）、ツボクサ由来の細胞外小胞、ビタミンB12、アデノシン、グルタチオン、ヒアルロン酸、9種のコラーゲン複合体を配合しています。うるおいを与え、ハリがあり、しなやかでなめらかな、いきいきとした印象の肌を目指します。',
    ingredients: 'ローズPDRN（加水分解DNA）、ツボクサ（CICA）由来の細胞外小胞、ビタミンB12、アデノシン、グルタチオン、ヒアルロン酸、9種のコラーゲン複合体',
  },
  S2: {
    name: 'EXSOLU ジンセン ブライトニング セラム',
    description: '明るくいきいきとした印象の肌を目指して開発した、毎日使う美容液です。高麗人参PDRN、ナイアシンアミド、トラネキサム酸、グルタチオン、ビタミンCを配合しています。ヒアルロン酸、シロキクラゲ多糖体、9種のコラーゲン複合体がうるおいを与え、つややかでなめらかな、うるおった印象の肌を目指します。',
    ingredients: '高麗人参PDRN、ナイアシンアミド、トラネキサム酸、グルタチオン、ビタミンC、9種のコラーゲン複合体',
  },
  S3: {
    name: 'EXSOLU ベシクルズ ブライトニング セラム インテンシブ',
    description: '目元・口元から、わきやビキニラインなどのデリケートな部分まで、気になる部位を集中的にケアするために開発した美容液です。インテンシブ10 mLはスペシャルケア用です。集中的なケアが必要な部位にうるおいを与え、なめらかでつやがあり、健やかな印象の肌を目指します。',
    ingredients: 'ブロッコリー由来の細胞外小胞、ビタミンB12、Reprosome™デリバリーシステム',
  },
  S4: {
    name: 'EXSOLU ベシクルズ ブライトニング セラム デイリー',
    description: '目元・口元から、わきやビキニラインなどのデリケートな部分まで、毎日のケアに取り入れやすいよう設計した美容液です。デイリー30 mLは日常のお手入れ用です。気になる部位をやさしくケアし、30 mLの容量で広い範囲にも使えます。毎日のデイリーでうるおいを与え、健やかな印象の肌を保ち、集中的なケアが必要な部位にはインテンシブを加えます。',
    ingredients: 'ブロッコリー由来の細胞外小胞、ビタミンB12、Reprosome™デリバリーシステム',
  },
};
