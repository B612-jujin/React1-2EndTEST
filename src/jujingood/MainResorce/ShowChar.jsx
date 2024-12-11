import React from 'react';
import './CharacterProfile.css'; // CSS 파일을 import 합니다.

function ShowChar({ character }) {
    if (!character) return null;
    return (
        <div className="character-profile">
            {/* 사진 부분 */}
            <div className="character-profile-image">
                {character.avatar.indexOf('.mp4') !== -1 ? (
                    <video src={character.avatar} className="student-avatar" autoPlay loop />
                ) : (
                    <img src={character.avatar} alt={character.name} className="student-avatar" />
                )}
            </div>

            {/* 정보 부분 */}
            <div className="character-profile-info">
                <h2>캐릭터 정보</h2>
                <p><strong>이름:</strong> {character.name}</p>
                <p><strong>나이:</strong> {character.grade }세</p>
                <p><strong>직업:</strong> {character.major}</p>
                <p><strong>소개글:</strong> {character.intro}</p>
            </div>
        </div>
    );
}

export default ShowChar;
