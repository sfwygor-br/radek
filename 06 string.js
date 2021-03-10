let string = 'Exemplo de string';
let count = 0;

string.split('').forEach( () => {
	count++;
});

console.log('Quantidade de caracteres: ', count);