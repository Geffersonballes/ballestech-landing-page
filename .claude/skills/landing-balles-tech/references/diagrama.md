# Diagrama "Um dia na sua casa com energia solar"

Seção `#energia`. É o elemento interativo pedido pelo dono: o cliente vê a energia funcionando na casa dele. Leia isto antes de mexer no SVG `#scene` ou nas funções `simulate()` / `drawDay()`.

## O que o dono pediu (comportamento obrigatório)

- A energia **desce dos painéis até o inversor** (na parede externa) e **sai do inversor para dentro da casa**, até a lâmpada do cômodo visto pela janela.
- **À noite**, a luz do cômodo **acende** (brilho amarelo `#lampGlow`). Com bateria, a energia **sai da bateria, passa pelo inversor e entra na casa** (fio azul). Sem bateria, vem da rede, usando os créditos (fio coral).
- De dia, o que sobra carrega a bateria (fio azul indo para ela) e/ou vai para a rede como crédito (fio amarelo para o poste).

## Elementos do SVG (viewBox 0 0 800 430)

| id | O que é |
|---|---|
| `sky`, `stars`, `sun`, `moon` | céu muda de cor com a hora; sol no arco do dia; lua num arco baixo na metade direita do céu, acima do poste (para não cobrir textos) |
| `panels` | painéis no telhado, clareiam com o sol |
| `fPanel` | fio painéis → inversor |
| `fHouse` | fio inversor → lâmpada (cor indica a fonte: amarelo = sol, azul `#3AA8FF` = bateria, coral = rede) |
| `fBatt` | inversor → bateria (normal = carregando; classe `rev` = descarregando) |
| `fGrid` | inversor → poste (normal = enviando crédito; `rev` = puxando da rede) |
| `room`, `lampGlow`, `bulb` | cômodo e lâmpada; acendem quando `prodAt(h) < .12` |
| `battG`, `battFill`, `tBatt` | bateria (fica apagada e mostra "desligada" se a chave estiver desligada) |
| `tPanel`, `tHouse`, `tGrid` | valores em kW |

Fluxos são `<path class="flowline">` com traço tracejado animado; `setFlow(id, kW, reverse)` liga/desliga, inverte o sentido e acelera conforme a potência.

## Modelo de energia

- Usa o sistema do simulador (`SYS.kwp`, `SYS.kwhDay`, `SYS.tipo`) — os números são os do cliente.
- Produção: sino entre 6h e 18h (`prodAt`), pico = kWp × 0,82.
- Consumo: perfil por tipo (`loadShape`): casa com pico à noite; comércio/indústria em horário comercial; rural de madrugada à tarde. Escalado para bater o consumo diário.
- `simulate(h)` percorre o dia em passos de 15 min com a bateria começando em 35% (`CONFIG.bateriaKwh`).

## Interação

- Controle `#hour` (0–23:45) e botão ▶/⏸ `#play`. O dia toca sozinho uma vez quando a seção aparece na tela (`labIO`), exceto com `prefers-reduced-motion`.
- Chave `#hasBatt` liga a bateria.
- Texto `#story` narra o que está acontecendo — atualize as frases se mudar o comportamento.

## Celular

Em telas < 640px, `fitScene()` recorta o viewBox (`0 70 800 360`), ajusta o `y` dos valores da bateria e da rede (`tGrid`) e o CSS aumenta `.node-lbl`/`.node-val`, senão os textos ficam ilegíveis.

**Posição dos rótulos (para o sol e a lua nunca cobrirem texto):** o arco do sol não muda; os rótulos é que ficam fora dele. "Painéis" em x 220 (acima do telhado, à esquerda), "Sua casa" em x 140 / y 324–346 (à esquerda da casa, perto do chão), "Rede" em x 700 / y 380–400 (no chão, embaixo do poste, como a "Bateria"). Regra: o centro do sol fica a pelo menos 22 unidades de qualquer texto, em qualquer horário, em 375 e 1280 px. Depois de qualquer mudança no SVG, tire print em 375px nos horários 13:00 (sem bateria), 11:00 (com bateria) e 20:00 (com bateria) e confira se nada se sobrepõe.
