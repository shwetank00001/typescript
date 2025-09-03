// functions in js
function showData(){
    console.log("Data here")
}

showData();


//in TS;
let greet:Function;
greet = ()=> {
    console.log("Hello")
}

let add = (a:number,b:number) => {
    console.log(a+b)
}

add(5,10)


function sdet(name:string, posting:string){
    return `Hi I am ${name} and I am a ${posting}`
}

console.log(sdet("Shwetank", "ATE"))
