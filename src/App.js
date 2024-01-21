import logo from './logo.svg';
import './App.css';

import Movie from "./component/Movie"
import Fakestore from './component/Fakestore';
import Mobile from "./component/RouteComponent/Mobile"
import Camera from "./component/RouteComponent/Camera"
import HeadPhone from "./component/RouteComponent/HeadPhone"
import Laptop from "./component/RouteComponent/Laptop"
//   import Studentdetails from './component/Studentdetails';
import Slider from "./component/slider"
// import Form from './component/form';
import Shop from "./component/Shop"
import NavDesign from './component/NavDesign';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseTitle from './component/useTitle';
import { useState } from 'react';
import UseOnlineOffline from "./component/useOnlineOffline"
import { useWindowResize } from './component/RouteComponent/useWindowResize';
import Todo from "../src/TodoApp"
import TranslationComponent from "./component/Custom Hook/useTranslation/TranslationComponent"
import Faq from "./faq"
import ToggleComponent from "./component/Custom Hook/useToggle/ToggleComponent"
import GeolocationComponent from "./component/Custom Hook/useGeolocation/GeolocationComponent"
import PreviousComponent from "./component/Custom Hook/usePrevious/PreviousComponent"
import StateWithHistoryComponent from "./component/Custom Hook/useStateWithHistory/StateWithHistoryComponent"
import CustomFormValidation from './component/CustomFormValidation';
import Accordion from './component/Accordion';
import CustomHook from './component/CustomHook';
import List from "./component/List"
import TodoReducerHook from './component/TodoReducerHook';

function App() {

  return (
    <>
    <div className="App">

      <BrowserRouter>
        <NavDesign />
        <Routes>
          <Route path='/' element={<Todo />}></Route>
          <Route path='/Movie' element={<Movie />}></Route>
          <Route path='/Slider' element={<Slider />}></Route>
          <Route path='/Shop' element={<Shop />}></Route>
          <Route path='/todousereducer' element={<TodoReducerHook />}></Route>
          <Route path='/List' element={<List />}></Route>
          <Route path='/Fakestore' element={<Fakestore />}> </Route>
          <Route path='/Form' element={<CustomFormValidation />}> </Route>
          <Route path='/CustomHook' element={<CustomHook />}> </Route>
          <Route path="/Shop" element={<Shop />}>
            <Route index element={<Mobile />}></Route>
            <Route path='camera' element={<Camera />}></Route>
            <Route path='headphone' element={<HeadPhone />}></Route>
            <Route path='laptop' element={<Laptop />}></Route>
            <Route path='mobile' element={<Mobile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>

   
</>
  );
}

{/* <BrowserRouter>
<NavDesign />
<Routes>
  <Route path='/'></Route>
  <Route path='/Movie' element={<Movie/>}></Route>
  <Route path='/Slider' element={<Slider />}></Route>
  <Route path='/Shop' element={<Shop />}></Route>
  <Route path='/Fakestore' element={<Fakestore />}>
    <Route index element={<Mobile />}></Route>
    <Route path='camera' element={<Camera />}></Route>
    <Route path='headphone' element={<HeadPhone />}></Route>
    <Route path='laptop' element={<Laptop />}></Route>
    <Route path='mobile' element={<Mobile />}></Route>
  </Route>
</Routes>
</BrowserRouter> */}


// <Movie/>
// <Slider/>
//<Studentdetails/>
//      <Fakestore/>
export default App;
