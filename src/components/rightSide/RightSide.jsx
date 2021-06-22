import React, { useState } from 'react';

const RightSide = () => {

    const api = {
        key: "e8a62e73c60c75421802e36b2657483a",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState([]);



    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    console.log(result);

                });
        }
    }


    return (
        <div className="">

            <div className="weather">
                <div className="col-10 m-3">
                    <h4 style={{ textAlign: 'center' }}>Weather</h4>
                    <input
                        type="text"
                        className='col'
                        placeholder="search by country..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                    <span style={{ fontSize: '11px', color: '#888' }}>example Tashkent or London and etc.</span>
                </div>

                <hr />

                {typeof weather.main != 'undefined'
                    ? (
                        <div className='text-center'>
                            <div className='font-italic'><b>{weather.name}, {weather.sys.country}</b></div>
                            <div><b>Температура:</b> {Math.round(weather.main.temp_max)} <sup>0</sup>c </div>
                            <div><b>Описание:</b> {weather.weather[0].main}</div>
                        </div>
                    )
                    : ('')}
                <hr />

            </div>

        </div>
    )
}

export default RightSide;