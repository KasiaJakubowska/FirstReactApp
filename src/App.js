import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
import Searchbar from "./components/UI/Searchbar/Searchbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ThemeButton from "./components/UI/ThemeButton/ThemeButton";
import ThemeContext from "./context/themeContext";
import AuthContext from "./context/authContext";
import BestHotel from "./components/Hotels/BestHotel/BestHotel";
import InsporingQuote from "./components/InspiringQuote/InspiringQuote";
import LastHotel from "./components/Hotels/LastHotel/LastHotel";
import useStateStorage from "./hooks/useStateStorage";
import useWebsiteTitle from "./hooks/useWebsiteTitle";

const backendHotels = [
	{
		id: 1,
		name: "Pod akacjami",
		city: "Warszawa",
		rating: 8.3,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.",
		image: "",
	},
	{
		id: 2,
		name: "Dębowy",
		city: "Lublin",
		rating: 8.8,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.",
		image: "",
	},
];

const reducer = (state, action) => {
	switch (action.type) {
		case "change-theme":
			const theme = state.theme === "danger" ? "primary" : "danger";
			return { ...state, theme };
		case "set-hotels":
			return { ...state, hotels: action.hotels };
		case "set-loading":
			return { ...state, loading: action.loading };
		case "login":
			return { ...state, isAuthenticated: true };
		case "logout":
			return { ...state, isAuthenticated: false };
		default:
			throw new Error("Nie ma takiej akcji: " + action.type);
	}
};

const intialState = {
	hotels: [],
	loading: true,
	isAuthenticated: false,
	theme: "danger",
};

function App() {
	const [state, dispatch] = useReducer(reducer, intialState);
	const [lastHotel, setLastHotel] = useStateStorage("last-hotel", null);
	useWebsiteTitle("Strona główna");

	const searchHandler = (term) => {
		const newHotels = [...backendHotels].filter((x) =>
			x.name.toLowerCase().includes(term.toLowerCase())
		);
		dispatch({ type: "set-hotels", hotels: newHotels });
	};

	const getBestHotel = () => {
		if (state.hotels.length < 2) {
			return null;
		} else {
			return state.hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
		}
	};

	const openHotel = (hotel) => setLastHotel(hotel);
	const removeLastHotel = () => setLastHotel(null);

	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: "set-hotels", hotels: backendHotels });
			dispatch({ type: "set-loading", loading: false });
		}, 1000);
	}, []);

	const header = (
		<Header>
			<InsporingQuote />
			<Searchbar onSearch={(term) => searchHandler(term)} />
			<ThemeButton />
		</Header>
	);
	const content = state.loading ? (
		<LoadingIcon />
	) : (
		<>
			{lastHotel ? (
				<LastHotel {...lastHotel} onRemove={removeLastHotel} />
			) : null}
			{getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
			<Hotels onOpen={openHotel} hotels={state.hotels} />
		</>
	);
	const menu = <Menu />;
	const footer = <Footer />;

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				login: () => dispatch({ type: "login" }),
				logout: () => dispatch({ type: "logout" }),
			}}
		>
			<ThemeContext.Provider
				value={{
					color: state.theme,
					changeTheme: () => dispatch({ type: "change-theme" }),
				}}
			>
				<Layout header={header} menu={menu} content={content} footer={footer} />
			</ThemeContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;
