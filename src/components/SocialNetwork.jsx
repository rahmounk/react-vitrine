import React from "react";

//* Composant Social Network importé dans HOME
const SocialNetwork = () => {
	
	//Fonction pour animation des logos en hover
	const anime = () => {
		let navLinks = document.querySelectorAll(".social-network a");

		navLinks.forEach(link =>  {
			link.addEventListener("mouseover", (e) => {
				let attrX = e.offsetX - 20;
				let attrY = e.offsetY - 13;
				link.style.transform = `translate(${attrX}px, ${attrY}px)`;
			});

            // quand la souris quitte le lien l'icone reviens à sa position
            link.addEventListener("mouseleave" , () => {
                link.style.transform = "";
            })
		});
	};

	return (
		<div className="social-network">
			<ul className="content">
				{/* lien vers facebook */}
				<a
					href="https://www.facebook.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover"
					onMouseOver={anime}
				>
					<li>
						<i className="fab fa-facebook-f"></i>
					</li>
				</a>
				{/* lien vers twitter */}
				<a
					href="https://www.twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover"
					onMouseOver={anime}
				>
					<li>
						<i className="fab fa-twitter"></i>
					</li>
				</a>

				{/* lien vers insta */}
				<a
					href="https://www.instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover"
					onMouseOver={anime}
				>
					<li>
						<i className="fab fa-instagram"></i>
					</li>
				</a>
			</ul>
		</div>
	);
};

export default SocialNetwork;
