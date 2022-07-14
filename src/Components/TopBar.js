import React, {useContext} from 'react'
import {Context} from '../utilities/Context.js';
import style from '../ComponentsCss/topbar.module.css'
import {countries} from '../utilities/countries'
function TopBar() {

  const context = useContext(Context);

  const switchArea = (e) => {
    context.getNews(`${e.target.value}`)
  }

  const search = (e) => {
    e.preventDefault();
    const perm = context.perm_list;
    const regx = new RegExp(e.target.value,'i');
    const new_list = perm.filter(x => {
       return regx.test(x.title)
     });
     context.search(new_list);
   }

    return (
      <div className={style.topbar}>
        <div>
          <p> Top News </p>
        </div>
        <div>
          <input placeholder='Search Article By Title'
          onChange={search} type='text' />
        </div>
        <div>
          <label htmlFor="area">Select A Country: </label>
          <select name="area" defaultValue="us" id="area" onChange={switchArea}>
            {countries.map(coun => {
              let select=""
              if(coun == "us")
              {
                select="selected"
              }
              return (<option key={coun}value={coun}>{coun}</option>)
            })}
          </select>
        </div>
      </div>
    )
}

export default TopBar
