import React from 'react';
import APIService from './APIservice';

const deleteArticle = (article, props) => {
  APIService.DeleteArticle(article.id)
    .then(() => {
      props.deleteArticle(article);
    })
    .catch((error) => {
      console.error('Error deleting article:', error);
    });
};

function ArticleList(props) {
  const editArticle = (article) => {
    props.editArticle(article);
  };

  return (
    <div>
      {props.articles &&
        props.articles.map((article) => {
          return (
            <div key={article.id} className="border p-4 mb-4">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="mb-2">{article.body}</p>
              <p className="text-gray-600">{article.date}</p>
              <div className="flex">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => editArticle(article)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteArticle(article, props)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ArticleList;
