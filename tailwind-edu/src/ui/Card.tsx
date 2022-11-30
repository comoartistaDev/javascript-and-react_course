import { ArrowPathRoundedSquareIcon, ArrowUpTrayIcon, ChatBubbleOvalLeftIcon, EllipsisHorizontalIcon, HeartIcon } from "@heroicons/react/24/outline";
import { TweetAction } from "./TweetAction";

interface Props {

}

export function Card() {
  return (
    <div className="hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer flex items-start px-3 py-2 space-x-4">
      <div>
        <div className="bg-blue-500 rounded-full h-12 w-12"></div>
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex justify-between">
          <div className="text-sm flex items-center space-x-2">
            <a className="flex items-center space-x-2 group">
              <div className="font-semibold group-hover:underline">Name</div>
              <div className="text-gray-500">username</div>
            </a>
            <div className="text-gray-500">date</div>
          </div>
          <div className="text-gray-500">
            <EllipsisHorizontalIcon className="w-4 h-4" />
          </div>
        </div>
        <div>Tweet text</div>
        <div className="grid grid-cols-4">
          <TweetAction icon={ChatBubbleOvalLeftIcon} count={5} />
          <TweetAction icon={ArrowPathRoundedSquareIcon} count={10} color="green" />
          <TweetAction icon={HeartIcon} count={15} color="red" />
          <TweetAction icon={ArrowUpTrayIcon} />
        </div>
      </div>
    </div>
  );
}