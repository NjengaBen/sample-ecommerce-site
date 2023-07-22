import { createContext, useContext } from "react";
import { Toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  return <Context.Provider>value={{ showCart, setShowCart }}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
