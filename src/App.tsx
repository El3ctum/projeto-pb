import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LadingPage from "./pages/LadingPage";
import AboutPage from "./pages/AboutPage";
import PageNotFoundError from "./pages/erro/page-not-found";
import AuthPage from "./pages/AuthPage";
import Login from "./components/action/login";
import Registration from "./components/action/registration";
import UserHome from "./pages/user/UserHome";
import Settings from "./pages/user/Settings";
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/user/dashboard/Dashboard";
import Quotations from "./pages/user/quotations/Quotations";
import RegisterDashboard from "./components/user/dashboard/registerDashboard";
import Layout from "./pages/LayoutPage";
import RegisterQuotation from "./components/user/quotations/registerQuotation";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageNotFoundError />,
    children: [
      {
        index: true,
        element: <LadingPage />
      },
    ],
  },
  {
    path: "system",
    element: <Layout />,
    errorElement: <PageNotFoundError />,
    children: [
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "auth",
        element: <AuthPage />,
        children: [
          {
            path: "login",
            element: <Login />
          },
          {
            path: "register",
            element: <Registration />
          }
        ]
      },
    ],
  },
  {
    path: "user",
    errorElement: <PageNotFoundError />,
    element: <UserHome />,
    children: [
      {
        path: "settings",
        element: <Settings />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "dashboard",
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: "register",
            element: <RegisterDashboard />
          }
        ]
      },
      {
        path: "quotations",
        children: [
          {
            index: true,
            element: <Quotations />,
          },
          {
            path: "register",
            element: <RegisterQuotation />
          }
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
