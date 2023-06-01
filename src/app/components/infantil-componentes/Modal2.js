//import Image from "next/image"
import React from "react";
import { Modal, Text, Button, Link } from "@nextui-org/react"
const Modal2 = () => {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closehandler = () => {
        setVisible(false);
        console.log("cerrado");
    }

    return (
        <div>
            <Button auto color="warning" shadow onPress={handler} > ¡Vamos!</Button >
            <Modal closeButton blur aria-labelledby="modal-niño" open={visible} onClose={closehandler} width="550px">
                <Modal.Header>
                    <img src="/img/pagina_niños/13ani.jpg" alt="imagen ani" width={160} height={150} style={{ margin: "20px" }} />
                    <Text size={23} css={{ textGradient: "180deg, $blue600 30%, $yellow600 80%" }}>¡TE INVITAMOS!  </Text>
                </Modal.Header>
                <Modal.Body alt="lectura">
                    <Text align="center" size={26} id="modal_titulo" css={{ textGradient: "180deg, $blue600 20%, $pink600 50%, $yellow600 80%" }}>
                        ¡A venir con tus hijos a Tecnilibros! . . . <br />
                        puedes participar con él en la lectura, o bien, hacer uso de nuestra área de Café Internet,
                        por supuesto, tambien puedes búscar en nuestro extenso catálogo algún libro que sea de tu agrado.
                    </Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat shadow color="secondary" onPress={closehandler}>¡OK!</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Modal2