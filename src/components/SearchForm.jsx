import React, { Component } from "react";
import { fetch_news, hide_modal } from "../actions";
import { connect } from "react-redux";

class SearchForm extends Component {
  state = {};
  handleForm = (e) => {
    e.preventDefault();
    this.props.hideModal();
    const q = e.target.elements.search.value;
    const query = `"${q}"`;
    this.props.fetchNews(query);
  };

  render() {
    return (
      <div className={this.props.search}>
        <form className="form" onSubmit={this.handleForm}>
          <div className="form-row">
            <div className="form-group col-8">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                type="search"
                name="search"
                id="search"
                className="form-control mx-2"
                placeholder="Search for topic"
              />
            </div>
            <div className="form-group col-4">
              <button type="submit" className="btn btn-primary mx-2">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { search: state.search };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: (query) => dispatch(fetch_news(query)),
    hideModal: () => dispatch(hide_modal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
