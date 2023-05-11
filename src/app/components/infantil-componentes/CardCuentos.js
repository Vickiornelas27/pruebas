import { Card, Grid, Row, Button, Text } from '@nextui-org/react'

const CardCuentos = () => {
  return (
    <Card>
      <Card
        css={{
          p: '$6',
          mw: '420px',
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
            width='128px'
            height='150px'
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
