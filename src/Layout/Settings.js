import React from "react";
import back1 from '../imagesForBack/back1.jpg';
import back2 from '../imagesForBack/back2.jpg';
import back3 from '../imagesForBack/back3.jpg';
import back4 from '../imagesForBack/back4.jpg';
import back5 from '../imagesForBack/back5.jpg';

const arr = [back1, back2, back3, back4, back5];

export default function Settings ({backImg, setBack, setVisibleSet}) {

    return (
        <div className='addblock__wrapper'>
            <div className='settings'>
            <div className="addblock__x"><div onClick={() => setVisibleSet(false)}>&#10060;</div></div>
                <div>Выбрать фон</div>
                <div className="settings__list">
                    {arr.map((item, index) => (
                        <div key={index}>
                            <img src={item} className="settings__img" onClick={() => {
                                backImg.current = item;
                                setBack(backImg.current)}} alt='img'></img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}