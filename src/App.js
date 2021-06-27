import React from 'react';

import './App.css';

import {Switch,Route, Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

// Authentication is done in App.js, firebase.utils.js, sign-in.component


const HatsPage=() =>(
<div>
 <h1>Hats Page</h1>

</div>


);

class App extends React.Component {
 

  unsubscibeFromAuth=null;

  componentDidMount(){ //Auth refers to Authentication in Firestore (firebase.google.com)

    const {setCurrentUser}=this.props;  //setCurrentUser is Redux action

   this.unsubscibeFromAuth= auth.onAuthStateChanged(async userAuth => { //signin or Sigout callback, return a function which is called in ComponentwillUnmount. Everywhere the user signin or signout, userAuth will change and the state changes which result in the header component being updated
     if(userAuth) { //if user is signed in, userAuth.uid is the id that is displayed next to the user in Firebase Authentication

       const userRef=await createUserProfileDocument(userAuth); //create a user in the database (Firebase database), or return existing user

       userRef.onSnapshot(snapshot => { //onSnapshot changed callback,is called whenever user snapshot updates

          setCurrentUser({     //Redux Action Method
             id:snapshot.id,
             ...snapshot.data()
   

            });
          });

          //console.log(this.state);

     }
     
    setCurrentUser(userAuth); //if user is signed out, set the state to null
      
    });
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }

  render() {
  return (
    <div >
     <Header />
     <Switch>
    <Route exact  path='/' component= {HomePage}/>
    <Route path='/shop' component= {ShopPage}/>
    <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)}/>
     </Switch>
    </div>
  );
}
}

const mapStateToProps=({user}) => ({  //destructuring the Root Reducer
 currentUser:user.currentUser
});

const mapDispatchToProps=dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
});



export default connect(mapStateToProps,mapDispatchToProps)(App);
