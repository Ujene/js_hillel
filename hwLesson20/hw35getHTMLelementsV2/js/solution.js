document.body.insertAdjacentHTML("afterend",
    `<div id="hw35" style="align-content: center; margin-left: 50px"></div>`);
document.getElementById("hw35").innerHTML = `<button id="buildArray">List from Array</button>` +
    `<button id="buildTable">Table 10x10</button>` +
    `<button id="infoToConsole">Info to console</button> \n` +
    `<div id="hw35.1"></div>`;
const customDiv = document.getElementById("hw35.1");
const buttonArray = document.getElementById("buildArray");
const buttonTable = document.getElementById("buildTable");
const buttonToConsole = document.getElementById("infoToConsole")

const arr = [1, 2, 3, [4, 5, [6, 7], 8, 9], 10, 11];



buttonArray.onclick = () => {
    customDiv.innerHTML = `<ul>${insertToHtml(arr)}</ul>`;
}

buttonTable.onclick = () => {
    customDiv.innerHTML = `<table>${buildTable(10,10)}</table>`;
}

buttonToConsole.onclick = () => {
    doChangesInList();
    customDiv.innerText = `Изменения изначального листа видны выше, доп инфу смотреть в консоли`;
}

function doChangesInList(){
    sendToConsoleUlAttributes();
    updateListElements();
}

function updateListElements(){
    const ul = document.getElementById("ulId");
    const ulChildren = ul.children;

    if(ul.hasAttribute("data-dog-tail")){
        ul.removeAttribute("data-dog-tail");
    }

    ulChildren.item(0).setAttribute("data-my-name", "Eduard Poteshnov");
    ulChildren.item(ulChildren.length - 1).innerText = "Hi! My name is Eduard Poteshnov";
}

function sendToConsoleUlAttributes() {
    const ul = document.getElementById("ulId");
    const rawAttributes = ul.attributes;
    const attributeValuesList = [];
    const attributeNamesList = [];

    for (const rawAttribute of rawAttributes) {
        attributeNamesList.push(rawAttribute.name)
        attributeValuesList.push(rawAttribute.value)
    }

    console.log("Список значений атрибутов элемента списка UL");
    for (let i = 0; i < attributeValuesList.length; i++) {
        console.log(attributeValuesList[i]);
    }
    console.log(" ");
    console.log("Список имен атрибутов элемента списка UL")
    for (let i = 0; i < attributeNamesList.length; i++) {
        console.log(attributeNamesList[i]);
    }
    console.log(" ");
}

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
    let row = '';

    for (let i = 0; i < rows * columns; i++){
        if ((i + 1) % columns === 0){
            row = row.concat(`<td>${i + 1}</td>`)
            result = result.concat(`<tr>${row}</tr>`)
            row = '';
        }else {
            row = row.concat(`<td>${i + 1}</td>`)
        }
    }
    return result;
}
