"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateColour } from "../Redux/Features/counter/counterSlice";
import RadioInput from "../components/RadioInput";

export default function Colour() {
  const dispatch = useDispatch();
  const [colour, setColour] = useState("BLUE");
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex items-center justify-center  bg-green-600">
        <div className="mb-4 ml-4">
          <p className="text-white-900 uppercase">step 2</p>
          <h1 className="text-4xl text-white-900 uppercase">
            Choose a colour of you car
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <form>
          <div className="sm:col-span-3">
            <fieldset>
              <div className="mt-6 space-y-6">
                <RadioInput
                  value="BLUE"
                  id="blue"
                  onChange={() => setColour("BLUE")}
                />
                <RadioInput
                  value="RED"
                  id="red"
                  onChange={() => setColour("RED")}
                />
                <RadioInput
                  value="BLACK"
                  id="black"
                  onChange={() => setColour("BLACK")}
                />
                <RadioInput
                  value="ORANGE"
                  id="organge"
                  onChange={() => setColour("ORANGE")}
                />
              </div>
            </fieldset>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link href="/">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {"< Back"}
              </button>
            </Link>
            <Link href="/code">
              <button
                onClick={() => {
                  dispatch(updateColour(colour));
                }}
                className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Next
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
