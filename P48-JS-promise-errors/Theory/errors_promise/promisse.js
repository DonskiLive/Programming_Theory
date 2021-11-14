const shop = {
    isOpen: true
}
const getProducts = ()=>{
    return new Promise((resolve,reject)=>{
        if(!shop.isOpen){
            reject(new Error('Shop is closed'))
        }
        setTimeout(()=>{
            const card ={
                apple: '2kg',
                milk: 1,
                sugar: '1kg'
            };
            resolve(JSON.stringify(card));
        }, 2000);
    })
};
let product = {}

getProducts().then((p)=>{
    console.log(p);
    return JSON.parse(p);
}).
then(p =>{
    if(p.milk<1){
        throw new Error('I need milk!')
    }
    console.log('product from promisse:', p)
    product = p
}).catch(err =>{
    console.log(err.message)
}).finally(()=>{
    console.log(product, 'from finally')
})



