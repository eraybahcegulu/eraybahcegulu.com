import { Avatar } from 'antd';
import eraybahcegulu from "../eraybahcegulu.jpg"

const Image = () => {
    return (
        <div className='flex justify-center'>
            <Avatar shape="square" size={300} src={eraybahcegulu} />
        </div>
    )
}

export default Image