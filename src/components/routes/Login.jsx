// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, USER_PROFILE } from '../../redux/authSlice';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from '../../firebase';
// import { Navigate, useLocation, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const accessToken = useSelector((store) => store.auth.accessToken)
//   const path = location?.state?.from?.pathname;


//   useEffect(() => {
//     if(accessToken){
//       navigate(path)
//     }
//   }, [accessToken, navigate, path])

//   const loginWithGoogle = async () => {
//     try{
//         dispatch(LOGIN_REQUEST())
//       const provider = new GoogleAuthProvider();
//       provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
//       const res = await signInWithPopup(auth, provider)
//       const accessToken = GoogleAuthProvider.credentialFromResult(res).accessToken;
     
//      const profile = {
//       name: res.user.displayName,
//       photoURL: res.user.photoURL
//      }

//      sessionStorage.setItem("nyt-access-token", accessToken);
//      sessionStorage.setItem('nyt-user', JSON.stringify(profile))

//      dispatch(LOGIN_SUCCESS(accessToken));
//      dispatch(USER_PROFILE(profile))
      

//     } catch(error){
//       console.log(error.message);
//       dispatch(LOGIN_FAIL(error.message))
//     }
//   }

//   return (
//     <div className='w-full h-screen  flex items-center justify-center'>
//       <div className='bg-red-300 h-[28rem] w-96 p-6 rounded-lg'>
//         <h1 className='text-center text-2xl font-semibold'>Login Page</h1>
//         <div className='flex items-center justify-center h-[90%]'>

//     <div className='flex gap-4 bg-white p-3 px-10 rounded-lg font-semibold' onClick={() => loginWithGoogle()}>
//       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="google icon" className='h-6'/>
//       <span>Login with google</span>
//     </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Login