import React from "react";
import "./css/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Main from "./Main/Main";
import Detail from "./Main/Detail";


export default function App() {

  const spisok = React.useRef([
    {
      title: 'Основные',
      color: 'violet',
      deals: [],
    },
  ]);

  const [ spisokRender, setSpisokRender ] = React.useState(spisok.current);


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout spisok={spisok} setSpisokRender={setSpisokRender}/>}>
        <Route index element={<Main spisokRender={spisokRender} setSpisokRender={setSpisokRender} spisok={spisok}/>}/>
        <Route path=':id' element={<Detail spisok={spisok}/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}