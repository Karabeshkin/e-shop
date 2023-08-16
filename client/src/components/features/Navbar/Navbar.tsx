
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState, useAppDispatch } from '../store/store';
// import { logOut } from '../Auth/authSlice';


// function Navbar(): JSX.Element {
//   const user = useSelector((store: RootState) => store.auth.user);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const logOutFetch = async (): Promise<void> => {
//     const res = await dispatch(logOut());
//     if (res.meta.requestStatus === 'fulfilled') {
//       navigate('/');
//     }
//   };

//   return (
//     <nav className="navbar orange lighten-4">
//       <div className="nav-wrapper ">
//         <ul id="nav-mobile" className="right hide-on-med-and-down">
//           <li>
//             <Link to="/">Главная</Link>
//           </li>
//           {!user && (
//             <>
//               <li>
//                 <Link to="/registration">Registration</Link>
//               </li>
//               <li>
//                 <Link to="/authorization">LogIn</Link>
//               </li>
//             </>
//           )}
//           {user && (
//             <>
//               <li>
//                 <Link to="/cart">Корзина</Link>
//               </li>
//               <li>
//                 <Link to="/" className="" onClick={logOutFetch}>
//                   LogOut
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }


// export default Navbar;
