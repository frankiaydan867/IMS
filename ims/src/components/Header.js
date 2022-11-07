import React from 'react'

const Header = ({appName}) => {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a href="" className="navbar-brand">{appName}</a>
                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar_menu">
                        <i className='fs-5 bi-menu-button-wide'></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header
