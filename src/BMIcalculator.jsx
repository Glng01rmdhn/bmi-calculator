import React, { useState } from "react";

function BMICalculator() {
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [bmi, setBmi] = useState(null);
  const [kategori, setKategori] = useState("");

  const hitungBMI = () => {
    if (!berat || !tinggi) return;

    const tinggiMeter = tinggi / 100;
    const hasil = berat / (tinggiMeter * tinggiMeter);
    setBmi(hasil.toFixed(1));

    if (hasil < 18.5) setKategori("Kurus");
    else if (hasil < 25) setKategori("Normal");
    else if (hasil < 30) setKategori("Gemuk");
    else setKategori("Obesitas");
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-indigo-700">
        Kalkulator BMI
      </h1>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Berat Badan (kg)
          </label>
          <input
            type="number"
            value={berat}
            onChange={(e) => setBerat(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-indigo-400"
            placeholder="Contoh: 60"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Tinggi Badan (cm)
          </label>
          <input
            type="number"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-indigo-400"
            placeholder="Contoh: 170"
          />
        </div>

        <button
          onClick={hitungBMI}
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Hitung BMI
        </button>

        {bmi && (
          <div className="mt-4 text-center animate-fade-in">
            <p className="text-lg font-semibold text-gray-800">
              Hasil BMI: <span className="text-indigo-600">{bmi}</span>
            </p>
            <p className="text-md text-gray-600">Kategori: {kategori}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
