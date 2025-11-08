
import Count from '@/common/Count';
import React from 'react';

const CounterHomeFive = () => {
  return (
    <>
      <div className="counter-section-22 section-padding pt-0">
            <div className="container custom-container">
                <div className="counter-wrapper-2 bg-cover" style={{background: `url(/assets/img/counter-bg-2.jpg)`}}>

                    <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
                        <div className="icon">
                            <i className="flaticon-success"></i>
                        </div>
                        <div className="content">
                            <h2><span className="odometer" data-count="15"> <Count number={15} text='.0k'  /> </span></h2>
                            <p>Verified Healthcare Professionals</p>
                        </div>
                    </div>
                    <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
                        <div className="icon">
                            <i className="flaticon-medal"></i>
                        </div>
                        <div className="content">
                            <h2><span className="odometer" data-count="1"> <Count number={1} text='.2k'  /> </span></h2>
                            <p>Accredited Events & Courses</p>
                        </div>
                    </div>
                    <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
                        <div className="icon">
                            <i className="flaticon-satisfaction"></i>
                        </div>
                        <div className="content">
                            <h2><span className="odometer" data-count="300"> <Count number={300} text='+'  /> </span></h2>
                            <p>Partner Institutions</p>
                        </div>
                    </div>
                    <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
                        <div className="icon">
                            <i className="flaticon-instructor"></i>
                        </div>
                        <div className="content">
                            <h2><span className="odometer" data-count="6"> <Count number={6} text=''  /> </span></h2>
                            <p>Regional Accreditation Partnerships</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </>
  );
};

export default CounterHomeFive;