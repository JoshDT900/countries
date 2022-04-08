import React from "react";

const Languages = (props) => {
    return (
        <li>{props.lang[1]}</li>
    )
}


const FullCountry = (props) => {
        return (
            <div>
                <h1>{props.countryName}</h1>
                <p>The Capital is: {props.capital}</p>
                <p>Area: {props.area}</p>
                <div>
                    <h3>Languages:</h3>
                    {props.languages.map(language => 
                       <Languages key={language} lang={language}/> 
                    )}                   
                </div>
                <br/>
                <img src={props.flag.png} alt=""/>              
            </div>            
        )    
}

export default FullCountry;