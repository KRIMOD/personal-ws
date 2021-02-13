import { GitHub, Twitter, Linkedin } from '@/components/logos'
import TopTracks from '@/components/TopTracks'
import { Img, Title } from '@/components/ui'
import Image from 'next/image'

const Index = () => (
  <div className='max-w-6xl mx-auto font-light lg:max-w-3xl '>

    {/* Title */}
    <Title size='sm'>
      Bonjour !
    </Title>

    {/* Description */}
    <p className='my-4 text-gray-600 dark:text-gray-400'>
      I am TEMAM Mamar Abdelkrim (KRIMO), and I am a student in Information Systems and Technology at Ecole Nationale Supérieure d'informatique.
      {/* Je m'appelle TEMAM Mamar Abdelkrim (KRIMO), et je suis étudiant en Système d'information et technologie à l'école nationale supérieur d'informatique (ESI).<br /> */}
    </p>

    {/* Links container */}
    <div className='flex mt-4 text-xs font-medium text-gray-700 lg:text-base'>
      <a href='https://github.com/krimod' className='flex items-center mr-4 hover:text-gray-800'>
        <GitHub className='h-4 mr-2' />
        <span>GitHub</span>
      </a>
      <a href='https://twitter.com/KrimoTemam' className='flex items-center mr-4'>
        <Twitter className='h-4 mr-2' />
        <span>Twitter</span>
      </a>
      <a href='https://dz.linkedin.com/in/mamar-abdelkrim-temam' className='flex items-center mr-4'>
        <Linkedin className='h-4 mr-2' />
        <span>Linkedin</span>
      </a>
    </div>

    {/* Portrait of ana */}
    <div className='hidden my-6 sm:block'>
      {/* <HomepageImage className='rounded-lg' /> */}
      <img
        src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e82f4bea-f5d8-4c30-82e8-ab9ae7651a88/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210212T235515Z&X-Amz-Expires=86400&X-Amz-Signature=ca2f580886002d25b648ba2c8e96af4a5ed90e7d868d3f780cb60065096dad77&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22'
        // aspectRatio={1080 / 1600}
        className='mx-auto'
      />
    </div>

    {/* Projects */}
    <div>
      <h2 className='my-4 text-3xl font-medium'>Projects</h2>
      <ProjectCard title='Preventivo' to='' icon=''>
        Mise en place de la maintenance préventive d'un parc automobile pour une entreprise au trois niveau hiérarchique à travers 3 applications distinctes pour chaque niveau.
      </ProjectCard>
      <ProjectCard title='Ndif' to='' icon=''>
        Refonte de l'application mobile Ndif de l'Agence Nationale des déchets (AND) UX et UI + le rajout de nouvelles fonctionnalités.
      </ProjectCard>
      <ProjectCard title='Project 1' to='' icon=''>
        okok
      </ProjectCard>
    </div>

    {/* Spotify top tracks */}
    <div>
      <h2 className='mt-4 text-3xl font-medium'>
        Top Tracks
      </h2>
      <p className='mb-4 text-gray-600 dark:text-gray-400'>
        J'assume pas tout ce que j'écoute ya kho, sans smir
      </p>
      <TopTracks />
    </div>

  </div>
)

function ProjectCard ({ title, to, icon, children }) {
  return (
    <div className='flex items-center px-2 py-3 mt-2 border-2 border-gray-600 rounded-sm'>
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
