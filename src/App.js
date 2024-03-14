import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import ErrorPage from "./components/ErrorPage.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu.js";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore.js";
import Cart from "./components/Cart.js";
import Footer from "./components/Footer.js";


//import Grocery from "./components/Grocery.js"

const Grocery = lazy(() => import("./components/Grocery.js"));

const Applayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer/>
        
      </div>
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/restaurents/:resID",
        element: <RestaurentMenu />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <Cart/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM?.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
