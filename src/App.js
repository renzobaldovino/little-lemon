import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/bookings' element={<BookingPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
