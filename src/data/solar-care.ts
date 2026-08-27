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

export interface SolarForm {
  title: string;
  lead: string;
  company: string;
  contact: string;
  email: string;
  phone: string;
  need: string;
  volume: string;
  timeline: string;
  comment: string;
  ph_company: string;
  ph_contact: string;
  ph_email: string;
  ph_phone: string;
  ph_need: string;
  ph_volume: string;
  ph_timeline: string;
  ph_comment: string;
  submit: string;
  note: string;
  err_need: string;
  err_contact: string;
  err_email: string;
  err_phone: string;
  err_network: string;
}

export interface SolarCopy {
  meta: { title: string; description: string };
  hero: { kicker: string; title: string; lead: string; cta: string };
  intro: { title: string; body: string[] };
  how: { title: string; steps: SolarStep[] };
  honest: { title: string; body: string[] };
  equipment: { title: string; body: string; captions: string[] };
  cta: { title: string; body: string; button: string };
  form: SolarForm;
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
        'Мы собираем это в сервис. Технику подбираем под конструкцию и климат конкретной станции, а не под страну происхождения: важно, чтобы машина подходила площадке. Дальше организуем поставку и ввод в работу, а вокруг оборудования выстраиваем измерение: что делается, сколько времени занимает цикл и что происходит с выработкой.',
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
    form: {
      title: 'Заявка с площадки',
      lead: 'Ответим, какие данные нужны для расчёта и что имеет смысл проверить на пилоте.',
      company: 'Компания',
      contact: 'Имя',
      email: 'Почта',
      phone: 'Телефон или мессенджер',
      need: 'Что за станция и что нужно',
      volume: 'Мощность, МВт',
      timeline: 'Сроки',
      comment: 'Комментарий',
      ph_company: 'Название компании',
      ph_contact: 'Как к вам обращаться',
      ph_email: 'name@company.com',
      ph_phone: 'Телефон, WhatsApp или Telegram',
      ph_need: 'Например: наземная станция на трекерах, нужна очистка модулей',
      ph_volume: 'Например: 120',
      ph_timeline: 'Например: пилот в этом квартале',
      ph_comment: 'Что важно знать заранее',
      submit: 'Отправить заявку',
      note: 'Обязательно описание задачи и хотя бы один способ связи: почта или телефон.',
      err_need: 'Напишите, что за станция и что нужно',
      err_contact: 'Оставьте почту или телефон, иначе мы не сможем ответить',
      err_email: 'Проверьте адрес почты',
      err_phone: 'Проверьте номер телефона',
      err_network: 'Не удалось отправить. Напишите нам на',
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
        'We turn that into a service. Equipment is selected to match the structure and climate of your plant rather than to match a country of origin: what matters is that the machine fits the site. We then arrange delivery and commissioning and build measurement around the machines: what is done, how long a cycle takes and what happens to output.',
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
    form: {
      title: 'Tell us about your site',
      lead: 'We will reply with the data needed for the calculation and what is worth proving on a pilot.',
      company: 'Company',
      contact: 'Name',
      email: 'Email',
      phone: 'Phone or messenger',
      need: 'The plant and what you need',
      volume: 'Capacity, MW',
      timeline: 'Timing',
      comment: 'Comment',
      ph_company: 'Company name',
      ph_contact: 'How to address you',
      ph_email: 'name@company.com',
      ph_phone: 'Phone, WhatsApp or Telegram',
      ph_need: 'For example: ground-mounted plant on trackers, module cleaning needed',
      ph_volume: 'For example: 120',
      ph_timeline: 'For example: pilot this quarter',
      ph_comment: 'Anything we should know up front',
      submit: 'Send request',
      note: 'The task description is required, along with at least one way to reach you: email or phone.',
      err_need: 'Please describe the plant and what you need',
      err_contact: 'Leave an email or a phone number so we can reply',
      err_email: 'Please check the email address',
      err_phone: 'Please check the phone number',
      err_network: 'Sending failed. Write to us at',
    },
    back: 'Teranova Group',
    footer: 'Solar Care is a business line of Teranova Group. Korea.',
  },
};
