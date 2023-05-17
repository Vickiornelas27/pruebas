import { Card, Grid, Row, Button, Text } from '@nextui-org/react'
import Image from 'next/image'

const CardFabulas = () => {
  return (
    <Card isHoverable className=' max-w-[450px] max-h-[450px]'>
      <Card variant='bordered'
        isPressable
        css={{
          p: '$6',
          mw: '420px',
          bg: '$green600',
          mw: '400px',

          '@xs': {
            bg: '$green600'
          },
          '@sm': {
            bg: '$purple600'
          },
          '@md': {
            bg: '$red600'
          },
          '@lg': {
            bg: '$blue600'
          },
          '@xl': {
            bg: '$purple700'
          }
        }}
      >
        <Card.Header>
          <img
            alt='niño-fabulas'
            src='/img/niño.png'
            loading='lazy'
            width='100px'
            height='100px'
          />
          <Grid.Container css={{ pl: '$6' }}>
            <Grid xs={12}>
              <Text size={20} h4 color='white' css={{ lineHeight: '$lg' }}>
                Fabulas Para Niños
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: 'black' }}>Tecnilibros niños</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: '$2' }}>
          <Text color='white'>
            Aqui aprenderas Fabulas infantiles que te ayudarte en el aprendizaje
            de los valores y comportamiento!
          </Text>
        </Card.Body>
        <Card.Divider color='primary' />
        <Card.Footer>
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
              Seccion 2
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Card>
  )
}
export default CardFabulas
