function fibonacci(num) {

    let fib = [0, 1];
    let i = 2;

    while (fib[i - 1] < num) {
        fib.push(fib[i - 1] + fib[i - 2]);
        i++;
    }

    if (fib.includes(num)) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
    }
}

let numero = 21;
console.log(fibonacci(numero));
