import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const nextRelease = new Date(now);
            nextRelease.setHours(nextRelease.getHours() + (24 - now.getHours()));
            nextRelease.setMinutes(0);
            nextRelease.setSeconds(0);

            const diff = nextRelease - now;
            setTimeLeft({
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-blue-900 p-6 rounded-lg mb-6 text-center">
            <h2 className="text-xl font-bold mb-4">Next Portfolio Release In:</h2>
            <div className="text-4xl font-bold">
                {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
        </div>
    );
};

export default CountdownTimer;