
import { CartProvider } from "./Context/CartContext";
import { AuthContextProvider } from "./context/AuthContext";
import AppRouter from "./Router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <AuthContextProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
