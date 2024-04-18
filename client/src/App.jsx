import React, { useState, useEffect } from 'react';
import ArticleList from './ArticleList';

function App() {
  const [articles, setArticles] = useState([]);
  const [editedArticle, seteditedArticle]= useState([])


  useEffect(() => {
    fetch('http://127.0.0.1:5000/get')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setArticles(data); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const editArticle = (article) => {
    editedArticle(article);
  };

  return (
    <div>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
