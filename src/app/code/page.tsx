"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCode } from "../Redux/Features/counter/counterSlice";

export default function Code() {
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex items-center justify-center ml-4">
        <div className="mb-4">
          <p className="text-gray-900 uppercase">step 3</p>
          <h1 className="text-4xl text-gray-900 uppercase">
            Do you have a promo code
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center bg-green-500">
        <div className="mt-4">
          <input
            type="text"
            name="username"
            id="username"
            className="w-80 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600"
            onChange={(e) => setCode(e.target.value)}
          />
          <div className="flex items-center justify-end mt-4">
            <Link href="/colour">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900 mr-4"
              >
                {"< Back"}
              </button>
            </Link>
            <Link href="/done">
              <button
                onClick={() => {
                  dispatch(updateCode(code));
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
