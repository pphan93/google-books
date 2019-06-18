import React from "react";
import { MDBEdgeHeader, MDBFreeBird, MDBContainer, MDBCol, MDBRow, MDBCardBody, MDBIcon, MDBNavLink,MDBFormInline,MDBBtn,MDBBtnGroup } from "mdbreact";
import "./HomePage.css";

class HomePage extends React.Component {

  state = {
    data: "",
    searchInput: ""
  }

  _submitInput = (e) => {
    e.preventDefault();
console.log(this.state.searchInput)
  }

  _handleChange = (e) => {
    e.preventDefault()

    let {value,name} = e.target
    this.setState({
      searchInput : value
    })
  }

  render() {
    return (
      <div>


{this.state.data === "" ? (

<MDBRow center style={{ height: "100vh" }}>
 <MDBCol middle="true" sm="8" className="text-center">

     <h1>Welcome to Read Lounge.</h1>
     <MDBFormInline className="md-form" onSubmit={this._submitInput}>
         <MDBIcon icon="search" />
         <input className="form-control form-control-sm ml-3 w-90" type="text" placeholder="Search for books" aria-label="Search" name="search" value={this.value} onChange={this._handleChange}/>        
     </MDBFormInline>
 </MDBCol>
 </MDBRow>
) : (
  <MDBContainer>
  <h1 className="mt-3">Search</h1>
  <MDBFormInline className="md-form" onSubmit={this._submitInput}>
       <MDBIcon icon="search" />
       <input className="form-control form-control-sm ml-3 w-90" type="text" placeholder="Search for books" aria-label="Search" name="search" value={this.value} onChange={this._handleChange}/>        
   </MDBFormInline>
   <hr />

   <h1>Result</h1>
  <MDBRow>
    <MDBCol className="col-lg-10 col-md-12 mx-auto">
        <MDBRow>
          <MDBCol className="col-md-10">
          <h3>This is the title. This should be super long.</h3>
          <p>Written by: Phuoc Phan</p>
          </MDBCol>
          <MDBCol className="col-md-2">
          <MDBBtnGroup size="sm">
            <MDBBtn color="unique">Left</MDBBtn>
            <MDBBtn color="unique">Middle</MDBBtn>
          </MDBBtnGroup>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol className="col-md-4">
          <img className="post-img" src="https://1.bp.blogspot.com/-ihhigfVYexI/XQJH4cjvwYI/AAAAAAAA0N0/8ff3GWEUilULg4oucC4JKdRTmu6ldlyvwCLcBGAs/s728-e100/evernote-hacking.jpg"></img>
          </MDBCol>
          <MDBCol className="col-md-8">
          Cybersecurity researchers discover a critical flaw in the popular Evernote Chrome extension that could have allowed hackers to hijack your browser and steal sensitive information from any website you accessed.
          </MDBCol>
        </MDBRow>

        <hr />

    </MDBCol>
  </MDBRow>

</MDBContainer>
)
}

{/* <MDBRow center style={{ height: "100vh" }}>
     <MDBCol middle="true" sm="8" className="text-center">

         <h1>Welcome to Read Lounge.</h1>
         <MDBFormInline className="md-form" onSubmit={this._submitInput}>
             <MDBIcon icon="search" />
             <input className="form-control form-control-sm ml-3 w-90" type="text" placeholder="Search for books" aria-label="Search" name="search" value={this.value} onChange={this._handleChange}/>        
         </MDBFormInline>
     </MDBCol>
 </MDBRow> */}



      </div>
    );
  }
}

export default HomePage;
