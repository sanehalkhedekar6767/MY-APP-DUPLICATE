import React from "react";

const LoginPage = () => {
  let isRegistered = false;

  if (isRegistered) {
    return(
        <>
        <h2>Log In Form</h2>
    
        <form action="/action_page.php" class="container-fluid ">
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"></input>
  </div>
  
    
  <button type="submit" class="btn btn-default"> LOG IN </button>
</form>
    </>
    )
}else{
    return(
        <>
          <h2>Sign Up</h2>
      
          <form action="/action_page.php" class="container-fluid ">
          <div class="form-group">
      <label for="name">Username:</label>
      <input type="text" class="form-control" id="name" placeholder="Enter Name" name="name"></input>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"></input>
    </div>
    
    <button type="submit" class="btn btn-default">SIGN UP</button>
  </form>
      </>
      )
}

 
};
export default LoginPage;
