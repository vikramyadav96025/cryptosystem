import React, { useState } from 'react';
import './App.css';
// import CryptoPriceList from './components/cryptoPriceList';
import CryptoPriceList from './CryptoPriceList';
// import AlertForm from './components/alertForm';
import AlertForm from './AlertForm';
const App = () => {
  const [alert, setAlert] = useState(null);
  const [priceAlert, setPriceAlert] = useState(null);

  // Set price alert
  const handleSetAlert = ({ cryptoId, alertPrice }) => {
    setAlert({ cryptoId, alertPrice });
  };

  return (
    <div className="container">
      <h1>Crypto Price Alert</h1>
      <CryptoPriceList setAlertPrice={handleSetAlert} />
      <AlertForm setPriceAlert={setPriceAlert} />
      {alert && (
        <div>
          <h2>Alert Set!</h2>
          <p>
            You will be notified when the price of {alert.cryptoId} hits ${alert.alertPrice}.
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
