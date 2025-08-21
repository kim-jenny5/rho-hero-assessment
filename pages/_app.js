import '../globals.css';
import { Manrope, Inter } from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export default function App({ Component, pageProps }) {
	return (
		<main className={clsx(inter.className, manrope.variable)}>
			<Component {...pageProps} />
		</main>
	);
}
