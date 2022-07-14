import React from 'react';
import {Component} from 'react'
import Feed from './Components/Feed'
import TopBar from './Components/TopBar'
import {Context} from './utilities/Context.js'

class Container extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      perm_lists: {},
      article: null,
      country: 'us',
      view_list: [],
    }
    this.getNews('us');
  }

  getNews = (country) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=4bd3c62de9dc4313b80fa3ec011c80b7`)
    .then(x => x.json()).then(obj => {
      let new_list = {...this.state.perm_lists};
      new_list[country] = obj.articles;
      this.setState({
        country: country,
        perm_lists: new_list,
        view_list: obj.articles});
    })
  }

  searchUpdateList = (new_list) => {
      this.setState({view_list: new_list})
  }

  selectArticle = (title) => {
    const {perm_lists, country} = this.state;
    if(title != null)
    {
      const article = perm_lists[country].find((entry) => entry.title == title)
      this.setState({article: article})
    } else {
      this.setState({article: null})
    }
  }

  render()
  {
    let feed = null;

    const {perm_lists, country} = this.state;

    if(perm_lists[country] != null)
      feed = <Feed/>


    return (
      <div style={{width: '50%',margin: 'auto'}}>
        <Context.Provider value={{
          getNews: this.getNews,
          selectArticle: this.selectArticle,
          search: this.searchUpdateList,
          article: this.state.article,
          view_list: this.state.view_list,
          perm_list: perm_lists[country]}}>
          <TopBar />
          {feed}
        </Context.Provider>
      </div>
    )
  }
}

export default Container;
