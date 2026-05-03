import React, { useState, useEffect } from 'react';

const CurrentPortfolio = () => {
    const [trades, setTrades] = useState([]);
    const [prices, setPrices] = useState({});

    useEffect(() => {
        // Fetch live prices from exchangerate-api.com API
        const fetchPrices = async () => {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            const data = await response.json();
            setPrices(data.rates);
        };

        fetchPrices();
    }, []);

    useEffect(() => {
        // Example trades data
        setTrades([
            { pair: 'EUR/USD', entryPrice: 1.10, quantity: 100 },
            { pair: 'GBP/USD', entryPrice: 1.20, quantity: 50 },
            { pair: 'USD/JPY', entryPrice: 110, quantity: 75 }
        ]);
    }, []);

    return (
        <div>
            <h1>Current Portfolio</h1>
            <table>
                <thead>
                    <tr>
                        <th>Forex Pair</th>
                        <th>Entry Price</th>
                        <th>Current Price</th>
                        <th>Quantity</th>
                        <th>P&L</th>
                    </tr>
                </thead>
                <tbody>
                    {trades.map((trade) => {
                        const currentPrice = prices[trade.pair.split('/')[1]];
                        const pnl = (currentPrice - trade.entryPrice) * trade.quantity;
                        return (
                            <tr key={trade.pair}>
                                <td>{trade.pair}</td>
                                <td>${trade.entryPrice.toFixed(2)}</td>
                                <td>${currentPrice ? currentPrice.toFixed(2) : 'Loading...'}</td>
                                <td>{trade.quantity}</td>
                                <td>${pnl.toFixed(2)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CurrentPortfolio;