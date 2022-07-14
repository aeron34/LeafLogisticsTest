import React from 'react';
import {useContext} from 'react';
import {Context} from '../utilities/Context.js';
import style from '../ComponentsCss/article.module.css';

function Article({title, desc, pic}) {
  let pic_ele = null;
  let desc_ele = null;
  const context = useContext(Context);

  if(pic != null)
    pic_ele = <img src={pic} width={300}/>
  else
    pic_ele = (
      <div className={style.missing}>
        <p> No Image Available</p>
      </div>
    );

  if(desc != '')
    desc_ele = (<p className={style.desc}>{desc}</p>)
  else
    desc_ele = (<p className={style.desc}>No description available</p>)

  const displayFull = () => {
    context.selectArticle(title)
  }

  return (
    <div onClick={displayFull}className={style.box}>
      <p className={style.title}>{title}</p>
      {pic_ele}
      {desc_ele}
    </div>
  )
}

export default Article;
