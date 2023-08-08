import { useState, useEffect } from 'react';


const useFetch= (url)=>{

    const  abortcont= new AbortController();

    const [data,setData]= useState(null);
    const [isPending,setisPending]= useState(true);
    const [error,setError]= useState(null);
    const [statusCode,setStatusCode]= useState(null);


    useEffect(()=>{
        setTimeout(() => {
            fetch(url, {signal:abortcont.signal})
                .then( res => { 
                    console.log(res);
                    if(!res.ok){
                        setStatusCode(res.status);
                        throw Error('Could not fetch data');
                    }
                return res.json(); 
                }) 
                .then( data => { 
                    console.log(data); 
                    setData(data); 
                    setisPending(false); 
                }) 
                .catch( err => {
                   if(err.name === 'AbortError'){
                    console.log('Fetch aborted');
                   }else {
                    setisPending(false);
                    setError(err.message); 
                   }
                }) 
        }, 1000);
       // return () => abortcont.abort();
    },[url]
    );
    return {data,isPending,error,statusCode}
}


export default useFetch;