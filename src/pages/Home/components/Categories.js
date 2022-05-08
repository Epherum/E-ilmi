import { motion } from "framer-motion";

function Categories({ navigate }) {
  let fontcolor = "rgb(236,196,138)";
  // 481C1C FAD598 rgb(236,196,138)
  // let secFontColor = "#481C1C";
  return (
    <>
      {/* 1 */}
      <div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.2, delay: 3 }}
        style={{
          position: "absolute",
          top: "118vw",
          right: "20vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></div>

      {/* 2 */}
      <div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.2, delay: 2.8 }}
        style={{
          position: "absolute",
          top: "121vw",
          right: "15vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></div>

      {/* 3 */}
      <div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 2.6 }}
        style={{
          position: "absolute",
          top: "124vw",
          right: "10vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></div>

      {/* 4 */}
      <div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 2.4 }}
        style={{
          position: "absolute",
          top: "127vw",
          right: "5vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></div>

      {/* 5 */}
      <div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 2.2 }}
        style={{
          position: "absolute",
          top: "130vw",
          right: "0vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></div>
      {/* 6 */}
      <div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 2 }}
        style={{
          position: "absolute",
          top: "133vw",
          right: "-5vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></div>
      <div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 2 }}
        style={{
          position: "absolute",
          top: "115vw",
          right: "-50vw",
          height: "200vw",
          width: "200vw",
          backgroundColor: "#AD807C",
          borderRadius: "70%",
          border: "0px transparent ",
          zIndex: "-90",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "230vh",
          left: "27vw",
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          // width: "65vw",
        }}
      >
        <motion.h1
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: ".5" }}
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
    </>
  );
}

export default Categories;
