import { Avatar } from 'antd';
import eraybahcegulu from "../eraybahcegulu.jpg"

const Image = () => {
    return (
        <div className='flex flex-col items-center text-center justify-center'>
            <Avatar shape="square" size={300} src={eraybahcegulu} />
            <h1 className='mt-2 font-bold text-4xl'>ERAY BAHÇEGÜLÜ</h1>
        </div>
    )
}

export default Image