# Bruno Faustino Digital Studio

Website Astro. Node.js >=22.12.0; instalar as dependências com `npm ci`.

## Desenvolvimento e build local

- `npm run dev -- --background`: servidor de desenvolvimento, conforme AGENTS.md.
- `npm run astro -- dev status` / `stop` / `logs`: gerir o servidor.
- `npm run build:production`: build local com `PUBLIC_SITE_URL=https://brunofaustino.pt`, seguido de limpeza de `.DS_Store` em `dist`.
- `npm run preview`: inspecionar o build local.

Usar `npm run build:production` para QA de canonical, OG, sitemap e robots com a origem pública prevista. Este comando não faz deploy, não remove Private e não altera a lógica de indexação por contexto.

Para configurar também `npm run build`, copiar `.env.example` para `.env` apenas se este ainda não existir, ou integrar manualmente `PUBLIC_SITE_URL=https://brunofaustino.pt` no ficheiro existente. Nunca sobrescrever configurações locais nem commitar secrets. `.env` e `.env.production` estão ignorados pelo Git.

A precedência existente mantém-se: `PUBLIC_SITE_URL` do processo → configuração local → `URL` Netlify → localhost. Sem configuração explícita, `URL` herdada do Netlify pode produzir a origem errada num build local. Não alterar variáveis do alojamento nem os contextos preview/production como parte deste procedimento.

## Artefacto e segurança

O fluxo suportado é `npm run build` (ou `npm run build:production`), com `dist` como diretório de publicação. O `postbuild` remove exclusivamente ficheiros `.DS_Store` desse diretório, sem seguir diretórios simbólicos. Não executar diretamente `astro build` para preparar entregas, pois ignora o `postbuild` npm. `.gitignore` já exclui `.DS_Store`, mas isso, por si só, não impede a cópia de `public` para `dist`.

`public/_headers` é copiado para `dist/_headers` e define, em todas as rotas estáticas, `nosniff`, `strict-origin-when-cross-origin`, recusa de camera/microphone/geolocation e `X-Frame-Options: DENY`. Não introduz uma CSP completa. Não limita ligações WhatsApp/mailto nem os destinos de rede do Umami. Referência: [headers nativos Netlify](https://docs.netlify.com/manage/routing/headers/).

O preview Astro não aplica os headers Netlify. A presença em `dist/_headers` confirma a configuração do artefacto; só a resposta HTTP autenticada de um deploy privado confirma os headers servidos. Uma resposta 401 anónima pertence à proteção de acesso e não comprova os headers das páginas.

O site mantém-se Private. Build/QA local não equivale a deploy, lançamento público, validação jurídica ou prova de analytics/formulário em produção. As pendências estão em `PENDENCIAS.md`.
