import Image from "next/image";

export default function Home() {
  return (
    <main className="md:flex-min min-h-screen flex-col items-center justify-between p-87">
      <div><figure className="bg-green-300 rounded-xl p-10 dark:bg-brown-800">
  <img className="w-24 h-24  mx-bottom" src="/mb-pic.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 md:text-centre space-y-4">
    <blockquote>
      <p className="text-lg font-medium text-green-500">
        “Hello.I am Mubashir.I am a Skiptracer.I am a interclass student.”
      </p>Happy Indepadant day.
    </blockquote>I love Pakistan.
    <figcaption className="font-medium text-red-600">
      <div className="font-medium">
        M.Mubashir
      </div>
      <div>
        Staff Engineer, RYK
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
