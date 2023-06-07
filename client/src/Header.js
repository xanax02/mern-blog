import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

import { BiSearchAlt } from "react-icons/bi";

import ButtonPrimary from "./components/UI/button/ButtonPrimary";
import ButtonSecondary from "./components/UI/button/ButtonSecondary";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    // <header>
    //   <Link to="/" className="logo">
    //     TCP
    //   </Link>
    //   <nav>
    //     {username && (
    //       <>
    //         <Link to="/create">Create new post</Link>
    //         <a onClick={logout}>Logout ({username})</a>
    //       </>
    //     )}
    //     {!username && (
    //       <>
    //         <Link to="/login">Login</Link>
    //         <Link to="/register">Register</Link>
    //       </>
    //       <div className="flex h-[40px] mt-[5px]">
    //   <NavLink to="/login">
    //     <ButtonSecondary>Login</ButtonSecondary>
    //   </NavLink>
    //   <ButtonPrimary>Create account</ButtonPrimary>
    // </div>
    //     )}
    //   </nav>
    // </header>

    <div className="bg-white h-[70px] flex flex-col justify-center">
      <div className="w-[85%] m-auto flex justify-between">
        <div className="flex">
          <Link to="/">
            <div className="bg-black h-[40px] flex flex-col justify-center rounded-lg px-5 mt-1 tracking-widest font-bold">
              <h1 className="text-white">TCP</h1>
            </div>
          </Link>
        </div>
        {username && (
          <div className="flex h-[40px] mt-[5px]">
            <NavLink to="/create">
              <ButtonSecondary>Create new</ButtonSecondary>
            </NavLink>
            <a onClick={logout}>
              <ButtonPrimary>Logout</ButtonPrimary>
            </a>
          </div>
        )}
        {!username && (
          <div className="flex h-[40px] mt-[5px]">
            <NavLink to="/login">
              <ButtonSecondary>Login</ButtonSecondary>
            </NavLink>
            <NavLink to="/register">
              <ButtonPrimary>Create account</ButtonPrimary>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
