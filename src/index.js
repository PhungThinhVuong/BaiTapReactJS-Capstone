import React from "react";
import ReactDOM from "react-dom/client";
// import "antd/dist/antd.css";
import Cart from "./pages/Cart/Cart";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Serach from "./pages/Search/Serach";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import './index.scss';
import './assets/scss/pages/register.scss';
import './assets/scss/pages/login.scss';
import './assets/scss/pages/_detail.scss';
import './assets/scss/pages/_cart.scss'
import './assets/scss/pages/_search.scss'
import './assets/scss/components/_FooterHome.scss'
import './assets/scss/pages/profile.scss'
import {Provider} from 'react-redux'
import { store } from "./redux/configStore";
//cấu hình history :chuyển hướng trang không dùng hook
import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from "react-router-dom";
import {createBrowserHistory} from 'history'
export const  history =createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <HistoryRouter history={history}> 
    <Routes>
      <Route path="" element={<HomeTemplate/>}>
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
        <Route path="cart" element={<Cart/>}></Route>
        <Route path="search" element={<Serach/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="detail" >
          <Route path=":id" element={<Detail/>}></Route>
        </Route>
        <Route path="*" element={<Navigate to={""}/>}></Route>
      </Route>
    </Routes>
  </HistoryRouter>
  </Provider>
);
