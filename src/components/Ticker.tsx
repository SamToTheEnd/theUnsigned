import { ARTISTS } from "../data/artists";

export default function Ticker() {
    const names = ARTISTS.map((a) => a.name).join("  ·  ");

    return (
        <div className="ticker">
      <span className="ticker-inner">
        {names}&nbsp;&nbsp;·&nbsp;&nbsp;{names}&nbsp;&nbsp;·&nbsp;&nbsp;
      </span>
        </div>
    );
}