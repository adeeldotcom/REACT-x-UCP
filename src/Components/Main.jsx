import Card from "./Card";

const Main = () => {
  const products = [
    { title: "Laptop", desc: "High-performance laptop for work and gaming." },
    { title: "Mobile", desc: "Latest smartphone with stunning camera and battery life." },
    { title: "Tablet", desc: "Portable tablet perfect for reading and entertainment." },
    { title: "Monitor", desc: "HD monitor with crisp display and wide viewing angle." },
  ];

  return (
    <div className="main bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <Card key={index} title={product.title} desc={product.desc} />
        ))}
      </div>
    </div>
  );
};

export default Main;
