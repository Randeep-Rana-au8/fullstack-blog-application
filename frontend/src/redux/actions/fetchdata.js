import { GET_HOME_DATA,TOGGLE_HOME_FETCHING_STATE } from "../actionTypes";

export const fetchHomeData = () => async (dispatch) => {
    try {
      dispatch({ type: GET_HOME_DATA, payload: null });
      dispatch({ type: TOGGLE_HOME_FETCHING_STATE });
      const response = await axios(
        "https://localhost:5000/allpost",
        {
          method: "GET"
        }
      );
      dispatch({ type: GET_HOME_DATA, payload: response.data });
    } catch (error) {
      console.error("error");
    } finally {
      dispatch({ type: TOGGLE_HOME_FETCHING_STATE });
    }
  };