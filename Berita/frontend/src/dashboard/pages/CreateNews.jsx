import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaCloudUploadAlt } from "react-icons/fa";
import JoditEditor from 'jodit-react'
import Gallery from '../components/Gallery';

const CreateNews = () => {

    const [show, setShow] = useState(false)
    const editor = useRef(null)

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')

    const imageHandle = (e) => {

        const {files} = e.target 
        
        if(files.length > 0) {
            setImg(URL.createObjectURL(files[0]))
            setImage(files[0])
        }
    }

    const added = (e) => {
        e.preventDefault()
        const formData = new formData()
        formData.append('title',title)
        formData.append('description',description)
        formData.append('image',image)
        try{
            
        }catch(error){

        }
    }

    return (
        <div className=' bg-white rounded-md'>
            <div className=' flex justify-between p-4'>
                <h2 className='text-x1 font-medium'>Add News</h2>
                <Link className='px-3 py-[6px] bg-purple-500 rounded-md text-white
                    hover:bg-purple-600' to='/dashboard/news'>News</Link>
            </div>
            <div className='p-4'>
                <form onSubmit={added} >
                    <div className='flex flex-col gap-y-2 mb-6'>
                        <label className='text-md font-medium text-gray-600' 
                        htmlFor='title'>Title</label>
                        <input required value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='title' name='title' className='px-3 py-2 rounded-md outline-0 border border-gray-300
                        focus:border-green-500 h-10' id='title'/>
                    </div>
                    <div className='mb-6'>
                        <div>
                            <label htmlFor='img' className={'w-full h-[240px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashhed'}>
                            {                  
                                    img ? <img src={img} className='w-full h-full' alt='image'/> : <div className='flex justify-center items-center flex-col gap-y-2'>
                                    <span className='text-2x1'><FaCloudUploadAlt /></span>
                                    <span>Select Image</span>
                                    </div>
                                }
                            </label>
                            <input required onChange={imageHandle} className='hidden' type='file' id='img'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2 mb-6'>
                        <div className='flex justify-start items-center gap-x-2'>
                            <h2>Description</h2>
                            <div onClick={() => setShow(true)}>
                                <span className='text-2x1 cursor-pointer'><FaCloudUploadAlt /></span>
                            </div>
                        </div>
                        <div>
                            <JoditEditor
                                ref={editor}
                                value={description}
                                tabIndex={1}
                                onBlur={value => setDescription(value)}
                                onChange={() => { }}
                            />  
                        </div>
                    </div>

                    <div className='mt-4'>
                        <button className='px-3 py-[6px] bg-purple-500 rounded-md text-white hover:bg-purple-600'>Add News</button>
                    </div>
                </form>
            </div>
            {
                show && <Gallery setShow={setShow} images={[]}/>
            }
        </div>
    )
}

export default CreateNews
