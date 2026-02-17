
import React, { useState } from "react";

const TabSwitchComponent = () => {
  const [activeTab, setActiveTab] = useState("singles");

  const styles = {
    mainSection: {
      backgroundColor: "#f3f3f3",
      padding: "40px 60px",
      fontFamily: "Arial, sans-serif",
    },
    tabs: {
      textAlign: "center",
      marginBottom: "40px",
    },
    tabButton: {
      background: "none",
      border: "none",
      fontSize: "26px",
      margin: "0 25px",
      cursor: "pointer",
      paddingBottom: "10px",
      color: "#999",
    },
    activeTab: {
      color: "#ff7a00",
      borderBottom: "3px solid #ff7a00",
    },
    contentWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
       gap: "40px",  
    },
    image: {
      width: "600px",
      borderRadius: "40px",
    },
    textSection: {
      maxWidth: "500px",
    },
    heading: {
      fontSize: "48px",
      color: "#7a7a7a",
      marginBottom: "20px",
      lineHeight: "1.2",
    },
    paragraph: {
      fontSize: "20px",
      color: "#000",
    },
  };

  return (
    <div style={styles.mainSection}>
      
      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === "singles" ? styles.activeTab : {}),
          }}
          onClick={() => setActiveTab("singles")}
        >
          For Singles
        </button>

        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === "families" ? styles.activeTab : {}),
          }}
          onClick={() => setActiveTab("families")}
        >
          For Families
        </button>
      </div>

      {/* Content */}
      <div style={styles.contentWrapper}>
        
        {/* Image */}
        <div>
          <img
            src={
              activeTab === "singles"
                ? "https://storage.googleapis.com/chefkart-strapi-media/Singles_5497580168.webp"
                : "https://storage.googleapis.com/chefkart-strapi-media/Family_f0c0d80b42.webp"
            }
            alt="food"
            style={styles.image}
          />
        </div>

        {/* Text */}
        <div style={styles.textSection}>
          <h1 style={styles.heading}>
            {activeTab === "singles"
              ? "No more missing Ghar Ka Khana!"
              : "Food catered to every family member!"}
          </h1>

          <p style={styles.paragraph}>
            {activeTab === "singles"
              ? "Let our cooks bring memories of home to your plate."
              : "Spend time with your loved ones as our best cooks take care of the cooking."}
          </p>
        </div>

      </div>
    </div>
  );
};

export default TabSwitchComponent;
