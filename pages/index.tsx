import React, { useState } from "react";

export default function Produtos() {
  const [productPrice, setProductPrice] = useState(0);
  const [phones, setPhones] = useState<Phone[]>([
    { price: 1000, name: "Xiaomi Mi A3", picture: "" },
    { price: 800, name: "Samsung M1", picture: "" },
  ]);

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price = parseInt(e.target.value) || 0;
    setProductPrice(price);
  };

  const handleSearch = async () => {};

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
