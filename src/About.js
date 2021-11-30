import Navs from './Navs';

function About() {
    return (
     
 <div className="about">
  
   <div className="ab_container">
       <div className="row">
           <div className="col-6">
   <h3 className="about_h3">About Us</h3>
   <h1 className="about_h1"> WELCOME TO MAESTRO <br/> PIZZINNI</h1>
   <p className="about_p">Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut <br/>labore et dolore magna aliqua.<br/> </p>
   <br/>
   <button className="btn btn-lg btn-danger">READ MORE</button>
   </div>
   <div className="col-6">
       <div className="ab_image">
           <img src="img/c.jpg"/>
       </div>
       </div>
   </div>
       </div>
      </div>
    );
  }
  
  export default About;