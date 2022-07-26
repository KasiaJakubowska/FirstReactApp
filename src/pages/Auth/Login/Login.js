import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton";

export default function Login(props) {
	const [auth, setAuth] = useAuth();
	const history = useHistory();

	const [email, setEmail] = useState("");
	const [passsword, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [valid, setValid] = useState(null);

	const submit = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(() => {
			// logowanie
			if (true) {
				setAuth(true);
				history.push("/");
			} else {
				setValid(false);
				setPassword("");
			}

			setLoading(false);
		}, 500);
	};

	return (
		<div>
			<h2>Logowanie</h2>

			{valid === false ? (
				<div className="alert alert-danger">Niepoprawne dane logowania</div>
			) : null}

			<form onSubmit={submit}>
				<div className="form-group">
					<label>Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Hasło</label>
					<input
						type="password"
						value={passsword}
						onChange={(e) => setPassword(e.target.value)}
						className="form-control"
					/>
				</div>
				<LoadingButton loading={loading}>Zaloguj</LoadingButton>
			</form>
		</div>
	);
}
