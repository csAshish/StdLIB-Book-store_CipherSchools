import React from "react";
import NotFoundImage from "../../assets/page_not_found.png";
import "./notfound.css";
function NotFound() {
	return (
		<div className="not-found-page">
			<img className="not-found-image" src={NotFoundImage} alt="not-found" />
		</div>
	);
}

export { NotFound };
