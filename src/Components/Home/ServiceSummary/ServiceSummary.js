import React from 'react';
import './ServiceSummary.css'

const ServiceSummary = () => {
    const serviceSummary = [
        { id: 1, title: "WHOLE BANGLADESH DELIVERY", shortDesc: "We deliver all over Bangladesh", icon: <i className="fa-solid fa-truck-fast"></i> },
        { id: 2, title: "CASH ON DELIVERY", shortDesc: "We serve cash on delivery no advance payment required", icon: <i className="fa-solid fa-money-bill"></i> },
        { id: 3, title: "RETURN PRODUCT", shortDesc: "We accept returns products to certain conditions", icon: <i className="fa-solid fa-repeat"></i> },
        { id: 4, title: "OPENING ALL WEEK", shortDesc: "8AM - 2AM", icon: <i className="fa-regular fa-clock"></i> },
    ]

    return (
        <div className='service-summary'>
            <div className='service-summary-container'>
                {
                    serviceSummary.map(eachServiceSummary => (
                        <div key={eachServiceSummary.id} className='each-service-summary'>
                            {eachServiceSummary.icon}
                            <div>
                                <p>{eachServiceSummary.title}</p>
                                <p><small>{eachServiceSummary.shortDesc}</small></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ServiceSummary;