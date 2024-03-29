import { useState,useEffect } from 'react';
import './App.css';
import Navinhorts from './components/Navinhorts';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import Footer from './components/Footer/Footer';


function App() {
 const [category, setcategory] = useState("general")
 const [newsArray, setnewsArray] = useState([])
 const [newsResults, setnewsResults] = useState()
 const [loadMore, setloadMore] = useState(20)
 console.log(process.env);
 const newsApi= async()=>{
  try{
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const news= await axios.get(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`); 
   setnewsArray(news.data.articles);
   setnewsResults(news.data.totalResults);
  } catch(error){
    console.log(error);
  }
};
useEffect(() => {
  newsApi();// eslint-disable-next-line
},[newsResults,category,loadMore]);
 return (
    <div className="App">
     
        <Navinhorts setcategory={setcategory} />
        
        <NewsContent setloadMore={setloadMore} loadMore={loadMore} newsArray={newsArray} newsResults={newsResults}/>
        <Footer/>
      
    </div>
  );
}

export default App;
