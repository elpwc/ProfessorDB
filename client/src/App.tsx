import React from "react";
import logo from "./logo.svg";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";
import Professor from "./pages/Professor";
import Add from "./pages/AddProfessor";
import About from "./pages/About";
import TestPage from "./pages/TestPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="" element={<Main />}>
					<Route index element={<Home />}></Route>
					<Route path="add" element={<Add />}></Route>
					<Route path="about" element={<About />}></Route>
					<Route path="test" element={<TestPage />}></Route>
					<Route path="professor" element={<Home />}></Route>
					<Route path="professor/:id" element={<Professor />}></Route>
					<Route path="404" element={<ErrorPage />}></Route>
					<Route path="*" element={<ErrorPage />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
