import React from "react";

export default function weatherInfo(props: any): any {
  let info = props.info;
  console.log(info);

  return (
    <div className="container text-center mt-3">
      <h2 className="display-4">weather of {info.name}</h2>
      {info.weather && (
        
        <div>
          {/* <img src=`${info.}` alt="a" /> */}
          <h3>Condition : {info.weather[0].main}</h3>
          <h3>Temperature : {info.main.temp} c</h3>
          <h3>Wind : {info.wind.speed} kmh </h3>
        </div>
      )}
    </div>
  );
}
