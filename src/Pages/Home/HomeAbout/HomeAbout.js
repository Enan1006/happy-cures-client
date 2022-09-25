import React from 'react';
import doctor from '../../../Images/doctor/doctor-1.png';
const HomeAbout = () => {
    return (
        <div className='m-5 md:m-20'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <img src={doctor} alt="" srcset="" />
                </div>
                <div className='my-auto'>
                    <h3 className='text-lg font-semibold text-blue-600 bg-blue-100 grid align-middle w-1/2'>WHAT ABOUT US</h3>
                    <h2 className='text-3xl font-bold text-slate-700 mt-3'>The Heart And Science Of Medic Test</h2>
                    <p className='mt-5'>It is a long established fact that a reader will be distracted by at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className='mt-3'>
                        <p><i class="fa-sharp fa-solid fa-check"></i>Comprehensive Inpatient Services</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i>Medical And Surgical Services</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i>Outpatient Services</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i>Medicine and instrument</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i>Specialised Support Service</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i>Instant Operation and Appointment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;