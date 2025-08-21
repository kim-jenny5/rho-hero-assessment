import styles from '../../styles/hero.module.css';
import clsx from 'clsx';

export default function Hero({ src, alt, title, description, placeTitle, placeDescription }) {
	const sameCell = placeTitle === placeDescription;
	const [titleRow, titleCol] = placeTitle.split(' ');
	const [descRow, descCol] = placeDescription.split(' ');

	const rowMap = { start: styles.rowStart, center: styles.rowCenter, end: styles.rowEnd };
	const colMap = { start: styles.colStart, center: styles.colCenter, end: styles.colEnd };

	return (
		<>
			<img src={src} alt={alt} className={styles.bgImg} />
			<section className={styles.hero}>
				<div
					className={clsx(
						styles.content,
						sameCell ? rowMap[titleRow] : styles.split,
						sameCell && colMap[titleCol]
					)}
				>
					<h1
						className={clsx(
							styles.title,
							!sameCell && rowMap[titleRow],
							!sameCell && colMap[titleCol]
						)}
					>
						{title}
					</h1>
					<p
						className={clsx(
							styles.description,
							!sameCell && rowMap[descRow],
							!sameCell && colMap[descCol]
						)}
					>
						{description}
					</p>
				</div>
			</section>
		</>
	);
}
