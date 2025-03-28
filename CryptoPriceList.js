import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoPriceList = ({ setAlertPrice }) => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,litecoin',
          },
        });
        setCryptos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchPrices();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="crypto-list">
      {cryptos.map((crypto) => (
        <div key={crypto.id} className="crypto-card">
          <h3>{crypto.name}</h3>
          <p>${crypto.current_price}</p>
          <button onClick={() => setAlertPrice(crypto.id)}>Set Alert</button>
        </div>
      ))}
    </div>
  );
};

export default CryptoPriceList;
