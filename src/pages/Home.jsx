import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<div className="container">
				<div row>
					<div className="col-md-3">
						<img src="https://picsum.photos/100" className="rounded-5" alt="" />
					</div>
					<div className="col-md-5">
						<h3>Nombre</h3>
						<p>Adress</p>
						<p>number</p>
						<p>mail</p>
					</div>
					<div className="col-md-3">
						<span>symbol</span>
						<span>symbol</span>
					</div>
				</div>

			</div>
		</div>
	);
}; 