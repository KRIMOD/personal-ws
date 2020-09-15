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
    I am TEMAM Mamar Abdelkrim (KRIMO), and I am a student in Information Systems and Technology at Ecole Nationale Supérieure d'informatique.<br />
    Je m'appelle TEMAM Mamar Abdelkrim (KRIMO), et je suis étudiant en Système d'information et technologie à l'école nationale supérieur d'informatique (ESI).<br />
    </p>

    {/* Links container */}
    <div className='flex text-gray-700 text-xs mt-4 font-medium lg:text-base'>
      <a href='https://github.com/krimod' className='flex mr-4 items-center hover:text-gray-800'>
        <GitHub className='h-4 mr-2' />
        <span>GitHub</span>
      </a>
      <a href='https://twitter.com/KrimoTemam' className='flex mr-4 items-center'>
        <Twitter className='h-4 mr-2' />
        <span>Twitter</span>
      </a>
      <a href='https://dz.linkedin.com/in/mamar-abdelkrim-temam' className='flex mr-4 items-center'>
        <Linkedin className='h-4 mr-2' />
        <span>Linkedin</span>
      </a>
    </div>

    {/* Portrait of ana */}
    <div className='hidden mt-10 sm:block'>
      <HomepageImage className='rounded-lg' />
    </div>

    {/* Projects */}
    <div>
      <h2 className='text-3xl font-medium mt-4'>Projects</h2>
      <ProjectCard title='Preventivo' to='' icon=''>Mise en place de la maintenance préventive d'un parc automobile pour une entreprise au trois niveau hiérarchique à travers 3 applications distinctes pour chaque niveau.</ProjectCard>
      <ProjectCard title='Ndif' to='' icon=''>Refonte de l'application mobile Ndif de l'Agence Nationale des déchets (AND) UX et UI + le rajout de nouvelles fonctionnalités.</ProjectCard>
      <ProjectCard title='Project 1' to='' icon=''>okok</ProjectCard>
    </div>

  </div>
)

function ProjectCard ({ title, to, icon, children }) {
  return (
    <div className='border-2 rounded-sm border-gray-600 px-2 py-3 mt-2 flex items-center'>
      <icon className='mx-2'>icon</icon>
      <div>
        <h3 className='text-lg font-normal'>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  )
}

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
