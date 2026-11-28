import type { APIRoute } from 'astro';
import { publicLocaleCodes } from '../i18n/locale-policy.mjs';

// The same locale policy controls routes, sitemap and this discovery file.
export const GET: APIRoute = () => {
  const text = `# Teranova Group

> B2B-платформа, которая находит, проверяет и сопровождает поставки от проверенных
> корейских производителей до международных покупателей. Юридическое лицо — Teranova Group Ltd.
> (Корея). Языковые версии: ${publicLocaleCodes.join(', ')}.
> Английская главная находится в корне, русская — под /ru/.
> Русские разделы находятся в корне, остальные версии — под /{lang}/.
> Исключение: /catalog/medical/ находится в корне на английском языке.

## Основные страницы

- [Главная](https://teranovagroup.com/): кто мы и чем занимаемся
- [Каталог направлений](https://teranovagroup.com/catalog): 7 направлений сорсинга из Кореи —
  судовое снабжение, косметика и уход (OEM/ODM), медицина и эстетика, промышленное
  оборудование, коммерческий и спецтранспорт, смежные направления, химия и материалы
- [О компании](https://teranovagroup.com/about): кто мы, где стоим на земле, кого сопровождаем
- [Как мы проверяем](https://teranovagroup.com/how-we-verify): статусы проверки поставщиков —
  документированный факт, а не обещание результата
- [Не нашли в каталоге](https://teranovagroup.com/buyers): подбор корейского завода под задачу
  покупателя
- [Корейским поставщикам](https://teranovagroup.com/suppliers): как разместиться в каталоге
  Teranova
- [Тендеры и закупки](https://teranovagroup.com/tenders): закупочные тендеры под ключ
- [Вопросы и ответы](https://teranovagroup.com/faq): проверка поставщиков, сопровождение
  сделки, логистика, документы и оплаты
- [Контакты](https://teranovagroup.com/contacts): почта по направлениям, телефон, KakaoTalk
- [Статьи и гиды](https://teranovagroup.com/blog): сертификация, OEM/ODM, логистика и проверка
  корейских поставщиков

## Прочее

- [Карта сайта](https://teranovagroup.com/sitemap-index.xml)
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
