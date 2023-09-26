import React from "react";
import WeatherInfo from "./weatherInfo";
import AppWeather from "./appWeather";
import { useRef } from "react";



export default function weatherForm(props: any): JSX.Element {



  const inputRef: React.MutableRefObject<undefined | any> = useRef();

  const onSearchClick = () => {
    props.doApi(inputRef.current.value);
  };

  return (
    <nav className="container-fluid bg-warning p-2">
      <div className="container">  
        <div className="row">
          <div className="logo col-auto text-light">
            <h2> weather </h2>
          </div>
          <div className="d-flex col-md-4">
            <input
              ref={inputRef}
              id="id_input"
              type="search"
              placeholder="search"
            />
            <button
              onClick={onSearchClick}
              id="search_bth"
              className="btn btn-dark"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
