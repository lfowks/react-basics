/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import api from "../../api/config";
import { useState } from "react";
import {getArticles} from "../../services/CompanyService"
import Skeleton from "./Skeleton";
import { Suspense, lazy } from "react";


const FilteredArticles = () => {

  const [data, setData] = useState([])
  const [articles, setArticles] = useState([])
  const [initialArticles, setInitialArticles] = useState([])

  const { isLoading, isError, refetch, isFetching } = useQuery('articles', getArticles ,{ enabled: true, onSuccess:(data)=>{
    
      setArticles(data);
      setInitialArticles(data);
  
  } });


   
   let debounceTime = null;

   const callBackFunction = (value) => {

    let query = value;
    if(query!=''){
      api.get(`suggestions/${query}`).then(result => result).then(data=>{
        setData(data.data);
      });
    }
    else{
      api.get('suggestions').then(result => result).then(data=>{
        setData(data.data);
      });
    }

   }

 const handleChange = (event) => {
  
  clearTimeout(debounceTime);

   debounceTime = setTimeout(() => {
     callBackFunction(event.target.value)        
   }, 500);   

}


const handleClick = (words) => {
  //setValue(event.target.value);
  
  setArticles(initialArticles);

  if(words != "all"){
    let articlesFiltered = initialArticles.filter(item=>{
      return item.text.toLowerCase().includes(words.toLowerCase());
    });
  
    setArticles(articlesFiltered);
  }
}

const ArticlesComponent = (props) => {
  return (
    <div className="resultArticles">
            {
               (isLoading || isFetching) ? 
               <Skeleton/> :
              articles?.map(item => (
               <p key={item.id}> - {item.text}</p>
              ))
            }
        </div>
  )
};


  return (
    <div className="filters-result">
      <div className="filteredArticles">
        <div className="filterSection">
        <input type="text" onChange={handleChange} />
        </div>
        <div className="results">
        <button onClick={() => handleClick("all")} className="keyword-link">
              Clear Filter
            </button>
        <ul>
          {
            
            data?.map(item=>(
              <li onClick={() => handleClick(item.words)} className="keyword-link" key={item.id}>
                {item.words}
              </li>
            ))
          }
        </ul>
        </div>
      </div>      
        {/* <Suspense fallback={<h2>Loading...</h2>}>
        
        </Suspense> */}
        <ArticlesComponent/>
    </div>
  )
}

export default FilteredArticles