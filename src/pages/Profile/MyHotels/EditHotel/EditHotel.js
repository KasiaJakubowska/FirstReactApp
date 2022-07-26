import axios from "../../../../axios";
import { useHistory } from "react-router-dom";
import HotelForm from "../HotelForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const EditHotel = (props) => {
	const [auth] = useAuth();
	const { id } = useParams();
	const history = useHistory();
	const [hotel, setHotel] = useState(null);

	const submit = async (form) => {
		await axios.patch(`/hotels/${id}.json?auth=${auth.token}`, form);
		history.push("/profil/hotele");
	};

	const fetchHotel = async () => {
		const res = await axios.get(`/hotels/${id}.json`);
		const hotelData = res.data;

		delete hotelData.user_id;
		delete hotelData.rating;

		setHotel(hotelData);
	};

	useEffect(() => {
		fetchHotel();
	}, []);

	return (
		<div className="card">
			<div className="card-header">Edytuj hotel</div>
			<div className="card-body">
				<p className="text-muted">Uzupełnij dane hotelu</p>

				<HotelForm hotel={hotel} buttonText="Zapisz!" onSubmit={submit} />
			</div>
		</div>
	);
};

export default EditHotel;
