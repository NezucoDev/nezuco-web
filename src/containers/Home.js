import React, { useEffect, useState, useRef } from 'react'
import anime from 'animejs'
import Main from '../templates/main'

import bg1 from '../assets/images/1.jpg'
import bg2 from '../assets/images/2.jpg'
import bg3 from '../assets/images/3.jpg'
import bg4 from '../assets/images/4.jpg'

const screens = [
    {
        img: bg1,
        subtitle: 'Go global with us.'
    },
    {
        img: bg2,
        subtitle: 'Reach new heights.'
    },
    {
        img: bg3,
        subtitle: 'Scale insanely.'
    },
    {
        img: bg4,
        subtitle: 'Together. Till the end.'
    }
]

const Home = () => {
    const [subtitle, setSubtitle] = useState('That\'s it. The Secret is Out!')

    useEffect(() => {
        document.title = 'Nezuco'

        const idx = setInterval(delta, 4000)

        return () => {
            clearInterval(idx)
        }
    })

    let counter = useRef(1)
    function delta() {
        anime({
            targets: '#bg-drop',
            backgroundColor: 'rgba(0,0,0,1)',
            duration: 500,
            easing: 'linear',
            complete: function (anim) {
                document.getElementById('home').style.backgroundImage = `url(${screens[counter.current].img})`
                setSubtitle(screens[counter.current].subtitle)
                console.log(counter)
                counter.current = (counter.current + 1) % screens.length

                anime({
                    targets: '#bg-drop',
                    backgroundColor: 'rgba(0,0,0,0.45)',
                    duration: 500,
                    easing: 'linear',
                })
            }
        })

        anime({
            targets: '#subtitle',
            color: 'rgb(0,0,0)',
            duration: 500,
            easing: 'linear',
            complete: function () {
                anime({
                    targets: '#subtitle',
                    color: 'rgb(255,255,255)',
                    duration: 500,
                    easing: 'linear'
                })
            }
        })
    }

    return (
        <Main className='full-page' id='home'>
            <div>
                <h1 id='nezuco'>Nezuco</h1>
                <h2 id='subtitle'>{subtitle}</h2>
            </div>
        </Main>
    )
}

export default Home