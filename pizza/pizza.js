const menu = [
    {
        name: "margherita",
        price: 50
    },
    {
        name: "farmhouse",
        price: 90
    },
    {
        name: "loaded",
        price:55
    },
    {
        name: "peppy",
        price:24
    },
    {
        name: "type 123",
        price: 41
    },
]

let cash = 100;
const orderQ = [];

function addANewPizza(pizzaParam){
    menu.push(pizzaParam)
}

const placeOrder =(pizzaName) => {

    const selected = menu.find(function(item){
        if(item.name === pizzaName){
            cash += item.price;
            return("name" , pizzaName);
            
        }

    });

    const newOrder = {
        id: new Date().getTime(),
        pizzaName: selected.name,
        pizzaPrice : selected.price,
        status: "Ordered"
    }
    orderQ.push(newOrder);
    console.log(newOrder);

    // const selectedPizza = menu.map(function(item){
    //     if(pizzaName === item.name){
    //         orderQ.push(pizzaName)
    //     }
    //     return orderQ
    // })

    // console.log(selectedPizza)
}

placeOrder("peppy");
console.log(cash);

const completeOrder =(orderQ)=> {
    const completedPizza = orderQ.find((item)=> {
        if(orderQ === item.id){
            orderQ.status = "Completed"
        }
    })

    console.log("completedPizza", completedPizza)
}

completeOrder(orderQ);