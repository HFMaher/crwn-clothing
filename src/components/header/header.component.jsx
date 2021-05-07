import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './header.styles.scss'
import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header=({currentUser}) =>(
 
  <div className='header'>
   <Link className='logo-container' to= "/">
      <Logo className='logo'/>
   </Link>
   <div className='options'>
    <Link className='option' to='/shop' >
     SHOP
    </Link>
    <Link className='option' to='/shop'>
     CONTACT
    </Link>
    {
      currentUser ? (
      <div className='option' onClick={()=> auth.signOut()}>
         SIGN OUT
         </div> //when this is clicked, state will change by making the currentUser null
      ):(
      <Link className='option' to='/signin'>
       SIGN IN
      </Link>



      )}
   </div>
  </div>

);

const mapStateToProps=state=> ({           
 currentUser:state.user.currentUser   //root-reducer (combineReducer).user
});

export default connect(mapStateToProps)(Header);