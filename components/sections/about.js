import Lottie from 'react-lottie'

import userAnimation from '../../public/animations/user.json'

export default function HowSection() {
  const userAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: userAnimation, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <section id="about" className="h-auto p-10 flex flex-col">
      <div className="py-10 flex text-center flex-col">
        <span className='text-3xl font-semibold'>O que é o Blink?</span>
        <span className="pt-4 self-center justify-start max-w-lg">O Blink é um serviço de ofuscação de conteúdo em tempo real, empoderado com um poderoso algoritmo de inteligência artificial, que pode ser aplicado em live streams de vídeo e navegadores por meio de plugins e extensões.</span>
      </div>
      <div className="p-8 self-center">
        <Lottie options={userAnimationOptions} height={500} width={500}/>
      </div>
    </section>
  )
}