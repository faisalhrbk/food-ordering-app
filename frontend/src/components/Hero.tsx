import hereImage from "../assets/hero.png";
const Hero = () => {
	return (
		<div>
			<img
				src={hereImage}
				className="w-full mx-h-[600px] object-cover"
				alt=""
			/>
		</div>
	);
};

export default Hero;
