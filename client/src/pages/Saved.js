import React from "react";
import { MDBContainer } from "mdbreact";
import BookCard from "../components/bookCard"
import API from "../utils/API";


class SavedBooks extends React.Component {
state = {
  data: ""
}

componentDidMount() {
  this.loadBook();
}

loadBook() {
  API.getSavedBooks()
    .then(res => {
      // console.log(res)
      this.setState({data: res.data})

      console.log(this.state.data[0]._id)
    })
    .catch(err => console.log(err))
}

_deleteBooks = (id,e) => {
  e.preventDefault()

  API.deleteBook(id)
  .then( res => {
    console.log("test")
    this.loadBook()
    })
  .catch(err => console.log(err))

  
}


  render () {
  return (
    <MDBContainer>
      <h1 className = "mt-3">Saved Books</h1>
      {this.state.data !== "" ? <BookCard data={this.state.data} deleteBooks = {this._deleteBooks} notSaved = "1"/> : ""}
    </MDBContainer>
  )
}
}

export default SavedBooks;
