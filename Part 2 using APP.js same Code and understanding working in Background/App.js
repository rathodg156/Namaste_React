const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from App.js file of React")
console.log(heading) 
// ReactElemet is nothing but the normal Java Script object that contains tags,attribute values and children(that is value inside the tag) as props that we passing to that first argument as children.

const root = ReactDOM.createRoot(document.getElementById("root"))

  root.render(heading) 
  // render method will responsible for converting a object into element h1 tag and putting this into the DOM which is root 
  // note - job of render is basically to take this object and create an h1 tag that browser will understand and put it inside the root element.

  // so basically React.createElement will create a object that will contain all argument inside it 
  // when we do root.render and passing the ReactElement to it which is object to the DOM for rendering