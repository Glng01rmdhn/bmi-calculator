import React, { useState } from "react";

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
    else if (hasil < 25) setKategori("Normal");
    else if (hasil < 30) setKategori("Gemuk");
    else setKategori("Obesitas");
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Kalkulator BMI
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition font-semibold"
          >
            Hitung BMI
          </button>

          {bmi && (
            <div className="mt-6 text-center animate-fade-in">
              <p className="text-lg font-semibold text-gray-800">
                Hasil BMI: <span className="text-indigo-600">{bmi}</span>
              </p>
              <p className="text-md text-gray-600">Kategori: {kategori}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
