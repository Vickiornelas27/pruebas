import cardList from '../data';

const Libros = () => {
  return (
    <>
        <h1 className='font-bold text-5xl text-center my-5'>Nuestra coleccion</h1>
        <div className='mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-6 align-middle justify-items-center m-10' width="100%" height="auto" >
            {cardList.map(card=>(
                <div className='shadow-lg rounded-lg bg-white' >
                    <img className='rounded-t-lg' src={card.img} alt="" width="640px" height="427px"/>
                    <div className='p-5' width="50">
                        <h3 className='text 3xl font-bold mb-3 '>{card.title}</h3>
                        <p className='text-lg font-normal'>{card.text}</p>
                    </div>
                </div>

            ))}
        </div>
        </div>
  </>

  )
}
export default Libros