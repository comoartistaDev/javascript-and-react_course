import { 
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export function SearchInput() {
  return (
    <div className='hidden md:block w-1/4 sticky top-0 h-full py-2 px-4'>
      <div className='rounded-full bg-gray-800 w-full flex items-center border border-transparent transition focus-within:border-blue-500 focus-within:text-blue-400 text-gray-500'>
          <MagnifyingGlassIcon className='w-6 h-6 ml-4'/>
          <input className='bg-transparent w-full focus:outline-none px-4 py-2 text-gray-100' placeholder='Search Twitter' />
        </div>
    </div>
  )
}