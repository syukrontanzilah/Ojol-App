import { combineReducers } from "redux";

const initialState = {
    name: 'Syukron Tanzilah'
};

const initialStateRegister = {
    form:{
        fullname: '',
        emai: '',
        password:'',
    },
    title: 'Register Page',
    desc: 'Ini adalah desc untuk Register'
}

const RegisterReducer = (state= initialStateRegister, action) => {
    if(action.type === 'SET_TITLE'){
        return {
            ...state,
            title: 'Register ganti title',
        }
    } if (action.type === 'SET_FORM'){
        return{
            ...state,
            form:{
                ...state.form,
                [action.inputType]: action.inputValue,
            }
        }
    }
    return state
};


const initialStateLogin = {
    form:{
        emai: '',
        password:'',
    },
    info:'tolong  masukkan password anda',
    isLogin: true,
}

const LoginReducer = (state= initialStateLogin, action) => {
    if (action.type === 'SET_FORM'){
        return{
            ...state,
            form:{
                ...state.form,
                [action.inputType]: action.inputValue,
            }
        }
    }
    return state
};

const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
})


export default reducer;
