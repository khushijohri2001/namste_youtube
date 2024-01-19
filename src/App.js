import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import store from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Watch from "./components/routes/Watch";
import MainContainer from "./components/MainContainer";
import RequireAuth from "./components/RequireAuth";
import UpdateSoon from "./components/routes/UpdateSoon";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
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
