const heading = React.createElement("h6", {id: "heading"}, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


const parent = React.createElement('div', {id: 'parent'}, 
React.createElement('div', {id: 'child'}, 
[React.createElement('h1',{},'i am h1 tag'), React.createElement('h2',{},'i am h2 tag')])
)
root.render(parent);
console.log(parent);


// function abcc() {
//     console.log("hello shalabh")
// }

// const abccd = () => console.log("new func");

// abccd();