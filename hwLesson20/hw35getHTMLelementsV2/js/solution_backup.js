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

function buildTable(rows, columns){
    let result = '';
    let semiResult = '';

    for (let i = 0; i < rows; i++){
        semiResult = '';
        for (let j = 0; j < columns; j++){
            semiResult = semiResult.concat(`<td style="border: solid 1px lightcyan;">${(i+1) * (j+1)}</td>`);
        }
        result = result.concat(`<tr>${semiResult}</tr>`)
    }
    return result;
}

document.body.insertAdjacentHTML("afterend", `<table>${buildTable(10,10)}</table>`)
document.body.insertAdjacentHTML("afterend", `<p style="margin-left: 50px; font-size: 24px">Табличка 10 на 10</p>`)
document.body.insertAdjacentHTML("afterend", `<ul>${insertToHtml(arr)}</ul>`);
document.body.insertAdjacentHTML("afterend", `<p style="margin-left: 50px; font-size: 24px">Result of building list from array ${arr}</p>`);
