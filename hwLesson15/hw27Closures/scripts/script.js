// Вам нужно написать функцию, которая принимает один параметр.
// При первом вызове она его запоминает,
// при втором — суммирует переданный параметр с тем, что передали первый раз и тд.
// Например: sum(3) = 3; sum(5) = 8; sum(20) = 28

function getSumFunc() {
    let num = 0;

    function sum(number) {
        return (() => {
            num = num + number;
            return num
        })();
    }

    return sum;
}

const sum = getSumFunc();
