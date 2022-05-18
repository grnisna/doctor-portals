import React from 'react';


const DoctorRow = ({ doctor, index, refetch, setDeleteDoctor }) => {
    const { name, specialty, img } = doctor;

  
    return (
        <tr>
            <th>{index + 1} </th>
            <div className="avatar">
                <div className="w-16 rounded-full">
                    <img className='img-fluid' src={img} alt='' />
                </div>
            </div>
            <td>{name} </td>
            <td>{specialty}</td>

            <td>
                <label htmlFor="my-modal-6" onClick={()=>setDeleteDoctor(doctor)} className="btn btn-error btn-xs">Delete</label>
                
            </td>
        </tr>
    );
};

export default DoctorRow;