import React from 'react';
import Header from '../components/Header';
import { GiTakeMyMoney } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsPersonFillAdd } from "react-icons/bs";
import { SiMoneygram } from "react-icons/si";
// import LevelImg from "../assets/logos/level.jpg";

const Dashboard = () => {
    return (
        <div className='w-full min-h-screen overflow-y-auto grow flex flex-col justify-start items-center'>
            <Header />

            <div className='w-full flex flex-col xl:flex-row justify-center items-start'>
                <div className='w-full gap-4 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 px-3 sm:px-14 py-6 min-h-[300px]'>
                    <div className='bg-blue-300 rounded-lg py-5 flex justify-around items-center px-4 shadow-sm shadow-gray-800'>
                        <div>
                            <p className='text-xl sm:text-2xl font-semibold'>Total Earning</p>
                            <p className='text-xl sm:text-2xl font-semibold text-center'> &#x20B9; 7000</p>
                        </div>
                        <div><GiTakeMyMoney className='text-[60px] md:text-[80px] opacity-80' /></div>
                    </div>

                    <div className='bg-red-300 rounded-lg py-5 flex justify-around items-center px-4 shadow-sm shadow-gray-800'>
                        <div>
                            <p className='text-xl sm:text-2xl font-semibold'>Downline Members</p>
                            <p className='text-xl sm:text-2xl font-semibold text-center'> 09</p>
                        </div>
                        <div><MdGroups className='text-[60px] md:text-[80px] opacity-80' /></div>
                    </div>
                    <div className='bg-[#66bfbf] rounded-lg py-5 flex justify-around items-center px-4 shadow-sm shadow-gray-800'>
                        <div>
                            <p className='text-xl sm:text-2xl font-semibold'>Referral Members</p>
                            <p className='text-xl sm:text-2xl font-semibold text-center'>03</p>
                        </div>
                        <div><BsPersonFillAdd className='text-[60px] md:text-[80px] opacity-80' /></div>
                    </div>
                    <div className='bg-green-300 rounded-lg py-5 flex justify-around items-center px-4 shadow-sm shadow-gray-800'>
                        <div>
                            <p className='text-xl sm:text-2xl font-semibold'>Wallet Balance</p>
                            <p className='text-xl sm:text-2xl font-semibold text-center'> &#x20B9; 5000</p>
                        </div>
                        <div><MdAccountBalance className='text-[60px] md:text-[80px] opacity-80' /></div>
                    </div>
                    <div className='bg-[#fce38a] rounded-lg py-5 flex justify-around items-center px-4 shadow-sm shadow-gray-800'>
                        <div>
                            <p className='text-xl sm:text-2xl font-semibold'>Withdraw Amount</p>
                            <p className='text-xl sm:text-2xl font-semibold text-center'> &#x20B9; 2000</p>
                        </div>
                        <div><BiMoneyWithdraw className='text-[60px] md:text-[80px] opacity-80' /></div>
                    </div>

                    <div className='bg-[#93a7d1] rounded-lg py-5 flex justify-around items-center px-4 shadow-sm shadow-gray-800'>
                        <div>
                            <p className='text-xl sm:text-2xl font-semibold'>Referral Income</p>
                            <p className='text-xl sm:text-2xl font-semibold text-center'> &#x20B9; 1500</p>
                        </div>
                        <div><SiMoneygram className='text-[60px] md:text-[80px] opacity-80' /></div>
                    </div>
                </div>


                {/* <div className='w-full xl:w-1/4 md:w-1/2 min-h-[300px] flex flex-col justify-center items-center relative  pt-1 max-[1280px]:hidden'>

                    <img src={LevelImg} alt="" className='h-[256px] border-4 border-green-500 rounded-lg ' />
                    <span className='absolute mt-52 pb-4 text-2xl tracking-wider font-bold'>YOUR LEVEL: 3</span>
                </div> */}
            </div>

            <div className='w-full flex justify-start items-center px-3 h-auto '>

                <div className='sm:px-12 py-5 w-full'>
                    <h1 className='font-bold mb-3 text-blue-600'>Recent Activities</h1>
                    <p className='text-lg md:text-xl border-b-2 border-blue-300 mb-4 py-3 px-5 shadow-sm shadow-blue-300 hover:bg-blue-300 rounded-md'>We are planning to online meeting at 6pm today</p>
                    <p className='text-lg md:text-xl border-b-2 border-green-300 mb-4 py-3 px-5 shadow-sm shadow-green-300 hover:bg-green-300 rounded-md'>Who are all completed 5th level then we will planning for trip and other things</p>
                    <p className='text-lg md:text-xl border-b-2 border-red-300 mb-4 py-3 px-5 shadow-sm shadow-red-300 hover:bg-red-300 rounded-md'>Thank you for all! If any update from ourside we will informing soon</p>
                    <p className='text-lg md:text-xl border-b-2 border-[#66bfbf] mb-4 py-3 px-5 shadow-sm shadow-[#66bfbf] hover:bg-[#66bfbf] rounded-md'>Today we are offering to you for if you join 3 or more members and you will get bonus amount 5000</p>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;