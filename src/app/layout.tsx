// src/app/layout.tsx


import './globals.css'; // Import your global styles
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
