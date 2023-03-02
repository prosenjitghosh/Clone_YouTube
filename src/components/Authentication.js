import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import userimg from '../utils/user.png';

const Authentication = () => {
const {loginWithRedirect, logout, isAuthenticated} = useAuth0();

  return (
    <div>
        {
            isAuthenticated ? 
                <div className='felx'>
                    <img alt="user" className='h-6  inline mr-1' src={userimg}/>
                    <button onClick={()=>logout({ logoutParams: { returnTo: window.location.origin } })} className='border p-2 rounded-2xl bg-slate-400'>Logout</button>
                </div>
                    :<button onClick={()=>loginWithRedirect()} className='border p-2 rounded-2xl bg-blue-500'>Login</button>
        }
        
        
    </div>
  )
}

export default Authentication;