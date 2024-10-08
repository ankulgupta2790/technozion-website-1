import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './index.css'; // Optional: for styling if you want to add CSS
import Carousel from '../carousel/carousel';

export function Displayevents() {
  const location = useLocation();
  const { state } = location || {};
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for the selected card (based on previous selection)
        let response;
        if (state && state.dataSource === 'societies') {
          response = await fetch('/dataJSON/societies.json');
        } else if (state && state.dataSource === 'spotlight') {
          response = await fetch('/dataJSON/spotlight.json');
        } else if (state && state.dataSource === 'clubevents') {
          response = await fetch('/dataJSON/clubevents.json');
        }

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [state]);

  if (isLoading) {
    return <p>Loading...</p>; // Display loading indicator while fetching data
  }

  if (!data) {
    return <p>No data available</p>; // Handle case when no data is available
  }

  return (
    <div className="coming-soon">
      {/* Pass the fetched data to the Carousel component */}
      <Carousel data={data} />
    </div>
  );
}

export default Displayevents;