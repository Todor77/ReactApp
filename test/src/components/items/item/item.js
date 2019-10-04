import React from 'react'
import items from '../../../JSONData'

function item({match}) {

    const item = items.find(({ id }) => id === match.params.id)

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            <h4>ID : {item.id}</h4>
            <h4>Name : {item.name}</h4>
            <h4>Price : {item.price}</h4>
            <h4>Description : {item.description}</h4>

        </div>
    )
}

export default item;
