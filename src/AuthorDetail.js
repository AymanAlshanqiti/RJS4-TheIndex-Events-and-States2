import React, { Component } from "react";

class AuthorDetail extends Component {
  render() {
    const author = this.props.authorDetail;
    const books = author.books.map(book => {
      return (
        <tr>
          <td>{book.title}</td>
          <td>{`${author.first_name} ${author.last_name}`}</td>
          <td>
            <button className="btn" style={{ backgroundColor: book.color }} />
          </td>
        </tr>
      );
    });
    return (
      <div className="author col-xs-10">
        <div>
          <h3>{`${author.first_name} ${author.last_name}`}</h3>
          <img src={author.imageUrl} className="img-thumbnail" />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
