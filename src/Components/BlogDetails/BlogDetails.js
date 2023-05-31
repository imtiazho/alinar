import React from "react";
import "./BlogDetails.css";
import { useParams } from "react-router-dom";
import blogs1 from '../../assets/blog-1.jpg';
import blogs2 from '../../assets/blogs.jpg';
import blogs3 from '../../assets/blogs.jpg';
import MainBlog from "../MainBlog/MainBlog";
import HelmetComponent from "../HelmetComponent/HelmetComponent";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { blogsDatas } = MainBlog();
  const targetedBlog = blogsDatas.find(blog => blog.id === blogId);
  const { id, img, title, shortDecs, oneHead, pointOne, twoHead, pointTwo, threeHead, pointThree, fourHead, pointFour, fiveHead, pointFive, sixHead, pointSix, finishingLine, publishedDate } = targetedBlog;
  console.log(targetedBlog)
  return (
    <div className="blogs">
      <HelmetComponent pageName={"alinar - blog details"} />
      <div className="container">
        <h3>{title}</h3>
        <small>Published on {publishedDate}</small>
        <img src={img} alt="Piture Of blog" />
        <p>
          {shortDecs}{" "}
        </p>

        <div>
          <p>
            <strong>1. {oneHead}</strong>
          </p>
          <p>
            {pointOne}
          </p>
        </div>

        <div>
          <p>
            <strong>2. {twoHead}</strong>
          </p>
          <p>
            {pointTwo}
          </p>
        </div>

        <div>
          <p>
            <strong>3. {threeHead}</strong>
          </p>
          <p>
            {pointThree}{" "}
          </p>
        </div>

        <div>
          <p>
            <strong>4. {fourHead}</strong>
          </p>
          <p>
            {pointFour}
          </p>
        </div>

        <div>
          <p>
            <strong>5. {fiveHead} </strong>
          </p>
          <p>
            {pointFive}
          </p>
        </div>

        <div>
          <p>
            <strong>6. {sixHead}</strong>
          </p>
          <p>
            {pointSix}
          </p>
        </div>

        <div>
          <p>
            {finishingLine}
          </p>
        </div>
      </div>

    </div>
  );
};
export default BlogDetails;
