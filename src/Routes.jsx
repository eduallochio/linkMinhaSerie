import { BrowserRouter, Routes, Route } from "react-router-dom";
import Videos from "./components/Videos";





function AppRoutes () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/videos" element={ <Videos /> }> </Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes