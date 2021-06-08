# Um TCC sobre autómatos celulares

A inspiração para esse projeto foi a morte (decorrente de COVID-19) do criador do mais famoso autómato celular, John Conway, responsável por criar o Jogo da Vida. 
<br><br>
Já existem páginas Web que implementam o Jogo da Vida, como [este](https://playgameoflife.com), porém não fui capaz de encontrar nenhum em português, e muito menos um que te permitisse manipular as regras do jogo, então decidi fazer um por mim mesmo.

## O que é um autômato celular?

Autômato celular é uma especie de simulação, que é realizada em um grade infinita, onde cada espaço dessa grade é uma célula em um estado binário. Ou seja, ela está viva ou morta, infectada ou saudável, colorida ou não.
<br>
Importante ressaltar que o usuario só é responsável de estabelecer as condições iniciais do autômato celular. Por esta razão Conway também chamava autômatos de _"zero player game"_ ou "jogo de 0 jogadores".
<br><br>
Autômatos celulares possuem regras pré-definidas e a cada "geração" todas as células são submetidas a essas regras, simultaneamente.
As regras irão definir quando um célula viva se torna morta, quando uma célula morta se torna viva, e quando a célula permanece estável. 
<br><br>
Esse processo de decisão é baseado nos vizinhos de uma célula, ou seja, as 8 células que a circundam. A sintaxe utilizada para descrever essas regras é "abc/xyz", onde 'abc' e 'xyz' são um conjunto de números entre 0 e 8. 
<br>
'abc' define quantos vizinhos vivos uma célula viva precisa para continuar viva na próxima geração.
<br>
'xyz' define quantos vizinhos vivos uma célula morta precisa para se tornar viva na próxima geração.
<br><br>
Exemplo: Um autômato celular com uma regra 36/123. 
<br>
Isso significa que uma célula morta se tornará viva se ela tiver 1, 2 ou 3 vizinhos vivos.
<br>
Também significa que uma célula viva sobreviverá se tiver 3 ou 6 vizinhos vivos.
<br> 
Podemos inferir então que uma célula viva morrerá se tiver 1,2,4,5,7 ou 8 vizinhos vivos.


## Conway's Game of Life
Conway teve zelo ao escolher as regras de seu jogo, ele o fez de tal jeito que tornasse o autômato imprevísivel e caótico, ao mesmo tempo que fosse interessante.
Conway's Game of Life possui regras 23/3, e a lógica por trás dessa escolha é: 
<br>
<ul>
	<li>Células vivas com menos de 2 vizinhos vivos morrem de solidão</li>
	<li>Células vivas com mais de 3 vizinhos vivos morrem por superpopulação</li>
	<li>Células mortas se tornam vivas quando possuem exatamente 3 vizinhos vivos, como por reprodução  </li>
</ul>
<br>
Essas regras fazem com que não seja possível dizer facilmente se determinado padrão crescerá infinitamente ou não. Faz também com que esse autômato seja "turing completo", portanto ele é capaz de computar qualquer coisa, inclusive o próprio Jogo.
<br>


## Maior interação com o usuário
Existem diversas outras regras de jogos que possuem características interessantes, por exemplo a regra 1357/1357, que faz com que qualquer padrão se multiplique a cada 2 gerações. Ou a regra 012345678/1, que cria uma fractal parecida com a do [Palito de Dente](https://en.wikipedia.org/wiki/Toothpick_sequence).
<br>
Modificar com essas regras e descobrir novos padrões é inegavelmente divertido, e esse é o maior diferencial do meu projeto, você consegue facilmente modificá-las, inclusive durante a simulação.


### Autómatos Celulares em uma dimensão
