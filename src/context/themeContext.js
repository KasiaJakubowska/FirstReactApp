import React from "react";

const ThemeContext = React.createContext({
	color: "primary",
	changeTheme: () => {},
});

export default ThemeContext;
