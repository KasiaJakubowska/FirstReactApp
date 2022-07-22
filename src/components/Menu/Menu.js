import React, { useContext } from "react";
import style from "./Menu.module.css";
import AuthContext from "../../context/authContext";

function Menu() {
	const auth = useContext(AuthContext);

	return (
		<div className={`${style.menuContainer} breadcrumb`}>
			<ul className={style.menu}>
				<li className={style.menuItem}>
					<a href="#">Home</a>
				</li>
				{auth.isAuthenticated ? (
					<li className={style.menuItem}>
						<a href="#" onClick={auth.logout}>
							Wyloguj
						</a>
					</li>
				) : (
					<li className={style.menuItem}>
						<a href="#" onClick={auth.login}>
							Zaloguj
						</a>
					</li>
				)}
			</ul>
		</div>
	);
}

export default Menu;
