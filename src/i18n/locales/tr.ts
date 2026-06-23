import type { UIDict } from './ru';
import type { DeepPartial } from '../deep';

const tr: DeepPartial<UIDict> = {
  nav: {
    catalog: "Katalog",
    verify: "Nasıl doğruluyoruz",
    buyers: "Talep üzerine",
    suppliers: "Tedarikçiler için",
    about: "Hakkımızda",
    faq: "Sıkça sorulanlar",
    contacts: "İletişim",
    team: "Ekip",
    tenders: "İhaleler",
  },

  common: {
    cta_request: "Talep gönderin",
    menu: "Menü",
    close: "Kapat",
    to_top: "Yukarı",
    skip: "İçeriğe geç",
    switch_lang: "Dil",
    scroll: "Aşağı kaydırın",
    loading: "Yükleniyor",
    prev: "Önceki",
    next: "Sonraki",
  },

  meta: {
    home_title: "Teranova Group — doğrulanmış Koreli üreticiler ve uçtan uca tedarik desteği",
    home_desc:
      "Koreli fabrikalardan deponuza kadar tedariki buluyor, doğruluyor ve destekliyoruz: denizcilik tedariki, kozmetik ve bakım (OEM/ODM), tıp ve estetik, endüstriyel ekipman, ticari ve özel araçlar.",
  },

  marquee: [
    "Denizcilik tedariki",
    "Kozmetik ve bakım",
    "Tıp ve estetik",
    "Endüstriyel ekipman",
    "Ticari ve özel araçlar",
    "İlgili sektörler",
  ],

  hero: {
    sup: "Kore → dünya",
    title: "Doğrulanmış Koreli üreticiler — doğrudan",
    sub: "Koreli fabrikalardan deponuza kadar tedariki buluyor, doğruluyor ve destekliyoruz. Şeffaf bir şekilde, görevinize göre.",
    cta_primary: "Kataloğu görüntüle",
    cta_secondary: "Talep üzerine bulun",
    scroll_hint: "Aşağı kaydırın",
  },

  verify: {
    sup: "Güven",
    title: "Önce doğrulama, sonra iletişim",
    intro:
      "Her tedarikçinin bir durumu vardır. Bu, bir sonuç vaadi değil, belgelenmiş bir gerçektir — anlaşmayı koordine ediyor ve destekliyoruz.",
    card_visited_t: "Doğrulandı — yerinde ziyaret",
    card_visited_d: "Ekip üyemiz fabrikayı bizzat ziyaret etti — fotoğraflar ve ziyaret tarihiyle birlikte.",
    card_provided_t: "Şirket tarafından sağlanan veriler",
    card_provided_d: "Tedarikçi tarafından sağlanan bilgiler — henüz bizzat ziyaret gerçekleşmedi.",
    note: "Kalite koşulları tedarikçiyle yapılan sözleşmede sabitlenir. Tedarikçilerin kişisel iletişim bilgilerini yayınlamıyoruz — tüm iletişim Teranova üzerinden gerçekleşir.",
    link: "Nasıl doğruluyoruz",
  },

  categories: {
    sup: "Katalog",
    title: "Kore'den neler tedarik ediyoruz",
    sub: "Katalog, halihazırda doğruladığımız şeylerdir. Burada olmayanı talep üzerine buluruz. Ticari, binek ve özel araçlar ayrı bir yöndür; tüketici otomobilleri kapsam dışıdır.",
    demo_note: "Katalog dolduruluyor — bazı veriler şu anda gösterim amaçlıdır.",
    more: "Daha fazla bilgi",
    groups: [
      { key: "marine", name: "Denizcilik tedariki", blurb: "Gemiler ve tersaneler için eksiksiz tedarik.", items: ["motorlar ve yedek parçalar", "güverte ekipmanları", "pervaneler, dümenler, manevra iticileri", "navigasyon ve haberleşme", "can kurtarma ve yangın söndürme", "boyalar ve kaplamalar"] },
      { key: "cosmetics", name: "Kozmetik ve bakım (OEM/ODM)", blurb: "Kore kozmetiği ve kendi markanız altında fason üretim.", items: ["cilt bakımı", "serumlar ve ampuller", "güneş bakımı (SPF)", "kağıt maskeler ve bantlar", "renkli kozmetik", "kozmetik ambalajı"] },
      { key: "medical", name: "Tıp ve estetik", blurb: "Klinikler ve estetik tıp için ekipman ve sarf malzemeleri.", items: ["lazerler, IPL, HIFU, RF", "dolgular, ipler, skinbooster'lar", "diş hekimliği (implantlar, CAD/CAM)", "tanı ve testler", "rehabilitasyon", "hastane ekipmanları"] },
      { key: "industrial", name: "Endüstriyel ekipman", blurb: "Üretim için takım tezgahları, otomasyon ve bileşenler.", items: ["CNC tezgahları", "lazer ve plazma kesim", "endüstriyel robotlar", "hidrolik ve pnömatik", "pompalar ve vanalar", "kalıplar ve takımlar"] },
      { key: "transport", name: "Ticari ve özel araçlar", blurb: "Yük, yolcu ve özel araçlar ile parçaları.", items: ["kamyonlar ve çekiciler", "otobüsler", "inşaat makineleri", "tarım makineleri", "özel araçlar", "römorklar, lastikler, aküler"] },
      { key: "adjacent", name: "İlgili sektörler", blurb: "Kore'nin güçlü olduğu nişlerde geniş kapsam.", items: ["yapı malzemeleri", "gıda ve ambalaj", "su arıtma ve ekoloji", "enerji ve yenilenebilir kaynaklar", "endüstriyel elektronik ve LED", "teknik tekstil"] },
      { key: "chemical", name: "Kimya ve malzemeler", blurb: "Kimyasal ham maddeler, polimerler ve endüstriyel malzemeler.", items: ["kimyasal ham maddeler ve reaktifler", "plastikler ve polimerler", "kauçuk", "boyalar ve kaplamalar", "yapıştırıcılar ve dolgu malzemeleri", "gübreler ve tarım kimyasalları"] },
    ],
  },

  ondemand: {
    sup: "Talep üzerine",
    title: "Katalogda yok — fabrikayı sizin için buluruz",
    sub: "Neye ihtiyacınız olduğunu anlatın. Görevinize uygun Koreli üreticileri seçer, doğrular ve tedariki düzenleriz. Katalog, halihazırda doğrulanmış olandır; talep üzerine ise sizin için yeni olandır.",
    points: [
      "Görevi ve gereksinimleri netleştiririz",
      "Fabrikaları buluruz ve doğrularız",
      "Fiyatları ve koşulları kararlaştırırız",
      "Ödemeyi, lojistiği ve kontrolü destekleriz",
    ],
    form_title: "Talep gönderin",
    form_note: "Talebinizi gönderdikten sonra sizinle iletişime geçer, ayrıntıları netleştirir ve seçenekler sunarız. Fiyatlar ve koşullar talebinize göre belirlenir.",
  },

  presence: {
    sup: "Nerede yakınız",
    title: "Üreticinin yanındayız",
    onsite_lead: "Bu ülkelerde sahada ekibimiz var — tedarikçileri buluyor, ziyaret ediyor ve bizzat doğruluyoruz:",
    countries: ["Kore", "Japonya", "Çin", "Türkiye"],
    other: "Diğer bölgelere yönelik talepler istek üzerine alınır.",
    buyers_lead: "Alıcıları dünya çapında destekliyoruz:",
    buyers_regions: ["BDT", "Avrupa", "Türkiye", "ABD", "Asya"],
  },

  how: {
    sup: "Nasıl çalışıyoruz",
    title: "Üç adım — talepten teslimata",
    sub: "Şeffaf ve görevinize göre.",
    steps: [
      { t: "Talep", d: "Neye ihtiyacınız olduğunu bize söylersiniz." },
      { t: "Bulma ve doğrulama", d: "Fabrikayı buluruz, doğrularız ve koşulları kararlaştırırız." },
      { t: "Anlaşma ve teslimat", d: "Ödemeyi, lojistiği ve kontrolü teslim alana kadar destekleriz." },
    ],
  },

  cta: {
    sup: "Başlayalım",
    title: "Kore'de neyi bulmanız gerektiğini bize anlatın",
    sub: "Tek bir iletişim — bulma, doğrulama ve tedariki biz üstleniriz.",
    button: "İletişime geçin",
  },

  form: {
    company: "Şirket",
    contact: "İlgili kişi",
    email: "E-posta",
    phone: "Telefon / mesajlaşma uygulaması",
    need: "Neyi bulmanız gerekiyor",
    volume: "Miktar",
    timeline: "Süre",
    comment: "Yorum",
    submit: "Talebi gönder",
    required_hint: "* işaretli alanlar zorunludur. Verilerinizi yalnızca talebinizi işlemek için kullanırız.",
    ph_company: "Şirketiniz",
    ph_contact: "Ad ve soyad",
    ph_email: "business@email.com",
    ph_phone: "+90 / +82 …",
    ph_need: "örn. OEM serumlar, denizcilik pompaları, CNC tezgahı",
    ph_volume: "örn. 50.000 adet",
    ph_timeline: "örn. 6–8 hafta",
    ph_comment: "Ayrıntılar, gereksinimler, sertifikasyon…",
  },

  thanks: {
    title: "Talep gönderildi",
    body: "Teşekkürler! Talebinizi aldık ve en kısa sürede sizinle iletişime geçeceğiz.",
    back: "Ana sayfaya dön",
  },

  notfound: {
    title: "Bu sayfa yakında geliyor",
    body: "Bu bölüm hâlâ hazırlanıyor. Ana sayfaya geri dönün — o sayfa hazır.",
    back: "Ana sayfaya git",
  },

  footer: {
    blurb: "Doğrulanmış Koreli üreticileri dünya çapındaki alıcılarla buluşturuyor ve anlaşmanın tamamını destekliyoruz.",
    nav_title: "Navigasyon",
    contact_title: "İletişim",
    loc: "Kore",
    joint_brand: "Teranova Group — AIA Group Ltd ve Teranova Group Ltd'nin ortak markasıdır.",
    disclaimer:
      "Katalog dolduruluyor; bazı veriler gösterim amaçlıdır. Fiyatlar yaklaşık değerlerdir ve bir teklif niteliği taşımaz. Teranova Group, güvenilir ortaklar aracılığıyla anlaşmaları koordine eder ve destekler, üretici değildir.",
    rights: "© 2025 Teranova Group",
  },

  about_home: {
    sup: "Hakkımızda",
    title: "Gerçek insanlar ve bizzat fabrika ziyaretleri",
    body: "Teranova, Kore'deki üreticileri bulur, onları doğrular — fabrikayı bizzat yerinde ziyaret edecek kadar — ve anlaşmayı ilk talepten malların teslim alınmasına kadar yürütür. Bir aracı zinciri yerine sorumluluk üstlenen tek bir ortak.",
    photo_note: "Gerçek fotoğraflar buraya gelecek: ekip ve fabrika ziyaretleri.",
    cta: "Şirket hakkında daha fazlası",
  },

  tenders_home: {
    sup: "İhaleler",
    title: "Anahtar teslim ihaleler ve tedarik",
    body: "İhaleniz veya teklif talebiniz için Koreli üreticileri buluyor, teklifin hazırlanmasına yardımcı oluyor ve tedariki destekliyoruz.",
    cta: "İhale talebi gönderin",
  },

  team_home: {
    sup: "Ekip",
    title: "Her anlaşmanın arkasında gerçek insanlar var",
    body: "Tedarik, doğrulama ve teminat işlerini bizzat yürüten yöneticiler ve uzmanlar.",
    cta: "Ekiple tanışın",
  },
};

export default tr;
