import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index,refetch}) => {
    const {email,role} = user;
    const makeAdmin = () =>{
        fetch(`https://shrouded-hollows-10086.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers:{authorization:`Bearer ${localStorage.getItem('accessToken')}`}
        })
        .then(res =>{
            if(res.status === 403){
                toast.error('Failed to make Admin ')
            }
            return res.json()})
        .then( data => {
            if(data.modifiedCount > 0){                
                refetch();
                toast.success(`Successfully added to Admin`);
            }
            
        })
    }
    return (
        <tr>
            <th>{index + 1} </th>
            <td>{email} </td>
            <td> {role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs btn-primary '>Make Admin</button> }   </td>
            <td>{role !== 'admin' && <button className='btn btn-xs border-0 bg-red-500 hover:bg-red-700 text-white'>Delete</button>} </td>
        </tr>
    );
};

export default UserRow;