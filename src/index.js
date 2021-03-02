import React from 'react'
import ReactDOM from 'react-dom'

// Import Router
import AppRouter from './router'

// Import Contexts
import AuthContextProvider from './contexts/auth'
import CartContextProvider from './contexts/cart'

// Import libs style
import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Import personal styles
import './styles/global.scss'


ReactDOM.render(
  	<React.StrictMode>
		<AuthContextProvider>
			<CartContextProvider>
				<AppRouter />
			</CartContextProvider>
		</AuthContextProvider>
  	</React.StrictMode>,
	document.getElementById('root')
)
