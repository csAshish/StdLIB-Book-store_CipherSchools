import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./pages/filters/Product-context";
import { WhishlistProvider } from "./pages/wishlist/wishlist-context";
import { CartProvider } from "./pages/cart/cart-context";
import { AuthProvider } from "./Context/auth-context";
import { TaskProvider } from "./Context/address-context";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { options } from "./Context/alterOptions";
// Call make Server
makeServer();
const rootElement = document.getElementById("root");
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ProductProvider>
				<WhishlistProvider>
					<CartProvider>
						<TaskProvider>
							<AuthProvider>
								<AlertProvider template={AlertTemplate} {...options}>
									<App />
								</AlertProvider>
							</AuthProvider>
						</TaskProvider>
					</CartProvider>
				</WhishlistProvider>
			</ProductProvider>
		</BrowserRouter>
	</React.StrictMode>,
	rootElement
);
