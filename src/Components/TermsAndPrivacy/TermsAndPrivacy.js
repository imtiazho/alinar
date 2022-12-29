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
                    <p>Last modified: September 20, 2021</p>

                    <div>
                        <p>Codinism built the Programming Hero app as a Freemium app. This SERVICE is provided by Codinism at
                            no cost and is intended for use as is.</p>
                        <p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure
                            of Personal Information if anyone decided to use our Service.</p>
                        <p>If you choose to use our Service, then you agree to the collection and use of information in relation
                            to this policy. The Personal Information that we collect is used for providing and improving the Service. We
                            will not use or share your information with anyone except as described in this Privacy Policy.</p>
                        <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which
                            is accessible at Programming Hero unless otherwise defined in this Privacy Policy.</p>
                        <p>Information Collection and Use</p>
                        <p>For a better experience, while using our Service, we may require you to provide us with certain personally
                            identifiable information, including but not limited to Name, Email, City, Country. The information that we request
                            will be retained by us and used as described in this privacy policy.</p>
                        <p>The app does use third-party services that may collect information used to identify you.</p>

                    </div>

                    <div>
                        <p><strong>Log Data</strong></p>
                        <p>We want to inform you that whenever you use our Service, in a case of an error in the app we collect
                            data and information (through third-party products) on your phone called Log Data. This Log Data may include
                            information such as your device Internet Protocol (&ldquo;IP&rdquo;) address, device name, operating system version,
                            the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other
                            statistics.</p>
                    </div>

                    <div>
                        <p><strong>Service Providers</strong></p>
                        <p>We may employ third-party companies and individuals due to the following reasons:</p>
                        <ul>
                            <li>
                                <p>To facilitate our Service;</p>
                            </li>
                            <li>
                                <p>To provide the Service on our behalf;</p>
                            </li>
                            <li>
                                <p>To perform Service-related services; or</p>
                            </li>
                            <li>
                                <p>To assist us in analyzing how our Service is used.</p>
                            </li>
                        </ul>
                        <p>We want to inform users of this Service that these third parties have access to your Personal Information.
                            The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose
                            or use the information for any other purpose.</p>
                    </div>

                    <div>
                        <p><strong>Security</strong></p>
                        <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially
                            acceptable means of protecting it. But remember that no method of transmission over the internet, or method of
                            electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
                    </div>

                    <div>
                        <p><strong>Links to Other Sites</strong></p>
                        <p>This Service may contain links to other sites. If you click on a third-party link, you will be directed
                            to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review
                            the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy
                            policies, or practices of any third-party sites or services.</p>
                    </div>

                    <div>
                        <p><strong>Children&rsquo;s Privacy</strong></p>
                        <p>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable
                            information from children under 13. In the case we discover that a child under 13 has provided us with personal
                            information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that
                            your child has provided us with personal information, please contact us so that we will be able to do necessary
                            actions.</p>
                    </div>

                    <div>
                        <p><strong>Changes to This Privacy Policy</strong></p>
                        <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically
                            for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes
                            are effective immediately after they are posted on this page.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndPrivacy;