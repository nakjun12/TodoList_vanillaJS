import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Todos from "./Todos";
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
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default App;
