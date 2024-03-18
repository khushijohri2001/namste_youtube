import React, { Suspense, lazy } from 'react'
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import Shimmer from './components/Shimmer';

const Watch = lazy(() => import("./components/routes/Watch"))
const UpdateSoon = lazy(() => import("./components/routes/UpdateSoon"))
const PrivacyPolicy = lazy(() => import("./components/routes/PrivacyPolicy"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Shimmer/>}><Body /></Suspense>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/shorts",
        element: <UpdateSoon/>
      },
      {
        path: "/subscription",
        element: <UpdateSoon/>
      },
      {
        path: "/playlist",
        element: <UpdateSoon/>
      },
      {
        path: "/watchlater",
        element: <UpdateSoon/>
      },
      {
        path: "/history",
        element: <UpdateSoon/>
      },
      {
        path: "/likedvideos",
        element: <UpdateSoon/>
      },
      {
        path: "/userProfile",
        element: <UpdateSoon/>
      },
      {
        path: "/privacy-policy",
        element:<PrivacyPolicy/>
      }
    ]
  },
  {
    path: "/login",
    element: <UpdateSoon/>
  },
  // {
  //   path: "/signin",
  //   element:<SignIn/>
  // },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

/* 
    
    -> Header
       -Hamburger(L)
       -Youtube Logo(L)
       -Search Video(C)
       -User Icon(r)

    -> Sidebar
      -Home
      -Shorts
      -Subscription
      -etc

    -> Body
      -Button List
      -Video Listing (OnClicking => /watch => Video Card)
      

      */
