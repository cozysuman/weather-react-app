import React, { Component } from 'react'
import Weather from './components/Home';
import Form from './components/Form';
import Footer from './components/Footer';
const Api_Key = "429736441cf3572838aa10530929f7cd";

class App extends Component {
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      avgTemp:undefined,
      minTemp:undefined,
      main:undefined,
      maxTemp:undefined,
      description:'',
      error: false,
      icon : './img/weather.gif'
    };
  
  this.weatherIcon={
    drizzle:'./img/drizzle.gif',
    fog:'./img/fog.gif',
    rain:'./img/rain.gif',
    snow:'./img/snow.gif',
    sunny:'./img/sunny.gif',
    thunderstrom:'./img/thunderstrom.gif'
  };
}

getWeatherIcon(icon,id){
  switch(true){
    case id>=200 && id<=232:
      this.setState({icon:this.weatherIcon.thunderstrom})
      break;
    case id>=300 && id<=321:
      this.setState({icon:this.weatherIcon.drizzle})
      break;
    case id>=500 && id<=531:
      this.setState({icon:this.weatherIcon.rain})
      break;
    case id>=600 && id<=622:
      this.setState({icon:this.weatherIcon.snow})
      break;
    case id>=701 && id<=781:
      this.setState({icon:this.weatherIcon.thunderstrom})
      break;
    case id===800:
      this.setState({icon:this.weatherIcon.sunny})
      break;
    case id>=801 && id<=804:
      this.setState({icon:this.weatherIcon.fog})
      break;
    default:
      this.setState({icon:this.weatherIcon.sunny})
      break;
  }
}

  intoCelsius(temp){
    let celsius = Math.floor(temp - 273.15);
    return celsius;
  }
  getData = async e => {
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    if(city && country){



    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`)
    const response = await apiCall.json();
    console.log(response);
    this.setState(
      {
        city: response.name,
        country:response.sys.country,
        main: response.weather[0].main,
        minTemp: response.main.temp_min,
        maxTemp: response.main.temp_max,
        avgTemp: response.main.temp,
        description: response.weather[0].description,
        error:false
      }
    )

    this.getWeatherIcon(this.weatherIcon,response.weather[0].id)
    }

    else{
      this.setState({
        error:true
      }
      )
    }
  }

  render() {
    return (
      <div>
        <Weather/>
        <Form weather={this.getData}
        error={this.state.error}
        city={this.state.city} 
        country={this.state.country}
        minTemp={this.intoCelsius(this.state.minTemp)}
        maxTemp={this.intoCelsius(this.state.maxTemp)}
        avgTemp={this.intoCelsius(this.state.avgTemp)}
        description= {this.state.description}
        weatherIcon= {this.state.icon}
        />
        <Footer/>
      </div>
    )
  }
}
export default App;