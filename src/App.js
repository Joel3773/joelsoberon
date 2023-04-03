import React, { useState } from "react";

function App() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h1>Mejora la calidad de tu imagen</h1>
      <input type="file" onChange={handleImageChange} />
      {image && (
        <img src={URL.createObjectURL(image)} alt="Vista previa de la imagen" />
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Caman from "caman";

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (image) {
      Caman(image, function () {
        this.revert(false);
        this.render();
      });
    }
  }, [image]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h1>Mejora la calidad de tu imagen</h1>
      <input type="file" onChange={handleImageChange} />
      {image && (
        <img src={URL.createObjectURL(image)} alt="Vista previa de la imagen" />
      )}
    </div>
  );
}

export default App;
