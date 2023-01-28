import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <div className="App">
      <TwitterFollowCard userName="midudev">Miguel Angel</TwitterFollowCard>
      <TwitterFollowCard userName="mouredev">Midu Dev</TwitterFollowCard>
    </div>
  );
}
