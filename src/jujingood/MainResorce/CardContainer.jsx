import React from "react";

import snb1 from '../imgs/snb.png'
import snb4 from '../imgs/마고그룹.png'
import snb from '../imgs/snbback.png'
import snb2 from '../imgs/마고 최하층.mp4'
import snb3 from '../imgs/중앙공장.png'
import Card from "./Card";


const listings = [
    {
        id: 1,
        title:"마고특별시 최상층",
        text:"문자 그대로 \"구름 위에\" 쌓아올린 무릉도원, 마고특별시 최상층입니다. 마고 그룹 임원들과 투자자, 그리고 이들에 준할 정도로 기업에 '품위'를 보일 수 있는 자본가들을 위해 지어진 거대한 궁전이지요.",
        rating:4.8,
        imageUrl: `${snb}`
    },    {
        id: 2,
        title:"마고그룹 본사",
        text:"다 죽어가던 조선의 경제를 반세기 만에 되살려 조선 경제의 핵심이 되었으며, 마고특별시라는 사유기업도시를 보유하고 있을 만큼 거대한 규모를 자랑한다. 계열사 대표 5명은 회사 안팎으로 무소불위의 권력을 휘두른다고 한다.",
        rating:4.8,
        imageUrl: `${snb4}`
    },
    {
        id: 3,
        title:"마고특별시 최하층",
        text:"마고 그룹의 5개 계열사 중 하나인 마고건설이 관리하는 시민 거주구. 재개발이 잦고 이런 저런 가게 간판들은 많지만, 위치상 빈민가에 해당하는데도 불구하고 정작 사람들이 살기 위한 주거지는 하나도 없다고 한다.",
        rating:4.8,
        imageUrl: `${snb2}`
    },
    {
        id: 4,
        title:"마고특별시 중앙 공장",
        text:"마고 그룹의 5개 계열사 중 하나인 마고전자가 관리하는 초거대 공장. 조선에서 사용되는 전자제품의 최소 30%를 생산하는 곳으로, 지상 최대의 마천루, 마고시의 바벨탑이라 불릴 정도의 무지막지한 규모와 넓이를 자랑한다.",
        rating:4.8,
        imageUrl: `${snb3}`
    },


    {
        id: 5,
        title: "마고특별시 상업지구",
        text:"마고 그룹의 5개 계열사 중 하나인 마고물산이 관리하는 상업지구. 마고특별시의 중심이자 심장과 같은 곳으로, 마천루의 바다, 자본주의의 꽃, 가능성의 메카, 죄악의 도시, 가장 화려한 도시, 저세상 환락가 등 온갖 거창한 별명이 붙어있다. 빌딩숲에 하늘이 가려져 대낮에도 햇빛이 안 든다. ",
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