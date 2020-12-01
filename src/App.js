import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Map from './components/Map'
import Header from './components/Header'

function App() {

  const [eventData, eventDataSet] = useState(null);
  const [loading, loadingSet] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      loadingSet(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json();
      const setData = await events;
      eventDataSet(setData);
      loadingSet(false);
      console.log("eventData", setData)

    };
    fetchEvents();
  }, []);


  return (
    <div className="app">
      {
        !loading && eventData ?
          <>
            <Header />
            <Map events={eventData} />
          </>
          :
          <Loader />
      }
    </div>
  );
};

export default App;
