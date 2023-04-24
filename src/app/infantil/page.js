'use client'
import Slideinfa from "../components/Slideinfa"
import Image from "next/image"
import { Card, Grid, Text, Button, Row, Divider, Link } from '@nextui-org/react'

const Infantil = () => {
    return (
        <div>
            <Image
                src="/img/fondo_estrellas.png"
                alt="background image"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'scale-down',
                }} />,
            <h3 className="text-5xl text-center font-bold mt-6">Infantil</h3>
            <div className="mx-auto p-5">
                <h2 className="font-bold text-2xl p-5 "> Tecnilibros Niños</h2>
                <div className="grid md:my-20  md:grid-cols-1 xl:grid-rows-1 xm:grid-cols-1 xm:grid-rows-1 xs:grid-cols-1 xs:grid-rows-1 mb-5">
                    <Grid.Container gap={2} justify="center" margin="15">
                        <Grid sm={5} md={5} justify="center">
                            <Card css={{ mw: "400px" }}>
                                <Card.Header>
                                    <img src="/img/img infa1.png" alt="imagen infa1" width={250} height={250} style={{ margin: "auto" }} ></img>
                                </Card.Header>
                                <Card.Divider />
                                <Card.Body>
                                    <Text>
                                        Inicia a tus hijos en el maravilloso hábito de la lectura . . . ¡ Nosotros te ayudamos !<br />
                                        Contamos con un extenso surtido en material creado especialmente para ellos. Lo que asegura una experiencia ideal desde el primer momento.
                                    </Text>
                                </Card.Body>
                                <Card.Divider />
                                <Card.Footer>
                                    <Row justify="flex-end">
                                        <Link color="warning" href="#">Llevame Ahi!.</Link>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Grid>
                        <Grid sm={5} md={5} justify="center">
                            <Card css={{ mw: "400px" }}>
                                <Card.Header>
                                    <img src="/img/img infa2.png" alt="imagen infa2" width={250} height={250} style={{ margin: "auto" }} ></img>
                                </Card.Header>
                                <Card.Divider />
                                <Card.Body>
                                    <Text >
                                        Te invitamos a venir con tus hijos a Tecnilibros . . . <br />
                                        puedes participar con él en la lectura, o bien, hacer uso de nuestra área de Café Internet,
                                        por supuesto, tambien puedes búscar en nuestro extenso catálogo algún libro que sea de tu agrado.
                                    </Text>
                                </Card.Body>
                                <Card.Divider />
                                <Card.Footer>
                                    <Row justify="flex-end">
                                        <Link color="warning" href="#">Llevame Ahi!.</Link>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Grid>

                        <Card css={{ mw: "500px" }}>
                            <Text className="font-bold text-center text-lg">LO MAS POPULAR </Text>
                            <div>
                                <Slideinfa />
                            </div>
                        </Card>
                    </Grid.Container>
                </div>
            </div>
        </div >
    )
}

export default Infantil