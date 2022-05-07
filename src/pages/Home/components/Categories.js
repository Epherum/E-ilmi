import { motion } from "framer-motion";

function Categories({ navigate }) {
  let fontcolor = "rgb(236,196,138)";
  // 481C1C FAD598 rgb(236,196,138)
  // let secFontColor = "#481C1C";
  return (
    <div
      style={{
        position: "absolute",
        top: "220vh",
        left: "30vw",
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        // width: "65vw",
      }}
    >
      <motion.h1
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        transition={{ ease: "easeOut" }}
        onClick={() => navigate("/Categories")}
        style={{
          position: "absolute",
          fontSize: "13.5vw",
          textAlign: "center",
          letterSpacing: "6px",
          lineHeight: "13.5vw",
          margin: "0",
          fontWeight: "400",
          color: fontcolor,
          cursor: "pointer",
          // 481C1C
        }}
      >
        Browse <br /> Categories
      </motion.h1>
    </div>
  );
}

export default Categories;
