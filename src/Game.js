import React, { useState } from "react";
import './Game.css'

const mushrooms = [
    { name: "Amanita phalloides", image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Amanita_phalloides.jpg", dangerous: true, fact: "Also called the Death Cap, this mushroom contains deadly toxins that cause liver failure." },
    { name: "Agaricus bisporus", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Agaricus_bisporus.jpg", dangerous: false },
    { name: "Boletus edulis", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Boletus_edulis.jpg", dangerous: false },
    { name: "Amanita muscaria", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Amanita_muscaria.jpg", dangerous: true, fact: "Amanita muscaria, also known as the fly agaric, is psychoactive and can be toxic in large amounts." },
    { name: "Cantharellus cibarius", image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Cantharellus_cibarius.jpg", dangerous: false },
    { name: "Cortinarius rubellus", image: "https://media.gettyimages.com/id/154718394/photo/deadly-webcap.jpg?b=1&s=594x594&w=0&k=20&c=-dwjJZPWsLHeiEcNp6FyR-AT4KLa7Ymnxj8ceo-eejc=", dangerous: true, fact: "Cortinarius rubellus can cause kidney failure if ingested." },
    { name: "Pleurotus ostreatus", image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Pleurotus_ostreatus.jpg", dangerous: false },
    { name: "Lepiota brunneoincarnata", image: "https://th.bing.com/th/id/R.5ec7d93de647b5e72a702b0272b1a939?rik=hcce0795kdfh%2bA&pid=ImgRaw&r=0", dangerous: true, fact: "Lepiota brunneoincarnata is extremely toxic and causes severe liver damage." },
    { name: "Macrolepiota procera", image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Macrolepiota_procera.jpg", dangerous: false },
    { name: "Omphalotus olearius", image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Omphalotus_olearius.jpg", dangerous: true, fact: "Omphalotus olearius, also known as the Jack-O'-Lantern mushroom, is toxic and causes severe stomach cramps." },
    { name: "Clitocybe rivulosa", image: "https://th.bing.com/th/id/R.7f3c0193e0a06cdc953229deda1a28c8?rik=yyWdjaaUJKKJzA&riu=http%3a%2f%2fwww.mykoweb.com%2fCAF%2fphotos%2flarge%2fClitocybe_rivulosa(fs-02).jpg&ehk=bpA2PoeywS5wFdloZrtAmRnPV3soe1oUi0SHHh55vjQ%3d&risl=&pid=ImgRaw&r=0", dangerous: true, fact: "Clitocybe rivulosa contains muscarine, which can cause excessive salivation and sweating." },
    { name: "Russula emetica", image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Russula_emetica.jpg", dangerous: true, fact: "Russula emetica, the Sickener, causes vomiting if consumed." }
  ];
  

const Game = () =>  {
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  
  const getRandomPair = () => {
    let shuffled = [...mushrooms].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  };
  
  const [pair, setPair] = useState(getRandomPair());

  const handleSelect = (index) => {
    const chosenMushroom = pair[index];
    if (chosenMushroom.dangerous) {
      setResult(chosenMushroom.fact);
    } else {
      setResult("This mushroom is safe, but be careful in the wild!");
    }
    setSelected(index);
  };

  const handleNext = () => {
    setPair(getRandomPair());
    setSelected(null);
    setResult(null);
  };

  return (
    <div className="game">
      <h2 className="text-xl font-bold mb-4">Guess the Dangerous Mushroom!</h2>
      <div className="game-grid">
        {pair.map((mushroom, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`game-button p-2 border-2 rounded-md ${selected === index ? "border-red-500" : "border-gray-300"}`}
          >
            <img src={mushroom.image} alt={mushroom.name} className="w-24 h-24 object-cover rounded-md" />
            <p className="text-sm mt-1">{mushroom.name}</p>
          </button>
        ))}
      </div>
      {result && (
        <div className="mt-4 p-2 bg-white border border-gray-300 rounded-md shadow-sm">
          <p className="text-md font-semibold result-box">{result}</p>
        </div>
      )}
      <button
        onClick={handleNext}
        className="next-button mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
}

export default Game;