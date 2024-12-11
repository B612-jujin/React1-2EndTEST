import React from "react";

import snb1 from '../imgs/snb.png'
import snb from '../imgs/snbback.png'
import Card from "./Card";


const listings = [
    {
        id: 1,
        title:"마고특별시 최상층",
        price:10000,
        rating:4.8,
        imageUrl: `${snb}`
    },    {
        id: 2,
        title:"마고그룹 본사",
        price:10000,
        rating:4.8,
        imageUrl: `${snb1}`
    },
    {
        id: 3,
        title:"마고특별시 최하층",
        price:10000,
        rating:4.8,
        imageUrl: `${snb}`
    },
    {
        id: 4,
        title:"마고특별시 중앙 공장",
        price:10000,
        rating:4.8,
        imageUrl: `${snb}`
    },


    {
        id: 5,
        title: "마고특별시 상업지구",
        price:5000,
        rating:4.4,
        imageUrl: `${snb1}`
    }
];



function CardContainer() {
    return (
        <div className="card-container">
            {listings.map(listing => (
                <Card key={listing.id} {...listing} />
            ))}
        </div>
    );
}
export default CardContainer;