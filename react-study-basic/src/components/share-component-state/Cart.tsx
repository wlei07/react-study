interface CartProps {
    cartItems: string [];
    onClear: () => void;
}

export default function Cart({cartItems, onClear}: CartProps) {
    return (
        <>
            <div>Cart</div>
            <ul>
                {cartItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <button onClick={onClear}>Clear</button>
        </>
    );
}
