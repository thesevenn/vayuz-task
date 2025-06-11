import {type FC} from "react";

interface PropType {}
const Sidebar: FC<PropType> = () => {
	return (
		<aside className="max-w-[320px] min-w-[240px] lg:px-8 py-6 sticky top-0 h-screen border-r-[1px] border-white/20 border-solid hidden lg:flex flex-col justify-between">
			<div className="space-y-8">
				<div className="flex flex-col items-start justify-center gap-6">
					<img src="./vayuz_logo.png" alt="Vayuz" />
					<button
						className="p-[2px] rounded-full hover:bg-position-[300px] transition-all uppercase text-white font-bold"
						style={{
							backgroundImage:
								"conic-gradient(#FC0600,#09D809,#FF6600,#F60163,#07A7CD,#FC0600)",
						}}
					>
						<div className="bg-background rounded-full px-10 py-3">
							Contact us
						</div>
					</button>
				</div>
				<ul className="flex flex-col items-start justify-center gap-5">
					<li className="text-white font-quicksand font-medium text-[15px]">
						App Development
					</li>
					<li className="text-white font-quicksand font-medium text-[15px]">
						Challenges
					</li>
					<li className="text-white font-quicksand font-medium text-[15px]">
						Hire Developer
					</li>
					<li className="text-white font-quicksand font-medium text-[15px]">
						Community
					</li>
				</ul>
			</div>
			<div className="space-y-2">
				<img
					className="w-full max-w-54"
					src="./sidebar_thumbnail.png"
					alt="A Mac desktop setup in white "
				/>
				<p className="font-medium font-quicksand text-white text-sm">
					This is a placeholder text to describe the above thumnail.
				</p>
			</div>
		</aside>
	);
};

export default Sidebar;
