import React from 'react';
import './About.css'
import aboutSvg from '../../assets/about.svg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='about'>
            <img src={aboutSvg} alt="" />

            <div className="about-text">
                <h2>About Alinar</h2>
                <p>Our journey has started just as a little Facebook page in 2019, in that time Facebook online shopping was very popular concept here in Bangladesh. We had to work very hard to get where we are now today. We had lots of ups and downs in this timeline of our business but currently we own three remarkably successful stores in the biggest and most popular shopping malls in Bangladesh which are in Jamuna Future Park ,Banshundhara City Shopping Mall and Dhanmondi, Shimanto Square. We can proudly say that it would have never been possible without our customer's appreciation and support, each and every customer who spent a penny in our products has a great role in our success.</p>
                <p>Our Page Facebook Link: www.facebook.com/alinar Alinar has its unique ability to capture our customer's heart through our communication, presentation and unearthly beautiful collections. We always put our customer's choice first while choosing our products. We bring items focusing on our customer's preferences rather attracting customers for our products that is why we have become our customers first choice in case of online purchasing from Facebook in Bangladesh. And we have such good people working in our team who are more like a family to us than employees so that we are able to provide the best to our customers. We not only sell women cloths here we also made a big community here where our customers come and enjoy. As we post regular updates of our collections on our page about our collections, we come live on a regular basis (every Sat, Mon, Wed - 3 pm) our customers have become habituated to see our lives and our collections, they wait for us to come live, to show new collections, they comment on our posts and lives, give reactions to the feedback who purchased from our lives. Alinar is not only a cloth selling page its a community of women in Bangladesh who love to wear salwar kamiz, see new collections, have ideas how to style and wear them, give feedback, see others feedback and interact with other people who buy from us. Alinar is most trustworthy, because we are giving our customers services that require no advance payment. We deliver our goods first then customers pay the prices. So that our customer doesn’t have to worry about paying in advance or getting a false product afterwards, that is why our services got huge popularity in our community. Alinar is open to all new ideas and constructive criticism but we never allow any hate speech or false allegations against anyone in our community. We share a ton of feedback of our products and these feedback speaks volume about our products, quality and services. We never needed to say much about ourselves, our customer's feedback says it all.</p>
            </div>

            <div className='social-media'>
                <h2>Follow us on</h2>
                <div className='social-icon'>
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>

            <Link className='btn' to='/shop'>SHOP NOW <i class="fa-solid fa-arrow-right-long"></i></Link>
        </div>
    );
};

export default About;