// PascalCasing
let count = 0;
function Message() {
    const name = '';
    console.log('Message called', count);
    count ++;
    if(name) {
        // JSX Javascript XML
        return <h1>Hello, {name}</h1>;
    } else {
        return <h1>message {count}</h1>;
    }
}
export default Message;
