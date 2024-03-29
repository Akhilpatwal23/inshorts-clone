import { Container } from '@mui/material'
import React from 'react'
import './NewsContent.css'
import NewsCard from '../NewsCard/NewsCard'
const NewsContent = ({newsArray,newsResults,loadMore,setloadMore }) => {
  return (
    <Container maxWidth="md">
        <div className='content'>
        <div className='downloadMessage'>
            <span className='downloadText'>For the best experience use inshorts app on your smartphone </span>
            <img height="80%" style={{marginLeft:5}} src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="appstoreButton" />
            <img height="80%" src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="playstoreButton" />
        </div>
        {
          newsArray.map((newsItem)=>(
            <NewsCard newsItem={newsItem} key={newsItem.title}/>    
          ))
        }
       {
        loadMore <= newsResults && (
          <>
          <hr/>
          <button className='loadMore' onClick={()=>setloadMore(loadMore+20)}>
            Load More
          </button>
          </>
        )
       }

        </div>

    </Container>
  )
}

export default NewsContent