const initialState = {
  isLogin: false,
  isLoading: false,
  isError: false,
  token: null,
  alertMsg: null,
};

export default (action, state = initialState) => {
  switch (action.type) {
    case 'AUTH_LOGIN_USER_PENDING': {
      return {
        ...state,
        isLogin: false,
        isLoading: true,
        isError: false,
        token: null,
        alertMsg: null,
      };
    }

    case 'AUTH_LOGIN_USER_REJECTED': {
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        isError: true,
        token: null,
        alertMsg: 'Your request rejected.',
      };
    }

    case 'AUTH_LOGIN_USER_FULFILLED': {
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        isError: false,
        token: action.payload.data.token,
        alertMsg: 'Your request fulfilled',
      };
    }

    case 'AUTH_LOGOUT_USER': {
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        isError: false,
        token: null,
        alertMsg: null,
      };
    }

    default: {
      return state;
    }
  }
};
