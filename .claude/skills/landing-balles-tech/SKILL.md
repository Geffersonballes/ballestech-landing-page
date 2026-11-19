---
name: landing-balles-tech
description: 'Cria, edita e publica landing pages da Balles Tech Energia (energia solar em Sapezal/MT) no padrão aprovado pelo dono — paleta da marca em fundo claro, simulador de economia no topo, diagrama interativo "um dia na sua casa", fotos reais de obras e tudo levando ao WhatsApp. Use sempre que o pedido envolver o site ballestech.com.br, a landing page da Balles Tech, uma página de campanha de energia solar da empresa (residencial, rural, comercial, bateria, manutenção), mudar textos, cores, seções, simulador ou animação dessa página, gerar prévia para aprovação ou publicar na Hostinger — mesmo que o usuário não diga "skill" nem "landing page" (ex.: "muda o título do site da Balles", "faz uma página só para produtor rural", "coloca financiamento no site").'
---

# Landing page Balles Tech

Esta skill guarda o padrão construído e aprovado com o dono da Balles Tech. O objetivo de toda página é **gerar conversa no WhatsApp com um lead qualificado** (que já sabe o valor da conta de luz e o tipo de imóvel). Tudo o que não ajuda nisso sai da página.

O ponto de partida é sempre `assets/template.html` (cópia da versão aprovada). Para a página principal, edite o `index.html` do repositório; para uma página nova de campanha, copie o template e adapte.

## Fatos da empresa (use estes, não invente outros)

- Nome: **Balles Tech Energia** — energia solar fotovoltaica.
- Local: Rua 3 de Junho, 1740SW, Quadra 136, Lote 10B, Sala 01A – Jardim Ipê, Sapezal/MT, CEP 78365-000. Atende Sapezal e região.
- WhatsApp/telefone: (65) 9640-1269 → `556596401269`. Instagram: @ballestecnologia.
- Números já usados no site antigo e mantidos: **+300 projetos instalados**, **retorno médio de 3 a 5 anos**, **até 25 anos de garantia nos painéis**, economia de **até 95%**.
- Serviços: residencial, comercial, rural/agronegócio, industrial, sistemas com bateria, manutenção/limpeza.
- Fotos reais de obras: `img/projeto1.webp` … `img/projeto11.webp`. Logos: `img/logo-colorida.webp` (fundo claro), `img/logo-branca.webp` (fundo escuro), `img/favicon.png`. Estão no repositório e também em `assets/img/` desta skill (copie a pasta `img/` junto com o template ao criar uma página nova fora do repositório).

Se um pedido exigir um dado que não está aqui (financiamento, prazos, marcas de painel, depoimentos, novos números), **pergunte ao usuário** em vez de inventar. Depoimentos só entram se forem reais — com nome e cidade fornecidos por ele. Um depoimento falso, quando o cliente percebe, derruba a confiança na página inteira.

## Direção visual aprovada

| Papel | Valor | Uso |
|---|---|---|
| Fundo | `#F6F9FE` (claro), seções alternadas `#EAF1FB` | página toda |
| Texto | `#0B1A36`, secundário `#4A5B78` | |
| Azul-marinho | `#00297D` / `#061A45` | cartão do simulador, rodapé, botões secundários |
| Azul da logo | `#008CEF` | bateria, faixas de luz, detalhes |
| Azul de texto | `#0062C9` | palavras em destaque (`<em>` nos títulos), eyebrows, ícones |
| Amarelo-sol | `#FFC21A` (hover `#FFCD3F`), texto do botão `#1A1300` | **só** botões de ação, controle do simulador e números de economia |
| Coral | `#FF7A59` | energia puxada da rede no diagrama |

Por que o amarelo não vai em texto sobre fundo claro: não tem contraste suficiente para leitura. Ele é a cor da ação — se aparecer em tudo, o botão de WhatsApp deixa de chamar atenção.

- Fontes: **Sora** (títulos, 600–800) + **Inter** (texto). Títulos com uma parte em `<em>` itálico azul.
- Elemento-assinatura: **faixas de luz animadas** (SVG `.beams`) no topo e na chamada final, inspiradas no vídeo de referência do dono (luz em movimento = energia).
- Cantos arredondados (12–28px), sombras suaves azuladas, muito respiro. Mobile first: tudo precisa funcionar em 375px.
- O dono já testou e rejeitou: verde-limão neon (fugia da marca). Também já existiu versão escura; a atual aprovada é a **clara**.

## Estrutura da página (nesta ordem)

1. **Topo**: selo "Energia solar em Sapezal e região – MT", título "Sua conta de luz pode cair *até 95%*.", subtítulo curto, 3 números de prova numa linha.
2. **Simulador** (no próprio topo, cartão azul-marinho): controle de R$ 150 a R$ 20 mil, tipo de imóvel (Casa/Comércio/Rural/Indústria), resultado: economia por ano em destaque + por mês, kWp e nº de painéis, botão "Quero minha proposta" que abre o WhatsApp **com o valor e o tipo já escritos**, e o aviso de estimativa (irradiação de MT + Lei 14.300, visita técnica gratuita). A calculadora fica acima da dobra porque é o que mais gera contato.
3. **"Um dia na sua casa com energia solar"** — diagrama interativo (detalhes em `references/diagrama.md`).
4. **Como funciona** — 4 passos de uma linha cada.
5. **Serviços** — 6 blocos curtos (ícone + nome + 1 linha), cada um abre o WhatsApp com mensagem própria.
6. **Projetos** — carrossel de fotos reais (arrastar no celular, setas no desktop).
7. **Dúvidas** — no máximo 4 perguntas (custo, retorno, conta zerada, noite/nublado).
8. **Chamada final** — "Pare de pagar caro na *conta de luz*" + botão "Enviar minha conta de luz".
9. **Rodapé** azul-marinho com contato e endereço + botão flutuante do WhatsApp.

O dono pediu a página **curta e pouco cansativa**: no celular ela tem ~5.300px de altura. Antes de acrescentar uma seção, veja se dá para encaixar a informação numa existente; se a página passar de ~6.500px no celular, avise.

## Regras de texto

- Português do Brasil, frases curtas e concretas, sem adjetivos vazios ("solução inovadora de excelência").
- Fale de economia e tranquilidade ("a burocracia é nossa"), não de tecnologia.
- Nunca prometa "conta zerada": pela Lei 14.300 sobram taxa mínima, iluminação pública e parte da tarifa de rede. Use "até 95%".
- Todo número de simulação vem acompanhado de "estimativa".
- Cada botão de WhatsApp tem `data-msg` própria, para o atendimento saber de onde veio o lead.

## Onde mudar o quê

- **WhatsApp, tarifa, % de economia, geração por kWp, potência do painel, bateria**: constante `CONFIG` no fim do HTML. Mude ali, nunca espalhado pelo código.
- **Cores**: variáveis no `:root` do `<style>`.
- **Diagrama**: SVG `#scene` + funções `simulate()` e `drawDay()` — leia `references/diagrama.md` antes de mexer.

## Fluxo de trabalho

1. **Repositório**: `geffersonballes/ballestech-landing-page` (HTML estático, sem build). A branch `main` é a que vai ao ar. Trabalhe numa branch de desenvolvimento e faça commit + push nela.
2. **Teste antes de mostrar**: sirva a pasta (`python3 -m http.server`) e use Playwright (já instalado) para tirar prints em 1366px e 375px. Confira: nenhum erro no console, sem rolagem horizontal (`scrollWidth` igual à largura), textos do diagrama legíveis no celular, simulador e diagrama respondendo. Olhe os prints — não confie só nos números.
3. **Prévia para o dono**: gere um HTML único com as imagens embutidas e envie para ele abrir no app:
   `python3 scripts/gerar_previa.py <pasta-do-site> <saida>.html` (sem dependências; ~550 KB).
4. **Aprovação**: só passe para a `main` depois que o dono aprovar a prévia. Explique as mudanças em linguagem simples, sem jargão técnico.
5. **Publicação (Hostinger)**: o domínio `ballestech.com.br` e o DNS ficam na conta Hostinger do dono. A publicação usa um plano de hospedagem dele ligado ao GitHub (Git com implantação automática da `main`). Antes de trocar o DNS, anote os valores antigos. **Nunca mexa nos registros de e-mail** (MX, SPF/TXT, DKIM `hostingermail-*`, `autodiscover`, `autoconfig`) nem nos subdomínios que não são do site (ex.: `naoerremais`, `docenciacriativa`). O arquivo `.htaccess` bloqueia `.md`/`.json` para que `README.md` e `CLAUDE.md` não fiquem públicos — mantenha-o.

## Regras de autonomia do dono

- **Reversível → faça direto**: editar a página, commit/push em branch, gerar prévia, criar site, publicar, ajustar DNS do site (anotando o valor antigo), instalar SSL.
- **Irreversível → explique e espere um "sim"**: apagar site/arquivos/e-mails, resetar o DNS inteiro, cancelar ou alterar planos, force-push, apagar branches. **Compras e pagamentos sempre ficam com o dono.**

## Páginas de campanha (variações)

Para uma página focada (ex.: "energia solar para produtor rural", "bateria contra queda de luz"):
- Copie `assets/template.html`, mantenha visual, simulador e diagrama.
- Pré-selecione o tipo no simulador (ex.: `Rural` com `checked`) e, se fizer sentido, a chave de bateria ligada.
- Troque título, subtítulo, fotos e `data-msg` dos botões para o tema (ex.: "Vim pela página de energia rural").
- Corte o que não serve ao tema (ex.: serviços viram 3 blocos relevantes) — página de campanha deve ser ainda mais curta.
