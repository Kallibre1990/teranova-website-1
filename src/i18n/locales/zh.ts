import type { UIDict } from './ru';
import type { DeepPartial } from '../deep';

const zh: DeepPartial<UIDict> = {
  nav: {
    catalog: "产品目录",
    verify: "我们如何核验",
    buyers: "按需寻源",
    suppliers: "供应商合作",
    about: "关于我们",
    faq: "常见问题",
    contacts: "联系方式",
  },

  common: {
    cta_request: "提交需求",
    menu: "菜单",
    close: "关闭",
    to_top: "返回顶部",
    skip: "跳至正文",
    switch_lang: "语言",
    scroll: "向下滚动",
    loading: "加载中",
  },

  meta: {
    home_title: "Teranova Group — 经核验的韩国制造商与全流程交易支持",
    home_desc:
      "我们为您寻找、核验并支持从韩国工厂到您仓库的供应：船舶补给、化妆品与护理（OEM/ODM）、医疗与医美、工业设备、商用车与特种车辆。",
  },

  marquee: [
    "船舶补给",
    "化妆品与护理",
    "医疗与医美",
    "工业设备",
    "商用车与特种车辆",
    "相关领域",
  ],

  hero: {
    sup: "韩国 → 世界",
    title: "经核验的韩国制造商 — 直接对接",
    sub: "我们为您寻找、核验并支持从韩国工厂到您仓库的供应。透明运作，量身定制。",
    cta_primary: "查看产品目录",
    cta_secondary: "按需寻源",
    scroll_hint: "向下滚动",
  },

  verify: {
    sup: "信任",
    title: "先核验，后对接",
    intro:
      "每一家供应商都有明确的状态。这是有据可查的事实，而非对结果的承诺——我们协调并全程支持交易。",
    card_visited_t: "已核验 — 实地走访",
    card_visited_d: "创始人亲赴工厂现场——附有照片与走访日期。",
    card_provided_t: "企业提供的资料",
    card_provided_d: "信息由供应商提供——尚未进行实地走访。",
    note: "质量条款在与供应商签订的合同中明确约定。我们不公开供应商的个人联系方式——所有沟通均通过 Teranova 进行。",
    link: "我们如何核验",
  },

  categories: {
    sup: "产品目录",
    title: "我们从韩国供应什么",
    sub: "目录中所列均为我们已核验的内容。目录中没有的——我们按需为您寻源。商用车、乘用车与特种车辆为独立方向；普通消费乘用车不在业务范围内。",
    demo_note: "目录正在完善中——目前部分数据用于演示。",
    groups: [
      { key: "marine", name: "船舶补给", blurb: "为船舶与船厂提供全面补给。", items: ["发动机与备件", "甲板设备", "螺旋桨、舵、推进器", "导航与通信", "救生与消防", "涂料与涂层"] },
      { key: "cosmetics", name: "化妆品与护理（OEM/ODM）", blurb: "韩国化妆品及贴牌代工生产。", items: ["护肤品", "精华与安瓶", "防晒（SPF）", "面膜与贴片", "彩妆", "化妆品包装"] },
      { key: "medical", name: "医疗与医美", blurb: "为诊所与医美机构提供设备与耗材。", items: ["激光、IPL、HIFU、RF", "填充剂、埋线、水光针", "口腔（种植体、CAD/CAM）", "诊断与检测", "康复设备", "医院设备"] },
      { key: "industrial", name: "工业设备", blurb: "面向制造业的机床、自动化设备与零部件。", items: ["CNC 机床", "激光与等离子切割", "工业机器人", "液压与气动", "泵与阀门", "模具与工装"] },
      { key: "transport", name: "商用车与特种车辆", blurb: "货运、客运与特种车辆及配件。", items: ["卡车与牵引车", "客车", "工程机械", "农业机械", "特种车辆", "挂车、轮胎、蓄电池"] },
      { key: "adjacent", name: "相关领域", blurb: "广泛覆盖韩国具备优势的细分领域。", items: ["建筑材料", "食品与包装", "水处理与环保", "能源与可再生能源", "工业电子与 LED", "产业用纺织品"] },
    ],
  },

  ondemand: {
    sup: "按需寻源",
    title: "目录中没有——我们为您找到工厂",
    sub: "请描述您的需求。我们根据您的任务寻找韩国制造商，对其进行核验并安排供应。目录所列为已核验内容；按需寻源则是为您全新对接。",
    points: [
      "明确任务与需求",
      "寻源并核验工厂",
      "商定价格与条款",
      "支持付款、物流与品控",
    ],
    form_title: "提交需求",
    form_note: "提交后，我们将与您联系、确认细节并提供方案。价格与条款将根据您的需求量身定制。",
  },

  presence: {
    sup: "我们的临近优势",
    title: "我们紧邻制造商",
    onsite_lead: "在以下国家，我们派驻当地团队——亲自寻找、走访并核验供应商：",
    countries: ["韩国", "日本", "中国", "土耳其"],
    other: "其他地区的需求可按需受理。",
    buyers_lead: "我们为全球买家提供支持：",
    buyers_regions: ["独联体", "欧洲", "土耳其", "美国", "亚洲"],
  },

  how: {
    sup: "我们如何合作",
    title: "三个步骤——从需求到交付",
    sub: "透明运作，量身定制。",
    steps: [
      { t: "提出需求", d: "您告诉我们您需要什么。" },
      { t: "寻源与核验", d: "我们寻找工厂、进行核验并商定条款。" },
      { t: "交易与交付", d: "我们支持付款、物流与品控，直至您收货。" },
    ],
  },

  cta: {
    sup: "立即开始",
    title: "告诉我们您需要在韩国寻找什么",
    sub: "一个联系方式——寻源、核验与供应皆由我们承担。",
    button: "联系我们",
  },

  form: {
    company: "公司",
    contact: "联系人",
    email: "电子邮箱",
    phone: "电话 / 即时通讯",
    need: "您需要寻找什么",
    volume: "数量",
    timeline: "时间要求",
    comment: "备注",
    submit: "发送需求",
    required_hint: "带 * 的字段为必填项。我们仅将您的信息用于处理您的需求。",
    ph_company: "贵公司名称",
    ph_contact: "姓名",
    ph_email: "business@email.com",
    ph_phone: "+86 / +82 …",
    ph_need: "例如：OEM 精华、船用泵、CNC 机床",
    ph_volume: "例如：50,000 件",
    ph_timeline: "例如：6–8 周",
    ph_comment: "细节、要求、认证……",
  },

  thanks: {
    title: "需求已发送",
    body: "感谢您！我们已收到您的需求，将尽快与您联系。",
    back: "返回首页",
  },

  notfound: {
    title: "此页面即将上线",
    body: "本栏目仍在建设中。请返回首页——首页已准备就绪。",
    back: "返回首页",
  },

  footer: {
    blurb: "我们将经核验的韩国制造商与全球买家对接，并全程支持交易。",
    nav_title: "导航",
    contact_title: "联系方式",
    loc: "韩国",
    joint_brand: "Teranova Group — AIA Group Ltd 与 Teranova Group Ltd 的联合品牌。",
    disclaimer:
      "目录正在完善中；部分数据用于演示。价格仅供参考，不构成要约。Teranova Group 通过可信赖的合作伙伴协调并支持交易，本身并非制造商。",
    rights: "© 2025 Teranova Group",
  },
};

export default zh;
