const arr = [1, 2, [3, 4, 5], 6];

function insertToHtml(arr){
    let result = '';
    for(let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            result = result.concat(`<ul>${insertToHtml(arr[i])}</ul> \n`);
        } else {
            result = result.concat(`<li>${arr[i]}</li> \n`)
        }
    }

    return result;
}



document.body.insertAdjacentHTML("afterend", `<ul>${insertToHtml(arr)}</ul>`);
document.body.insertAdjacentHTML("afterend", `<p>Result of building list from array ${arr}</p>`);
