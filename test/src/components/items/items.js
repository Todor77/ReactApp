import React from 'react'

import ItemsArray from '../../JSONData'
import { Link, Route } from "react-router-dom";
import Item from './item/item'

function Items ({match}) {
        return (
            <div>

                <h1>Welcome to the Items</h1>
                <br/>
                <hr/>

                <ul>
                    {ItemsArray.map(function (item) {
                     return <li key={item.id}>
                                <Link to={`${match.url}/${item.id}`}>{item.name}</Link>
                            </li>
                    })}
                </ul>
                <hr/>

                <Route path={`${match.path}/:id`} component={Item} />
            </div>
        )
}

export default Items;
