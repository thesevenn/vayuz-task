import {type FC} from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

interface PropType {}
const Offerings: FC<PropType> = () => {
	return (
		<div className="space-y-16">
			<div className="space-y-5">
				<div className="space-y-1">
					<h2 className="font-playfair font-normal text-2xl lg:text-[40px] capitalize text-white text-center">
						our dynamic service suite!
					</h2>
					<h3 className="font-quicksand font-medium text-lg lg:text-[22px] capitalize text-center">
						embrace Innovation: Let's Create Together!
					</h3>
				</div>
				<p className="text-center max-w-[80ch] mx-auto font-quicksand text-sm font-medium">
					Step into innovation! Explore our range of services and let's create
					something extraordinary together. Your vision, our expertise. Let's
					begin!
				</p>
			</div>
			<div className="flex">
				<Accordion type="single" collapsible className="w-full flex-2/3 p-4">
					<AccordionWithIcon
						value="1"
						title="Flutter app development"
						content={
							<p className="font-quicksand font-medium text-white/80 text-sm max-w-[80ch]">
								Unlock endless possibilities with Flutter App Development. Build
								beautiful, high-performance applications for any platform -
								faster and easier than ever before. Ready to revolutionize your
								app experience?<a href="#"> Let's get started today!</a>
							</p>
						}
					/>
					<AccordionWithIcon
						value="2"
						title="UI/UX Design"
						content={
							<p className="font-quicksand font-medium text-white/80 text-sm max-w-[80ch]">
								Unlock endless possibilities with Flutter App Development. Build
								beautiful, high-performance applications for any platform -
								faster and easier than ever before. Ready to revolutionize your
								app experience?<a href="#"> Let's get started today!</a>
							</p>
						}
					/>
					<AccordionWithIcon
						value="3"
						title="Customization & integration"
						content={
							<p className="font-quicksand font-medium text-white/80 text-sm max-w-[80ch]">
								Unlock endless possibilities with Flutter App Development. Build
								beautiful, high-performance applications for any platform -
								faster and easier than ever before. Ready to revolutionize your
								app experience?<a href="#"> Let's get started today!</a>
							</p>
						}
					/>
					<AccordionWithIcon
						value="4"
						title="Testing & Quality Assurance"
						content={
							<p className="font-quicksand font-medium text-white/80 text-sm max-w-[80ch]">
								Unlock endless possibilities with Flutter App Development. Build
								beautiful, high-performance applications for any platform -
								faster and easier than ever before. Ready to revolutionize your
								app experience?<a href="#"> Let's get started today!</a>
							</p>
						}
					/>
					<AccordionWithIcon
						value="5"
						title="Consulting & Training"
						content={
							<p className="font-quicksand font-medium text-white/80 text-sm max-w-[80ch]">
								Unlock endless possibilities with Flutter App Development. Build
								beautiful, high-performance applications for any platform -
								faster and easier than ever before. Ready to revolutionize your
								app experience?<a href="#"> Let's get started today!</a>
							</p>
						}
					/>
					<AccordionWithIcon
						value="6"
						title="Migration & Upgrades"
						content={
							<p className="font-quicksand font-medium text-white/80 text-sm max-w-[80ch]">
								Unlock endless possibilities with Flutter App Development. Build
								beautiful, high-performance applications for any platform -
								faster and easier than ever before. Ready to revolutionize your
								app experience?<a href="#"> Let's get started today!</a>
							</p>
						}
					/>
				</Accordion>
				<img
					className="flex-1/3 max-h-[600px] hidden lg:block"
					src="./portrait_showcase.png"
					alt="A portrait showing a laptop and a smartphone"
				/>
			</div>
		</div>
	);
};

interface Props {
	title: string;
	content: React.ReactNode;
	value: string;
}
const AccordionWithIcon: FC<Props> = ({title, content, value}) => {
	return (
		<AccordionItem value={value}>
			<AccordionTrigger className="font-playfair font-medium text-xl lg:text-[26px] text-white/80 capitalize cursor-pointer">
				{title}
			</AccordionTrigger>
			<AccordionContent>{content}</AccordionContent>
		</AccordionItem>
	);
};
export default Offerings;
