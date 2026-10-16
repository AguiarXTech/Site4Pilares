# Análise de referências e direção do redesign — 4 Pilares

> Pesquisa feita em 16/10/2026 no Chrome (Claude in Chrome), desktop com 1536px de largura. Os prints mobile (390px) foram feitos com Chrome headless local.
> Prints em [`docs/referencias/`](referencias/). Os nomes começam pelo número da referência na tabela da seção 2.
> Regra seguida: só entrou aqui o que foi efetivamente aberto. As falhas estão listadas na seção 7.

---

## 1. Diagnóstico do site atual (https://4pilares.com.br/)

Páginas navegadas: Home, `/nossos-servicos/quem-somos/` e `/nossos-servicos/`. O menu só tem esses três links e não existe página de contato.

### Perfil

| Item | O que o site mostra hoje |
|---|---|
| **Público** | PMEs de **comércio, serviços e indústria**. As faixas de faturamento do formulário são "até R$ 50 mil", "R$ 50–200 mil" e "acima de R$ 200 mil" por mês. |
| **Serviços** | Diagnóstico financeiro (contas a pagar e a receber, DRE, DFC, BP), reestruturação de processos, eficiência e análise tributária, indicadores e KPIs. O atendimento é "pontual e recorrente". |
| **Método** | "Os 4 Pilares da Transformação": 01 Diagnóstico, 02 Reestruturação, 03 Eficiência e Controle, 04 Resultado. A página de Serviços mostra o processo Coleta → Pré-análise → Reunião inicial → Implementação → Resultado. |
| **Tom** | Mistura alarme ("salvar seu negócio", "Os números não mentem", estatísticas de fechamento de empresas) com promessa genérica ("Seu financeiro em outro nível"). A oferta parece de SaaS: "sem fidelidade", "garantia incondicional de 7 dias", "troque de equipe em 30 dias". |
| **Provas sociais** | Afirma "mais de 600 milhões em faturamento mensal gerenciado, 27 estados, mais de 5 países", mas **os contadores aparecem zerados** (print `00-site-atual-home-contadores-zerados`). Há cinco estrelas sem nenhum depoimento, nenhum caso, nenhum logo de cliente e nenhuma pessoa da equipe. |
| **CTAs e canais** | Só um CTA: um formulário longo de 9 campos (empresa, segmento, faturamento, nome, telefone, CNPJ, e-mail, origem, desafio) com o botão "Receber mais informações". Ele se repete nas três páginas. **Não há WhatsApp, telefone nem e-mail visíveis.** Os ícones de redes sociais do rodapé **não têm link**. |
| **Aviso legal** | O rodapé declara que a empresa não distribui valores mobiliários e não faz assessoria de investimentos. **Deve ser mantido.** |

### Stack aparente (lida no HTML e nos metadados)

- **WordPress 6.8.11 + tema Astra 4.14 + Spectra (Ultimate Addons for Gutenberg)**. O plugin `astra-sites` (importador de templates prontos) está carregado, o que indica que o site partiu de um template.
- **WooCommerce 10.7 e Easy Digital Downloads ativos sem nenhuma loja**. Eles carregam jQuery, blockUI, cookies e scripts de carrinho à toa. Também roda o plugin Hostinger Reach (hospedagem Hostinger, provavelmente).
- Os ícones Lucide vêm do unpkg **sem versão fixada** (`unpkg.com/lucide-static/font/lucide.css`), então podem quebrar a qualquer atualização da biblioteca.
- O formulário envia para `/wp-content/themes/astra/send.php`, um PHP solto dentro da pasta do tema. Ele **some na próxima atualização do Astra** e precisa de revisão de segurança.
- Medi um evento `load` de cerca de **6,1 s** em uma única carga, com 42 requisições. Isso é a performance percebida, não um teste de laboratório.
- O nome do arquivo do logo atual (`Grey-Modern-Professional-Business-Project-Presentation…png`) indica que ele veio de um template do Canva.
- A única fonte do site é a Inter.

### Problemas de UX observados

1. **Mobile (390px)**: o título do hero **estoura a largura da tela** e o texto aparece cortado à direita. Há cerca de 600px de área vazia acima dele e nenhum botão de menu visível (print `00-site-atual-home-mobile.png`). Vi isso no render headless. Vale confirmar num celular real, mas é o tipo de problema que derruba a conversão.
2. Os cards dos 4 pilares mostram só título e subtítulo. O texto descritivo está no HTML, mas não aparece no print, o que sugere que depende de hover ou flip. Se for isso, ninguém lê esse texto no celular nem navegando pelo teclado.
3. Há incoerências de credibilidade: "600 milhões" com contadores em 0, cinco estrelas sem depoimento e erros de digitação ("Uma empresa focado", "Somos referencia", "o melhores Resultados").
4. Na página Serviços, os "serviços" são na verdade **segmentos** (Comércio, Serviço, Indústria). Não existe uma página que explique o que se entrega, nem quanto tempo leva.

### O "padrão de IA" que queremos abandonar

| Sintoma | Onde aparece |
|---|---|
| Títulos **centralizados com uma palavra destacada em cor** ("Os **4 Pilares** da Transformação", "Os **Números** Não Mentem") | Todas as seções |
| **Grid de cards idênticos** com número grande translúcido (01–04) | 4 pilares |
| Cards de estatística com borda lateral colorida, números de fontes genéricas e sem link | "Os números não mentem" |
| Três colunas de "benefícios" com o mesmo peso visual | Garantia |
| FAQ autorreferente ("O que é a 4Pilares?", "Quais os diferenciais?") com respostas vazias ("soluções personalizadas que realmente impactam") | Home |
| Banco de imagem genérico (mãos empilhadas, escritório vazio, templo romano) | Quem somos, Por que escolher |
| Fundo com "blobs" suaves e o mesmo ritmo vertical em todas as seções (título → subtítulo → bloco) | Página inteira |
| Copy de adjetivos ("visão de futuro", "realismo implacável", "dedicação inabalável") | Quem somos |

**Resumo:** o site tem conteúdo técnico bom (DRE, DFC, BP, método em 4 etapas, processo em 5 passos), mas a apresentação é de template e as provas não se sustentam. O redesign precisa **provar** o que hoje só é **afirmado**.

---

## 2. As 12 referências

| # | Referência | URL final | Por que entrou | Elementos aproveitáveis |
|---|---|---|---|---|
| 1 | **Akeo** (ref. da dona) | https://www.akeo.com/ (via `share.google/v0qMVpep6mmom408X`) | Estúdio digital (Webflow + GSAP + Lenis). Foi o que a dona escolheu. | Tipografia display gigante em caixa alta com motion; navegação em "pílula" flutuante; grid de cases em blocos grandes com tags; seção de serviços como **cilindro tipográfico** que gira com o scroll. |
| 2 | **Fante** (ref. da dona) | https://www.agenciafante.com.br/ (via `share.google/mHeW0cv6DdDYnsaFT`) | Agência de marketing BR (WordPress custom, fonte Satoshi). É a segunda escolha da dona. | Hero com vídeo e texto à esquerda + parágrafo/CTA à direita (layout em duas colunas, não centralizado); lista de diferenciais em **linhas** em vez de cards; depoimentos com nome, cargo e logo; números grandes sobre foto escura; blog "Insights". |
| 3 | **Galeazzi & Associados** | https://galeazzi.com.br/ | É a consultoria de **turnaround/reestruturação** de referência no Brasil, o concorrente aspiracional direto. | Hero preto e branco com foto humana e headline curta em caixa alta ("Liderando a transformação"); números com **qualificação** ("100% governança sênior — sem delegar decisões críticas"); "Cinco frentes, uma mesma disciplina", com cada frente sendo uma **situação do cliente**; CTA "Falamos a língua de CEOs e CFOs". |
| 4 | **Alvarez & Marsal** | https://www.alvarezandmarsal.com/ | Líder global em reestruturação e turnaround. | Home guiada por **conteúdo e fatos recentes** (análises, mandatos anunciados, "salvamos cerca de 900 empregos" na venda da TalkTalk); a prova vem como **notícia de resultado**, não como adjetivo. |
| 5 | **PJT Partners** | https://www.pjtpartners.com/ | Banco boutique com área forte de *Restructuring & Special Situations*. | Composição **assimétrica**, com o bloco do título sobreposto a uma foto deslocada; fonte proprietária (pjtSans); "One firm. Many capabilities." como síntese de oferta. |
| 6 | **BR Partners** | https://www.brpartners.com.br/ | Banco de investimento brasileiro, premiado em M&A (Euromoney 2026). | **"Histórico de transações"** em faixa escura, com o nome do cliente, tags (setor/ano), uma linha do que foi feito e o valor (ou "não divulgado"). Funciona bem como formato de caso anonimizável. |
| 7 | **Mercury** | https://mercury.com/ | Fintech B2B com uma das melhores apresentações de produto financeiro em fundo escuro. | **A interface do produto como ilustração** (dashboard de saldo, contas, faturas) no lugar de foto de banco de imagem; lista de recursos com acordeão sincronizado a uma imagem ao lado. |
| 8 | **Ornn** | https://ornn.com/ (encontrado no Land-book) | Fintech (Framer) com **preto + dourado em gradiente** sem cair no "luxo". É a referência visual mais próxima da nova logo. | **Barras verticais em gradiente âmbar/dourado animadas em canvas** (o mesmo gesto das barras do logo 4P); número em serifa grande ("$2.74") ao lado de texto grotesco; rótulos em fonte mono ("PROBLEM"); grid de 12 colunas com rótulo à esquerda e conteúdo à direita; texto que se **revela por cor** conforme o scroll. |
| 9 | **Moto Card** | https://www.moto-card.com/ | **Awwwards Site of the Day (24/09/2026)**. Cartão premium em preto. | Hero em render 3D sóbrio (cartão sobre pedestal) com pouquíssimo texto; CTA de exclusividade ("Apply for Access"); paleta de 2 cores. |
| 10 | **Sobha Privy Collection** | https://sobha-privy-collection.com/ | **Awwwards SOTD (23/09/2026)**. Premium preto e branco. | Contraste tipográfico **serifa itálica + caixa alta espaçada** ("The art / OF THE SUBLIME"); menu minimalista; muito respiro. Mostra que dá para ser premium sem dourado chapado. |
| 11 | **Robinhood Gold** | https://robinhood.com/us/en/gold/ | Página de produto financeiro em **preto + dourado** com tipografia editorial. | Título em **serifa (Martina Plantijn) em dourado sobre preto** ("Smarter money starts with Gold"); botão em gradiente dourado; cards com contorno fino em vez de sombra; foto de mecanismo (engrenagem) como metáfora de precisão. |
| 12 | **Moelis & Company** | https://www.moelis.com/ | Boutique global de M&A e *Capital Structure Advisory*. | **Página de transações filtrável** por produto/setor; fundo com **padrão guilhoché** (desenho de cédula), que comunica "financeiro" sem clichê; equipe sênior como página própria. |

### O que serve e o que não serve, nas duas referências da dona

Nenhuma das duas é do setor financeiro: as duas são **agências**. Então a dona está reagindo à **linguagem visual**, não ao modelo de negócio.

| | Aproveitar | Não serve para uma consultoria financeira |
|---|---|---|
| **Akeo** | Hierarquia tipográfica ousada; navegação em pílula; motion ligado ao scroll (GSAP/Lenis); seções em "cartões" de canto arredondado sobre fundo preto; um único CTA forte no fim ("Book a call"). | Cases de cores saturadas (laranja, verde-água) que brigam com o preto e dourado; renders 3D aleatórios (cavalo, peças) sem relação com finanças; tom "trendy, bold & awesome", que é o oposto da confiança que um CFO procura; peso de vídeo (9 vídeos na home). |
| **Fante** | Hero em duas colunas; diferenciais em linhas; depoimento com nome e empresa reais; números sobre foto; seção de conteúdo e blog para SEO; botão de WhatsApp. | Azul-marinho + amarelo de agência; carrossel de serviços com ícone (cai de novo no grid de cards); banner de cookies sem opção de recusar (só "Continuar e fechar"), um problema de LGPD a não copiar. |

**Leitura provável do gosto da dona:** fundo escuro, tipografia grande, sensação de estúdio premium e movimento. Isso combina com preto e dourado, desde que o tom seja de **consultoria sênior** (Galeazzi, Moelis), não de agência.

---

## 3. Três opções de ESTRUTURA

### E1 — "Diagnóstico primeiro" (jornada em funil)

O site gira em torno de uma ferramenta de **autodiagnóstico financeiro** (6–8 perguntas). O resultado sai em 4 barras, uma por pilar, no mesmo desenho das barras do logo.

```
Home
 ├─ Hero: problema concreto + CTA "Faça o diagnóstico (3 min)"
 ├─ Sintomas (lista em linhas: "fecha o mês sem saber o lucro", "caixa some"...)
 ├─ Método 4 Pilares (scroll horizontal ou sticky, 1 pilar por tela)
 ├─ Casos (formato BR Partners: segmento · porte · problema · resultado)
 ├─ Como trabalhamos (5 passos + prazos) + garantias
 ├─ Quem conduz (sócios/consultores com foto real)
 └─ CTA final + aviso legal
/diagnostico   → ferramenta → resultado por pilar → agendamento/WhatsApp
/metodo        → detalhe dos 4 pilares e entregáveis (DRE, DFC, BP, KPIs)
/casos         → lista filtrável por segmento (comércio/serviços/indústria)
/sobre         → história, equipe, aviso legal
```

- **Prós:** troca o formulário frio de 9 campos por uma troca de valor, porque o lead recebe algo na hora. Também qualifica melhor, já que as respostas viram contexto para o consultor. É o elemento mais diferenciador do mercado, porque nenhuma das consultorias analisadas tem isso. E transforma o logo em sistema (as barras viram o gráfico do resultado).
- **Contras:** exige definir as perguntas e as faixas de pontuação com a dona. Também exige cuidado jurídico: o resultado é "maturidade de gestão", **nunca** recomendação financeira ou de investimento. É mais trabalho de desenvolvimento (JS puro dá conta).

### E2 — "Por situação" (entrada pelo momento da empresa)

Inspirada nas "cinco frentes" da Galeazzi e na filtragem da Moelis. A navegação parte de **onde o empresário está**:

```
Home
 ├─ Hero + seletor "Qual é o seu momento?"
 │    ├─ "Perdi o controle do caixa"        → /situacoes/caixa
 │    ├─ "Cresço, mas o lucro não aparece"  → /situacoes/margem
 │    ├─ "Não confio nos meus números"      → /situacoes/numeros
 │    └─ "Quero escalar com previsibilidade"→ /situacoes/crescimento
 ├─ Segmentos (comércio / serviços / indústria)
 ├─ Método + Casos + Equipe + CTA
```

- **Prós:** fala a língua da dor, não a do serviço. Cada página de situação é uma landing page pronta para Google Ads e SEO local. E reaproveita os textos de segmento que já existem.
- **Contras:** são mais páginas para escrever e manter, e corre o risco de ficar repetitivo se as quatro situações levarem ao mesmo serviço. Também depende de ter casos para cada situação.

### E3 — "Autoridade editorial" (conteúdo + institucional enxuto)

Modelo A&M/Fante: home curta e um hub de **Insights** (artigos, guias como "Como ler uma DFC", checklists) como motor de tráfego.

```
Home (curta) → Método · Casos · Insights · Sobre · Contato
/insights      → artigos, guias para download (com e-mail), newsletter
```

- **Prós:** constrói autoridade e SEO de longo prazo, e cada artigo é um ponto de entrada.
- **Contras:** só funciona com publicação constante (alguém precisa escrever). Leva meses para trazer resultado e não resolve a conversão de quem já chegou.

### Indicação de estrutura: **E1, com páginas de situação da E2 numa segunda fase**

A ferramenta de diagnóstico resolve os dois maiores problemas atuais: o formulário frio e a falta de diferenciação. As situações da E2 viram as "portas de entrada" das campanhas pagas e cada uma termina no mesmo diagnóstico. A E3 fica como evolução, quando houver alguém para escrever.

---

## 4. Três opções de DESIGN

Base comum: a logo é um monograma "4P" em **gradiente dourado** (aprox. `#C9A84F → #E8D27F`) sobre preto, com **três barras horizontais** de comprimentos decrescentes. Em todas as opções, o gradiente aparece **só** no logo, em fios e barras, nos números-chave e no CTA principal. Nunca em blocos grandes nem em texto corrido.

### D1 — "Noir Editorial"

*Referências: Ornn, Robinhood Gold, Sobha Privy, Galeazzi.*

- **Tipografia:** serifa editorial nos títulos e números grandes (**Instrument Serif** ou **Fraunces**, gratuitas no Google Fonts; a versão paga seria PP Editorial New), grotesca no texto (**Inter Tight** ou **Geist**) e **mono** nos rótulos e metadados (**Geist Mono**: "01 — DIAGNÓSTICO", "CASO · INDÚSTRIA · 2026").
- **Grid:** 12 colunas assimétrico, com rótulo em mono nas colunas 1–3 e conteúdo nas 5–12 (como no Ornn). Títulos alinhados à esquerda, **nenhuma seção centralizada**.
- **Preto e dourado:** fundo `#0A0A0A` com variações de grafite (`#121212`, `#1A1A1A`). Dourado em gradiente nos fios horizontais que separam seções (as "barras" do logo), nos números da prova social e no botão principal. Texto em off-white `#EDEAE3`.
- **Motion:** as três barras do logo como **assinatura animada**. Elas se desenham no hero, viram a barra de progresso do scroll e reaparecem como gráfico no resultado do diagnóstico. Os textos se revelam por cor no scroll (Ornn), com transições lentas (600–900ms, easing suave). Tudo com respeito a `prefers-reduced-motion`.
- **Imagens:** fotografia **real** da equipe em preto e branco com grão (Galeazzi), recortes de documentos como DRE e fluxo de caixa desfocados, e UI própria (dashboard de KPIs como no Mercury). Nada de banco de imagem.
- **Moodboard:** uma sala escura com luz lateral quente. Uma folha de balanço impressa em papel creme, com um fio dourado sublinhando o resultado. O número "R$ 2,4 mi" em serifa enorme e, ao lado, um rótulo mono pequeno "CAIXA RECUPERADO · 9 MESES". Barras douradas finas que se acendem da esquerda para a direita como um equalizador lento.

### D2 — "Relatório Anual"

*Referências: Moelis, PJT, BR Partners.*

- **Tipografia:** serifa de texto clássica nos títulos (**Newsreader** ou **Source Serif 4**) e grotesca neutra (**Inter**) no corpo. Tudo em caixa baixa, com tom de documento.
- **Grid:** layout de "relatório", com coluna de leitura estreita (60–70 caracteres por linha), notas laterais e tabelas reais.
- **Preto e dourado:** fundo **claro, cor de papel** (`#F5F2EB`) com texto preto. O preto entra como **seção de pontuação** (hero, casos, CTA). O dourado vira fio de destaque e o guilhoché aparece como textura sutil (Moelis).
- **Motion:** mínimo. Fade e deslocamento curto, contadores que **funcionam** e gráficos que se desenham ao entrar na tela.
- **Imagens:** gráficos e tabelas como protagonistas, retratos formais da equipe.
- **Moodboard:** um relatório anual de banco, papel-algodão, uma capa preta com monograma em hot-stamping dourado e páginas internas brancas com tabelas impecáveis.
- **Atenção:** dourado sobre fundo claro **não passa** no contraste WCAG para texto. Nessa opção, o dourado nunca carrega texto, só ornamento.

### D3 — "Monograma Cinético"

*Referências: Akeo, Moto Card.*

- **Tipografia:** grotesca expandida em caixa alta, gigante (**Unbounded** ou **Archivo Expanded**; a versão paga seria Neue Montreal Extended), com texto pequeno em grotesca normal.
- **Grid:** blocos grandes de canto arredondado sobre preto (Akeo), cases em mosaico.
- **Preto e dourado:** o logo vira **objeto 3D em metal dourado**, renderizado ou em vídeo curto, girando e se montando no hero. Serviços aparecem num cilindro tipográfico ("DIAGNÓSTICO / REESTRUTURAÇÃO / EFICIÊNCIA / RESULTADO").
- **Motion:** intenso, com GSAP ScrollTrigger, smooth scroll com Lenis, seções fixas e texto dividido por letra.
- **Imagens:** renders 3D e vídeo.
- **Moodboard:** uma vitrine noturna de joalheria, o 4P dourado flutuando e girando devagar sobre fundo preto infinito, palavras enormes passando como letreiro.
- **Riscos:** é a opção mais próxima do gosto declarado da dona, mas é a que **mais parece agência** e a mais pesada (vídeo, 3D e JS afetam a performance no mobile, que é onde está o lead de PME). Também exige produção 3D.

### Indicação de design: **D1 Noir Editorial, com uma dose controlada de D3**

O D1 entrega o que a dona viu na Akeo e na Fante (escuro, tipografia forte, movimento) com o **tom de consultoria sênior** da Galeazzi. Do D3, entra **um único momento** de motion forte: o monograma 4P se montando no hero a partir das três barras, em SVG animado (leve, sem 3D). Para seções de leitura longa (método, casos), dá para inverter para o fundo papel do D2 e criar ritmo entre claro e escuro. Isso também quebra a monotonia de "todas as seções iguais" do site atual.

---

## 5. Recomendação final (estrutura + design)

**Estrutura E1 (Diagnóstico primeiro) + design D1 (Noir Editorial), com o monograma animado do D3 no hero.**

Home, em ordem:

1. **Hero** (preto): as três barras se desenham e formam o 4P. Título em serifa alinhado à esquerda, uma frase concreta ("Seu financeiro fecha o mês com números em que você confia."). Dois CTAs: "Fazer diagnóstico (3 min)" (botão em gradiente dourado) e "Falar no WhatsApp" (link discreto).
2. **Sintomas** (preto): lista em linhas, com rótulo mono à esquerda e sintoma à direita. A copy reaproveita o que o site já diz ("retrabalho, descontrole, falta de clareza").
3. **Método 4 Pilares** (papel/claro): seção fixa no scroll, um pilar por vez, cada um com **entregável concreto** (ex.: "Pilar 1 → relatório de diagnóstico com DRE, DFC e BP reconstruídos"). Uma barra dourada mostra o avanço de 1 a 4.
4. **Casos** (preto): formato BR Partners, com segmento · faturamento · problema · resultado · prazo. Dados reais e anonimizados se precisar. **Sem casos reais, a seção não vai ao ar.**
5. **Números** (preto): só números verificáveis, em serifa grande com fio dourado. Substitui as estatísticas genéricas de fechamento de empresas e os contadores quebrados.
6. **Como trabalhamos** (claro): os 5 passos atuais com **prazo** de cada um, mais as garantias reescritas com sobriedade.
7. **Quem conduz** (claro): fotos reais dos consultores e sócios, em preto e branco.
8. **CTA final + rodapé** com o aviso legal atual, CNPJ, contatos reais e redes com link.

**Funcionalidades:**
- **Autodiagnóstico** com 6–8 perguntas. O resultado aparece como 4 barras douradas (uma por pilar) com nível "estruturado / em risco / crítico". O usuário só deixa contato no fim, para receber o relatório. Isso substitui o formulário de 9 campos. Texto explícito: "avaliação de maturidade de gestão, não é recomendação financeira nem de investimento".
- **WhatsApp** com mensagem pré-preenchida que inclui o resultado do diagnóstico.
- Uma página de casos com filtro por segmento.

**Técnico (sem alterar código agora):** manter HTML/CSS/JS puros, como já está no repositório. Motion em CSS e Web Animations API. Se o pilar fixo exigir, usar GSAP + ScrollTrigger via cdnjs com versão fixada. Fontes do Google Fonts com `display=swap`. Meta: LCP abaixo de 2,5 s no 4G. Hoje o carregamento leva cerca de 6 s.

**Pendências com a cliente antes de desenhar:**
1. Logo em vetor (SVG/AI) ou PNG transparente. Sem isso, o monograma animado precisa ser vetorizado por nós.
2. Números reais e verificáveis (faturamento gerenciado, nº de clientes, estados) e 2–3 casos com autorização.
3. Fotos reais da equipe (ou uma sessão de fotos).
4. WhatsApp, e-mail e telefone oficiais, e links das redes.
5. Validar as perguntas do diagnóstico e as faixas de resultado.
6. Confirmar com a dona que o "escuro e cinético" da Akeo pode virar o "escuro editorial" do D1. Vale mostrar lado a lado o hero da Akeo e o do Ornn.

---

## 6. Tendências reais observadas nas referências (e não inventadas)

- **Barras e gráficos generativos em canvas como identidade** (Ornn), em vez de ilustração 3D genérica.
- **Serifa editorial de volta em finanças** (Robinhood Gold com Martina Plantijn, Ornn com FK Roman, Sobha com TT Ramillas).
- **Mono para metadados e rótulos** (Ornn, Geist Mono), um tom de "terminal financeiro".
- **Prova como registro de transação** (BR Partners, Moelis, A&M) em vez de "nossos valores".
- **Interface própria como imagem** (Mercury), substituindo o banco de imagem.
- **Navegação em pílula flutuante e cartões arredondados sobre preto** (Akeo).
- **Paletas de duas cores** nos premiados do Awwwards (Moto: `#0B0C07` / `#E1E5E5`; Sobha: preto e branco).

---

## 7. O que falhou ou ficou de fora

- **Godly** (`godly.website/websites/finance`): o domínio redirecionou para `recent.design` e a extensão não tinha permissão para capturar a tela. Não usei nada de lá.
- **American Express Centurion** (candidato a "preto premium"): a extensão bloqueou a captura nesse domínio. **Não foi analisado e não entrou na tabela.**
- **PAX Corporate Finance** (Awwwards): aberto na página do Awwwards, mas a menção é de 2018. Descartei por não ser recente.
- **Alvarez & Marsal e PJT**: só vi as homes. O scroll da PJT não avançou (provável scroll-jacking), então a análise se limita ao hero e à navegação.
- **Prints mobile**: a janela do Chrome não aceitou ser redimensionada para 390px. Os prints mobile do site atual foram feitos com Chrome headless local (`00-site-atual-*-mobile.png`). As referências só foram capturadas no desktop.
- A informação sobre tecnologia de cada site vem do HTML (metatag generator, scripts e fontes carregados). Não confirmei com os donos dos sites.
