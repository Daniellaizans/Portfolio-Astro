import { useState } from "react"

const ProyectosInfo = ({info, close}) => {
    const [colortext, setColortext] = useState(info.colortext)
    const [colorbar, setcolorbar] = useState(info.colorseparate)

    const Itemsdetail = ({title,item}) => {
        console.log(item)
        return (
            <>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex justify-start w-[40%]">
                        <span style={{color: `${colortext}`}} className={`mb-2 font-bold text-lg`}>{title} </span>
                    </div>
                    <div className={`flex flex-wrap justify-start w-[60%] p-1 ${title == 'TECNOLOGIAS' ? 'flex-row' : 'flex-col'}`}>
                        {title != "TECNOLOGIAS" ? <>{item.map((cate, index) => (
                            <span key={index} className="text-white">{cate}</span>
                        ))}</> : 
                        
                        <>{item.map((cate, index) => (
                            <div key={index} className={`${cate.class} mb-1 mr-1 flex items-center  w-fit rounded-xl px-3 `}>
                                {cate.icon}
                                <span className="ml-2" >{cate.name}</span>
                            </div>
                        ))}</> 
                        }
                        

                    </div>
                </div>
            </>
        )
    }


    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start bg-[#13151a] bg-opacity-50 z-50">
                <div className="flex relative flex-col rounded-lg overflow-hidden shadow-xl w-[80%] md:w-[70%]  bg-gradient-to-b from-[#20232a] to-[#1c1f26]">
                    
                    {/* Imagen en la parte superior */}
                    <div className="w-full">
                        <img 
                            src={info.imgdetail || info.img} 
                            alt="Sharlee" 
                            className="w-full h-[300px] object-cover"
                        />
                    </div>
                    <button onClick={close} className="w-auto text-lg absolute text-zinc-600 right-0 m-5"><i class="fa-solid fa-x"></i></button>
                    {/* Contenido de texto abajo */}
                    <div className="p-6 text-start text-white">
                        <h1 style={{color: `${colortext}`}} className={`text-3xl font-bold  `}>{info.title}</h1>
                        <div style={{borderColor: `${colorbar}`}} className={`w-full border-t  my-4`}></div>

                        <div className="mt-4 flex justify-between flex-row gap-4">
                            <div className="flex flex-col items-start justify-start w-[50%] ">
                                <Itemsdetail title='CATEGORIA' item={['APP NODE','INTELIGENCIA ARTIFICIAL']}/>
                                <Itemsdetail title='AÑO' item={['2023']}/>
                                <Itemsdetail title='EMPRESA' item={['TIGAL GROUP']}/>
                                <Itemsdetail title='CATEGORIA' item={['APP NODE','INTELIGENCIA ARTIFICIAL']}/>
                                <Itemsdetail title='TECNOLOGIAS' item={info.tags}/>


                            </div>
                            <div className="flex w-[50%]">
                                <span>{info.textdes || ''}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ProyectosInfo