import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './main.css'

const Main = ({ children, id, className, ...props }) => {
    useEffect(() => {
        window.scrollTo(0,0)

        window.onscroll = (e) => {
            if (window.pageYOffset > 0)
                document.querySelector('nav').classList.add('floating')
            else
                document.querySelector('nav').classList.remove('floating')
        }

        return () => {
            window.onscroll = undefined
        }
    })
    return (
        <main id={id} className={className} style={props.style}>
            <header>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/about'>About</Link>
                </nav>
            </header>
            {children}
            <footer className='main-footer'>
                <section className='d-flex pre-footer' style={{ marginTop: '-7em', marginBottom: '2em' }}>
                    <div className='d-flex dark' style={{ padding: '2em', backgroundColor: 'var(--primary-color)', justifyContent: 'space-around', alignItems: 'center' }}>
                        <h2>For inquiries and any kind of support.</h2>
                        <div>
                            <Link to='/contact' className='btn btn-lg'>Contact Us</Link>
                        </div>
                    </div>
                </section>
                <div className='d-flex' style={{ flexWrap: 'wrap' }}>
                    <div>
                        <h5>Services</h5>
                        <ul>
                            <li><Link to='/services/web-development'>Web Design & Development</Link></li>
                            <li><Link to='/services/digital-marketing'>Digital Marketing</Link></li>
                            <li><Link to='/services/seo'>Search Engine Optimization</Link></li>
                            <li><Link to='/services/e-commerce'>E-commerce Development</Link></li>
                            <li><Link to='/services/mobile-apps'>Mobile App Development</Link></li>
                            <li><Link to='/services/budget-estimation-tool'>Budget Estimation</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Products</h5>
                        <ul>
                            <li><Link to='//salesx.nezuco.com'>SalesX</Link></li>
                            <li><Link to='/products/waproxi'>WAProxi</Link></li>
                            <li><Link to='/products/crm-erp'>CRM + ERP</Link></li>
                            <li><Link to='/products/cms-lms'>CMS/LMS</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Information</h5>
                        <ul>
                            <li><Link to='/tos'>Terms of Service</Link></li>
                            <li><Link to='/privacy'>Privacy Policy</Link></li>
                            <li><Link to='/about'>Our Mission</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Follow Us</h5>
                        <div className='d-flex mt-1 lmr-5'>
                            <Link to='//facebook.com'><i className='fab fa-facebook' title='Facebook'></i></Link>
                            <Link to='//twitter.com'><i className='fab fa-twitter' title='Twitter'></i></Link>
                            <Link to='/#'><i className='fab fa-instagram' title='Instagram'></i></Link>
                        </div>

                        <div>
                            <label><h5 className='mt-2'>Join Our Mailing List</h5></label>
                            <input className='mt-1' type='text' placeholder='you@example.com' />
                        </div>
                    </div>
                </div>

                <section className='d-flex mt-2' style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <p>&copy; Copyright 2020, Nezuco Inc. All rights reserved.</p>
                    <div>
                        <Link to='/privacy'>Privacy Policy</Link> |&nbsp;
                        <Link to='/sitemap'>Site Map</Link>
                    </div>
                </section>
            </footer>
        </main>
    )
}

export default Main