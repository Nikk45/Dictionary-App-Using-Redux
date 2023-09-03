import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WordInfo = ()=>{

    const {wordsList} = useSelector(state=>state)

    // const [word,setWord] = useState('');
    const [data,setData] = useState([]);

    useEffect(() => {
        const currentPath = window.location.pathname;
        const pathSegments = currentPath.split('/');
        const search = pathSegments[pathSegments.length - 1];
        console.log("web url", search);

        async function fetch(){
            try{
                let res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
                console.log(res.data);
                setData(res.data)
            }
            catch{
                console.log('error');
            }
          }

          if(wordsList.includes(search)){
              fetch();
          }

      }, []);



    return (
        <div>
            
            {
                data &&
            data.map((data, idx) => (
            <div className="p-4 m-4 shadow-lg rounded-md" key={idx}>
                <h2>{data.word}</h2>

                {/* audio section */}
                {data.phonetics.map((phonetic, idx) => (
                <React.Fragment key={idx}>
                    <p>{phonetic.text}</p>

                    <audio controls>
                    <source src={phonetic.audio} type="audio/mp3" />
                    </audio>
                </React.Fragment>
                ))}
                {data.meanings.map((data, idx) => (
                <React.Fragment key={idx}>
                    <p>{data.partOfSpeech}</p>
                    <p>{data.definitions[0].definition}</p>
                </React.Fragment>
                ))}
            </div>
            ))}
        </div>
    )
}


export default WordInfo