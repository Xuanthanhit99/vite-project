import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../Page/HomePage";
import { ReactNode } from "react";
import AboutPage from "../Page/AboutPage";
import NotFoundPage from "../Page/NotFoundPage";
import Login from "Page/Login";

interface Props {
  children: ReactNode;
}

export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const isAuthenticated = checkUserAuthentication();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const checkUserAuthentication = () => {
  return true;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage  /> }
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
