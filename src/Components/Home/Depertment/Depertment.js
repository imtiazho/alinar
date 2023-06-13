import React from 'react';
import './Depertment.css'
import depertmentImg1 from '../../../assets/cate-1.jpg'
import depertmentImg2 from '../../../assets/cate-2.jpg'
import depertmentImg3 from '../../../assets/cate-3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Depertment = () => {
    return (
        <div className='depertment'>
            <div className='depertment-container'>
                <div data-aos="fade-up-right" data-aos-duration="1000" className='each-depertment'>
                    <img src={depertmentImg1} alt="Picture of sell Depertment" />
                    {/* <h4>SHAREE</h4> */}
                </div>
                <div data-aos="fade-up-left" data-aos-duration="1000" className='each-depertment'>
                    <img src={depertmentImg2} alt="Picture of sell Depertment" />
                    {/* <h4>PANJABI</h4> */}
                </div>
                <div data-aos="fade-up-right" data-aos-duration="1000" className='each-depertment'>
                    <img src={depertmentImg3} alt="Picture of sell Depertment" />
                    {/* <h4>3 PIS</h4> */}
                </div>
            </div>
        </div>
    );
};

export default Depertment;