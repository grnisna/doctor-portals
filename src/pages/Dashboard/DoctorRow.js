import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeleteDoctor }) => {
    const { name, specialty, img, email } = doctor;

  
    return (
        <tr>
            <th>{index + 1} </th>
            <div class="avatar">
                <div class="w-16 rounded-full">
                    <img className='img-fluid' src={img} alt='' />
                </div>
            </div>
            <td>{name} </td>
            <td>{specialty}</td>

            <td>
                <label for="my-modal-6" onClick={()=>setDeleteDoctor(doctor)} class="btn btn-error btn-xs">Delete</label>
                
            </td>
        </tr>
    );
};

export default DoctorRow;