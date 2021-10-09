import React from 'react'


function Container(props) {


    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">



            <div className="card-body">
                {props.children}
            </div>

            </div>


        </div>
    )
}

export default Container
