import React from 'react'

export default function Header({ setIsAdding }) {
    function handelclick() {
        setIsAdding(true);
    }
    return (
        <>
            <h1>Employee Management System </h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={handelclick} className='round-button'>Add Employee</button>
            </div>
        </>
    )
}
