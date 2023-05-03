function calculateSalary(salaries) {
    let total = 0;
    for (let value in salaries) {

        total += salaries[value];

    }

    return total;
}

let salaries1 = { John: 100, Ann: 160, Pete: 130 };
console.log(calculateSalary(salaries1));

let salaries2 = { John: 100, Ann: 160, Pete: 130, Ali: 220 };
console.log(calculateSalary(salaries2))