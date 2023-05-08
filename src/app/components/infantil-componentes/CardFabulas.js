import { Card } from "@nextui-org/react"

const CardFabulas = () => {
    return (
        <Card >
            <Card css={{
                p: "$6",
                mw: "420px",
                bg: '$green600'
                , mw: "400px",

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
            }}>
                <Card.Header>
                    <img
                        alt="estrellas logo"
                        src="/img/pagina_niños/estrellas.jpg"
                        width="100px"
                        height="100px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                        <Grid xs={12}>
                            <Text size={20} h4 color="white" css={{ lineHeight: "$lg" }}>
                                Fabulas Para Niños
                            </Text>
                        </Grid>
                        <Grid xs={12}>
                            <Text css={{ color: "black" }}>Tecnilibros niños</Text>
                        </Grid>
                    </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                    <Text color="white">
                        Aqui aprenderas Fabulas infantiles que te ayudarte en el aprendizaje de los valores y comportamiento!
                    </Text>
                </Card.Body>
                <Card.Divider color="primary" />
                <Card.Footer>
                    <Row justify="flex-end">
                        <Button size="xs, sm , m, lg, xl" color="white" hover>
                            Seccion 2
                        </Button>
                    </Row>
                </Card.Footer>
            </Card>
        </Card>
    )
}
export default CardFabulas