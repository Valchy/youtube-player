import { YouTubePlayerProvider } from './context/YouTubePlayerContext';
import ThemeProvider from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
// import Footer from './components/Footer';
import SearchResults from './routes/SearchResults';
import VideoPlayer from './routes/VideoPlayer';
import PageNotFound from './routes/PageNotFound';

function App() {
	return (
		<YouTubePlayerProvider>
			<ThemeProvider>
				<GlobalStyle />
				<Header />
				<Routes>
					<Route path="/" element={<SearchResults />} />
					<Route path="/video" element={<VideoPlayer />} />
					<Route path="/*" element={<PageNotFound />} />
				</Routes>
				{/* <Footer /> */}
			</ThemeProvider>
		</YouTubePlayerProvider>
	);
}

export default App;
