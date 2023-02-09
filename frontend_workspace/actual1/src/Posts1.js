/* eslint-disable */
import React, {useState, useEffect, useCallback} from 'react';
import { useNavigate} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Posts1 = ({ data, loading }) => {
  const [dived, setDived] = useState(Math.round(data.length/4)+1)
  function dividing(){
    let arr = [];
    for (let i = 0; i<dived; i++){

      arr.push(
        <div>
        <SwiperSlide>
          <Card data={data[0 + i*4]}> </Card>
          <Card data={data[1 + i*4]}> </Card>
          <Card data={data[2 + i*4]}> </Card>
          <Card data={data[3 + i*4]}> </Card>
        </SwiperSlide>
        </div>
      )
    }
    return arr;}


  
  return(
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
        {/* <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}>
          {dividing()}
          <SwiperSlide>
  <Card data={data[0]}> </Card>
  <Card data={data[1]}> </Card>
  <Card data={data[2]}> </Card>
  <Card data={data[3]}> </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card data={data[4]}> </Card>
  <Card data={data[5]}> </Card>
  <Card data={data[6]}> </Card>
  <Card data={data[7]}> </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card data={data[8]}> </Card>
  <Card data={data[9]}> </Card>
  <Card data={data[10]}> </Card>
  <Card data={data[11]}> </Card>
  </SwiperSlide>

        </Swiper> */}
  
{/* <SwiperSlide>
          {
          data.map((a, i) => {
 
            return(

    <Card data={data[i]} i={i+1}> </Card>

            )
          })
        }
</SwiperSlide> */}


{/* {for (let i = 0; i < {dived}; i++;){
  <SwiperSlide>
  <Card data={data[0]}> </Card>
  <Card data={data[1]}> </Card>
  <Card data={data[2]}> </Card>
  <Card data={data[3]}> </Card>
  </SwiperSlide>
}} */}




    
    </>
  );
};



function Card(props){
    const navigate = useNavigate();
    const navigateToPurchase = () => {
      navigate(`${props.data && "/product/" + props.data.id}`);
    };
  
    return(
      // <div className='si'>
      <div className='heading-1'>
      <div className='new2' onClick = {navigateToPurchase}>
        {/* <Link to={props.data && "./" + props.data.id}>
          <button> */}
  
        {props.data && props.data.name}<br/>
        {props.data && props.data.rv}<br/>
        {props.data && props.data.sim}
        {/* </button>
        </Link> */}
      </div>  
      </div>
      // </div>
    )
  }

export default Posts1;