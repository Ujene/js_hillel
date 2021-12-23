// document.body.insertAdjacentHTML("afterend", `<div id="hw35" style="align-content: center; margin-left: 50px">byby</div>`);
// document.getElementById("hw35").innerHTML = `<button id="buildArray">List from Array</button> <button id="buildTable">Table 10x10</button> \n <div id="hw35.1"></div>`;
// const customDiv = document.getElementById("hw35.1");
// const buttonArray = document.getElementById("buildArray");
// const buttonTable = document.getElementById("buildTable");
//
// buttonArray.onclick = () => {
//     customDiv.innerHTML = `<ul>${insertToHtml(arr)}</ul>`;
// }
//
// buttonTable.onclick = () => {
//     customDiv.innerHTML = `<table>${buildTable(10,10)}</table>`;
// }
//
//
// const arr = [1, 2, [3, 4, 5], 6];
//
// function insertToHtml(arr){
//     let result = '';
//     for(let i = 0; i < arr.length; i++){
//         if (Array.isArray(arr[i])){
//             result = result.concat(`<ul>${insertToHtml(arr[i])}</ul> \n`);
//         } else {
//             result = result.concat(`<li>${arr[i]}</li> \n`)
//         }
//     }
//
//     return result;
// }
//
// function buildTable(rows, columns){
//     let result = '';
//     let row = '';
//
//     for (let i = 0; i < rows * columns; i++){
//         if ((i + 1) % columns === 0){
//             row = row.concat(`<td>${i + 1}</td>`)
//             result = result.concat(`<tr>${row}</tr>`)
//             row = '';
//         }else {
//             row = row.concat(`<td>${i + 1}</td>`)
//         }
//     }
//     return result;
// }
