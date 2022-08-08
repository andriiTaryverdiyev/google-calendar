export const createNumbersArray = (from, to) => {
    // ф-ция должна генерировать массив чисел от from до to
    let arr = [];
    for (let i = from; i < to; i++) {
        arr.push(i)
    }
    return arr
};