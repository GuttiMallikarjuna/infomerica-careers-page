import React from 'react';
import '../App.css';
const Footer = (props) => {
  const datatodisplay=props.datatodisplay;
  return (
    <>
    <div className='d-flex mt-2 footer1'>
        <div className="nasscom">
          <img src={datatodisplay.nasscomimg.url} height="45px" alt="NASSCOM Logo"/>
          <p className='mt-4'>{datatodisplay.nasscomdesc}</p>
        </div>
        <div className="keylinks">
          <h5>{datatodisplay.keylinks}</h5>
         <div className="d-flex linksdiv">
         <div>
            <span><a href="#"><i class="bi bi-chevron-double-right"></i> {datatodisplay.aboutus}</a></span> <hr/>
            <span><a href="#"><i class="bi bi-chevron-double-right"></i> {datatodisplay.services}</a></span> <hr/>
            <span><a href="#"><i class="bi bi-chevron-double-right"></i> {datatodisplay.solutions}</a></span> <hr/>
          </div>
          <div className="linksdiv2">
          <span><a href="#"><i class="bi bi-chevron-double-right"></i> {datatodisplay.csr}</a></span> <hr/>
            <span><a href="#"><i class="bi bi-chevron-double-right"></i> {datatodisplay.careersss}</a></span> <hr/>
            <span><a href="#"><i class="bi bi-chevron-double-right"></i> {datatodisplay.contactus}</a></span> <hr/>
          </div>

         </div>
        </div>
        <div className="getintouch">
          <h5>{datatodisplay.getintouch}</h5>
          <p><i class="bi bi-geo-alt-fill"></i>&nbsp;:&nbsp;{datatodisplay.location}</p>
          <p><a href="mailto:{datatodisplay.email}"><i class="bi bi-envelope-fill"></i>&nbsp;:&nbsp;{datatodisplay.email}</a></p>

        </div>
        <div className="followus">
          <h5>{datatodisplay.followus}</h5>
           <div>
            <img src={datatodisplay.facebookimg.url} alt="facebook" className="facebookimg"/>
            <img src={datatodisplay.youtubeimg.url} alt="Youtube" className="youtubeimg"/>
            <img src={datatodisplay.linkedinimg.url} alt="linkedin" className="linkedinimg"/>
           </div>
        </div>

       </div>
      <footer className="page-footer font-small bg-blue pt-1">
        <div className="footer-copyright text-center">Copyright © 2023
          <span className='text-danger'> Infomerica </span>All Rights Reserved. 
          <span className='text-danger'> Terms </span> | <span className='text-danger'> Privacy Policy</span>
        </div>
      </footer>
      </>
  );
};
export default Footer;