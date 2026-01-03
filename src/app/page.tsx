import dynamic from "next/dynamic";

const ProductAR = dynamic(
  () => import("./components/arviewer"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-3">Modern Sofa</h1>
      <p className="text-gray-600 mb-6">
        Tap below to see this sofa in your space with Augmented Reality.
      </p>

      <ProductAR />
    </main>
  );
}
