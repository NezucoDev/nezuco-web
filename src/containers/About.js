import React, { useEffect } from 'react'
import Main from '../templates/main'

const About = () => {
    useEffect(() => {
        document.title = 'About | Nezuco'
    })

    return (
        <Main id='about'>
            <div>
                <h1>About Nezuco</h1>
                <div style={{ margin: '0 auto', width: '80%' }}>
                    <p>Nezuco is not just another tech company, nor just a brand. It is a dream.</p>

                    <p>Is the destiny of mankind controlled by some transcedental law or entity? Is it like the hand of God hovering above? At least it is true that man has no control even over his own will.</p>
                </div>
            </div>
        </Main>
    )
}

export default About