import HeroImage from '../assets/Photo.jpg'
import Socialicons from './Socialicons'
import { TypeAnimation } from 'react-type-animation'
import Button from './Button'

const Home = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center min-h-screen px-6'>
      <div className="md:w-1/2 flex justify-center">
        <img src={HeroImage} alt="Prashant Sali" className='rounded-full w-48 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300' />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className='text-5xl sm:text-5xl mb-4 font-bold'>Hi, It's <span className='text-red-500'>Prashant Sali</span></h1>
        <h3 className="text-2xl sm:text-2xl font-semibold mb-4">
          I'm a{" "}
          <span className="text-red-500">
            <TypeAnimation
              sequence={[
                "Full Stack Developer", 1000,
                "MERN Stack Developer", 1000,
                "React Developer", 1000,
                "Content Creator", 1000,
                "Software Engineer", 1000,
              ]}
              speed={50}
              repeat={Infinity}
            /></span>
        </h3>
        <p className='text-center text-sm sm:text-lg mb-6'>I’m an IT student looking for a Job where I can apply my skills and learn more about software development and tech solutions. I’m excited to contribute to projects and grow my experience in the IT field</p>
        <Socialicons></Socialicons>
        <Button></Button>
      </div>
    </section>
  )
}

export default Home
