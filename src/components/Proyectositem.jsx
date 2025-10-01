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
import { motion } from "framer-motion";
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
    año: "2023",
    title: "CHAT BOT I.A.",
    
    empresa: "TIGAL GROUP",
    type: "Aplicacion",
    colortext: "#4EFEB3",
    tags: [TAGS.NODE, TAGS.META, TAGS.AWS, TAGS.POSTGRESS],
    textdes: "Desarrollé un chatbot con Node.js para una empresa que abarca tres áreas de negocio: licorería, floral y servicios de marketing, diseño y branding. Este sistema, integrado con la API de WhatsApp de Meta, permite gestionar conversaciones de clientes, registrar pedidos en una base de datos y almacenar la información de los usuarios atendidos. El chatbot ofrece atención automatizada según la preferencia del cliente, asegurando respuestas rápidas y eficientes. Además, envía notificaciones en tiempo real a los administradores cuando se concreta una venta o se realiza una reserva, optimizando la gestión y mejorando la experiencia del usuario."
  },
  {
    img: "img/HM.png",
    title: "Sistema Web",
    año: "2024",
    empresa: "TIGAL GROUP",
    type: "Web",
    colortext: "#FC6B03",
    colorseparate: "#233245",
    tags: [ TAGS.REACT,TAGS.TAILWIND, TAGS.AZURE,TAGS.NODE],
    textdes: "Actualmente participo en la migración de un sistema de escritorio a una plataforma web en la nube, centralizando todos los formularios clínicos (triaje, exámenes ocupacionales, rayos X, radiografías, entre otros). El nuevo sistema permite a médicos y personal acceder y gestionar la información en cualquier momento y lugar, incorporando la digitalización de firmas y huellas de los pacientes directamente en los formularios. La plataforma ofrece un diseño más intuitivo y funcional, mejorando la rapidez en los procesos, la disponibilidad de la información y la experiencia de uso para todo el personal de la clínica."
  },
  {
    img: "img/login2.png",
    title: "Sistema Administrativo",
    empresa: "HORIZONTE MEDIC",
    año: "2024",
    type: "Aplicación Web",
    colortext: "#FC6B03",
    colorseparate: "#233245",
    imgdetail: "img/HM.png",
    tags: [ TAGS.JAVA,TAGS.AZURE],
    textdes: "Brindo mantenimiento y mejoras a un sistema de escritorio utilizado en una clínica para la gestión integral de pacientes. El sistema cuenta con múltiples módulos y formularios para diferentes áreas como exámenes ocupacionales, triaje, rayos X y radiografías. Implementamos la digitalización de firmas y huellas de los pacientes, integrando esta información en todos los reportes digitales, lo que optimizó la trazabilidad, redujo el uso de papel y mejoró la eficiencia administrativa."
  },
  {
    img: "img/Minna.png",
    title: "E-Commerce",
    empresa: "MINNA | K-Beauty",
    año: "2024",
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
    año: "2023",
    empresa: "TIGAL GROUP",
    type: "Web",
    colortext: "#4EFEB3",
    tags: [ TAGS.REACT,TAGS.TAILWIND,TAGS.MYSQL],
    textdes: "Desarrollé una página web interactiva para la agencia de publicidad y marketing Tigal Group. El sitio fue diseñado con una interfaz moderna y llamativa, enfocada en el posicionamiento digital de la marca y la captación de clientes. Incluye secciones dinámicas que facilitan la presentación de servicios y optimizan la toma de solicitudes en línea, mejorando la experiencia del usuario y fortaleciendo la presencia digital de la empresa."
  },
  {
    img: "img/Cuispes2.png",
    title: "Aplicación Web",
    empresa: "CUISPES PERÚ",
    año: "2024",
    type: "Web / Local",
    colortext: "#ffcf59",
    colorseparate: "#784D81",
    imgdetail: "img/Cuispes-Web.png",
    tags: [ TAGS.REACT,TAGS.TAILWIND,TAGS.AZURE],
    textdes: "Desarrollé Cuispes, una aplicación web interactiva orientada al turismo, diseñada para tabletas informativas en un centro turístico. La plataforma permite a los visitantes conocer la descripción de la zona, así como información detallada de la fauna que habita en el lugar. Su interfaz dinámica y visualmente atractiva fomenta la interacción con los turistas, ofreciendo una experiencia novedosa y educativa. Actualmente en uso, la aplicación ha permitido a la empresa generar mayor dinamismo con sus visitantes, fortaleciendo el valor turístico y la innovación en la presentación de contenidos."
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
    año: "2023",
    type: "Aplicación Web",
    colortext: "#4A56EC",
    tags: [ TAGS.REACT,TAGS.TAILWIND,TAGS.MYSQL],
    textdes: "Diseñé y desarrollé una tienda virtual interactiva para Design Collections, la línea de licorería y floral de Tigal Group. El sitio web presenta una interfaz moderna y atractiva que permite a los usuarios explorar de forma intuitiva los productos, visualizar sus detalles y acceder a una experiencia de compra fluida. Se implementó una pasarela de pagos integrada con Culqi, asegurando transacciones seguras y confiables. Además, se trabajó en la optimización SEO y el posicionamiento digital, potenciando la visibilidad de la marca y facilitando la captación de nuevos clientes."
  },
  {
    img: "img/Proditel.png",
    title: "Sistema Web",
    empresa: "Proditel S.A.C.",
    año: "2024",
    type: "Web",
    colortext: "#FC6B03",
    imgdetail: "img/Proditel-Web.png",
    tags: [ TAGS.REACT,TAGS.TAILWIND,TAGS.ASTRO,TAGS.AZURE],
    testdes: "Diseñé una página web moderna y descriptiva para PRODITEL, una empresa dedicada a la gestión de redes e instalación de servidores en zonas remotas del país. El sitio resalta los servicios especializados de la compañía mediante una interfaz clara, atractiva y novedosa, facilitando la comunicación con potenciales clientes. Además, se trabajó en la optimización SEO y el posicionamiento digital, logrando mayor visibilidad en línea y consolidando la presencia de la marca en el sector tecnológico y de telecomunicaciones."
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