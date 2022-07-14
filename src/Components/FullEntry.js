import React, {useContext} from 'react';
import style from '../ComponentsCss/fullentry.module.css'
import {Context} from '../utilities/Context.js';
import parse from 'html-react-parser';

function FullEntry () {
  const context = useContext(Context);
  const data = context.article;

  let author = data.author;

  if(author == null)
  {
      author = "Not Provided"
  }

  const handleClick = (e) => {
    e.preventDefault();
    context.selectArticle(null)
  }

  return (
    <div className={style.box}>
      <h2> {data.title} </h2>
      <p className={style.from}> Published By: {data.source.name}</p>
      <p className={style.from}> Written By: {author} </p>
      <img src={data.urlToImage}/>
      <br/>
      {parse(data.content)}
      <br/>
      <br/>
      <span> Click here to read <a target="_blank" href={data.url}> The Full Article </a></span>
      <button onClick={handleClick}> Back To News Feed </button>
    </div>
  )
}


export default FullEntry;
