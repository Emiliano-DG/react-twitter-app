import { useState } from "react";

export function TwitterFollowCard({ children, userName }) {
  const [isFollowing, seIsFollowing] = useState(false); //valor por defecto, estado inicial
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClasName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    seIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClasName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCardStopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
