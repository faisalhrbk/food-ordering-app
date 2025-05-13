import landingImage from "../assets/landing.png";
import appDownloadIMage from "../assets/appDownload.png";
const HomePage = () => {
	return (
		<div className="flex flex-col gap-12">
			<div className=" bg-amber-50 rounded-lg  flex flex-col gap-5 text-center shadow-md py-8 -mt-16">
				<h1 className="text-5xl font-bold tracking-tight text-orange-600">
					Tuck into a takway today
				</h1>
				<span className="text-xl "> Food is just click away</span>
			</div>
            <div className="grid md:grid-cols-2 gap-5">
				<div>
					<img src={landingImage} alt="" />
				</div>

				<div className="flex flex-col items-center justify-center gap-4 text-center">
					<span className="font-bold text-3xl tracking-tighter">
						Order takeway even faster
					</span>
					<span>
						download the OrangePanda App for faster ordering and personalized
						recommendations
					</span>
					<img src={appDownloadIMage} alt="app download img" />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
