import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts') // Example API
      .then((response) => setData(response.data))
      .catch((err) => setError(err.message));
  }, [] /*=> dependecy Array || reRender 1 time */ );
// }, [Hello] /*=> dependecy Array || render 1 time but run also when there is updation in hello function */) 
  return (
    <div>
      <h2>Axios Data Fetch Example</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {data.slice(0, 5).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosComponent;
