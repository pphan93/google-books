import React from "react";
import { MDBRow, MDBCol,MDBBtn,MDBBtnGroup, } from "mdbreact";

const DocsLink = props => {

    let map = props.data.map

    console.log(map)
                
    

  return (
    <>
    {props.data.map(books => (
        <MDBRow key={books.id !== undefined ? books.id : books._id}>
          <MDBCol className="col-lg-10 col-md-12 mx-auto">
              <MDBRow>
                <MDBCol className="col-md-10">
                <h3><a href={books.link}>{books.title}</a></h3>
                <p>{books.authors}</p>
                </MDBCol>
                <MDBCol className="col-md-2">
                <MDBBtnGroup size="sm">
                <MDBBtn tag="a" role="button" className="unique-color-dark" href={books.link}>View</MDBBtn>
                {props.notSaved === "0" ? <MDBBtn tag="a" role="button" className="unique-color-dark" href="#" onClick={(e) => props.saveBook(books.id, e)}>Saved</MDBBtn> : <MDBBtn tag="a" role="button" className="unique-color-dark" href="#" onClick={(e) => props.deleteBooks(books._id, e)}>Delete</MDBBtn>}
                </MDBBtnGroup>
                </MDBCol>
              </MDBRow>
      
              <MDBRow>
                <MDBCol className="col-md-4">
                <img className="post-img" src={books.image}></img>
                </MDBCol>
                <MDBCol className="col-md-8">
                {books.description}
                </MDBCol>
              </MDBRow>
      
              <hr />
      
          </MDBCol>
        </MDBRow>
        ))}
    </>
  );
};

export default DocsLink;
