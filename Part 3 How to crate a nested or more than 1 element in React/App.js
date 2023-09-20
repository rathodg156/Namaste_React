/**  consider we have to create a nested element struture of react element like 
<div id="parent">
<div id="child">
<h1> </h1>
</div>
</div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1",{},"I'm a h1 tag"),
    React.createElement("h2",{},"Hello a h2 tag"),
  ]),
   React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/* const heading = React.createElement("h1",{},"Hello World from nested element of React")
const root = ReactDOM.createRoot(document.getElementById('root'))
 root.render(heading)
 */
