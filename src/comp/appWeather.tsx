import React, { useEffect, useState } from 'react'
import WeatherForm from './weatherForm'
import WeatherInfo from './weatherInfo';
import axios from 'axios';
export default function appWeather(): JSX.Element {
   let [info, setCity] = useState({});
   useEffect(() => {
      doApi("tel aviv")
   }, [])

   const doApi = async (_town : any) :  Promise<any> =>  {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${_town}&APPID=f24aec7e5be5e7edcb59f06e65550e02&units=metric`
      let response = await axios.get(url)
      console.log(response.data);
      setCity(response.data)
   }

   return (
      <div>
         <React.Fragment>
            <WeatherForm doApi={doApi} />
              <WeatherInfo info={info} />
         </React.Fragment>

      </div>);

}


