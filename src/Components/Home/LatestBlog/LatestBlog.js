import React from 'react';
import './LatestBlog.css'
import blogs1 from '../../../assets/blogs.jpg'
import blogs2 from '../../../assets/blogs.jpg'
import blogs3 from '../../../assets/blogs.jpg'
import BlogCard from '../BlogCard/BlogCard';
const LatestBlog = () => {
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
        <div className='latest-blog'>
            <h2 className='sention-title'> <p>Alinar</p>LATEST BLOGS</h2>
            <div className='latest-blog-container'>
                {
                    blogsData.map(blog => <BlogCard blog={blog} key={blog.id} />)
                }
            </div>
        </div>
    );
};

export default LatestBlog;