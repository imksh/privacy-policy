import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Scroll from "./components/common/Scroll";
import { useAuthStore } from "./store/useAuthStore";
import NotFound from "./components/common/NotFound";
import Unauthorized from "./components/common/Unauthorized";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import SidebarLayout from "./components/layout/SidebarLayout";

const App = () => {
  const { getMe } = useAuthStore();

  useEffect(() => {
    // Non-blocking check for token if present
    if (localStorage.getItem("token")) {
      getMe();
    }
  }, [getMe]);

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Toaster position="top-right" />
      <Scroll />
      <Routes>
        {/* Official Public Privacy Policy Routes for Google Play Store */}
        <Route path="/" element={<PrivacyPolicy />} />

        <Route path="/githisab/privacy-policy" element={<PrivacyPolicy />} />

        {/* Template Starter Demo Route */}
        <Route path="/" element={<Home />} />

        {/* Auth Page Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <SidebarLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Fallback Route */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
