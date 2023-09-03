import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { wordsLoading, wordsError, wordsSuccess } from "../redux/actions/wordAction";

const Home=()=>{

    const dispatch = useDispatch();

    const [searchedWord, setSearchedWord] = useState('');
    const {loading, error, data, wordsList} = useSelector(state=>state);

    console.log("loading",  loading, "error", error,"dataFetched", data, "wordsList",  wordsList);

    async function fetchData(){
            try{
                dispatch(wordsLoading());
                let res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
                console.log(res.data[0]);
                // dispatch(wordsSuccess([]))
                dispatch(wordsSuccess(res.data,searchedWord))
                dispatch(wordsError(''))
                setSearchedWord('')
            }
            catch{
                dispatch(wordsError("Invalid word. Please try different word"))
                dispatch(wordsSuccess([]))
            }
    }

    return(
        <div className="home-page">
            <div className="searchbar">
                <input type="text" value={searchedWord} onChange={(e)=>setSearchedWord(e.target.value)} placeholder="Search word.."/>
                <button onClick={fetchData}>Search</button>
            </div>

            {
                loading && <Loader />
            }
            {
                error.length!==0 && <p className="error">{error}</p>
            }
            {
                data.length !== 0 &&
                data.map((data,index)=>
                <div key={index}>
                    <h2>{data.word}</h2>
                    {/* audio section */}
                    {data.phonetics.map((phonetic, idx) => (
                    <div key={idx}>
                        <p>{phonetic.text}</p>
                        {
                            phonetic.audio === '' ? '' : <audio controls>
                            <source src={phonetic.audio} type="audio/mp3" />
                            </audio>
                        }
                    </div>
                    ))}
                    {data.meanings.map((data, idx) => (
                    <div key={idx}>
                        <p>{data.partOfSpeech}</p>
                        <p>{data.definitions[0].definition}</p>
                    </div>
                    ))}
                </div>
                )
            }
        </div>
    )
}

export default Home