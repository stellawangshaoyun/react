"use client";

import type { RootState } from "../Redux/store";
import { useSelector } from "react-redux";
export default function Done() {
  const count = useSelector((state: RootState) => state.counter);
  return (
    <div className=" h-screen bg-green-500 grid content-center">
      <div className="flex justify-center ">
        <div className="bg-white p-8 rounded-md drop-shadow-md">
          <div className="text-xl font-semibold leading-6 text-gray-900">
            {"I have a"} <b> {count.make}</b> {`and the colour is`}{" "}
            <b>{count.colour}</b>
          </div>
          {count.colour === "RED" && (
            <div className="mt-4 text-base font-semibold leading-6 text-gray-900">
              The car is red!! Nice!!{" "}
            </div>
          )}
          {count.code !== "" && (
            <div className="mt-2 text-base font-semibold leading-6 text-gray-900">
              {`REF:  ${count.code}`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
