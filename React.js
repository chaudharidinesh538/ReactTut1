        //    How to create hello world program from react
        // const heading = React.createElement("h1", {id : "dinesh"}, "Hello World from React")
        // console.log(heading) // object 
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);

        /*
        <div id ="parent">
            <div id = "child1">
              <h1> I am H1 tag </h1>
              <h2> I am H2 tag </h2>
            </div>
            <div id = "child2">
              <h1> I am H3 tag </h1>
              <h2> I am H4 tag </h2>
            </div>
        <div/>
        */


       const heading =  React.createElement(
                           "div", 
                           {id : "parent"}, [
                            React.createElement(
                                                "div", 
                                                 {id : "child1"}, 
                                                 [ React.createElement( "h1", {}, "I am H1 Tag"), 
                                                   React.createElement( "h2", {}, "I am H2 Tag") ]
                                                 ),
                                                 React.createElement(
                                                    "div", 
                                                     {id : "child2"}, 
                                                     [ React.createElement( "h1", {}, "I am H3 Tag"), 
                                                       React.createElement( "h2", {}, "I am H4 Tag") ]
                                                     )
                                                 ]
                            )

         const root = ReactDOM.createRoot(document.getElementById("root"));
         root.render(heading);


