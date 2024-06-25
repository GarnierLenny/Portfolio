import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-row items-center">
//       <div className="basis-2/5">
//         <div className="fixed bg-orange-400">
//           section1
//         </div>
//       </div>
//       <div className="basis-3/5 flex-col bg-slate-500">
//         <div className="py-20">
//           section2
//         </div>
//       </div>
//     </main>
//   );
// }

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8 justify-center items-center">
      <div className="text-6xl font-bold">
        Hi, I&apos;m Lenny
      </div>
      <div className="text-4xl">
        A passionate software engineer
      </div>
      <div className="bottom-10 fixed">
        (Still under construction...)
      </div>
    </main>
  );
}