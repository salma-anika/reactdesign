import Navs from './Navs';

function Header() {
    return (
      <div >
        <Navs/>
      <img class ="head-img" src="img/b.JPG"/>
 <div className="head-content">
   <Navs/>
   <div className="container">
   <h3>Pizza Delivery</h3>
   <h1>MAESTRO <br/> PIZZINNI</h1>
   <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut <br/>labore et dolore magna aliqua.<br/> </p>
   </div>
       </div>
      </div>
    );
  }
  
  export default Header;