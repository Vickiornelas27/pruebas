const Infantil = () => {
    return (
        <>
            <h1 className="text-4xl text-center font-bold mt-6">Infantil</h1>
            <div className="mx-auto p-5">
                <text className="font-bold p-5"> Tecnilibros Niños</text>
                <div className="grid md:my-20 md:grid-cols-2 xl:grid-cols-2 xl:grid-rows-3 p-15 mb-5">
                    <p className="justify-center p-8 max-lg:m-10 ">
                        <img src="/img/img infa1.png" alt="imagen infa1" width={200} height={200} style={{ margin: "auto" }} />
                        Inicia a tus hijos en el maravilloso hábito de la lectura . . . ¡ Nosotros te ayudamos !. <br />
                        Contamos con un extenso surtido en material creado especialmente para ellos.
                        Lo que asegura una experiencia ideal desde el primer momento.
                    </p>
                    <p className="justify-center p-8 max-lg:m-10 ">
                        <img src="/img/img infa2.png" alt="imagen infa2" width={200} height={200} style={{ margin: "auto" }} />
                        Te invitamos a venir con tus hijos a Tecnilibros . . . <br />
                        puedes participar con él en la lectura, o bien, hacer uso de nuestra área de Café Internet,
                        por supuesto, tambien puedes búscar en nuestro extenso catálogo algún libro que sea de tu agrado.
                    </p>
                </div>
                <div className="p-5 justify-center">
                    <img src="/img/cursedChild.jpg" alt="imagen cursedchild" width={600} height={150} style={{ margin: "auto" }} />
                </div>
            </div>
        </>
    )
}

export default Infantil