import React, { useState } from "react";
import styles from "./styles/MissionGallery.module.css"; // CSSモジュールのインポート

const ItemsGallery = () => {
  const [activeTab, setActiveTab] = useState("Supply Items");
  const [modalImage, setModalImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const supplyItems = [
    // 画像のURL配列
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmVuiSCLopvyrGuA7NLkrMUhffmPiTuDL2HLhbPWeJzK9b/VLAskin.png",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmVuiSCLopvyrGuA7NLkrMUhffmPiTuDL2HLhbPWeJzK9b/Susteo.png",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmVuiSCLopvyrGuA7NLkrMUhffmPiTuDL2HLhbPWeJzK9b/HVO.png",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmVuiSCLopvyrGuA7NLkrMUhffmPiTuDL2HLhbPWeJzK9b/SKYACTIV%20KEY.png",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmVuiSCLopvyrGuA7NLkrMUhffmPiTuDL2HLhbPWeJzK9b/KODO_CRAFTSMAN.png",
  ];

  const royalTickets = [
    // 画像のURL配列
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmapDE2ikysaJbwcVPMH4QChmcYyNLp5AzUEdZSUJvra56/GT.png",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmapDE2ikysaJbwcVPMH4QChmcYyNLp5AzUEdZSUJvra56/event.png",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmVuiSCLopvyrGuA7NLkrMUhffmPiTuDL2HLhbPWeJzK9b/VLAskincar.png",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmapDE2ikysaJbwcVPMH4QChmcYyNLp5AzUEdZSUJvra56/fes.png",
    "https://purple-inland-toucan-496.mypinata.cloud/ipfs/QmapDE2ikysaJbwcVPMH4QChmcYyNLp5AzUEdZSUJvra56/kids.png",
  ];

  const items = activeTab === "Supply Items" ? supplyItems : royalTickets;

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.galleryContainer}>
      <h1 className="gradient-text-1">所有しているNFT Items</h1>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "Supply Items" ? styles.tabActive : ""
          }`}
          onClick={() => setActiveTab("Supply Items")}
        >
          Supply Items
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "Royal Tickets" ? styles.tabActive : ""
          }`}
          onClick={() => setActiveTab("Royal Tickets")}
        >
          Royal Tickets
        </button>
      </div>
      <p className={styles.itemCount}>
        You have <span>{items.length}</span> Items
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

export default ItemsGallery;
