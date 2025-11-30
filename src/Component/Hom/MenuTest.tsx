import React, { useState } from "react";
import "../../styles/Hom/MenuTest.css";

const MenuTest = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* BOTÓN ABRIR */}
      {!open && (
        <button className="open-btn" onClick={() => setOpen(true)}>
          ABRIR MENU
        </button>
      )}

      {/* CONTAINER DIVIDIDO A LA MITAD */}
      {open && (
        <div className="menu-container">
          {/* BOTÓN CERRAR */}
          <button className="close-btn" onClick={() => setOpen(false)}>
            X
          </button>

          <div className="menu-left">
            <h2>IZQUIERDA</h2>
          </div>

          <div className="menu-right">
            <h2>DERECHA</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuTest;
