import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Navbar from "./Components/layouts/Navbar";
//import UserItem from "./Components/pages/UserItem";
import Users from './Components/pages/Users';
import About from './Components/pages/About';
import Links from './Components/pages/Links';



class App extends React.Component {
  
  state= {
    users: [{
            id: "1",
            login: "Isuru Bandaranayake",
            avatar_url:
              "https://avatars3.githubusercontent.com/u/38803419?s=400&u=524619c0cc4c7915fc487b8d67fd579e6f460979&v=4",
            html_url: "https://github.com/Isuru1995"
          },
          {
            id: "2",
            login: "Pasan Jayawickrama",
            avatar_url:
              "https://avatars0.githubusercontent.com/u/15853418?s=400&v=4",
            html_url: "https://github.com/pasanjaya"
          },
          {
            id: "3",
            login: "Hasitha Amarathunga",
            avatar_url:
              "https://avatars2.githubusercontent.com/u/25411156?s=400&v=4",
            html_url: "https://github.com/haseeAmarathunga"
          }
      
    ],
    loading:false 
  }

  async componentDidMount(){

    this.setState({loading:true});
    const res= await axios.get('http://api.github.com/users');
    this.setState({users:res.data,loading:false});
    
  }

  render() {
    
    return (
      <Router>
      <div className ='App'>
        <Navbar/>
        <Switch>
          <Route  exact path='/' component={Users} > <Users className='container' loading={this.state.loading} users={this.state.users}/></Route>
          <Route exact path='/about' component={About}/>
          <div className='container'>
          <Route exact path='/links' component={Links}/>
          </div>
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
 
