import Card from '../components/servicios/Card'
import MetodosPago from '../components/servicios/MetodosPago'

const Servicios = () => {
  return (
    <>
      <h1 className='font-bold text-5xl text-center my-5'>Servicios</h1>
      <div className='mx-auto'>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 align-middle justify-items-center'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <MetodosPago />
      </div>
    </>
  )
}

export default Servicios
