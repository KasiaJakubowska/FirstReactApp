import style from "./Menu.module.css";
import useAuth from "../../hooks/useAuth";

function Menu() {
	const [auth, setAuth] = useAuth();

	const login = (e) => {
		e.preventDefault();
		setAuth(true);
	};
	const logout = (e) => {
		e.preventDefault();
		setAuth(false);
	};

	return (
		<div className={`${style.menuContainer} breadcrumb`}>
			<ul className={style.menu}>
				<li className={style.menuItem}>
					<a href="#">Home</a>
				</li>
				{auth ? (
					<li className={style.menuItem}>
						<a href="#" onClick={logout}>
							Wyloguj
						</a>
					</li>
				) : (
					<li className={style.menuItem}>
						<a href="#" onClick={login}>
							Zaloguj
						</a>
					</li>
				)}
			</ul>
		</div>
	);
}

export default Menu;
