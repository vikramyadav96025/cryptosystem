import React, { useState } from 'react';

const AlertForm = ({ setPriceAlert }) => {
  const [alertPrice, setAlertPrice] = useState('');
  const [cryptoId, setCryptoId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPriceAlert({ cryptoId, alertPrice });
    setAlertPrice('');
    setCryptoId('');
  };

  return (
    <form className="alert-form" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Set Alert Price"
        value={alertPrice}
        onChange={(e) => setAlertPrice(e.target.value)}
        required
      />
      <button type="submit">Set Alert</button>
    </form>
  );
};

export default AlertForm;
