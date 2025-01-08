import './globals.css';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 

export const metadata = {
  title: 'thedeveloper',
  description: 'Frontend Web Developer',
};

interface Props {
  children: React.ReactNode; 
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar /> 
        </header>
        <main>{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}
