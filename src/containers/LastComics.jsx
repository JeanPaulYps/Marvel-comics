import React from 'react';
import '../styles/LastComics.css'

function LastComics() {
    return (
        <div className="LastComics">
            <div className="LastComics__Item">
                <img src={process.env.PUBLIC_URL + "/ExampleComic.jpg"} alt="" className="LastComics__Cover" />
                <button type="button" className="AddToCartButton">
                        <img src={`${process.env.PUBLIC_URL}/ShoppingcartInButton.svg`}  alt="" className="AddToCartButton__CartIcon" />
                        <span> ADD TO CART </span>
                </button>
                <p className="LastComics__Title">Titulo Comic</p>
                <p className="LastComics__Author">Hickman, Schiti</p>
            </div>
        </div>
    )
}

export {LastComics, }   
