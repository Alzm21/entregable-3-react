import React from 'react'
import './styles/WelcomePage.css'

const WelcomePage = ({isOpen, onClose}) => {

    if (!isOpen) {
        return null
    }
    return (
        <div className='welcome_page'>
            <div className='welcome_container'>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/c50a4a55883023.5996f8afa3f5c.gif" alt="Welcome to Rick and Morty Api! " />
                <button className="close" onClick={onClose} >Continue to the Page</button>
            </div>
        </div>
    )
}

export default WelcomePage