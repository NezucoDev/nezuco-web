import React, { useEffect } from 'react'
import Main from '../templates/main'

const Products = () => {
    useEffect(() => {
        document.title = 'Products | Nezuco'
    })

    return (
        <Main id='products'>
            <h1>Our Products</h1>
            <div id='products-list' class='flex-container'>
                <div>
                    <h2>SalesX</h2>
                    <p>Nezuco Inc. introduces the next-gen retail managment and POS application that dynamically helps your business grow exponentially.</p>
                    <h3>$120.00 USD/year</h3>
                </div>
                <div>
                    <h2>WAProxi</h2>
                    <p>A global marketing and message scheduling + reminders mobile app.</p>
                    <h3>Free and Paid plans</h3>
                </div>
                <div>
                    <h2>ESL Katowice</h2>
                    <p>The long awaited, $5,000,000 e-sports tournament is finally here, in association with Nezuco Inc.</p>
                    <h3>$15.00/ticket</h3>
                </div>
            </div>
        </Main>
    )
}

export default Products