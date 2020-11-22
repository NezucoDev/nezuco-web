import React, { useEffect } from 'react'
import Main from '../templates/main'
import Alert from '../components/alert'

import bg from '../assets/images/waldemar-brandt-8Z5GRHvNpEw.webp'

const About = () => {
    useEffect(() => {
        document.title = 'About | Nezuco'
    })

    return (
        <Main id='about'>
            <section className='d-flex full-page hero' style={{ backgroundImage: `url(${bg})` }}>
                <h2>Our <span className='highlight'>mission</span> is to enable businesses for exponential <span className='highlight'>growth</span> by making quality software accessible to <span className='highlight'>everyone, everywhere.</span></h2>
            </section>

            <section className='d-flex full-page'>
                <h2>Our Team</h2>
                <div>
                    <p>Our team consists of the most skilled people, coming from every corner of the world.</p>
                </div>
            </section>
            <Alert title='In Development' message='This page is under construction.' />
        </Main>
    )
}

export default About