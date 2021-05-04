import React from 'react';

import './App.css';

import {Switch,Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';


const HatsPage=() =>(
<div>
 <h1>Hats Page</h1>

</div>


);

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }

  }

  unsubscibeFromAuth=null;

  componentDidMount(){ //Auth refers to Authentication in Firestore (firebase.google.com)

   this.unsubscibeFromAuth= auth.onAuthStateChanged(async userAuth => { //signin or Sigout callback. Everywhere the user signin or signout, userAuth will change and the state changes which result in the header component being updated
     if(userAuth) { //if user is signed in
       const userRef=await createUserProfileDocument(userAuth); //create a user in the database (Firebase database)

       userRef.onSnapshot(snapshot => { //onSnapshot changed callback
          this.setState({
            currentUser: {
             id:snapshot.id,
             ...snapshot.data()
   

            }
          });

          console.log(this.state);

       });

     }
     
    this.setState({currentUser: userAuth}); //if user is signed out, set it to null
      
    });
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }

  render() {
  return (
    <div >
     <Header currentUser={this.state.currentUser}/>
     <Switch>
    <Route exact  path='/' component= {HomePage}/>
    <Route path='/shop' component= {ShopPage}/>
    <Route path='/signin' component= {SignInAndSignUpPage}/>
     </Switch>
    </div>
  );
}
}
export default App;
