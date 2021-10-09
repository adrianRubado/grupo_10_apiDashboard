import React from 'react'

function Genre(props) {

    const style = {
        color : 'white'
    }
    return (
        <div key={props.genre + props.index} className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    <a href={props.genre.detail} style = {style}>
                        {props.genre.name}
                    </a>
                </div>
            </div>
        </div>)

}

export default Genre

