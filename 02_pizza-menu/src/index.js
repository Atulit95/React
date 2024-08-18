import React from 'react'
import ReactDOM from 'react-dom/client' // for v18 and above, for previous version
import './index.css'

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false
  }
]

function App () {
  return (
    <div>
      <Header className='container' />
      <Menu />
      <Footer />
    </div>
  )
}

function Header () {
	// const style = {color: "red", fontSize: "40px", textTransform: "uppercase"}
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu () {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza
        name='Pizza Spinaci'
        ingredient='Tomato, mozarella, ham, aragula, and burrata cheese.'
        photoname='pizzas/salamino.jpg'
        price='10'
			/>
    </main>
  )
}

function Pizza () {
  return (
    <div>
      <img src='pizzas/salamino.jpg' alt='Pizza  salamino' />
      <h3>Pizza Salamino</h3>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese.</p>
    </div>
  )
}

function Footer () {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour

	// if( hour >= openHour && hour <= closeHour) alert("We're currently open!");
	// else alert("Sorry we're closed");
  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()} We're currently open!
		</footer>
  ) // return React.createElement("footer", null, "We are currently open!");
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
