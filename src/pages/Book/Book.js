import React from "react";

function Book() {
  return (
    <div>
      <h6
        style={{
          fontFamily: "Bodoni",
          fontWeight: "500",
          fontSize: "1.2vw",
          position: "absolute",
          top: "7vw",
          left: "9vw",
          width: "50vw",
          marginBottom: "3vw",
        }}
      >
        {"<  "} Home / Categories / Young Adult /
        <span
          style={{
            color: "#a8a8a7",
          }}
        >
          Things We Never Got Over
        </span>
      </h6>
      <h1
        style={{
          fontFamily: "Roboto",
          fontWeight: "600",
          fontSize: "4.1vw",
          position: "absolute",
          top: "9vw",
          left: "9vw",
          width: "50vw",
          marginBottom: "3vw",
        }}
      >
        Things We Never Got Over
      </h1>

      <h3
        style={{
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "3.1vw",
          position: "absolute",
          top: "15vw",
          left: "9vw",
          width: "14vw",
          marginBottom: "3vw",
        }}
      >
        $36.00
      </h3>
      <h6
        style={{
          fontFamily: "Roboto",
          fontWeight: "700",
          fontSize: "1vw",
          position: "absolute",
          top: "22.9vw",
          left: "9.2vw",
          width: "14vw",
          marginBottom: "3vw",
        }}
      >
        <span
          style={{
            letterSpacing: ".05vw",

            color: "#a8a8a7",
          }}
        >
          Author
        </span>
        &nbsp; Lucy Score
      </h6>
      <h6
        style={{
          fontFamily: "Roboto",
          fontWeight: "700",
          fontSize: "1vw",
          position: "absolute",
          top: "25.9vw",
          left: "9.2vw",
          width: "14vw",
          marginBottom: "3vw",
        }}
      >
        <span
          style={{
            color: "#a8a8a7",
            letterSpacing: ".05vw",
          }}
        >
          Pages
        </span>
        &nbsp; 172
      </h6>
      <h6
        style={{
          fontFamily: "Roboto",
          fontWeight: "700",
          fontSize: "1vw",
          position: "absolute",
          top: "28.9vw",
          left: "9.2vw",
          width: "14vw",
          marginBottom: "3vw",
        }}
      >
        <span
          style={{
            color: "#a8a8a7",
            letterSpacing: ".05vw",
          }}
        >
          Release Year
        </span>
        &nbsp; 2021
      </h6>

      <h6
        style={{
          fontFamily: "Roboto",
          fontWeight: "700",
          fontSize: "1.2vw",
          position: "absolute",
          top: "19.9vw",
          left: "32vw",
          width: "14vw",
          marginBottom: "3vw",
        }}
      >
        Description
      </h6>
      <p
        style={{
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "1vw",
          letterSpacing: ".05vw",
          lineHeight: "1.6vw",
          position: "absolute",
          top: "24vw",
          left: "32vw",
          width: "25vw",
          marginBottom: "3vw",
          color: "#a8a8a7",
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
        aspernatur sunt quos vero sapiente laborum consequatur soluta fuga eum
        aut! Atque, tenetur? Autem earum quis quae debitis accusamus ipsa
        impedit.
        <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        illum aperiam tempore? Iusto, aperiam tempora. Magnam ipsam repellat
        modi ad?
      </p>
      <img
        style={{
          position: "absolute",
          bottom: "2vw",
          right: "6vw",
        }}
        width="450"
        height="750"
        src={require("./41qiZpKBDvL.jpg")}
        alt="book cover"
      />
      <button
        style={{
          position: "absolute",
          bottom: "2vw",
          right: "34vw",
          width: "15vw",
          height: "5vw",
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "1vw",
          color: "white",
          letterSpacing: ".05vw",
          backgroundColor: "black",
        }}
      >
        Add to Bag
      </button>
      <button
        style={{
          position: "absolute",
          bottom: "2vw",
          right: "50vw",
          width: "15vw",
          height: "5vw",
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "1vw",
          color: "black",
          letterSpacing: ".05vw",
          backgroundColor: "transparent",
          border: "0px white",
        }}
      >
        Add to Wishlist
      </button>
      <button
        style={{
          position: "absolute",
          bottom: "2vw",
          left: "6vw",
          width: "15vw",
          height: "5vw",
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "1vw",
          color: "black",
          letterSpacing: ".05vw",
          backgroundColor: "transparent",
          border: "0px white",
        }}
      >
        Browse Related
      </button>
    </div>
  );
}

export default Book;
