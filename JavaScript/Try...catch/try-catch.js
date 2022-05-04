function validarArray(arr, num) {
    try { //vai tentar fazer isso aqui
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");
    
        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo objeto");

        if(typeof num !== 'number') throw new TypeError("O número precisa ser do tipo number");

        if(arr.length !== num) throw new RangeError("Tamanho inválido!");

        return arr;
            
    } catch (e) { //se der erro, ele vai tentar tratar esse erro aqui nesse bloco catch
        if(e instanceof ReferenceError) { //se o erro for do tipo ReferenceError
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

console.log(validarArray([1,2,3,4,5], 5));
