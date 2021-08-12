import React from "react";
import css from "./homeinfo.module.css";

export default function HomeInfo() {
  return (
    <div className={css.homeinfo}>
      <p className={css.title}>General Information</p>
      <div className={css.block}>
        <div className={css.questions__block}>
          <div className={css.questions}>
            <p>Advertise No</p>
            <p>Published Date</p>
            <p>Advertise Status</p>
            <p>Housing Shape</p>
            <p>Room + Living Number</p>
            <p>Gross / Net M² </p>
            <p>Warming Type</p>
            <p>Building Age</p>
          </div>
          <div className={css.answer}>
            <p>0-1234</p>
            <p>26 November 2020</p>
            <p>Sale</p>
            <p>Apartment</p>
            <p>3 + 1</p>
            <p>150 M² / 135 M² </p>
            <p>Natural Gas</p>
            <p>5</p>
          </div>
        </div>
        <div className={css.questions__block}>
          <div className={css.questions}>
            <p>Advertise No</p>
            <p>Published Date</p>
            <p>Advertise Status</p>
            <p>Housing Shape</p>
            <p>Room + Living Number</p>
            <p>Gross / Net M² </p>
            <p>Warming Type</p>
            <p>Building Age</p>
          </div>
          <div className={css.answer}>
            <p>0-1234</p>
            <p>26 November 2020</p>
            <p>Sale</p>
            <p>Apartment</p>
            <p>3 + 1</p>
            <p>150 M² / 135 M² </p>
            <p>Natural Gas</p>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
