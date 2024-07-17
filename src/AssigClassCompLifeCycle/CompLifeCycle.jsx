import React, { Component } from 'react'

 class CompLifeCycle extends Component {

    //Initialization
    constructor(props){
        super(props)
        this.state = {
            activity: "Waking Up"
        }
        console.log("Default activity : Waking Up ")
    }
    //
    updateActivity =()=>{
        console.log(`Activity: Working`);
        this.setState({activity: "Working"})
    }
  render() {
    return (
      <>
      <h2>Daily Routine</h2>
      <h4>Activity: {this.state.activity}</h4>
      <button type='button' className='btn btn-primary' onClick={this.updateActivity}>Update Activity</button>

        
      </>
    )
  }

    //2. MOUNTING PHASE
    componentDidMount(){
        console.log('Component did mount called');
      }
    
      //3. UPDATING PHASE
      componentDidUpdate(){
        console.log('Component did update called');
        return null;
      }
      //4. UNMOUNTING PHASE
      componentWillUnmount(){
        console.log('Component unmount called')
      }
}

export default CompLifeCycle
