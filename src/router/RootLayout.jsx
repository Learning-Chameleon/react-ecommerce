import { Outlet } from "react-router-dom";
import Footer from "../features/Footer/Footer";
import Navbar from "../features/Navbar/Navbar";

function RootLayout() {
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
