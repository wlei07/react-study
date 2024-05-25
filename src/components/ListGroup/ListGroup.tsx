import {useState} from "react";
import styles from './ListGroup.module.css';
import styled from "styled-components";
import {BsFillCalendarFill} from "react-icons/bs";

// code example for styled-components, i.e., CSS in JS
const List = styled.ul`
    list-style: none;
    padding: 0;
`

interface ListItemProps {
    active: boolean;
}

const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${props => props.active ? 'blue' : 'none'};
`

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
    let [selectedIndexListWithStyledComponent, setSelectedIndexListWithStyledComponent] = useState(-1);
    return (
        // because React component could only return one element,
        // so <h1> and <ul> has to be wrapped in <>, i.e., a Fragment element.
        <>{/*} alternatively use <Fragment></Fragment> element */}
            <h1>{heading}</h1>
            <BsFillCalendarFill color="red" size="40"/>
            {/* Note in JavaScript: true && 'Lei' returns 'Lei', however, false && 'Lei' returns false */}
            {items.length === 0 && <p>No item found</p>}
            <ul className={[styles.listGroup, styles.container].join(' ')} style={{backgroundColor: "yellow"}}>
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
            <h1>List using CSS in JS, i.e., "styled-components" library.</h1>
            <List>
                {items.map((item, index) => (
                    <ListItem
                        active={index === selectedIndexListWithStyledComponent}
                        key={item}
                        // onClick could provide an event: MouseEvent parameter, import {MouseEvent} from "react" in this case
                        onClick={() => {
                            setSelectedIndexListWithStyledComponent(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default ListGroup;
