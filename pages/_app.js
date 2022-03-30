import '../styles/globals.scss';
import Navbar from '../components/navbar/navbar';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
