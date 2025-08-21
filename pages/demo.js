import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { heroSections } from '../data/heroData';
import Hero from '../components/Hero/Hero';
import styles from '../styles/demo.module.css';

export default function Demo() {
	const [currentSection, setCurrentSection] = useState(0);
	const heroCount = heroSections.length;

	const handlePrev = () =>
		currentSection > 0 && setCurrentSection((prev) => prev - 1);
	const handleNext = () =>
		currentSection < heroCount - 1 && setCurrentSection((prev) => prev + 1);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'ArrowLeft') {
				e.preventDefault();
				handlePrev();
			} else if (e.key === 'ArrowRight') {
				e.preventDefault();
				handleNext();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [currentSection]);

	const renderHero = () =>
		heroSections.map((section, idx) => {
			const { src, alt } = section.backgroundImage;
			const { titlePlacement, descriptionPlacement } = section.layout;

			return (
				<div
					key={section.id}
					className={clsx(
						styles.heroWrapper,
						idx !== currentSection && styles.hidden,
						section.theme === 'dark' ? styles.dark : styles.light
					)}
					aria-label={`Hero ${idx + 1} of ${heroCount}`}
					aria-hidden={idx !== currentSection}
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
		});

	return (
		<div className={styles.wrapper} role='region' aria-label='Hero carousel'>
			<button
				type='button'
				onClick={handlePrev}
				disabled={currentSection === 0}
				className={clsx(styles.arrowBtn, styles.leftArrow)}
				aria-label='Previous hero'
			>
				<ArrowLeft aria-hidden='true' focusable='false' size={20} />
			</button>
			{renderHero()}
			<button
				type='button'
				onClick={handleNext}
				disabled={currentSection === heroCount - 1}
				className={clsx(styles.arrowBtn, styles.rightArrow)}
				aria-label='Next hero'
			>
				<ArrowRight aria-hidden='true' focusable='false' size={20} />
			</button>
			<nav className={styles.dotNav} aria-label='Navigate through heroes'>
				{heroSections.map((_, idx) => (
					<button
						type='button'
						key={idx}
						onClick={() => setCurrentSection(idx)}
						className={clsx(
							styles.dot,
							idx === currentSection && styles.active
						)}
						aria-label={`Go to hero ${idx + 1}`}
						aria-current={idx === currentSection && 'page'}
					/>
				))}
			</nav>
		</div>
	);
}
