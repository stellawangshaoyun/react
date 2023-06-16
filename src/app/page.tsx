"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { updateMake } from "./Redux/Features/counter/counterSlice";
import React, { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState("AUDI");
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex items-center justify-center ml-4">
        <div className="mb-4">
          <p className="text-gray-900 uppercase">step 1</p>
          <h1 className="text-4xl text-gray-900 uppercase">
            Choose a brand of you car
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center bg-green-500">
        <div className="mt-4">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            id="make"
            name="make"
            className="w-80 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600  "
          >
            <option value="AUDI">AUDI</option>
            <option value="BMW">BMW</option>
            <option value="VAUXHALL">VAUXHALL</option>
            <option value="MERCEDES">MERCEDES</option>
            <option value="PEUGEOT">PEUGEOT</option>
            <option value="RENAULT">RENAULT</option>
          </select>
          <div className="flex items-center justify-end mt-4">
            <Link href="/colour">
              <button
                type="submit"
                onClick={() => {
                  dispatch(updateMake(selected));
                }}
                className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
