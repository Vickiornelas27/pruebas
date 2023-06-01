//import Image from "next/image"
import React from "react";
import { Modal, Text, Button, Link } from "@nextui-org/react"
const Modal1 = () => {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closehandler = () => {
        setVisible(false);
        console.log("cerrado");
    }

    return (
        <div>
            <Button auto color="warning" shadow onPress={handler} > ¡Vamos!</Button >
            <Modal closeButton blur aria-labelledby="modal-niño" open={visible} onClose={closehandler} width="550px" mx='auto'>
                <Modal.Header>
                    <img src="/img/pagina_niños/niños_lect.jpg" alt="imagen niños" width={160} height={150} style={{ margin: "auto" }} />
                    <Text size={20} css={{ textGradient: "180deg, $blue600 40%, $pink600 40%, $yellow600 80%" }}>¡INICIA a tus hijos en el maravilloso hábito de la lectura! . . . </Text>
                </Modal.Header>
                <Modal.Body alt="lectura">
                    <Text align="center" size={26} id="modal_titulo" css={{ textGradient: "180deg, $blue600 20%, $pink600 50%, $yellow600 80%" }}>
                        ¡ Nosotros te ayudamos !<br />
                        Contamos con un extenso surtido en material creado especialmente para ellos. Lo que asegura una experiencia ideal desde el primer momento.
                    </Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat shadow color="secondary" onPress={closehandler}>OK</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Modal1