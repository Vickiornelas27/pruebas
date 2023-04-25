'use client'
import CardServices from '../components/servicios-components/Card'
import MetodosPago from '../components/servicios-components/MetodosPago'

import Imagen1 from '../../../public/img/servicios/apartado.png'
import Imagen2 from '../../../public/img/servicios/pedido-especial.png'
import Imagen3 from '../../../public/img/servicios/pedido-grupo.png'
import Imagen4 from '../../../public/img/servicios/descuentos.png'
import Imagen5 from '../../../public/img/servicios/cotizaciones.png'
import Imagen6 from '../../../public/img/servicios/envios.png'

const Servicios = () => {
  const servicios = [
    {
      imagen: Imagen1,
      titulo: 'Sistema de Apartado',
      descripcion:
        'Si te gusta uno varios libros, puedes apartarlos con un pequeño anticipo. El apartado tiene una vigencia de 30 días.'
    },
    {
      imagen: Imagen2,
      titulo: 'Pedidos Especiales',
      descripcion:
        'Si requieres un libro especifico y no contamos con el, podemos solicitarlo a la editorial.'
    },
    {
      imagen: Imagen3,
      titulo: 'Pedidos Especiales a Grupos',
      descripcion:
        'En caso de que requieras libros en volumen (varios ejemplares de un mismo titulo), igualmente se pueden solicitar a la editorial. Aplicamos un descuento de mayoreo en estos casos.'
    },
    {
      imagen: Imagen4,
      titulo: 'Descuento Para Estudiantes y Profesores',
      descripcion:
        'Mostrando tu credencial de estudiante o de docente puedes exigir un descuento del 10% pagando en efectivo en casi cualquier libro.'
    },
    {
      imagen: Imagen5,
      titulo: 'Cotizaciones',
      descripcion:
        'En caso de empresas o escuelas., dependencias de gobierno, en las cuales existen un sistema de órdenes de compra, se les hace llegar la cotización de los libros que solicitan por escrito vía fax o correo electrónico.'
    },
    {
      imagen: Imagen6,
      titulo: 'Envíos Foráneos',
      descripcion:
        'Hacemos envíos a cualquier parte del estado y de la republica, así mismo para USA. Una vez que nos haces llegar la ficha de depósito bancario, se hace el envío a la dirección que tú nos indiques.'
    }
  ]
  return (
    <>
      <h1 className='mt-[8rem]  font-bold text-7xl text-center '>Servicios</h1>
      <div className='container mx-auto p-10 max-w-[90rem]'>
        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2'>
          {servicios.map(({ imagen, titulo, descripcion, key }) => (
            <CardServices
              imagen={imagen}
              titulo={titulo}
              descripcion={descripcion}
              key={key}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Servicios
