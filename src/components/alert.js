import React from 'react'

const Alert = ({title, message}) => {
    const dismissHandler = (e) => {
        const alert = document.querySelector('#drop')
        if (e.target === alert)
            alert.remove()
    }

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0,
            width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            zIndex: 1
            }}
            onClick={(e) => dismissHandler(e)}
            id='drop'>
            <div className='alert-modal'>
                <h3>{title}</h3>
                <p className='mt-1'>{message}</p>
            </div>
        </div>
    )
}

export default Alert