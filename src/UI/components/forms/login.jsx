import React from 'react'
import { Link } from 'react-router-dom'

// Import custom hooks
import useForm from '../../../customHooks/useForm'

// Import tools
import validateLogin from "../../../tools/formValidator/validateLogin"
import { LOGIN_PAGE } from '../../../tools/routes'


const initialState = { email: '', password: '' }


export default function LoginForm({ handleLoginSubmit }) {
    const { values, errors, handleChange, handleSubmit } = useForm(initialState, handleFormSubmit, validateLogin)

    function handleFormSubmit() {
        handleLoginSubmit(values)
    }

    return(
        <div className="login-form">

            <div className="form-wrapper">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="login-email">E-mail</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="login-email"
                                    value={values.email}
                                    onChange={handleChange}
                                    className={`form-control ${errors.email && 'error'}`}
                                />
                                { errors.email && <p className={'error'}>{ errors.email }</p> }
                            </div>
                        </div>
                        <div className="col col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="login-password">Mot de passe</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="login-password"
                                    value={values.password}
                                    onChange={handleChange}
                                    className={`form-control ${errors.password && 'error'}`}
                                />
                                { errors.password && <p className={'error'}>{ errors.password }</p>}
                            </div>
                        </div>
                    </div>

                    <div className="row form-actions">
                        <div className="col">
                            <Link to={LOGIN_PAGE}>Mot de passe oublié</Link>
                            <button type="submit" className="button blue-grey" onClick={handleSubmit}>
                                <label>Connexion</label>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}