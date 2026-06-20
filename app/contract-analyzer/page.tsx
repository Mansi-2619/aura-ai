"use client";

import { useState } from "react";

export default function ContractAnalyzer() {
  const [show, setShow] = useState(false);

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        Contract Analyzer
      </h1>

      <input
        type="file"
        className="border p-4"
      />

      <button
        onClick={() => setShow(true)}
        className="bg-purple-600 px-5 py-3 rounded-xl ml-4"
      >
        Analyze Contract
      </button>

      {show && (
        <div className="mt-10 border p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            Risk Score: 78/100
          </h2>

          <ul className="mt-4">
            <li>
              ⚠ Risky exclusivity clause
            </li>

            <li>
              ⚠ Delayed payment terms
            </li>

            <li>
              ⚠ Ownership rights unclear
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="font-bold">
              AI Summary
            </h3>

            <p>
              This contract contains moderate
              risk and may undervalue the creator.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}