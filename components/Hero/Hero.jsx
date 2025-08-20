import styles from '../../styles/hero.module.css';
import clsx from 'clsx';

const placementClasses = {
	// only 3 has been added for demo purpose
	// but ideally all 9 combinations should be handled
	'start center': styles.startCenter,
	'center end': styles.centerEnd,
	'end start': styles.endStart,
};

export default function Hero({ src, alt, title, description, placeTitle, placeDescription }) {
	const sameCell = placeTitle === placeDescription;

	return (
		<>
			<img src={src} alt={alt} className={styles.bgImg} />
			<section className={clsx(styles.content, sameCell && placementClasses[placeTitle])}>
				<h1 className={clsx(styles.title, !sameCell && placementClasses[placeTitle])}>{title}</h1>
				<p className={clsx(styles.description, !sameCell && placementClasses[placeDescription])}>
					{description}
				</p>
			</section>
		</>
	);
}
