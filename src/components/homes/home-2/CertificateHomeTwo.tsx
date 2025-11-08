
import Link from 'next/link';
import React from 'react';

const CertificateHomeTwo = () => {
  return (
    <>
      <div className="certificate-text wow fadeInUp" data-wow-delay=".3s">
            <h3>Accreditation Made Simple</h3>
            <p>Securing CME and CPD accreditation is critical to professional education. MedHub provides end-to-end support — from application to certificate tracking — ensuring your programs are recognized and trusted by healthcare authorities across the Middle East.</p>
            <Link href="/about" className="theme-btn">Discover Accreditation Support</Link>
        </div>
    </>
  );
};

export default CertificateHomeTwo;