import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import UseMemoParent from "./MemoTest/UseMemoParent";

// import ParentPTC from "./ChildToParentFunctionComp/ParentPTC";
// import ChildPTC from "./ChildToParentFunctionComp/ChildPTC";
// import FormBasic from "./FormHandling/FormBasic";
// import AssignFormHandling from "./FormHandling/AssignFormHandling";
// import AdvancedFormHand from "./FormHandling/AdvancedFormHand";

// import APIIntUsingAxios from "./APIIntegration/APIIntUsingAxios";
// import AssignAPIIntFetch from "./AssignApiIntFetch/AssignAPIIntFetch";
// import Assign2APIFetch from "./AssignApiIntFetch/Assign2APIFetch";
// import UseEffectHook from "./APIIntegration/UseEffectHook";

// import MyComponent from "./ClassComp/MyComponent";
// import CodeMind from "./ClassComp/CodeMind_Website";
// import Header from "./ClassComp/HeaderCC";
// import ReactJS from "./ClassComp/ReactCC";
// import JavaScript from "./ClassComp/JavaScriptCC";
// import MyClassComp from "./ClassComp/MyClassComp";
// import Welcome from "./Welcome";
// import ClassCompBody from "./ClassCompBody";
// import HeaderAF from "./ArrowFunction/HeaderAF";
// import JavaScriptAF from "./ArrowFunction/JavaScriptAF";
// import ReactAF from "./ArrowFunction/ReactAF";

// import Container from "react-bootstrap/Container";
// import JSXTest from './JSXTest/JSXTest';
// import FragmentTest from './FragmentTest/FragmentTest';
// import WelcomeCompCall from "./CompCall/Welcome";
// import ParentComp from "./Assignment/ParentComponent";
// import ConditionalRendering from "./ConditionalRendering/ConditionalRendering";
// import LoginPage from './AssignConditiponalRendering/LoginPage';
// import StateInClassComp from './StateInClassComp/StateInCLassComp';
// import StateClassComp from "./AssignStateInClassComp/StateClassComp";
// import StateInFuncComp from "./StateInClassComp/stateInFuncComp";
// import Main from "./RoutingTest/Main";
// import Home from "./RoutingTest/Home";
// import ArrayState from './AssignStateInFunctionComponent/ArrayState';
// import LIfeCycleMethods from "./ClassCompLifeCycle/LIfeCycleMethods";
// import CompLifeCycle from "./AssigClassCompLifeCycle/CompLifeCycle";
// import APIIntUsingFetch from "./APIIntegration/APIIntUsingFetch";
// import AssignUseEffectHook from './AssignAPIIntFunctionComponent/AssignUseEffectHook';
// import UseEffectAPICall from "./APIIntegration/UseEffectAPICall";
// import NormalComponent from "./PureComponent/NormalComponent";
// import PureComp from "./PureComponent/PureComponent";
// import Parent_PTC from './ChildToParentCall/Parent_PTC';
// import Child_PTC from "./ChildToParentCall/Child_PTC";
// import ParentCallback from "./ChildToParentCall/ParentCallback";
// import ChildCallback from "./ChildToParentCall/ChildCallback";
// import AssigAdvancedFormHand from './FormHandling/AssigAdvancedFormHand';
// import Parent from './ContextAPI/Parent';
// import Child1 from "./ContextAPI/Child1";
// import ParentUseContext from "./ContextAPI/ParentUseContext";
// import AssigParentContext from "./ContextAPI/AssigParentContext";
// import UseReducerHook from "./useReducerTest/UseReducerHook";
// import MyUseCallbackHook from "./UseCallbackHook/MyUseCallbackHook";
// import UseCallbackParent from "./UseCallbackHook/UseCallbackParent";
// import ControlledComp from "./ControlledUnCOntrolledCOmp/ControlledComp";
// import UnControlledForm from "./ControlledUnCOntrolledCOmp/UnControlledForm";
// import MemoParent from "./MemoTest/MemoParent";
import AddEmployee from "./CRUD_Using_ContextAPI/AddEmployee";
import EmployeeList from "./CRUD_Using_ContextAPI/EmployeeList";
import EditEmployee from "./CRUD_Using_ContextAPI/EditEmployee";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { EmployeeProvider } from "./CRUD_Using_ContextAPI/EmployeeProvider";








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
      {/* <WelcomeCompCall/> */}
      {/* <ParentComp/> */}
      {/* <ConditionalRendering/> */}
      {/* <StateInClassComp/> */}
      {/* <StateClassComp/> */}
      {/* <StateInFuncComp/> */}
      {/* <ArrayState/> */}
      {/* <Main/> */}
      {/* <Home/>       */}
      {/* <LIfeCycleMethods/> */}
        {/* <CompLifeCycle/> */}
        {/* <APIIntUsingFetch/> */}
        {/* <APIIntUsingAxios/> */}
      {/* <AssignAPIIntFetch/> */}
      {/* <Assign2APIFetch/> */}
      {/* <UseEffectHook/> */}
      {/* <AssignUseEffectHook/> */}
      {/* <UseEffectAPICall/> */}
      {/* <NormalComponent/>
      <PureComp/> */}
      {/* <Parent_PTC/> */}
      {/* <Child_PTC/> */}
      {/* <ParentCallback/>
      <ChildCallback/> */}
      {/* <ParentPTC/> */}
      {/* <ChildPTC/> */}
      {/* <FormBasic/> */}
      {/* <AssignFormHandling/> */}
      {/* <AdvancedFormHand/> */}
      {/* <AssigAdvancedFormHand/> */}
        {/* <Parent/>
        <Child1/> */}
        {/* <ParentUseContext/> */}
        {/* <MemoParent/> */}
        {/* <UseMemoParent/> */}
        {/* <AssigParentContext/> */}
        {/* <UseReducerHook/> */}
          {/* <MyUseCallbackHook/> */}
          {/* <UseCallbackParent/> */}
          {/* <ControlledComp/> */}
          {/* <UnControlledForm/> */}


          <Router>
            <EmployeeProvider>
              <Routes>
                <Route exact path = '/' element={<EmployeeList/>}></Route>
                <Route exact path="/addEmployee" element={<AddEmployee/>}></Route>
                <Route exact path="editEmployee" element={<EditEmployee/>}></Route>
              </Routes>
            </EmployeeProvider>
          </Router>


      </React.Fragment>
  );
}

export default App;
