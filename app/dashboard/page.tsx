export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-10">
        Creator Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="p-6 border rounded-xl">
          Health Score
          <h2 className="text-3xl font-bold">
            87
          </h2>
        </div>

        <div className="p-6 border rounded-xl">
          Burnout Risk
          <h2 className="text-3xl font-bold">
            Low
          </h2>
        </div>

        <div className="p-6 border rounded-xl">
          Revenue Forecast
          <h2 className="text-3xl font-bold">
            ₹52K
          </h2>
        </div>

        <div className="p-6 border rounded-xl">
          Credit Score
          <h2 className="text-3xl font-bold">
            820
          </h2>
        </div>
      </div>
    </div>
  );
}