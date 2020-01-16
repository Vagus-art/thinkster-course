import React from 'react'

export default function Header(props) {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <a className="navbar-brand">
                    {props.appName.toLowerCase()}
                </a>
            </div>
        </nav>
    )
}
