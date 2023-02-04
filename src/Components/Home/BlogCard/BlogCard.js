import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css'

const BlogCard = ({ blog }) => {
    const { id, img, title, shortDecs } = blog;
    return (
        <div className='blog-card'>
            <img src={img} alt="" />
            <div className='author'>
                <div className='blog-degi'>
                    <i className="fa-regular fa-circle-user"></i>
                    <p>by Admin</p>
                </div>

                <div className='blog-degi'>
                    <i className="fa-regular fa-message"></i>
                    <p>1 Commnets</p>
                </div>
            </div>
            <h3>{title}</h3>
            <p>{shortDecs.length > 70 ? shortDecs.slice(0, 70) + "..." : shortDecs}</p>
            <Link className='btn' to={`/blogDetails/${id}`}>Read More</Link>
        </div>
    );
};

export default BlogCard;