# Um TCC sobre autómatos celulares

A inspiração para esse projeto foi a morte (decorrente de COVID-19) do criador do mais famoso autómato celular, John Conway, responsável por criar o Jogo da Vida. <br><br>


Já existem páginas Web que implementam o Jogo da Vida, como [este](https://playgameoflife.com), porém não fui capaz de encontrar nenhum em português, e muito menos um que te permitisse manipular as regras do jogo, então decidi fazer um por mim mesmo.<br><br>


## O que é um autômato celular?

Autômato celular é uma especie de simulação, que é realizada em um grade infinita, onde cada espaço dessa grade é uma célula em um estado binário. Ou seja, ela está viva ou morta, infectada ou saudável, colorida ou não.<br>

Importante ressaltar que o usuario só é responsável de estabelecer as condições iniciais do autômato celular. Por esta razão Conway também chamava autômatos de _"zero player game"_ ou "jogo de 0 jogadores".<br><br>


Autômatos celulares possuem regras pré-definidas e a cada "geração" todas as células são submetidas a essas regras, simultaneamente. As regras irão definir quando um célula viva se torna morta, quando uma célula morta se torna viva, e quando a célula permanece estável. <br><br>


Esse processo de decisão é baseado nos vizinhos de uma célula, ou seja, as 8 células que a circundam. A sintaxe utilizada para descrever essas regras é "abc/xyz", onde 'abc' e 'xyz' são um conjunto de números entre 0 e 8. O conjunto vazio '{}' é válido, ou seja, é possível ter regras como '/136'.<br>

'abc' define quantos vizinhos vivos uma célula viva precisa para continuar viva na próxima geração.<br>

'xyz' define quantos vizinhos vivos uma célula morta precisa para se tornar viva na próxima geração.<br><br>


Exemplo: Um autômato celular com uma regra 36/123. <br>

Isso significa que uma célula morta se tornará viva se ela tiver 1, 2 ou 3 vizinhos vivos.<br>

Também significa que uma célula viva sobreviverá se tiver 3 ou 6 vizinhos vivos.<br> 

Podemos inferir então que uma célula viva morrerá se tiver 1,2,4,5,7 ou 8 vizinhos vivos.<br><br>


## Conway's Game of Life
Conway teve zelo ao escolher as regras de seu jogo, ele o fez de tal jeito que tornasse o autômato imprevísivel e caótico, ao mesmo tempo que fosse interessante. Conway's Game of Life possui regras 23/3, e a lógica por trás dessa escolha é: <br>

<ul>
	<li>Células vivas com menos de 2 vizinhos vivos morrem de solidão</li>
	<li>Células vivas com mais de 3 vizinhos vivos morrem por superpopulação</li>
	<li>Células mortas se tornam vivas quando possuem exatamente 3 vizinhos vivos, como por reprodução  </li>
</ul>
<br>

Essas regras fazem com que não seja possível dizer facilmente se determinado padrão crescerá infinitamente ou não. Faz também com que esse autômato seja "turing completo", portanto ele é capaz de computar qualquer coisa, inclusive o próprio Jogo.<br><br>


## Maior interação com o usuário
Existem diversas outras regras de jogos que possuem características interessantes, por exemplo a regra 1357/1357, que faz com que qualquer padrão se multiplique a cada 2 gerações. Ou a regra 012345678/1, que cria uma fractal parecida com a do [Palito de Dente](https://en.wikipedia.org/wiki/Toothpick_sequence).<br>

Modificar com essas regras e descobrir novos padrões é inegavelmente divertido, e esse é o maior diferencial do meu projeto, você consegue facilmente modificá-las, inclusive durante a simulação.<br><br>


## Autómatos Celulares em uma dimensão
Um outro tipo de autómato celular que acho importante comentar são os que utilizam apenas uma dimensão. E que a 2° dimensão é simplesmente o tempo.<br><br>


As regras são parecidas, porém estruturadas de forma diferente. Ao contrário dos autómatos bidimensionais, cada célula só possui dois vizinhos, e por isso a forma que será definido seu estado na próxima geração não é mais determinado pela quantidade de vizinhos vivos, e sim pela configuração dos vizinhos. <br>

Consolidando, nos autómatos 2D não importava se a célula vizinha viva estava à esquerda ou à direita. O resultado independia de ordem, o que não occore nos automátos 1D.<br><br>


Agora para explicar como é estruturado usaremos o exemplo da Regra 110, explicando também o porquê da regra ser chamada de 110. Para isso faremos uma tabela simples, com todas as combinações possíveis de 3 células e abaixo o seu respectivo novo valor. <br>

0 significa morto, 1 significa vivo.

|                               |     |     |     |     |     |     |     |     |
| ----------------------------- |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Padrão                        | 111 | 110 | 101 | 100 | 011 | 010 | 001 | 000 |
| Novo estado da célula central |  0  |  1  |  1  |  0  |  0  |  0  |  0  |  0  |

<br>

Se você reparar a linha "Padrão" é uma contagem binária decrescente. e a linha "Novo estado" forma um número binário de 8 digitos, que, se convertermos para decimal, será o número 110.<br>

Podemos saber quantas regras existem simplesmente calculado 2<sup>8</sup>, que é igual a 256.<br>

Podemos também calcular quantas regras possíveis existem para um autómato 2D. Para a Regra de Nascimento existem 9 opções (0 a 8) e 2 estados possivéis, checado ou não cechado. Ou seja, 2<sup>9</sup> combinações. <br>
A Regra de Sobrevivência é exatamente igual, então basta multiplica-lás: 2<sup>9</sup> * 2<sup>9</sup> = 2<sup>18</sup> = 262144 regras diferentes.