import React from 'react';
import './App.css';
import WeatherInfoComponent from './WeatherInfoComponent';

const fetch = require("node-fetch");
const API_KEY = "ca9418e154204e015d546d486eb2373f"

class App extends React.Component {
    state = {
        city : "Melbourne"
    }
    handleChanges = (event) =>
    {
        this.setState({city:event.target.value})
    }
    getWeather = () =>
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}`)
          .then(response => response.json())
          .then(data => {
            this.setState({weather:data})
        })
            .catch(error => {
                console.log(error);
            })


    }
    render() {
        return (
            <div className="App" >

                <header className="App-header">
                    <label for="city">City</label>
                    <input id={"City "}
                        type='text'
                        value={this.state.city}
                        onChange={this.handleChanges}/>
                    <input type="button"
                        onClick={this.getWeather}
                        value={'Get Weather'}/>
                </header>
                <div className="App-content">
                    <WeatherInfoComponent weather={this.state.weather}/>
				</div>
            </div>


            )
    }
}

export default App;
