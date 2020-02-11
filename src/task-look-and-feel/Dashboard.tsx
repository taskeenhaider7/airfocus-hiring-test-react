import * as React from 'react'
import { articles } from '../data'
import { ArticleCard } from './ArticleCard'
import './Styles.css'
export const Dashboard: React.FC = () => {
  // TODO
  return (
    <div className={`articles`}>
      <ul>
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </ul>
    </div>
  )
}
