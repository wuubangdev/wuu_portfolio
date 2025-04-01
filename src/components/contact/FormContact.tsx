"use client"
import Link from 'next/link';
import React from 'react'



const FormContact: React.FC = () => {
    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [message, setMessage] = React.useState<string>("");
    const [nameError, setNameError] = React.useState<string>("");
    const [emailError, setEmailError] = React.useState<string>("");
    const [messageError, setMessageError] = React.useState<string>("");


    return (
        <div className='w-full flex flex-col gap-5'>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex flex-col gap-2 px-2'>
                    <span className='text-[#919195]'>Name*</span>
                    <input type="text" placeholder='Your Name' className='w-full py-3 border-[0.5px] border-white/15 px-5 text-white outline-none focus:border-white/30 duration-500'
                        value={name} onChange={(e) => setName(e.target.value)} />
                    {nameError && <p className='text-red-500 text-sm'>{nameError}</p>}
                </div>
                <div className='flex flex-col gap-2 px-2'>
                    <span className='text-[#919195]'>Email*</span>
                    <input type="email" placeholder='Your Email' className='w-full py-3 border-[0.5px] border-white/15 px-5 text-white outline-none focus:border-white/30 duration-500'
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
                </div>
            </div>
            <div className='flex flex-col gap-2 px-2'>
                <span className='text-[#919195]'>Message*</span>
                <textarea placeholder='Message' rows={4} className='w-full py-3 border-[0.5px] border-white/15 px-5 text-white outline-none focus:border-white/30 duration-500'
                    value={message} onChange={(e) => setMessage(e.target.value)} />
                {messageError && <p className='text-red-500 text-sm'>{messageError}</p>}
            </div>
            <div className='grid grid-cols-2 gap-2 pt-10'>
                <div className='px-2'>
                    <button className='py-4 px-11 bg-gray-600 cursor-pointer hover:bg-amber-600 duration-500 text-lg font-medium'>Submit now</button>
                </div>
                <div className='px-2 flex items-center justify-end gap-4 '>
                    <Link href={"tel:+84919394642"} className='flex gap-1 items-center group'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256" className='scale-75 group-hover:scale-90 duration-500'>
                            <g fill="#e17100" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray=""
                                strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M14,3.99023c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM14,5.99023h22c4.43067,0 8,3.56933 8,8v22c0,4.43067 -3.56933,8 -8,8h-22c-4.43067,0 -8,-3.56933 -8,-8v-22c0,-4.43067 3.56933,-8 8,-8zM18.04883,11.03516c-2.04532,-0.08838 -3.5977,0.68877 -4.57422,1.62305c-0.48826,0.46714 -0.84078,0.96698 -1.08203,1.43359c-0.24125,0.46662 -0.39453,0.85131 -0.39453,1.35156c0,-0.04456 -0.01099,0.18933 -0.01758,0.46094c-0.0066,0.27161 -0.0054,0.63775 0.01953,1.08008c0.04996,0.88466 0.1999,2.0813 0.59766,3.5c0.79552,2.8374 2.58679,6.55945 6.47266,10.44531c3.88587,3.88587 7.6077,5.67689 10.44531,6.47266c1.4188,0.39788 2.61526,0.54759 3.5,0.59766c0.44237,0.02503 0.80648,0.02609 1.07813,0.01953c0.27164,-0.0066 0.5073,-0.01758 0.46289,-0.01758c0.50025,0 0.88494,-0.15328 1.35156,-0.39453c0.46662,-0.24125 0.96645,-0.59377 1.43359,-1.08203c0.93428,-0.97652 1.71142,-2.52889 1.62305,-4.57422c-0.04194,-0.97548 -0.58353,-1.83931 -1.38281,-2.35156c-0.61768,-0.39579 -1.57657,-1.01019 -2.82812,-1.81055c-1.45209,-0.92776 -3.3094,-0.99403 -4.82422,-0.16406l0.08594,-0.04297l-1.17773,0.50586l-0.08594,0.06055c-0.28626,0.20099 -0.6408,0.23823 -0.96289,0.10352c-0.90225,-0.3773 -2.30808,-1.11862 -3.61523,-2.42578c-1.30716,-1.30716 -2.04848,-2.71299 -2.42578,-3.61523c-0.13471,-0.32209 -0.09748,-0.67663 0.10352,-0.96289l0.06055,-0.08594l0.50586,-1.17773l-0.04297,0.08594c0.82976,-1.51444 0.76525,-3.37169 -0.16406,-4.82422c-0.80035,-1.25155 -1.41475,-2.21044 -1.81055,-2.82812c-0.51225,-0.79928 -1.37608,-1.34087 -2.35156,-1.38281zM17.96289,13.0332c0.28052,0.01206 0.57015,0.17617 0.75391,0.46289c0.3962,0.61832 1.0109,1.57768 1.81055,2.82813c0.53069,0.82948 0.56799,1.9196 0.09375,2.78516l-0.02344,0.04297l-0.48242,1.12695l0.09961,-0.18164c-0.59101,0.84174 -0.70979,1.93486 -0.3125,2.88477c0.4507,1.07775 1.31258,2.71297 2.85742,4.25781c1.54484,1.54484 3.18006,2.40673 4.25781,2.85742c0.94991,0.39729 2.04303,0.27851 2.88477,-0.3125l-0.18164,0.09961l1.12695,-0.48242l0.04297,-0.02344c0.86518,-0.47403 1.95525,-0.43453 2.78516,0.0957v-0.00195c1.25045,0.79965 2.20981,1.41434 2.82813,1.81055c0.28672,0.18375 0.45083,0.47339 0.46289,0.75391c0.06562,1.51868 -0.46184,2.46949 -1.07031,3.10547c-0.30423,0.31799 -0.63415,0.54877 -0.90625,0.68945c-0.2721,0.14068 -0.53234,0.16992 -0.43359,0.16992c-0.18341,0 -0.28001,0.01203 -0.50977,0.01758c-0.22976,0.0056 -0.53773,0.0059 -0.91797,-0.01562c-0.76047,-0.04303 -1.81015,-0.17285 -3.07422,-0.52734c-2.52814,-0.70898 -5.91718,-2.3078 -9.57031,-5.96094c-3.65313,-3.65313 -5.25221,-7.04246 -5.96094,-9.57031c-0.35437,-1.26393 -0.4844,-2.31385 -0.52734,-3.07422c-0.02147,-0.38019 -0.02119,-0.68823 -0.01562,-0.91797c0.0056,-0.22973 0.01758,-0.32621 0.01758,-0.50977c0,0.09875 0.02924,-0.16149 0.16992,-0.43359c0.14068,-0.2721 0.37146,-0.60202 0.68945,-0.90625c0.63598,-0.60847 1.58679,-1.13594 3.10547,-1.07031z"></path></g></g>
                        </svg>
                        <span className='text-[#919195] text-lg font-semibold group-hover:text-white duration-500'>+84 919 394 642</span>
                    </Link>
                    <Link href={"mailto:wuubangdev@gmail.com"} className='flex gap-1 items-center group'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256" className='scale-75 group-hover:scale-90 duration-500'>
                            <g fill="#e17100" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10"
                                strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M14,4c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM14,6h22c4.43067,0 8,3.56933 8,8v22c0,4.43067 -3.56933,8 -8,8h-22c-4.43067,0 -8,-3.56933 -8,-8v-22c0,-4.43067 3.56933,-8 8,-8zM13,15c-1.64497,0 -3,1.35503 -3,3v14c0,1.64497 1.35503,3 3,3h24c1.64497,0 3,-1.35503 3,-3v-14c0,-1.64497 -1.35503,-3 -3,-3zM13.41406,17h23.16992l-8.90625,8.89258c-1.49279,1.49041 -3.8809,1.49024 -5.37305,-0.00195zM38,18.41211v13.17578l-6.59766,-6.58789zM12,18.41406l6.58594,6.58594l-6.58594,6.58594zM29.98828,26.41211l6.59766,6.58789h-23.17188l6.58594,-6.58594l0.89063,0.89063c2.25585,2.25585 5.94201,2.25751 8.19922,0.00391z"></path></g></g>
                        </svg>
                        <span className='text-[#919195] text-lg font-semibold group-hover:text-white duration-500'>wuubangdev@gmail.com</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FormContact;