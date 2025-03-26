

const ProyectosInfo = ({info}) => {

    const Itemsdetail = ({title,item}) => {
        console.log(item)
        return (
            <>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex justify-start w-[40%]">
                        <span className="text-[#4EFEB3] font-bold text-lg">{title} </span>
                    </div>
                    <div className="flex flex-col justify-start w-[60%]">
                        {item.map((cate, index) => (
                            <span key={index} className="text-white">{cate}</span>
                        ))}

                    </div>
                </div>
            </>
        )
    }


    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start bg-[#13151a] bg-opacity-50 z-50">
                <div className="flex flex-col rounded-lg overflow-hidden shadow-xl w-[80%] md:w-[70%]  bg-gradient-to-b from-[#20232a] to-[#1c1f26]">
                    
                    {/* Imagen en la parte superior */}
                    <div className="w-full">
                        <img 
                            src="img/TG.jpg" 
                            alt="Sharlee" 
                            className="w-full h-[300px] object-cover"
                        />
                    </div>

                    {/* Contenido de texto abajo */}
                    <div className="p-6 text-start text-white">
                        <h1 className="text-3xl font-bold text-[#4EFEB3]">{info.title}</h1>
                        <div className="w-full border-t border-white my-4"></div>

                        <div className="mt-4 flex justify-between flex-row gap-4">
                            <div className="flex flex-col items-start justify-start w-[50%] ">
                                <Itemsdetail title='CATEGORIA' item={['APP NODE','INTELIGENCIA ARTIFICIAL']}/>
                                <Itemsdetail title='AÑO' item={['2023']}/>
                                <Itemsdetail title='EMPRESA' item={['TIGAL GROUP']}/>
                                <Itemsdetail title='CATEGORIA' item={['APP NODE','INTELIGENCIA ARTIFICIAL']}/>


                            </div>
                            <div className="flex w-[50%]">
                                a
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ProyectosInfo