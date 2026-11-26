// Simplified Chinese translation of the restricted public projection.
export const chineseCopy = {
  company: 'NOVAMEDINTL / EXSOLU', professionalTitle: '专业美容护理', skincare: '日常肌肤护理',
  about: '我们以自有品牌EXSOLU开发和生产专业化妆品及日常护肤产品，开展配方研究、定制OEM/ODM开发和生产质量控制。',
  story: 'EXSOLU的名称结合了Extraordinary与Solution。通过两个相辅相成的产品系列，我们将专业肌肤护理与日常居家护理相连接。',
  ingredients: '主要成分', description: '产品说明', pack: '包装',
  attribution: '以下产品说明及功效表述来自NOVAMEDINTL的产品资料，属于化妆品描述，并非经独立验证确立的临床结果。',
  caution: '我们为专业系列提供常规化妆品相关文件。产品分类及允许的使用方式取决于目标市场。请遵循产品说明；本目录不提供操作方案。',
  compositionNote: '此处列出产品资料中披露的部分成分，不代表完整的INCI成分表。',
  professional: '我们的专业系列包含17款产品，涵盖含生物聚合物、外泌体以及肌肤和头皮护理成分的配方。',
  daily: '我们的日常护肤系列包含五款产品，包括夜间面膜，以及用于保湿、紧致和改善肌肤光泽感的精华液。',
  notice: '请遵循产品说明及目标市场的要求。',
  nad: '制造商提示：禁止注射。雾化器使用形式；请遵循制造商的使用说明。',
} as const;

export const chineseBoosters: Record<string, { description: string; ingredients: string }> = {
  PCL: { description: '含无颗粒PCL胶体和透明质酸的化妆品配方，定位于肌肤紧致与充盈感护理。', ingredients: '无颗粒PCL胶体、透明质酸' },
  dPLLA: { description: '低分子量dPLLA配方，定位于肌肤紧致与充盈感护理。', ingredients: '低分子量dPLLA' },
  DAEMU: { description: '专业美容护理产品，定位为后续护理前的准备步骤。', ingredients: '' },
  YURI: { description: '专业美容护理产品，旨在使面部轮廓看起来更紧致。', ingredients: '' },
  PP: { description: '专业美容护理产品，定位于肌肤紧致与弹性护理。', ingredients: '' },
  'BOOST SOLUTION': { description: '含外泌体、胶原三肽和透明质酸的美容护理产品，用于保湿与弹性护理。', ingredients: '外泌体、胶原三肽、透明质酸' },
  'HYDRO-WHITE': { description: '含外泌体、透明质酸和氨甲环酸的美容护理产品，用于保湿，使肤色看起来更均匀。', ingredients: '外泌体、透明质酸、氨甲环酸' },
  'EXO-PLUS': { description: '含PDRN包覆外泌体的专业头皮护理产品。', ingredients: '10亿个纳米颗粒／PDRN包覆外泌体' },
  'EXOBENE-S': { description: '含外泌体、透明质酸和氨基酸的美容护理产品，旨在使肌肤看起来更光滑、紧致、水润。', ingredients: '外泌体、透明质酸、氨基酸' },
  'EXOBENE-H': { description: '含外泌体、烟酰胺、生物素和铜肽的头皮及头发护理产品。', ingredients: '外泌体、烟酰胺、生物素、铜肽' },
  SOSU: { description: '我们专业健康护理系列中的人参基产品。', ingredients: '' },
  SAMSHIN: { description: '我们专业健康护理系列中的植物基产品。', ingredients: '' },
  NOPA: { description: '我们专业健康护理系列中的植物基产品。', ingredients: '' },
  'DANGUN-S': { description: 'DANGUN健康护理系列中的人参基配方。', ingredients: '' },
  'DANGUN-SS': { description: 'DANGUN健康护理系列中的另一种浓度版本。', ingredients: '' },
  'DANGUN-SM': { description: 'DANGUN健康护理系列中的另一款配方。', ingredients: '' },
  'NAD+ AIR SHOT': { description: '每瓶含NAD+ 100 mg和NMN 40 mg。雾化器使用形式。', ingredients: '' },
};

export const chineseSkincare: Record<string, { name: string; description: string; ingredients: string }> = {
  S0: {
    name: '蛛丝壳聚糖超级面膜',
    description: '夜间涂于肌肤，次日早晨洗净。含壳聚糖（40,000 ppm）和蛛丝生物肽，可在肌肤表面形成柔软的保湿膜。夜间补充水分，帮助维持健康、平整的肌肤外观。',
    ingredients: '壳聚糖（40,000 ppm）、蛛丝生物肽（SR-PEPTIDE）、烟酰胺、氨甲环酸、复合胶原蛋白',
  },
  S1: {
    name: 'EXSOLU玫瑰紧致精华液',
    description: '以玫瑰PDRN为核心，专为日常保湿与紧致护理开发。含玫瑰PDRN（水解DNA）、积雪草来源细胞外囊泡、维生素B12、腺苷、谷胱甘肽、透明质酸及九种胶原蛋白复合物。补充水分，旨在使肌肤看起来更紧致、柔韧、光滑、有活力。',
    ingredients: '玫瑰PDRN（水解DNA）、积雪草（CICA）来源细胞外囊泡、维生素B12、腺苷、谷胱甘肽、透明质酸、九种胶原蛋白复合物',
  },
  S2: {
    name: 'EXSOLU人参焕亮精华液',
    description: '日常使用的精华液，旨在使肌肤看起来更明亮、有活力。含人参PDRN、烟酰胺、氨甲环酸、谷胱甘肽和维生素C。透明质酸、银耳多糖和九种胶原蛋白复合物补充水分，旨在使肌肤看起来水润、光滑、有光泽。',
    ingredients: '人参PDRN、烟酰胺、氨甲环酸、谷胱甘肽、维生素C、九种胶原蛋白复合物',
  },
  S3: {
    name: 'EXSOLU囊泡焕亮精华液·密集护理型',
    description: '专为需要密集护理的部位开发，涵盖眼周、唇周及腋下、比基尼线等娇嫩部位。10 mL密集护理型用于特别护理，为需要集中护理的部位补充水分，旨在使肌肤看起来光滑、有光泽、健康。',
    ingredients: '西兰花来源细胞外囊泡、维生素B12、Reprosome™递送系统',
  },
  S4: {
    name: 'EXSOLU囊泡焕亮精华液·日常护理型',
    description: '适合融入日常护理，涵盖眼周、唇周及腋下、比基尼线等娇嫩部位。30 mL日常护理型用于日常保养，温和护理需要关注的部位，容量也适合较大范围使用。每天使用日常护理型补充水分，维持健康的肌肤外观；需要密集护理的部位可配合密集护理型。',
    ingredients: '西兰花来源细胞外囊泡、维生素B12、Reprosome™递送系统',
  },
};
