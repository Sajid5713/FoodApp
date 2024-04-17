import { LiaStarSolid as Star ,LiaShippingFastSolid as Fast , LiaMoneyBillAlt as Price  } from 'react-icons/lia';


const ResFilters = () =>{

    return(
        <>
        <h1>Restaurants with online food delivery in Islamabad</h1>
        <div className='filters flex gap-2 pt-5 pb-8'>
        <button className='flex items-center gap-1'><Fast/> Fast Delivery</button>
        <button className='flex items-center gap-1'><Star/> Rating 4.0+</button>
        <button className='flex items-center gap-1'><Price/> Rs. 300-600</button>
        <button className='flex items-center gap-1'><Price/> Less than Rs. 300</button>
        </div>
        </>
    )
}

export default ResFilters;