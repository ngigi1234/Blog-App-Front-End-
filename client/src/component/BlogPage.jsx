import React, { useState, useEffect } from 'react';
import ArticleList from './ArticleList';
import Form from './Form';


const BlogPage = () => {
    const [articles, setArticles] = useState([]);
    const [editedArticle, setEditedArticle] = useState(null);
  
    useEffect(() => {
      fetch('http://127.0.0.1:5000/get', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setArticles(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);
  
    const editArticle = (article) => {
      setEditedArticle(article);
    };
  
    const updatedData = (article) => {
      const new_article = articles.map(my_article => {
        if (my_article.id === article.id) {
          return article;
        } else {
          return my_article;
        }
      });
      setArticles(new_article);
    };
  
    const openForm = () => {
      setEditedArticle({
        title: "",
        body: ""
      });
    };
  
    const insertedArticle = (article) => {
      const new_articles = [...articles, article];
      setArticles(new_articles);
    };
  
    const deleteArticle = (article) => {
      const new_articles = articles.filter(myarticle => {
        if (myarticle.id === article.id) {
          return false;
        }
        return true;
      });
      setArticles(new_articles);
    };
  return (
    <div className="my-10 space-y-14">
      <div className="mx-10 lg:mx-72 flex flex-col gap-5 justify-center  text-justify items-center">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-center">All Pulse Blog</h1>
        </div> 
        <span className="text-2xl md:text-4xl font-gara font-bold self-start">
        Create Your Blog...
        </span>

        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={openForm}>
            Click here to create a new blog</button>
        </div>

        <ArticleList articles={articles} editArticle={editArticle}deleteArticle={deleteArticle} />
      {editedArticle ? <Form article={editedArticle} updatedData={updatedData} insertedArticle={insertedArticle} /> : null}
      
    </div>
      
    </div>
  );
};
export default BlogPage;
