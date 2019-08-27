import React from 'react';
import PropTypes from 'prop-types';

class WeatherInfoComponent extends React.Component {
	
	render() {
		console.log(this.props.weather);
		if (this.props.weather == null) {
			return (
				<React.Fragment>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<h1>Weather in {this.props.weather.name}, {this.props.weather.sys.country}</h1>
					<p>{parseInt(this.props.weather.main.temp_max - 273.15)}°C | {this.props.weather.weather[0].description} </p>
					<img src={"https://openweathermap.org/img/wn/" + this.props.weather.weather[0].icon + "@2x.png"} />
					
					<p><b>&ensp;Wind Speed</b> &ensp;{this.props.weather.wind.speed}m/s</p>
					<p><b>Pressure</b> &ensp;{this.props.weather.main.pressure} hpa </p>
					<p><b>Humidity</b> &ensp; &ensp; &ensp; {this.props.weather.main.humidity}% </p>
					<p><b>Sunrise</b> &ensp; &ensp; &ensp; {this.props.weather.sys.sunrise} </p>
					<p><b>Sunset</b> &ensp; &ensp; &ensp; {this.props.weather.sys.sunset} </p>
					<p><b> &ensp;&ensp;Coord</b>  &ensp;{this.props.weather.coord.lon}, {this.props.weather.coord.lat} </p>


				</React.Fragment>
			);
		}
	}
}

WeatherInfoComponent.propTypes = {
	weather : PropTypes.object,
}
export default WeatherInfoComponent;