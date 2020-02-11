import { css } from 'emotion'
import * as React from 'react'
import { abstract, Article } from '../data'

export const ArticleCard: React.FC<Article> = ({ image, title, subTitle, content, commentCount }) => {
  // TODO
  return (
    <li>
      <figure>
        <img src={image} alt={title}/>
        <figcaption><h3>{title}</h3></figcaption>
      </figure>

      {!!subTitle && <h5>{subTitle}</h5>}
      <p className={!!subTitle ? contentMarginBottom: ''}>
        {abstract(content, 200)}
      </p>
      <div className="comment-count">Comment Count: <strong>{commentCount}</strong></div>
    </li>
  )
}


const contentMarginBottom = css `
margin-bottom: 3rem;
`
