'use client'
import React from 'react'
import Image from 'next/image'
import { Card, Grid, Text, Row } from '@nextui-org/react'
import Modal1 from '../components/infantil-componentes/Modal1'
import Modal2 from '../components/infantil-componentes/Modal2'
import CardCuentos from '../components/infantil-componentes/CardCuentos'
import CardFabulas from '../components/infantil-componentes/CardFabulas'
import CardLatin from '../components/infantil-componentes/CardLatin'
import Slideinfa from '../components/Slideinfa'

const Infantil = () => {
  return (
    <div>
      <div>
        <Image
          src='/img/pagina_niños/fondo_estrellas.png'
          alt='background image'
          quality={100}
          fill
          sizes='100vw'
          style={{
            objectFit: 'contain'
          }}
        />
      </div>
      <Text
        h3
        size={42}
        align='center'
        weight='bold'
        css={{
          textGradient: '45deg, $blue600 30%, $pink600 53%, $yellow600 20%',
          padding: '30px'
        }}
      >
        {' '}
        INFANTIL{' '}
      </Text>
      <div className='mx-auto p-10 max-w-[90rem]'>
        <Text
          align='center'
          size={32}
          weight='bold'
          css={{
            textGradient: '90deg, $yellow600 47%, $blue600 51.8%, $pink600 29%',
            padding: '30px'
          }}
        >
          Tecnilibros Niños
        </Text>
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 lg:grid-rows-1 xl:grid-cols-1 xl:grid-rows-1 xm:grid-rows-1 xs:grid-cols-1'>
          <Grid.Container gap={2} justify='center' margin='10' padding='10px'>
            <Grid sm={5} justify='center'>
              <Card
                css={{
                  w: '420px',
                  bg: '$blue500',
                  '@xs': {
                    bg: '$red500',
                    color: '$blue200'
                  },
                  '@sm': {
                    bg: '$blue600',
                    color: '$blue100'
                  },
                  '@md': {
                    bg: '$green600',
                    color: '$green100'
                  },
                  '@lg': {
                    bg: '$pink600'
                  },
                  '@xl': {
                    bg: '$yellow600'
                  }
                }}
              >
                <Card.Header>
                  <Text size={26} color='white'>
                    {' '}
                    Comienza a leer aun mas!{' '}
                  </Text>
                </Card.Header>
                <Card.Body css={{ py: '$10' }}>
                  <img
                    src='/img/pagina_niños/niñolee.png'
                    alt='imagen infa1'
                    width='auto'
                    height='auto'
                    style={{ margin: '10px' }}
                  ></img>
                </Card.Body>

                <Card.Footer>
                  <Row justify='flex-end'>
                    <Modal1 />
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid sm={5} justify='center'>
              <Card
                align='center'
                css={{
                  w: '420px',
                  bg: '$yellow600',
                  '@xs': {
                    bg: '$blue500',
                    color: '$blue200'
                  },
                  '@sm': {
                    bg: '$yellow600',
                    color: '$yellow300'
                  },
                  '@md': {
                    bg: '$purple600',
                    color: '$purple100'
                  },
                  '@lg': {
                    bg: '$yellow600'
                  },
                  '@xl': {
                    bg: '$green700'
                  }
                }}
              >
                <Card.Header>
                  <Text size={26} color='white'>
                    {' '}
                    !Ven y disfruta de nuestros servicios!{' '}
                  </Text>
                </Card.Header>
                <Card.Body>
                  <img
                    src='/img/pagina_niños/varias.png'
                    alt='imagen infa2'
                    width='auto'
                    height='auto'
                    style={{ margin: '10px' }}
                  ></img>
                </Card.Body>

                <Card.Footer>
                  <Row justify='flex-end'>
                    <Modal2 />
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid.Container gap={2} justify='center'>
              <Grid>
                <CardCuentos />
              </Grid>
              <Grid>
                <CardFabulas />
              </Grid>
              <Grid>
                <CardLatin />
              </Grid>
            </Grid.Container>
          </Grid.Container>
        </div>
        <div>
          <Slideinfa />
        </div>
      </div>
    </div>
  )
}

export default Infantil
