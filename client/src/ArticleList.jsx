import React from 'react';

function ArticleList({ articles, editedArticle }) {
 
  const editArticle = (article) => {
   editedArticle(article);
  };

  return (
    <div>
      <ul>
        {articles && articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>{article.date}</p>
            <button onClick={() => editArticle(article)}>Update</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
