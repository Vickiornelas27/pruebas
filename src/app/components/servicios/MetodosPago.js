import Image from 'next/image'

import PaypalIcon from '../../../../public/img/paypal-icon.png'
import VisaIcon from '../../../../public/img/visa-icon.png'
import MasterCardIcon from '../../../../public/img/mastercard-icon.png'

const MetodosPago = () => {
  return (
    <div clas>
      <h1 className='font-bold text-4xl text-center mt-5'>Metodos de Pago</h1>
      <div className='md:my-20 grid md:grid-cols-3 justify-items-center align-middle '>
        <Image
          src={PaypalIcon}
          alt='Icono de paypal'
          width={250}
          height={250}
        />
        <Image
          className='mt-3 md:mt-0'
          src={VisaIcon}
          alt='Icono de paypal'
          width={250}
          height={250}
        />
        <Image
          className='mt-10 md:mt-0'
          src={MasterCardIcon}
          alt='Icono de paypal'
          width={200}
          height={200}
        />
      </div>
    </div>
  )
}

export default MetodosPago
