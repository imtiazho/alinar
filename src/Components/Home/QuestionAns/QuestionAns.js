import React from 'react';
import './QuestionAns.css'

const QuestionAns = () => {
    return (
        <div id='faq'>
            <h2 className='sention-title'> <p>Alinar</p>Frequently Asked Questions</h2>
            <div class="accordion">
                <div>
                    <input type="radio" name="example_accordion" id="section1" class="accordion__input" />
                    <label for="section1" class="accordion__label">আপনাদের কোনো আউট-লেট আছে?</label>
                    <div class="accordion__content">
                        <p>আমাদের এখনও কোনো আউটলেট নেই তবে ইনশাআল্লাহ আমরা অতিশীগ্রই আউটলেট বসানোর চিন্তা করছি।</p>
                    </div>
                </div>
                <div>
                    <input type="radio" name="example_accordion" id="section2" class="accordion__input" />
                    <label for="section2" class="accordion__label">আপনাদের প্রোডাক্ট রিটার্ন করার পলিসি?</label>
                    <div class="accordion__content">
                        <p>আপনাকে আমাদের গ্রাহকের নাম, নম্বর এবং ঠিকানা প্রদান করতে হবে যাতে আমরা প্রযোজ্য হিসাবে ওয়ারেন্টি পরিষেবা প্রদান করতে পারি। গ্রাহকের রিটার্নের ক্ষেত্রে, আমরা শুধুমাত্র ফেরত আসা জিনিসটি গ্রহণ করব যদি এটি অক্ষত অবস্থায় আমাদের কাছে ফেরত দেওয়া হয়। বডি ডেন্টেড/ক্ষতিগ্রস্ত প্যাকেজিং/সিল ভাঙা পণ্য বা অন্য কোনো শর্ত যা পণ্য বিক্রির অযোগ্য করে তোলে, রিটার্ন নীতির অধীনে দাবি করা গ্রহণযোগ্য হবে না</p>
                    </div>
                </div>
                <div>
                    <input type="radio" name="example_accordion" id="section3" class="accordion__input" />
                    <label for="section3" class="accordion__label">আপনাদের প্রোডাক্ট কি নিজেদের ফ্যাক্টরিতে তৈরি করেন?</label>
                    <div class="accordion__content">
                        <p>হ্যা! আমরা আমাদের নিজস্ব ফ্যাক্টরিতে দক্ষ কারিগর দ্বারা অতি নিপুন ভাবে পন্য তৈরি করে থাকি।</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAns;