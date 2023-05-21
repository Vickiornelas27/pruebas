import cardList from '../data';


const Libros = () => {
  return (
    <>
        <h1 className='font-bold text-5xl text-center my-5'>Nuestra colección</h1>
        <div className='mx-auto'>
        <h1 className='font-bold text-3xl text-center'>Drama</h1>      
        <div className='grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5  gap-6 align-middle justify-items-center m-10 '>
            {cardList.map(card=>(
                card.category  == 'Drama' ? 
                    <div className='shadow-lg rounded-lg bg-white' style={{width: '300px'}}>
                        <img className='rounded-t-lg' src={card.img} alt="" style={{width: '500px', height: '300px'}} />
                        <div className='p-5' width="50">
                            <h3 className='text 3xl font-bold mb-3 '>{card.title}</h3>
                            <p className='text-lg font-normal'>{card.text}</p>
                        </div>
                    </div>
                    : ""
            ))}
        </div>
        <h1 className='font-bold text-3xl text-center '>Terror</h1>      
        <div className='grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5  gap-6 align-middle justify-items-center m-10 '>
        {cardList.map(card=>(
                card.category  == 'Terror' ? 
                    <div className='shadow-lg rounded-lg bg-white' style={{width: '300px'}}>
                        <img className='rounded-t-lg' src={card.img} alt="" style={{width: '500px', height: '300px'}} />
                        <div className='p-5' width="50">
                            <h3 className='text 3xl font-bold mb-3 '>{card.title}</h3>
                            <p className='text-lg font-normal'>{card.text}</p>
                        </div>
                    </div>
                    : ""
            ))}
        </div>
        <h1 className='font-bold text-3xl text-center '>Fantasía</h1>      
        <div className='grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5  gap-6 align-middle justify-items-center m-10 '>
        {cardList.map(card=>(
                card.category  == 'Fantasia' ? 
                    <div className='shadow-lg rounded-lg bg-white' style={{width: '300px'}}>
                        <img className='rounded-t-lg' src={card.img} alt="" style={{width: '500px', height: '300px'}} />
                        <div className='p-5' width="50">
                            <h3 className='text 3xl font-bold mb-3 '>{card.title}</h3>
                            <p className='text-lg font-normal'>{card.text}</p>
                        </div>
                    </div>
                    : ""
            ))}
        </div>
                
        </div>
  </>

  )
}
export default Libros