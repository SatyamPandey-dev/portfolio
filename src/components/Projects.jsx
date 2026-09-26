// import { motion } from "framer-motion";

// export default function Projects() {
//   const cards = [
//     { id: 10, color: "bg-blue-500", text: "Card 1" },
//     { id: 20, color: "bg-green-500", text: "Card 2" },
//     { id: 30, color: "bg-purple-500", text: "Card 3" },
//   ];

//   return (
//     <div className="relative py-20  ">
//       {cards.map((card, index) => (
//         <motion.div
//           key={card.id}
//           className={`sticky top-[120px] h-[90vh] w-[700px] mx-auto rounded-3xl flex items-center justify-center text-white text-5xl font-bold shadow-xl  ${card.color}`}
//           style={{
//             zIndex: cards.length + index,
//             // Higher zIndex for top card
//           }}
//         >
//           {card.text}
//         </motion.div>
//       ))}
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function Projects() {
  const cards = [
    { id: 1, color: "from-blue-500 to-indigo-600", text: "Card 1" },
    { id: 2, color: "from-green-500 to-emerald-600", text: "Card 2" },
    { id: 3, color: "from-purple-500 to-pink-600", text: "Card 3" },
    { id: 4, color: "from-blue-500 to-indigo-600", text: "Card 4" },
    { id: 5, color: "from-green-500 to-emerald-600", text: "Card 5" },
    { id: 6, color: "from-purple-500 to-pink-600", text: "Card 6" },
  ];

  return (
    <div className="relative py-20 perspective-[2000px]">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className={`sticky min-h-[450px] w-[325px] md:h-[60vh] md:w-[600px]  lg:h-[80vh]  lg:w-[1000px] mx-auto rounded-3xl flex items-center justify-center text-white text-5xl font-bold shadow-2xl bg-gradient-to-br ${card.color}`}
          style={{
            top: `${120 + index * 20}px`, // each card lower than previous
            zIndex: cards.length + index, // top card appears above
          }}
          whileHover={{
            rotateX: -6,
            rotateY: 6,
            scale: 1.04,
            boxShadow:
              "0px 25px 50px rgba(0,0,0,0.3), 0px 0px 30px rgba(255,255,255,0.15)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          initial={{ opacity: 0, y: 80, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          {card.text}
        </motion.div>
      ))}
    </div>
  );
}
