import { WORDS_LOADING, WORDS_SUCCESS, WORDS_ERROR } from "../actions/actionTypes";

const initialState = {
    loading : false,
    error : '',
    word : '',
    data : [],
    wordsList : [],
}

const wordReducer = (state = initialState, action)=>{
        if(action.type === WORDS_LOADING){
            return{
                ...state,
                loading : true
            }
        }
        else if(action.type === WORDS_SUCCESS){
            return{
                ...state,
                loading : false,
                word : action.word,
                data : action.payload,
                wordsList : action.word === undefined ? [...state.wordsList] : [...state.wordsList, action.word]
            }
        }
        else if(action.type === WORDS_ERROR){
            return{
                ...state,
                loading: false,
                error : action.payload
            }
        }
        
        return state;

}

export default wordReducer