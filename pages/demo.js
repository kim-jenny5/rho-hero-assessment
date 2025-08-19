import { heroSections } from '../data/heroData';
import Hero from '../components/Hero/Hero';

export default function Demo() {
	return (
		<div>
			{heroSections.map((section) => (
				<Hero key={section.id} {...section} />
			))}
		</div>
	);
}
