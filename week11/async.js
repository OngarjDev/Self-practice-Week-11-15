function doSomething(hasResource) {
    return new Promise((resolve, reject) => {
        setTimeout(() => (hasResource ? resolve("done") : reject("fail")), 5000)
    })
}
console.log("starting...")
const workStatus = doSomething(false)
console.log(workStatus)
console.log("ending...")
//starting...
// Promise { <pending> }
// ending...
//fail, throw exception
