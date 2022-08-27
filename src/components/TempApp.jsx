import React, { useState, useEffect } from 'react';
import './css/style.css';
const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Tulsipur");

    useEffect(()=>{
        const fetchApi = async()=>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5032c8d1ff71d2d14d02734208fb5de3`
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setCity(data.main);
        }
        fetchApi();

    },[search]);
  return (
    <>
       <div className="box">
        <div className="inputData">
            <input type="search" className="inputField" value={search}
            onChange={(even)=>{
                 setSearch(even.target.value);
            }}/>
        </div>
        {!city ? (
            <p className="errorMsg">Not Found data</p>
        ) : (
             <div>
                <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                        {city.temp}&#176;Cel
                    </h1>
                    <h3 className="tempmin_max">Min: {city.temp_min}&#176; Cel | Max: {city.temp_max}&#176; Cel</h3>
                </div>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave three"></div>
             </div>
            )
        }
       </div>
    </>
  )
}

export default TempApp;
