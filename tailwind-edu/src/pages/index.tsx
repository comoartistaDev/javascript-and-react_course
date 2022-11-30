import { 
  HomeIcon,  
  BellIcon, 
  ChatBubbleLeftEllipsisIcon,
  HashtagIcon
} from '@heroicons/react/24/outline';
import { Card } from '~/ui/Card';
import { NavLink } from '~/ui/NavLink';

// import styles from '../styles/Home.module.css'


function Tweets() {
  return (
    <div className='divide-y divide-gray-800'>
      {Array.from({ length: 1000}, (_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}
export default function Home() {
  return (
    <div className='flex min-h-screen'>
      <div className='w-auto lg:w-1/4 py-2 px-4 sticky top-0 h-full'>
        <div className='flex flex-col space-y-2 '>
          <NavLink icon={HomeIcon} label="Home"/>
          <NavLink icon={HashtagIcon} label="Explore"/>
          <NavLink icon={BellIcon} label="Notifications"/>
          <NavLink icon={ChatBubbleLeftEllipsisIcon} label="Messages"/>
        </div>
      </div>
      <div className='flex-1'>
          <Tweets />
      </div>
      <div className='hidden md:block w-1/4 sticky top-0 h-full'>Right</div>
    </div>
  )
}
