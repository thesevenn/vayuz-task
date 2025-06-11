import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Description from "./components/description";
import Offerings from "./components/offerings";

function App() {
	return (
		<>
			<div className="flex">
				<Sidebar />
				<div className="w-full">
					<Header />
					<div className="min-h-screen p-4 space-y-23">
						<Hero />
						<Description />
						<Offerings />
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}
export default App;
