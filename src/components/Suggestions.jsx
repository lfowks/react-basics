import { useEffect, useRef, useState } from 'react'
import fetchJsonp from "fetch-jsonp";

const Suggestions = () => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState([])

    const inputRef = useRef();

    useEffect(() => {
       fetchJsonp(`${'http://suggestqueries.google.com/complete/search?client=youtube&q='} + ${query}`)
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        const fetchedData = json[1];
        let suggestions = [];
        fetchedData.forEach(element => {
          suggestions.push(element[0]);
        });
        setData([...suggestions]
        );
      });
    
    }, [query]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

return (
    <>
        <input ref={inputRef} type="text" placeholder="search" onChange={handleChange} />
       
        <ul>            
        { 
            data?.length == 0 
            ? 
            <span>Loading...</span> 
            :
            data?.map((item)=>{
                return <li key={item}>{item} <br />
                </li>
            })
        }
        </ul>
    </>
  )
}

export default Suggestions