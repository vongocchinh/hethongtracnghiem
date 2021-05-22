import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginContainer from "./../container/Login";
import HomeContainer from "./../container/Home";
import Question from './../container/Question';
// import HomeLeftComponent from './../container/HomeLeft';
import ketquaContainer from './../container/Ketqua';
import Introduce from "../container/Introduce";
import Course from './../container/Course';
export default function router() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeContainer}></Route>
        <Route path="/thi/:id" component={Question} ></Route>
        <Route path='/login' component={LoginContainer} ></Route>
        <Route component={HomeContainer}  path="/category/:id" ></Route>
        <Route component={ketquaContainer} path="/ketqua/:id"></Route>
        <Route component={Introduce} path="/introduce"></Route>
        <Route component={Course} path="/caulacbo/khoahoc/hoc"></Route>
        
      </Switch>
    </>
  );
}
