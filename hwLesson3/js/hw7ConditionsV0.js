// 1. Скомбинировать инструкции if чтобы которые выдают ошибку в одну и если хоть где-то проерка проваливается выводим alert('Фууу.....');
// 2. Переписать код с if на switch, но без комбинирования условий (для каждого условия свое сообщение об ошибке (придумайте сами) )
//
//  let numOrStr = prompt('input number or string');
//     console.log(numOrStr)
//
//     if(numOrStr === null) {
//         console.log('вы отменили')
//     } else if( numOrStr.trim() === '' ) {
//         console.log('Empty String');
//     } else if( isNaN( +numOrStr ) ) {
//         console.log(' number is Ba_NaN')
//     } else {
//         console.log('OK!')
//     }

const variable = (prompt("Enter something"));

if (variable !== null && (variable.length > 0) && !isNaN(Number(variable))) {
    alert("Something entered is OK!")
} else alert("Not OK!");


const variable2 = (prompt("Enter something again"))

switch (true) {
    case (variable2 === null):
        alert("null");
        break;
    case isNaN(Number(variable2)):
        alert("Not a Number");
        break;
    case (variable2.length > 0):
        alert("Empty value");
        break;
    default:
        alert("Good job");
}
