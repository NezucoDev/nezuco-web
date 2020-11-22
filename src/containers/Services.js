import React, { useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import Main from '../templates/main'

const Services = () => {
    useEffect(() => {
        document.title = 'Services | Nezuco'
    })

    return (
        <Main id='services'>
            <Route path='/services' component={ServicesHome} exact />
            <Route path='/services/seo' component={ServicesHome} exact />
        </Main>
    )
}

const ServicesHome = () => {
    return (
        <>
            <section className='d-flex full-page hero' style={{ backgroundImage: `url('/images/office-team.webp')` }}>
                <h1>Our Services</h1>
                <h2 className='mt-2'>We Believe In Building Robust Systems That Deliver The Best Results.</h2>
            </section>

            <section className='d-flex min-full-page banner banner-alt' style={{ backgroundColor: '#161819' }}>
                <div className='banner-image'>
                    <img src='/images/laptop-code.webp' alt='Laptop Web Development' style={{ width: '100%' }} />
                </div>
                <div className='banner-content'>
                    <h1>Web Design & Development</h1>
                    <div className='mt-2'>
                        <p>Need a professional website for your brand? Want to take your
                        business online and reach thousands of new customers? Or have an
                        idea that needs a real-time solutions? We are here to help you turn
                        your dreams into reality.</p>

                        <div className='d-flex lmt-5 banner-links'>
                            <Link to='/services/web/simple-websites'>Static Websites/Blogs</Link>
                            <Link to='/services/web/ecommerce'>E-commerce</Link>
                            <Link to='/services/web/web-applications'>Modern Web Applications</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex min-full-page banner' style={{ backgroundColor: '#161819' }}>
                <div className='banner-image'>
                    <img src='/images/stats-laptop.webp' alt='Laptop Showing Statistics' style={{ width: '100%' }} />
                </div>
                <div className='banner-content'>
                    <h1>Digital Marketing & SEO</h1>
                    <div className='mt-2'>
                        <p>Establish your online presence. Help your business grow by reaching
                            out to your local and global audience. 100% of the businesses that
                            go for digital marketing, rather than traditional, report increase
                            in sales and profits.</p>

                        <div className='d-flex lmt-5 banner-links'>
                            <Link to='/services/digital-marketing'>Run Ad Campaigns</Link>
                            <Link to='/services/digital-marketing'>Create Ads</Link>
                            <Link to='/services/seo'>Search Engine Optimization</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex min-full-page banner banner-alt' style={{ backgroundColor: '#161819' }}>
                <div className='banner-image'>
                    <img src='/images/mobile-apps.webp' alt='Mobile Applications' style={{ width: '100%' }} />
                </div>
                <div className='banner-content'>
                    <h1>Mobile Apps</h1>
                    <div className='mt-2'>
                        <p>Make it easier for your customers to access all you have to offer
                            in one elegant mobile app. Integrate your mobile app with your
                            existing infrastructure and web applications.</p>

                        <div className='d-flex lmt-5 banner-links'>
                            <Link to='/services/mobile-apps'>Android & iOS</Link>
                            <Link to='/services/mobile-games'>Game Development</Link>
                            <Link to='/services/progressive-web-apps'>Looking to make your website mobile-ready?</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services