"use client";

export default function ProductImageForm() {
  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl p-8">

      <h2 className="text-3xl font-bold text-accent-gold mb-8">
        Upload Product Images
      </h2>

      <div className="border-2 border-dashed border-yellow-500/40 rounded-2xl p-12 text-center">

        <input
          type="file"
          multiple
          className="block w-full text-text-primary file:bg-accent-gold file:text-black file:border-0 file:px-5 file:py-3 file:rounded-lg"
        />

        <p className="text-text-secondary mt-6">
          Select one or more images to upload
        </p>

      </div>

      <div className="mt-8 flex gap-4">

        <button
          className="bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold px-8 py-3 rounded-xl"
        >
          Upload Images
        </button>

      </div>

    </div>
  );
}