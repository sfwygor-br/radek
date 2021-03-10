let numero = [3, 5]; 
let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let foo = '';
let baa = '';

for(m = 1; m <=100; m++){
    foo = '';
    baa = '';

    //encontra os numeros múltiplos
    for (n in numero){
        for (t in tabuada){
            if ( (m == numero[n] * tabuada[t]) && (numero[n] == 3) )
                foo = 'Foo';
            
            if ( (m == numero[n] * tabuada[t]) && (numero[n] == 5) )
                baa = 'Baa';
        }
    }

    //apresenta a mensagem 
    if (foo+baa != '')
        console.log(foo+baa)
    else
        console.log(m);
}