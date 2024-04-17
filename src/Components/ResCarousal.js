import { IMAGE_URL } from '../utils/constant';
import { LiaStarSolid as Star, LiaMapMarkerSolid  as Location} from 'react-icons/lia';

const ResCarousal = (props) => {
    const{name,cloudinaryImageId,avgRating,cuisines,areaName} = props?.items?.info;
    const{slaString} = props?.items?.info?.sla;

    // console.log(props)

    const handleLeftClick = () => {

    }

    const handleRightClick = () => {
    //   console.log('this');
    }
    
    return(
        <>
        <div  className='resBox min-w-[25%] transform hover:scale-[0.95] transition-all duration-300 ease-out'>
            <div className='image h-[160px] rounded-lg overflow-hidden shadow-md border'>
                <img className='w-full h-[160px] object-cover' src={IMAGE_URL + cloudinaryImageId} alt='image' />
            </div>
            <div className='res-info px-3 py-2'>
                <h3 className='truncate'>{name}</h3>
                <div className='flex items-center gap-2 mb-1'>
                    <i><Star/></i>
                    <span className='font-bold'>{avgRating} - {slaString}</span>
                </div>
                <p className='text-sm text-slate-400 break-words mb-1 truncate'>{cuisines.join(',')}</p>
                <p className='flex items-center text-sm text-slate-400 mb-1'>
                    <i><Location/></i>
                    <span>{areaName}</span>
                </p> 
            </div>
        </div>
        </>
    );
}

export default ResCarousal;