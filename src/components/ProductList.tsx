import {useEffect, useState} from "react";

export default function ProductList() {
    const connect = () => console.log("Connecting...");
    // callback returned by useEffect will be invoked when disconnects, i.e., cleanup function.
    const disconnect = () => console.log("Disconnect...");
    const [category, setCategory] = useState("");
    const [products, setProducts] = useState<string[]>([]);
    // putting an empty array as the second argument,
    // when the second argument is NOT changed, then this method will NOT be executed again.
    // when the second argument is set to category, the method will be executed again only when category changes.
    useEffect(() => {
        console.log('fetching products in', category);
        setProducts(['clothing', 'household']);
        connect();
        return () => disconnect();
    }, [category]);
    return (
        <div>
            <select className="form-select" onChange={(event) => {
                setCategory(event.target.value)
            }}>
                <option value=""></option>
                <option value="Clothing">Clothing</option>
                <option value="Household">Household</option>
            </select>
            <div>Product List</div>
        </div>
    );
}
