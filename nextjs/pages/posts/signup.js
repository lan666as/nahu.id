import Image from 'next/image'
import { GoMail } from "react-icons/go";
import { FiLock,FiUser } from "react-icons/fi";

export default function SignUp(){
    return(
    <>
        <div className="flex h-screen justify-center item-center">
            {/* input section */}
            <div className='w-1/2 h-full px-32 pt-12'>
                <div className='w-full flex justify-center'>
                <Image
                    src={"/logo.svg"}
                    alt="Nahu.id"
                    width="120px" height="120px"
                    className='w-full justify-center'
                />
                </div>
                <p className='text-2xl font-medium'>Sign Up</p>
                <p className='mt-4'>If you already have an account register</p>
                <span className='inline-block'>You can <a href='/posts/login' className='text-purple font-semibold'>Login here!</a></span>

                <form className='mt-8'>
                    
                    {/* EMAIL INPUT */}
                    <label className='block mb-1 text-sm text-gray'>Email</label>
                    <div className='flex items-center mb-4'>
                        <GoMail className='absolute ml-2'/>
                        <input className='pl-8 mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-light focus:ring-0 focus:border-black' type="text" placeholder='Enter your email address'></input>
                    </div>

                    {/* USERNAME INPUT */}
                    <label className='block mb-1 text-sm text-gray'>Username</label>
                    <div className='flex items-center mb-4'>
                        <FiUser className='absolute ml-2'/>
                        <input className='pl-8 mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-light focus:ring-0 focus:border-black' type="text" placeholder='Enter your Username'></input>
                    </div>

                    {/* PASSWORD INPUT */}
                    <label className='block mb-1 text-sm text-gray'>Password</label>
                    <div className='flex items-center mb-4'>
                        <FiLock className='absolute ml-2'/>
                        <input className='pl-8 mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-light focus:ring-0 focus:border-black' type="password" placeholder='Enter your password'></input>
                    </div>

                    {/* CONFIRM PASSWORD INPUT */}
                    <label className='block mb-1 text-sm text-gray'>Confirm Password</label>
                    <div className='flex items-center mb-4'>
                        <FiLock className='absolute ml-2'/>
                        <input className='pl-8 mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-light focus:ring-0 focus:border-black' type="password" placeholder='Confirm your password'></input>
                    </div>


                    <button type="submit" class="w-full mt-8 shadow-md shadow-purple rounded-full px-5 py-2.5 text-sm font-medium text-center text-white bg-purple hover:text-black">
                        Sign Up

                    </button>

                </form>
            </div>
            {/* image section */}
            <div className='w-1/2 h-full'>
                <Image
                    src={"/bg-login.png"}
                    alt="Picture of the author"
                    width="100%" height="100%" layout="responsive" objectFit="cover"
                    className='w-full'
                />
            </div>
        
        </div>
    </>
    );
}