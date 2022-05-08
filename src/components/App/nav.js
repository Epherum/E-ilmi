import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

function Overlay() {
  const transition = { ease: "easeInOut", duration: 1.5, delay: 2 };

  const location = useLocation();
  useEffect(() => {}, [location]);
  let secFontColor = "null";
  if (window.location.pathname === "/") {
    secFontColor = "white";
  } else {
    secFontColor = "black";
  }

  // 481C1C FAD598 rgb(236,196,138)
  return (
    <>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "0px",
          right: "0",
          pointerEvents: "none",
          width: "90vw",
          height: "100px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            width: "200px",
            height: "50px",
            overflow: "hidden",
          }}
        >
          <motion.a
            initial={{ y: 90 }}
            animate={{ y: -90 }}
            transition={{ ease: "easeOut", duration: 1, delay: 2.7 }}
            style={{
              position: "absolute",
              top: "2vw",
              left: "3vw",
              fontFamily: "Roboto",
              fontSize: "1.6rem",
              pointerEvents: "all",
              color: secFontColor,
              textDecoration: "none",
            }}
          >
            E-ILMI
          </motion.a>
          <motion.a
            initial={{ y: 90 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: 3 }}
            style={{
              position: "absolute",
              top: "0vw",
              left: "3vw",
              fontFamily: "Roboto",
              fontSize: "1.6rem",
              pointerEvents: "all",
              color: secFontColor,
              textDecoration: "none",
            }}
          >
            E-ILMI
          </motion.a>
          <Link
            to={`/`}
            style={{
              position: "absolute",
              top: "0vw",
              left: "3vw",
              fontFamily: "Roboto",
              fontSize: "1.6rem",
              pointerEvents: "all",
              color: secFontColor,
              textDecoration: "none",
              zIndex: "90",
              opacity: "0",
            }}
          >
            E-Ilmii
          </Link>
        </div>
        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 3.2 }}
          style={{ position: "absolute", top: "2.3vw", right: "3vw" }}
          src={"/images/user.png"}
          alt=""
          width="25"
          height="25"
        />
        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 3.1 }}
          style={{ position: "absolute", top: "2.3vw", right: "7vw" }}
          src={"/images/bag.png"}
          alt=""
          width="25"
          height="25"
        />
        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 3 }}
          style={{ position: "absolute", top: "2.3vw", right: "11vw" }}
          src={"/images/search.png"}
          alt=""
          width="25"
          height="25"
        />
      </motion.div>
    </>
  );
}

export default Overlay;
