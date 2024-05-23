import React from "react";
import logo from "./logo.svg";
import "./App.css";

import MyComponent from "./ClassComp/MyComponent";
import CodeMind from "./ClassComp/CodeMind_Website";
import Header from "./ClassComp/HeaderCC";
import ReactJS from "./ClassComp/ReactCC";
import JavaScript from "./ClassComp/JavaScriptCC";
import MyClassComp from "./ClassComp/MyClassComp";
import Welcome from "./Welcome";
import ClassCompBody from "./ClassCompBody";
import HeaderAF from "./ArrowFunction/HeaderAF";
import JavaScriptAF from "./ArrowFunction/JavaScriptAF";
import ReactAF from "./ArrowFunction/ReactAF";

import Container from "react-bootstrap/Container";
import JSXTest from './JSXTest/JSXTest';
import FragmentTest from './FragmentTest/FragmentTest';
import WelcomeCompCall from "./CompCall/Welcome";





function App() {
  return (
    <React.Fragment>
      {/* <MyComponent /> */}
      {/* <CodeMind /> */}
      {/* <HeaderCC />
      <ReactCC />
      <JavaScriptCC /> */}
      {/* <HeaderFE />
      <JavaScriptFE />
      <ReactFE /> */}
      {/* <HeaderAF />
      <JavaScriptAF />
      <ReactAF /> */}
      {/* <MyClassComp />
      <Welcome />
      <ClassCompBody/> */}
      {/* <JSXTest/> */}
      {/* <FragmentTest/> */}
      <WelcomeCompCall/>

      
    </React.Fragment>
  );
}

export default App;
