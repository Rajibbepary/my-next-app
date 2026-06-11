'use client'

import { useRouter } from "next/navigation";

const Banner = () => {
    const router = useRouter()
    const handelBtn = ()=>{
        const password = prompt('Enter your password')
        if(password == '1234'){
        //console.log(router)
        router.push('/dashboard')
        }
    }
    return (
        <div className="bg-linear-60 to-blue-300 from-blue-400 text-center p-10 rounded-xl">
            <h1 className="text-3xl font-bold my-4">Wellcome to Dev Story 🙀💻</h1>
            <button onClick={handelBtn} className="px-6 py-2 bg-blue-700 text-shadow-fuchsia-100 cursor-pointer shadow rounded-xl">Share-Story</button>
        </div>
    );
};

export default Banner;