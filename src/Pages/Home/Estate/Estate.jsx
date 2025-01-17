import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { Link } from 'react-router-dom';
import 'animate.css';
const Estate = ({ estate }) => {
    const { id, estate_title, price, status, facilities, location, image } = estate
    return (
        <div className={`card border bg-base-100 shadow-xl animate__animated animate__delay-1s ${id % 2 === 0 ? 'animate__lightSpeedInRight' : 'animate__lightSpeedInLeft'}`} >
            <div className='p-5 '>
                <img className='rounded-xl' src={image} alt="" />
            </div>

            <div className="card-body">
                <h2 className="card-title gap-6 flex justify-between">

                    <div className=''>
                        <p className='text-orange-300'>{status}</p>
                        <p className='font-semibold'>{estate_title}</p>
                    </div>
                    <p className='text-3xl font-semibold text-blue-400'>
                        {price}
                    </p>
                </h2>
                <p className='card-title'>Facilities -</p>
                <div className="card-actions">

                    {
                        facilities.map((facilitie, idx) => <div key={idx} className="badge badge-outline bg-green-600 text-white">{facilitie}</div>)
                    }
                </div>

                <div className='border-t mt-4'>
                    <p className='flex items-center gap-3 pt-2'><SlLocationPin></SlLocationPin>{location}</p>

                </div>

                <div className='justify-end flex  mt-2'>

                    <Link to={`/estateDetails/${id}`}><button className=' btn px-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white '>View</button></Link>
                </div>
            </div>
            {/* <div className="badge badge-secondary">NEW</div> */}
        </div>
    );
};

Estate.propTypes = {
    estate: PropTypes.object
}

export default Estate;