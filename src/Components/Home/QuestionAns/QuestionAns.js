import React from 'react';
import './QuestionAns.css'

const QuestionAns = () => {
    return (
        <div>
            <h2 className='sention-title'> <p>Alinar</p>Frequently Asked Questions</h2>
            <ul className='accordion'>
                <li>
                    <input type="radio" name='accordion'  id='first'/>
                    <label for='first'>আপনাদের কোনো আউট-লেট আছে?</label>
                    <div className='content'>
                        <p>আমাদের এখনও কোনো আউটলেট নেই তবে ইনশাআল্লাহ আমরা অতিশীগ্রই আউটলেট বসানোর চিন্তা করছি।</p>
                    </div>
                </li>
                <li>
                    <input type="radio" name='accordion'  id='second'/>
                    <label for='second'>আপনাদের প্রোডাক্ট রিটার্ন করার পলিসি?</label>
                    <div className='content'>
                        <p>Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.</p>
                    </div>
                </li>
                <li>
                    <input type="radio" name='accordion'  id='third'/>
                    <label for='third'>আপনাদের প্রোডাক্ট কি নিজেদের ফ্যাক্টরিতে তৈরি করেন?</label>
                    <div className='content'>
                        <p>হ্যা! আমরা আমাদের নিজস্ব ফ্যাক্টরিতে দক্ষ কারিগর দ্বারা অতি নিপুন ভাবে পন্য তৈরি করে থাকি।</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default QuestionAns;