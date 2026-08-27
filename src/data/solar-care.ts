/* Тексты раздела Solar Care. Держим их отдельно от вёрстки: страницу читает
   человек, а не разметку, и правки текста не должны требовать похода в layout.
   Источник фактов — досье «ДОСЬЕ_Teranova_Solar_Care_2026-08-25.md» в базе
   знаний. Цифра возврата выработки и совместимость с конструкцией трекера
   там прямо помечены как то, что нельзя обещать до пилота, поэтому их нет и
   на странице. */

export type SolarLang = 'ru' | 'en';

export interface SolarStep {
  n: string;
  title: string;
  body: string;
}

export interface SolarCopy {
  meta: { title: string; description: string };
  hero: { kicker: string; title: string; lead: string; cta: string };
  intro: { title: string; body: string[] };
  how: { title: string; steps: SolarStep[] };
  honest: { title: string; body: string[] };
  equipment: { title: string; body: string; captions: string[] };
  cta: { title: string; body: string; button: string };
  back: string;
  footer: string;
}

export const solarCopy: Record<SolarLang, SolarCopy> = {
  ru: {
    meta: {
      title: 'Teranova Solar Care — обслуживание солнечных электростанций',
      description:
        'Направление Teranova: подбор и поставка техники для очистки солнечных модулей вместе с измерением результата на пилоте.',
    },
    hero: {
      kicker: 'Направление Teranova',
      title: 'Solar Care',
      lead: 'От оборудования к измеримому сервису для солнечных электростанций.',
      cta: 'Рассказать о площадке',
    },
    intro: {
      title: 'Что мы делаем',
      body: [
        'Солнечная станция теряет выработку из-за пыли и налёта на модулях. Технику для очистки продают многие, но заказчик остаётся один на один с вопросом, что именно изменится на его площадке и за какой срок.',
        'Мы собираем это в сервис. Подбираем технику корейских производителей под конструкцию и климат конкретной станции, организуем поставку и ввод в работу, а вокруг оборудования выстраиваем измерение: что делается, сколько времени занимает цикл и что происходит с выработкой.',
      ],
    },
    how: {
      title: 'Как мы работаем',
      steps: [
        {
          n: '01',
          title: 'Данные площадки',
          body: 'Собираем исходные сведения: тип конструкции, число рядов и модулей, климат, доступ к воде и энергии, действующий регламент обслуживания.',
        },
        {
          n: '02',
          title: 'Подбор техники',
          body: 'Под собранные данные подбираем оборудование и комплект запчастей. Считаем полную стоимость доставки и ввода в работу, а не только цену машины.',
        },
        {
          n: '03',
          title: 'Пилот с измерением',
          body: 'На пилоте измеряем восемь величин, среди них производительность цикла, расход воды, трудозатраты на мегаватт, безопасность работ и фактический возврат выработки.',
        },
        {
          n: '04',
          title: 'Решение о масштабировании',
          body: 'Показываем результаты измерений и считаем экономику для всей станции. Если цифры не сходятся, мы скажем об этом прямо.',
        },
      ],
    },
    honest: {
      title: 'Чего мы не обещаем заранее',
      body: [
        'До пилота мы не называем цифру возврата выработки и не подтверждаем совместимость с вашей конструкцией трекеров. Диапазоны, которые ходят по рынку, получены на других площадках и к вашей отношения не имеют.',
        'Характеристики техники, сроки службы и сертификацию мы подтверждаем документами производителя, а не пересказом. Если документа нет, мы так и говорим.',
      ],
    },
    equipment: {
      title: 'Оборудование',
      body: 'Работаем с сухими и влажными системами очистки для наземных станций с трекерами и для крышных массивов. Конкретная модель выбирается под площадку, поэтому мы начинаем с данных, а не с каталога.',
      captions: [
        'Наземный массив в пустынном климате',
        'Механизированная очистка',
        'Крышный массив',
      ],
    },
    cta: {
      title: 'Расскажите о площадке',
      body: 'Напишите мощность станции, тип конструкции и регион. Мы ответим, какие данные нужны для расчёта и что имеет смысл проверить на пилоте.',
      button: 'Написать нам',
    },
    back: 'Teranova Group',
    footer: 'Solar Care — направление Teranova Group. Корея.',
  },
  en: {
    meta: {
      title: 'Teranova Solar Care — service for solar power plants',
      description:
        'A Teranova business line: sourcing and supply of solar module cleaning equipment together with measured results proven on a pilot.',
    },
    hero: {
      kicker: 'A Teranova business line',
      title: 'Solar Care',
      lead: 'From equipment to a measurable service for solar power plants.',
      cta: 'Tell us about your site',
    },
    intro: {
      title: 'What we do',
      body: [
        'A solar plant loses output because dust and soiling settle on the modules. Many companies sell cleaning equipment, yet the owner is left alone with the real question: what exactly will change on this site, and how soon.',
        'We turn that into a service. We select equipment from Korean manufacturers to match the structure and climate of your plant, arrange delivery and commissioning, and build measurement around the machines: what is done, how long a cycle takes and what happens to output.',
      ],
    },
    how: {
      title: 'How we work',
      steps: [
        {
          n: '01',
          title: 'Site data',
          body: 'We collect the starting facts: structure type, number of rows and modules, climate, access to water and power, and the maintenance routine already in place.',
        },
        {
          n: '02',
          title: 'Equipment selection',
          body: 'Against that data we select the machines and the spare parts set. We calculate the full cost of delivery and commissioning, not the price of the machine alone.',
        },
        {
          n: '03',
          title: 'Pilot with measurement',
          body: 'On the pilot we measure eight values, among them cycle productivity, water consumption, labour hours per megawatt, safety of the work and the actual output recovered.',
        },
        {
          n: '04',
          title: 'Decision to scale',
          body: 'We show the measured results and run the economics for the whole plant. If the numbers do not add up, we will say so plainly.',
        },
      ],
    },
    honest: {
      title: 'What we do not promise in advance',
      body: [
        'Before the pilot we name no figure for recovered output and confirm no compatibility with your tracker structure. The ranges quoted around the market come from other sites and say nothing about yours.',
        'Equipment specifications, service life and certification are confirmed by manufacturer documents, not by retelling. When a document is missing, we say so.',
      ],
    },
    equipment: {
      title: 'Equipment',
      body: 'We work with dry and wet cleaning systems for ground-mounted plants on trackers and for rooftop arrays. The model is chosen for the site, which is why we start with data rather than with a catalogue.',
      captions: [
        'Ground-mounted array in a desert climate',
        'Mechanised cleaning',
        'Rooftop array',
      ],
    },
    cta: {
      title: 'Tell us about your site',
      body: 'Send us the plant capacity, the structure type and the region. We will reply with the data needed for the calculation and what is worth proving on a pilot.',
      button: 'Write to us',
    },
    back: 'Teranova Group',
    footer: 'Solar Care is a business line of Teranova Group. Korea.',
  },
};
