import React from 'react'
import './NewsCard.css'

const NewsCard = ({newsItem}) => {
    console.log(newsItem);
    const fulldate = new Date(newsItem.publishedAt);
    var date=fulldate.toString().split(' ');
    const hour = parseInt(date[4].substring(0,2));
    const time = hour>12 ? true : false;
    return (
    <div className='newsCard'> 
       <img src={newsItem.urlToImage
        ?newsItem.urlToImage
        :"https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"} 
        alt={newsItem.title}
         className='newsImage'/>
    
    <div className='newsText'>
        <div>
            <span className='title'>{newsItem.title}</span>
            <br/>{" "}
            <span className='author'>
                <a href={newsItem.url} target="_blank" rel="noreferrer">
                    <b>short</b>
                </a>{" "}
                <span className='muted'>
                    by {newsItem.author ? newsItem.author:"unknown"} /{" "} 
                    {time
                    ? `${hour-12}:${date[4].substring(3,5)} PM`
                    : `${hour}:${date[4].substring(3,5)} AM` 
                    } on {date[2]} {date[1]} {date[3]}, {date[0]}
                </span>  
            </span>

        </div>
        <div className='lowerNewsText'>
            <div className='description'>
                {newsItem.description}
            </div>
            <span className='readmore'>
                read more at {" "}
                <a href={newsItem.url} target="_blank" rel="noreferrer">
                    <b>{newsItem.source.name}</b>
                </a>
            </span>
            <br/>
            </div>

    </div>
    </div>
  )
}

export default NewsCard