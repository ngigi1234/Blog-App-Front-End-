import React, { useState, useEffect } from 'react';
import APIService from './APIservice';

function Form(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    setTitle(props.article.title);
    setBody(props.article.body);
  }, [props.article]);

  const clearFields = () => {
    setTitle('');
    setBody('');
  };

  const updateArticle = () => {
    APIService.UpdateArticle(props.article.id, { title, body })
      .then((resp) => {
        props.updatedData(resp);
        clearFields(); // Clear fields after successful update
      })
      .catch((error) => console.log(error));
  };

  const insertArticle = () => {
    APIService.InsertArticle({ title, body })
      .then((resp) => {
        props.insertedArticle(resp);
        clearFields(); // Clear fields after successful insertion
      })
      .catch((error) => console.error('Error inserting article:', error));
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {props.article ? (
        <form className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4 ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Please Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
              Blog Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              placeholder="Content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={props.article.id ? updateArticle : insertArticle}
            >
              {props.article.id ? 'Update' : 'Post Blog!'}
            </button>
          </div>
        </form>
      ) : (
        <div>No article selected</div>
      )}
    </div>
  );
}

export default Form;
