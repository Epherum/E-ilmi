import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Overlay() {
  const transition = { ease: "easeInOut", duration: 1.5, delay: 2 };
  let fontcolor = "#481C1C";
  // 481C1C FAD598 rgb(236,196,138)
  let secFontColor = "white";
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
              top: 40,
              left: 90,
              fontFamily: "Roboto",
              fontSize: "3rem",
              pointerEvents: "all",
              color: fontcolor,
              textDecoration: "none",
            }}
          >
            W/2
          </motion.a>
          <motion.a
            initial={{ y: 90 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: 3 }}
            style={{
              position: "absolute",
              top: 0,
              left: 90,
              fontFamily: "Roboto",
              fontSize: "3rem",
              pointerEvents: "all",
              color: secFontColor,
              textDecoration: "none",
            }}
          >
            W/2
          </motion.a>
          <Link
            to={`/`}
            style={{
              position: "absolute",
              top: 0,
              left: 90,
              fontFamily: "Roboto",
              fontSize: "3rem",
              pointerEvents: "all",
              color: secFontColor,
              textDecoration: "none",
              zIndex: "90",
              opacity: "0",
            }}
          >
            {" "}
            W/2
          </Link>
        </div>
        <motion.div
          style={{
            position: "absolute",
            top: 40,
            right: 190,
            width: "11vw",
            height: "2.6vw",
            fontSize: "1.3rem",
            fontFamily: "Roboto",
            fontWeight: "500",
            padding: " 10px 23px",
            overflow: "hidden",
          }}
        >
          <motion.p
            initial={{ y: 90 }}
            animate={{ y: -15 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 2.3 }}
          >
            Publish Your Own
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        transition={{ ease: "easeOut", duration: 1, delay: 3.1 }}
        style={{
          position: "absolute",
          top: 30,
          right: 465,
          width: "3vw",
          height: "3vw",
          padding: " 10px 23px",
        }}
      >
        <svg
          style={{
            fill: "transparent",
            strokeWidth: "2",
            stroke: "rgb(0,0,0)",
          }}
        >
          <motion.rect
            x="0"
            y="0"
            height="50"
            width="220"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          ></motion.rect>
        </svg>
        <div
          style={{
            position: "absolute",
            top: 10,
            right: -243,
            width: "3vw",
            height: "3vw",
          }}
        >
          <svg
            style={{
              position: "absolute",
              left: "17",
              top: "10",
              marginLeft: "auto",
              marginRight: "auto",
              width: "1.5vw",
              height: "1.5vw",
            }}
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <motion.path
              fill="transparent"
              strokeWidth="1"
              stroke="rgba(0, 0, 0, 0.69)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={transition}
              d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
            />
          </svg>
          <svg
            style={{
              fill: "transparent",
              strokeWidth: "2",
              stroke: "rgb(0,0,0)",
              width: "3vw",
              height: "3vw",
              transform: "scale(-1,1)",
            }}
          >
            <motion.rect
              x="0"
              y="0"
              height="50"
              width="60"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={transition}
            ></motion.rect>
          </svg>
        </div>
      </motion.div>
    </>
  );
}

export default Overlay;
