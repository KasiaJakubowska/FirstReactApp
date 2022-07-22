export default function LoadingIcon(props) {
	return (
		<div className="d-flex justify-content-center">
			<div className={`spinner-border m-5 text-${props.theme}`} role="status">
				<span className="sr-only">Ładowanie...</span>
			</div>
		</div>
	);
}
