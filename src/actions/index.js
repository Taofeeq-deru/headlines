import axios from "axios";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const HIDE_MODAL = "HIDE_MODAL";

export const fetch_news = (dispatch) => {
  async function fetchArticles(dispatch) {
    dispatch({ type: FETCH_START });
    try {
      const result = await axios(
        `https://gnews.io/api/v3/search?q=javascript programming&image=required&token=${process.env.REACT_APP_API_KEY}`
      );
      console.log(result.data);
      dispatch({ type: FETCH_SUCCESS, payload: result.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: FETCH_FAILURE, payload: err.message });
    }
  }

  fetchArticles(dispatch);
};

export const hide_modal = () => {
  return {
    type: HIDE_MODAL,
  };
};
