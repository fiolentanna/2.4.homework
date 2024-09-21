const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger; //в переменную sum записано значение суммы двух аргументов
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger; //переменной bonus присвоилось значение из переменной sum
    return bonus;
    };

    module.exports = calculateBonus;
