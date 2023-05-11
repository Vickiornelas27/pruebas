import { Card, Grid, Row, Button, Text } from "@nextui-org/react"

const CardLatin = () => {
    return (
        <Card>
            <Card css={{
                p: "$6",
                mw: "420px",
                bg: '$pink600'
                , mw: "400px",
                '@xs': {
                    bg: '$red500',
                    color: '$blue200',
                },
                '@sm': {
                    bg: '$blue600',
                    color: '$blue100',
                },
                '@md': {
                    bg: '$green600',
                    color: '$green100',
                },
                '@lg': {
                    bg: '$pink600'
                },
                '@xl': {
                    bg: '$yellow600'
                }
            }}>
                <Card.Header>
                    <img
                        alt="cuentos-latam"
                        src="/img/pagina_niños/cuentoslatam.jpg"
                        width="126px"
                        height="100px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                        <Grid xs={12}>
                            <Text size={20} h4 color="white" css={{ lineHeight: "$lg" }}>
                                Cuentos LatinoAmericanos
                            </Text>
                        </Grid>
                        <Grid xs={12}>
                            <Text css={{ color: "black" }}>Tecnilibros niños</Text>
                        </Grid>
                    </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$2", }}>
                    <Text color="white">
                        Aqui aprenderemos sobre los cuentos cortos para niños sobre la cultura de LatinoAmerica
                    </Text>
                </Card.Body>
                <Card.Divider color="primary" />
                <Card.Footer>
                    <Row justify="flex-end">
                        <Button size="xs, sm , m, lg, xl" color="white" hover>
                            Seccion 3
                        </Button>
                    </Row>
                </Card.Footer>
            </Card>
        </Card>
    )
}

export default CardLatin