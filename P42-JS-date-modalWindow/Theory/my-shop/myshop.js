const goods = [
    {
        id: 2,
        title: 'pencil',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, rem?',
        price: 2

    },
    {
        id: 3,
        title: 'pen',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, rem?',
        price: 3

    },
    {
        id: 4,
        title: 'album',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, rem?',
        price: 5

    },
    {
        id: 5,
        title: 'paper',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, rem?',
        price: 4

    }

],
    cart = []

renderMyShop();

function renderMyShop() {
    const container = document.createElement('div');
    container.classList.add('container');
    goods.forEach((good) => {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
        <h3>${good.title}</h3>
        <p>${good.description}</p>
        <p>Price: ${good.price} &euro;</p>
        <button data-id =${good.id} >add to cart</button> `
        container.append(item);
    })
    const buttons = container.querySelectorAll('[data-id]');
    buttons.forEach(btn => {
        btn.onclick = goodAddHandler;
    })
    document.querySelector('.left').append(container)
}

function goodAddHandler(event) {
    const id = +event.target.dataset.id;
    const item = goods.find(good => good.id == id);
    const goodInCart = cart.find(good => good.id == id);
    if (goodInCart) {
        goodInCart.quantity++
    } else {
        cart.push({
            id,
            title: item.title,
            price: item.price,
            quantity: 1
        })
    }

   renderCart();
    
}

function renderCart() {
    document.querySelector('.right').innerHTML = `
    <h2>My cart</h2>
    `;
    const table = document.createElement('table');
    table.innerHTML = `
    <thead>
    <th>title</th>
    <th>price</th>
    <th>quantity</th>
    </thead>
    `;
    const tbody = document.createElement('tbody');
    cart.forEach((item, index) => {
        tbody.innerHTML += `
        <tr>
         <td><i class = 'fas fa-trash' data-id = ${index}></i> ${item.title}</td>
         <td>${item.price} &euro;</td>
         <td>${item.quantity}</td>
        </tr>
        `
    })
    
    tbody.onclick = removeFromCart;
    table.append(tbody);
    const total = document.createElement('h3')
    total.innerHTML = `Total: ${cart.reduce((total, item)=> total += item.price * item.quantity, 0)}`;   
    document.querySelector('.right').append(table);
    document.querySelector('.right').append(total);

}

function removeFromCart(event){
    console.log(event)
    if(event.target.classList.contains('fas')){
        const index = +event.target.dataset.id;
        const good = cart[index];
        if(good.quantity > 1){
            good.quantity--
        }else{
            cart.splice(index,1);
        }

    }
    renderCart();

}

