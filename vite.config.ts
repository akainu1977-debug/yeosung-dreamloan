import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * 사이트 주소 자동 적용
 * - Netlify 는 빌드할 때 사이트 주소를 URL 환경변수로 넣어줍니다.
 *   (연결한 커스텀 도메인이 있으면 그 주소, 없으면 https://○○.netlify.app)
 * - 직접 지정하려면 Netlify 환경변수에 SITE_URL 을 추가하세요. 예) https://www.example.co.kr
 * - 주소가 있으면 og:image 를 절대 URL로 바꾸고 canonical·og:url 태그를 추가합니다.
 */
function siteUrlPlugin(): Plugin {
  const siteUrl = (process.env.SITE_URL || process.env.URL || '').replace(/\/+$/, '');
  return {
    name: 'site-url',
    transformIndexHtml(html) {
      if (!siteUrl) return html;
      return {
        html: html.replace('content="/og-image.png"', `content="${siteUrl}/og-image.png"`),
        tags: [
          { tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: `${siteUrl}/` }, injectTo: 'head' },
        ],
      };
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin()],
});
