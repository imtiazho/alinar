import React from "react";
import "./BlogDetails.css";
import { useParams } from "react-router-dom";
import blogs1 from '../../assets/blogs.jpg';
import blogs2 from '../../assets/blogs.jpg';
import blogs3 from '../../assets/blogs.jpg';

const BlogDetails = () => {
  const { blogId } = useParams();
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
  const targetedBlog = blogsData.find(blog => blog.id === blogId);
  return (
    <div className="blogs">
      <div className="container">
        <h3>{targetedBlog.title}</h3>
        <small>Published on July 12. 2022</small>
        <img src={targetedBlog.img} alt="Piture Of blog" />
        <p>
          The internet is overflowing with thoughts and advice on how to get
          along with your apartment roommate. We want you to be a good roommate,
          not because of the rules, but because of you. These are not rules –
          this is Roommate Etiquette 101, the path to being good roommates by
          doing what's right by others.{" "}
        </p>

        <div>
          <p>
            <strong>1. Be decent in the bathroom</strong>
          </p>
          <p>
            Keep the bathroom clean because nobody likes a dirty or smelly
            bathroom. Clean toothpaste and hair off the counter. Put your
            toothbrush and hairbrush away. No one wants to touch those. Don't
            take too long in the shower and be considerate of not using up the
            hot water when others are waiting. And for goodness sake, replace
            the toilet paper when you use up the roll. Bonus points for putting
            it on the right way up, too.
          </p>
        </div>

        <div>
          <p>
            <strong>2. Ask before you borrow</strong>
          </p>
          <p>
            Don't borrow anything from your roommate without express permission
            beforehand. If you've asked before, even if the answer was yes, ask
            again. And if you do borrow something from your roommate – clothes,
            hairspray, juice, whatever – return or replace it as soon as you
            can.
          </p>
        </div>

        <div>
          <p>
            <strong>3. Don’t bring people without informing</strong>
          </p>
          <p>
            If you have a significant other, be respectful of everyone else in
            the apartment. Your SO shouldn't stay too often or too long. They
            shouldn't regularly use common areas alone. Your other roommates
            might not feel comfortable hanging out with them.{" "}
          </p>
        </div>

        <div>
          <p>
            <strong>4. Do your chores</strong>
          </p>
          <p>
            Yes, you probably should have a plan to deal with common chores.
            Share them equally and when it's your turn, do them. But start with
            focusing on your own messes. If you eat or cook, clean up, and don't
            pile up. Do your dishes. If you make a mess, pick it up. If the
            trash is full or smelly, take it out. See what chores you can split.
            If one of you loves to cook, the other should clean. If one of you
            doesn't hate vacuuming, the other should do the laundry. Make it
            fun!
          </p>
        </div>

        <div>
          <p>
            <strong>5. Be fiscally responsible </strong>
          </p>
          <p>
            Pay your half of the rent and utilities in full and on time. Period.
          </p>
        </div>

        <div>
          <p>
            <strong>6. Be honest</strong>
          </p>
          <p>
            Always be truthful with your roommate. If you break something, cop
            to it. If your boyfriend or girlfriend needs to stay longer than you
            expect, ask first, not after. If you're going to be late with the
            rent, discuss it sooner rather than later. If you violate any of the
            above suggestions, apologize.
          </p>
        </div>

        <div>
          <p>
            If you feel someone isn't following Roommate Etiquette 101, don't
            get all in a huff. Be sensitive, because what's a big deal right now
            might not seem so big in a different light.
          </p>
        </div>
      </div>

    </div>
  );
};
export default BlogDetails;
