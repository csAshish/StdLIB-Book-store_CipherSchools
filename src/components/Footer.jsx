import React from "react";

function Footer() {
	return (
		<div>
			<section className="footer-StdLib">
				<div className="share">
					<a
						href="https://twitter.com/ShilpeSaxena"
						target="_blank"
						rel="noreferrer"
						className="footer_for-StdLib"
					>
						<i className="fab fa-twitter"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/shilpe-saxena-heartly-winner/"
						target="_blank"
						rel="noreferrer"
						className="footer_for-StdLib"
					>
						<i className="fab fa-linkedin"></i>
					</a>
					<a
						href="https://github.com/shilpe26"
						target="_blank"
						rel="noreferrer"
						className="footer_for-StdLib"
					>
						<i className="fab fa-github"></i>
					</a>
				</div>
				<div className="credit">
					Made with 💙 by<span> Shilpe Saxena</span>
				</div>
			</section>
		</div>
	);
}

export { Footer };
