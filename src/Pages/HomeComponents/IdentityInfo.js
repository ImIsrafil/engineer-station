import React from "react";

const IdentityInfo = ({ identityInfo }) => {
    const {title, icon, desc, _id} = identityInfo
  return (
    <div class={`card lg:card-side bg-base-100 shadow-2xl ${_id === 2? "bg-accent": "bg-gradient-to-r from-primary to-secondary"}`}>
      <figure className="p-4">
        <img className="h-14" src={icon} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 class={`card-title ${_id === 2? "text-secondary": "text-accent"}`}>{title}</h2>
        <p className={`${_id === 2? "text-secondary": "text-accent"}`}>{desc}</p>
      </div>
    </div>
  );
};

export default IdentityInfo;
