import React from 'react';
import blogs1 from '../../assets/blogs.jpg'
import blogs2 from '../../assets/blogs.jpg'
import blogs3 from '../../assets/blogs.jpg'
import BlogCard from '../Home/BlogCard/BlogCard';
import './BlogPage.css'

const BlogPage = () => {
    const blogsData = [
        {
            id: "B1",
            img: blogs1,
            title: "Fast Delivery",
            shortDecs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, quas.",
            longDecs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit esse blanditiis distinctio harum explicabo vitae et, adipisci inventore alias, doloribus quo qui quasi at soluta rerum iure obcaecati. Magni nisi doloribus repudiandae veniam? Distinctio quod accusamus quisquam natus eos, in, magnam maiores nihil rerum est cumque culpa cum, nam reiciendis."
        },
        {
            id: "B2",
            img: blogs2,
            title: "A Good Auto Responder",
            shortDecs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, quas.",
            longDecs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit esse blanditiis distinctio harum explicabo vitae et, adipisci inventore alias, doloribus quo qui quasi at soluta rerum iure obcaecati. Magni nisi doloribus repudiandae veniam? Distinctio quod accusamus quisquam natus eos, in, magnam maiores nihil rerum est cumque culpa cum, nam reiciendis."
        },
        {
            id: "B3",
            img: blogs3,
            title: "Home Delevery",
            shortDecs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, quas.",
            longDecs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit esse blanditiis distinctio harum explicabo vitae et, adipisci inventore alias, doloribus quo qui quasi at soluta rerum iure obcaecati. Magni nisi doloribus repudiandae veniam? Distinctio quod accusamus quisquam natus eos, in, magnam maiores nihil rerum est cumque culpa cum, nam reiciendis."
        }
    ]
    return (
        <div className='all-blogs'>
            <h2 className='blog-page'>Blogs</h2>
            <p className='blog-page'>Our some recent blogs are here</p>

            <div className='blog-container'>
                {
                    blogsData.map(blog => <BlogCard blog={blog} key={blog.id} />)
                }
            </div>
        </div>
    );
};

export default BlogPage;