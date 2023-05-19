import { Card, Grid, Row, Button, Text } from '@nextui-org/react'
import Image from 'next/image'

const CardCuentos = () => {
  return (
    <Card isHoverable className='max-w-[450px] max-h-[450px]'>
      <Card variant='bordered'
        isPressable
        css={{
          p: '$6',
          mw: 'auto',
          bg: '$blue500',
          mw: '400px',
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
          <img
            alt='cuentos-niños'
            src='/img/pagina_niños/cuentosniños.jpg'
            loading='lazy'
            width='115px'
            height='120px'
          />
          <Grid.Container css={{ pl: '$6' }}>
            <Grid xs={12}>
              <Text size={20} h4 color='white' css={{ lineHeight: '$lg' }}>
                Cuentos Para Niños
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: 'black' }}>Tecnilibros niños</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body
          css={{
            py: '$2',
            mw: '420px',
            bg: '$blue500',
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
          <Text color='white'>
            Aqui encontraras cuentos de distintos tipos para diferentes
            situaciones!<br /> Entra y conocelos!
          </Text>
        </Card.Body>
        <Card.Divider color='primary' />
        <Card.Footer justify='flex-end'>
          <Row justify='flex-end'>
            <Image
              src="/img/pagina_niños/estrella-imagen-animada-0149.gif"
              quality={100}
              css={{}}
              height={100}
              width={100}
              alt="estrella"
            />
            <Button size='xs, sm , m, lg, xl' color='white' hover>
              Seccion 1
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Card>
  )
}

export default CardCuentos
