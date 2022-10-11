# Var e Operadores Logicos

# **Declarar variáveis somente de leitura com a palavra-chave const**

A palavra-chave `let` não é a única nova forma de declarar variáveis. Na versão ES6, você também pode declarar variáveis usando a palavra-chave `const`.

`const` possui todos os recursos maravilhosos que `let` tem, com o bônus adicional que variáveis declaradas usando `const` são somente de leitura. Elas têm um valor constante, o que significa que a variável atribuída com `const` não pode ser atribuída novamente:

```jsx
const FAV_PET = "Cats";
FAV_PET = "Dogs";

```

O console vai exibir um erro devido à reatribuição do valor de `FAV_PET`.

Você sempre deve nomear variáveis que você não quer reatribuir, usando a palavra-chave `const`. Isso ajuda quando você acidentalmente tenta reatribuir uma variável que deveria ser constante.

**Observação:** é comum que os desenvolvedores usem nomes de variáveis maiúsculas para valores imutáveis e minúsculas ou camelCase para valores mutáveis (objetos e arrays). Você aprenderá mais sobre objetos, arrays e valores imutáveis e mutáveis em desafios futuros. Em desafios posteriores, você também verá exemplos de identificadores de variáveis maiúsculas, minúsculas ou em camelCase.

---

Altere o código para que todas as variáveis sejam declaradas usando `let` ou `const`. Use `let` quando você quiser que a variável mude e `const` quando você quiser que a variável permaneça constante. Além disso, renomeie as variáveis declaradas com `const` para que estejam de acordo com as práticas comuns. Não altere as strings atribuídas às variáveis.

# A**dicionar dois números com JavaScript**

`Number` é um tipo de dado em JavaScript que representa um dado numérico.

Agora, vamos tentar adicionar dois números usando JavaScript.

JavaScript utiliza o símbolo `+` como um operador de adição quando colocado entre dois números.

**Exemplo:**

```
const myVar = 5 + 10;

```

`myVar` agora tem o valor de `15`.

---

Modifique o `0` para que a soma seja igual a `20`.

# **Subtrair um número de outro com JavaScript**

Nós também podemos subtrair um número de outro.

JavaScript usa o símbolo `-` para subtração.

**Exemplo**

```
const myVar = 12 - 6;

```

`myVar` teria o valor `6`.

---

Altere o `0` para que a variável difference seja igual a `12`.

# **Multiplicar dois números com JavaScript**

Nós também podemos multiplicar um número por outro.

JavaScript usa o símbolo `*` para multiplicação de dois números.

**Exemplo**

```
const myVar = 13 * 13;

```

`myVar` teria o valor `169`.

# **Dividir um número por outro com JavaScript**

Nós também podemos dividir um número por outro.

JavaScript usa o símbolo `/` para divisão.

**Exemplo**

```
const myVar = 16 / 2;

```

`myVar` agora possui o valor `8`.

# **Incrementar um número com JavaScript**

Você pode facilmente *incrementar* ou adicionar 1 à variável com o operador `++`.

```
i++;

```

é o equivalente a

```
i = i + 1;

```

**Observação:** a linha inteira torna-se `i++;`, eliminando a necessidade para o sinal de igual (atribuição).

# **Decrementar um número com JavaScript**

Você pode facilmente *decrementar* ou diminuir uma variável por um com o operador `--`.

```
i--;

```

é o equivalente a

```
i = i - 1;

```

**Observação:** a linha inteira torna-se `i--;`, eliminando a necessidade para o sinal de igual (atribuição).

---

Altere o código para usar o operador `--` na variável `myVar`.

# **Criar números decimais com JavaScript**

Nós também podemos armazenar números decimais em variáveis. Números decimais são às vezes referidos como números de *ponto flutuante* ou *floats*.

**Observação:** ao computar números, eles são calculados com precisão finita. Operações que usam pontos flutuantes podem levar a resultados diferentes do resultado desejado. Se você estiver obtendo um desses resultados, abra um tópico no [fórum do freeCodeCamp](https://forum.freecodecamp.org/).

# **Multiplicar dois decimais com JavaScript**

Em JavaScript, você também pode realizar cálculos com números decimais, assim como com números inteiros.

Vamos multiplicar dois decimais para obter o produto deles.

# **Descobrir o resto em JavaScript**

O operador de *resto* `%` retorna o resto da divisão de dois números.

**Exemplo**

> 5 % 2 = 1 porque
> 

**Uso**Na matemática, um número pode ser verificado como par ou ímpar por meio do resto da divisão do número por `2`.

> 17 % 2 = 1 (17 é Ímpar)
> 

**Observação:** o operador de *resto* às vezes é referido incorretamente como o operador de módulo. É muito semelhante ao módulo, mas não funciona adequadamente com números negativos.

# **Atribuir de modo composto com adição aumentada**

Na programação, é comum usar atribuições para modificar o conteúdo de uma variável. Lembre-se de que tudo à direita do sinal de igual é avaliado primeiro, para que possamos dizer:

```
myVar = myVar + 5;

```

para adicionar `5` a `myVar`. Como este é um padrão tão comum, existem operadores que realizam uma operação matemática e atribuição em um passo.

Um desses operadores é o operador `+=`.

```
let myVar = 1;
myVar += 5;
console.log(myVar);

```

`6` seria exibido no console.

# **Atribuir de modo composto com subtração aumentada**

Como o operador `+=`, `-=` subtrai um número de uma variável.

```
myVar = myVar - 5;

```

vai subtrair `5` de `myVar`. Essa expressão pode ser reescrita assim:

```
myVar -= 5;
```

# **Atribuir de modo composto com multiplicação aumentada**

O operador `*=` multiplica uma variável por um número.

```
myVar = myVar * 5;

```

multiplicará `myVar` por `5`. Essa expressão pode ser reescrita assim:

```
myVar *= 5;

```

---

Converta as atribuições para `a`, `b` e `c` para usar o operador `*=`.

# **Atribuir de modo composto com divisão aumentada**

O operador `/=` divide uma variável por outro número.

```
myVar = myVar / 5;

```

dividirá `myVar` por `5`. Essa expressão pode ser reescrita assim:

```
myVar /= 5;
```
# String

# **Escapar aspas literais em strings**

Quando você estiver definindo uma sequência de caracteres você deve iniciar e terminar com uma aspa simples ou dupla. O que acontece quando você precisa de uma aspa literal: `"` ou `'` dentro de sua string?

Em JavaScript, você pode *escapar* uma aspa para que não seja considerada como o fim de uma string ao colocar a *barra invertida* (`\`) na frente da aspa.

```
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

```

Isso sinaliza ao JavaScript que a aspa seguinte não é o fim de uma string, mas que deve aparecer dentro da string. Então, se você fosse imprimir isso no console, você obteria:

```
Alan said, "Peter is learning JavaScript".
```

****Escapar aspas literais em strings****

Quando você estiver definindo uma sequência de caracteres você deve iniciar e terminar com uma aspa simples ou dupla. O que acontece quando você precisa de uma aspa literal: `"` ou `'` dentro de sua string?

Em JavaScript, você pode *escapar* uma aspa para que não seja considerada como o fim de uma string ao colocar a *barra invertida* (`\`) na frente da aspa.

```
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

```

Isso sinaliza ao JavaScript que a aspa seguinte não é o fim de uma string, mas que deve aparecer dentro da string. Então, se você fosse imprimir isso no console, você obteria:

```
Alan said, "Peter is learning JavaScript".

```

---

Use *barras invertidas* para atribuir a string à variável `myStr` para que, se você fosse imprimi-la no console, veria:

```
I am a "double quoted" string inside "double quotes".
```

# **Cercar uma string com aspas simples**

Valores de *string* em JavaScript podem ser escritas com aspas simples ou duplas, desde que você comece e termine com o mesmo tipo de aspas. Diferente de outras linguagens de programação, aspas simples e duplas funcionam da mesma forma em JavaScript.

```
const doubleQuoteStr = "This is a string";
const singleQuoteStr = 'This is also a string';

```

O motivo pelo qual você pode querer usar um tipo de aspas no lugar da outra é se você vir a querer usar ambas em uma string. Isso pode acontecer se você quiser salvar uma conversa em uma string e ter a conversa entre aspas. Outro uso para isso seria salvar uma tag `<a>` com vários atributos em aspas, tudo dentro de uma string.

```
const conversation = 'Finn exclaims to Jake, "Algebraic!"';

```

Porém, isso se torna um problema se você precisar usar as aspas mais extremas dentro dela. Lembre-se, uma string tem o mesmo tipo de aspas no início e no final. Mas se você tem aquela mesma aspa em algum lugar no meio, a string vai terminar mais cedo e lançará um erro.

```
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
const badStr = 'Finn responds, "Let's go!"';

```

Aqui `badStr` lançará um erro.

Na string *goodStr* acima, você pode usar ambas as aspas com segurança ao usar a barra invertida `\` como um caractere de escapamento.

**Observação:** a barra invertida `\` não deve ser confundida com a barra comum `/`. Elas não fazem a mesma coisa.

# **Escapar sequências em strings**

Aspas não são os únicos caracteres que podem ser *escapados* dentro de uma string. Há dois motivos para usar caracteres de escapamento:

1. Para permitir que você use caracteres que você pode não ser capaz de digitar do contrário, como o caractere de retorno de carro.
2. Para permitir que você represente várias aspas em uma string sem o JavaScript entender erroneamente o que você quis dizer.

Aprendemos isso no desafio anterior.

*Note que a própria barra invertida deve ser escapada para ser exibida como uma barra invertida.*

| Código | Saída |
| --- | --- |
| \' | aspas simples |
| \" | aspas duplas |
| \\ | barra invertida |
| \n | nova linha |
| \r | retorno de carro |
| \t | tab |
| \b | limite de palavra |
| \f | quebra de página |

# **Concatenar strings com o operador mais**

Em JavaScript, quando o operador `+` é usado com um valor de `String`, ele é chamado de operador de *concatenação*. Você pode criar uma nova string a partir de outras strings ao *concatenar* elas juntos.

**Exemplo**

```
'My name is Alan,' + ' I concatenate.'

```

**Observação:** cuidado com os espaços. A concatenação não adiciona espaços entre strings concatenadas, então você mesmo precisará adicioná-las.

Exemplo:

```
const ourStr = "I come first. " + "I come second.";

```

A string `I come first. I come second.` seria exibida no console.

# **Concatenar strings com o operador mais igual**

Também podemos usar o operador `+=` para *concatenar* uma string no final de uma variável string existente. Isso pode ser muito útil para quebrar uma longa string em várias linhas.

**Observação:** cuidado com os espaços. A concatenação não adiciona espaços entre strings concatenadas, então você mesmo precisará adicioná-los.

Exemplo:

```
let ourStr = "I come first. ";
ourStr += "I come second.";

```

`ourStr` agora deve ter como valor a string `I come first. I come second.`.

# **Criar strings com variáveis**

Às vezes, você precisará criar uma string. Usando o operador de concatenação (`+`), você pode inserir uma ou mais variáveis em uma string que você está criando.

Exemplo:

```
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";

```

`ourStr` teria o valor da string `Hello, our name is freeCodeCamp, how are you?`.

# **Encontrar o tamanho de uma string**

Você pode encontrar o tamanho de um valor de `String` ao escrever `.length` após a variável de string ou literal de string.

```
console.log("Alan Peter".length);

```

O valor `10` seria exibido no console. Observe que o caractere de espaço entre "Alan" e "Peter" também é contado.

Por exemplo, se nós criássemos uma variável `const firstName = "Ada"`, poderíamos descobrir qual o tamanho da string `Ada` usando a propriedade `firstName.length`.

# **Usar notação de colchetes para encontrar o primeiro caractere em uma string**

*Notação de colchetes* é uma forma de pegar um caractere no índice especificado dentro de uma string.

A maioria das linguagens de programação modernas, como JavaScript, não começa contando do 1 como humanos fazem. Elas começam no 0. Isso é referido como indexação *baseada em zero*.

Por exemplo, o caractere no índice 0 da palavra `Charles` é `C`. Então, se `const firstName = "Charles"`, você pode pegar o valor da primeira letra da string usando `firstName[0]`.

# **Entender a imutabilidade das strings**

Em JavaScript, valores `String` são *imutáveis*, o que significa que elas não podem ser alteradas após serem criadas.

Por exemplo, o código a seguir produzirá um erro porque a letra `B` na cadeia de caracteres `Bob` não pode ser alterada para a letra `J`:

```
let myStr = "Bob";
myStr[0] = "J";

```

Observe que isso *não* significa que `myStr` não possa ser reatribuída. A única forma de alterar `myStr` seria atribuindo a ela um novo valor, deste modo:

```
let myStr = "Bob";
myStr = "Job";
```

# **Usar notação de colchetes para encontrar o enésimo caractere em uma string**

Você também pode usar *notação de colchetes* para pegar caracteres em outras posições em uma string.

Lembre-se de que computadores começam contando do `0`. Então, o primeiro caractere é na verdade o caractere na posição 0.

Exemplo:

```
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];

```

`secondLetterOfFirstName` teria o valor da string `d`.

# **Usar notação de colchetes para encontrar o último caractere em uma string**

Para pegar a última letra de uma string, você pode subtrair um do tamanho da string.

Por exemplo, se `const firstName = "Ada"`, você pode pegar o valor da última letra da string ao usar `firstName[firstName.length - 1]`.

Exemplo:

```jsx
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];

```

`lastLetter` teria o valor da string `a`.

# **Usar notação de colchetes para descobrir o enésimo caractere antes do último em uma string**

Você pode usar o mesmo princípio que nós acabamos de usar para recuperar o último caractere em uma string, para recuperar o enésimo caractere antes do último caractere.

Por exemplo, você pode pegar o valor da antepenúltima letra da string `const firstName = "Augusta"` usando `firstName[firstName.length - 3]`

Exemplo:

```
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];

```

`thirdToLastLetter` teria o valor da string `s`.

# **Preencher espaços em branco**

Você recebe frases com algumas palavras faltando, como substantivos, verbos, adjetivos e advérbios. Você então preencherá os pedaços faltantes com palavras de sua escolha de modo que a frase completa faça sentido.

Considere a frase - Era realmente **____** e nós **____** nós mesmos **____**. Essa frase possui três pedaços faltando - um adjetivo, um verbo e um advérbio, e nós podemos adicionar palavras de nossa escolha para completar. Em seguida, podemos atribuir a frase completa para uma variável como se segue:


# Manipulacao de Arrays

# **Armazenar múltiplos valores em uma variável usando arrays JavaScript**

Com as variáveis de `array` em JavaScript, podemos armazenar diversos dados em um único lugar.

Você começa uma declaração de um array com a abertura de um colchetes, terminando com o fechamento do colchetes e colocando vírgulas entre cada entrada, dessa forma:

```
const sandwich = ["peanut butter", "jelly", "bread"];
```

Você também pode aninhar arrays dentro de outros arrays, como abaixo:

```
const teams = [["Bulls", 23], ["White Sox", 45]];

```

Isso é chamado um *array multidimensional*.

# **Acessar array de dados com índices**

Podemos acessar os dados dentro de arrays usando *indexes*.

Os índices de um array são escritos na mesma notação com colchetes que as strings usam. Porém, em vez de especificar um caractere, eles estão especificando um item do array. Assim como ocorre com as strings, os arrays usam indexação *de base zero*, de forma que o primeiro elemento de um array possui índice `0`.

**Exemplo**

```
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];

```

O `console.log(array[0])` exibirá `50` e `data` terá o valor de `60`.

# **Modificar dados de array com índices**

Ao contrário das strings, as entradas de arrays são *mutáveis* e podem ser alteradas livremente, mesmo se o array foi declarado com `const`.

**Exemplo**

```
const ourArray = [50, 40, 30];
ourArray[0] = 15;

```

`ourArray` agora tem o valor `[15, 40, 30]`.

**Observação:** não deve haver espaços entre o nome do array e os colchetes, como `array [0]`. Embora JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores lendo seu código.

# **Acessar arrays multidimensionais com índices**

Uma maneira de pensar em um array *multidimensional* é como um *array de arrays*. Quando você usa colchetes para acessar seu array, o primeiro conjunto de colchetes se refere às entradas no array mais exterior (o primeiro nível), e cada par adicional de colchetes refere-se ao próximo nível de entradas interno.

**Exemplo**

```
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

```

Neste exemplo, `subarray` tem o valor de `[[10, 11, 12], 13, 14]`, `nestedSubarray` tem o valor de `[10, 11, 12]` e `element` tem o valor de `11` .

**Observação:** não deve haver nenhum espaço entre o nome do array e os colchetes como `array [0][0]` e até mesmo `array [0] [0]` não é permitido. Embora JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores lendo seu código.

# **Manipular arrays com push()**

Uma forma fácil de adicionar dados no final de um array é através da função `push()`.

`.push()` recebe um ou mais *parâmetros* e "empurra" eles no final do array.

Exemplos:

```
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

```

`arr1` agora tem o valor de `[1, 2, 3, 4]` e `arr2` tem o valor de `["Stimpson", "J", "cat", ["happy", "joy"]]`.

---

Empurre `["dog", 3]` para o final da variável `myArray`.

# **Manipular arrays com pop()**

Outra forma de alterar os dados em um array é com a função `.pop()`.

`.pop()` é usado para remover um valor do final do array. Nós podemos armazenar esse valor removido atribuindo-o a uma variável. Em outras palavras, `.pop()` remove o último elemento de um array e retorna aquele elemento.

Qualquer tipo de entrada pode ser removida de um array - numbers, strings e até mesmo arrays aninhados.

```
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

```

O primeiro `console.log` exibirá o valor `6` e o segundo exibirá o valor `[1, 4]`.

---

Use a função `.pop()` para remover o último item de `myArray` e atribuir o valor removido para uma nova variável, `removedFromMyArray`.

# **Manipular arrays com shift()**

`pop()` sempre remove o último elemento de um array. E se você quiser remover o primeiro?

É aí que o `.shift()` vem a ser útil. Ele funciona da mesma forma que `.pop()`, exceto que ele remove o primeiro elemento ao invés do último.

Exemplo:

```
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

```

`removedFromOurArray` teria o valor da string `Stimpson` e `ourArray` teria o valor de `["J", ["cat"]]`.

# **Manipular arrays com unshift()**

Você pode não apenas usar `shift` para remover elementos do início de um array, como também pode usar `unshift` para adicionar elementos ao início de um array, ou seja, adicionar elementos na posição inicial do array.

`.unshift()` funciona exatamente como `.push()`, mas, ao invés de adicionar o elemento ao final do array, `unshift()` adiciona o elemento no início do array.

Exemplo:

```
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

```

Após o `shift`, `ourArray` teria o valor `["J","cat"]`. Após o `unshift`, `ourArray` teria o valor `["Happy","J","cat"]`.

# **Criar lista de compras**

Crie uma lista de compras na variável `myList`. A lista deve ser um array multidimensional contendo diversos sub-arrays.

O primeiro elemento em cada sub-array deve conter uma string com o nome do item. O segundo elemento deve ser um número representando a quantidade, ou seja,

```
["Chocolate Bar", 15]
```

[Fila](https://www.notion.so/Fila-271aba99ee2c46e287b7ce75ec9d3b17)