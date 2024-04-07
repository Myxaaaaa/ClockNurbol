import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function Clock() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://658aa7e7ba789a96223780e2.mockapi.io/clocks');
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {data.map((item, index) => (
                <div key={index}>
                    <img src={item.image} alt="image" width='250' height='250' />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span>{item.price}</span>
                </div>
            ))}
        </>
    );
}

export default Clock;
