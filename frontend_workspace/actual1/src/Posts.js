/* eslint-disable */
import React, {useState, useEffect, useCallback} from 'react';
import { useNavigate} from 'react-router-dom';

const Posts = ({ data, loading }) => {
  return (
    <>
      {loading && <div> loading... </div>}
      {/* <ul>
        {data.map((datas) => (
          <li key={datas.id}>{datas.name}</li>

        ))}
      </ul> */}

      {
          data.map((a, i) => {
            return(
              <Card data={data[i]} i={i+1}> </Card>
            )
          })
        }


    
    </>
  );
};

function Card(props){
    const navigate = useNavigate();
    const navigateToPurchase = () => {
      navigate(`${props.data && "./" + props.data.id}`);
    };
  
    return(
      // <div className='si'>
      <div className='heading-1'>
      <div className='new' onClick = {navigateToPurchase}>
        {/* <Link to={props.data && "./" + props.data.id}>
          <button> */}
  
        {props.data && props.data.name}<br/>
        {props.data && props.data.price}<br/>
        {/* </button>
        </Link> */}
      </div>
      </div>
      // </div>
    )
  }

export default Posts;