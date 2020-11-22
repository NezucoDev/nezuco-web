import React, { useEffect } from 'react'
import Main from '../templates/main'

import portfolioData from '../data/portfolio.json'

const Portfolio = () => {
    useEffect(() => {
        document.title = 'Portfolio | Nezuco'
    })

    return (
        <Main id='portfolio'>
            <section className='d-flex full-page hero' style={{ backgroundImage: `url('images/stats-laptop.webp')`, backgroundAttachment: 'fixed' }}>
                <h1>Our Work Speaks For Itself</h1>
                <h2 className='mt-1'>Trusted & Loved By Hundreds of Businesses</h2>
            </section>

            <section className='d-flex min-full-page banner banner-alt' style={{ backgroundColor: '#161819', alignItems: 'center' }}>
                <div className='banner-image'>
                    <img src={portfolioData[0].image} alt={portfolioData[0].image_alt} style={{ width: '100%' }} />
                </div>
                <div className='banner-content'>
                    <h1>{portfolioData[0].name}</h1>
                    <div className='mt-2'>
                        <p>{portfolioData[0].description}</p>

                        <div className='mt-2 lmr-5'>
                            <a href={portfolioData[0].link} className='btn btn-lg' target='_blank' rel='noopener noreferrer'>Visit {portfolioData[0].name}</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex min-full-page banner' style={{ backgroundColor: '#161819', alignItems: 'center' }}>
                <div className='banner-image'>
                    <img src={portfolioData[1].image} alt={portfolioData[1].image_alt} style={{ width: '100%' }} />
                </div>
                <div className='banner-content'>
                    <h1>{portfolioData[1].name}</h1>
                    <div className='mt-2'>
                        <p>{portfolioData[1].description}</p>

                        <div className='mt-2 lmr-5'>
                            <a href={portfolioData[1].link} className='btn btn-lg' target='_blank' rel='noopener noreferrer'>Visit {portfolioData[1].name}</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex min-full-page banner banner-alt' style={{ backgroundColor: '#161819', alignItems: 'center' }}>
                <div className='banner-image'>
                    <img src={portfolioData[2].image} alt={portfolioData[2].image_alt} style={{ width: '100%' }} />
                </div>
                <div className='banner-content'>
                    <h1>{portfolioData[2].name}</h1>
                    <div className='mt-2'>
                        <p>{portfolioData[2].description}</p>

                        <div className='mt-2 lmr-5'>
                            <a href={portfolioData[2].link} className='btn btn-lg' target='_blank' rel='noopener noreferrer'>Visit {portfolioData[2].name}</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex min-full-page banner' style={{ backgroundColor: '#161819', alignItems: 'center' }}>
                <div className='banner-image'>
                    <img src={portfolioData[3].image} alt={portfolioData[3].image_alt} style={{ width: '100%' }} />
                </div>
                <div className='banner-content'>
                    <h1>{portfolioData[3].name}</h1>
                    <div className='mt-2'>
                        <p>{portfolioData[3].description}</p>

                        <div className='mt-2 lmr-5'>
                        <a href={portfolioData[3].link} className='btn btn-lg' target='_blank' rel='noopener noreferrer'>Visit {portfolioData[3].name}</a>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    )
}

export default Portfolio