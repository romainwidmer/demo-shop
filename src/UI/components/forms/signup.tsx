import React from 'react'

// Import components
import { CustomButton } from '../buttons'

// Import custom hooks
import useForm from '../../../customHooks/useForm'

// Import tools
import validateForm from "../../../tools/formValidator/validateSignup"

type Props = {
    handleSignUpFormSubmit: (values: {
        email: string,
        password: string
    }) => void
}

const initialState = {
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: ''
}


export default function SignupForm({ handleSignUpFormSubmit }: Props) {
    // @ts-ignore
    const { values, errors, handleChange, handleSubmit } = useForm({ initialState, callback, validateForm })

    function callback() {
        handleSignUpFormSubmit(values)
    }

    return(
        <div className="form-wrapper">
            {/** @ts-ignore */}
            <form onSubmit={handleSubmit} className="user-form">
                <div className="row">
                    <div className="col col-md-6 col-12">
                        <div className="form-group">
                            <label htmlFor="signup-email">E-mail</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="signup-email"
                                value={values.email}
                                onChange={handleChange}
                                className={`form-control ${errors.email && 'error'}`}
                            />
                            { errors.email && <p className={'error'}>{ errors.email }</p> }
                        </div>
                    </div>
                    <div className="col col-md-6 col-12">
                        <div className="form-group">
                            <label htmlFor="signup-emailConfirmation">Confirmer E-mail</label>
                            <input 
                                type="email"
                                name="emailConfirm"
                                id="signup-emailConfirm"
                                value={values.emailConfirm}
                                onChange={handleChange}
                                className={`form-control ${errors.emailConfirm && 'error'}`}
                            />
                            { errors.emailConfirm && <p className={'error'}>{ errors.emailConfirm }</p> }
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-md-6 col-12">
                        <div className="form-group">
                            <label htmlFor="signup-password">Mot de passe</label>
                            <input 
                                type="password" 
                                name="password" 
                                id="signup-password"
                                value={values.password}
                                onChange={handleChange}
                                className={`form-control ${errors.password && 'error'}`}
                            />
                            { errors.password && <p className={'error'}>{ errors.password }</p> }
                        </div>
                    </div>
                    <div className="col col-md-6 col-12">
                        <div className="form-group">
                            <label htmlFor="signup-passwordConfirm">Confirmer mot de passe</label>
                            <input 
                                type="password" 
                                name="passwordConfirm" 
                                id="signup-passwordConfirm"
                                value={values.passwordConfirm}
                                onChange={handleChange}
                                className={`form-control ${errors.passwordConfirm && 'error'}`}
                            />
                            { errors.passwordConfirm && <p className={'error'}>{ errors.passwordConfirm }</p> }
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-12">
                        <CustomButton 
                            label="Créer mon compte"
                            color="blue-grey"
                            // @ts-ignore
                            handleClick={handleSubmit} 
                        />
                    </div>
                </div>
            </form>

        </div>
    )
}
