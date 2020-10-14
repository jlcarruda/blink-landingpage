import { faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <section className="bg-gray-800 flex flex-row p-32 justify-evenly h-half-screen">
      <div className='p-8 flex text-white flex-row md:flex-col max-w-sm md:max-w-lg'>
        <div className="font-bold pb-8">
          <span className="text-2xl">SOBRE NÓS</span>
        </div>
        <span className="text-sm space-x-1">Blink é um projeto de alunos da Universidade Federal Rural de Pernambuco</span>
        <div className="pt-8 flex flex-row">
          <FontAwesomeIcon size="lg" className='text-yolk' icon={faMapMarkerAlt} />
          <span className='pl-10'> Rua Dom Manuel de Medeiros, s/n - Dois Irmãos, Recife - PE, Brasil, 52171-900</span>
        </div>
        <div className="pt-8 flex flex-row">
          <FontAwesomeIcon size="lg" className='text-yolk' icon={faPaperPlane} />
          <span className='pl-10 text-yolk'><a href="mailto:thalesg88@gmail.com">thalesg88@gmail.com</a></span>
        </div>
      </div>
    </section>
  )
}