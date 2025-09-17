import React from "react";
import { createRoot } from "react-dom/client";
import App from "./component/App";

import WithoutUseState from "./component/withoutUseState";

const root = createRoot(document.getElementById("main"));

root.render(App());
