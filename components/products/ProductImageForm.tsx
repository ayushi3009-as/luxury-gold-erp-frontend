"use client";

export default function ProductImageForm() {
  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

      <h2 className="text-3xl font-bold text-yellow-500 mb-8">
        Upload Product Images
      </h2>

      <div className="border-2 border-dashed border-yellow-500/40 rounded-2xl p-12 text-center">

        <input
          type="file"
          multiple
          className="block w-full text-white file:bg-yellow-500 file:text-black file:border-0 file:px-5 file:py-3 file:rounded-lg"
        />

        <p className="text-gray-400 mt-6">
          Select one or more images to upload
        </p>

      </div>

      <div className="mt-8 flex gap-4">

        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl"
        >
          Upload Images
        </button>

      </div>

    </div>
  );
}