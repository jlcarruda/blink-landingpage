export default function ServiceSection(props) {
  console.log(props)
  const cards = [
    {name: "Plugin do OBS", image: "", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", disabled: false},
    {name: "Extensão do Chrome", image: "", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", disabled: true},
  ]
  return (
    <section className="flex flex-row justify-evenly">
      {cards.map(({name, description, disabled}) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">
              {description}
            </p>
          </div>
          <div className="flex justify-center py-5">
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
    </section>
  )
}

export async function getStaticProps() {
  return {
    props: {
    }
  }
}