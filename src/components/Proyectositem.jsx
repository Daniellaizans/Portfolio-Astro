import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ProyectosInfo from "./ProyectosInfo";
import ReactIcon from "../icons/React";
import Tailwind from "../icons/Tailwind";
import Node from "../icons/Node";
import Java from "../icons/Java";
import Mysql from "../icons/Mysql";
import Astro from "../icons/Astro";
import Azure from "../icons/Azure";
import Meta from "../icons/Meta";
import Aws from "../icons/Aws";
import PostGress from "../icons/PostGress";

const TAGS = {
  REACT: {
    name: "REACT",
    class: "text-white bg-[#003159]",
    icon: <ReactIcon/>
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "text-white  bg-[#003159]",
    icon: <Tailwind/>
  },
  NODE: {
    name: "NODE JS",
    class: "text-white bg-[#026E00]",
    icon: <Node />
  },
  JAVA: {
    name: "Java",
    class: "text-[#CC3738] bg-white",
    icon: <Java/>
  },
  MYSQL: {
    name: "MySql",
    class: "text-[#253475] bg-[#E7F9FF]",
    icon: <Mysql/>
  },
  ASTRO: {
    name: "Astro",
    class: "text-white bg-[#05081A]",
    icon: <Astro/>
  },
  AZURE: {
    name: "Azure",
    class: "text-[#2771B8] bg-white",
    icon: <Azure/>
  },
  AWS: {
    name: "AWS",
    class: "text-white bg-[#242938]",
    icon: <Aws/>
  },
  META: {
    name: "META",
    class: "text-[#2771B8] bg-white",
    icon: <Meta/>
  },
  POSTGRESS: {
    name: "PostgreSQL",
    class: "text-[#2771B8] bg-white",
    icon: <PostGress/>
  }
}

const images = [
  {
    img: "img/BOT.jpg",
    title: "CHAT BOT I.A.",
    empresa: "TIGAL GROUP",
    type: "Aplicacion",
    colortext: "#4EFEB3",
    tags: [TAGS.NODE, TAGS.META, TAGS.AWS],
    textdes: "Desarrollé un chatbot con Node.js para una empresa que abarca tres áreas de negocio: licorería, floral y servicios de marketing, diseño y branding. Este sistema, integrado con la API de WhatsApp de Meta, permite gestionar conversaciones de clientes, registrar pedidos en una base de datos y almacenar la información de los usuarios atendidos. El chatbot ofrece atención automatizada según la preferencia del cliente, asegurando respuestas rápidas y eficientes. Además, envía notificaciones en tiempo real a los administradores cuando se concreta una venta o se realiza una reserva, optimizando la gestión y mejorando la experiencia del usuario."
  },
  {
    img: "img/HM.png",
    title: "Sistema Web",
    empresa: "TIGAL GROUP",
    type: "Web",
    colortext: "#FC6B03",
    colorseparate: "#233245",
    tags: [ TAGS.REACT,TAGS.TAILWIND]
  },
  {
    img: "img/login2.png",
    title: "Sistema Administrativo",
    empresa: "HORIZONTE MEDIC",
    type: "Aplicación Web",
    colortext: "#FC6B03",
    colorseparate: "#233245",
    imgdetail: "img/HM.png",
    tags: [ TAGS.JAVA,TAGS.AZURE]
  },
  {
    img: "img/Minna.png",
    title: "E-Commerce",
    empresa: "MINNA | K-Beauty",
    type: "Aplicación Web",
    colortext: "#DE9ED2",
    colorseparate: "#784D81",
    tags: [ TAGS.NODE,TAGS.REACT,TAGS.TAILWIND,TAGS.MYSQL,TAGS.AZURE],
    textdes: `Desarrollé una plataforma de comercio electrónico para una empresa especializada en la venta de productos de belleza, encargándome tanto del backend como del frontend. Utilicé metodologías ágiles para garantizar un desarrollo escalable y eficiente.
  El sitio permite a los usuarios explorar productos por categoría, agregarlos a un carrito de compras y completar sus pedidos mediante MercadoPago, tras registrarse en la plataforma.
  Además, incluye un panel de administración donde los encargados pueden gestionar productos (agregar, modificar precios, tamaños, imágenes), ver la lista de usuarios registrados, revisar las compras realizadas y enviar notificaciones personalizadas a los clientes, optimizando la comunicación y fidelización.`

  },
  {
    img: "img/TG.jpg",
    title: "Sistema Web",
    empresa: "TIGAL GROUP",
    type: "Web",
    colortext: "#4EFEB3",
    tags: [ TAGS.REACT,TAGS.TAILWIND,TAGS.MYSQL]
  },
  {
    img: "img/Cuispes2.png",
    title: "Aplicación Web",
    empresa: "CUISPES PERÚ",
    type: "Web / Local",
    colortext: "#ffcf59",
    colorseparate: "#784D81",
    imgdetail: "img/Cuispes-Web.png",
    tags: [ TAGS.REACT,TAGS.TAILWIND,TAGS.AZURE]
  },
  {
    img: "",
    title: "",
    empresa: "",
    type: ""
  },
  {
    img: "img/Design-azul.jpg",
    title: "E-Commerce",
    empresa: "TIGAL GROUP",
    type: "Aplicación Web",
    colortext: "#0212E4",
    tags: [ TAGS.REACT,TAGS.TAILWIND,TAGS.MYSQL]
  },
  {
    img: "img/Proditel.png",
    title: "Sistema Web",
    empresa: "TIGAL GROUP",
    type: "Web",
    colortext: "#FC6B03",
    imgdetail: "img/Proditel-Web.png",
    tags: [ TAGS.REACT,TAGS.TAILWIND,TAGS.ASTRO,TAGS.AZURE]

  },
  
  
 
]


const Proyectositem = () => {
  const [modal, setModal] = useState(false)
  const [info, setInfo] = useState({})
  return (
    <div className=" relative">
      {/* Botones de filtro */}
      <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        gutterBreakpoints={{350: "12px", 750: "16px", 900: "24px"}}
      >
        <Masonry columnsCount={3} gutter="10px">
          {images.map((image, i) => (
              <div className="group relative rounded-md">
                <a className="cursor-pointer" onClick={() => {setModal(true),setInfo(image)}}>
                <img
                    className="transition-transform duration-300 rounded-md"
                    key={i}
                    src={image.img}
                    style={{width: "100%", display: "block"}}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-yellow-400 opacity-0 transition-all duration-300 group-hover:opacity-80 rounded-md ">
                  <h4 className="text-black text-lg font-semibold">{image.title}</h4>
                  <h5 className="text-black italic text-base font-semibold">{image.empresa}</h5>
                  <span className="text-gray-800 text-sm">{image.type}</span>
                </div>
                <div className="absolute inset-0 border border-black transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                </a>
              </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {modal && <ProyectosInfo info={info} close={() => {setModal(false)}} />}
        
    </div>
  );
};

export default Proyectositem ;



//CUADRO AMARIILLO
/*<div className="group relative rounded-md">
                <a href=" #">
                <img
                    className="transition-transform duration-300 rounded-md"
                    key={i}
                    src={image.img}
                    style={{width: "100%", display: "block"}}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-yellow-400 opacity-0 transition-all duration-300 group-hover:opacity-80 rounded-md ">
                  <h4 className="text-black text-lg font-semibold">{image.title}</h4>
                  <h5 className="text-black italic text-base font-semibold">{image.empresa}</h5>
                  <span className="text-gray-800 text-sm">{image.type}</span>
                </div>
                <div className="absolute inset-0 border border-black transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                </a>
              </div> */


//CUADRO PLOMO
/*<div className="group relative rounded-md">
                <a href=" #">
                <img
                    className="transition-transform duration-300 group-hover:scale-105 group-hover:brightness-50 rounded-md"
                    key={i}
                    src={image.img}
                    style={{width: "100%", display: "block"}}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h4 className="text-white text-lg font-semibold">{image.title}</h4>
                  <h5 className="text-gray-100  text-base font-semibold">{image.empresa}</h5>
                  <span className="text-gray-300 text-sm">{image.type}</span>
                </div>
                </a>
              </div>*/