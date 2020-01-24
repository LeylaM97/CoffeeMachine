// const Drink = function(name, price, coffee, milk, sugar, water) {
//     this.name = name;
//     this.price = price;
//     this.coffee = coffee;
//     this.milk = milk;
//     this.sugar = sugar;
//     this.water = water;
// };
//
// const drinks = [
//     new Drink("Latte", 6, 2, 2, 2, 1),
//     new Drink("Americano", 4, 3, 0, 0, 2),
//     new Drink("Cappuccino", 5, 2, 2, 1, 1)
// ];
const supplies = {
    coffee: 10,
    milk: 10,
    sugar: 10,
    water: 10,
};
//************************************Prototypes********************************************************
// const Machine = function(name,date,owner,repairs) {
//     this.name = name;
//     this.date=date;
//     this.owner=owner;
//     this.repairs=repairs;
// };
//
// const CoffeeMachine = function (src, btn1, btn2,btn3) {
//     this.src=src;
//     this.btn1=btn1;
//     this.btn2=btn2;
//     this.btn3=btn3;
// };
//
// CoffeeMachine.prototype = new Machine('Coffee Maker','2015',"De'Longhi", '+994 000 000 00 00');
// CoffeeMachine.prototype.createCoffeeMachineUI=function () {
//     const coffeeMachine=document.createElement('div');
//     coffeeMachine.classList.add('coffee-machine');
//     const picture=document.createElement('img');
//     picture.classList.add('coffee-machine-img');
//     picture.alt='coffee machine';
//     picture.src=this.src;
//     const chooseDrinkBtn=document.createElement('button');
//     chooseDrinkBtn.classList.add('coffee-machine-btn','btn1');
//     chooseDrinkBtn.innerText=this.btn1;
//     chooseDrinkBtn.addEventListener('click',this.createDrinkList);
//     const addFundsBtn=document.createElement('button');
//     addFundsBtn.classList.add('disabled-btn','btn2');
//     addFundsBtn.disabled=true;
//     addFundsBtn.innerText=this.btn2;
//     addFundsBtn.addEventListener('click',this.AddFunds);
//     const prepareDrinkBtn=document.createElement('button');
//     prepareDrinkBtn.classList.add('disabled-btn','btn3');
//     prepareDrinkBtn.disabled=true;
//     prepareDrinkBtn.innerText=this.btn3;
//     prepareDrinkBtn.addEventListener('click',this.showResult);
//     coffeeMachine.append(picture,chooseDrinkBtn,addFundsBtn,prepareDrinkBtn);
//     const firstScript=document.querySelector('script');
//     firstScript.before(coffeeMachine);
// };
// CoffeeMachine.prototype.createDrinkList=function () {
//     function onChange() {
//         const addFundsBtn=document.querySelector('.btn2');
//         addFundsBtn.classList.remove('disabled-btn');
//         addFundsBtn.classList.add('coffee-machine-btn');
//         addFundsBtn.disabled=false;
//         const drinkList=document.querySelector('.coffee-machine-drinks');
//         drinkList.removeEventListener('change',onChange);
//     }
//     const coffeeMachineDrinks=document.createElement('div');
//     coffeeMachineDrinks.classList.add('coffee-machine-drinks');
//     drinks.forEach((drink)=>{
//         const radioBtn = document.createElement('input');
//         radioBtn.setAttribute('type','radio');
//         radioBtn.setAttribute('name','drinks');
//         radioBtn.classList.add('drinks-radio');
//         radioBtn.setAttribute('value',`${drink.name}`);
//         const label = document.createElement( 'label');
//         label.innerText=`${drink.name} - ${drink.price} AZN`;
//         coffeeMachineDrinks.append(radioBtn,label);
//     });
//     document.querySelector('.coffee-machine-btn').before(coffeeMachineDrinks);
//
//     const chooseDrinkBtn=document.querySelector('.btn1');
//     chooseDrinkBtn.removeEventListener('click',this.createDrinkList);
//     chooseDrinkBtn.classList.remove('coffee-machine-btn');
//     chooseDrinkBtn.classList.add('disabled-btn');
//     chooseDrinkBtn.disabled=true;
//
//     const drinkList=document.querySelector('.coffee-machine-drinks');
//     drinkList.addEventListener('change',onChange);
//
// };
//
// CoffeeMachine.prototype.AddFunds=function () {
//     function onChange() {
//         const prepareDrinkBtn=document.querySelector('.btn3');
//         prepareDrinkBtn.classList.remove('disabled-btn');
//         prepareDrinkBtn.classList.add('coffee-machine-btn');
//         prepareDrinkBtn.disabled=false;
//         const inputFunds=document.querySelector('.coffee-machine-funds');
//         inputFunds.removeEventListener('input',onChange);
//     }
//     const enterFunds = document.createElement('input');
//     enterFunds.setAttribute('type','number');
//     enterFunds.placeholder='Please Enter Money';
//     enterFunds.classList.add('coffee-machine-funds');
//     document.querySelector('.coffee-machine-drinks').after(enterFunds);
//
//     const inputFunds=document.querySelector('.coffee-machine-funds');
//     inputFunds.addEventListener('input',onChange);
//     const addFundsBtn=document.querySelector('.btn2');
//     addFundsBtn.classList.add('disabled-btn');
//     addFundsBtn.classList.remove('coffee-machine-btn');
//     addFundsBtn.disabled=true;
//
// };
// CoffeeMachine.prototype.showResult=function () {
//     function recalculateSupplies(drinkName) {
//         drinks.forEach((drink)=>{
//             if(drink.name===drinkName){
//                 supplies.coffee -= drink.coffee;
//                 supplies.milk -= drink.milk;
//                 supplies.sugar -= drink.sugar;
//                 supplies.water -= drink.water;
//             }
//         });
//     }
//     const enteredFunds = document.querySelector('.coffee-machine-funds').value;
//     const radioBtns = document.querySelectorAll('.drinks-radio');
//     radioBtns.forEach((radioBtn)=>{
//         if(radioBtn.checked){
//             drinks.forEach((drink)=>{
//                 if(drink.name===radioBtn.value){
//                     try{
//                         if(supplies.coffee >= drink.coffee && supplies.milk >= drink.milk && supplies.water >= drink.water && supplies.sugar >= drink.sugar){
//                             if(drink.price == enteredFunds){
//                                 setTimeout(()=>{
//                                     alert(`Here is Your ${drink.name}!`);
//                                 },2000);
//                                 recalculateSupplies(`${radioBtn.value}`);
//                             }else if(drink.price < enteredFunds){
//                                 const change = enteredFunds - drink.price;
//                                 setTimeout(()=>{
//                                     alert(`Here is Your ${drink.name} and change ${change} AZN!`);
//                                 },2000);
//                                 recalculateSupplies(`${radioBtn.value}`);
//                             }
//                            else{
//                                   throw new Error(`Not enough money :( Please enter more`);
//                                 }
//                         }
//                         else{
//                             const prepareDrinkBtn=document.querySelector('.btn3');
//                             prepareDrinkBtn.classList.add('disabled-btn');
//                             prepareDrinkBtn.classList.remove('coffee-machine-btn');
//                             prepareDrinkBtn.disabled=true;
//                             throw new Error(`Not enough supplies :( Here is Your money ${enteredFunds} AZN`);
//                         }
//                     }catch(e){
//                         console.error(e.message);
//                     }
//
//                 }
//             })
//         }
//     });
// };
//
// const coffeeMachine1 = new CoffeeMachine('img/coffee-machine.jpg','Choose a drink','Add funds','Prepare a drink');
// coffeeMachine1.createCoffeeMachineUI();
//**********************************************Class*******************************
class Machine {
    constructor(name,date,owner,repairs){
        this.name = name;
        this.date=date;
        this.owner=owner;
        this.repairs=repairs;
    }
}

class CoffeeMachine extends Machine {
    constructor(name, date, owner, repairs, src, btn1, btn2, btn3) {
        super(name, date, owner, repairs);
        this.src=src;
        this.btn1=btn1;
        this.btn2=btn2;
        this.btn3=btn3;
    }
    createCoffeeMachineUI() {
        const coffeeMachine=document.createElement('div');
        coffeeMachine.classList.add('coffee-machine');
        const picture=document.createElement('img');
        picture.classList.add('coffee-machine-img');
        picture.alt='coffee machine';
        picture.src=this.src;
        const chooseDrinkBtn=document.createElement('button');
        chooseDrinkBtn.classList.add('coffee-machine-btn','btn1');
        chooseDrinkBtn.innerText=this.btn1;
        chooseDrinkBtn.addEventListener('click',this.createDrinkList);
        const addFundsBtn=document.createElement('button');
        addFundsBtn.classList.add('disabled-btn','btn2');
        addFundsBtn.disabled=true;
        addFundsBtn.innerText=this.btn2;
        addFundsBtn.addEventListener('click',this.AddFunds);
        const prepareDrinkBtn=document.createElement('button');
        prepareDrinkBtn.classList.add('disabled-btn','btn3');
        prepareDrinkBtn.disabled=true;
        prepareDrinkBtn.innerText=this.btn3;
        prepareDrinkBtn.addEventListener('click',this.showResult);
        coffeeMachine.append(picture,chooseDrinkBtn,addFundsBtn,prepareDrinkBtn);
        const firstScript=document.querySelector('script');
        firstScript.before(coffeeMachine);
    };
    createDrinkList() {
        function onChange() {
            const addFundsBtn=document.querySelector('.btn2');
            addFundsBtn.classList.remove('disabled-btn');
            addFundsBtn.classList.add('coffee-machine-btn');
            addFundsBtn.disabled=false;
            const drinkList=document.querySelector('.coffee-machine-drinks');
            drinkList.removeEventListener('change',onChange);
        }
        const coffeeMachineDrinks=document.createElement('div');
        coffeeMachineDrinks.classList.add('coffee-machine-drinks');
        drinks.forEach((drink)=>{
            const radioBtn = document.createElement('input');
            radioBtn.setAttribute('type','radio');
            radioBtn.setAttribute('name','drinks');
            radioBtn.classList.add('drinks-radio');
            radioBtn.setAttribute('value',`${drink.name}`);
            const label = document.createElement( 'label');
            label.innerText=`${drink.name} - ${drink.price} AZN`;
            coffeeMachineDrinks.append(radioBtn,label);
        });
        document.querySelector('.coffee-machine-btn').before(coffeeMachineDrinks);

        const chooseDrinkBtn=document.querySelector('.btn1');
        chooseDrinkBtn.removeEventListener('click',this.createDrinkList);
        chooseDrinkBtn.classList.remove('coffee-machine-btn');
        chooseDrinkBtn.classList.add('disabled-btn');
        chooseDrinkBtn.disabled=true;

        const drinkList=document.querySelector('.coffee-machine-drinks');
        drinkList.addEventListener('change',onChange);

    };
    AddFunds() {
        function onChange() {
            const prepareDrinkBtn=document.querySelector('.btn3');
            prepareDrinkBtn.classList.remove('disabled-btn');
            prepareDrinkBtn.classList.add('coffee-machine-btn');
            prepareDrinkBtn.disabled=false;
            const inputFunds=document.querySelector('.coffee-machine-funds');
            inputFunds.removeEventListener('input',onChange);
        }
        const enterFunds = document.createElement('input');
        enterFunds.setAttribute('type','number');
        enterFunds.placeholder='Please Enter Money';
        enterFunds.classList.add('coffee-machine-funds');
        document.querySelector('.coffee-machine-drinks').after(enterFunds);

        const inputFunds=document.querySelector('.coffee-machine-funds');
        inputFunds.addEventListener('input',onChange);
        const addFundsBtn=document.querySelector('.btn2');
        addFundsBtn.classList.add('disabled-btn');
        addFundsBtn.classList.remove('coffee-machine-btn');
        addFundsBtn.disabled=true;

    };
    showResult() {
        function recalculateSupplies(drinkName) {
            drinks.forEach((drink)=>{
                if(drink.name===drinkName){
                    supplies.coffee -= drink.coffee;
                    supplies.milk -= drink.milk;
                    supplies.sugar -= drink.sugar;
                    supplies.water -= drink.water;
                }
            });
        }
        const enteredFunds = document.querySelector('.coffee-machine-funds').value;
        const radioBtns = document.querySelectorAll('.drinks-radio');
        radioBtns.forEach((radioBtn)=>{
            if(radioBtn.checked){
                drinks.forEach((drink)=>{
                    if(drink.name===radioBtn.value){
                        try{
                            if(supplies.coffee >= drink.coffee && supplies.milk >= drink.milk && supplies.water >= drink.water && supplies.sugar >= drink.sugar){
                                if(drink.price == enteredFunds){
                                    setTimeout(()=>{
                                        alert(`Here is Your ${drink.name}!`);
                                    },2000);
                                    recalculateSupplies(`${radioBtn.value}`);
                                }else if(drink.price < enteredFunds){
                                    const change = enteredFunds - drink.price;
                                    setTimeout(()=>{
                                        alert(`Here is Your ${drink.name} and change ${change} AZN!`);
                                    },2000);
                                    recalculateSupplies(`${radioBtn.value}`);
                                }
                                else{
                                    throw new Error(`Not enough money :( Please enter more`);
                                }
                            }
                            else{
                                const prepareDrinkBtn=document.querySelector('.btn3');
                                prepareDrinkBtn.classList.add('disabled-btn');
                                prepareDrinkBtn.classList.remove('coffee-machine-btn');
                                prepareDrinkBtn.disabled=true;
                                throw new Error(`Not enough supplies :( Here is Your money ${enteredFunds} AZN`);
                            }
                        }catch(e){
                            console.error(e.message);
                        }

                    }
                })
            }
        });
    };
}
const coffeeMachine2 = new CoffeeMachine('Coffee Maker','2015',"De'Longhi", '+994 000 000 00 00','img/coffee-machine.jpg','Choose a drink','Add funds','Prepare a drink');


const xhr = new XMLHttpRequest();
let drinks;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        drinks=JSON.parse(xhr.responseText);
        coffeeMachine2.createCoffeeMachineUI();
    }
};
xhr.open("GET","https://my-json-server.typicode.com/LeylaM97/json_coffee-machine_recipes/drinks", true);
xhr.send();
