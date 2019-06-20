import React from "react";
import { MDBContainer, MDBCol, MDBRow, MDBIcon, MDBFormInline } from "mdbreact";
import "./HomePage.css";
import BookCard from "../components/bookCard"
import API from "../utils/API";
import Logo from "../components/Logo"


class HomePage extends React.Component {

  state = {
    data: "",
    searchInput: ""
  }

  _submitInput = (e) => {
    e.preventDefault();
    this.setState({
      data: ""
    })
    API.getBooks(this.state.searchInput)
      .then(res => {
        const searchArray = res.data.items
        console.log(res.data.items);

        searchArray.forEach((item,index) => {
          let title = item.volumeInfo.title
          let authors = item.volumeInfo.authors
          let image = item.volumeInfo.imageLinks.thumbnail
          let description = item.volumeInfo.description
          let link = item.volumeInfo.infoLink

          const bookObject = {
            id: index,
            title: title,
            authors: authors,
            image: image,
            description: description,
            link: link
          }
          this.setState(prevState => ({
            data: [...prevState.data, bookObject]
          }))
        })

      })
      .catch(err => console.log(err));
  }

  _handleChange = (e) => {
    e.preventDefault()

    let {value,name} = e.target
    this.setState({
      searchInput : value
    })
  }

  _saveBook = (id,e) => {
    e.preventDefault()

    let currentBook = this.state.data.find(book => book.id === id)

    delete currentBook.id

    API.saveBooks(currentBook)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>


{this.state.data === "" ? (

<MDBRow center style={{ height: "100vh" }}>
 <MDBCol middle="true" sm="8" className="text-center">
    <Logo/>
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

<BookCard data={this.state.data} saveBook = {this._saveBook} notSaved = "0"/>
  </MDBContainer>
  
)
}
      </div>
    );
  }
}

export default HomePage;
