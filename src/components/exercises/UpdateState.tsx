import {useState} from "react";

export default function UpdateState() {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "John"
        }
    });
    const [pizza, setPizza] = useState({
        name: 'Spicy Pepperoni',
        toppings: ['Mushroom']
    })
    const [cart, setCart] = useState({
        discount: .1,
        items: [
            {id: 1, title: 'Product 1', quantity: 1},
            {id: 2, title: 'Product 2', quantity: 2},
        ]
    });
    const handleClick = () => {
        setGame({...game, player: {...game.player, name: 'Lei'}});
        setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']});
        setCart({
            ...cart,
            items: cart.items.map(item => {
                return item.id === 1 ? {...item, quantity: 3} : item
            })
        });
    }
    return (
        <div>
            <div>Game player name: {game.player.name}</div>
            <div>Pizza toppings: {pizza.toppings.join(' ')}</div>
            <div>product quantities: {cart.items.map(item => item.quantity).join(' ')}</div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
