const nav = document.querySelector('.nav'),
      root = document.querySelector('#root');

      meals = [
        {   
            picture: './images/salad-pngrepo.png',
            title: 'Ceaser salad',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.',
            price: 6,
            quantity: 1
        },
        {
            picture: 'images/soup-pngrepo-com.png',
            title: 'Tomato soup',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.',
            price: 5,
            quantity: 1
        },
        {
            picture: './images/steak-pngrepo-com.png',
            title: 'Steak',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.',
            price: 12,
            quantity: 2
        },
        {
            picture: './images/orange-juice-juice-pngrepo-com.png',
            title: 'Orange juice',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.',
            price: 3,
            quantity: 3
        },
    ];

renderHome();

nav.onclick = function(event){
    event.preventDefault();
    if(event.target.getAttribute('href') === 'home') renderHome();
    if(event.target.getAttribute('href') === 'cart') renderCart();
}

function renderHome(){
    document.querySelector('#homeBtn').classList.add('active');
    document.querySelector('#cartBtn').classList.remove('active');
    root.className = 'products';
    root.innerHTML = '';
    meals.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card'
        card.innerHTML = `
        <img src=${item.picture} alt=${item.title}>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <h3>Price: € ${item.price}</h3>
        <button id = meals_${index}>Add to cart</button>`
        root.append(card);
    })

}

function renderCart(){
    document.querySelector('#homeBtn').classList.remove('active');
    document.querySelector('#cartBtn').classList.add('active');
    root.className = 'cart';
    root.innerHTML = `<table>
    <thead>
    <th class="title">title</th>
    <th class="price">price</th>
    <th class="count">count</th>
    <th class="total">total</th>
    </thead> </table>`
    const tbody = document.createElement('tbody');

    meals.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${item.title}</td>
        <td>€ ${item.price}</td>
        <td>${item.quantity}</td>
        <td>€ ${item.price * item.quantity}</td>`;
        tbody.append(tr)
    });
    const total = document.createElement('div');
    total.className = "totalPrice";
    total.innerHTML = `Total: € ${meals.reduce((total, item) => total += item.price * item.quantity, 0)}`;
    root.querySelector('table').append(tbody);
    root.append(total);

}