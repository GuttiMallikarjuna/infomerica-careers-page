import React from 'react';
import Footer from './Footer';
import Aos from 'aos';
import "aos/dist/aos.css"

const Datadisplay = (props) => {

   Aos.init();

   console.log(props.product)
   const datatodisplay = props.product;


   const showModal = (e) => {
    const clicked = e.currentTarget.id;
    if(clicked === "ds"){
      document.getElementById("mod").innerHTML = `
              <div class='shadow rounded p-1 m-1'  style="border-bottom:8px solid red">
                <div class='mb-2 d-flex flex-wrap'>
                  <span class='border p-1 m-1'>${datatodisplay.ds1}</span>
                  <span class='border p-1 m-1'>${datatodisplay.ds2}</span>
                  <span class='border p-1 m-1'>${datatodisplay.ds3}</span>
                  <span class='border p-1 m-1'>${datatodisplay.ds4}</span>
                  <span class='border p-1 m-1'>${datatodisplay.ds5}</span>
                  <span class='border p-1 m-1'>${datatodisplay.ds6}</span>
                </div>
                <h6 class='text-danger text-center'>${datatodisplay.dshead}</h6>
                <p class='m-4'>${datatodisplay.dsdescription}</p>
                <p class='m-4'>${datatodisplay.dsdescription2}</p>
              </div>
      `
    }
    else if(clicked === "ui"){
      document.getElementById("mod").innerHTML = `
      <div class='shadow rounded p-1 m-1' style="border-bottom:8px solid red">
      <div class='mb-2 d-flex flex-wrap'>
        <span class='border p-1 m-1'>${datatodisplay.ui1}</span>
        <span class='border p-1 m-1'>${datatodisplay.ui2}</span>
        <span class='border p-1 m-1'>${datatodisplay.ui3}</span>
        <span class='border p-1 m-1'>${datatodisplay.ui4}</span>
        <span class='border p-1 m-1'>${datatodisplay.ui5}</span>
        <span class='border p-1 m-1'>${datatodisplay.ui6}</span>
        <span class='border p-1 m-1'>${datatodisplay.ui7}</span>
      </div>
      <h6 class='text-danger text-center'>${datatodisplay.uihead}</h6>
      <p class='m-4'>${datatodisplay.uidescription}</p> 
      <p class='m-4'>${datatodisplay.uidescription2}</p>  
      </div>
      `
    }
    else if(clicked === "md"){
      document.getElementById("mod").innerHTML = `
      <div class='shadow rounded p-1 m-1' style="border-bottom:8px solid red">
                <div class='mb-2 d-flex flex-wrap'>
                  <span class='border p-1 m-1'>${datatodisplay.md1}</span>
                  <span class='border p-1 m-1'>${datatodisplay.md2}</span>
                  <span class='border p-1 m-1'>${datatodisplay.md3}</span>
                  <span class='border p-1 m-1'>${datatodisplay.md4}</span>
                  <span class='border p-1 m-1'>${datatodisplay.md5}</span>
                </div>
                <h6 class='text-danger text-center'>${datatodisplay.mdhead}</h6>
                <p class='m-4'>${datatodisplay.mddescription}</p>   
                <p class='m-4'>${datatodisplay.mddescription2}</p>       
              </div>
      `
    }
    else if(clicked === "aws"){
      document.getElementById("mod").innerHTML = `
      <div class='shadow rounded p-1 m-1' style="border-bottom:8px solid red">
      <div class='mb-2 d-flex flex-wrap'>
        <span class='border p-1 m-1'>${datatodisplay.aws1}</span>
        <span class='border p-1 m-1'>${datatodisplay.aws2}</span>
        <span class='border p-1 m-1'>${datatodisplay.aws3}</span>
        <span class='border p-1 m-1'>${datatodisplay.aws4}</span>
        <span class='border p-1 m-1'>${datatodisplay.aws5}</span>
        <span class='border p-1 m-1'>${datatodisplay.aws6}</span>
        <span class='border p-1 m-1'>${datatodisplay.aws7}</span>
      </div>
      <h6 class='text-danger text-center'>${datatodisplay.awshead}</h6>
       <p class='m-4'>${datatodisplay.mddescription}</p> 
       <p class='m-4'>${datatodisplay.mddescription2}</p>         
    </div>
      `
    }
    else if(clicked === "aa"){
      document.getElementById("mod").innerHTML = `
      <div class='shadow rounded p-1 m-1' style="border-bottom:8px solid red">
      <div class='mb-2 d-flex flex-wrap'>
        <span class='border p-1 m-1'>${datatodisplay.aa1}</span>
        <span class='border p-1 m-1'>${datatodisplay.aa2}</span>
        <span class='border p-1 m-1'>${datatodisplay.aa3}</span>
        <span class='border p-1 m-1'>${datatodisplay.aa4}</span>
        <span class='border p-1 m-1'>${datatodisplay.aa5}</span>
        <span class='border p-1 m-1'>${datatodisplay.aa6}</span>
      </div>
      <h6 class='text-danger text-center'>${datatodisplay.aahead}</h6>
      <p class='m-4'>${datatodisplay.aadescription}</p>   
      <p class='m-4'>${datatodisplay.aadescription2}</p>    
    </div>
      `
    }
    else if(clicked === "dga"){
      document.getElementById("mod").innerHTML = `
      <div class='shadow rounded p-1 m-1' style="border-bottom:8px solid red">
      <div class='mb-2 d-flex flex-wrap'>
        <span class='border p-1 m-1'>${datatodisplay.dga1}</span>
        <span class='border p-1 m-1'>${datatodisplay.dga2}</span>
        <span class='border p-1 m-1'>${datatodisplay.dga3}</span>
        <span class='border p-1 m-1'>${datatodisplay.dga4}</span>
      </div>
      <h6 class='text-danger text-center'>${datatodisplay.dgahead}</h6>
      <p class='m-4'>${datatodisplay.dgadescription}</p>  
      <p class='m-4'>${datatodisplay.dgadescription2}</p>     
    </div>
      `
    }
};
const handleEmailClick = () => {
  window.location.href = `mailto:${datatodisplay.email}`;
};
const hydClick=()=>{
document.querySelector('.hyddiv').style.display="block";
document.querySelector('.bangdiv').style.display="none";
document.querySelector('.usdiv').style.display="none";
document.querySelector('#hydbtn').classList.remove("btn-primary");
document.querySelector('#hydbtn').classList.add("btn-danger");
document.querySelector('#bangbtn').classList.remove("btn-danger");
document.querySelector('#usbtn').classList.remove("btn-danger");
document.querySelector('#bangbtn').classList.add("btn-primary");
document.querySelector('#usbtn').classList.add("btn-primary");

}
const bangClick=()=>{
  document.querySelector('.bangdiv').style.display="block";
  document.querySelector('.hyddiv').style.display="none";
  document.querySelector('.usdiv').style.display="none";
  document.querySelector('#bangbtn').classList.remove("btn-primary");
  document.querySelector('#bangbtn').classList.add("btn-danger");
  document.querySelector('#hydbtn').classList.remove("btn-danger");
  document.querySelector('#usbtn').classList.remove("btn-danger");
  document.querySelector('#hydbtn').classList.add("btn-primary");
  document.querySelector('#usbtn').classList.add("btn-primary");

}
const usClick=()=>{
  document.querySelector('.usdiv').style.display="block";
  document.querySelector('.hyddiv').style.display="none";
  document.querySelector('.bangdiv').style.display="none";
  document.querySelector('#usbtn').classList.remove("btn-primary");
  document.querySelector('#usbtn').classList.add("btn-danger");
  document.querySelector('#hydbtn').classList.remove("btn-danger");
  document.querySelector('#bangbtn').classList.remove("btn-danger");
  document.querySelector('#hydbtn').classList.add("btn-primary");
  document.querySelector('#bangbtn').classList.add("btn-primary");
}

document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopButton = document.getElementById("scroll-to-top");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  
  scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

  
  return (
      <div className="">
        <img src={datatodisplay.url} width="100%" alt='carrers logo' className='careersbanner'></img>
        <img src={datatodisplay.careersbannermobile.url} width="100%" alt='mobile-banner' className='careersbannermobile'></img>


       <div className="introdiv">
       <h1 className='text-primary careershead'>{datatodisplay.careers}</h1>
        <p>{datatodisplay.intro}</p>
        <div className='d-flex topTwo'>
              <div className="border rounded m-2 p-4 col-md-6 top-left" id="border1" data-aos="slide-right" data-aos-once="true" data-aos-duration="1500">
                <img src={datatodisplay.circle.url} height="60px" alt='Connection'></img>
                <p>{datatodisplay.circledescription}</p>
              </div>
              <div className="border rounded m-2 p-4 col-md-6 top-right" id="border1" data-aos="slide-left" data-aos-once="true" data-aos-duration="1300">
                <img src={datatodisplay.antina.url} height="60px" alt='CloudNetwork'></img>
                <p>{datatodisplay.antinadescription}</p>
              </div>
        </div>
        <div className='d-flex bottomTwo'>
              <div className="border rounded m-2 p-4 col-md-6 bg-white" id="border1" data-aos="slide-right" data-aos-once="true" data-aos-duration="1300">
                <img src={datatodisplay.computer.url} height="60px" alt='Computer'></img>
                <p>{datatodisplay.computerdescription}</p>
              </div>
              <div className="border rounded m-2 p-4 col-md-6" id="border1" data-aos="slide-left" data-aos-once="true" data-aos-duration="1300">
                <img src={datatodisplay.wifi.url} height="60px" alt='Rocket'></img>
                <p>{datatodisplay.wifidescription}</p>
              </div>
        </div>
            <h1 className="cropenings"><span className="text-primary">{datatodisplay.current}</span>&nbsp;<span className="text-danger">{datatodisplay.openings}</span></h1>
            
          <div className='d-flex justify-content-around mt-5 mb-3 openingsmenu'>
            <button id="hydbtn" onClick={hydClick} className='btn-primary border-0 p-2 rounded hyd'>{datatodisplay.hydopenings}</button>
            <button id="bangbtn" onClick={bangClick} className='btn-primary border-0 p-2 rounded bang'>{datatodisplay.bangopenings}</button>
            <button id="usbtn" onClick={usClick} className='btn-primary border-0 p-2 rounded bang'>{datatodisplay.usopenings}</button>
          </div>
          
          <div className='tablediv hyddiv'>
            <h4><span className='text-primary'>{datatodisplay.hyderabad}</span> <span className="text-danger">{datatodisplay.openings}</span></h4>
                <table class="table table-striped text-left table-responsive" style={{border:'1px solid #0094ff'}}>
                  <tr>
                  <th scope="col">#</th>
                  <th>Job Type</th>
                  <th>Location</th>
                  <th>Job Name</th>
                  <th>Skills</th>
                  <th>Exp(Years)</th>
                  <th>No Of Positions</th>
                  <th>More</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td><img src={datatodisplay.newgif.url} alt='newgif' height={'50px'}/></td>
                    <td>{datatodisplay.hyderabad}</td>
                    <td>{datatodisplay.dshead}</td>
                    <td>{datatodisplay.ds1},{datatodisplay.ds2},{datatodisplay.ds3},{datatodisplay.ds4},{datatodisplay.ds5}</td>
                    <td>{datatodisplay.ds6}</td>
                    <td>5</td>
                    <td><button className='btn btn-primary border-0 rounded p-2' id='ds' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{datatodisplay.dsbutton}</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><img src={datatodisplay.newgif.url} alt='newgif' height={'50px'}/></td>
                    <td>{datatodisplay.hyderabad}</td>
                    <td>{datatodisplay.uihead}</td>
                    <td>{datatodisplay.ui1},{datatodisplay.ui2},{datatodisplay.ui3},{datatodisplay.ui4},{datatodisplay.ui5},{datatodisplay.ui6}</td>
                    <td>{datatodisplay.ui7}</td>
                    <td>3</td>
                    <td><button className='btn-primary border-0 rounded p-2' id='ui' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{datatodisplay.dsbutton}</button></td>
                    
                  </tr>
                  
                </table>
           </div>
           <div className='tablediv bangdiv'>
            <h4><span className='text-primary'>{datatodisplay.bangalore}</span> <span className="text-danger">{datatodisplay.openings}</span></h4>
                <table class="table table-striped text-left" style={{border:'1px solid #0094ff'}}>
                  <tr>
                  <th scope="col">#</th>
                  <th>Job Type</th>
                  <th>Location</th>
                  <th>Job Name</th>
                  <th>Skills</th>
                  <th>Exp(Years)</th>
                  <th>No Of Positions</th>
                  <th>More</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td><img src={datatodisplay.newgif.url} alt='newgif' height={'50px'}/></td>
                    <td>{datatodisplay.bangalore}</td>
                    <td>{datatodisplay.mdhead}</td>
                    <td>{datatodisplay.md1},{datatodisplay.md2},{datatodisplay.md3},{datatodisplay.md4}</td>
                    <td>{datatodisplay.md5}</td>
                    <td>3</td>
                    <td><button className='btn-primary border-0 rounded p-2' id='md' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{datatodisplay.dsbutton}</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><img src={datatodisplay.newgif.url} alt='newgif' height={'50px'}/></td>
                    <td>{datatodisplay.bangalore}</td>
                    <td>{datatodisplay.awshead}</td>
                    <td>{datatodisplay.aws1},{datatodisplay.aws2},{datatodisplay.aws3},{datatodisplay.aws4},{datatodisplay.aws5},{datatodisplay.aws6}</td>
                    <td>{datatodisplay.aws7}</td>
                    <td>7</td>
                    <td><button className='btn-primary border-0 rounded p-2' id='aws' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{datatodisplay.dsbutton}</button></td>
                    
                  </tr>
                  
                </table>
           </div>

           <div className='tablediv usdiv'>
            <h4><span className='text-primary'>{datatodisplay.us}</span> <span className="text-danger">{datatodisplay.openings}</span></h4>
                <table class="table table-striped text-left" style={{border:'1px solid #0094ff'}}>
                  <tr>
                  <th scope="col">#</th>
                  <th>Job Type</th>
                  <th>Location</th>
                  <th>Job Name</th>
                  <th>Skills</th>
                  <th>Exp(Years)</th>
                  <th>No Of Positions</th>
                  <th>More</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td><img src={datatodisplay.newgif.url} alt='newgif' height={'50px'}/></td>
                    <td>{datatodisplay.us}</td>
                    <td>{datatodisplay.aahead}</td>
                    <td>{datatodisplay.aa1},{datatodisplay.aa2},{datatodisplay.aa3},{datatodisplay.aa4},{datatodisplay.aa5}</td>
                    <td>{datatodisplay.aa6}</td>
                    <td>5</td>
                    <td><button className='btn-primary border-0 rounded p-2' id='aa' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{datatodisplay.dsbutton}</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><img src={datatodisplay.newgif.url} alt='newgif' height={'50px'}/></td>
                    <td>{datatodisplay.us}</td>
                    <td>{datatodisplay.dgahead}</td>
                    <td>{datatodisplay.dga1},{datatodisplay.dga2},{datatodisplay.dga3}</td>
                    <td>{datatodisplay.dga4}</td>
                    <td>3</td>
                    <td><button className='btn-primary border-0 rounded p-2' id='dga' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{datatodisplay.dsbutton}</button></td>
                  </tr>              
                </table>
           </div>
       </div>

   
       <Footer datatodisplay={datatodisplay}/>
       
      
       {/* modal start */}
       <div className="modal" id="myModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <button onClick={handleEmailClick}  className='btn-success border-0 rounded p-2'>Send Resume</button>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body" id='mod'></div>

              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
      </div>
      </div>

  );
}
export default Datadisplay;