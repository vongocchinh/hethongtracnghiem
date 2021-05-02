import React from "react";
import { Switch, Route } from "react-router-dom";
// import LoginContainer from "./../container/Login";
import HomeContainer from "../container/HomeDefault";
import HomeLeftComponent from './../container/HomeLeft';
export default function routerCategory() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeContainer}></Route>
        <Route exact path="/thi" component={HomeContainer}></Route>
        <Route component={HomeLeftComponent}  path="/category/:id" ></Route>
      </Switch>
    </>
  );
}
