import { FaBars, FaTimes, FaHome,FaSignInAlt ,FaCheckCircle} from 'react-icons/fa'
import NextLink from 'next/link'
import React, {useState, useEffect} from 'react'
import Head from 'next/head'
// import Image from 'next/image'

export default function Home() {
  // sidebar open and close state
  const[sidebar, setSidebar] = useState(false)
  const[isModal, setModal] = useState(false)
  const[isLoading, setLoading] = useState(false)
  const[document, setDocument] = useState('')
  const[corrections, setCorrections] = useState({})
  console.log(isModal)
  const handleSidebar = () => {
    setSidebar(!sidebar)
  }
  const handleTextArea = (e) => {
    setDocument(e.target.value)
  }
  const handleSubmit = async () => {
    const res = await getCorrection(document);
    setCorrections(res);
    if (!('koreksi' in Object.keys(res))){
      setModal(true);
    }
    setLoading(false);
    console.log(`abc ${Object.keys(res)}`);
  }
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    (async () => {
      setUserInfo(await getUserInfo());
    })();
  }, []);

  async function getUserInfo() {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal;
    } catch (error) {
      console.error('No profile could be found');
      return undefined;
    }
  }

  async function getCorrection(text) {
    try {
      setLoading(true);
      const response = await fetch(`https://salmon-flower-08bbc8500.1.azurestaticapps.net/api/CreateKoreksi?text=${text}&code=RA2cPkOjyNU68LmlSn0_42NnLYVRhKCTrQ9RinxGwbIbAzFuEePHgw==`);
      const payload = await response.json();
      return payload;
    } catch (error) {
      console.error('No profile could be found');
      return undefined;
    }
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

        <div className='pl-8'>
          <img
            src={"/logo.svg"}
            alt="Nahu.id"
            width="120px" height="60px"
            className='w-full justify-center'
          />
        </div>
        {/* sidebar menu */}
        <ul className='font-normal text-white'>
          <li onClick={handleSidebar}>
            <NextLink href='/'>
              {/* active item */}
              <a className='bg-purple font-medium inline-flex items-center px-4 py-2 transition w-full mt-4 hover:text-black'>
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
        <form className='w-full h-3/4 mt-4'  method="post">
          {/* textarea */}
          <textarea id="message" onChange={handleTextArea} className="border-transparent focus:border-transparent focus:ring-0 w-full h-full block p-2.5 text-sm rounded-lg outline-none focus:outline-0" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh felis imperdiet vitae amet sit non ut. Ipsum sagittis, leo, semper facilisis urna, tempus. Diam id sit nulla risus risus nunc. Eu eu neque nullam neque vivamus accumsan. Lobortis vitae gravida ornare at. Ac arcu quis ornare quis facilisis cras. Ac arcu nisi massa consectetur non volutpat hac. Ac eget ut aliquam maecenas posuere consequat adipiscing scelerisque. Ipsum dictum aliquet sit gravida rhoncus. A metus, sem bibendum posuere pulvinar diam fringilla. Nulla nunc aenean gravida enim et tortor non vitae mauris.
          Suspendisse orci, et est, dictum placerat semper amet nulla. Volutpat cras aliquet ut sed. Neque, eget lobortis nam lorem id porttitor. Sed quis nam morbi quisque orci proin. Gravida mauris aliquam in in. Quis maecenas facilisis phasellus auctor. Sed ut luctus etiam purus elit urna. Placerat morbi nunc velit, risus tincidunt ac ornare dictum donec. Elit ut nibh eget vel accumsan, neque. Orci in mattis ultricies lobortis neque nisl mollis enim. Euismod et, diam at massa nullam tristique. Purus urna cursus nisl placerat. Non iaculis lectus mauris enim ut consequat malesuada.
          Lacinia id proin habitasse ac dis sem feugiat consequat vel. Sem venenatis in ut fringilla. Amet, sapien suspendisse vitae ultricies dolor. Rhoncus ut adipiscing vitae nisi. Phasellus vehicula lacinia volutpat enim et morbi. Sed sagittis, vulputate aliquet in arcu sed id. Volutpat convallis varius volutpat morbi eleifend ut. In fermentum, tortor velit, ac vitae, nulla eget purus. At amet, arcu, ac enim lectus. Elit ut nibh eget vel accumsan, neque. Orci in mattis ultricies lobortis neque nisl mollis enim. Euismod et, diam at massa nullam tristique. Purus urna cursus nisl placerat. Non iaculis lectus mauris enim ut consequat malesuada.
          Lacinia id proin habitasse ac dis sem feugiat consequat vel. Sem venenatis in ut fringilla. Amet, sapien suspendisse vitae ultricies dolor. Rhoncus ut adipiscing vitae nisi. Phasellus vehicula lacinia volutpat enim et morbi. Sed sagittis, vulputate aliquet in arcu sed id. Volutpat convallis varius volutpat morbi eleifend ut. In fermentum, tortor velit, ac vitae, nulla eget purus. At amet, arcu, ac enim lectus. Rhoncus ut adipiscing vitae nisi. Phasellus vehicula lacinia volutpat enim et morbi. Sed sagittis, vulputate aliquet in arcu sed id. Volutpat convallis varius volutpat morbi eleifend ut. In fermentum, tortor velit, ac vitae, nulla eget purus. At amet, arcu, ac enim lectus. "></textarea>
          
          {/* button submit */}
        </form>

         <div className='w-full flex justify-center'>
            <button onClick={()=>{ handleSubmit() }} className="mt-12 shadow-md shadow-purple rounded-full px-5 py-2.5 text-sm font-medium text-center text-white bg-purple hover:text-black" >
              Koreksi Dokumen
            </button>
          </div>
      </div>
      

      {isModal ? <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-5 rounded-t">
                  <span className="text-3xl font-semibold">
                    Selamat!
                  </span>
                  <FaCheckCircle className='fill-purple ml-4' size="2em"/>
                </div>
                {/*body*/}
                <div className="relative px-6 flex-auto">
                  <p className="my-2 text-slate-500 text-lg leading-relaxed text-center">
                  Sistem kami tidak mendeteksi adanya 
                  kesalahan pada kalimat yang kamu buat.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 rounded-b">
                  
                  <button
                    className="bg-purple text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModal(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
         
        </> :null}


      {/* output section */}
      <div className='bg-white font-normal text-sm w-1/4'>
        {
          userInfo && (
            <div>
              <div className="user">
                <p>Welcome</p>
                <p>{userInfo && userInfo.userDetails}</p>
                <p>{userInfo && userInfo.identityProvider}</p>
              </div>
            </div>
          )
        }
        {
          corrections && (
            <div>
              <div className="user">
                <h2>Saran Koreksi</h2>
                {
                  isLoading &&
                    <div>
                      <h3>Loading...</h3>
                    </div>
                }
                <ul>
                    {corrections.koreksi?.map((item,index)=>{
                        return (
                          <>
                            {/* correction pop-up 1 */}
                            <div className='rounded-lg bg-purple-light px-5 py-2.5 mt-4'>
                              {/* correction type */}
                              <div className='flex items-center justify-start'>
                                <div className='w-1 h-1 bg-black rounded-full mr-2'></div>
                                <p className='font-bold text-xs'>{item.code}</p>
                              </div>
                              {/* correction explanation */}
                              <div className='text-xs mt-2'>
                                {item.text}
                              </div>
                            </div>
                          </>
                        )
                    })}
                </ul>
              </div>
            </div>
          )
        }
        {/* Saran Koreksi */}
      </div>
    </div>
    </>
  );
}
