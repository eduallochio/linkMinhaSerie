import { BrowserRouter, Routes, Route } from "react-router-dom";
import Videos from "./page/videos";




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