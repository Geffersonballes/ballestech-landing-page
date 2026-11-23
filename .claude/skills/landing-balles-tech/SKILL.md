---
name: landing-balles-tech
description: 'Padrão, regras e fluxo da landing page da Balles Tech Energia (energia solar em Sapezal/MT, ballestech.com.br), repositório geffersonballes/ballestech-landing-page. Use em QUALQUER pedido que mude visual, texto, estrutura, simulador, diagrama, cores, seções, fotos, contatos ou publicação desta página — inclusive pedidos curtos como "muda o título do site da Balles", "tira essa seção", "coloca financiamento", "publica o site" — e também para criar páginas de campanha da Balles Tech (rural, bateria, comercial) a partir do mesmo padrão.'
---

# Landing page Balles Tech

Página de captação da **Balles Tech Energia**: energia solar fotovoltaica para casas, comércios, indústrias e propriedades rurais em **Sapezal/MT e região**. O objetivo é um só: **o visitante abrir o WhatsApp já sabendo o valor da conta de luz e o tipo de imóvel** (lead qualificado). Não há venda online nem preço fixo: a venda é por orçamento.

- Arquivo da página: `index.html` na raiz (HTML + CSS + JS num arquivo só, sem build). Imagens em `img/` (webp).
- Repositório: `geffersonballes/ballestech-landing-page`. A branch `main` é a que vai ao ar; o trabalho é feito numa branch de desenvolvimento e passa para a `main` quando o dono aprova a prévia.
- Publicação: **Hostinger** em https://ballestech.com.br (plano Premium do dono, ligado ao GitHub com implantação automática da `main`). Enquanto o plano não estiver ativo, o domínio ainda aponta para o site antigo da agência Winner (HostGator, `162.241.61.38`).
- Modelo pronto: `assets/template.html` + `assets/img/`. Detalhes do diagrama: `references/diagrama.md`. Scripts: `scripts/gerar_previa.py` (prévia em HTML único) e `scripts/verificar.js` (prints e checagens).

## REGRA DE OURO

**Toda instrução do usuário que mude a página é registrada nesta skill, na mesma alteração e no mesmo commit.** Se a instrução contradiz uma regra daqui, a regra nova substitui a antiga (apague a antiga, não deixe as duas) e entra no **Registro de decisões** com a data. A skill tem que descrever a página como ela está no repositório — se alguém abrir só a skill, deve entender a página sem ler o código.

## Identidade visual

**Direção:** página clara, limpa e confiável, com um toque de energia em movimento (faixas de luz animadas). Azul da marca transmite confiança; amarelo-sol é reservado para a ação (WhatsApp). Referência de estilo: vídeo enviado pelo dono com luz fluindo, cards interativos e controle deslizante com brilho — adaptado às cores da marca.

**Tokens CSS** (`:root` do `index.html`):

| Token | Cor | Uso |
|---|---|---|
| `--bg` | `#F6F9FE` | fundo da página |
| `--bg-2` | `#EAF1FB` | faixa da seção do diagrama |
| `--card` / `--card-2` | `#FFFFFF` / `#F1F5FB` | cartões, caixas de status |
| `--line` / `--line-2` | azul-marinho 10% / 18% | bordas |
| `--ink` | `#0B1A36` | texto principal |
| `--muted` / `--dim` | `#4A5B78` / `#6B7A93` | texto secundário / legendas |
| `--navy` / `--navy-2` | `#00297D` / `#061A45` | cartão do simulador, rodapé, botão ▶, botões de seta |
| `--accent-text` | `#0062C9` | `<em>` dos títulos, eyebrows, ícones, "+" do FAQ |
| `--blue` | `#008CEF` (azul da logo) | bateria, faixas de luz, foco, chave ligada |
| `--volt` | `#FFC21A` (amarelo-sol), hover `#FFCD3F`, texto `--volt-ink` `#1A1300` | **só** botões de ação, controle do simulador, números de economia, sol/energia no diagrama |
| coral | `#FF7A59` | energia puxada da rede no diagrama |

O amarelo **nunca** vai em texto sobre fundo claro (contraste ruim) e não é espalhado: se tudo for amarelo, o botão do WhatsApp deixa de chamar atenção.

**Tipografia:** Sora 600–800 (títulos; parte do título em `<em>` itálico 500 azul) + Inter 400–600 (texto). Google Fonts.

**Marca:** `img/logo-colorida.webp` no topo (fundo claro), `img/logo-branca.webp` no rodapé (fundo azul-marinho), `img/favicon.png`. Fotos: **somente fotos reais de obras** (`img/projeto1..11.webp`). Nada de banco de imagens.

**Componentes:** botões em pílula (`.btn-volt` amarelo para ação; `.btn-ghost` branco); selo `.pill`; eyebrow com bolinha amarela; cartão do simulador azul-marinho com borda em degradê amarelo→azul; cards de serviço brancos; carrossel com scroll-snap; FAQ com `<details>`; rodapé azul-marinho; botão flutuante verde do WhatsApp.

**Interações que devem ser mantidas:**
- Cabeçalho fixo que ganha fundo ao rolar.
- Faixas de luz (SVG `.beams`) animadas no topo e na chamada final.
- Elementos revelam ao rolar (`.rv` + IntersectionObserver).
- **Simulador**: controle R$ 150–20.000, tipo de imóvel, resultado ao vivo, botão "Quero minha proposta" com WhatsApp pré-preenchido (valor + tipo).
- **Diagrama "um dia na sua casa"**: hora do dia arrastável, ▶/⏸ que passa o dia (toca sozinho uma vez ao aparecer), chave de bateria, energia painéis → inversor → **dentro da casa**, à noite **a luz do cômodo acende** e, com bateria, a energia **sai da bateria → inversor → casa**; números usam o sistema do simulador. Ver `references/diagrama.md`.
- Carrossel de projetos com setas.
- Todos os botões de WhatsApp com `data-msg` própria.
- `prefers-reduced-motion` desliga animações.

## Ordem das seções

1. Cabeçalho (logo, menu: Simulador · Veja funcionando · Serviços · Projetos · Dúvidas, botão "Pedir orçamento").
2. **Topo** (`.hero`): selo "Energia solar em Sapezal e região – MT", título "Sua conta de luz pode cair *até 95%*.", subtítulo, números (+300 projetos instalados · 3 a 5 anos retorno médio · 25 anos de garantia de produção) **e o simulador** (`#simulador`) ao lado (desktop) ou abaixo (celular).
3. **Veja funcionando** (`#energia`): diagrama interativo.
4. **Como funciona** (`#como-funciona`): 4 passos de 1 linha.
5. **Serviços** (`#servicos`): 6 blocos (Residencial, Comercial, Rural, Industrial, Com bateria, Manutenção).
6. **Projetos** (`#projetos`): carrossel com 6 fotos reais.
7. **Dúvidas** (`#duvidas`): 4 perguntas.
8. **Chamada final**: "Pare de pagar caro na *conta de luz*" + "Enviar minha conta de luz".
9. Rodapé (contato, endereço) + WhatsApp flutuante.

A página deve continuar **curta**: ~5.300 px de altura no celular (375 px). Acima de ~6.500 px, avise o dono antes.

## Conteúdo e regras de copy

**Promessa central:** reduzir a conta de luz em até 95% com energia solar, sem dor de cabeça — a Balles Tech cuida de projeto, homologação, instalação e suporte. "A burocracia é nossa."

**Nunca prometer:**
- "conta zerada" (pela Lei 14.300 sobram taxa mínima, iluminação pública e parte da tarifa de rede);
- valor exato de economia ou preço sem visita técnica — todo número do simulador é "estimativa";
- financiamento, prazos de instalação, marcas de equipamento ou condições que o dono não informou.

**Nunca inventar** depoimentos, números, clientes, prêmios ou certificações. Dado faltando vira marcador visível `[PREENCHER: ...]` ou `[CONFIRMAR: ...]` e o dono é avisado. Depoimentos só com texto, nome e cidade fornecidos pelo dono.

**Estilo:** português do Brasil, frases curtas e concretas, foco em economia e tranquilidade (não em tecnologia), sem adjetivos vazios.

**Dados do negócio:**
- Empresa: Balles Tech Energia — energia solar fotovoltaica. Atende Sapezal/MT e região.
- Endereço: Rua 3 de Junho, 1740SW, Quadra 136, Lote 10B, Sala 01A – Jardim Ipê, Sapezal/MT, CEP 78365-000.
- WhatsApp/telefone: (65) 9640-1269 → `556596401269` (constante `CONFIG.whatsapp`). Instagram: @ballestecnologia.
- Números em uso (vieram do site anterior): +300 projetos instalados; retorno médio 3 a 5 anos; economia de até 95%.
- **Garantia (confirmada pelo dono em 23/11/2026):** 25 anos é a **garantia de produção** (desempenho) dos painéis. A garantia do produto varia por fabricante e se consulta no datasheet de cada um — não publicar um número único. Não prometer vida útil ("duram mais de 25 anos").
- Serviços: residencial, comercial, rural/agronegócio, industrial, sistemas com bateria, manutenção e limpeza.
- Venda: **WhatsApp**, por orçamento (sem preço publicado). Visita técnica gratuita e sem compromisso.
- Parâmetros do simulador (`CONFIG`): tarifa R$ 1,00/kWh, economia 86% da conta, 125 kWh/mês por kWp, painel 580 W, bateria 10 kWh.

## Pendências

- [x] Dono aprovou a versão atual; ela está na `main` (23/11/2026).
- [ ] Dono contratar o plano **Premium** da Hostinger; depois: criar o site, ligar Git com implantação automática da `main`, trocar o registro A do domínio para o IP do plano, SSL e HTTPS.
- [ ] Depoimentos reais de clientes (seção removida até existirem).
- [ ] Confirmar os números (+300 projetos, 3 a 5 anos) e o WhatsApp (65) 9640-1269. (25 anos de garantia de produção: confirmado.)
- [ ] Tarifa atual da Energisa na região para ajustar `CONFIG.tarifa`.
- [ ] Se houver financiamento/parcelamento: condições reais para incluir (a pesquisa indica que ajuda a converter).
- [ ] Outros exemplos de landing pages de energia solar que o dono vai enviar para análise.

## Fluxo de trabalho técnico

1. **Editar** o `index.html` (e imagens em `img/`, sempre webp). Valores de negócio só na `CONFIG`; cores só nos tokens.
2. **Testar** servindo a pasta (`python3 -m http.server 8765`) e rodando `node .claude/skills/landing-balles-tech/scripts/verificar.js http://localhost:8765/ <pasta-no-scratchpad>`: prints em 375 px e 1280/1366 px, diagrama em 3 horários. Precisa dar **zero erros no console** e **scrollWidth = largura** nas duas larguras. **Olhe os prints.** Arquivos de teste ficam no scratchpad, nunca no repositório.
3. **Atualizar esta skill** (conteúdo que mudou + linha no Registro de decisões) e, se o padrão mudou, o `assets/template.html`.
4. **Prévia para o dono**: `python3 .claude/skills/landing-balles-tech/scripts/gerar_previa.py . <saida>.html` e enviar o arquivo.
5. **Commit em português** com página e skill juntas, **push** na branch de desenvolvimento. Passar para a `main` só com aprovação do dono.
6. **Conferir no ar** (depois que a `main` estiver ligada à Hostinger): `curl -s https://ballestech.com.br/ | grep -o "<title>[^<]*"` e um texto que mudou, a cada 15 s por até 3 min. **Se não publicar:** a sessão principal confere pelo conector Hostinger a implantação Git do site (status, último deploy, forçar nova implantação) e limpa o cache; se ainda falhar, relata ao dono. O domínio ainda servir o site antigo (React da Winner) significa que o DNS não foi trocado — não é falha de deploy.

**DNS (Hostinger):** só a sessão principal mexe, e só no registro do site (A `@`), anotando o valor antigo. **Nunca** tocar em MX, TXT (SPF, verificações Google), DKIM `hostingermail-*`, `autodiscover`, `autoconfig`, `_dmarc`, nem nos subdomínios `naoerremais` e `docenciacriativa` (outros projetos). O `.htaccess` bloqueia `.md`, `.json`, `.git` e `.claude` — mantenha.

**Autonomia (regra do dono):** reversível → faça direto. Irreversível (apagar site/arquivos/e-mails, resetar DNS inteiro, cancelar/alterar planos, force-push, apagar branch) → explique e espere um "sim". **Compras e pagamentos sempre ficam com o dono.**

## Equipe de subagentes

Definidos em `.claude/agents/`:
- `copywriter-balles-tech` — textos da página.
- `designer-interacoes` — visual, layout, animações e celular.
- `conteudo-balles-tech` — lê materiais (PDF, áudio, vídeo, Drive) e extrai dados.
- `qa-publicacao` — testa, faz commit/push e confere no ar quando pedido.

Regras de orquestração estão no `CLAUDE.md` da raiz.

## Páginas de campanha

Para uma página focada (ex.: produtor rural, bateria contra queda de luz): copie `assets/template.html` e `assets/img/`, mantenha visual, simulador e diagrama, pré-selecione o tipo no simulador (e a bateria, se for o tema), troque título, fotos e `data-msg` ("Vim pela página de energia rural") e corte o que não serve ao tema.

## Registro de decisões

| Data | Decisão |
|---|---|
| 2026-11-18 | Substituir o site em React da agência Winner por uma landing estática própria, versionada no GitHub e publicada pela Hostinger do dono. |
| 2026-11-18 | Removido do DNS o IP `2.57.91.91` (página padrão da Hostinger, sem SSL); o domínio aponta só para `162.241.61.38` (site atual) até a troca para o plano próprio. |
| 2026-11-18 | Hospedagem: o dono vai contratar o plano Premium da Hostinger (caminho 1); a página não depende mais da Winner. |
| 2026-11-18 | Simulador de economia com WhatsApp pré-preenchido (valor da conta + tipo de imóvel). |
| 2026-11-18 | Só fotos reais de obras; depoimentos com foto de banco de imagens foram removidos; depoimentos só reais. |
| 2026-11-18 | Página encurtada (~10.800 → ~5.300 px no celular): saíram "Por que a Balles Tech" e depoimentos; serviços em blocos curtos; projetos em carrossel; FAQ com 4 perguntas. |
| 2026-11-18 | Simulador movido para o topo (acima da dobra). |
| 2026-11-18 | Criado o diagrama interativo "um dia na sua casa", inspirado no vídeo de referência do dono. |
| 2026-11-18 | Verde-limão neon rejeitado: usar a paleta da marca (azul-marinho, azul da logo, amarelo-sol). |
| 2026-11-18 | Fundo claro adotado (a versão escura foi substituída). |
| 2026-11-18 | Diagrama: energia sai do inversor para dentro da casa; à noite a luz acende e, com bateria, a energia sai da bateria → inversor → casa. |
| 2026-11-18 | Autonomia: reversível faz direto; irreversível pede "sim"; compras ficam com o dono. |
| 2026-11-19 | Criada a skill `landing-balles-tech` com template, imagens e scripts de prévia/verificação. |
| 2026-11-23 | Vídeo do "Virality Predictor" avaliado e descartado para a landing. |
| 2026-11-23 | Projeto organizado para trabalhar com 4 subagentes; adotada a REGRA DE OURO (toda instrução que muda a página é registrada aqui no mesmo commit). |
| 2026-11-23 | Dono aprovou a página atual (fundo claro, diagrama com luz e bateria); tudo passou para a `main`, inclusive skill, CLAUDE.md e subagentes. |
| 2026-11-23 | Correções do teste, pedidas pelo dono: no diagrama, o sol e a lua não passam mais sobre nenhum texto (rótulos "Painéis", "Sua casa" e "Rede" mudaram de lugar; lua na metade direita do céu); números de reserva do simulador iguais ao cálculo de R$ 800 (R$ 8.256/ano, R$ 688/mês, 6,4 kWp, 12 painéis). |
| 2026-11-23 | Garantia: "até 25 anos de garantia" virou "25 anos de garantia de produção" (topo e FAQ). Garantia do produto varia por fabricante (datasheet); vida útil não é prometida. |
