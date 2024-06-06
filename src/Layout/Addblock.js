import React from "react";

export default function Addblock ({ setVisibleAdd, spisok, setSpisokRender }) {

    let title;
    let color = 'violet';
    const [ errorVisible, setErrorVisible ] = React.useState(false);

    return (
        <div className="addblock__wrapper">
            <div className='addblock'>
            <div className="addblock__x"><div onClick={() => setVisibleAdd(false)}>&#10060;</div></div>
            <div>Название раздела</div>
            <input className="addblock__input" onChange={(e) => {
                title = e.target.value;
            }}></input>
            <div className='addblock__colors'>
                <div className='violet' onClick={() => {
                    color = 'violet';
                }}></div>
                <div className='orange' onClick={() => {
                    color = 'orange';
                    }}></div>
                <div className='green' onClick={() => {
                    color = 'green';
                }}></div>
                <div className='white' onClick = {() => {
                    color = 'white';
                }}></div>
                <div className='red' onClick = {() => {
                    color = 'red';
                }}></div>
                <div className='blue' onClick = {() => {
                    color = 'blue';
                }}></div>
            </div>
            <div className="addblock__add" onClick={() => {
                if (title) {
                    spisok.current.push({
                        title: title,
                        color: color,
                        deals: []
                    });
                    setSpisokRender([...spisok.current]);
                    setVisibleAdd(false);
                } else {
                    setErrorVisible(true);
                    document.querySelector('.addblock__input').focus();
                }
            }}>Добавить</div>
            {errorVisible ? <div className="error">Введите название раздела <span className="error__arrow">&uarr;</span></div> : ''}
        </div>
        </div>
    )
}