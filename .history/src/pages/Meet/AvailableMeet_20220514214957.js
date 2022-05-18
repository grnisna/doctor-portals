import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../SharedPage/Loading/Loading';


const AvailableMeet = ({date}) => {
    // const [meeting,setMeeting] = useState([]);
    const [book, setBook] = useState(null);

    const formatedDate = format(date,"PP");
    // const {data:meeting,isLoading} = useQuery(['engage',formatedDate],()=>fetch(`https://shrouded-hollows-10086.herokuapp.com/engage?date=${formatedDate}`).then( res => res.json()))

    const { isLoading, error, data:meeting } = useQuery(['engage',formatedDate], () =>
     fetch(`https://shrouded-hollows-10086.herokuapp.com/engage?date=${formatedDate}`).then(res =>
       res.json()
     )
   )

        if(isLoading){
            return <Loading></Loading>
        }
    // useEffect( ()=>{
    //     fetch(`https://shrouded-hollows-10086.herokuapp.com/engage?date=${formatedDate}`)
    //     .then( res => res.json())
    //     .then ( data => setMeeting(data)); 
    // } ,[formatedDate]);

    return (
        <div className='my-20 py-10'>
            <p className='text-center text-secondary font-bold text-3xl' >Available Appointments On: <span >  {format(date,'PP')}</span> </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10' >
                {
                    meeting.map(meet=> <Service
                        key={meet._id}
                        meet={meet}
                        setBook={setBook}
                    ></Service>)
                }
            </div>
            
            {book && <BookingModal book={book} date={date} setBook={setBook}></BookingModal>}
        </div>
    );
};

export default AvailableMeet;