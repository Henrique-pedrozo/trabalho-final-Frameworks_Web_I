import React from 'react'

const Card = ({ data }) => {
    console.log(data)
    // Para as imagens.
    const urlParts = data.url.split("/");
    const pokeId = urlParts[urlParts.length - 2];
    const imgUrl = ``
    return (
        <div className="card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
                alt="Pokemon" />
            <div className="text">
                <h4 className="name">
                    <span className='pokeId'>1.</span>Bulbasaur
                </h4>
            </div>
        </div>
    )
}

export default Card