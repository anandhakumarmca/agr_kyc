import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Info from "./components/info";
import Register from "./components/register";
import SuccessPage from "./components/success";
import "./App.css";
import Kyc from "./Kyc-form/Kyc";
import Dashboard from './pages/Dashboard.jsx';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile.jsx';
import Level from './pages/Level.jsx';
import Wallet from './pages/Wallet.jsx';
import WithdrawRequest from './pages/WithdrawRequest.jsx';
import PaymentHistory from './pages/PaymentHistory.jsx';
import Rewards from './pages/Rewards'; 

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/register" element={<Register />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/level" element={<Level />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/withdrawRequest" element={<WithdrawRequest />} />
          <Route path="/paymentHistory" element={<PaymentHistory/>} />
          <Route path="/rewards" element={<Rewards/>} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
