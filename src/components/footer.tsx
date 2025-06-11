import {type FC} from "react";

interface PropType {}
const Footer: FC<PropType> = () => {
	return (
		<footer className="py-7 px-4 border-b-[1px] border-white/20 border-solid space-y-32">
			<div className="flex flex-col lg:flex-row gap-10">
				<div className="w-full space-y-40">
					<ul className="flex gap-5 lg:gap-12 flex-wrap">
						<li className="font-quicksand font-semibold text-white hover:text-white/80 capitalize">
							events
						</li>
						<li className="font-quicksand font-semibold text-white hover:text-white/80 capitalize">
							Gen ai
						</li>
						<li className="font-quicksand font-semibold text-white hover:text-white/80 capitalize">
							careers
						</li>
						<li className="font-quicksand font-semibold text-white hover:text-white/80 capitalize">
							case study
						</li>
						<li className="font-quicksand font-semibold text-white hover:text-white/80 capitalize">
							SME talks
						</li>
					</ul>
					<div className="space-y-5">
						<p className="text-white font-semibold text-[28px] max-w-[20ch] leading-8">
							For any collaborative projects or enquiries feel free to connect
							with us.
						</p>
						<a
							href="#"
							className="text-white font-semibold text-[30px] max-w-[20ch] leading-8"
						>
							vayuz.com
						</a>
					</div>
				</div>
				<div className="flex flex-col">
					<h2 className="text-right font-playfair font-medium text-[75px] leading-20 capitalize mb-5">
						Connect with Us
					</h2>
					<form className="flex flex-col gap-7 transition-colors">
						<input
							type="text"
							placeholder="Full Name"
							className="border-b-[1px] border-solid border-white pb-4 placeholder:text-sm placeholder:font-medium placeholder:text-white/60 focus:outline-none focus:border-[#08A7CE]"
						/>
						<input
							type="email"
							placeholder="Email"
							className="border-b-[1px] border-solid border-white pb-4 placeholder:text-sm placeholder:font-medium placeholder:text-white/60 focus:outline-none focus:border-[#08A7CE]"
						/>
						<input
							type="text"
							placeholder="Phone Number"
							className="border-b-[1px] border-solid border-white pb-4 placeholder:text-sm placeholder:font-medium placeholder:text-white/60 focus:outline-none focus:border-[#08A7CE]"
						/>
						<div className="flex justify-end">
							<button className="bg-[#08A7CE]/40 px-6 py-2 rounded-full border-2 border-solid border-[#08A7CE] text-[13px] font-bold uppercase hover:border-white transition-colors cursor-pointer">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
			<ul className="flex gap-5 lg:gap-10">
				<li className="text-white font-medium text-sm font-quicksand capitalize">
					about
				</li>
				<li className="text-white font-medium text-sm font-quicksand capitalize">
					insights
				</li>
				<li className="text-white font-medium text-sm font-quicksand capitalize">
					community
				</li>
				<li className="text-white font-medium text-sm font-quicksand capitalize">
					privacy & policy
				</li>
			</ul>
		</footer>
	);
};
export default Footer;
