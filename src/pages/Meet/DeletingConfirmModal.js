import React from 'react';
import { toast } from 'react-toastify';

const DeletingConfirmModal = ({ deleteDoctor ,refetch,setDeleteDoctor}) => {
    const { name, specialty, img, email } = deleteDoctor;

    const handleDelete =() => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success('successFully DELETED');
                    setDeleteDoctor(null);
                    refetch();
                }
            })
    }

    return (
        <div>


            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <div class="avatar">
                        <div class="w-24 mask mask-hexagon">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <h3 class="font-bold text-lg">{name} </h3>
                    <p class="py-4 text-error">Are you Sure want to Delete {specialty}</p>
                    <div class="modal-action">
                    <button onClick={() => handleDelete(email)} className='btn btn-error btn-xs' >Remove</button>
                        <label for="my-modal-6" class="btn btn-primary btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeletingConfirmModal;