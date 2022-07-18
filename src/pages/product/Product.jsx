import { React, useState } from "react";
import { Drawer } from "./drawer/Drawer";
import { Card } from "./card/Card";

function Product({ search }) {
	const [drawerVisible, setDrawerVisible] = useState(false);

	return (
		<div className="StdLib-container">
			<Drawer drawerVisible={drawerVisible} />
			<Card
				drawerVisible={drawerVisible}
				setDrawerVisible={setDrawerVisible}
				search={search}
			/>
		</div>
	);
}

export { Product };
