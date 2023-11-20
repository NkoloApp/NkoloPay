import Image from 'next/image' 
import Link from 'next/link';
import Navbar from './components/NavbarComponent';
import Homeapp from './components/HomeComponent';
import HowComponent from './components/HowComponent';
import ManagementComponent from './components/ManagementComponent';
import DownloadsComponent from './components/DownloadsComponent';
import HireComponent from './components/HireComponent';
import FeedbackComponent from './components/FeedbackComponent';
import FooterComponent from './components/FooterComponent';

export default function Home() {
      return (
        <div className="payment-page">
          <Navbar />
          <Homeapp/>
          <HowComponent/>
          <ManagementComponent/>
          <DownloadsComponent/>
          <HireComponent />
          <FeedbackComponent/>
          <FooterComponent/>
      </div>
    );
}
