# CLAUDE.md — Site 4 Pilares

Contexto do projeto para agentes (Claude Code no VS Code / CLI).

## A empresa

- **Nome:** 4 Pilares — site atual: https://4pilares.com.br/
- **Ramo:** consultoria de **reestruturação e gestão financeira** para empresas (organizar o financeiro, controle, eficiência, crescimento sustentável). Fonte: página "Quem somos" (https://4pilares.com.br/nossos-servicos/quem-somos/).
- **Restrição legal citada no site atual:** a empresa declara que não distribui títulos/valores mobiliários e que seus consultores não prestam assessoria de investimentos. Manter esse aviso (rodapé) e **não** usar copy que sugira recomendação de investimento.
- Quem decide o visual: a dona da empresa. Ela enviou 2 sites de referência (ver `docs/briefing-redesign.md`).

## Identidade visual (nova logo)

- Arquivo: `assets/img/brand/logo-4p-original.jpg` (JPG com fundo preto — falta versão vetorial/PNG transparente; pedir ao cliente ou vetorizar).
- Monograma "4P": um "4" e um "P/π" separados por um corte vertical; três barras horizontais à direita, de comprimentos decrescentes (lembram pilares deitados / gráfico / asa).
- Cores: **preto profundo** de fundo + **dourado em gradiente** (aprox. `#C9A84F` → `#E8D27F`). O dourado não é chapado — preservar o gradiente.
- Direção: premium, sóbria, editorial. As barras horizontais do logo podem virar elemento gráfico/animação recorrente.

## Estado do código

- Stack: HTML + CSS + JS puros, sem build. `index.html`, `assets/css/style.css` (tokens em `:root`, mobile-first, breakpoints 640/960px), `assets/js/main.js`.
- A página atual é um **esqueleto genérico** (azul-marinho/dourado, conteúdo placeholder). Será redesenhada após a análise de referências — não tratar o layout atual como definitivo.
- Conteúdo placeholder: números do hero, depoimentos, e-mail/telefone, nomes dos 4 pilares. Não publicar sem dados reais.
- Branch de trabalho: **somente `main`**. Não criar branches novas; commitar e fazer push direto na `main`. Em sessões cloud (que criam `claude/...` automaticamente), fazer merge na `main` ao final.

## Preferências do usuário (desenvolvedor)

- Respostas em português, diretas, com análise crítica e recomendações acionáveis; explicitar incertezas.
- **Evitar o "padrão visual de IA"**: hero centralizado com gradiente, grid de 3–4 cards idênticos com ícone, seções todas com o mesmo ritmo, copy genérica ("soluções inovadoras"). Buscar tendências reais do mercado.
- Nunca inventar o conteúdo de um site que não foi efetivamente acessado.

## Próxima tarefa

Ver `docs/briefing-redesign.md`.
