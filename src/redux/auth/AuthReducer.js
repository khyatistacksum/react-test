

const INIT_STATE = {
  data: [],
  isAuth: false,
};

const authReducer = (state = INIT_STATE, action) => {
  console.log('actions ', action)
  return {
    ...state,
    data: action?.LoginData?.attributes,
    isAuth: true,
  };
};

export default authReducer;
