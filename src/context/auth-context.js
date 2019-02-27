import React from "react";

// creates 'globally' (or not, it's customizable) available object/data
const authContent = React.createContext({
    authenticated: false, 
    login:()=>{}
});

// will wrap parts of application that needs context
export default authContent;