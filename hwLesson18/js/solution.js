// У нас есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка в консоль :
// 1. Используйте цикл for..of
// 2. Вывести общее кол-во элементов в консоль
// 3. Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль

const bodyElements = document.body.children;
const result = solution(bodyElements);

function solution(collection) {
    const tagsList = ['UL', 'LI'];

    function getCount(collection, tagList) {
        let result = 0;
        for (const colElem of collection) {
            if (colElem.hasChildNodes()) {
                result = result + getCount(colElem.children, tagList);
            }
            if (tagList.includes(colElem.tagName)) {
                result = result + 1;
            }
        }
        return result;
    }

    function getInnerText(collection, tagList) {
        let result = [];
        for (const colElem of collection) {
            if (colElem.hasChildNodes()) {
                result = result.concat(getInnerText(colElem.children, tagList));
            }
            if (tagList.includes(colElem.tagName)) {
                result.push(colElem.innerText);
            }
        }
        return result;
    }

    return {
        totalElementsCount: getCount(collection, tagsList),
        tagsContains: getInnerText(collection, ['LI'])
    };
}

console.log('Total elements count: ' + result.totalElementsCount);
console.log('"LI" elements contains next text: ' + result.tagsContains);
