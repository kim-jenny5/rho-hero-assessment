import '../globals.css';
import { DM_Sans } from 'next/font/google';

const DMSans = DM_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
	return (
		<main className={DMSans.className}>
			<Component {...pageProps} />
		</main>
	);
}
