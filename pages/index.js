import { GitHub, Twitter, Linkedin } from '../components/logos'
import { Img } from '../components/ui'

const Index = () => (
  <div className='font-light max-w-xl lg:max-w-3xl mx-auto '>

    {/* Title */}
    <h1 className='text-5xl font-medium mt-8'>
      Bonjour !
    </h1>

    {/* Description */}
    <p className='mt-3'>
    I am TEMAM Mamar Abdelkrim (KRIMO), and I am a student in Information Systemes and Technology at Ecole Nationale Supérieure d'informatique.<br />
    Je m'appelle TEMAM Mamar Abdelkrim (KRIMO), et je suis étudiant en Système d'information et technologie à l'école nationale supérieur d'informatique (ESI).<br />
    </p>

    {/* Links container */}
    <div className='flex text-gray-700 text-xs mt-3 font-medium lg:text-base'>
      <a href='https://github.com/krimod' className='flex mr-4 items-center hover:text-gray-800'>
        <GitHub className='h-4 mr-2' />
        <span>GitHub</span>
      </a>
      <a href='#' className='flex mr-4 items-center'>
        <Twitter className='h-4 mr-2' />
        <span>Twitter</span>
      </a>
      <a href='https://dz.linkedin.com/in/mamar-abdelkrim-temam' className='flex mr-4 items-center'>
        <Linkedin className='h-4 mr-2' />
        <span>Linkedin</span>
      </a>
    </div>

    {/* Portrait of me */}
    <div className='hidden mt-10 sm:block'>
      <HomepageImage className='rounded-lg' />
    </div>

  </div>
)

function HomepageImage ({ className }) {
  return (
    <Img
      src='/images/portrait-krimo.jpg'
      // aspectRatio={1616 / 1080}
      className={`${className} h-full w-full object-cover object-top`}
    />
  )
}

export default Index
