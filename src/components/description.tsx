import {type FC} from "react";

import {MoveUpRight} from "lucide-react";

interface PropType {}
const Description: FC<PropType> = () => {
	return (
		<div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:items-end">
			<div className="space-y-5">
				<h2 className="font-playfair font-medium text-[40px] text-white max-w-[10ch] leading-10">
					Flutter's Dawn
				</h2>
				<p className="font-quicksand font-semibold text-white">
					History of flutter
				</p>
			</div>
			<p className="font-quicksand font-semibold text-white/80 max-w-[40ch]">
				Uncover the fascinating story of Flutter in 'Flutter's Dawn: History of
				Flutter.' From humble origins to global acclaim, delve into its
				captivating narrative. Explore milestones, triumphs, and challenges.
				Whether tech enthusiast or curious mind, join us on this captivating
				journey! <a className="text-teal">Click to begin!</a>
			</p>
			<button className="py-2 px-8 bg-teal text-white uppercase rounded-full font-bold cursor-pointer hover:bg-teal/70 transition-colors flex items-center gap-1">
				begin <MoveUpRight size={20} />
			</button>
		</div>
	);
};
export default Description;
