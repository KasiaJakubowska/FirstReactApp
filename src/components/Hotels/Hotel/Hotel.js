import React from "react";
import styles from "./Hotel.module.css";
import hotelImg from "../../../assets/images/hotel.jpg";

function Hotel(props) {
	return (
		<div className={`card mb-5 my-3 ${styles.hotel}`}>
			<div className="card-body">
				<div className="row">
					<div className="col-4">
						<img src={hotelImg} alt="Hotel" className={styles.img}></img>
					</div>
					<div className="col-8">
						<div className="row">
							<div className="col">
								<p className={styles.title}>{props.name}</p>
								<p className={styles.city}>{props.city}</p>
							</div>
							<div className="col">
								<p>Ocena: {props.rating}</p>
								<p>
									<span className="badge bg-secondary">Opinie: 233</span>
								</p>
							</div>
						</div>
					</div>

					<div className="col-12">
						<p className={styles.description}>{props.description}</p>
						<a href="#" className={`btn btn-${props.theme} float-end px-5`}>
							Pokaż
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hotel;
