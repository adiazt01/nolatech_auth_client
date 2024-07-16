import { BrowserRouter, Routes } from "react-router-dom";
import axios from "./api/axiosConfig";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { DashboardPage } from "./views/DashboardPage";
import { LandingPage } from "./views/LandingPage";
import { LoginPage } from "./views/LoginPage";
import { RegisterPage } from "./views/RegisterPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import useAuthStore from "./store/authStore";

export function App() {
  const { setIsAuthenticated, isAuthenticated, setUserInformation } =
    useAuthStore((state) => state);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const res = await axios.get("/auth/verify");
        setIsAuthenticated(true);
        setUserInformation({
          username: res.data.username,
          email: res.data.email,
        });
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    verifyAuth();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
