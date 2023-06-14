import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/Header";
import Home from "./Home";
import RouterPage from "./PathPage";
import SpatialNavigation from "./spatialNavigation/SpatialNavigation";
import Todos from "./todos/Todos";

const withLayout = (Component: FC): JSX.Element => {
  return (
    <>
      <Header />
      <Component />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/1",
    element: withLayout(Todos),
    errorElement: <></>,
  },
  {
    path: "/",
    element: withLayout(Home),
    errorElement: <></>,
  },
  {
    path: "/path/:id/detail",
    element: withLayout(RouterPage),
    errorElement: <></>,
  },
  {
    path: "/spatial",
    element: <SpatialNavigation />,
    errorElement: <></>,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default App;
