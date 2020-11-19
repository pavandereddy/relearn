
import './App.css';
import React, { Component } from 'react'; 

class App extends Component{  
  constructor(props){
    super(props);
    this.state = { showPopup: false };
    this.popup = this.popup.bind(this);
    }
    popup(){
      this.setState({showPopup: true});
    }
   render(){
  return (
    <div className="App">    
    <form className="formElem" onSubmit={this.handleSubmit}>
      <label for="fname" className="label">First Name : </label>
      <input type="text" id="fname" name="fname" ></input><br />
      <label for="lname" className="label">Last Name : </label>
      <input type="text" id="lname" name="lname"></input><br />
      <label for="email" className="label">Email : </label>
      <input type="text" id="email" name="email"></input><br />
      <label for="number" className="label">Phone Number : </label>
      <input type="text" id="number" name="number"></input><br />
      <label for="age" className="label">Age : </label>
      <input type="text" id="age" name="age"></input><br />
      <label for="male" className="label">Gender : </label>
      <input type="radio" id="male" name="gender" value="male"></input> Male <input type="radio" id="male" name="gender" value="male"></input> Female <br />
      <label for="crick" className="label">Hobbies : </label>
      <input type="checkbox" id="crick" name="crick" value="Bike"></input> I play cricket <input type="checkbox" id="badminton" name="badminton" value="Bike"></input> I play badminton <input type="checkbox" id="football" name="football" value="Bike"></input> I play football <br />
      <label for="cars" className="label">Favorite car : </label>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">kia</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select><br />
      <label for="favcolor" className="label">Favorite color : </label>
      <input type="color" id="favcolor" name="favcolor"></input><br/><br/>
      <input type="submit" onClick={this.popup} id="submit" name="submit" className="submit"></input>
      <input type="submit" id="cancel" name="cancel" className="Cancel" value="Cancel"></input>
      {this.state.showPopup ?
         alert('Registration Successfull')
         : null
       }
      </form>
    </div>
    
  );
}
}

export default App;
