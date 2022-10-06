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