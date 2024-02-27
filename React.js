
import React from "react";
import ReactDOM from "react-dom/client";

const heading = 
                <div>
                <h1 className="Dinesh"> react element using JSX </h1> 
                <h2> New react Element </h2> 
                </div>



const Functionalcomponent =() => {
  return <h1 className="Dinesh"> react element using functional component </h1> 
}

const Functionalcomponent2 = () =>
  
  <div id="container">
    {heading}                                       //*Injecting react element in Component
  <h2> New react Element </h2> 
 <Functionalcomponent />                            //*Three ways write react component inside another component(Component Composition)
 <Functionalcomponent> </Functionalcomponent>
 {Functionalcomponent()}
 </div>




const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Functionalcomponent2 />);


