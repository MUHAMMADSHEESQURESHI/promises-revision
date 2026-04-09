// promises example :
let promise = new Promise((resolve ,reject) => {
    let burger = "available"
    if(burger === "available"){
        resolve("promise resolved : burgers are available")
    }
    else{
        reject("promise rejected: sorry you are late burgers finished")
    }

})

promise.then(function(message){
    console.log(message)
}).catch(function(error){
    console.log(error);
    

}
)




















