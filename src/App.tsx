import { RouterProvider } from "react-router-dom";
import AppRoutes from "./components/Approutes";

const App = () => {
  return <RouterProvider router={AppRoutes}></RouterProvider>;
};

export default App;
