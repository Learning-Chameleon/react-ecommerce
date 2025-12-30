import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../features/Footer/Footer";
import Navbar from "../features/Navbar/Navbar";
import { setupInterceptors } from "../api/axiosInstance";

function RootLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    setupInterceptors(navigate);
  }, [navigate]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default RootLayout;
