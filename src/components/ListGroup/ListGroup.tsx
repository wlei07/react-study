import {useState} from "react";
import styles from './ListGroup.module.css';

// usage example code:
/* ListGroup Component example from parent component:
let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
];
const handleSelectItem = (item: string) => {
    console.log(item);
}
return <div><ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/></div>;
 */

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
    // initialized -1 to represent at the beginning, no item is selected.
    let [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        // because React component could only return one element,
        // so <h1> and <ul> has to be wrapped in <>, i.e., a Fragment element.
        <>{/*} alternatively use <Fragment></Fragment> element */}
            <h1>{heading}</h1>
            {/* Note in JavaScript: true && 'Lei' returns 'Lei', however, false && 'Lei' returns false */}
            {items.length === 0 && <p>No item found</p>}
            <ul className={[styles.listGroup, styles.container].join(' ')}>
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        // onClick could provide an event: MouseEvent parameter, import {MouseEvent} from "react" in this case
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
