// Берем счетчик который мы писали на и добавляем к нему возможность

// 1. Подсчитывать сколько раз были вызваны функции (increase, decrease, get)
// 2. Добавить метод getStatistic который вернет на объект с данными которые мы подсчитывали в пункте выше
// 3. Добавить метод который будет обнулять наш счетчик


function getCounter(number) {
    function counter(number) {
        let num = (typeof number === 'number' && !Number.isNaN(number) ? number : 0);
        const howMany = {
            increased: 0,
            decreased: 0,
            valueRetrieved: 0
        }
        return {
            getValue: () => {
                howMany.valueRetrieved++;
                return num;
            },
            increase: () => {
                howMany.increased++;
                num++
            },
            decrease: () => {
                howMany.decreased++;
                num--
            },
            resetCounter: () => {
                howMany.increased = 0;
                howMany.decreased = 0;
                howMany.valueRetrieved = 0;
                num = 0
            },
            getStatistic: () => {
                return howMany;
            }
        }
    }

    return counter(number);
}
