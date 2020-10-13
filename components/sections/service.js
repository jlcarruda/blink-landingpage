import { useState } from 'react'
import Lottie from 'react-lottie'
import { Waypoint } from 'react-waypoint'

import serviceStyle from './service.module.css'
import watchingAnimation from '../../public/animations/watching.json'

export default function ServiceSection(props) {
  const [animationIsStopped, setAnimationIsStopped] = useState(true)
  const watchingAnimationOptions = {
    loop: false,
    autoplay: false,
    animationData: watchingAnimation, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const cards = [
    {name: "Plugin do OBS", image: "/obs.png", description: "Para streamers, teremos um plugin no OBS, que direciona o seu feed de video para a nossa plataforma para tratamento, e depois repassa para a sua plataforma de stream escolhida!", disabled: true},
    {name: "Extensão do Chrome", image: "/chrome.png", description: "Os usuários do Chrome poderão usufruir da nossa tecnologia de ofuscação no conteúdo do seu navegador, de maneira configurável!", disabled: true},
  ]
  return (
    <section id="services" className="flex flex-col p-10">
      <div className="py-10 flex flex-col">
        <span className={serviceStyle.sectionTitle}>Como utilizar?</span>
        <span>Os usuários do Chrome poderão usufruir da nossa tecnologia de ofuscação no conteúdo do seu navegador, de maneira configurável!</span>
      </div>
      
      <div className="flex justify-center xl:flex-row md:flex-col-reverse sm:flex-col-reverse">
        <div>
          <Waypoint onEnter={() => setAnimationIsStopped(false)} />
          <Lottie options={watchingAnimationOptions} height={600} width={600} isStopped={animationIsStopped} />
        </div>
        <div className="flex md:flex-row sm:flex-col justify-evenly relative w-full">
          {cards.map(({name, description, disabled, image}) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              {image && (
                <div className="px-6 py-4 flex justify-center">
                  <img src={image} className={serviceStyle.cardIcon}/>
                </div>
              )}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                  {description}
                </p>
              </div>
              <div className="flex justify-center py-5 bottom-0">
                <button className={`text-black font-bold py-2 px-4 inline-flex rounded-full ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-600 outline-none' : 'bg-yellow-500 hover:bg-yellow-600'}`}>
                  {disabled ? <span>Em breve</span> : (
                    <>
                      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                      <span>Download</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}