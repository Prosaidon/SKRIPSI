import React, {useContext, useState, useEffect} from 'react'
import {FaEye, FaEdit, FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {base_url} from '../../config/config'
import axios from 'axios'
import storeContext from '../../context/storeContext'
import {convert} from 'html-to-text'
//import { all_news } from '../../../../backend/routes/newsRoute'


const NewContent = () => {

    const { store } = useContext(storeContext)
    const [news, setNews] = useState([])
    const [all_news, set_all_news] = useState([])

    const [parPage, setParPage] = useState(5)
    const [pages, setPages] = useState(0)
    const [page, setPage] = useState(1)

    const get_news = async () => {
        
        try {
            const { data } = await axios.get(`${base_url}/api/news`,{
                headers: {
                     "Authorization": `Bearer ${store.token}`
                }
            })
            console.log(data)
            set_all_news(data.news)
            setNews(data.news)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        get_news()
    },[])

    useEffect(() => {
        if(news.length > 0){
            const calculate_page = Math.ceil(news.length/parPage)
            setPages(calculate_page)
        }
    },[news,parPage])

    console.log(news); // Untuk memastikan data yang diterima di NewContent

    const type_filter = (e) => {
        const tempNews = all_news.filter(n=>n.status === e.target.value)
        setNews(tempNews)
        setPage(1)
        setParPage(5)
    }

    const search_news = (e) => {
        const searchValue = e.target.value.toLowerCase(); // Ambil input dari user
        const tempNews = all_news.filter(n => n.title.toLowerCase().includes(searchValue));
        setNews(tempNews)
        setPage(1)
        setParPage(5)
    }

  return (
    <div>
        <div className='px-4 py-3 flex gap-x-3'>
            <select name='' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id=''>
                <option value="">---select type---</option>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
            </select>
            <input onChange={search_news} type='text' placeholder='search news' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'/>
        </div>
        <div className='relative overflow-x-auto p-4'>
            <table className='w-full text-sm text-left text-slate-600'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th className='px-7 py-3'>No</th>
                        <th className='px-7 py-3'>Title</th>
                        <th className='px-7 py-3'>Image</th>
                        <th className='px-7 py-3'>Category</th>
                        <th className='px-7 py-3'>Description</th>
                        <th className='px-7 py-3'>Date</th>
                        <th className='px-7 py-3'>Status</th>
                        <th className='px-7 py-3'>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        news.length> 0 && news.slice((page-1)*parPage, page*parPage).map((n, i) => <tr key={i} className='bg-white border-b'>
                        <td className='px-6 oy-4'>{i+1}</td>
                        <td className='px-6 oy-4'>{n.title.slice(0,15)}...</td>
                        <td className='px-6 oy-4'>
                            <img className='w-[40px] h-[40px]' src={n.image}/>
                        </td>
                        <td className='px-6 oy-4'>{n.category}</td>
                        <td className='px-6 oy-4'>{convert(n.description).slice(0,15)}...</td>
                        <td className='px-6 oy-4'>{n.date}</td>
                        <td className='px-6 oy-4'>
                            <span className='px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer'>{n.status}</span>
                        </td>
                        <td className='px-6 oy-4'>
                            <div className='flex justify-start items-center gap-x-4 text-white'>
                                <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye /></Link>        
                                <Link className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50'><FaEdit /></Link>
                                <div className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'><FaTrash /></div>        
                            </div>
                        </td>
                    </tr>
                    )
                    }
                    
                </tbody>
            </table>
        </div>
        <div className='flex items-center justify-end px-10 gap-x-3 text-slate-600'>
            <div className='flex gap-x-3 justify-center items-center'>
                <p className='px-4 font-semibold text-sm'>New par page</p>
                <select value={parPage} onChange={(e) => setParPage(parseint(e.target.value))} name='category' id='category' className='px-3 py-2 rounded-md outline-0 
                 border border-gray-30 0 focus:border-green-500 h-10'>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
              </select>
            </div>
            <p className='px-6 font-semibold text-sm'>
                {(page -1)*parPage + 1}/{news.length} - of {pages}
            </p>
            <div className='flex items-center gap-x-3'>
                <IoIosArrowBack onClick={() => {
                    if (page > 1) setPage(page -1)
                }} className='w-5 h-5 cursor-pointer'/>
                <IoIosArrowForward onClick={() => {
                    if (page < pages) setPage(page + 1)
                }} className='w-5 h-5 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default NewContent
