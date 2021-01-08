# Weather APP

## Features:
This weather app was built as a first personal experience using APIs. This webapp requests data from the openmapweather APi and returns current temperature (°C & °F), humidity, wind speed and a briafly description of the conditions. In order to create a mobile friendly interface, Bootstrap was added to the project. 

## Requisites:
That's a react app, hit `npm start` and let it flow!!! Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies/Frameworks:
- React;
- HTML;
- CSS;
- JS;
- Bootstrap

## How to set up:
### Step 1:
In the app.js, import all the required dependencies:

    import './App.css';
    import React, {Component} from "react";
    import 'bootstrap/dist/css/bootstrap.min.css';

### Step 2:
Create the title and the form to receive the user input:

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

### Step 3:
In the Weather.js create the Weather object with the desired parameters available. It originally only display the temperature in celsius, so I've added the F conversion. It should render all the data fetched. Export the file to be used in the app.js.

    const Weather = ({
      city,
      country,
      temperature,
      humidity,
      description,
      wind,
      error
    })
    
 ### Step 4:
 We set the current state of the required data to `undefined` and use a asyn function to fetch the JSON from the API. It should them set the state for the returned information.
 
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
      
### Step 5:
At last, we render the form with the required data.

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

## Extra notes:
I've found a available API key, as it is still online and widely available, I haven't hidden the information.
