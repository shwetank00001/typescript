const menu = [
    {
        name: "margherita",
        price:"regular"
    },
    {
        name: "farmhouse",
        price:"regular"
    },
    {
        name: "loaded",
        price:"regular"
    },
    {
        name: "peppy",
        price:"regular"
    },
    {
        name: "type 123",
        price:"regular"
    },
]

const cash = 100;
const orderQ = [];

function addANewPizza(pizzaParam){
    menu.push(pizzaParam)
}

const placeOrder =(pizzaObject) => {
    menu.map(function(item){
        if(pizzaObject.name === item.name){

        }
    })
}