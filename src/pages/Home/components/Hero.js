import { motion } from "framer-motion";

function Hero() {
  let fontcolor = "rgb(236,196,138)";
  // 481C1C FAD598 rgb(236,196,138)
  let secFontColor = "white";
  return (
    <>
      {/* 1 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.2, delay: 3 }}
        style={{
          position: "absolute",
          top: "7vw",
          left: "24vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 2 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.2, delay: 2.8 }}
        style={{
          position: "absolute",
          top: "4vw",
          left: "19vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 3 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 2.6 }}
        style={{
          position: "absolute",
          top: "1vw",
          left: "14vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 4 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 2.4 }}
        style={{
          position: "absolute",
          top: "-2vw",
          left: "9vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 5 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 2.2 }}
        style={{
          position: "absolute",
          top: "-5vw",
          left: "4vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 6 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 2 }}
        style={{
          position: "absolute",
          top: "-8vw",
          left: "-1vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>

      {/* //!ENNNNDDDD */}
      <div
        style={{
          position: "absolute",
          top: "30vh",
          left: "20px",
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          width: "65vw",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0vw",
            left: "0vw",
            height: "11.3vw",
            width: "60vw",
            overflow: "hidden",
          }}
        >
          <motion.h1
            style={{
              position: "absolute",
              fontSize: "13.5vw",
              textAlign: "center",
              letterSpacing: "6px",
              lineHeight: "13.5vw",
              margin: "0",
              fontWeight: "400",
              color: fontcolor,
              cursor: "default",

              // 481C1C
            }}
          >
            <motion.div
              initial={{ y: 300 }}
              animate={{ y: -300 }}
              transition={{ ease: "easeOut", duration: 1, delay: 1 }}
              style={{
                position: "absolute",
                top: "0vw",
                left: "8vw",
                zIndex: "5",
              }}
            >
              Just
            </motion.div>

            <motion.div
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1, delay: 1.2 }}
              style={{
                position: "absolute",
                top: "0vw",
                left: "8vw",
                zIndex: "5",
              }}
            >
              Just
            </motion.div>

            <motion.div
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1, delay: 1.7 }}
              style={{
                position: "absolute",
                top: "0vw",
                left: "31vw",
                zIndex: "9",
              }}
            >
              Little
            </motion.div>
          </motion.h1>
        </div>
        <br />
        <div
          style={{
            position: "absolute",
            top: "14vw",
            left: "3vw",
            height: "14vw",
            width: "60vw",
            overflow: "hidden",
          }}
        >
          <motion.h1
            style={{
              position: "absolute",
              fontSize: "13.5vw",
              textAlign: "center",
              letterSpacing: "6px",
              lineHeight: "13.5vw",
              margin: "0",
              fontWeight: "400",
              color: fontcolor,
              cursor: "default",
            }}
          >
            <motion.div
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1.3, delay: 1.2 }}
              style={{
                position: "absolute",
              }}
            >
              Great
            </motion.div>
            <motion.div
              initial={{ y: 350 }}
              animate={{ y: -290 }}
              transition={{ ease: "easeOut", duration: 1.3, delay: 1.3 }}
              style={{
                position: "absolute",
                left: "28vw",
                letterSpacing: "11px",
              }}
            >
              Books
            </motion.div>
            <motion.div
              initial={{ y: 350 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1.3, delay: 1.6 }}
              style={{
                position: "absolute",
                left: "28vw",
                letterSpacing: "11px",
              }}
            >
              Books
            </motion.div>
          </motion.h1>
        </div>

        <div
          style={{
            position: "absolute",
            top: ".5vw",
            left: "13.8vw",
            height: "2.6vw",
            width: "10.5vw",
            overflow: "hidden",
          }}
        >
          <motion.p
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1.3, delay: 2.2 }}
            style={{
              position: "absolute",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "1.1vw",
              color: fontcolor,
              cursor: "default",
            }}
          >
            SELECTED WORKS
          </motion.p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "14.3vw",
            left: "52.3vw",
            height: "2.7vw",
            width: "15vw",
            overflow: "hidden",
          }}
        >
          <motion.p
            initial={{ y: 90 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1.3, delay: 2.4 }}
            style={{
              position: "absolute",
              fontWeight: "500",
              fontFamily: "Roboto",
              fontSize: "1.1vw",
              color: fontcolor,
              cursor: "default",
            }}
          >
            FOR YOUR INSPIRATION
          </motion.p>
        </div>
        <div
          style={{
            fontWeight: "500",
            fontFamily: "Roboto",
            fontSize: "1.1vw",
            color: secFontColor,
            position: "absolute",
            top: "20.3vw",
            left: "-14.3vw",
            height: "10.7vw",
            width: "3vw",
            writingMode: "vertical-lr",
            transform: "rotate(-180deg)",
            overflow: "hidden",
          }}
        >
          <motion.p
            initial={{ x: 90 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1.3, delay: 3 }}
            style={{
              position: "absolute",
              right: ".3vw",
              cursor: "default",
            }}
          >
            CREATE NEW BOOKS
          </motion.p>
        </div>
        <div
          style={{
            fontWeight: "500",
            fontFamily: "Roboto",
            fontSize: "1.1vw",
            color: secFontColor,
            position: "absolute",
            top: "0.3vw",
            right: "-13.3vw",
            height: "10.7vw",
            width: "3vw",
            writingMode: "vertical-lr",
            overflow: "hidden",
          }}
        >
          <motion.p
            initial={{ x: 90 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1.3, delay: 3 }}
            style={{
              position: "absolute",
              right: ".3vw",
              cursor: "default",
            }}
          >
            SHARE YOUR IDEAS
          </motion.p>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 3 }}
          style={{
            position: "absolute",
            top: "24vw",
            right: "-13.3vw",
            height: "6.7vw",
            width: "6.7vw",
            backgroundColor: " #FAF9F6",
            borderRadius: "50%",
            display: "inline-block",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 3.8,
            }}
            style={{
              position: "absolute",
              top: "1vw",
              right: "2vw",
              fontWeight: "500",
              fontFamily: "Roboto",
              fontSize: "1.1vw",
              cursor: "default",
            }}
          >
            scroll <br /> down
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
