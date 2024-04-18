import React, { useState, useEffect } from 'react';
import ArticleList from './ArticleList';

function App() {
  // const [articles, setArticles] = useState([]);
  

  // useEffect(() => {
  //   fetch('http://127.0.0.1:5000/get')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setArticles(data); // Update state with fetched data
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }, []); // Empty dependency array ensures the effect runs only once after the initial render

  // const editArticle = (article) => {
  //   // Implement your edit logic here
  // };

  // const deleteArticle = (id) => {
  //   fetch(`http://127.0.0.1:5000/delete/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(() => {
  //       setArticles(articles.filter(article => article.id !== id)); // Update state to remove deleted article
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // };

  return (
    <div>
      <h1>Articles</h1>
      <ArticleList/>
      {/* <ArticleList articles={articles} editArticle={editArticle} deleteArticle={deleteArticle} /> */}
    </div>
  );
}

export default App;
