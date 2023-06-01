import { Grid, Text } from '@nextui-org/react'
import CardCuentos from './CardCuentos'
import CardFabulas from './CardFabulas'
import CardLatin from './CardLatin'

const Secciones = () => {
    return (
        <div>
            <Text
                align='center'
                size={32}
                weight='bold'
                css={{
                    textGradient: '90deg, $yellow600 47%, $blue600 51.8%, $pink600 27%',
                    pb: '$10', pt: '$28'
                }}
            >
                SECCIONES
            </Text>
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
        </div >
    )
}

export default Secciones