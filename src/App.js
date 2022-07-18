import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, HideAuth, RequiresAuth } from "./components/Component";
import {
	Home,
	Cart,
	Product,
	Wishlist,
	Login,
	Signup,
	Checkout,
} from "./pages/Pages";
import Mockman from "mockman-js";
import { NotFound } from "./pages/page_not_found/NotFound";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import "./styles/utility.css";
import { useState } from "react";
function App() {
	const [search, setSearch] = useState("");

	return (
		<div className="App">
			<div>
				<Navbar setSearch={setSearch} />
			</div>
			<div className="main-style">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/login"
						element={
							<HideAuth>
								<Login />
							</HideAuth>
						}
					/>
					<Route
						path="/signup"
						element={
							<HideAuth>
								<Signup />
							</HideAuth>
						}
					/>
					<Route
						path="/cart"
						element={
							<RequiresAuth>
								<Cart />
							</RequiresAuth>
						}
					/>
					<Route path="/Product" element={<Product search={search} />} />
					<Route path="/Product/:productId" element={<ProductDetail />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route
						path="/wishlist"
						element={
							<RequiresAuth>
								<Wishlist />
							</RequiresAuth>
						}
					/>
					<Route path="/mock" element={<Mockman />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
