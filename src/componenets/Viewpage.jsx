import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addtopaste, updatetopaste } from '../redux/pasteslice'; 

const Viewpage = () => {
    const {id}=useParams();
    const allpaste=useSelector((state)=>state.paste.pastes);
    const paste=allpaste.filter((p)=>p._Id===id)[0];
    return (
        <div>

            <div className='flex flex-row gap-2 place-content-between' >
                <input disabled className='p-2 rounded-2xl mx-2 bg-black w-[60%]'
                    type="text"
                    placeholder='enter title here'
                    value={paste.title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {/* <button className='bg-blue-500 p-2 rounded-2xl text-white' onClick={handleSubmit}>{pasteId ? "Update Paste" : "Create My Paste"}</button> */}
            </div>
            <div>
                <textarea disabled className='p-2 rounded-2xl mt-4 min-w-[450px] bg-black'
                    placeholder='enter your paste here'  value={paste.content} rows={20} />
            </div>

        </div>
    )
}

export default Viewpage
