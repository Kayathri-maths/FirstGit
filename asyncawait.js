// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTickets= new Promise( (resolve,reject) => {
//     setTimeout( () => {
//         resolve('ticket');
//     },3000)
// });
// const getPopcorn= promiseWifeBringingTickets.then( (t) => {
//     console.log('wife: I have the tickets');
//     console.log('husband: we should go in');
//     console.log('wife: no I am hungry');
//     return new Promise( (resolve,reject) => resolve(`${t} popcorn`));

// })

// const getButter= getPopcorn.then( (t) => {
//     console.log('husband: I got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife:I need butter on my popcorn');
//     return new Promise( (resolve,reject) => resolve(`${t} butter`));

// })
// const getColdDrinks= getButter.then( (t)  => {
//     console.log('husband: I got some butter on popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: now I need coldDrinks');
//     return new Promise( (resolve,reject) => resolve(`${t} coldDrinks`))
// })

// getColdDrinks.then((m) => {
//     console.log(m);
//     console.log('wife: ok, now lets go');
// });


// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

//async await 
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie =async () => {
    const promiseWifeBringingTickets= new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve('ticket');
        },3000)
    });
    const getPopcorn =new Promise( (resolve,reject) => resolve(`popcorn`));

    const getButter =new Promise( (resolve,reject) => resolve(`butter`));

    const getColdDrinks =new Promise( (resolve,reject) => resolve(`coldDrinks`));

    let ticket =await promiseWifeBringingTickets;
    
    console.log(`wife: I have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');

    let popcorn= await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife:I need butter on my popcorn');

    let butter= await getButter;

    console.log('husband: I got some butter on popcorn');
    console.log('husband: we should go in');
    console.log('wife: now I need coldDrinks');

    let coldDrinks=await getColdDrinks;

    console.log(`husband: I got ${coldDrinks}`);
    console.log(`husnband: anything else darling?`);
    console.log(`wife: lets got we are getting late`);
    console.log(`husband: thank you for the remainder`);

    return ticket;
}

preMovie().then( (msg) => console.log(`person3: shows ${msg}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');