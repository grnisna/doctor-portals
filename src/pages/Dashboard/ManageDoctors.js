import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeletingConfirmModal from '../Meet/DeletingConfirmModal';
import Loading from '../SharedPage/Loading/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {

    const [deleteDoctor, setDeleteDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://shrouded-hollows-10086.herokuapp.com/doctor', {
        method: 'GET', headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-2xl">Manage Docotrs:{doctors.length} </h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                            <th>SL.No</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor,index) => <DoctorRow
                            
                            key={doctor._id}
                            doctor={doctor}
                            index= {index}
                            refetch= {refetch}
                            setDeleteDoctor={setDeleteDoctor}
                            ></DoctorRow> )
                        }

                    </tbody>
                </table>
            </div>

            {deleteDoctor && <DeletingConfirmModal 
            refetch={refetch} 
            deleteDoctor={deleteDoctor} 
            setDeleteDoctor={setDeleteDoctor}
            ></DeletingConfirmModal>}
        </div>
    );
};

export default ManageDoctors;