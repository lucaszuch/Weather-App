import './App.css';
import React, {Component} from "react";
import Weather from "../Weather";
import 'bootstrap/dist/css/bootstrap.min.css';

//API
const apiKey = "8ddceeacaf8b95fe943c88fc8389dee0";


//CREATES THE STRUCTURE
const Title = () => {
  return (
    <div>
      <h1 className="title-container_title">Weather App</h1>
      <h3 className="title-subtitle">
        Get information on temperature, conditions and more for your city!
      </h3>
    </div>
  )
 }

const Form = ({onSearch}) => {
  return (
    <form onSubmit={e => onSearch(e)}>
      <input type="text" name="city" placeholder="City"/>
      <input type="text" name="country" placeholder="Country"/>
      <button className="form-button btn-primary">Search</button>
    </form>
  )
}

//API CALL
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    wind: undefined,
    error: undefined
  };

  getResults = async e => {
    e.preventDefault();
    const city = e.currentTarget.elements.city.value;
    const country = e.currentTarget.elements.country.value;

    if (city && country) {
      try {
        const apiCall = await fetch(
          `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
        );
        const {main, sys, wind, name, weather} = await apiCall.json();
        this.setState({
          temperature: main.temp,
          city: name,
          country: sys.country,
          humidity: main.humidity,
          description: weather[0].description,
          wind: wind.speed,
          error: ""
        });
      } catch (ex) {
        console.log(ex.message);
      }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        error: "Please enter a valid value."
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-xs-5 title-container">
                <Title />
              </div>
              <div className="col-xs-7 form-container">
                <Form onSearch={this.getResults} />
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  wind={this.state.wind}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;