import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cart_reducer"


const CartStateContext = createContext()
const CartDispatchContext = createContext()

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, [])

    return(
        <CartDispatchContext.Provider value = {dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartStateContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const useDispatchCart = () => {
    const context = useContext(CartDispatchContext);
    if (context === undefined) {
        throw new Error('useDispatchCart must be used within a CartProvider');
    }
    return context;
};