import React from 'react';
import { Link } from 'react-router-dom';
import './TermsAndPrivacy.css';

const TermsAndPrivacy = () => {
    return (
        <div>
            <div id="top-banner">
                <div class="privacy-terms-container">
                    <h5>Privacy - Policy</h5>
                    <p><Link to='/'>Home</Link> / <Link to='/termsAndPrivacy'>Privacy</Link></p>
                </div>
            </div>

            <div id="main-details">
                <div class="privacy-terms-container">
                    <h3>Privacy Policy</h3>
                    <p>Last modified: February 02, 2023</p>

                    <div>
                        <p>We take data privacy seriously and are committed to protecting your privacy at all costs. We have never sold your inform Alinarbd comation to any third party for financial gains, advertising, or for any other reason and we assure you that we won’t even in the future. </p>
                        <p>We take care that none of the information that we collect is sold, put up for rent, leased, given away or used for spamming you unnecessarily. This Privacy Policy explains, in depth, what data we collect, how we collect it, where and how we store or use it, and what rights you have over it.</p>
                    </div>

                    <div>
                        <p><strong>Return policy</strong></p>
                        <p>You will have to provide us customer name, number and address so that we may issue warranty service as applicable. In case of customer returns, we will only accept the returned good if it is returned back to us in intact condition. Body Dented / damaged packaging / seal broken products or any other condition which makes the product unsellable, will not be acceptable to claim under return policy</p>
                    </div>

                    <div>
                        <p><strong>Search Features</strong></p>
                        <p>Alinar provides various search features, such as real time search suggestions as you type a search query. When you conduct a search we collect information from your experience, such as your search queries. Alinar may base suggestions on aggregated searches across all users. A variety of third party providers help power Alinar search and sponsored search services. We may share your search query, IP address, and other depersonalized information from your web browser with these search partners. These third party providers may use this information, as well as your search results clicks, to provide more relevant advertising and search results for search product improvement, research and analysis, and to help detect and defend against fraudulent activity on sponsored or contextual search results. As a web directory and search engine, and as an advertising publisher, you will find various links on our site, including but not limited to sponsored search results and sponsored listings.</p>
                    </div>

                    <div>
                        <p><strong>Security</strong></p>
                        <p>We maintain a level of security at all times in the processing of data and personal data that is appropriate to prevent unauthorized access to, modification, disclosure or loss of data and personal data. This includes both technical and organizational measures (such as encryption of data, access control to our locations, and a limited group of employees who have access to the data, pseudonymization of data, anonymization of data, etc.)</p>
                    </div>

                    <div>
                        <p><strong>Links to Other Sites</strong></p>
                        <p>Although Alinar provides numerous links to web sites, Alinar has no control over any of the sites we feature anywhere on the site. Featured sites on Alinar may use cookies of their own or other files on your computer, collect data or solicit personally identifiable information from you. Other sites comply with different rules regarding the use or disclosure of the personally identifiable information submitted to them by users. Please consult the privacy policies and / or statements of the other web sites you visit.</p>
                    </div>

                    <div>
                        <p><strong>Changes to This Privacy Policy</strong></p>
                        <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndPrivacy;