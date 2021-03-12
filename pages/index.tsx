import React, { useState } from "react";
import api from "../services/axios";

export default function Produtos() {
  const [productPrice, setProductPrice] = useState(0);
  const [phones, setPhones] = useState<Phone[]>([]);

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price = parseInt(e.target.value) || 0;
    setProductPrice(price);
  };

  const handleSearch = async () => {
    try {
      const results = await api.get<Phone[]>("phones", {
        params: { price: productPrice },
      });
      results.data && setPhones(results.data);
    } catch (err) {
      console.log("deu ruim amigao", err);
    }
  };

  return (
    <div>
      <h3>Melhores celulares até</h3>
      <input value={productPrice} onChange={handleChangePrice} />
      <button onClick={handleSearch}>Pesquisar</button>
      {phones.map((phone: Phone, index) => (
        <div key={index}>
          <div>{phone.name}</div>
          <div>{phone.price}</div>
          <div>{phone.picture}</div>
        </div>
      ))}
    </div>
  );
}
