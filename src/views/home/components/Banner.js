import React from "react";
import mainBanner from "./../../../assets/main-banner.png";
import nodesCenter from "./../../../assets/nodes-center.svg";
import imgRight from "./../../../assets/person-1.png";
import nodesRight from "./../../../assets/nodes-right.svg";
import imgLeft from "./../../../assets/person-3.png";
import nodesLeft from "./../../../assets/nodes-left.svg";

import ApplyButton from "../../../shared-components/ApplyButton";
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();

  window.onscroll = () => {
    const bannerImg = document.getElementById("banner-img");
    const nodesCenter = document.getElementById("nodes-center");
    const imgRight = document.getElementById("img-right");
    const nodesRight = document.getElementById("nodes-right");
    const imgLeft = document.getElementById("img-left");
    const nodesLeft = document.getElementById("nodes-left");
    const navBtn = document.getElementById("nav-btn");

    if (document.body.scrollTop < 1 || document.documentElement.scrollTop < 1) {
      bannerImg.style.width = "56%";
      nodesCenter.style.opacity = 0;
      imgRight.style.opacity = 0;
      nodesRight.style.opacity = 0;
      imgLeft.style.opacity = 0;
      nodesLeft.style.opacity = 0;
      navBtn.style.display = "none";
      navBtn.style.opacity = 0;
    }

    if (document.documentElement.scrollTop > 5) {
      if (document.documentElement.scrollTop < 600) {
        bannerImg.style.width = `${
          56 + document.documentElement.scrollTop / 25
        }%`;

        nodesCenter.style.opacity = `${
          0 + document.documentElement.scrollTop / 100
        }`;
        nodesCenter.style.width = `${
          57 + document.documentElement.scrollTop / 18
        }%`;
        nodesCenter.style.top = `${
          15 + document.documentElement.scrollTop / 11
        }vh`;

        imgRight.style.opacity = `${
          0 + document.documentElement.scrollTop / 100
        }`;
        imgRight.style.width = `${
          1 + document.documentElement.scrollTop / 100
        }%`;
        imgRight.style.right = `${
          15 - document.documentElement.scrollTop / 50
        }vw`;
        imgRight.style.top = `${
          45 + document.documentElement.scrollTop / 17
        }vh`;

        nodesRight.style.opacity =
          0 + document.documentElement.scrollTop / 1200;
        nodesRight.style.width = `${
          10 + document.documentElement.scrollTop / 12
        }%`;
        nodesRight.style.right = `${
          15 - document.documentElement.scrollTop / 30
        }vw`;
        nodesRight.style.top = `${
          25 + document.documentElement.scrollTop / 15
        }vh`;

        imgLeft.style.width = `${
          1 + document.documentElement.scrollTop / 100
        }%`;
        imgLeft.style.left = `${
          15 - document.documentElement.scrollTop / 60
        }vw`;
        imgLeft.style.top = `${45 + document.documentElement.scrollTop / 9}vh`;
        imgLeft.style.opacity = 0 + document.documentElement.scrollTop / 11;

        nodesLeft.style.opacity = 0 + document.documentElement.scrollTop / 1200;
        nodesLeft.style.width = `${
          10 + document.documentElement.scrollTop / 20
        }%`;
        nodesLeft.style.left = `${
          15 - document.documentElement.scrollTop / 40
        }vw`;
        nodesLeft.style.top = `${
          25 + document.documentElement.scrollTop / 12
        }vh`;
        navBtn.style.marginLeft = `30vw`;
      }
      navBtn.style.display = "block";
      navBtn.style.opacity = 0 + document.documentElement.scrollTop / 500;
      navBtn.style.marginLeft =
        navBtn.style.marginLeft.slice(0, 2) < 31
          ? `${-10 + document.documentElement.scrollTop / 14}vw`
          : "40vw";
    }
  };

  return (
    <>
      <div className="banner-main">
        <img src={mainBanner} id="banner-img" alt="" />
        <img src={nodesCenter} id="nodes-center" alt="" />
        <img src={imgRight} id="img-right" alt="" />
        <img src={nodesRight} id="nodes-right" alt="" />
        <img src={imgLeft} id="img-left" alt="" />
        <img src={nodesLeft} id="nodes-left" alt="" />

        <div className="mt-5 mb-5" style={{ zIndex: 8000 }}>
          <h1>{t("headline_text")}</h1>
        </div>
        <ApplyButton />
      </div>
    </>
  );
}

export default Banner;
