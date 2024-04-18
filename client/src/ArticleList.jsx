import React, { useState, useEffect } from 'react';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/articles');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles: ', error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await fetch(`http://localhost:5000/articles/${editingId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, body }),
        });
        console.log('Article updated with ID: ', editingId);
        setEditingId(null);
      } else {
        await fetch('http://localhost:5000/articles', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, body }),
        });
        console.log('Article added');
      }
      setTitle('');
      setBody('');
      fetchData(); // Fetch articles again to update the list
    } catch (error) {
      console.error('Error adding/updating article: ', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/articles/${id}`, {
        method: 'DELETE',
      });
      console.log('Article deleted with ID: ', id);
      setArticles(articles.filter((article) => article.id !== id));
    } catch (error) {
      console.error('Error deleting article: ', error);
    }
  };

  const handleEdit = (id) => {
    const articleToEdit = articles.find((article) => article.id === id);
    setTitle(articleToEdit.title);
    setBody(articleToEdit.body);
    setEditingId(id);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="title" className="text-gray-600">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body" className="text-gray-600">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="add-event-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {editingId ? 'Update Article' : 'Add Article'}
        </button>
      </form>
      <div className="articles-list mt-6">
        {articles.map((article) => (
          <div key={article.id} className="article-item-container">
            <div className="article-item bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-gray-600">{article.body}</p>
              <button onClick={() => handleEdit(article.id)} className="edit-button bg-yellow-500 text-white px-2 py-1 rounded-md">Edit</button>
              <button onClick={() => handleDelete(article.id)} className="delete-button bg-red-500 text-white px-2 py-1 rounded-md ml-2">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;





// import React from 'react';

// function ArticleList({ articles, editedArticle }) {
 
//   const editArticle = (article) => {
//    editedArticle(article);
//   };

//   return (
//     <div>
//       <ul>
//         {articles && articles.map((article) => (
//           <li key={article.id}>
//             <h2>{article.title}</h2>
//             <p>{article.body}</p>
//             <p>{article.date}</p>
//             <button onClick={() => editArticle(article)}>Update</button>

//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ArticleList;



