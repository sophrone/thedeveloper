import './globals.css';
import Navbar from './components/Navbar'; // Adjust the path as needed
import Footer from './components/Footer'; // Import the Footer component

export const metadata = {
  title: 'thedeveloper',
  description: 'Frontend Web Developer',
};

interface Props {
  children: React.ReactNode; // Explicitly define the type of children
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar /> {/* Navbar is used here */}
        </header>
        <main>{children}</main>
        <Footer /> {/* Footer is now included */}
      </body>
    </html>
  );
}