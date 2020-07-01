'use strict';

let isNumber = function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
      start = function() {
      
            do {
                  money = prompt('Ваш месячный доход?', '1000');
            }
            while (isNaN(money) || money === '' || money === null);
      };

      start();

let appData = {
      budget: money,
      // income: {},
      // addIncome: [],
      expenses: {},
      addExpenses: [],
      deposite: false,
      mission: 50000,
      period: 3,
      budgetDay: 0,
      budgetMonth: 0,
      expensesMonth: 0,
      asking: function() {
            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'вода, чай, конфеты');
                  appData.addExpenses = addExpenses.toLowerCase().split(', ');
                  appData.deposit = confirm('Есть ли у вас депозит в банке?');

             
                        let answer1;
                        let answer2;
                     

                              for (let i = 0; i < 2; i++) {

                                    do {
                                          answer1 = prompt('Введите обязательную статью расходов', 'еда');
                                    }
                                    while (!isNaN(answer1) || answer1.trim() === '' || answer1 === null);

                                    do{
                                          answer2 = prompt('Во сколько это обойдется?', '100');
                                    }
                                    while (!isNumber(answer2));
                                    answer2 = +answer2;
                                    
                                    appData.expenses[answer2] = +answer2;
                                    console.log(appData.expenses);
                              }     
                  }
      };

      appData.asking();

appData.getExpensesMonth = function() {
      for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
      }
      return ;
};

appData.getBudget = function() {
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
};

appData.getTargetMonth = function() {
      let res = 0;
      if (Math.ceil(appData.mission / appData.budgetMonth) <= 0) {
            return 'Цель не будет достигнута!';
      } else {
           return Math.ceil(appData.mission / appData.budgetMonth);
      }
};

appData.getStatusIncome = function() {

      if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода!');
      } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
            return('У вас средний уровень дохода');
      } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
            return('К сожалению у вас уровень дохода ниже среднего');
      } else {
            return('Что-то пошло не так');
      }
};


appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Расходы за месяц: ' + appData.expensesMonth);

console.log('Цель будет достигнута за период ' + appData.getTargetMonth() + ' месяцев');

// console.log(appData.getStatusIncome());
 
for (let key in appData) {
      console.log('Наша программа включает в себя данные:    свойства :  '+ key + ' значения ' + appData[key]);
}


