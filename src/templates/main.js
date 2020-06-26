import React from 'react'
import { Link } from 'react-router-dom'

const Main = ({ children, id, className }) => {
    return (
        <main id={id} className={className}>
            <div id='bg-drop'>
                <header>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/products'>Products</Link>
                        <Link to='/about'>About</Link>
                    </nav>
                </header>
                { children }
            </div>
        </main>
    )
}

export default Main