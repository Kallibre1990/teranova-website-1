// Единственная задача этого слоя — свести сайт к одному каноническому хосту.
//
// Cloudflare Pages отдаёт один и тот же сайт и на apex, и на www, из-за чего для
// поисковиков и ИИ-краулеров существуют две копии каждой страницы. Файл
// `public/_redirects` эту задачу решить не может: у Pages `source` — только путь,
// без хоста (проверено 25.08.2026, коммит 85049e7). Zone-level Redirect Rule в
// Cloudflare требует доступа к дашборду, которого у агентов нет. Поэтому
// редирект живёт здесь, в самом проекте.
//
// Правило одно: www.teranovagroup.com/<путь> → 301 → https://teranovagroup.com/<путь>.
// Путь и query сохраняются: меняются только имя хоста и схема.

const CANONICAL_HOST = 'teranovagroup.com';
const WWW_HOST = `www.${CANONICAL_HOST}`;

export async function onRequest(context) {
  try {
    const url = new URL(context.request.url);

    if (url.hostname === WWW_HOST) {
      url.hostname = CANONICAL_HOST;
      // Схему фиксируем явно: посетитель с www уходит на apex одним прыжком,
      // а не через второй редирект «http → https» на краю Cloudflare.
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
  } catch {
    // Слой редиректа стоит перед всем сайтом. Любая его ошибка не должна
    // уронить выдачу страниц — молча пропускаем запрос дальше.
  }

  return context.next();
}
