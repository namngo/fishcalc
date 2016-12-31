import * as React from "react";
import * as ReactDOM from "react-dom";
import * as _ from "lodash";

import { Hello } from "./components/Hello";

var foo = "" + _.add(3, 4);
console.log(foo);
ReactDOM.render(
    <Hello compiler="TypeScript" framework={foo} />,
    
    document.getElementById("example")
);