import { articleData } from '@/data/data'
import React from 'react'
import ArticleCard from './ArticleCard'

const Article = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <div className='w-[83%] mx-auto '>
                {/* Heading */}
                <h1 className=' pb-8 text-4xl text-center md:text-5xl font-black bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-transparent bg-clip-text   ' >Latest Articles</h1>
                {/* Define Grid System for card */}
                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {/* Articles Mapping */}
                    {articleData.map((article)=>{
                        return(
                            <div key={article.id}>
                                {/* Article Card */}
                                <ArticleCard article={article} />
                            </div>
                        )
                    })}
                </div>
        </div>
    </div>
  )
}

export default Article
