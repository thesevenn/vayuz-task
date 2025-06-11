import {type FC} from "react";

interface PropType {}
const Header: FC<PropType> = () => {
	return (
		<header className="py-7 px-4 border-b-[1px] border-white/20 border-solid">
			<p className="font-quicksand font-semibold text-white text-base">
				Securing Your Flutter App: Best Practices and Techniques{" "}
			</p>
		</header>
	);
};
export default Header;
