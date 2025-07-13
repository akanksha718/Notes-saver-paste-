import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addtopaste, updatetopaste } from '../redux/pasteslice';
const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchparams, setseachparams] = useSearchParams();
    const pasteId = searchparams.get('pasteid');
    const alldata = JSON.parse(localStorage.getItem('pastes')) || [];
    const dispach = useDispatch();
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleSubmit = (e) => {
        if (title.trim() === '') {
            alert('Title cannot be empty');
            return;
        }
        const pastes = {
            title: title,
            content: value,
            _Id: pasteId || Date.now().toString(34),
            createid: new Date().toISOString(),
        }
        if (pasteId) {
            dispach(updatetopaste(pastes))
        }
        else {
            dispach(addtopaste(pastes))
        }
        setTitle('')
        setValue('');
        setseachparams({});
    };
  useEffect(() => {
    if (pasteId) {
        const paste = alldata.find(p => p._Id === pasteId);
        if (paste) {
            setTitle(paste.title);
            setValue(paste.content);
        } else {
            alert('Paste not found');
        }
    }
}, [pasteId])
    return (
        <div >
            <div className='flex flex-row gap-2 place-content-between' >
                <input className='p-2 rounded-2xl mx-2 bg-black w-[60%]'
                    type="text"
                    placeholder='enter title here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className='bg-blue-500 p-2 rounded-2xl text-white' onClick={handleSubmit}>{pasteId ? "Update Paste" : "Create My Paste"}</button>
            </div>
            <div>
                <textarea className='p-2 rounded-2xl mt-4 min-w-[450px] bg-black'
                    placeholder='enter your paste here' onChange={handleChange} value={value} rows={20} />
            </div>
        </div>
    )
}

export default Home
