import React from 'react'

const Header = () => {
    return (
        <header className='d-flex align-items-center justify-content-center bg-dark text-white py-3'>
            <img src="/book.png" style={{ height: "70px" }} alt="logo" />
            <h1 className='fw-bold'>Kitap Kurdu</h1>
        </header>
    )
}

export default Header
