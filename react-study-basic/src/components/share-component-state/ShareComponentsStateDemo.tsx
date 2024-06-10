import {useState} from "react";
import NavBar from "./NavBar.tsx";
import Cart from "./Cart.tsx";

export default function ShareComponentsStateDemo() {
    const [cartItems, setCartItems] = useState(['Product1', 'Product2', 'Product3']);
    return (
        <div>
            <NavBar cartItemsCount={cartItems.length}/>
            <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
        </div>
    );
}
