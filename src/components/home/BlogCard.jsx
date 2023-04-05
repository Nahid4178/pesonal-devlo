import React from 'react'
import { Link } from 'react-router-dom'
import { blog } from '../data/data'

const BlogCard = () => {
  return (
    
        <div className="blog-card">
            
            <div className="blog-content">
                {blog.map((val) =>(
                    <>
                    <div className="card-image">
                <img src={val.cover} className='img-fluid w-100' alt="blog" />
            </div>
                    <p className="date">
                    {val.date}
                </p>
                <h5 className="title">
               {val.title}
                </h5>
                <p className="desc">{val.desc}</p>
                <Link to='/singleblog/:id' className='button'>Read More</Link>
                    </>
                ))}
                
            </div>
        </div>
   
  )
}

export default BlogCard