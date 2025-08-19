import { heroSections } from '../data/heroData';
import Hero from '../components/Hero/Hero';
import styles from '../styles/demo.module.css';
import { ArrowLeft, ArrowRight, Dot } from 'lucide-react';
import clsx from 'clsx';

export default function Demo() {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Dot clicked', e.target);
	};

	return (
		<div className={styles.container}>
			<button type='button' className={clsx(styles.arrowBtn, styles.leftArrow)}>
				<ArrowLeft size={20} />
			</button>
			{heroSections.map((section) => (
				<Hero key={section.id} {...section} />
			))}
			<button type='button' className={clsx(styles.arrowBtn, styles.rightArrow)}>
				<ArrowRight size={20} />
			</button>
			<div className={styles.dotContainer}>
				{heroSections.map((_, idx) => (
					<button type='button' key={idx} onClick={handleClick} className={styles.dot} />
				))}
			</div>
		</div>
	);
}
