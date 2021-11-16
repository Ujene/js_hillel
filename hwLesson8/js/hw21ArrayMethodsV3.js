// Вам нужно написать функции indexOf, lastIndexOf, find, findIndex, includes, every и some,
// которые работают так же,как одноименные методы массивов.
//
// Алгоритм выполнения:
// 1. Читаете документацию по методу над которым работаете
// 2. разбираетесь как он работает и что возвращает
// 3. пишете функцию которая полностью имитирует работу метода


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Index of 5 is: " + indexOfElement(arr, 5));
function indexOfElement(array, elementToSearch, startSearchFrom = 0) {
    let startIndex = startSearchFrom < 0 ? (array.length - 1) - Math.abs(startSearchFrom) : startSearchFrom;

    if(startIndex > array.length - 1){
        return -1;
    }

    for (let i = startIndex; i < array.length; i++){
        if (array[i] === elementToSearch){
            return i;
        }
    }

    return -1;
}

console.log("Last index of 5 is: " + lastIndexOfElement(arr, 5));
function lastIndexOfElement(array, elementToSearch, startSearchFrom = array.length -1){
    let startIndex = startSearchFrom < 0 ? (array.length - 1) - Math.abs(startSearchFrom) : startSearchFrom;

    if (startIndex > array - 1){
        return -1;
    }

    for (let i = startIndex; i > -1; i--){
        if (array[i] === elementToSearch){
            return i;
        }
    }

    return -1;
}

console.log("Find element with value 5 in arr: " + findElementByExpression(arr, (value) => value === 5));
function findElementByExpression(array, findCb, objectForThis){
    for(let i = 0; i < array.length; i++){
        if(findCb(array[i], i, array)){
            return array[i];
        }
    }
    return undefined;
}

console.log("Find index element with value 5 in arr: " + findIndexElementByExpression(arr, (value) => value === 5));
function findIndexElementByExpression(array, findCb, additionalArgForCb){
    for(let i = 0; i < array.length; i++){
        if(findCb(array[i], i, additionalArgForCb)){
            return i;
        }
    }
    return undefined;
}

console.log("Check: Is 5 includes to array? result: " + includesIn(arr, 5, 4))
function includesIn(array, elementToSearch, startSearchFrom = 0){
    let startIndex = startSearchFrom < 0 ? (array.length - 1) - Math.abs(startSearchFrom) : startSearchFrom;

    for(let i = startIndex; i < array.length; i++){
        if(array[i] === elementToSearch){
            return true;
        }
    }
    return false;
}

console.log("Check: Are the all items in array is numbers: " + checkEvery(arr, (value) => typeof value === 'string'));
function checkEvery(array, everyCb, objectForThis){
    for(let i = 0; i < array.length; i++){
        if(!everyCb(array[i])){
            return false;
        }
    }
    return true;
}

console.log("Check: At least one item in array is number: " + checkSome(arr, (value) => typeof value === 'number'));
function checkSome(array, everyCb, objectForThis){
    for(let i = 0; i < array.length; i++){
        if(everyCb(array[i])){
            return true;
        }
    }
    return false;
}

