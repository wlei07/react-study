import Message from "./Message.tsx";
import {useState} from "react";

export default function ManageComponentStateDemo() {
    // state could only be declared at top level
    // state is saved outside of component
    const [isVisible, setVisibility] = useState(false);
    const [drink, setDrink] = useState({
        title: "Americano",
        price: 5
    });
    const handleClick = () => {
        setVisibility(true);
        // tha above setter sets to true, asynchronously
        // so below it will still log current value: true.
        console.log(isVisible);
        // below it won't work
        drink.price = drink.price + 1;
        setDrink(drink);
        // every state update, we will have to create a new object
        const newDrink = {
            // copy all fields from drink object
            ...drink,
            price: drink.price + 1
        }
        setDrink(newDrink);
        // example updating nested objects
        const [customer, setCustomer] = useState({
            name: 'John',
            address: {
                city: 'San Francisco',
                zipCode: 94111,
            }
        });
        // the spread operator ... is a shallow copy, so we need to deep copy address object by ourselves
        setCustomer({
            ...customer,
            address: {
                ...customer.address,
                zipCode: 94112
            }
        });

        // example update array
        const [tags, setTags] = useState(['happy', 'cheerful']);
        // add item to array
        setTags([...tags, 'exciting'])
        // remove item
        setTags(tags.filter(tag => tag !== 'happy'));
        // update item
        setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));

        // example update object array
        const [bugs, setBugs] = useState([
            {id: 1, title: 'Bug 1', fixed: false},
            {id: 2, title: 'Bug 2', fixed: false},
        ]);
        // update the first bug as fixed
        setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug));
    }

    return (
        <>
            <div>
                {drink.price}
                <button onClick={handleClick}>Click Me</button>
            </div>
            {/* in strict mode, each component is delivered twice, that is why you see the count value increases twice. */}
            <Message/>
        </>
    );
}
