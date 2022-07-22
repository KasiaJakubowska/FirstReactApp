import React from "react";

const AuthContext = React.createContext({
	isAuthenticated: false,
	login: () => {},
	logout: () => {},
});

export default AuthContext;
