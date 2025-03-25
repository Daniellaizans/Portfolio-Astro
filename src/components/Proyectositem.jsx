import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [
  {
    img: "img/BOT.jpg",
    title: "CHAT BOT I.A.",
    empresa: "TIGAL GROUP",
    type: "Aplicacion"
  },
  {
    img: "img/HM.png",
    title: "Sistema Web",
    empresa: "TIGAL GROUP",
    type: "Web"
  },
  {
    img: "img/login2.png",
    title: "Sistema Administrativo",
    empresa: "HORIZONTE MEDIC",
    type: "Aplicación Web"
  },
  {
    img: "img/Minna.png",
    title: "E-Commerce",
    empresa: "MINNA | K-Beauty",
    type: "Aplicación Web"
  },
  {
    img: "img/TG.jpg",
    title: "Sistema Web",
    empresa: "TIGAL GROUP",
    type: "Web"
  },
  {
    img: "img/Cuispes2.png",
    title: "Aplicación Web",
    empresa: "CUISPES PERÚ",
    type: "Web / Local"
  },
  {
    img: "",
    title: "",
    empresa: "",
    type: ""
  },
  {
    img: "img/Design-azul.jpg",
    title: "",
    empresa: "",
    type: ""
  },
  {
    img: "img/Proditel.png",
    title: "Sistema Web",
    empresa: "TIGAL GROUP",
    type: "Web"
  },
  
  
 
]


const Proyectositem = () => {

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
              </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

        
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