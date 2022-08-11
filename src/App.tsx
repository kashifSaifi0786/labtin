import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Landingpage from "./First/Landingpage";
import TestPakage from "./second/TestPakage";
import Booking from "./Third/Booking";
import Report from "./ReportsPage/Report";
import OrderSummary from "./OrderSummary";
import ShowLabs from "./components/ShowLabs";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
  Navigate,
} from "react-router-dom";
import BottomNavigationElement from "./components/BottomNavigationElement";
import Radiology from "./HealthTests/Radiology/Radiology";
import PrescriptionDialog from "./components/PrescriptionDialog";
import PakagesTab from "./second/PakagesTab";
import ListPakage from "./DesktopPages/ListPakage";
import Login from "./components/Login";
import SignupPage from "./components/SignupPage";
import Fotter from "./components/Fotter";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/AuthSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

function App() {
  const Loggeduser = useSelector(selectUser) || localStorage.getItem("user");
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(login(user.providerData));
      localStorage.setItem("user", JSON.stringify(user.providerData));
    } else {
      dispatch(logout());
      localStorage.removeItem("user");
    }
  });
  return (
    <div className="App">
      {Loggeduser ? (
        <BrowserRouter>
          {<Header />}
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/MyReport" element={<Report />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/TestPakage" element={<PakagesTab />} />
            <Route path="/onSummary" element={<OrderSummary />} />
            <Route path="/Radiology" element={<Radiology />} />
            <Route path="/BookingPackages" element={<ListPakage />} />
            <Route path="/selectLab" element={<ShowLabs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Fotter />
          {<BottomNavigationElement />}
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
