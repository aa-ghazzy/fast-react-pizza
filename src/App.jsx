import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../src/ui/Home";
import Menu from "../src/menu/Menu";
import Cart from "../src/cart/Cart";
import CreateOrder from "../src/order/CreateOrder";
import Order from "../src/order/Order";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/menu", element: <Menu /> },
    { path: "/cart", element: <Cart /> },
    { path: "/order/new", element: <CreateOrder /> },
    { path: "/order/:orderId", element: <Order /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
