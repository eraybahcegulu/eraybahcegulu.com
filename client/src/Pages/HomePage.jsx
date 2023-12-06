import Image from "../components/Image"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Technologies from "../components/Technologies";
import { Spin } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const HomePage = () => {
    return (
        <div className='bg-slate-400 h-full w-[50vw] flex flex-col  justify-center gap-5 rounded-xl m-5 p-5'>
            <Image />
            <div className='flex flex-col items-center'>
                <div className='md:flex flex-row justify-center gap-20 mt-10'>
                    <Education />
                    <Experience />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Spin size="large" />
                <h2 className='text-2xl font-bold mt-1'>UPDATING</h2>
            </div>
            <div className='flex flex-col items-center mt-10 text-center o'>
                <Technologies />
                <div className='flex flex-col justify-center mt-10'>
                    <h2 className='text-xl font-bold'>Git Version Control</h2>
                    <a className='mt-5' href="https://github.com/eraybahcegulu?tab=repositories" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} beat size="2xl" style={{ color: "black" }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomePage