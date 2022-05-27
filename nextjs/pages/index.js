import { FaBars } from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <div className="bg-white-500 fixed flex h-14 inset-x-0 items-center justify-between px-4 shadow-lg text-black top-0">
        <div className='flex justify-start items-center'>
          {/* navbar open sidebar button*/}
          <button className="p-2 rounded-full transition hover:bg-purple">
            <FaBars />
          </button>
          {/* navbar logo */}
          <div className='text-black-500 ml-4'>
            Dokumen
          </div>
        </div>

        <Image
            src={"/profile.jpg"}
            alt="Picture of the author"
            width="30px"
            height="30px"
            className="rounded-full align-middle"
          />
      </div>
    </div>
    
  );
}
