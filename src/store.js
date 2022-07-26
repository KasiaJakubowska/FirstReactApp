import { createStore } from "redux";

const intialState = {
	user: JSON.parse(window.localStorage.getItem("token-data")) ?? null,
	theme: "info",
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case "change-theme":
			const theme = state.theme === "danger" ? "primary" : "danger";
			return { ...state, theme };
		case "login":
			return { ...state, user: action.user };
		case "logout":
			return { ...state, user: null };
		default:
			return state;
	}
};

const store = createStore(reducer);

export default store;
