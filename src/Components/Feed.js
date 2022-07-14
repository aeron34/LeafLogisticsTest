import React from 'react';
import style from '../ComponentsCss/feed.module.css'
import Article from './Article.js'
import FullEntry from './FullEntry.js'
import {useContext, useEffect, useState} from 'react';
import {Context} from '../utilities/Context.js';

function Feed() {

  const context = useContext(Context);

  let view = null;

  if(context.article == null)
    view = (<div className={style.container}>
        {context.view_list.map((x,i) => {
          return <Article key={x.title+i}pic={x.urlToImage}
          desc={x.description}
          title={x.title}/>
        })}
        </div>);
  else
    view = (<FullEntry />)

  return (<>{view}</>)
}

export default Feed
