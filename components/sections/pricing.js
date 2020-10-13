import { useState } from 'react'
import Lottie from 'react-lottie'
import { Waypoint } from 'react-waypoint'

import badgeAnimation from '../../public/animations/badge.json'

export default function PricingSection() {
  const [animationIsStopped, setAnimationIsStopped] = useState(true)
  const badgeAnimationOptions = {
    loop: false,
    autoplay: false,
    animationData: badgeAnimation, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const plans = [
    { name: "Blink Básico", description: "Escolha entre filtragem de vídeo ou de áudio", targetUser: "Indicado para pessoas Lorem Ipsum dolor sit amet", price: "R$ 20,00", featured: false },
    { name: "Blink Premium", description: "Todo o suporte necessário para sua live stream", targetUser: "Indicado para pessoas Lorem Ipsum dolor sit amet", price: "R$ 40,00", featured: true },
    { name: "Blink Customizável", description: "Personalize seu plano do seu jeito", targetUser: "Indicado para pessoas Lorem Ipsum dolor sit amet", price: "A partir de R$ 20,00", featured: false }
  ]
  return (
    <section className="flex flex-col relative">
      <div className="bg-yolk h-64">
        <div className="flex p-10 flex-col text-center">
          <span className="text-3xl font-semibold">Qual a sua necessidade?</span>
          <span>Somos uma solução para diferentes tipos de problemas. Como podemos te ajudar?</span>
        </div>
      </div>
      <div className="">
        <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col items-center justify-center absolute w-full h-auto top-28">
          {plans.map(({name, description, targetUser, price, featured}) => (
            <div className={`${!featured ? 'mt-20' : ''} mt-8 mr-8 ml-8 md:ml-2 md:mr-2 lg:max-w-sm md:max-w-xl rounded-lg shadow-lg p-10 md:p-8 bg-white relative border-black border-2`}>
              {featured && (
                <div className="absolute -top-8 -right-12">
                  <Lottie options={badgeAnimationOptions} height={120} width={120} isStopped={animationIsStopped} />
                </div>
              )}
              <div className="text-3xl md:text-1xl pb-1 text-center">
                {name}
              </div>
              <div className="xl:text-xl lg:text-sm text-center text-gray-500">
                {price}/mês
              </div>
              <hr className="m-5 w-auto" />
              <div className="xl:text-xl lg:text-sm text-center text-gray-500">
                {description}
              </div>
              <hr className="m-5 w-auto" />
              <div className="xl:text-xl lg:text-sm text-center text-gray-500">
                {targetUser}
              </div>
              <div className="m-5 w-auto flex justify-center p-8">
                <button href="#" className={`text-black font-bold py-2 px-8 inline-flex rounded-full ${featured ? 'bg-yolk text-white' : 'bg-gray-600'}`}>
                  Selecionar
                </button>          
              </div>
              <div className="text-center">
                <span>Ao clicar, você concorda com os <a className="text-yolk text-bold" href="#">termos de uso</a></span>
              </div>
            </div>
          ))}
        </div>
        <Waypoint onEnter={() => setAnimationIsStopped(false)} />
      </div>
    </section>
  )
}