import React from 'react'

// Import components
import SkillListComponent from './skills'
import CopyrightComponent from './copyright'


const Footer = () => (
    <div className="main-footer">
        <div className="container">
            <section>
                <img src="/img/logo.png" alt="logo" className="logo" />
                <p className="negative-color">
                    Romain Widmer
                </p>
                <p className="negative-color">
                    Route de la Petite-Caroline 1A <br />
                    1131 Tolochenaz <br />
                    +41 78 725 35 25 <br />
                    <a href="mailto:info@romwidmer@gmail.com">romwidmer@gmail.com</a>
                </p>
                <p className="nogativ-color">
                    <a href="https://github.com/romainwidmer" target="_blank" rel="noopener noreferrer">https://github.com/romainwidmer</a>
                </p>
            </section>
        </div>
        <SkillListComponent />
        <CopyrightComponent />
    </div>
)

export default Footer
