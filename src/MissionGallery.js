import React, { useState } from "react";
import styles from "./styles/MissionGallery.module.css"; // CSSモジュールのインポート

const MissionGallery = () => {
  const [activeTab, setActiveTab] = useState("Real World Mission");
  const [modalImage, setModalImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const realItems = [
    // 画像のURL配列
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmTfqGsFLKD9nj3rc1kXxMcPH4nTGUdhC4JKQvmuYQU8Mv?_gl=1*1o9m3r8*_ga*ODQyMDMwMTU3LjE3MDA0MTM2NTY.*_ga_5RMPXG14TE*MTcwMDgxMzQ4MS4xMS4xLjE3MDA4MTQ1MjcuNDUuMC4w",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmSQpAemfTmLwji7kAHErofg5tdeiaffNWpcCq6jm7zDeN?_gl=1*1ohmlcq*_ga*ODQyMDMwMTU3LjE3MDA0MTM2NTY.*_ga_5RMPXG14TE*MTcwMDgxMzQ4MS4xMS4xLjE3MDA4MTQ0NzYuMjAuMC4w",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmTPPwUgjicfvinL7eU6hxmSBPcpKSVkr6QX96Evumret2?filename=asimg_mazda_spirit_racing_mazda3_bio_concept_number_55_l_c463f58ed0e5417-1280x853.jpg",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmSi2z6iHqPFE3ukXWmZEJCzL9eubuWvpAKLVgmXCAsXGp?_gl=1*wn7eel*_ga*ODQyMDMwMTU3LjE3MDA0MTM2NTY.*_ga_5RMPXG14TE*MTcwMDgxMzQ4MS4xMS4xLjE3MDA4MTQ0MTMuNy4wLjA.",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmeGXcGdwG3cDSyy9WFLBTyGEeCVpWbMwRhF4g2WEquvb9?_gl=1*aq2ami*_ga*ODQyMDMwMTU3LjE3MDA0MTM2NTY.*_ga_5RMPXG14TE*MTcwMDgyODc2Ni4xMi4xLjE3MDA4MzExMzcuNjAuMC4w",
  ];

  const virtualItems = [
    // 画像のURL配列
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmRD6Y3aetm4XxKg9amrJmehr5RGPADvaQoE1K3zw3sjGW?_gl=1*11g2j2p*_ga*ODQyMDMwMTU3LjE3MDA0MTM2NTY.*_ga_5RMPXG14TE*MTcwMDgyODc2Ni4xMi4xLjE3MDA4MzEzODkuMTYuMC4w",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmNjpdhJr56cf2tegUF5nmqK4sNswPrr3bE44UcoBiYVkV?_gl=1*11qwprs*_ga*ODQyMDMwMTU3LjE3MDA0MTM2NTY.*_ga_5RMPXG14TE*MTcwMDgyODc2Ni4xMi4xLjE3MDA4MjkyODcuNjAuMC4w",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmfJ4FFDbvAwU9chYLpmudYwkZu3dKeHsCp13AU3k7QUUm?_gl=1*1ale37u*_ga*ODQyMDMwMTU3LjE3MDA0MTM2NTY.*_ga_5RMPXG14TE*MTcwMDgyODc2Ni4xMi4xLjE3MDA4MzE1MTEuNjAuMC4w",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmRhCdbbsazjJZfSh8TnJUH8DzQWGqnkembTV66hfuSa2x?filename=%25E3%2582%25B9%25E3%2582%25AF%25E3%2583%25AA%25E3%2583%25BC%25E3%2583%25B3%25E3%2582%25B7%25E3%2583%25A3%25E3%2583%2583%25E3%2583%2588%25202023-11-24%2520170948.jpg",
  ];

  const items = activeTab === "Real World Mission" ? realItems : virtualItems;

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.galleryContainer}>
      <h1 className="gradient-text-2">リアル＆メタバースのMission情報</h1>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "Real World Mission" ? styles.tabActive : ""
          }`}
          onClick={() => setActiveTab("Real World Mission")}
        >
          Real World Mission
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "Metaverse Mission" ? styles.tabActive : ""
          }`}
          onClick={() => setActiveTab("Metaverse Mission")}
        >
          Metaverse Mission
        </button>
      </div>
      <p className={styles.itemCount}>
        You can challenge <span>{items.length}</span> missions
      </p>
      <div className={styles.items}>
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            onClick={() => openModal(item)}
          >
            <img src={item} alt={`Item ${index + 1}`} />
          </div>
        ))}
      </div>
      {showModal && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <img src={modalImage} alt="Modal" />
            <p>details</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionGallery;
