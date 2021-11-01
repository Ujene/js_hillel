//Дан массив с числами const arr = [1, 2, 3, -1, -2, -3];
//Необходимо написать функцию которая вернет новый массив содержащий только положиельные числа.

const arr = [-1, -2, -3, -1, -2, -3];

function getPosValues(arr){
    if(arr.length < 1){
        return "wrong arg received"
    }
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            result.push(arr[i]);
        }
    }

    if (result.length > 0){
        return result
    }
    return null;
}

console.log(getPosValues(arr));
