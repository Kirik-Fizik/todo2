import React from "react";
import { Link } from "react-router-dom";

export default function Main ({ spisokRender, setSpisokRender, spisok }) {
    return (
        <React.Fragment>
            {spisokRender.map((item, index) => (
                <div key={index} className="item">
                    <div className="item__header">
                        <div className={`item__point ${item.color}`}></div>
                        <div className="item__title">{item.title}</div>
                        <div className="item__x" onClick={() => {
                            spisok.current.splice(index, 1);
                            setSpisokRender([...spisok.current]);
                        }}>&#10060;</div>
                    </div>
                    <div>Заметок: {spisok.current[index].deals.length}</div>
                    <Link to={`/${index}`} className="item__link"><div>Перейти</div></Link>
                </div>
            ))}
        </React.Fragment>
    )
}