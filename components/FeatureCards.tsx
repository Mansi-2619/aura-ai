export default function FeatureCards() {
  const features = [
    {
      title: "Creator Twin",
      desc: "Growth forecasting and creator insights",
    },
    {
      title: "Protection Engine",
      desc: "Contract and scam detection",
    },
    {
      title: "Brand Match",
      desc: "Find ideal sponsorships",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((item) => (
        <div
          key={item.title}
          className="p-6 border rounded-xl"
        >
          <h3 className="font-bold text-xl">
            {item.title}
          </h3>

          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}