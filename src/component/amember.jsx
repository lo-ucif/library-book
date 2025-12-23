import Aetwal from "./Aetwal";


export default function Amember(params) {
  return (
    <div className="membercadre">
      <div className="etoil">
        <Aetwal />
        <Aetwal />
        <Aetwal />
        <Aetwal />
        <Aetwal />
      </div>
      <div className="metext">{params.metext}</div>
      <div className="slimani">
        <div className="profil"></div>
        <div className="infmemeber">
          <div className="mename">{params.mename}</div>
          <div className="memember">{params.memember}</div>
        </div>
      </div>
    </div>
  );
}
