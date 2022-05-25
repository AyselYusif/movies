import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovies } from "../../redux/actions/actions";
import "./Favorites.css";

class Favorites extends Component {
  render() {
    const { listMovies, removeMovies } = this.props;
    return (
      <div className="favorites">
        <input placeholder="Новый список" className="favorites__name" />
        <ul className="favorites__list">
          {listMovies.map((item) => {
            return (
              <li key={item.imdbID}>
                {item.Title} ({item.Year})
                <button onClick={() => removeMovies(item.imdbID)}>X</button>
              </li>
            );
          })}
        </ul>
        <button type="button" className="favorites__save">
          Сохранить список
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listMovies: state.listMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovies: (id) => {
      dispatch(removeMovies(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
