import React from 'react'

function Title(props) {
    return (
        <li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>{props.title}</span>
                </a>
			</li>
    )
}

export default Title
