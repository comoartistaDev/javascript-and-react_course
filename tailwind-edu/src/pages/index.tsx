import { 
  HomeIcon,  
  BellIcon, 
  ChatBubbleLeftEllipsisIcon,
  HashtagIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { Card } from '~/ui/Card';
import { NavLink } from '~/ui/NavLink';

// import styles from '../styles/Home.module.css'


function Tweets() {
  return (
    <div className='divide-y divide-gray-800'>
      {Array.from({ length: 50}, (_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}
export default function Home() {
  return (
    <div className='flex md:flex-row flex-col-reverse min-h-screen max-w-7-xl mx-auto'>
      <div className='bg-gray-800 md:bg-transparent w-auto lg:w-1/4 py-2 px-4 sticky bottom-0 md:top-0 h-full'>
        <div className='grid grid-cols-4 md:flex md:flex-col space-y-2 '>
          <NavLink icon={HomeIcon} label="Home"/>
          <NavLink icon={HashtagIcon} label="Explore"/>
          <NavLink icon={BellIcon} label="Notifications"/>
          <NavLink icon={ChatBubbleLeftEllipsisIcon} label="Messages"/>
        </div>
      </div>
      <div className='flex-1'>
          <Tweets />
      </div>
      <div className='hidden md:block w-1/4 sticky top-0 h-full py-2 px-4'>
        <div className='rounded-full bg-gray-800 w-full flex items-center border border-transparent transition focus-within:border-blue-500'>
          <MagnifyingGlassIcon className='w-6 h-6 ml-4 text-gray-500'/>
          <input className='bg-transparent w-full focus:outline-none px-4 py-2' placeholder='Search Twitter' />
          </div>
      </div>
    </div>
  )
}
