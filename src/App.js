import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";
import UnderConstruction from "./pages/UnderConstruction";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/bookings' element={<BookingPage />} />
				<Route
					path='/confirmed-booking'
					element={<ConfirmedBookingPage />}
				/>
				<Route path='/about' element={<UnderConstruction />} />
				<Route path='/menu' element={<UnderConstruction />} />
				<Route path='/order' element={<UnderConstruction />} />
				<Route path='/login' element={<UnderConstruction />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
