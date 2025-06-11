import {type FC} from "react";

interface PropType {}
const Hero: FC<PropType> = () => {
	return (
		<main className="flex flex-col lg:flex-row items-center w-full">
			<div className="space-y-16">
				<div className="space-y-4 w-full">
					<h1 className="font-playfair font-medium text-4xl  lg:text-[43px] leading-14">
						Unlock the Potential of Flutter
					</h1>
					<p className="font-quicksand font-medium text-xl leading-7 max-w-[32ch]">
						Your Premier Partner for Cross-pplatform App Excellence!
					</p>
				</div>
				<button className="py-4 px-8 bg-teal text-white uppercase rounded-full font-bold cursor-pointer hover:bg-teal/70 transition-colors mb-10">
					Upgrade your tech
				</button>
			</div>
			<div className="relative w-full isolate">
				<img
					className="w-full lg:w-[90%] max-w-[1000px] max-h-[600px] object-cover rounded-lg"
					src="./hero_bg.png"
					alt=""
				/>
				<img
					className="absolute z-10 bottom-50 right-10 hidden lg:block"
					src="./hero_codesnip.png"
					alt="a code fragment on a dark background"
				/>
				<img
					className="absolute z-10 -bottom-20 right-35 hidden lg:block"
					src="./hero_codesnip_large.png"
					alt="a larger code fragment on a dark background"
				/>
				<div className="w-[100px] aspect-square rounded-full bg-[#09D809]/60 absolute blur-[100px] right-0 top-20 -z-10"></div>
				<div className="w-[100px] aspect-square rounded-full bg-teal/60 absolute blur-[100px] right-0 bottom-40 -z-10"></div>
			</div>
		</main>
	);
};
export default Hero;
