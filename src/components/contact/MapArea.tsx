
import React from 'react';

const MapArea = () => {
  return (
    <>
       <div className="map-area-section section-padding pt-0 fix">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="map-area">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828842949!2d54.89730814726562!3d25.076280900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s" style={{border: "0px"}} allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </>
  );
};

export default MapArea;