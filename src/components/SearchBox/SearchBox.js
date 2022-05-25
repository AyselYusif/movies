import React, { Component } from "react";
import "./SearchBox.css";
import { connect } from "react-redux";
import { getMovies, getApi } from "../../redux/actions/actions";
class SearchBox extends Component {
  state = {
    searchLine: "",
  };
  searchLineChangeHandler = (e) => {
    this.setState({ searchLine: e.target.value });
  };
  searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  };
  render() {
    const { searchLine } = this.state;
    const { getMovies } = this.props;
    return (
      <div className="search-box">
        <form
          className="search-box__form"
          onSubmit={this.searchBoxSubmitHandler}
        >
          <label className="search-box__form-label">
            Искать фильм по названию:
            <input
              value={searchLine}
              type="text"
              className="search-box__form-input"
              placeholder="Например, Shawshank Redemption"
              onChange={this.searchLineChangeHandler}
            />
          </label>
          <button
            type="submit"
            className="search-box__form-submit"
            onClick={() =>
              getApi(searchLine)
                .then((res) => getMovies(res))
                .catch((err) => {
                  getMovies([]);
                  return err;
                })
            }
            disabled={!searchLine}
          >
            Искать
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (movie) => {
      dispatch(getMovies(movie));
    },
  };
};
export default connect(null, mapDispatchToProps)(SearchBox);
