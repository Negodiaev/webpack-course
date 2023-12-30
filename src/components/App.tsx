import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import classes from "./App.module.scss";
import avatarPng from "@/assets/avatar.png";
import dragonJpg from "@/assets/dragon.jpg";
import Phone from "@/assets/phone.svg";

export function App() {
  const [count, setCount] = useState(0);

  function test() {
    test2();
  }

  function test2() {
    throw new Error();
  }

  function increment() {
    setCount((prevState) => prevState + 1);
    // test();
  }

  /*  if (__PLATFORM__ === "mobile") {
    return <div>The platform is mobile</div>;
  }

  if (__PLATFORM__ === "desktop") {
    return <div>The platform is desktop</div>;
  }

  if (__ENV__ === "development") {
    // addDevTools();
  }*/

  return (
    <div data-testId="App">
      <h1 data-testId="Platform">Platform: {__PLATFORM__}</h1>
      <img src={avatarPng} width={80} alt="" />
      <br />
      <img src={dragonJpg} width={280} alt="" />
      <br />
      <Phone width={80} height={80} color="lightgreen" />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <h1 className={classes.title}>Counter</h1>
      <p>Count: {count}</p>
      <button className={classes.button} onClick={increment}>
        Increment
      </button>
      <Outlet />
    </div>
  );
}
