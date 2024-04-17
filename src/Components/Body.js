import { useEffect, useState } from 'react';
import ResMenu from './ResMenu';
import {LiaArrowRightSolid  as ArrowRight , LiaArrowLeftSolid  as ArrowLeft ,  } from 'react-icons/lia';
import { API_URL } from '../utils/constant';
import ResFilters from './ResFilters'
import ResCarousal from './ResCarousal';

const Body = () => {
    const[resData, setResData] = useState([]);
    const[resSlider,setResSlider] = useState([]);
  
     useEffect( ()=>{
      fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(API_URL)
        const json = await data.json();
        // console.log(json?.data)

        setResData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResSlider(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log('useEffect')
    }

    // console.log('resData')
    // console.log(resSlider)
    // debugger
  
  return (resData.length === 0 && resSlider.length === 0) ? 'Loading....': (
    <>
      <div className="container py-5 w-[961px] max-[768px]:w-full max-[768px]:px-[64px] max-[480px]:px-[32px]  ">
        
        <div className='carousalRestaurant'>
        <div className='flex justify-between items-center mb-8'>
            <h1 className='m-0'>Top restaurant chains in Mumbai</h1>
            <div className='flex gap-2'>
              <button className='text-xl p-2' ><ArrowLeft/></button>
              <button className='text-xl p-2' ><ArrowRight/></button>
            </div>
          </div>
          <div className='restaurantMenu flex gap-5 overflow-x-scroll '>
              {resSlider.map((item)=>{
                return( 
                    <ResCarousal key={item?.info?.id} items={item} />
                );
              })}
          </div>
        </div>
        <hr className='border my-8'/>
        <div className='filters'>
          <ResFilters/>
        </div>
        <div className="res-container grid grid-cols-4 gap-5 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
          {resData.map((item) => {
            return (
              <ResMenu key={item?.info?.id}  data={item}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
