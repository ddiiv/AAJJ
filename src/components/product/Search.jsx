import React,{useState,useEffect} from "react";
import { getProductsByTitle } from "../api/apiFuntions";


const Search=()=>{
  
  const [searches,setSearches] = useState('');
  const [products,setProducts]= useState([]);

  const handleChange=e=>{
    setSearches(e.target.value);
    Filter();
  } 
  
    useEffect(() => {
    getProductsByTitle(searches)
    .then(data => setProducts(data));
    },[searches]);  

    const Filter =()=>{
      products.filter((searches) =>
  {
    if(searches.title.toUpperCase().includes(searches.toUpperCase)){
    return true;}
    return false;
  }
  );}

  return(
    <form>
      <input type='text' name='search' autoComplete="off" placeholder="Buscar por titulo de producto" value={searches}onChange={handleChange}></input>
      <button type="submit" 
        onSubmit={ev=>{
          ev.preventDefault();
          setSearches(ev.tarjet.searches.value);
          }}>Buscar</button>
      <p>Resultados para:{searches}</p>
    </form> 
      
    
  );
}
export default Search;


