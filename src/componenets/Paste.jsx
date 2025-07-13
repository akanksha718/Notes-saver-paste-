import { couch } from 'globals';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removefrompaste } from '../redux/pasteslice';
import { toast } from 'react-toastify';
const Paste = () => {
    const pastes = useSelector((state) => state.paste.pastes);
    const [seachterm, setSearchTerm] = React.useState('');
    const dispach = useDispatch();
    function handledelete(pasteid) {
        dispach(removefrompaste(pasteid));
    }
    const filterdata = pastes.filter((paste) => paste.title.toLowerCase().includes(seachterm.toLowerCase()));
    return (
        <div className='flex flex-col'>
            <input type='seach' className='p-2 rounded-2xl mx-2 bg-black w-[450px]' placeholder='search your pastes here' value={seachterm} onChange={(e) => setSearchTerm(e.target.value)} />
            <div className='flex flex-col gap-2 mt-4'>{
                filterdata.map((pastes) => {
                    return <div className='border' key={pastes._Id}>
                        {pastes.title}
                        <div>
                            {pastes.content}
                        </div>
                        <div className='flex flex-row gap-4 place-content-evenly'>
                            <button ><a href={`/?pasteid=${pastes._Id}`}>Edit</a></button>
                            <button><a href={`/pastes/${pastes._Id}`}>View</a>
                            </button>
                            <button onClick={() => handledelete(pastes._Id)}>
                                delete
                            </button>
                            <button onClick={() => { navigator.clipboard.writeText(pastes.content); toast.success("copied..") }}>Copy</button>
                            <button>Share</button>
                        </div>
                        <div>
                            {pastes.createid}
                        </div>

                    </div>
                }
                )

            }
            </div>
        </div>
    )
}

export default Paste
