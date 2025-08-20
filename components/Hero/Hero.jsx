// TODO: Build your Hero component here
// Requirements:
// - Accept props: src, alt, title, description, placeTitle, placeDescription
// - Use CSS Modules for styling
// - Implement scalable styles
// - Make it semantic and accessible

import styles from '../../styles/hero.module.css';

export default function Hero({ src, alt, title, description, placeTitle, placeDescription }) {
	return (
		<>
			<div>{title}</div>
			<div>{description}</div>
		</>
	);
}
