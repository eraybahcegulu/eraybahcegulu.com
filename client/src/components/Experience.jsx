import { Steps } from 'antd';

const Experience = () => {
    return (
        <div className='hover:scale-125 transition-all font-bold hover:skew-y-6 mt-20 md:mt-0'>
            <h2 className='text-2xl font-bold'>EXPERIENCE</h2>
            <Steps
                className='steps-experience'
                progressDot
                current={2}
                direction="vertical"
                items={[
                    {
                        title: 'IT department • Intern ',
                        description: '2023 July-August • DPU Rectorate',
                    },
                    {
                        title: 'Kuartek Project • Intern',
                        description: '2022 July-August • Kutahya',
                    },
                ]}
            />
        </div>
    )
}

export default Experience