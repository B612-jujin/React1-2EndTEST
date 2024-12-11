import React, { useState } from "react";
import './AIR.css'
import img1 from "../imgs/금마리.jpg"
import img2 from "../imgs/금준장.png"
import img3 from "../imgs/송소령.mp4"
import img4 from "../imgs/백호태.png"
import img5 from "../imgs/머핀.mp4"
import img6 from "../imgs/저스티스.png"
import ShowChar from "./ShowChar";

const students = [
    { id: 1, name: "금마리", grade: 18, major: "정보자산취득전문가", avatar: img1, intro: "\"마리\"는 천재 해커이자 실력 있는 드론 라이더, 그리고 '산나비'를 찾아낼 수 있는 유일한 열쇠입니다. 수상쩍고 위태로운 동행 속, 마리는 닫힌 길을 해킹하고 적의 약점을 드러내며, 숨겨진 정보를 찾아냅니다. 사랑스럽고 믿음직스럽지만, 조금 수다스러운 마리. 혹시 알아요? 이 소녀가 당신을 구해줄지도요." },
    { id: 2, name: "금준장", grade: `?`, major: "국군 의금부 17호실 특수임무수행대", avatar: img2, intro: "강력한 전투력을 가진 특수부대 소속 요원으로, 신체 강화 시술과 본인의 무장, 뛰어난 전투센스 덕분에 전설이라 불렸을 정도의 강한 전투력을 가졌다. 사슬팔을 능숙하게 다루어 출력을 높이고 돌진해서 군용으로나 쓰이는 중장갑 기갑병기를 박살 낼 수도 있고, 사슬팔을 발사하는 반동과 타깃을 붙잡아 당기는 힘을 이용해서 초고속으로 이동하기도 한다.\n" },
    { id: 3, name: "송이선", grade: 30, major: "국군 의금부 17호실 특수임무수행대 대령", avatar: img3, intro: "백 대령과 마찬가지로 의금부 특수임무수행대 소속 요원이자 주인공의 후임. 보직은 군수과장이며 계급은 10년째 소령. 사슬팔을 가진 주인공이나 총기로 변형하는 기계팔을 가진 백 대령과 달리 왼쪽 팔을 인간형에 가까운 기계팔로 대체했다" },
    { id: 4, name: "백호태", grade: `?`, major: "국군 의금부 17호실 특수임무수행대 소령", avatar: img4, intro: "금준장 후임인 현역 군인으로 계급은 대령. 마찬가지로 의금부 17호실 특수임무수행대 소속의 군인입니다." },
    { id: 5, name: "머핀", grade: `?`, major: "드론", avatar: img5, intro: "금마리의 파트너인 드론 형태의 인공지능 로봇. 금마리가 굉장히 아껴하며 이걸 타고 날아다니기도 한다. 챕터 2에선 치안 유지대 병기를 조종하기도 한다. 음성 기능은 없지만 디스플레이 이모티콘과 비행하는 궤도로 감정을 풍부하게 표현하며 금마리와 함께 산나비의 비밀을 풀어갑니다." },
    { id: 6, name: "저스티스", grade: 20, major: "용병, 자경단", avatar: img6, intro: "금마리가 어릴적부터 동경하던 협객 활동을 하는 떠돌이 용병입니다. 꽤 오래 전부터 활동해서 대중적으로도 유명한 의적입니다., 주인공의 딸도 골판지를 꾸며서 저스티스 놀이를 하며 과묵한 영웅 컨셉도 알고 있을 정도. 첫 인상을 보면 그냥 무사 로봇 같지만 실제로는 고성능의 보행 슈트를 탄 사람으로, 파일럿은 은발의 포니테일과 노란색 바디슈트 위에 야구점퍼와 비슷한 저고리를 걸친 여성이다." },
]

function Character() {
    // 클릭한 캐릭터의 정보를 상태로 관리
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    // 캐릭터 클릭 시 해당 캐릭터의 정보를 상태에 설정
    const handleCharacterClick = (student) => {
        setSelectedCharacter(student);
    };

    return (
        <div className="attendance-container">
            <h2 className="attendance-title">등장인물</h2>

            <div className="card-container">
                {students.map((student) => (
                    <div
                        key={student.id}
                        className="student-card"
                        onClick={() => handleCharacterClick(student)} // 클릭 시 캐릭터 정보 설정
                    >
                        {student.avatar.indexOf('.mp4') !== -1 ? (
                            <video src={student.avatar} className="student-avatar" autoPlay loop />
                        ) : (
                            <img src={student.avatar} alt={student.name} className="student-avatar" />
                        )}

                        <div className="student-info">
                            <h3>{student.name}</h3>
                            <p>{student.grade} 세 | {student.major}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
            {/* 클릭된 캐릭터의 상세 소개를 화면 아래쪽에 표시 */}
            <ShowChar character={selectedCharacter} />
                </div>
        </div>
    );
}

export default Character;
