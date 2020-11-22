import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Main from '../templates/main'

import './Home.css'
import bg from '../assets/images/home-hero.webp'

const Home = () => {
    useEffect(() => {
        document.title = 'Top 1 Web Development Agency | Nezuco'
    })

    return (
        <Main id='home'>
            <section className='d-flex full-page' style={{ backgroundImage: `url('${bg}')` }}>
                <h1 id='nezuco'>Nezuco</h1>
                <h2 id='subtitle' className='mt-2'>Helping Businesses Reach Wider Audiences Using Cutting-Edge Technology.</h2>
                <div className='center'>
                    <Link to='/register' className='btn btn-lg mt-2'>REGISTER NOW & GET 20% OFF</Link>
                </div>
            </section>

            <section className='d-flex section' style={{ flexDirection: 'column', backgroundImage: 'url(images/pattern-bg.webp)', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                <h1 style={{ color: 'black' }}>Services</h1>
                <div className='d-flex cards mt-2' style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div>
                        <i className='fas fa-3x fa-globe-americas'></i>
                        <h3 className='mt-2'>Website/E-commerce</h3>
                        <p>Take your business online and reach far wider audiences. The
                           possibilities for growth are endless.</p>
                        <Link to='/services/web' className='btn mt-1'>Learn more</Link>
                    </div>
                    <div>
                        <i className='fab fa-3x fa-searchengin'></i>
                        <h3 className='mt-2'>Search Engine Optimization</h3>
                        <p>We take your online presence to new extremes, helping your business
                           grow exponentially.</p>
                        <Link to='/services/seo' className='btn mt-1'>Learn more</Link>
                    </div>
                    <div>
                        <i className='fas fa-3x fa-broadcast-tower'></i>
                        <h3 className='mt-2'>Digital Marketing</h3>
                        <p>Keep your audience and customers engaged with your brand. Don't let
                           them forget about you.</p>
                        <Link to='/services/digital-marketing' className='btn mt-1'>Learn more</Link>
                    </div>
                    <div>
                        <i className='fas fa-3x fa-mobile-alt'></i>
                        <h3 className='mt-2'>Mobile Apps</h3>
                        <p>Reach your audience on iOS and Android. Here at Nezuco, we build apps
                           with a focus on great UI & UX.</p>
                        <Link to='/services/mobile-apps' className='btn mt-1'>Learn more</Link>
                    </div>
                </div>
            </section>

            <section className='d-flex' style={{ backgroundColor: 'var(--dark-a)', textAlign: 'center' }}>
                <div style={{ padding: '3em' }}>
                    <p className="note">Secure and Scalable</p>
                    <h3 className='mt-1'>Integrated, Smart, Customizable Business Software</h3>
                    <div className='mt-1'>
                        <Link to='/services'>Get an Overview of Our Services</Link>
                    </div>
                </div>
                <div className='d-flex'>
                    <div style={{ padding: '3em' }}>
                        <i className='fas fa-file-invoice-dollar fa-3x' ></i>
                        <h3 className='mt-1'>Integrated Applications</h3>
                        <p className='mt-1'>Web and mobile apps for sales, marketing, accounting, and everything else.</p>
                        <div className='mt-1'>
                            <Link to='/services'>Explore Apps</Link>
                        </div>
                    </div>
                    <div style={{ padding: '3em' }}>
                        <i className='fas fa-sync fa-3x' ></i>
                        <h3 className='mt-1'>Smart Services</h3>
                        <p className='mt-1'>Out-of-the-box artificial intelligence, business intelligence, an more.</p>
                        <div className='mt-1'>
                            <Link to='/services'>Explore Services</Link>
                        </div>
                    </div>
                    <div style={{ padding: '3em' }}>
                        <i className='fas fa-tools fa-3x' ></i>
                        <h3 className='mt-1'>Customization Tools</h3>
                        <p className='mt-1'>Tools to integrate, extend, and create apps for a perfect fit.</p>
                        <div className='mt-1'>
                            <Link to='/services'>Explore Tools</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    )
}

export default Home