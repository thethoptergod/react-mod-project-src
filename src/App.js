import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

function App(props) {
  const [alcNews, setAlcNews] = useState(null);
  useEffect(() => {
    getNews();
    async function getNews(){
      try{
        const response = await axios.get(`https://newsapi.org/v2/everything?qInTitle=Bourbon&language=en&sortBy=publishedAt&apiKey=${props.pass}`);
        const data = await response.data;
        console.log(data);
        setAlcNews(data);
      } catch(error){console.log(error)}
    }
  }, []);
  return (
    <div className="App">
      <h2>Welcome To Cole's Whisk(e)y Reviews!</h2>
      <h3>Recent Bourbon News:</h3>
      {alcNews && (
        <div className="news">
          {alcNews.articles.map((news, index) => 
          <div key={index} id={index} className='articles'>
          <br/>{news.title}<br/>{news.description}<br/>
          </div>)}
        </div>
      )}
    </div>
  );
}

export default App;
