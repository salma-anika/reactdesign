function View() {
    return (
      <div >
        
        <div className="view_container">
       <div className="row">
           <div className="col-6">
           <div className="ab_image">
           <img src="img/c.jpg"/>
       </div>
  
   </div>
   <div className="col-6">
   <h3 className="view_h3">The Pizza Menu</h3>
   <h1 className="view_h1"> CHICAGO <br/>THIN CRUST</h1>
   <p className="view_p">Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut <br/>labore et dolore magna aliqua.<br/> </p>
   <br/>
   <button className="btn btn-lg btn-danger">VIEW MORE</button>
       </div>
   </div>
       </div>
      </div>
    );
  }
  
  export default View;