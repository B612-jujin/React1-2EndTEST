import React from "react";
import './AIR.css'
import img1 from"../imgs/금마리.jpg"
import img2 from"../imgs/금준장.png"
import img3 from"../imgs/송소령.mp4"
import img4 from"../imgs/백호태.png"
import img5 from"../imgs/머핀.mp4"
import img6 from"../imgs/저스티스.png"


const students=[
    {id:1,name:"금마리", grade:18, major:"정보자산취득전문가",avatar: img1},
    {id:2,name:"금준장", grade:`?`, major:"국군 의금부 17호실 특수임무수행대",avatar: img2},
    {id:3,name:"송이선", grade:30, major:"국군 의금부 17호실 특수임무수행대 대령",avatar: img3},
    {id:4,name:"백호태", grade:`?`, major:"국군 의금부 17호실 특수임무수행대 소령",avatar: img4},
    {id:5,name:"머핀", grade:`?`, major:"드론",avatar: img5},
    {id:6,name:"저스티스", grade:20, major:"용병, 자경단",avatar: img6},

]

function Character(){
    return(
        <div className="attendance-container">
            <h2 className="attendance-title">등장인물</h2>
            <div className="card-container">
                {
                    students.map((student)=>(
                        <div className="student-card">
                            {student.avatar.indexOf('.mp4') !== -1 ?
                                <video src={student.avatar} alt={student.name} className="student-avatar" /> :
                                <img src={student.avatar} alt={student.name} className="student-avatar" />}

                            <div className="student-info">
                                <h3>{student.name}</h3>
                                <p>{student.grade} 세 | {student.major}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Character;