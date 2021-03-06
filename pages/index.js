import React from 'react'
import Lottie from 'react-lottie'

import Nav from '../components/nav'
import { ServiceSection, AboutSection, PricingSection, Footer } from '../components/sections'
import landingStyle from '../styles/landing.module.css'
import guardianEyeAnimation from '../public/animations/guardian-eye.json'

export default function IndexPage() {
  const frontImageOptions = {
    loop: true,
    autoplay: true,
    animationData: guardianEyeAnimation, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <React.Fragment>
      <div>
        <Nav />
      </div>
      <div className="pt-32">
        <section className={landingStyle.frontsection}>
          
          <div className={landingStyle.infoContainer}>
            <h1>Naturalidade e segurança para sua Stream</h1>
            <span className={landingStyle.subtitle}>O único serviço de ofuscação de conteúdo sensível on-the-fly, potencializado com inteligência artificial, que busca conforto e naturalidade aos seus seguidores</span>
          </div>
          <div className={landingStyle.frontImage}>
            <Lottie options={frontImageOptions} height={500} width={500} isStopped={false} isPaused={false}/>
          </div>
        </section>
        <AboutSection />
        <PricingSection />
        <ServiceSection />
      </div>
      <Footer />
    </React.Fragment>
  )
}
