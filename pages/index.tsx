import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Projects from '../components/Projects'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
    <Head>
      <title>June Portifolio</title>
    </Head>
{/* <h1 className='text-blue-400'>Welcome to my Portfolio</h1> */}
 {/* Header */}
 <Layout />

 {/* Hero */}
 
 <Hero />
 {/* Experience */}
 <section id="about" className='snap-center'>
<About />
 </section>
 {/* Skills */}

 {/* Projects */}
 <section id="experience" className='snap-center'>
<Experience />

</section>
 <Projects  />

<Footer />

 {/* Contact Me */}
  </div>
  )
}


