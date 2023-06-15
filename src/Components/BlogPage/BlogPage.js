import React from 'react';
import blogs1 from '../../assets/blog-1.jpg'
import blogs2 from '../../assets/blogs.jpg'
import blogs3 from '../../assets/blogs.jpg'
import BlogCard from '../Home/BlogCard/BlogCard';
import MainBlog from '../MainBlog/MainBlog';
import './BlogPage.css'
import HelmetComponent from '../HelmetComponent/HelmetComponent';

const BlogPage = () => {
    const { blogsDatas } = MainBlog();

    return (
        <div className='all-blogs'>
            <HelmetComponent pageName={"alinar - blogs"} />
            <h2 className='blog-page'>Blogs</h2>
            <p className='blog-page'>Our some recent blogs are here</p>

            <div className='blog-container'>
                {
                    blogsDatas?.map((blog, index) => <BlogCard index={index} blog={blog} key={blog.id} />)
                }
            </div>
        </div>
    );
};

export default BlogPage;