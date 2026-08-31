/* Тексты раздела Solar Care. Держим их отдельно от вёрстки: страницу читает
   человек, а не разметку, и правки текста не должны требовать похода в layout.
   Источник фактов — досье «ДОСЬЕ_Teranova_Solar_Care_2026-08-25.md» в базе
   знаний. Цифра возврата выработки и совместимость с конструкцией трекера
   там прямо помечены как то, что нельзя обещать до пилота, поэтому их нет и
   на странице. */

import type { Lang } from '../i18n/ui';

/* Раздел живёт на всех языках сайта: список языков берём из i18n, чтобы при
   добавлении новой локали расхождение вылезло на сборке, а не в выдаче. */
export type SolarLang = Lang;

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

export interface SolarScheme {
  n: string;
  title: string;
  body: string;
  points: string[];
}

export interface SolarCopy {
  meta: { title: string; description: string };
  hero: { kicker: string; title: string; lead: string; cta: string };
  intro: { title: string; body: string[] };
  how: { title: string; steps: SolarStep[] };
  honest: { title: string; body: string[] };
  equipment: { title: string; body: string; captions: string[] };
  schemes: { title: string; lead: string; items: SolarScheme[]; price: string };
  cases: { title: string; body: string; captions: string[] };
  cta: { title: string; body: string; button: string };
  form: SolarForm;
  back: string;
  footer: string;
}

export const solarCopy: Record<Lang, SolarCopy> = {
  ru: {
    meta: {
      title: 'Солнечные станции: обслуживание и очистка модулей — Teranova',
      description:
        'Направление Teranova: подбор и поставка техники для очистки солнечных модулей и программа пилота, которая проверяет результат на вашей площадке.',
    },
    hero: {
      kicker: 'Направление Teranova',
      title: 'Солнечные станции',
      lead: 'От оборудования к сервису, результат которого измерен на вашей площадке.',
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
          body: 'В программу пилота закладываем восемь показателей, в том числе производительность цикла, расход воды, трудозатраты на мегаватт, безопасность работ и фактический возврат выработки. До начала работ письменно фиксируем методику замера и ответственного за снятие показаний на площадке.',
        },
        {
          n: '04',
          title: 'Решение о масштабировании',
          body: 'По данным пилота считаем экономику для всей станции. Если цифры не сходятся, мы скажем об этом прямо.',
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
    schemes: {
      title: 'Три способа работать с нами',
      lead: 'Схему выбирает заказчик. Разница в том, кто обслуживает модули дальше — ваша служба эксплуатации или мы.',
      items: [
        {
          n: '01',
          title: 'Под ключ',
          body: 'Мы приезжаем на площадку, настраиваем оборудование и проводим испытания. Вы видите, как техника работает на вашей конструкции и в вашем климате, а не на чужой площадке. Если результат устраивает, дальше станцию обслуживаем мы.',
          points: ['Выезд команды с оборудованием', 'Испытания на вашей конструкции', 'Обслуживание силами Teranova'],
        },
        {
          n: '02',
          title: 'Оборудование и обучение',
          body: 'Вы покупаете технику, мы привозим её, устанавливаем на ваших модулях и обучаем вашу службу эксплуатации. Дальше станцию обслуживаете вы, а мы остаёмся на связи по запчастям и вопросам эксплуатации.',
          points: ['Поставка и монтаж', 'Обучение персонала', 'Запчасти и поддержка'],
        },
        {
          n: '03',
          title: 'Поставка в порт',
          body: 'Если у вас своя служба и вы знаете, что именно нужно, мы подбираем комплект, проверяем производителя и доводим груз до вашего порта. Монтаж и эксплуатация остаются на вашей стороне.',
          points: ['Подбор комплекта', 'Проверка производителя', 'Доставка до порта'],
        },
      ],
      price: 'Стоимость выезда, испытаний и обслуживания считаем под площадку: она зависит от мощности станции, типа конструкции, доступа к воде и удалённости объекта. Цену называем после данных площадки — до них любая цифра была бы догадкой.',
    },
    cases: {
      title: 'Как это выглядит на объектах',
      body: 'Показываем как есть: это работа машин, которые мы поставляем, а не наши собственные объекты.',
      captions: ['Крышный массив, Малайзия', 'Крышный массив, Пакистан', 'Наземный массив, США'],
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
    footer: 'Направление Teranova Group. Корея.',
  },
  en: {
    meta: {
      title: 'Solar Care — service for solar power plants · Teranova',
      description:
        'A Teranova business line: sourcing and supply of solar module cleaning equipment, with a pilot programme that measures the result on your own site.',
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
          body: 'The pilot programme covers eight values, among them cycle productivity, water consumption, labour hours per megawatt, safety of the work and the output actually recovered. Before it starts we put in writing how the measuring is done and who takes the readings on site.',
        },
        {
          n: '04',
          title: 'Decision to scale',
          body: 'From the pilot data we run the economics for the whole plant. If the numbers do not add up, we will say so plainly.',
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
    schemes: {
      title: 'Three ways to work with us',
      lead: 'The client picks the scheme. What changes is who maintains the modules afterwards — your own team or ours.',
      items: [
        {
          n: '01',
          title: 'Turnkey',
          body: 'We come to the site, set up the equipment and run trials for several days. You see how the machines behave on your own structure and in your own climate, not on somebody else’s site. If the result holds up, we take over servicing the plant.',
          points: ['Our team travels with the equipment', 'Trials on your own structure', 'Servicing by Teranova'],
        },
        {
          n: '02',
          title: 'Equipment and training',
          body: 'You buy the machines, we ship them, install them on your modules and train your maintenance staff. From then on you run the plant yourselves, and we stay available for spare parts and operating questions.',
          points: ['Delivery and installation', 'Training for your staff', 'Spare parts and support'],
        },
        {
          n: '03',
          title: 'Delivery to your port',
          body: 'If you have your own team and know what you need, we select the set, vet the manufacturer and bring the goods to your port. Installation and operation stay on your side.',
          points: ['Selection of the set', 'Manufacturer vetting', 'Delivery to the port'],
        },
      ],
      price: 'The cost of the visit, the trials and the service is calculated for the site: it depends on plant capacity, structure type, access to water and how far the site is. We name a price once we have the site data — before that any figure would be a guess.',
    },
    cases: {
      title: 'What it looks like on site',
      body: 'We show it as it is: this is the work of the machines we supply, not our own installations.',
      captions: ['Rooftop array, Malaysia', 'Rooftop array, Pakistan', 'Ground-mounted array, USA'],
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
    footer: 'A business line of Teranova Group. Korea.',
  },
  ko: {
    meta: {
      title: '태양광 발전소 관리 — 모듈 세척과 유지보수 · Teranova',
      description:
        '테라노바의 사업 부문입니다. 태양광 모듈 세척 장비를 선정해 공급하고, 결과를 현장에서 확인하는 파일럿 프로그램을 함께 설계합니다.',
    },
    hero: {
      kicker: '테라노바 사업 부문',
      title: '태양광 발전소 관리',
      lead: '장비 공급에서 결과가 측정되는 서비스로.',
      cta: '발전소에 대해 알려 주십시오',
    },
    intro: {
      title: '저희가 하는 일',
      body: [
        '태양광 발전소는 모듈에 쌓이는 먼지와 오염 때문에 발전량을 잃습니다. 세척 장비를 파는 회사는 많지만, 이 현장에서 무엇이 얼마나 달라지는가 하는 정작 중요한 질문은 발전소 측이 혼자 떠안게 됩니다.',
        '저희는 이것을 하나의 서비스로 묶습니다. 장비는 원산지가 아니라 발전소의 구조와 기후에 맞추어 고릅니다. 중요한 것은 장비가 현장에 맞는가입니다. 이어서 운송과 시운전을 진행하고, 장비 주위에 측정 체계를 세웁니다. 무엇을 하는지, 한 사이클에 얼마나 걸리는지, 발전량이 어떻게 달라지는지를 기록합니다.',
      ],
    },
    how: {
      title: '진행 방식',
      steps: [
        {
          n: '01',
          title: '현장 데이터',
          body: '기초 자료를 모읍니다. 구조물 형식, 열과 모듈 수량, 기후, 용수와 전원 접근성, 현재 운영 중인 유지관리 규정입니다.',
        },
        {
          n: '02',
          title: '장비 선정',
          body: '수집한 자료에 맞추어 장비와 예비품 세트를 고릅니다. 장비 가격만이 아니라 운송과 시운전까지 포함한 총비용을 계산합니다.',
        },
        {
          n: '03',
          title: '측정을 포함한 파일럿',
          body: '파일럿 계획에 여덟 가지 값을 넣습니다. 사이클 생산성, 용수 사용량, 메가와트당 작업 시간, 작업 안전, 실제로 회복된 발전량 등입니다. 시작 전에 측정 방법과 현장에서 수치를 읽는 담당자를 문서로 정합니다.',
        },
        {
          n: '04',
          title: '확대 여부 결정',
          body: '파일럿 자료로 발전소 전체의 경제성을 계산합니다. 숫자가 맞지 않으면 그대로 말씀드립니다.',
        },
      ],
    },
    honest: {
      title: '미리 약속하지 않는 것',
      body: [
        '파일럿 전에는 회복되는 발전량 수치를 말씀드리지 않고, 귀사의 트래커 구조와의 호환성도 확정하지 않습니다. 시장에 도는 수치는 다른 현장에서 나온 것이며 귀사의 현장에 대해서는 아무것도 말해 주지 않습니다.',
        '장비 사양과 수명, 인증은 전해 들은 말이 아니라 제조사 문서로 확인합니다. 문서가 없으면 없다고 말씀드립니다.',
      ],
    },
    equipment: {
      title: '장비',
      body: '트래커를 갖춘 지상 발전소와 지붕형 어레이를 대상으로 건식과 습식 세척 시스템을 다룹니다. 모델은 현장에 맞추어 고르기 때문에, 카탈로그가 아니라 자료에서 시작합니다.',
      captions: ['사막 기후의 지상 어레이', '기계식 세척', '지붕형 어레이'],
    },
    cta: {
      title: '발전소에 대해 알려 주십시오',
      body: '발전 용량과 구조물 형식, 지역을 보내 주십시오. 계산에 필요한 자료와 파일럿에서 확인할 만한 항목을 회신해 드립니다.',
      button: '문의하기',
    },
    schemes: {
      title: '함께 일하는 세 가지 방식',
      lead: '방식은 고객이 고릅니다. 차이는 이후 모듈을 누가 관리하는가입니다. 귀사의 운영팀인지, 저희인지.',
      items: [
        {
          n: '01',
          title: '턴키',
          body: '저희가 현장에 가서 장비를 설치하고 며칠 동안 시험을 진행합니다. 남의 현장이 아니라 귀사의 구조물과 기후에서 장비가 어떻게 작동하는지 직접 보실 수 있습니다. 결과가 맞으면 이후 유지관리는 저희가 맡습니다.',
          points: ['장비를 갖춘 팀의 현장 방문', '귀사 구조물에서의 시험', 'Teranova의 유지관리'],
        },
        {
          n: '02',
          title: '장비 공급과 교육',
          body: '장비를 구매하시면 저희가 운송해 귀사 모듈에 설치하고 운영 인력을 교육합니다. 이후 운영은 귀사가 맡고, 저희는 예비품과 운용 문의에 계속 대응합니다.',
          points: ['운송과 설치', '인력 교육', '예비품과 지원'],
        },
        {
          n: '03',
          title: '항구까지 공급',
          body: '자체 운영팀이 있고 필요한 것이 분명하다면, 저희가 구성을 정하고 제조사를 검증해 귀사 항구까지 화물을 보냅니다. 설치와 운용은 귀사 몫입니다.',
          points: ['구성 선정', '제조사 검증', '항구까지 운송'],
        },
      ],
      price: '방문과 시험, 유지관리 비용은 현장에 맞추어 계산합니다. 발전 용량, 구조물 형식, 용수 접근성, 현장까지의 거리에 따라 달라집니다. 현장 자료를 받은 뒤에 가격을 말씀드립니다. 그전의 숫자는 추측일 뿐입니다.',
    },
    cases: {
      title: '현장에서는 이렇게 보입니다',
      body: '있는 그대로 보여 드립니다. 저희가 공급하는 장비의 작업이며, 저희 자체 현장은 아닙니다.',
      captions: ['지붕형 어레이, 말레이시아', '지붕형 어레이, 파키스탄', '지상 어레이, 미국'],
    },
    form: {
      title: '현장 문의',
      lead: '계산에 필요한 자료와 파일럿에서 확인할 만한 항목을 회신해 드립니다.',
      company: '회사',
      contact: '성함',
      email: '이메일',
      phone: '전화 또는 메신저',
      need: '어떤 발전소이고 무엇이 필요한지',
      volume: '용량, MW',
      timeline: '일정',
      comment: '추가 사항',
      ph_company: '회사명',
      ph_contact: '어떻게 불러 드릴까요',
      ph_email: 'name@company.com',
      ph_phone: '전화, WhatsApp 또는 Telegram',
      ph_need: '예: 트래커 지상 발전소, 모듈 세척 필요',
      ph_volume: '예: 120',
      ph_timeline: '예: 이번 분기 파일럿',
      ph_comment: '미리 알아야 할 사항',
      submit: '문의 보내기',
      note: '필요한 작업 설명과 연락 방법 하나는 반드시 남겨 주십시오. 이메일 또는 전화입니다.',
      err_need: '어떤 발전소이고 무엇이 필요한지 적어 주십시오',
      err_contact: '회신할 수 있도록 이메일이나 전화번호를 남겨 주십시오',
      err_email: '이메일 주소를 확인해 주십시오',
      err_phone: '전화번호를 확인해 주십시오',
      err_network: '전송하지 못했습니다. 다음 주소로 보내 주십시오:',
    },
    back: 'Teranova Group',
    footer: '테라노바 그룹의 사업 부문입니다. 한국.',
  },
  zh: {
    meta: {
      title: '光伏电站运维 — 组件清洗与维护 · Teranova',
      description:
        'Teranova 的业务方向：为光伏组件清洗选型并供货，并制定在贵方现场检验结果的试点方案。',
    },
    hero: {
      kicker: 'Teranova 业务方向',
      title: '光伏电站运维',
      lead: '从设备供应，到结果可测量的服务。',
      cta: '介绍一下您的电站',
    },
    intro: {
      title: '我们做什么',
      body: [
        '灰尘和积垢落在组件上，电站的发电量随之下降。卖清洗设备的公司很多，可是真正的问题留给了业主自己：在这座电站上究竟会有什么变化，多久见效。',
        '我们把它做成一项服务。设备按电站的支架结构和气候来选，而不是按产地来选，关键是机器要适合现场。随后我们安排运输和调试，并围绕设备建立测量：做了什么，一个清洗周期用多长时间，发电量发生了什么变化。',
      ],
    },
    how: {
      title: '我们如何工作',
      steps: [
        {
          n: '01',
          title: '现场数据',
          body: '收集基础资料：支架形式、阵列排数与组件数量、气候、取水与用电条件，以及现行的运维规程。',
        },
        {
          n: '02',
          title: '设备选型',
          body: '依据这些资料选择机型和备件包。我们计算的是含运输与调试的全部成本，不是单台设备的报价。',
        },
        {
          n: '03',
          title: '带测量的试点',
          body: '试点方案里写入八项数值：清洗效率、用水量、每兆瓦人工工时、作业安全，以及实际挽回的发电量等。开工前以书面形式确定测量方法和在现场读数的负责人。',
        },
        {
          n: '04',
          title: '是否推广的决定',
          body: '依据试点数据核算整座电站的经济性。如果数字算不过来，我们会直说。',
        },
      ],
    },
    honest: {
      title: '我们不预先承诺的事',
      body: [
        '在试点之前，我们不给出挽回发电量的数字，也不确认与贵方跟踪支架的适配性。市面上流传的区间来自别的电站，说明不了贵方的情况。',
        '设备参数、使用寿命和认证以制造商文件为准，而不是口头转述。文件缺失时，我们就说缺失。',
      ],
    },
    equipment: {
      title: '设备',
      body: '我们做跟踪支架地面电站和屋顶阵列的干式与湿式清洗系统。机型按现场选定，所以我们从资料开始，而不是从样本册开始。',
      captions: ['沙漠气候下的地面阵列', '机械化清洗', '屋顶阵列'],
    },
    cta: {
      title: '介绍一下您的电站',
      body: '请告诉我们电站容量、支架形式和所在地区。我们会回复测算所需的资料，以及试点上值得验证的内容。',
      button: '联系我们',
    },
    schemes: {
      title: '三种合作方式',
      lead: '方式由业主选择。区别在于此后由谁维护组件：贵方运维团队，还是我们。',
      items: [
        {
          n: '01',
          title: '全包',
          body: '我们带着设备到现场，装好后连续几天做试验。您看到的是设备在贵方支架和贵地气候下的表现，而不是别人的电站。结果合适，此后由我们负责维护。',
          points: ['团队携设备到场', '在贵方支架上试验', '由 Teranova 负责维护'],
        },
        {
          n: '02',
          title: '设备与培训',
          body: '您购买设备，我们运到现场，装到您的组件上，并培训贵方运维人员。此后由您自行维护，我们继续负责备件和运行答疑。',
          points: ['运输与安装', '人员培训', '备件与支持'],
        },
        {
          n: '03',
          title: '送到港口',
          body: '如果贵方有自己的队伍，也清楚需要什么，我们负责选型、核验制造商，并把货送到贵方港口。安装和运行由贵方负责。',
          points: ['配置选型', '制造商核验', '送达港口'],
        },
      ],
      price: '出场、试验和维护的费用按现场核算：取决于电站容量、支架形式、取水条件和路程远近。拿到现场资料后我们才报价，在那之前任何数字都是猜测。',
    },
    cases: {
      title: '在现场是什么样',
      body: '我们照实呈现：这是我们供应的设备在工作，并非我们自有的电站。',
      captions: ['屋顶阵列，马来西亚', '屋顶阵列，巴基斯坦', '地面阵列，美国'],
    },
    form: {
      title: '电站需求提交',
      lead: '我们会回复测算所需的资料，以及试点上值得验证的内容。',
      company: '公司',
      contact: '称呼',
      email: '邮箱',
      phone: '电话或即时通讯',
      need: '电站情况与所需服务',
      volume: '容量，MW',
      timeline: '时间安排',
      comment: '备注',
      ph_company: '公司名称',
      ph_contact: '如何称呼您',
      ph_email: 'name@company.com',
      ph_phone: '电话、WhatsApp 或 Telegram',
      ph_need: '例如：跟踪支架地面电站，需要组件清洗',
      ph_volume: '例如：120',
      ph_timeline: '例如：本季度试点',
      ph_comment: '需要我们事先了解的情况',
      submit: '提交',
      note: '请填写需求说明，并至少留下一种联系方式：邮箱或电话。',
      err_need: '请写明电站情况和所需服务',
      err_contact: '请留下邮箱或电话，否则我们无法回复',
      err_email: '请检查邮箱地址',
      err_phone: '请检查电话号码',
      err_network: '发送失败。请写信到',
    },
    back: 'Teranova Group',
    footer: 'Teranova Group 的业务方向。韩国。',
  },
  ja: {
    meta: {
      title: '太陽光メンテナンス — モジュール清掃と保守 · Teranova',
      description:
        'Teranova の事業部門です。太陽光モジュール清掃設備の選定と供給を行い、現場で結果を確かめるパイロット計画を一緒に作ります。',
    },
    hero: {
      kicker: 'Teranova の事業部門',
      title: '太陽光メンテナンス',
      lead: '設備の供給から、測定できる発電所サービスへ。',
      cta: 'サイトについて教えてください',
    },
    intro: {
      title: '私たちの仕事',
      body: [
        '太陽光発電所は、モジュールに積もる砂ぼこりや汚れによって発電量を失います。清掃設備を売る会社は数多くありますが、このサイトで何がどれだけ変わるのかという肝心の問いは、事業者が一人で抱えたままです。',
        '私たちはそれをサービスにまとめます。設備は原産国ではなく、発電所の架台構造と気候に合わせて選びます。大切なのは機械がサイトに合うことです。そのうえで輸送と立ち上げを手配し、設備のまわりに測定を組み立てます。何を行い、1サイクルにどれだけかかり、発電量がどう変わるのかを記録します。',
      ],
    },
    how: {
      title: '進め方',
      steps: [
        {
          n: '01',
          title: 'サイトのデータ',
          body: '前提となる情報を集めます。架台の形式、列数とモジュール枚数、気候、水と電源の確保、現在の保守規程です。',
        },
        {
          n: '02',
          title: '設備の選定',
          body: '集めた情報をもとに機械と予備品一式を選びます。機械の価格だけでなく、輸送と立ち上げまで含めた総額を算出します。',
        },
        {
          n: '03',
          title: '測定を伴うパイロット',
          body: 'パイロットの計画に8つの値を入れます。サイクルの処理能力、水の使用量、メガワットあたりの作業工数、作業の安全性、実際に回復した発電量などです。開始前に、測定の方法と現場で数値を読む担当を書面で決めます。',
        },
        {
          n: '04',
          title: '展開の判断',
          body: 'パイロットの数値をもとに発電所全体の採算を計算します。数字が合わなければ、そのまま申し上げます。',
        },
      ],
    },
    honest: {
      title: '事前に約束しないこと',
      body: [
        'パイロットの前に、回復する発電量の数値は申し上げませんし、お使いのトラッカー架台との適合も確定しません。市場に出回る数値は別のサイトのものであり、御社のサイトについては何も語りません。',
        '設備の仕様、耐用年数、認証は、伝聞ではなくメーカーの文書で確認します。文書がない場合は、ないと申し上げます。',
      ],
    },
    equipment: {
      title: '設備',
      body: 'トラッカー付き地上設置の発電所と屋根置きアレイを対象に、乾式と湿式の清掃システムを扱います。機種はサイトに合わせて選ぶため、カタログではなくデータから始めます。',
      captions: ['砂漠気候の地上アレイ', '機械化された清掃', '屋根置きアレイ'],
    },
    cta: {
      title: 'サイトについて教えてください',
      body: '発電容量、架台の形式、地域をお知らせください。試算に必要なデータと、パイロットで確かめる価値のある項目をご返信します。',
      button: 'お問い合わせ',
    },
    schemes: {
      title: 'ご一緒する三つの方法',
      lead: '方式はお客様が選びます。違いは、その後モジュールを誰が保守するかです。御社の保守部門か、私たちか。',
      items: [
        {
          n: '01',
          title: 'ターンキー',
          body: '機材を持って現場に伺い、設置して数日間の試験を行います。他所の現場ではなく、御社の架台と気候で機械がどう動くかをご自身で確認いただけます。結果にご納得いただければ、以後の保守は私たちが担います。',
          points: ['機材を伴う現場訪問', '御社の架台での試験', 'Teranovaによる保守'],
        },
        {
          n: '02',
          title: '機材の供給と教育',
          body: '機械をご購入いただき、輸送してモジュールに設置し、御社の保守要員を教育します。以後の運用は御社が行い、私たちは予備品と運用のご質問に対応し続けます。',
          points: ['輸送と設置', '要員の教育', '予備品と支援'],
        },
        {
          n: '03',
          title: '港までの納入',
          body: '自社の要員がいて必要なものが定まっている場合は、構成を選び、メーカーを確認し、御社の港まで貨物を届けます。設置と運用は御社側です。',
          points: ['構成の選定', 'メーカーの確認', '港までの輸送'],
        },
      ],
      price: '訪問、試験、保守の費用は現場ごとに算出します。発電容量、架台の形式、水の確保、現場までの距離で変わります。現場のデータをいただいてから価格を申し上げます。それ以前の数字は推測にすぎません。',
    },
    cases: {
      title: '現場での見え方',
      body: 'そのままお見せします。私たちが供給する機械の作業であって、私たち自身の設備ではありません。',
      captions: ['屋根置きアレイ、マレーシア', '屋根置きアレイ、パキスタン', '地上設置アレイ、アメリカ'],
    },
    form: {
      title: 'サイトからのお問い合わせ',
      lead: '試算に必要なデータと、パイロットで確かめる価値のある項目をご返信します。',
      company: '会社名',
      contact: 'お名前',
      email: 'メール',
      phone: '電話またはメッセンジャー',
      need: '発電所の概要とご要望',
      volume: '容量（MW）',
      timeline: '時期',
      comment: '備考',
      ph_company: '会社の名称',
      ph_contact: 'お呼びする名前',
      ph_email: 'name@company.com',
      ph_phone: '電話、WhatsApp、Telegram',
      ph_need: '例：トラッカー式の地上発電所、モジュール清掃が必要',
      ph_volume: '例：120',
      ph_timeline: '例：今四半期にパイロット',
      ph_comment: '事前に知っておくべきこと',
      submit: '送信する',
      note: 'ご要望の内容と、メールまたは電話のいずれか一つの連絡先は必ずご記入ください。',
      err_need: '発電所の概要とご要望をご記入ください',
      err_contact: 'ご返信できるよう、メールまたは電話番号をお残しください',
      err_email: 'メールアドレスをご確認ください',
      err_phone: '電話番号をご確認ください',
      err_network: '送信できませんでした。こちらまでご連絡ください：',
    },
    back: 'Teranova Group',
    footer: 'Teranova Group の事業部門です。韓国。',
  },
  de: {
    meta: {
      title: 'Solaranlagen — Modulreinigung und Instandhaltung · Teranova',
      description:
        'Ein Geschäftsbereich von Teranova: Auswahl und Lieferung von Reinigungstechnik für Solarmodule, mit einem Pilotprogramm, das das Ergebnis auf Ihrer Anlage prüft.',
    },
    hero: {
      kicker: 'Ein Geschäftsbereich von Teranova',
      title: 'Solaranlagen',
      lead: 'Von der Technik zum messbaren Service für Solarkraftwerke.',
      cta: 'Erzählen Sie uns von Ihrer Anlage',
    },
    intro: {
      title: 'Was wir tun',
      body: [
        'Ein Solarkraftwerk verliert Ertrag, weil sich Staub und Schmutz auf den Modulen absetzen. Reinigungstechnik verkaufen viele, doch mit der eigentlichen Frage bleibt der Betreiber allein: Was ändert sich auf dieser Anlage konkret, und in welcher Zeit.',
        'Wir machen daraus einen Service. Die Technik wählen wir nach Unterkonstruktion und Klima der Anlage aus und nicht nach Herkunftsland, denn entscheidend ist, dass die Maschine zum Standort passt. Anschließend organisieren wir Lieferung und Inbetriebnahme und bauen um die Technik herum die Messung auf: was getan wird, wie lange ein Zyklus dauert und was mit dem Ertrag geschieht.',
      ],
    },
    how: {
      title: 'Wie wir arbeiten',
      steps: [
        {
          n: '01',
          title: 'Anlagendaten',
          body: 'Wir erfassen die Ausgangsdaten: Art der Unterkonstruktion, Zahl der Reihen und Module, Klima, Zugang zu Wasser und Strom sowie das bestehende Wartungsregime.',
        },
        {
          n: '02',
          title: 'Auswahl der Technik',
          body: 'Auf dieser Grundlage wählen wir Maschinen und Ersatzteilsatz aus. Wir rechnen die vollen Kosten bis zur Inbetriebnahme und nicht nur den Maschinenpreis.',
        },
        {
          n: '03',
          title: 'Pilot mit Messung',
          body: 'Das Pilotprogramm umfasst acht Größen, darunter Zyklusleistung, Wasserverbrauch, Arbeitsstunden je Megawatt, Arbeitssicherheit und den tatsächlich zurückgewonnenen Ertrag. Vor dem Start halten wir schriftlich fest, wie gemessen wird und wer die Werte auf der Anlage aufnimmt.',
        },
        {
          n: '04',
          title: 'Entscheidung über die Ausweitung',
          body: 'Aus den Pilotdaten rechnen wir die Wirtschaftlichkeit für die gesamte Anlage. Wenn die Zahlen nicht aufgehen, sagen wir das offen.',
        },
      ],
    },
    honest: {
      title: 'Was wir vorab nicht versprechen',
      body: [
        'Vor dem Pilotbetrieb nennen wir keine Zahl für den zurückgewonnenen Ertrag und bestätigen keine Eignung für Ihre Tracker-Konstruktion. Die Spannen, die am Markt kursieren, stammen von anderen Anlagen und sagen über Ihre nichts aus.',
        'Technische Daten, Lebensdauer und Zertifizierung bestätigen wir mit Herstellerdokumenten und nicht mit Erzählungen. Fehlt ein Dokument, sagen wir es.',
      ],
    },
    equipment: {
      title: 'Technik',
      body: 'Wir arbeiten mit trockenen und nassen Reinigungssystemen für Freiflächenanlagen auf Trackern und für Dachanlagen. Das Modell richtet sich nach dem Standort, deshalb beginnen wir mit Daten und nicht mit dem Katalog.',
      captions: ['Freiflächenanlage im Wüstenklima', 'Maschinelle Reinigung', 'Dachanlage'],
    },
    cta: {
      title: 'Erzählen Sie uns von Ihrer Anlage',
      body: 'Schreiben Sie uns die Leistung der Anlage, die Art der Unterkonstruktion und die Region. Wir antworten, welche Daten für die Berechnung nötig sind und was sich im Pilotbetrieb zu prüfen lohnt.',
      button: 'Schreiben Sie uns',
    },
    schemes: {
      title: 'Drei Wege der Zusammenarbeit',
      lead: 'Den Weg wählen Sie. Der Unterschied liegt darin, wer die Module danach betreut: Ihre Instandhaltung oder wir.',
      items: [
        {
          n: '01',
          title: 'Schlüsselfertig',
          body: 'Wir kommen mit der Technik auf die Anlage, richten sie ein und fahren mehrere Tage Versuche. Sie sehen, wie die Maschinen auf Ihrer Unterkonstruktion und in Ihrem Klima arbeiten, nicht auf einer fremden Anlage. Trägt das Ergebnis, übernehmen wir anschließend die Wartung.',
          points: ['Team reist mit der Technik an', 'Versuche auf Ihrer Unterkonstruktion', 'Wartung durch Teranova'],
        },
        {
          n: '02',
          title: 'Technik und Schulung',
          body: 'Sie kaufen die Maschinen, wir liefern sie, montieren sie auf Ihren Modulen und schulen Ihr Personal. Danach betreiben Sie die Anlage selbst, und wir bleiben für Ersatzteile und Betriebsfragen erreichbar.',
          points: ['Lieferung und Montage', 'Schulung des Personals', 'Ersatzteile und Unterstützung'],
        },
        {
          n: '03',
          title: 'Lieferung in Ihren Hafen',
          body: 'Wenn Sie eigenes Personal haben und wissen, was Sie brauchen, stellen wir den Satz zusammen, prüfen den Hersteller und bringen die Ware in Ihren Hafen. Montage und Betrieb bleiben bei Ihnen.',
          points: ['Zusammenstellung des Satzes', 'Prüfung des Herstellers', 'Lieferung bis zum Hafen'],
        },
      ],
      price: 'Die Kosten für Anreise, Versuche und Betreuung rechnen wir für die Anlage: sie hängen von Leistung, Unterkonstruktion, Wasserzugang und Entfernung ab. Einen Preis nennen wir nach den Anlagendaten, davor wäre jede Zahl geraten.',
    },
    cases: {
      title: 'Wie es auf der Anlage aussieht',
      body: 'Wir zeigen sie, wie sie sind: es ist die Arbeit der Maschinen, die wir liefern, und nicht unsere eigenen Anlagen.',
      captions: ['Dachanlage, Malaysia', 'Dachanlage, Pakistan', 'Freiflächenanlage, USA'],
    },
    form: {
      title: 'Anfrage von der Anlage',
      lead: 'Wir antworten, welche Daten für die Berechnung nötig sind und was sich im Pilotbetrieb zu prüfen lohnt.',
      company: 'Unternehmen',
      contact: 'Name',
      email: 'E-Mail',
      phone: 'Telefon oder Messenger',
      need: 'Die Anlage und Ihr Bedarf',
      volume: 'Leistung, MW',
      timeline: 'Zeitrahmen',
      comment: 'Kommentar',
      ph_company: 'Name des Unternehmens',
      ph_contact: 'Wie dürfen wir Sie ansprechen',
      ph_email: 'name@company.com',
      ph_phone: 'Telefon, WhatsApp oder Telegram',
      ph_need: 'Zum Beispiel: Freiflächenanlage auf Trackern, Modulreinigung nötig',
      ph_volume: 'Zum Beispiel: 120',
      ph_timeline: 'Zum Beispiel: Pilot in diesem Quartal',
      ph_comment: 'Was wir vorab wissen sollten',
      submit: 'Anfrage senden',
      note: 'Erforderlich sind die Beschreibung der Aufgabe und mindestens ein Kontaktweg: E-Mail oder Telefon.',
      err_need: 'Bitte beschreiben Sie die Anlage und Ihren Bedarf',
      err_contact: 'Hinterlassen Sie eine E-Mail oder eine Telefonnummer, damit wir antworten können',
      err_email: 'Bitte prüfen Sie die E-Mail-Adresse',
      err_phone: 'Bitte prüfen Sie die Telefonnummer',
      err_network: 'Senden fehlgeschlagen. Schreiben Sie uns an',
    },
    back: 'Teranova Group',
    footer: 'Ein Geschäftsbereich der Teranova Group. Korea.',
  },
  fr: {
    meta: {
      title: 'Centrales solaires — nettoyage des modules et maintenance · Teranova',
      description:
        'Une activité de Teranova : sélection et fourniture de matériel de nettoyage des modules, avec un programme pilote qui vérifie le résultat sur votre site.',
    },
    hero: {
      kicker: 'Une activité de Teranova',
      title: 'Centrales solaires',
      lead: 'Du matériel à un service dont le résultat est mesuré sur votre site.',
      cta: 'Parlez-nous de votre site',
    },
    intro: {
      title: 'Ce que nous faisons',
      body: [
        'Une centrale solaire perd de la production parce que la poussière et les salissures se déposent sur les modules. Beaucoup d’entreprises vendent du matériel de nettoyage, mais l’exploitant reste seul devant la vraie question : ce qui va changer sur ce site, et en combien de temps.',
        'Nous en faisons un service. Le matériel est choisi selon la structure et le climat de la centrale, et non selon le pays d’origine : ce qui compte, c’est que la machine convienne au site. Nous organisons ensuite la livraison et la mise en service, et nous construisons la mesure autour des machines : ce qui est fait, la durée d’un cycle et ce qu’il advient de la production.',
      ],
    },
    how: {
      title: 'Comment nous travaillons',
      steps: [
        {
          n: '01',
          title: 'Données du site',
          body: 'Nous réunissons les données de départ : type de structure, nombre de rangées et de modules, climat, accès à l’eau et à l’électricité, et le régime de maintenance déjà en place.',
        },
        {
          n: '02',
          title: 'Choix du matériel',
          body: 'Sur cette base, nous choisissons les machines et le lot de pièces de rechange. Nous calculons le coût complet jusqu’à la mise en service, et non le seul prix de la machine.',
        },
        {
          n: '03',
          title: 'Pilote avec mesure',
          body: 'Le programme du pilote porte sur huit valeurs, dont la productivité du cycle, la consommation d’eau, les heures de travail par mégawatt, la sécurité des opérations et la production réellement récupérée. Avant le démarrage, nous fixons par écrit la méthode de mesure et qui relève les valeurs sur le site.',
        },
        {
          n: '04',
          title: 'Décision d’étendre',
          body: 'À partir des données du pilote, nous calculons l’économie de la centrale entière. Si les chiffres ne tiennent pas, nous le disons franchement.',
        },
      ],
    },
    honest: {
      title: 'Ce que nous ne promettons pas à l’avance',
      body: [
        'Avant le pilote, nous n’avançons aucun chiffre de production récupérée et ne confirmons aucune compatibilité avec votre structure à suiveurs. Les fourchettes qui circulent sur le marché viennent d’autres sites et ne disent rien du vôtre.',
        'Les caractéristiques, la durée de vie et les certifications sont confirmées par les documents du fabricant, pas par un récit. Si un document manque, nous le disons.',
      ],
    },
    equipment: {
      title: 'Matériel',
      body: 'Nous travaillons avec des systèmes de nettoyage à sec et à l’eau, pour les centrales au sol sur suiveurs comme pour les toitures. Le modèle se choisit en fonction du site, c’est pourquoi nous commençons par les données et non par le catalogue.',
      captions: ['Centrale au sol en climat désertique', 'Nettoyage mécanisé', 'Installation en toiture'],
    },
    cta: {
      title: 'Parlez-nous de votre site',
      body: 'Indiquez-nous la puissance de la centrale, le type de structure et la région. Nous répondrons avec les données nécessaires au calcul et ce qu’il vaut la peine de vérifier sur un pilote.',
      button: 'Écrivez-nous',
    },
    schemes: {
      title: 'Trois façons de travailler avec nous',
      lead: 'Le client choisit la formule. Ce qui change, c’est qui entretient les modules ensuite : votre service de maintenance ou le nôtre.',
      items: [
        {
          n: '01',
          title: 'Clé en main',
          body: 'Nous venons sur le site avec le matériel, nous l’installons et nous menons des essais pendant plusieurs jours. Vous voyez comment les machines travaillent sur votre structure et sous votre climat, et non sur une centrale voisine. Si le résultat tient, nous assurons ensuite la maintenance.',
          points: ['L’équipe se déplace avec le matériel', 'Essais sur votre structure', 'Maintenance assurée par Teranova'],
        },
        {
          n: '02',
          title: 'Matériel et formation',
          body: 'Vous achetez les machines, nous les livrons, les installons sur vos modules et formons votre personnel. Ensuite, vous entretenez la centrale vous-mêmes et nous restons joignables pour les pièces et les questions d’exploitation.',
          points: ['Livraison et installation', 'Formation du personnel', 'Pièces et assistance'],
        },
        {
          n: '03',
          title: 'Livraison à votre port',
          body: 'Si vous avez vos équipes et savez ce qu’il vous faut, nous composons le lot, vérifions le fabricant et acheminons la marchandise jusqu’à votre port. Le montage et l’exploitation restent de votre côté.',
          points: ['Composition du lot', 'Vérification du fabricant', 'Acheminement jusqu’au port'],
        },
      ],
      price: 'Le coût du déplacement, des essais et de la maintenance se calcule pour le site : il dépend de la puissance, du type de structure, de l’accès à l’eau et de l’éloignement. Nous annonçons un prix une fois les données du site connues ; avant cela, tout chiffre serait une supposition.',
    },
    cases: {
      title: 'Ce que cela donne sur le terrain',
      body: 'Nous les montrons telles quelles : c’est le travail des machines que nous fournissons, pas nos propres installations.',
      captions: ['Installation en toiture, Malaisie', 'Installation en toiture, Pakistan', 'Centrale au sol, États-Unis'],
    },
    form: {
      title: 'Demande depuis le site',
      lead: 'Nous répondrons avec les données nécessaires au calcul et ce qu’il vaut la peine de vérifier sur un pilote.',
      company: 'Société',
      contact: 'Nom',
      email: 'E-mail',
      phone: 'Téléphone ou messagerie',
      need: 'La centrale et votre besoin',
      volume: 'Puissance, MW',
      timeline: 'Délais',
      comment: 'Commentaire',
      ph_company: 'Nom de la société',
      ph_contact: 'Comment vous appeler',
      ph_email: 'name@company.com',
      ph_phone: 'Téléphone, WhatsApp ou Telegram',
      ph_need: 'Par exemple : centrale au sol sur suiveurs, nettoyage des modules nécessaire',
      ph_volume: 'Par exemple : 120',
      ph_timeline: 'Par exemple : pilote ce trimestre',
      ph_comment: 'Ce qu’il est utile de savoir à l’avance',
      submit: 'Envoyer la demande',
      note: 'La description du besoin est obligatoire, ainsi qu’au moins un moyen de contact : e-mail ou téléphone.',
      err_need: 'Décrivez la centrale et votre besoin',
      err_contact: 'Laissez un e-mail ou un téléphone, sinon nous ne pourrons pas répondre',
      err_email: 'Vérifiez l’adresse e-mail',
      err_phone: 'Vérifiez le numéro de téléphone',
      err_network: 'L’envoi a échoué. Écrivez-nous à',
    },
    back: 'Teranova Group',
    footer: 'Une activité de Teranova Group. Corée.',
  },
  it: {
    meta: {
      title: 'Impianti solari — pulizia dei moduli e manutenzione · Teranova',
      description:
        'Una linea di attività Teranova: selezione e fornitura di macchine per la pulizia dei moduli, con un programma pilota che verifica il risultato sul vostro sito.',
    },
    hero: {
      kicker: 'Una linea di attività Teranova',
      title: 'Impianti solari',
      lead: 'Dalle macchine a un servizio con risultati misurati sul vostro sito.',
      cta: 'Raccontateci del vostro impianto',
    },
    intro: {
      title: 'Che cosa facciamo',
      body: [
        'Un impianto fotovoltaico perde produzione perché polvere e sporco si depositano sui moduli. Le aziende che vendono macchine per la pulizia sono molte, ma il proprietario resta solo davanti alla domanda vera: che cosa cambierà su questo impianto e in quanto tempo.',
        'Noi ne facciamo un servizio. Le macchine si scelgono in base alla struttura e al clima dell’impianto, non in base al paese di origine: quello che conta è che la macchina sia adatta al sito. Poi organizziamo la spedizione e la messa in servizio e costruiamo la misura attorno alle macchine: che cosa viene fatto, quanto dura un ciclo e che cosa succede alla produzione.',
      ],
    },
    how: {
      title: 'Come lavoriamo',
      steps: [
        {
          n: '01',
          title: 'Dati del sito',
          body: 'Raccogliamo i dati di partenza: tipo di struttura, numero di file e di moduli, clima, accesso ad acqua ed energia, il programma di manutenzione già in uso.',
        },
        {
          n: '02',
          title: 'Scelta delle macchine',
          body: 'Su quei dati scegliamo le macchine e il set di ricambi. Calcoliamo il costo completo fino alla messa in servizio e non il solo prezzo della macchina.',
        },
        {
          n: '03',
          title: 'Pilota con misura',
          body: 'Il programma del pilota comprende otto valori, tra cui la produttività del ciclo, il consumo d’acqua, le ore di lavoro per megawatt, la sicurezza delle operazioni e la produzione effettivamente recuperata. Prima dell’avvio mettiamo per iscritto il metodo di misura e chi rileva i dati sul sito.',
        },
        {
          n: '04',
          title: 'Decisione sull’estensione',
          body: 'Dai dati del pilota calcoliamo l’economia dell’intero impianto. Se i numeri non tornano, lo diciamo apertamente.',
        },
      ],
    },
    honest: {
      title: 'Che cosa non promettiamo in anticipo',
      body: [
        'Prima del pilota non indichiamo alcuna cifra di produzione recuperata e non confermiamo la compatibilità con la vostra struttura a inseguitori. Gli intervalli che circolano sul mercato vengono da altri impianti e non dicono nulla sul vostro.',
        'Caratteristiche, durata di servizio e certificazioni le confermiamo con i documenti del produttore, non con un racconto. Se un documento manca, lo diciamo.',
      ],
    },
    equipment: {
      title: 'Macchine',
      body: 'Lavoriamo con sistemi di pulizia a secco e ad acqua per impianti a terra su inseguitori e per coperture. Il modello si sceglie in funzione del sito, per questo partiamo dai dati e non dal catalogo.',
      captions: ['Impianto a terra in clima desertico', 'Pulizia meccanizzata', 'Impianto in copertura'],
    },
    cta: {
      title: 'Raccontateci del vostro impianto',
      body: 'Scriveteci la potenza dell’impianto, il tipo di struttura e la regione. Vi risponderemo indicando i dati necessari al calcolo e che cosa conviene verificare su un pilota.',
      button: 'Scriveteci',
    },
    schemes: {
      title: 'Tre modi di lavorare con noi',
      lead: 'Lo schema lo sceglie il cliente. Cambia chi mantiene i moduli dopo: il vostro servizio di manutenzione o il nostro.',
      items: [
        {
          n: '01',
          title: 'Chiavi in mano',
          body: 'Arriviamo sul sito con le macchine, le mettiamo in funzione e per qualche giorno conduciamo i test. Vedete come lavorano sulla vostra struttura e nel vostro clima, non su un impianto altrui. Se il risultato regge, da quel momento la manutenzione la seguiamo noi.',
          points: ['La squadra arriva con le macchine', 'Prove sulla vostra struttura', 'Manutenzione a cura di Teranova'],
        },
        {
          n: '02',
          title: 'Macchine e formazione',
          body: 'Acquistate le macchine, noi le spediamo, le installiamo sui vostri moduli e formiamo il vostro personale. Da lì in poi l’impianto lo mantenete voi, e noi restiamo a disposizione per ricambi e domande di esercizio.',
          points: ['Spedizione e installazione', 'Formazione del personale', 'Ricambi e assistenza'],
        },
        {
          n: '03',
          title: 'Consegna al porto',
          body: 'Se avete già una squadra e sapete che cosa vi serve, scegliamo il set, verifichiamo il produttore e portiamo la merce al vostro porto. Installazione ed esercizio restano a voi.',
          points: ['Scelta del set', 'Verifica del produttore', 'Consegna al porto'],
        },
      ],
      price: 'Il costo della trasferta, delle prove e della manutenzione si calcola sul sito: dipende dalla potenza, dal tipo di struttura, dall’accesso all’acqua e dalla distanza. Il prezzo lo indichiamo dopo i dati del sito: prima sarebbe una supposizione.',
    },
    cases: {
      title: 'Come si presenta sul campo',
      body: 'Le mostriamo come sono: è il lavoro delle macchine che forniamo, non impianti nostri.',
      captions: ['Impianto in copertura, Malesia', 'Impianto in copertura, Pakistan', 'Impianto a terra, USA'],
    },
    form: {
      title: 'Richiesta dall’impianto',
      lead: 'Vi risponderemo indicando i dati necessari al calcolo e che cosa conviene verificare su un pilota.',
      company: 'Azienda',
      contact: 'Nome',
      email: 'E-mail',
      phone: 'Telefono o messenger',
      need: 'L’impianto e ciò che vi serve',
      volume: 'Potenza, MW',
      timeline: 'Tempi',
      comment: 'Commento',
      ph_company: 'Nome dell’azienda',
      ph_contact: 'Come chiamarvi',
      ph_email: 'name@company.com',
      ph_phone: 'Telefono, WhatsApp o Telegram',
      ph_need: 'Per esempio: impianto a terra su inseguitori, serve la pulizia dei moduli',
      ph_volume: 'Per esempio: 120',
      ph_timeline: 'Per esempio: pilota in questo trimestre',
      ph_comment: 'Che cosa è utile sapere in anticipo',
      submit: 'Invia la richiesta',
      note: 'Servono la descrizione dell’esigenza e almeno un recapito: e-mail o telefono.',
      err_need: 'Descrivete l’impianto e ciò che vi serve',
      err_contact: 'Lasciate un’e-mail o un telefono, altrimenti non potremo rispondere',
      err_email: 'Controllate l’indirizzo e-mail',
      err_phone: 'Controllate il numero di telefono',
      err_network: 'Invio non riuscito. Scriveteci a',
    },
    back: 'Teranova Group',
    footer: 'Una linea di attività di Teranova Group. Corea.',
  },
  es: {
    meta: {
      title: 'Plantas solares — limpieza de módulos y mantenimiento · Teranova',
      description:
        'Una línea de negocio de Teranova: selección y suministro de equipos de limpieza de módulos, con un programa piloto que comprueba el resultado en su propia planta.',
    },
    hero: {
      kicker: 'Una línea de negocio de Teranova',
      title: 'Plantas solares',
      lead: 'Del equipo a un servicio cuyo resultado se mide en su planta.',
      cta: 'Cuéntenos sobre su planta',
    },
    intro: {
      title: 'Qué hacemos',
      body: [
        'Una planta solar pierde producción porque el polvo y la suciedad se acumulan sobre los módulos. Hay muchas empresas que venden equipos de limpieza, pero el propietario se queda solo ante la pregunta de fondo: qué va a cambiar en esta planta y en cuánto tiempo.',
        'Nosotros lo convertimos en un servicio. El equipo se elige según la estructura y el clima de la planta, no según el país de origen: lo que importa es que la máquina encaje en el emplazamiento. Después organizamos el envío y la puesta en marcha, y construimos la medición alrededor de las máquinas: qué se hace, cuánto dura un ciclo y qué ocurre con la producción.',
      ],
    },
    how: {
      title: 'Cómo trabajamos',
      steps: [
        {
          n: '01',
          title: 'Datos del emplazamiento',
          body: 'Reunimos los datos de partida: tipo de estructura, número de filas y de módulos, clima, acceso a agua y electricidad, y el régimen de mantenimiento vigente.',
        },
        {
          n: '02',
          title: 'Selección del equipo',
          body: 'Con esos datos elegimos las máquinas y el juego de repuestos. Calculamos el coste completo hasta la puesta en marcha y no solo el precio de la máquina.',
        },
        {
          n: '03',
          title: 'Piloto con medición',
          body: 'El programa del piloto recoge ocho valores, entre ellos la productividad del ciclo, el consumo de agua, las horas de trabajo por megavatio, la seguridad de las operaciones y la producción realmente recuperada. Antes de empezar dejamos por escrito el método de medición y quién toma los datos en la planta.',
        },
        {
          n: '04',
          title: 'Decisión de ampliar',
          body: 'Con los datos del piloto calculamos la economía de la planta entera. Si los números no salen, lo decimos con claridad.',
        },
      ],
    },
    honest: {
      title: 'Lo que no prometemos por adelantado',
      body: [
        'Antes del piloto no damos ninguna cifra de producción recuperada ni confirmamos la compatibilidad con su estructura de seguidores. Los rangos que circulan por el mercado proceden de otras plantas y no dicen nada de la suya.',
        'Las características, la vida útil y las certificaciones las confirmamos con documentos del fabricante, no de oídas. Si falta un documento, lo decimos.',
      ],
    },
    equipment: {
      title: 'Equipos',
      body: 'Trabajamos con sistemas de limpieza en seco y con agua, tanto para plantas en suelo sobre seguidores como para cubiertas. El modelo se elige para el emplazamiento, por eso empezamos por los datos y no por el catálogo.',
      captions: ['Planta en suelo en clima desértico', 'Limpieza mecanizada', 'Instalación en cubierta'],
    },
    cta: {
      title: 'Cuéntenos sobre su planta',
      body: 'Escríbanos la potencia de la planta, el tipo de estructura y la región. Le responderemos qué datos hacen falta para el cálculo y qué conviene comprobar en un piloto.',
      button: 'Escríbanos',
    },
    schemes: {
      title: 'Tres formas de trabajar con nosotros',
      lead: 'El esquema lo elige el cliente. Lo que cambia es quién mantiene los módulos después: su servicio de mantenimiento o el nuestro.',
      items: [
        {
          n: '01',
          title: 'Llave en mano',
          body: 'Vamos a la planta con el equipo, lo ponemos en marcha y durante varios días realizamos ensayos. Usted ve cómo trabajan las máquinas sobre su estructura y en su clima, no en una planta ajena. Si el resultado se sostiene, a partir de ahí nos encargamos del mantenimiento.',
          points: ['El equipo se desplaza con las máquinas', 'Ensayos sobre su estructura', 'Mantenimiento a cargo de Teranova'],
        },
        {
          n: '02',
          title: 'Equipos y formación',
          body: 'Usted compra las máquinas, nosotros las enviamos, las instalamos sobre sus módulos y formamos a su personal. A partir de ahí usted mantiene la planta y nosotros seguimos disponibles para repuestos y dudas de operación.',
          points: ['Envío e instalación', 'Formación del personal', 'Repuestos y soporte'],
        },
        {
          n: '03',
          title: 'Entrega en su puerto',
          body: 'Si ya tiene equipo propio y sabe qué necesita, componemos el lote, verificamos al fabricante y llevamos la mercancía hasta su puerto. El montaje y la operación quedan de su lado.',
          points: ['Composición del lote', 'Verificación del fabricante', 'Entrega en el puerto'],
        },
      ],
      price: 'El coste del desplazamiento, de los ensayos y del mantenimiento se calcula para el emplazamiento: depende de la potencia, del tipo de estructura, del acceso al agua y de la distancia. Damos precio cuando tenemos los datos de la planta; antes, cualquier cifra sería una suposición.',
    },
    cases: {
      title: 'Cómo se ve sobre el terreno',
      body: 'Las mostramos tal cual: es el trabajo de las máquinas que suministramos, no instalaciones propias.',
      captions: ['Instalación en cubierta, Malasia', 'Instalación en cubierta, Pakistán', 'Planta en suelo, EE. UU.'],
    },
    form: {
      title: 'Solicitud desde la planta',
      lead: 'Le responderemos qué datos hacen falta para el cálculo y qué conviene comprobar en un piloto.',
      company: 'Empresa',
      contact: 'Nombre',
      email: 'Correo',
      phone: 'Teléfono o mensajería',
      need: 'La planta y lo que necesita',
      volume: 'Potencia, MW',
      timeline: 'Plazos',
      comment: 'Comentario',
      ph_company: 'Nombre de la empresa',
      ph_contact: 'Cómo dirigirnos a usted',
      ph_email: 'name@company.com',
      ph_phone: 'Teléfono, WhatsApp o Telegram',
      ph_need: 'Por ejemplo: planta en suelo sobre seguidores, hace falta limpieza de módulos',
      ph_volume: 'Por ejemplo: 120',
      ph_timeline: 'Por ejemplo: piloto este trimestre',
      ph_comment: 'Lo que conviene saber de antemano',
      submit: 'Enviar la solicitud',
      note: 'Son necesarias la descripción de la tarea y al menos una vía de contacto: correo o teléfono.',
      err_need: 'Describa la planta y lo que necesita',
      err_contact: 'Deje un correo o un teléfono para que podamos responder',
      err_email: 'Compruebe la dirección de correo',
      err_phone: 'Compruebe el número de teléfono',
      err_network: 'No se pudo enviar. Escríbanos a',
    },
    back: 'Teranova Group',
    footer: 'Una línea de negocio de Teranova Group. Corea.',
  },
  pt: {
    meta: {
      title: 'Usinas solares — limpeza de módulos e manutenção · Teranova',
      description:
        'Uma linha de negócio da Teranova: seleção e fornecimento de equipamentos de limpeza de módulos, com um programa piloto que verifica o resultado na sua própria usina.',
    },
    hero: {
      kicker: 'Uma linha de negócio da Teranova',
      title: 'Usinas solares',
      lead: 'Do equipamento a um serviço cujo resultado é medido na sua usina.',
      cta: 'Conte-nos sobre a sua usina',
    },
    intro: {
      title: 'O que fazemos',
      body: [
        'Uma usina solar perde geração porque poeira e sujeira se depositam sobre os módulos. Muitas empresas vendem equipamentos de limpeza, mas o proprietário fica sozinho diante da pergunta que importa: o que vai mudar nesta usina e em quanto tempo.',
        'Nós transformamos isso em um serviço. O equipamento é escolhido pela estrutura e pelo clima da usina, e não pelo país de origem: o que importa é que a máquina sirva ao local. Em seguida organizamos a entrega e o comissionamento e construímos a medição em torno das máquinas: o que é feito, quanto dura um ciclo e o que acontece com a geração.',
      ],
    },
    how: {
      title: 'Como trabalhamos',
      steps: [
        {
          n: '01',
          title: 'Dados do local',
          body: 'Reunimos os dados iniciais: tipo de estrutura, número de fileiras e de módulos, clima, acesso a água e energia, e a rotina de manutenção já em uso.',
        },
        {
          n: '02',
          title: 'Seleção do equipamento',
          body: 'Com esses dados escolhemos as máquinas e o conjunto de peças de reposição. Calculamos o custo completo até o comissionamento e não apenas o preço da máquina.',
        },
        {
          n: '03',
          title: 'Piloto com medição',
          body: 'O programa do piloto abrange oito valores, entre eles a produtividade do ciclo, o consumo de água, as horas de trabalho por megawatt, a segurança das operações e a geração efetivamente recuperada. Antes de começar, registramos por escrito o método de medição e quem faz as leituras na usina.',
        },
        {
          n: '04',
          title: 'Decisão de ampliar',
          body: 'Com os dados do piloto calculamos a economia da usina inteira. Se os números não fecharem, dizemos isso com franqueza.',
        },
      ],
    },
    honest: {
      title: 'O que não prometemos de antemão',
      body: [
        'Antes do piloto não damos nenhum número de geração recuperada e não confirmamos a compatibilidade com a sua estrutura de rastreadores. As faixas que circulam no mercado vêm de outras usinas e não dizem nada sobre a sua.',
        'Características, vida útil e certificações são confirmadas por documentos do fabricante, e não de ouvido. Se faltar um documento, dizemos isso.',
      ],
    },
    equipment: {
      title: 'Equipamentos',
      body: 'Trabalhamos com sistemas de limpeza a seco e com água, para usinas em solo sobre rastreadores e para instalações em telhado. O modelo é escolhido para o local, por isso começamos pelos dados e não pelo catálogo.',
      captions: ['Usina em solo em clima desértico', 'Limpeza mecanizada', 'Instalação em telhado'],
    },
    cta: {
      title: 'Conte-nos sobre a sua usina',
      body: 'Escreva a potência da usina, o tipo de estrutura e a região. Responderemos quais dados são necessários para o cálculo e o que vale a pena verificar em um piloto.',
      button: 'Escreva para nós',
    },
    schemes: {
      title: 'Três formas de trabalhar conosco',
      lead: 'O esquema é escolhido pelo cliente. O que muda é quem mantém os módulos depois: a sua equipe de manutenção ou a nossa.',
      items: [
        {
          n: '01',
          title: 'Chave na mão',
          body: 'Vamos até a usina com os equipamentos, colocamos tudo em funcionamento e por alguns dias realizamos os ensaios. Você vê como as máquinas trabalham na sua estrutura e no seu clima, e não em uma usina alheia. Se o resultado se confirmar, a partir daí cuidamos da manutenção.',
          points: ['A equipe viaja com os equipamentos', 'Ensaios na sua estrutura', 'Manutenção pela Teranova'],
        },
        {
          n: '02',
          title: 'Equipamentos e treinamento',
          body: 'Você compra as máquinas, nós as enviamos, instalamos nos seus módulos e treinamos a sua equipe. A partir daí você mantém a usina, e continuamos disponíveis para peças de reposição e dúvidas de operação.',
          points: ['Envio e instalação', 'Treinamento da equipe', 'Peças e suporte'],
        },
        {
          n: '03',
          title: 'Entrega no seu porto',
          body: 'Se você já tem equipe própria e sabe do que precisa, montamos o conjunto, verificamos o fabricante e levamos a carga até o seu porto. Montagem e operação ficam do seu lado.',
          points: ['Montagem do conjunto', 'Verificação do fabricante', 'Entrega no porto'],
        },
      ],
      price: 'O custo da viagem, dos ensaios e da manutenção é calculado para o local: depende da potência, do tipo de estrutura, do acesso à água e da distância. Damos o preço depois dos dados da usina; antes disso, qualquer número seria um palpite.',
    },
    cases: {
      title: 'Como fica no campo',
      body: 'Mostramos como estão: é o trabalho das máquinas que fornecemos, não instalações nossas.',
      captions: ['Instalação em telhado, Malásia', 'Instalação em telhado, Paquistão', 'Usina em solo, EUA'],
    },
    form: {
      title: 'Solicitação da usina',
      lead: 'Responderemos quais dados são necessários para o cálculo e o que vale a pena verificar em um piloto.',
      company: 'Empresa',
      contact: 'Nome',
      email: 'E-mail',
      phone: 'Telefone ou mensageiro',
      need: 'A usina e o que você precisa',
      volume: 'Potência, MW',
      timeline: 'Prazos',
      comment: 'Comentário',
      ph_company: 'Nome da empresa',
      ph_contact: 'Como devemos chamá-lo',
      ph_email: 'name@company.com',
      ph_phone: 'Telefone, WhatsApp ou Telegram',
      ph_need: 'Por exemplo: usina em solo sobre rastreadores, é preciso limpar os módulos',
      ph_volume: 'Por exemplo: 120',
      ph_timeline: 'Por exemplo: piloto neste trimestre',
      ph_comment: 'O que é útil saber de antemão',
      submit: 'Enviar a solicitação',
      note: 'São necessários a descrição da tarefa e ao menos uma forma de contato: e-mail ou telefone.',
      err_need: 'Descreva a usina e o que você precisa',
      err_contact: 'Deixe um e-mail ou telefone para podermos responder',
      err_email: 'Verifique o endereço de e-mail',
      err_phone: 'Verifique o número de telefone',
      err_network: 'Não foi possível enviar. Escreva para nós em',
    },
    back: 'Teranova Group',
    footer: 'Uma linha de negócio da Teranova Group. Coreia.',
  },
  tr: {
    meta: {
      title: 'Güneş santralleri — panel temizliği ve bakım · Teranova',
      description:
        'Teranova’nın bir iş kolu: güneş panellerinin temizliği için ekipman seçimi ve tedariki, sonucu kendi sahanızda doğrulayan pilot programıyla birlikte.',
    },
    hero: {
      kicker: 'Teranova iş kolu',
      title: 'Güneş santralleri',
      lead: 'Ekipmandan, sonucu sahada ölçülen hizmete.',
      cta: 'Sahanızı anlatın',
    },
    intro: {
      title: 'Ne yapıyoruz',
      body: [
        'Güneş santrali, panellerin üzerinde biriken toz ve kir yüzünden üretim kaybeder. Temizlik ekipmanı satan çok sayıda firma var, ancak asıl soruyla işletmeci yalnız kalır: bu sahada tam olarak ne değişecek ve ne kadar sürede.',
        'Biz bunu bir hizmete dönüştürüyoruz. Ekipmanı menşe ülkeye göre değil, santralin taşıyıcı yapısına ve iklimine göre seçiyoruz, çünkü önemli olan makinenin sahaya uymasıdır. Ardından sevkiyatı ve devreye almayı düzenliyor, ekipmanın çevresine ölçümü kuruyoruz: ne yapıldığı, bir döngünün ne kadar sürdüğü ve üretimin nasıl değiştiği.',
      ],
    },
    how: {
      title: 'Nasıl çalışıyoruz',
      steps: [
        {
          n: '01',
          title: 'Saha verileri',
          body: 'Başlangıç bilgilerini topluyoruz: taşıyıcı yapı tipi, dizi ve panel sayısı, iklim, suya ve elektriğe erişim, yürürlükteki bakım düzeni.',
        },
        {
          n: '02',
          title: 'Ekipman seçimi',
          body: 'Toplanan verilere göre makineleri ve yedek parça setini seçiyoruz. Yalnızca makine fiyatını değil, teslim ve devreye alma dahil toplam maliyeti hesaplıyoruz.',
        },
        {
          n: '03',
          title: 'Ölçümlü pilot',
          body: 'Pilot programına sekiz değer giriyor; bunlardan bazıları döngü verimliliği, su tüketimi, megavat başına iş saati, iş güvenliği ve fiilen geri kazanılan üretim. Başlamadan önce ölçüm yöntemini ve sahada değerleri kimin okuyacağını yazılı olarak belirliyoruz.',
        },
        {
          n: '04',
          title: 'Yaygınlaştırma kararı',
          body: 'Pilot verilerine göre santralin tamamı için ekonomiyi hesaplıyoruz. Rakamlar tutmuyorsa bunu açıkça söylüyoruz.',
        },
      ],
    },
    honest: {
      title: 'Önceden söz vermediklerimiz',
      body: [
        'Pilottan önce geri kazanılacak üretim için rakam vermiyor, izleyicili taşıyıcı yapınızla uyumu onaylamıyoruz. Piyasada dolaşan aralıklar başka sahalardan geliyor ve sizinki hakkında bir şey söylemiyor.',
        'Teknik özellikleri, kullanım ömrünü ve sertifikaları anlatımla değil, üretici belgeleriyle doğruluyoruz. Belge yoksa bunu olduğu gibi söylüyoruz.',
      ],
    },
    equipment: {
      title: 'Ekipman',
      body: 'İzleyicili arazi santralleri ve çatı dizileri için kuru ve sulu temizlik sistemleriyle çalışıyoruz. Model sahaya göre seçildiği için işe katalogla değil, veriyle başlıyoruz.',
      captions: ['Çöl ikliminde arazi dizisi', 'Makineli temizlik', 'Çatı dizisi'],
    },
    cta: {
      title: 'Sahanızı anlatın',
      body: 'Santral gücünü, taşıyıcı yapı tipini ve bölgeyi yazın. Hesap için gereken verileri ve pilotta doğrulanmaya değer noktaları yanıtlayalım.',
      button: 'Bize yazın',
    },
    schemes: {
      title: 'Bizimle çalışmanın üç yolu',
      lead: 'Yolu müşteri seçer. Fark, modüllerin bakımını sonrasında kimin yapacağıdır: sizin bakım ekibiniz mi, biz mi.',
      items: [
        {
          n: '01',
          title: 'Anahtar teslim',
          body: 'Ekipmanla sahaya geliyoruz, kuruyoruz ve birkaç gün deneme yapıyoruz. Makinelerin başka bir sahada değil, sizin taşıyıcı yapınızda ve ikliminizde nasıl çalıştığını kendiniz görüyorsunuz. Sonuç uygunsa bakımı bundan sonra biz üstleniyoruz.',
          points: ['Ekip ekipmanla birlikte geliyor', 'Sizin taşıyıcı yapınızda deneme', 'Bakım Teranova tarafından'],
        },
        {
          n: '02',
          title: 'Ekipman ve eğitim',
          body: 'Makineleri satın alıyorsunuz, biz sevk edip modüllerinize kuruyoruz ve bakım personelinizi eğitiyoruz. Sonrasında santrali siz işletiyorsunuz, biz yedek parça ve işletme soruları için ulaşılabilir kalıyoruz.',
          points: ['Sevkiyat ve montaj', 'Personel eğitimi', 'Yedek parça ve destek'],
        },
        {
          n: '03',
          title: 'Limanınıza teslim',
          body: 'Kendi ekibiniz varsa ve neye ihtiyacınız olduğunu biliyorsanız, seti belirliyor, üreticiyi doğruluyor ve yükü limanınıza kadar getiriyoruz. Montaj ve işletme sizde kalıyor.',
          points: ['Set seçimi', 'Üretici doğrulaması', 'Limana kadar teslim'],
        },
      ],
      price: 'Saha ziyareti, denemeler ve bakımın bedelini sahaya göre hesaplıyoruz: santral gücüne, taşıyıcı yapı tipine, suya erişime ve mesafeye bağlı. Fiyatı saha verilerinden sonra söylüyoruz; öncesinde her rakam tahmin olurdu.',
    },
    cases: {
      title: 'Sahada nasıl görünüyor',
      body: 'Olduğu gibi gösteriyoruz: bu, tedarik ettiğimiz makinelerin çalışması, kendi sahalarımız değil.',
      captions: ['Çatı dizisi, Malezya', 'Çatı dizisi, Pakistan', 'Arazi dizisi, ABD'],
    },
    form: {
      title: 'Sahadan talep',
      lead: 'Hesap için gereken verileri ve pilotta doğrulanmaya değer noktaları yanıtlayalım.',
      company: 'Şirket',
      contact: 'Ad',
      email: 'E-posta',
      phone: 'Telefon veya mesajlaşma',
      need: 'Santral ve ihtiyacınız',
      volume: 'Güç, MW',
      timeline: 'Zamanlama',
      comment: 'Açıklama',
      ph_company: 'Şirket adı',
      ph_contact: 'Size nasıl hitap edelim',
      ph_email: 'name@company.com',
      ph_phone: 'Telefon, WhatsApp veya Telegram',
      ph_need: 'Örneğin: izleyicili arazi santrali, panel temizliği gerekiyor',
      ph_volume: 'Örneğin: 120',
      ph_timeline: 'Örneğin: bu çeyrekte pilot',
      ph_comment: 'Önceden bilmemizde fayda olanlar',
      submit: 'Talebi gönder',
      note: 'İhtiyacın açıklaması ve en az bir iletişim yolu gereklidir: e-posta veya telefon.',
      err_need: 'Santrali ve ihtiyacınızı yazın',
      err_contact: 'Yanıt verebilmemiz için e-posta veya telefon bırakın',
      err_email: 'E-posta adresini kontrol edin',
      err_phone: 'Telefon numarasını kontrol edin',
      err_network: 'Gönderilemedi. Bize şu adresten yazın:',
    },
    back: 'Teranova Group',
    footer: 'Teranova Group’un bir iş kolu. Kore.',
  },
};
