import { WORDS_LOADING, WORDS_SUCCESS,WORDS_ERROR } from "./actionTypes";

export const wordsLoading=()=>{
    return {
        type : WORDS_LOADING
    }
}

export const wordsSuccess=(data, word)=>{
    return {
        type : WORDS_SUCCESS,
        payload : data,
        word : word
    }
}

export const wordsError=(error)=>{
    return {
        type : WORDS_ERROR,
        payload : error
    }
}
