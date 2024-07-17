import React, { Component } from 'react'

 class LIfeCycleMethods extends Component {

    //1. INITIALIZATION PHASE
constructor(props){
    super(props);

    this.state = { 
        message: "Welcome to React"
    }
    console.log("Class Component constructor called")
}
    //1. INITIALIZATION PHASE END

    updateMessage =()=>{
        console.log(`Inside update message method`);
        this.setState({message: "Welcome to class comp life cycle"})
    }
     //2. MOUNTING PHASE

  static getDerivedStateFromProps(props){
    console.log('Inside getDerived state from props');
  }

  render() {
    console.log('Class Component Render Method called');
    return (
      <>
      <h3>CLASS COMPONENT LIFE CYCLE</h3>
      <p>State message: {this.state.message}</p>
      <button type='button' className='btn btn-success' onClick={this.updateMessage}>Update State</button>
        
      </>
    )
  }

 
  componentDidMount(){
    console.log('Component did mount called');
  }

  //3. UPDATING PHASE
  //getDerivedStateFromProps
  //shouldComponentUpdate
  //render
  // getSnapshotBeforeUpdate
  //componentDidUpdate

  shouldComponentUpdate(){
    console.log('should component update');
    return true;
  }

  getSnapshotBeforeUpdate(){
    console.log('Inside get Snapshot Before update');
    return null;
  }

  componentDidUpdate(){
    console.log('Component did update called');
    return null;
  }
  //4. UNMOUNTING PHASE
  componentWillUnmount(){
    console.log('Component unmount called')
  }

}
 
export default LIfeCycleMethods




