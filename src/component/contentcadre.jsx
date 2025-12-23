import React from "react";
import "./contentcadre-module.css";
import Adoublebutton from "./adoublebutton";

export default function Contentcadre(params) {
  return (
    <div className="cadrepresent">
      <img className="place" src={params.place01} alt="" />
      <div className="textlistweek">
        <div className="textcadreweek01">{params.inf01}</div>
        <div className="textcadreweek02">{params.inf02}</div>
        <div className="textcadreweek03">{params.inf03}</div>
        <Adoublebutton buttext01="Read" buttext02="Details" />
      </div>
    </div>
  );
}
