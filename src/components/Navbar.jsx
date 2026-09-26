import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Contact", link: "#contact" },
  ];

  // Parent container for menu items (stagger animation)
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between nav items
        delayChildren: 0.5, // wait after logo animation
      },
    },
  };

  // Animation for each nav item
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <nav
      className="
        bg-[#020211e3] px-2 py-4 sticky top-0
        flex justify-between items-center 
        shadow-lg  w-full z-50 
         group 
      "
    >
      {/* Logo animation */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-1 py-1 text-sky-400 rounded-md shadow-md hover:text-sky-300 navneu"
      >
        <h1 className="text-2xl ">
          <span className="text-white">My</span>Portfolio
        </h1>
      </motion.div>

      {/* Menu animation */}
      <motion.ul
        className="flex gap-6"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {navItems.map((item, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer transition-all duration-300 navneu"
          >
            <a
              href={item.link}
              className={`
                transition-all 
                ${
                  item.name === "Home"
                    ? "text-sky-400 font-semibold"
                    : item.name === "Contact"
                      ? "bg-sky-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-sky-500"
                      : "text-white hover:text-sky-300"
                }
              `}
            >
              {item.name}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Glowing line */}
      <span
        className="
          pointer-events-none absolute bottom-0 left-1/2 
          h-[1px] w-0 
          bg-sky-400 rounded-full 
          transition-all duration-1000 ease-in-out
          group-hover:w-full group-hover:left-0
          shadow-[0_0_8px_#38bdf8,0_0_16px_#38bdf8,0_0_32px_#38bdf8]
        "
      />
    </nav>
  );
}
