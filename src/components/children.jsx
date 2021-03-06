import React,{useState} from 'react'
//import styles
import './Input.css'
export default function({min,max,emit,errorEmit,type,placeholder}) {
        //states
        const [state,setState] = useState('')
        const [styles,setStyles] = useState('noError')
        const [error,setError] = useState(null)
        //function check
        const check = (e) => {
            if(state.length <= min ){
                setError(`поле ${placeholder} меньше ${min} символов`)
                setStyles("hasError")
                errorEmit(null)
            }
            else if(state.length >= max){
                setError(`поле ${placeholder} больше ${max} символов`)
                setStyles("hasError")
                errorEmit(null)
            }
            else{
                setStyles("noError")
                setError(null)
                emit(state)
            }
            setState(e.target.value)
           
        }
    
    return (
        <div className="input-container">
        <input className={styles}  onChange={check} placeholder={placeholder} type={type}/>
        { error && (<div>{error}</div>)}
        </div>
   )
}