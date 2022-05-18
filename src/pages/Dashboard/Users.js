import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';
import Loading from '../SharedPage/Loading/Loading';

const Users = () => {
    const {data:users, isLoading,refetch} = useQuery('users',()=>fetch('https://shrouded-hollows-10086.herokuapp.com/user',{
        method:'GET',headers:{authorization:`Bearer ${localStorage.getItem('accessToken')}`}
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-secondary text-3xl text-center'>All User</h1>

            <table className="table border w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr className='text-center'>
                        <th>Sl.no</th>
                        <th>User Email address</th>
                        <th>Make Role</th>
                        <th>Remove</th>
                        
                    </tr>
                </thead>

                {/* <!-- row 1 --> */}
                <tbody>

                    {
                        users.map((user, index) => <UserRow
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                        ></UserRow>)
                    }

                </tbody>





            </table>
        </div>
    );
};

export default Users;