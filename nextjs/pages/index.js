import { FaBars, FaTimes, FaHome,FaSignInAlt ,FaSignOutAlt} from 'react-icons/fa'
// import Image from 'next/image'
import NextLink from 'next/link'
import {useState} from 'react'
import Head from 'next/head'

export default function Home() {
  // sidebar open and close state
  const[sidebar,setSidebar] = useState(false)
  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
    <div>
      <Head>
        <title>Nahu.id</title>
      </Head>
    </div>
    {/* header */}
    <div>
      {/* navbar */}
      <div className="bg-white flex h-20 inset-x-0 items-center justify-between px-4 shadow-sm shadow-purple text-black top-0">
        <div className='flex justify-start items-center'>
          {/* navbar open sidebar button*/}
          <button className="p-2 rounded-full transition hover:bg-purple" onClick={handleSidebar}>
            <FaBars />
          </button>
          {/* navbar logo */}
          <div className='text-black ml-4'>
            Dokumen
          </div>
        </div>

        <img
            src={"/profile.jpg"}
            alt="Picture of the author"
            width="30px"
            height="30px"
            className="rounded-full align-middle p-2"
          />
      </div>
    </div>

    {/* sidebar container */}
    <div>
      {/* sidebar overlay*/}
      <div className={sidebar ? "bg-black cursor-pointer fixed inset-0 opacity-30 visible" :"hidden opacity-0"} onClick={handleSidebar}></div>
      {/* sidebar */}
      <div className={sidebar ? "bg-purple duration-300 fixed inset-y-0 py-4 left-0 transition-left w-64" : "bg-purple duration-500 fixed inset-y-0 py-4 -left-full transition-left w-64" }>
        {/* sidebar close button*/}
        <button className='absolute right-4 p-1 rounded-full text-white top-4 transition hover:text-black' onClick={handleSidebar}>
          <FaTimes />
        </button>
        {/* sidebar menu */}
        <ul className='font-normal text-white'>
          <li onClick={handleSidebar}>
            <NextLink href='/'>
              {/* active item */}
              <a className='bg-purple font-medium inline-flex items-center px-4 py-2 transition w-full mt-16 hover:text-black'>
                <FaHome className="mr-3" />
                Home
              </a>
            </NextLink>
          </li>
          <li onClick={handleSidebar}>
            <NextLink href='/posts/login'>
              {/* active item */}
              <a className='bg-purple font-medium inline-flex items-center px-4 py-2 transition w-full mt-4 hover:text-black'>
                <FaSignInAlt className="mr-3" />
                Sign In
              </a>
            </NextLink>
          </li>
        </ul>
      </div>
    </div>

    {/* body */}
    <div className='flex justify-between p-12 h-screen item-center'>

      {/* input section */}
      <div className='bg-white font-normal text-xs w-3/4 h-4/5 mr-16'>
        <form className='w-full h-3/4 mt-4' action="/send-data-here" method="post">
          {/* textarea */}
          <textarea id="message" className="border-transparent focus:border-transparent focus:ring-0 w-full h-full block p-2.5 text-sm rounded-lg outline-none focus:outline-0" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh felis imperdiet vitae amet sit non ut. Ipsum sagittis, leo, semper facilisis urna, tempus. Diam id sit nulla risus risus nunc. Eu eu neque nullam neque vivamus accumsan. Lobortis vitae gravida ornare at. Ac arcu quis ornare quis facilisis cras. Ac arcu nisi massa consectetur non volutpat hac. Ac eget ut aliquam maecenas posuere consequat adipiscing scelerisque. Ipsum dictum aliquet sit gravida rhoncus. A metus, sem bibendum posuere pulvinar diam fringilla. Nulla nunc aenean gravida enim et tortor non vitae mauris.
          Suspendisse orci, et est, dictum placerat semper amet nulla. Volutpat cras aliquet ut sed. Neque, eget lobortis nam lorem id porttitor. Sed quis nam morbi quisque orci proin. Gravida mauris aliquam in in. Quis maecenas facilisis phasellus auctor. Sed ut luctus etiam purus elit urna. Placerat morbi nunc velit, risus tincidunt ac ornare dictum donec. Elit ut nibh eget vel accumsan, neque. Orci in mattis ultricies lobortis neque nisl mollis enim. Euismod et, diam at massa nullam tristique. Purus urna cursus nisl placerat. Non iaculis lectus mauris enim ut consequat malesuada.
          Lacinia id proin habitasse ac dis sem feugiat consequat vel. Sem venenatis in ut fringilla. Amet, sapien suspendisse vitae ultricies dolor. Rhoncus ut adipiscing vitae nisi. Phasellus vehicula lacinia volutpat enim et morbi. Sed sagittis, vulputate aliquet in arcu sed id. Volutpat convallis varius volutpat morbi eleifend ut. In fermentum, tortor velit, ac vitae, nulla eget purus. At amet, arcu, ac enim lectus. Elit ut nibh eget vel accumsan, neque. Orci in mattis ultricies lobortis neque nisl mollis enim. Euismod et, diam at massa nullam tristique. Purus urna cursus nisl placerat. Non iaculis lectus mauris enim ut consequat malesuada.
          Lacinia id proin habitasse ac dis sem feugiat consequat vel. Sem venenatis in ut fringilla. Amet, sapien suspendisse vitae ultricies dolor. Rhoncus ut adipiscing vitae nisi. Phasellus vehicula lacinia volutpat enim et morbi. Sed sagittis, vulputate aliquet in arcu sed id. Volutpat convallis varius volutpat morbi eleifend ut. In fermentum, tortor velit, ac vitae, nulla eget purus. At amet, arcu, ac enim lectus. Rhoncus ut adipiscing vitae nisi. Phasellus vehicula lacinia volutpat enim et morbi. Sed sagittis, vulputate aliquet in arcu sed id. Volutpat convallis varius volutpat morbi eleifend ut. In fermentum, tortor velit, ac vitae, nulla eget purus. At amet, arcu, ac enim lectus. "></textarea>
          
          {/* button submit */}
          <div className='w-full flex justify-center'>
            <button type="submit" className="mt-12 shadow-md shadow-purple rounded-full px-5 py-2.5 text-sm font-medium text-center text-white bg-purple hover:text-black">
              Koreksi Dokumen

            </button>
          </div>
        </form>
      </div>

      {/* output section */}
      <div className='bg-white font-normal text-sm w-1/4'>
        Saran Koreksi
        
        {/* correction pop-up 1 */}
        <div className='rounded-lg bg-purple-light px-5 py-2.5 mt-4'>
          {/* correction type */}
          <div className='flex items-center justify-start'>
            <div className='w-1 h-1 bg-black rounded-full mr-2'></div>
            <p className='font-bold text-xs'>Punctuation</p>
          </div>
          {/* correction explanation */}
          <div className='text-xs mt-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        {/* correction pop-up 2 */}
        <div className='rounded-lg bg-purple-light px-5 py-2.5 mt-4'>
          {/* correction type */}
          <div className='flex items-center justify-start'>
            <div className='w-1 h-1 bg-black rounded-full mr-2'></div>
            <p className='font-bold text-xs'>Punctuation</p>
          </div>
          {/* correction explanation */}
          <div className='text-xs mt-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
