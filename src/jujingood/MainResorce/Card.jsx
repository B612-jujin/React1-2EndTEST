import React from "react";

function Card(props){
    const {title,price,rating, imageUrl} = props;

    return(
        <div className='card'>
            <img src={imageUrl} alt={title}/>
            <h3>{title}</h3>
            <p>${price.toLocaleString()} / 박</p>
            <p>⭐ {rating}</p>
        </div>

    );


}

export default Card;