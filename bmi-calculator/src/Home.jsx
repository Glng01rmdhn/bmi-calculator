// src/Home.jsx
import React from "react";
import { useState } from "react";

function Home() {
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [bmi, setBmi] = useState(null);
  const [kategori, setKategori] = useState("");

  const hitungBMI = () => {
    if (!berat || !tinggi) return;

    const tinggiMeter = tinggi / 100;
    const hasil = berat / (tinggiMeter * tinggiMeter);
    setBmi(hasil.toFixed(2));

    if (hasil < 18.5) setKategori("Kurus");
    else if (hasil >= 18.5 && hasil < 25) setKategori("Normal");
    else if (hasil >= 25 && hasil < 30) setKategori("Gemuk");
    else setKategori("Obesitas");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Kalkulator BMI</h1>
      <div>
        <input
          type="number"
          placeholder="Berat (kg)"
          value={berat}
          onChange={(e) => setBerat(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Tinggi (cm)"
          value={tinggi}
          onChange={(e) => setTinggi(e.target.value)}
        />
      </div>
      <button onClick={hitungBMI}>Hitung</button>

      {bmi && (
        <div>
          <p><strong>BMI:</strong> {bmi}</p>
          <p><strong>Kategori:</strong> {kategori}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
