import React from 'react'
import { Link } from 'react-router-dom'

const AddWriter = () => {
  return (
    <div className='bg-white rounded-md'>
      <div className=' flex justify-between p-4'>
          <h2 className='text-x1 font-medium'>Add writers</h2>
          <Link className='px-3 py-[6px] bg-purple-500 rounded-md text-white
              hover:bg-purple-600' to='/dashboard/writers'>Writers</Link>
      </div>
      <div className='p-4'>
        <form>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='name'>Name</label>
              <input type='text' placeholder='name' name='name' className='px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-green-500 h-10' id='name'/>
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='category'>Category</label>
              <select name='category' id='category' className='px-3 py-2 rounded-md outline-0 
              border border-gray-30 0 focus:border-green-500 h-10'>
                <option value="">---select category---</option>
                <option value="">Peristiwa</option>
                <option value="">Pemerintahan</option>
                <option value="">Hukum & Kriminal</option>
                <option value="">Bisnis & Ekonomi</option>
                <option value="">Politik</option>
                <option value="">Sosial Budaya</option> 
              </select>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='email'>Email</label>
              <input type='email' placeholder='email' name='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-green-500 h-10' id='email'/>
            </div>
            <div className='flex flex-col gap-y-2'>
              <div className='flex flex-col gap-y-2'>
                <label className='text-md font-medium text-gray-600' htmlFor='password'>Password</label>
                <input type='password' placeholder='password' name='password' className='px-3 py-2 rounded-md outline-0 border border-gray-300
                focus:border-green-500 h-10' id='password'/>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <button className='px-3 py-[6px] bg-purple-500 rounded-md text-white hover:bg-purple-600'>Add Writer</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddWriter
