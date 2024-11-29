import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Navbar = lazy(() => import("./Navbar"));
const Calculator = lazy(() => import("./Calculator"));
const Result = lazy(() => import("./Result"));

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading Calculator...</div>}>
            <Calculator />
          </Suspense>
        ),
      },
      {
        path: "result",
        element: (
          <Suspense fallback={<div>Loading Result...</div>}>
            <Result />
          </Suspense>
        ),
      },
    ],
  },
]);

export default AppRoutes;
