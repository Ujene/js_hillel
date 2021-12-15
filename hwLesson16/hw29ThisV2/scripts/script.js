// Создайте объект calculator (калькулятор) с тремя методами:
//
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

const calculator = {
    operandA: 0,
    operandB: 0,
    read: (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
            throw new Error("Arguments should have type number")
        }
        this.operandA = a;
        this.operandB = b;
    },
    sum: () => {
        return this.operandA + this.operandB;
    },
    mul: () => {
        return this.operandA * this.operandB;
    }
}
