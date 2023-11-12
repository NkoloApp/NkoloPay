import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 
import './styles/InvoicePage.css'; 
import './styles/PayingPage.css'; 
import './styles/LoadingPage.css'; 
import './style.css'; 
import MakePayment from './components/MakePayment'; 
import PayingNumber from './components/PayingNumber';
import LoadingComponent from './components/LoadingComponent';
import { Route,Routes } from 'react-router-dom';
import PaymentSuccessful from './components/PaymentSuccessful';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App nk-bg-light p-5"> 
      <Routes>
        <Route path="/" Component={Landing} />
        <Route exact path="/paywithnkolo/:id" Component={MakePayment} />
        <Route exact path="/paywithnkolo/:id/pay" Component={PayingNumber} />
        <Route exact path="/paywithnkolo/:id/paid" Component={PaymentSuccessful} />
      </Routes>
    </div>
  );
}

export default App;
