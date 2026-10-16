# Briefing — análise de referências e direção do redesign

> Tarefa pendente. Não pôde ser feita na sessão cloud porque o ambiente bloqueia
> acesso à web (proxy 403 em todos os domínios). Executar em sessão local com
> acesso ao navegador (Claude in Chrome / Playwright local).

## Pedido original (do usuário)

> Analise o site que a empresa já tem e entenda o perfil dele. Depois analise os
> dois sites que ela me enviou como referência e busque funcionalidades, design,
> layouts interessantes para usarmos no projeto. Além dessas 2 referências, busque
> mais 10 referências no mercado para fechar o complemento referencial do projeto.
> Retorne 3 opções relacionadas à estrutura e 3 relacionadas ao design. Busque fugir
> do padrão de IA que o site atual já tem e procure inovações e tendências do mercado.

## Links

| Papel | URL |
|---|---|
| Site atual | https://4pilares.com.br/ |
| Referência 1 (da dona) | https://share.google/v0qMVpep6mmom408X → **https://www.akeo.com/** |
| Referência 2 (da dona) | https://share.google/mHeW0cv6DdDYnsaFT → **https://www.agenciafante.com.br/** |

> Análise concluída em `docs/analise-referencias.md` (16/10/2026).

Os links `share.google` são redirecionadores — abrir no navegador e registrar a URL final aqui.

## Passos

1. **Site atual** — navegar home + páginas internas (ex.: `/nossos-servicos/quem-somos/`). Capturar prints desktop (1440px) e mobile (390px). Registrar:
   - perfil: público, serviços, tom de voz, provas sociais, CTAs, canais (WhatsApp, formulário);
   - stack aparente (WordPress/Elementor? builder de IA?) e performance percebida;
   - quais elementos caracterizam o "padrão de IA" a evitar.
2. **Referências 1 e 2** — mesma captura. Extrair o que a dona provavelmente gostou: layout, tipografia, cor, animações/interações, estrutura de navegação, funcionalidades. Separar "o que aproveitar" de "o que não serve para uma consultoria financeira".
3. **+10 referências de mercado** — priorizar:
   - consultorias financeiras / reestruturação / turnaround / M&A boutique (BR e internacionais);
   - marcas premium com preto + dourado (sem cair em clichê de "luxo");
   - sites premiados recentes (Awwwards, Godly, Land-book, Lapa Ninja) do segmento corporate/finance.
   Para cada uma: URL, por que entrou, 1–2 elementos aproveitáveis.
4. **Entregar:**
   - Diagnóstico do site atual.
   - Tabela das 12 referências (2 da cliente + 10 de mercado).
   - **3 opções de estrutura** (arquitetura de informação / jornada / páginas e seções), com prós, contras e indicação.
   - **3 opções de design** (direção visual: tipografia, grid, uso do preto/dourado, motion, fotografia/ilustração), com mini moodboard descrito e indicação.
   - Recomendação final combinada.

## Insumos já conhecidos

- Nicho: consultoria de reestruturação e gestão financeira (ver `CLAUDE.md`).
- Nova logo: `assets/img/brand/logo-4p-original.jpg` — preto + dourado em gradiente, monograma "4P" com barras horizontais.
- Hipóteses de direção a validar contra as referências (não são decisão):
  - Usar as barras do logo como sistema gráfico (divisores, progresso de scroll, gráficos).
  - Tipografia editorial (serifa de alto contraste nos títulos + grotesca no texto) em vez de sans genérica.
  - Prova de resultado concreta (casos antes/depois, métricas reais) no lugar de cards de "valores".
  - Funcionalidade de geração de lead com valor: diagnóstico financeiro rápido / calculadora.
