import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { heroSections } from '../data/heroData';
import Hero from '../components/Hero/Hero';
import styles from '../styles/demo.module.css';

export default function Demo() {
	const [currentSection, setCurrentSection] = useState(0);
	const heroCount = heroSections.length;

	const handlePrev = () => currentSection > 0 && setCurrentSection(currentSection - 1);
	const handleNext = () => currentSection < heroCount - 1 && setCurrentSection(currentSection + 1);

	return (
		<div className={styles.container}>
			<button
				type='button'
				onClick={handlePrev}
				disabled={currentSection === 0}
				className={clsx(styles.arrowBtn, styles.leftArrow)}
			>
				<ArrowLeft size={20} />
			</button>
			{heroSections.map((section, idx) => {
				const { src, alt } = section.backgroundImage;
				const { titlePlacement, descriptionPlacement } = section.layout;

				return (
					<div
						key={section.id}
						className={clsx(
							styles.heroSection,
							idx !== currentSection && styles.hidden,
							section.theme === 'dark' ? styles.dark : styles.light
						)}
					>
						<Hero
							src={src}
							alt={alt}
							title={section.title}
							description={section.description}
							placeTitle={titlePlacement}
							placeDescription={descriptionPlacement}
						/>
					</div>
				);
			})}
			<button
				type='button'
				onClick={handleNext}
				disabled={currentSection === heroCount - 1}
				className={clsx(styles.arrowBtn, styles.rightArrow)}
			>
				<ArrowRight size={20} />
			</button>
			<div className={styles.dotContainer}>
				{heroSections.map((_, idx) => (
					<button
						type='button'
						key={idx}
						onClick={() => setCurrentSection(idx)}
						className={clsx(styles.dot, idx === currentSection && styles.active)}
					/>
				))}
			</div>
		</div>
	);
}
