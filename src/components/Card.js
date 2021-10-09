import React from 'react'

function Card(props) {
    return (
        <div class="col-md-4 mb-4">
							<div class={props.line}>
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class={props.color}>{props.title}</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">{props.quantity}</div>
										</div>
										<div class="col-auto">
											<i class={props.icon}></i>
										</div>
									</div>
								</div>
							</div>
						</div>
    )
}

export default Card
