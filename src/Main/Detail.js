import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function Detail ({ spisok }) {
    const {id} = useParams();
    let note;
    const [deals, setDeals] = React.useState([...spisok.current[id].deals]);
    console.log(deals);
    return (
        <div className="detail">
            <Link to='/' className="detail__return"><div>&larr;</div></Link>
            <div className="detail__title">{spisok.current[id].title}</div>
            <div className="detail__add">
                <input onChange={(e) => {
                    note = e.target.value;
                }} className="detail__add__input" placeholder="Пишите тут..."></input>
                <div onClick={() => {
                    if (note) {
                        spisok.current[id].deals.push(note);
                        setDeals([...spisok.current[id].deals]);
                        document.querySelector('.detail__add__input').value = '';
                    }
                }} className="detail__add__button">Добавить</div>
            </div>
            <div>
                {deals.map((item, index) => (
                    <div key={index} className="detail__item">
                        <div>&#128205;</div>
                        <div>{item}</div>
                        <div onClick={() => {
                            spisok.current[id].deals.splice([index], 1);
                            setDeals([...spisok.current[id].deals]);
                        }} className="detail__item__delete">&times;</div>
                    </div>
                ))}
            </div>
        </div>
    )
}