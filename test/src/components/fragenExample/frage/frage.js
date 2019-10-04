import React from 'react'
import items from '../../../JSONData'


function goToNext() {
    this.setState({index: (this.state.index + 1) % items.length});
}

function frage({match}) {

    this.state = {
        index: 0
    };

    const item = items.find(({ id }) => id === match.params.id)
    var i = items.length;
    var t = items.find(({ index}) => index === item.in)
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            <p>Hie kommt antwort auf jede frage!</p>

            <button>Züruck</button>
            <button onClick={goToNext}>Nächste frage</button>
        </div>
    )
}

export default frage;
