

const ProyectosInfo = () => {
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
                    <div className="p-6 text-center text-white">
                        <h1 className="text-3xl font-bold text-[#4EFEB3]">SHARLEE</h1>
                        <p className="text-gray-300 mt-2">Sharlee est le surnom que j’utilise sur les réseaux</p>
                        
                        <div className="mt-4 flex justify-center gap-4">
                            <span className="text-[#4EFEB3] font-bold">CATÉGORIE</span>
                            <span className="text-gray-400">Branding</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ProyectosInfo