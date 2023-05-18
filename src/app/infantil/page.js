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
    <div className='w-auto '>
      <div className='mx-auto sm:w-360 md:w-375 lg:w-768 xlg:w-1920 '>
        <Image
          src='/img/pagina_niños/fondo_estrellas.png'
          alt='background image'
          fill
          sizes='auto'
          style={{
            objectFit: 'cover',
            zIndex: -1,
            backgroundRepeat: 'repeat-y'
          }}
        />
      </div>
      <Text
        h3
        size={50}
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
      <div className='mx-auto p-10 max-w-[100] sm:w-360 md:w-375 lg:w-768 xlg:w-1920'>
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

        <Grid.Container gap={3} justify='center' margin='10' padding='10px'>
          <Grid sm={12} md={5} justify='center'>
            <Card variant='bordered'
              isPressable
              css={{
                w: 'auto',
                mw: "520px",
                h: 'fit-content',
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
              <Card.Header >
                <Text size={24} color='white'>
                  {' '}
                  !Comienza a leer aun mas!{' '}
                </Text>
              </Card.Header>
              <Card.Body css={{ py: '$20' }}>
                <img
                  src='/img/pagina_niños/niñolee.png'
                  alt='imagen infa1'
                  loading='lazy'
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
          <Grid sm={12} md={5} justify='center'>
            <Card variant='bordered'
              isPressable
              align='center'
              css={{
                w: 'auto',
                mw: "520px",
                h: 'fit-content',
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
              <Card.Body css={{ py: '$13' }}>
                <h2 className='text-2xl font-bold my-2 text-center '>
                  !Ven y disfruta de nuestros servicios!
                </h2>
                <img
                  src='/img/pagina_niños/varias.png'
                  alt='imagen infa2'
                  loading='lazy'
                  width='auto'
                  height='auto'
                  style={{ margin: '15px', justifyItems: "center" }}
                ></img>
              </Card.Body>

              <Card.Footer>
                <Row justify='flex-end'>
                  <Modal2 />
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid.Container gap={3} justify='center' alignItems='center'>
            <Grid gap={4}>
              <CardCuentos />
            </Grid>
            <Grid gap={4}>
              <CardFabulas />
            </Grid>
            <Grid gap={4}>
              <CardLatin />
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </div>
      <div className='mx-auto w-[100%]]'>
        <Slideinfa />
      </div>
    </div>
  )
}

export default Infantil
