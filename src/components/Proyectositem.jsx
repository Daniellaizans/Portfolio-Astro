import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";

const Proyectositem = () => {
  const gridRef = useRef(null); // Referencia al contenedor de los elementos
  const [filterKey, setFilterKey] = useState("*"); // Estado para el filtro

  useEffect(() => {
    // Inicializa Isotope en el contenedor
    const iso = new Isotope(gridRef.current, {
      itemSelector: ".grid-item",
      layoutMode: "masonry",
    });

    // Aplica el filtro cuando cambia `filterKey`
    if (filterKey !== "*") {
      iso.arrange({ filter: `.${filterKey}` });
    } else {
      iso.arrange({ filter: "*" });
    }

    return () => {
      iso.destroy(); // Limpia la instancia de Isotope al desmontar el componente
    };
  }, [filterKey]); // Se ejecuta cuando cambia el filtro

  return (
    <div className=" relative">
      {/* Botones de filtro */}
      

      {/* Galería */}
      <div className="flex flex-wrap gap-4 max-w-[30%] " ref={gridRef}>
        <div className="grid-item relative overflow-hidden rounded-lg categoria1 inline-block">
            <div className="group relative">
            {/* Imagen */}
            <img
                src="img/BOT.jpg"
                alt="Imagen 1"
                className="max-w-full h-auto transition-transform duration-300 group-hover:scale-110 group-hover:brightness-50"
            />
            {/* Overlay (Texto) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h5 className="text-white text-lg font-semibold">CHAT BOT I.A.</h5>
                <span className="text-gray-300 text-sm">Aplicación</span>
            </div>
            </div>
        </div>
        </div>
        <div className="flex flex-wrap gap-4 max-w-[30%] " ref={gridRef}>
        <div className="grid-item relative overflow-hidden rounded-lg categoria1 inline-block">
            <div className="group relative">
            {/* Imagen */}
            <img
                src="img/BOT.jpg"
                alt="Imagen 1"
                className="max-w-full h-auto transition-transform duration-300 group-hover:scale-110 group-hover:brightness-50"
            />
            {/* Overlay (Texto) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h5 className="text-white text-lg font-semibold">CHAT BOT I.A.</h5>
                <span className="text-gray-300 text-sm">Aplicación</span>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Proyectositem ;