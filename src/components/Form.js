import React from 'react';
import './style.css';

const Form = props => {
        return (
            <div>
        <div class="task-container columns is-multiline">
        <div class=" card column is-half is-offset-one-quarter">
                <form onSubmit={props.weather}>
                <div>{props.error ? error() : ""}</div>
                <div class="field">
            <div class="control has-icons-left has-icons-right">
  <input class="input is-small" type="text" name="country" placeholder="Country"/>
  <span class="icon is-medium is-left">
    <i class="fas fa-globe"></i>
  </span>
  
</div>
</div>
<div class="field">
<div class="control has-icons-left has-icons-right">
  <input class="input is-small" type="text" name="city" placeholder="City"/>
  <span class="icon is-medium is-left">
    <i class="fas fa-city"></i>
  </span>
  </div>
  
</div>
<button class="button is-info">GET WEATHER</button>
</form>
<h1><i class="fas fa-globe"></i> {props.country} </h1>
<h2><i class="fas fa-city"></i>{props.city}</h2>
<img src={require(`${props.weatherIcon}`)} height="50" width="250" alt="image"/> 

<h2>{props.avgTemp}&deg;</h2>
<h3><i class="fas fa-temperature-high"></i><span>{props.maxTemp}&deg;</span><span> </span><span><i class="fas fa-temperature-low"></i>{props.minTemp}&deg;</span></h3>  
<h2>{props.description}</h2>    
</div>
</div>


</div>

        )
}

const error = props => {
    return (
      <div className="notification is-primary" role="alert">
          <button class="delete"></button>
        Please Enter City and Country...!
      </div>
    );
  };

export default Form;
