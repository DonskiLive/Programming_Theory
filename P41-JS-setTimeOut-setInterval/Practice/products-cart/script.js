const homeBtn = document.querySelector('#homeBtn'),
	cartBtn = document.querySelector('#cartBtn'),
	products = document.querySelector('#products'),
	cardsArr = [
		{
			id: 0,
			picture: 'src="./img/img_0.png"',
			title: 'Caesar salad',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quae?',
			price: 6,
		},
		{
			id: 1,
			picture: 'src="./img/img_1.png"',
			title: 'Tomato soup',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quae?',
			price: 5,
		},
		{
			id: 2,
			picture: 'src="./img/img_2.png"',
			title: 'Steak',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quae?',
			price: 12,
		},
		{
			id: 3,
			picture: 'src="./img/img_3.png"',
			title: 'Orange juice',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quae?',
			price: 3,
		}
	],
	cartArr = []

renderCards()

homeBtn.onclick = () => {
	cartBtn.classList.remove('active')
	products.classList.remove('table')
	homeBtn.classList.add('active')
	renderCards()
}

function renderCards() {
	products.innerHTML = ''
	for (let card of cardsArr) {
		let productQuantity
		if (cartArr.some(el => el.id == card.id)) {
			productQuantity = cartArr.find(u => u.id === card.id)
			empty = false
		} else { empty = true }
		const div = document.createElement('div')
		div.classList.add('card')
		div.id = `card_${card.id}`
		div.innerHTML = `<img ${card.picture} alt="image1">
		<h2>${card.title}</h2>
		<p>${card.description}</p>
		<h3>Price: $ ${card.price}</h3>
		<button id="add_${card.id}">Add to cart</button>
		<br>
		<label for="quantity">quantity:</label>
		<input type="number" onKeyPress="if(this.value.length==2) return false;" name="quantity" id="quantity_${card.id}" min="0" max="9" placeholder="add" value="${!empty ? productQuantity.quantity : 0}">`
		products.append(div)
		const add = document.querySelectorAll('button')
		for (let btn of add) {

			btn.onclick = (event) => {
				const id = +event.currentTarget.id.split('_')[1]
				createCartArr(id)
				const product = cartArr.find(u => u.id === id)
				product.quantity = +(product.quantity + 1)
				renderCards()
			}
		}
		const quantity = document.querySelectorAll('input')
		for (let input of quantity) {
			input.onchange = (event) => {
				const id = +event.currentTarget.id.split('_')[1]
				createCartArr(id)
				const product = cartArr.find(u => u.id === id)
				product.quantity = +event.currentTarget.value
				renderCards()
			}
		}

	}
	console.log(cardsArr)
	console.log(cartArr)
}

cartBtn.onclick = () => {
	homeBtn.classList.remove('active')
	products.classList.add('table')
	cartBtn.classList.add('active')
	renderCart()
}

function createCartArr(id) {
	if (!cartArr.some(el => el.id == id)) {
		cartArr.push({
			id: cardsArr[id].id,
			title: cardsArr[id].title,
			title: cardsArr[id].title,
			quantity: 0,
			price: cardsArr[id].price
		})
	}
}

function renderCart() {
	products.innerHTML = ''
	products.innerHTML = `${fillTable(cartArr)} <div id="total-price">Total: $ ${cartArr.reduce((sum, el) => sum + (el.price * el.quantity), 0)}</div>`
}

function fillTable(arr) {
	let data = ''
	if (arr.length) {
		data = `<div class="head" id="head-title">Title</div>
	<div class="head" id="head-price">Price</div>
	<div class="head" id="head-count">Count</div>
	<div class="head" id="head-total">Total</div>`
		for (let i = 0; i < arr.length; i++) {
			data += `<div class="grid" id="title_${i}">${arr[i].title}</div>
	<div class="grid" id="price_${i}">$ ${arr[i].price}</div>
	<div class="grid" id="count_${i}">${arr[i].quantity}</div>
	<div class="grid" id="total_${i}">$ ${arr[i].price * arr[i].quantity}</div>`
		}
		return data
	} else { return data = '<div class="head" id="head-total">Cart is empty</div>' }
}

console.log('linux test')