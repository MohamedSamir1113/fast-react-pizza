import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import Menu from "./features/menu/Menu";
import Home from "./ui/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/menu", element: <Menu /> },
        { path: "/cart", element: <Cart /> },
        { path: "/order/new", element: <CreateOrder /> },
        { path: "/order/:orederId", element: <Order /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
