const heading = React.createElement("h1", {
    id: "namaste",
    class: "heading-1"
}, "Namaste Everyone");
const heading2 = React.createElement("h2", {
    id: "namaste -2",
    class: "heading-2"
}, "Namaste Everyone");

const dive=React.createElement("div",{
    id: "container"
},[heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing a react element inside the root
root.render(dive);


// Creating header using JavaScript->

// const heading=document.createElement("h1");
// heading.innerHTML="Hello world";

// document.getElementById("root").append(heading);
