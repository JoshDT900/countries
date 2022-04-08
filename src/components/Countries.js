import React, { useState } from "react";


const SingleCountries = (props) => {
    return (
        <p>{props.countryName} <button onClick={props.handleShowState}>Show</button></p>
    )
}

const Languages = (props) => {
    console.log(props);
    return (
        <li>{props.lang[1]}</li>
    )
}

const ShowDetailsOfCountry = (props) => {
    return (
        <div>
                <h1>{props.countryName} <button onClick={props.handleShowState}>Hide</button>
                </h1>                
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


const Contries = (props) => {
    const [show, setShow] = useState(true)

    const handleShowState = () => {
        setShow(!show)
    } 

    console.log(props.countryName)

    return (
        <div>
            {show
                ? <SingleCountries
                    countryName={props.countryName}
                    handleShowState={handleShowState}
                  />
                : <ShowDetailsOfCountry 
                    countryName={props.countryName}
                    capital={props.capital}
                    area={props.area}
                    languages={props.languages}
                    flag={props.flag}
                    handleShowState={handleShowState}                    
                  />     
            }
            
                      
        </div>
            
    )    
}

export default Contries;