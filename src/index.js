import React from 'react'
import ReactDOM from 'react-dom'

// Import Router
import AppRouter from './router'

// Import Contexts
import CartContextProvider from './contexts/cart'

// Import libs style

// Import personal styles
import './styles/global.scss'


ReactDOM.render(
  	<React.StrictMode>
    	<CartContextProvider>
      		<AppRouter />
    	</CartContextProvider>
  	</React.StrictMode>,
	document.getElementById('root')
)
