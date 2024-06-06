import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Addblock from './Addblock';
import settings from '../imagesForSigns/settings.png';
import Settings from './Settings';
import Back from './Back';
import back1 from '../imagesForBack/back1.jpg'

export default function Layout ({ spisok, setSpisokRender }) {

    const [visibleAdd, setVisibleAdd] = React.useState(false);
    const [visibleSet, setVisibleSet] = React.useState(false);
    let backImg = React.useRef(back1);
    const [back, setBack] = React.useState(backImg.current);


    return (
        <React.Fragment>
            <Back back={back}/>
            <div className='layout'>
            <div className='layout__navigation'>
                <div className='layout__header'>TO DO</div>
                <div className='layout__add' onClick={() => setVisibleAdd(true)}>+ Добавить</div>
                {visibleAdd ? <Addblock setVisibleAdd={setVisibleAdd} spisok={spisok} setSpisokRender={setSpisokRender}/> : ''}
                <Link to='/' className='layout__return'><div>На главную</div></Link>
                <div className='layout__settings'><img src={settings} alt='img' onClick={() => setVisibleSet(true)}></img></div>
                {visibleSet ? <Settings backImg={backImg} setBack={setBack} setVisibleSet={setVisibleSet}/> : ''}
            </div>
            <div className='layout__container'>
                <Outlet/>
            </div>
        </div>
        </React.Fragment>
        
    )
}