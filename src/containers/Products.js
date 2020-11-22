import React, { useEffect } from 'react'
import Main from '../templates/main'
import Alert from '../components/alert'

import bg from '../assets/images/austin-distel-21GWwco-JBQ.webp'
import products from '../data/products.json'
import './Products.css'

const Products = () => {
    useEffect(() => {
        document.title = 'Products | Nezuco'
    })

    const productsList = products.map((product) => {
        return (
            <div key={product.name}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            </div>
        )
    })

    return (
        <Main id='products'>
            <section className='d-flex full-page hero' style={{ backgroundImage: `url('${bg}')`, backgroundAttachment: 'fixed' }}>
                <h1>Our Products</h1>
                <h2 className='mt-2'>Made With <span style={{ color: '#ff0000' }}>&hearts;</span> For Solo Entrepreneurs, Small Teams & Large Enterprises.</h2>
            </section>

            <section id='products-list' className='d-flex full-page'>
                {productsList}
            </section>
            <Alert title='In Development' message='This page is under construction.' />
        </Main>
    )
}

export default Products