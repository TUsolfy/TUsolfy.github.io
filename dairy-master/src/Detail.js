import React, { useEffect, useState,useContext } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import './Detail.scss';

    function Detail(props){

        let [alert,alert변경] = useState(true);
        let [inputData,inputData변경] = useState('');

        useEffect(()=>{


            let 타이머 = setTimeout(()=>{alert변경(false)},2000);
            return ()=>{clearTimeout(타이머)}
            },[]);
        
        let { id } = useParams();
        let history = useHistory();
       

        return(
          <div className="box">
              {inputData}
            <input onChange={(e)=>{inputData변경(e.target.value)}} />

            {
                alert === true
                ? (<div className="alert">
                     <p>알림창</p>
                   </div>)
                : null
            }

            <div className='post_detail'>
                <h3>{props.다이어리[id].title}</h3>
                <p>{props.다이어리[id].date}</p>
                <hr/>
                <button className="red" onClick={()=>{
                    history.goBack();
                }}> 뒤로</button>
                <p>{props.다이어리[id].content}</p>
            </div>
          </div>
              )
        }

export default Detail;