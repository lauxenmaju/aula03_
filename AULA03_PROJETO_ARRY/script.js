var lista = [ "Aluno1","Aluno2","Aluno3",100]

//buscando elementos pela oposiçaõ dentro do array 
console.log(lista);
console.log(lista(3));

//descobrindo o tamanho do array
console.log(lista,length);

//saber se um elemento esta dentro do array
console.log(lista.indexOf("Aluno3"));
console.log(lista.indexOf("Aluno4"));

//alterando um elemento dentro do array
lista[0]="Ascrubal";
console.log(lista);

//adicionar um elemento ao array 
lista.push('Aluno4');
console.log(lista);

//removendo o primeiro elemento da lista
lista.shift();
console.log(lista);

//removendo o ultimo elemento da lista
lista.pop();
console.log(lista);

//retornando os elementos da lista com separador
lista.join();
console.log(lista.join(','));


