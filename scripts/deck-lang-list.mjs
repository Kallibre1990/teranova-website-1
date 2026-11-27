/* Число и список языков профиля — считаются из src/i18n/locale-policy.mjs,
   а не вписываются руками: вписанное число устаревает молча при каждом новом
   опубликованном языке (T-20261127-030: было "одиннадцать", на деле 13). */
import { publicLocaleCodes } from '../src/i18n/locale-policy.mjs';

const NAMES = {
  ru: { en: 'английском', ko: 'корейском', zh: 'китайском', ja: 'японском', ru: 'русском',
    es: 'испанском', pt: 'португальском', de: 'немецком', fr: 'французском', it: 'итальянском',
    tr: 'турецком', he: 'иврите', hi: 'хинди', ar: 'арабском' },
  en: { en: 'English', ko: 'Korean', zh: 'Chinese', ja: 'Japanese', ru: 'Russian',
    es: 'Spanish', pt: 'Portuguese', de: 'German', fr: 'French', it: 'Italian',
    tr: 'Turkish', he: 'Hebrew', hi: 'Hindi', ar: 'Arabic' },
  ko: { en: '영어', ko: '한국어', zh: '중국어', ja: '일본어', ru: '러시아어',
    es: '스페인어', pt: '포르투갈어', de: '독일어', fr: '프랑스어', it: '이탈리아어',
    tr: '터키어', he: '히브리어', hi: '힌디어', ar: '아랍어' },
};

export const langCount = publicLocaleCodes.length;

/* "английском, корейском ... и турецком" / "English, Korean ... and Turkish" /
   "영어, 한국어 ... 터키어" — предлог/падеж вокруг этой строки остаётся в тексте
   деки, здесь только перечисление названий. */
export function langNamesList(deckLang) {
  const names = NAMES[deckLang] || NAMES.en;
  const list = publicLocaleCodes.map((c) => names[c] || c);
  if (deckLang === 'ko') return list.join(', ');
  const conj = deckLang === 'ru' ? ' и ' : ' and ';
  return list.length > 1 ? `${list.slice(0, -1).join(', ')}${conj}${list[list.length - 1]}` : list[0];
}
