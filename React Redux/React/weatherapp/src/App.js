import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const styles = {
    body: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#eeeeee"
    },
    card: {
      width: '20vw',
      padding: '2rem',
      margin: '1.5rem',
      borderRadius: '1rem',
      background: "linear-gradient(135deg, #4398cb, #5cb1b0, #69c7a6)",
      boxShadow: '0px 6px 10px 2px rgba(0, 0, 0, 0.3)',
      textAlign: 'center'
    },
    temp: {
      fontSize: '2.6rem',
      marginBottom: '1rem',
      color: 'white'
    },
    title: {
      fontSize: 24,
      color: 'white'
    },
    desc: {
      fontSize: 24,
      color: 'white',
      marginBottom: '1rem',
    }
  };

  const [temperature, setTemperature] = useState(null);
  const [weatherDescription, setWeatherDescription] = useState('');
  const [weatherImage, setWeatherImage] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.weatherapi.com/v1/current.json?key=3430c7b636f142ea94192017230606&q=Singapore'
        );

        setTemperature(response.data.current.temp_c);
        setWeatherDescription(response.data.current.condition.text);
        setWeatherImage(response.data.current.condition.icon);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();

    const interval = setInterval(() => {
      fetchWeatherData()
    }, 5 * 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.card}>
        <span><img src={weatherImage} /></span>
        <div><p style={styles.title}>Singapore</p></div>
        <div style={styles.temp}>{temperature}<sup>&deg;</sup>C</div>
        <div style={styles.desc}>{weatherDescription}</div>
        <div style={{ color: 'white' }}>Data taken from weatherapi.com</div>
      </div>
    </div>
  );
}

export default App;
