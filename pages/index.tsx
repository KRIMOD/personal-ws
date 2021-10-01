import { GitHub, Twitter, Linkedin } from 'components/logos'
import TopTracks from 'components/TopTracks'
import { Img, Title, Lead, Container, Spacer } from 'components/ui'
import NextLink from 'next/link'

const Index = () => (
  <div className="mx-auto max-w-6xl font-light lg:max-w-3xl">
    <Container size="some">
      <Spacer size="md" />

      {/* Title */}
      <Title size="md">Hey, Im Krimo Temam</Title>

      <Spacer size="md" />

      {/* Description */}
      <Lead>
        I'm a software developer freshly graduated from Ecole Nationale
        Supérieure d'informatique as a engineer in Information Systems and
        Technology.
      </Lead>
    </Container>

    {/* Portrait */}
    <div className="mt-6 sm:hidden">
      <HomepageImage />
    </div>
    <Container size="some">
      {/* Links container */}
      <div className="flex my-6 text-xs font-medium text-gray-700 lg:text-base">
        <a
          href="https://github.com/krimod"
          className="flex items-center mr-4 hover:text-gray-800"
        >
          <GitHub className="mr-2 h-4" />
          <span>GitHub</span>
        </a>
        <a
          href="https://twitter.com/KrimoTemam"
          className="flex items-center mr-4"
        >
          <Twitter className="mr-2 h-4" />
          <span>Twitter</span>
        </a>
        <a
          href="https://dz.linkedin.com/in/mamar-abdelkrim-temam"
          className="flex items-center mr-4"
        >
          <Linkedin className="mr-2 h-4" />
          <span>Linkedin</span>
        </a>
      </div>

      {/* Portrait of ana */}
      <div className="hidden my-6 sm:block">
        <HomepageImage />
      </div>

      {/* Projects */}
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <SectionBody>
          <ProjectCard title="Preventivo" to="" icon="">
            Mise en place de la maintenance préventive d'un parc automobile pour
            une entreprise au trois niveau hiérarchique à travers 3 applications
            distinctes pour chaque niveau.
          </ProjectCard>
          <ProjectCard title="Ndif" to="" icon="">
            Refonte de l'application mobile Ndif de l'Agence Nationale des
            déchets (AND) UX et UI + le rajout de nouvelles fonctionnalités.
          </ProjectCard>
          <ProjectCard title="Project 1" to="" icon="">
            okok
          </ProjectCard>
        </SectionBody>
      </Section>

      {/* Spotify top tracks */}
      <Section>
        <SectionTitle>Top Tracks</SectionTitle>
        <SectionBody>
          <Lead>J'assume pas tout ce que j'écoute ya kho, sans smir</Lead>
          <TopTracks />
        </SectionBody>
      </Section>
    </Container>
  </div>
)

function ProjectCard({ title, to, icon, children }) {
  return (
    <div className="flex items-center px-2 py-3 mt-2 rounded border-2 border-gray-200">
      {/* <ico className="mx-2">icon</i> */}
      <div>
        <h3 className="text-lg font-normal">{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  )
}

function HomepageImage() {
  return (
    <Img
      src="/static/images/portrait-krimo.jpg"
      // aspectRatio={1616 / 1080}
      className={`object-cover object-top w-full h-full`}
    />
  )
}

function Section({ children }) {
  return <section className="mt-8 md:mt-14 lg:mt-18">{children}</section>
}

interface ISection {
  link?: string
  children: React.ReactNode
}

function SectionTitle({ link, children }: ISection) {
  const T = ({ children }) => (
    <h2 className="text-2xl font-semibold text-gray-900 md:text-2xl lg:text-2-5xl">
      {children}
    </h2>
  )

  if (link) {
    return (
      <NextLink href={link}>
        <a className="inline-block">
          <T>
            {children}
            <Chevron className="ml-1 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </T>
        </a>
      </NextLink>
    )
  } else {
    return <T>{children}</T>
  }
}

function SectionBody({ children }) {
  return <div className="mt-4 md:mt-4 lg:mt-6">{children}</div>
}

function Chevron(props) {
  return (
    <svg
      className={`inline fill-current ${props.className}`}
      viewBox="0 0 20 20"
    >
      <g id="Page-1" stroke="none" strokeWidth="1">
        <g id="icon-shape">
          <polygon
            id="Combined-Shape"
            points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"
          />
        </g>
      </g>
    </svg>
  )
}

export default Index
