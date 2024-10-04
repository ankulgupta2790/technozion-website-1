import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import chota_logo from "./logo-05.png";
import './index.css';

const oldNavigation = [
	{ name: "HOME", link: "/" },
	{ name: "ABOUT", link: "/about" },
	{ name: "EVENTS", link: "/events" },
	
];

export default function Navbar() {
	const [navigation, setNavigation] = useState(oldNavigation);
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 725);

	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth <= 725);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (isMobileView) {
			setNavigation([...oldNavigation]);
		} else {
			setNavigation(oldNavigation);
		}
	}, [isMobileView]);

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const listItems = navigation.map((menuItem, index) => (
		<li key={index}>
			<NavLink to={menuItem.link} onClick={() => closeMenu()}>{menuItem.name}</NavLink>
		</li>
	));

	return (
		<>
			{!menuOpen ? (
				<div className="logo">
					<Link to="./" onClick={closeMenu}>
						<img src={chota_logo} alt="logo1" />
					</Link>
				</div>
			) : null}
			<nav className={menuOpen ? 'menu-open' : 'menu-closed'}>
				<div
					className="menu"
					onClick={() => {
						setMenuOpen(!menuOpen);
					}}
				>
					{menuOpen ? (
						<ImCross className='cross' />
					) : (
						<>
							<span className={menuOpen ? '' : 'ham'}></span>
							<span className={menuOpen ? '' : 'ham'}></span>
							<span className={menuOpen ? '' : 'ham'}></span>
						</>
					)}
				</div>
				<ul className={menuOpen ? "open" : ""}>{listItems}</ul>
			</nav>
		</>
	);
}