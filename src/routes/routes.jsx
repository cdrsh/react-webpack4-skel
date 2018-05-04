"use strict";

import Page1 from "../jsx/pages/page1";
import Page2 from "../jsx/pages/page2";
import Page3 from "../jsx/pages/page3";
import NotfoundPage from "../jsx/pages/notfound";

const routes = [
    {
        path: "/page1",
        component: Page1
    },
    {
        path: "/page2/:itm",
        component: Page2
    },
    {
        path: "/page3",
        component: Page3
    },
    {
        path: "**",
        component: NotfoundPage
    },
];

export default routes;
