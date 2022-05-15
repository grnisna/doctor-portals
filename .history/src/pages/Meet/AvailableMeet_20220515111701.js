import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../SharedPage/Loading/Loading';


const AvailableMeet = ({date}) => {
    const [meeting,setMeeting] = useState([]);
    const [treatment, setTreatement] = useState(null);

    const formatedDate = format(date,"PP");
    // const {data:meeting,isLoading} = useQuery(['engage',formatedDate],()=>fetch(`http://localhost:5000/engage?date=${formatedDate}`).then( res => res.json()))

//     const { isLoading, error, data:meeting, refetch } = useQuery(['engage',formatedDate], () =>
//      fetch(`http://localhost:5000/engage?date=${formatedDate}`).then(res =>
//        res.json()
//      )
//    )
//    console.log(meeting);

//         if(isLoading){
//             return <Loading></Loading>
//         }
    useEffect( ()=>{
        const url = `http://localhost:5000/engage?date=${formatedDate}`;
        console.log(url);
        fetch(url)
        .then( res => res.json())
        .then ( data => setMeeting(data)); 
    } ,[formatedDate]);

    return (
        <div className='my-20 py-10'>
            <p className='text-center text-secondary font-bold text-3xl' >Available Appointments On: <span >  {format(date,'PP')}</span> </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10' >
                {
                    meeting.map(meet=> <Service
                        key={meet._id}
                        meet={meet}
                        setTreatement={setTreatement}
                    ></Service>)
                }
            </div>
            
            {treatment && <BookingModal treatement={treatment} date={date} setTreatement={setTreatement}></BookingModal>}
        </div>
    );
};

export default AvailableMeet;