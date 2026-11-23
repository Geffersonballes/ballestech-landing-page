# Landing page Balles Tech — regras do projeto

- **Antes de qualquer alteração na página, carregue a skill `landing-balles-tech` e siga-a.**
- **Toda instrução do usuário que mude o visual ou a forma da página é registrada na skill, no mesmo commit** (regra nova substitui a antiga e entra no Registro de decisões).
- Responda sempre em **português do Brasil**, em linguagem simples (o dono não é técnico).

## Autonomia
- Reversível → faça direto (editar, testar, commit/push em branch, prévia, publicar, ajustar o registro DNS do site anotando o valor antigo, SSL).
- **Irreversível → explique o que se perde e espere um "sim"** (apagar site/arquivos/e-mails, resetar DNS inteiro, cancelar/alterar planos, force-push, apagar branch).
- **Compras e pagamentos sempre ficam com o dono.**
- Nunca mexer nos registros de e-mail do domínio (MX, TXT, DKIM, autodiscover, autoconfig, _dmarc) nem nos subdomínios de outros projetos.

## Subagentes

| Subagente | Quando usar |
|---|---|
| `copywriter-balles-tech` | Escrever ou revisar textos da página (títulos, serviços, FAQ, chamadas, mensagens de WhatsApp) e aplicá-los no HTML. |
| `designer-interacoes` | Mudar cores, fontes, espaçamentos, seções, animações, simulador, diagrama ou o comportamento no celular. |
| `conteudo-balles-tech` | Ler material recebido (PDF, áudio, vídeo, prints, Drive) e extrair dados para a página. Não edita nada. |
| `qa-publicacao` | Testar a página, e — quando a sessão principal pedir — fazer commit, push e conferir no ar. |

## Orquestração
- A sessão principal conversa com o usuário, decide e delega.
- `copywriter` e `designer` só rodam em paralelo em **seções diferentes**; na mesma seção, um depois do outro.
- Subagentes de edição **não fazem commit**: a sessão principal revisa e pede ao `qa-publicacao` para testar e publicar.
- Decisão ou pedido novo que um subagente encontrar em material é **confirmado com o usuário** antes de virar regra na skill.
- Ao delegar a publicação, passe ao `qa-publicacao` as **linhas de atribuição de commit** da sessão e a branch de destino.
