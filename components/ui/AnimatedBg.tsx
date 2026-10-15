export function AnimatedBg() {
  return (
    <>
      <div className="bg-ribbon bg-ribbon-1" />
      <div className="bg-ribbon bg-ribbon-2" />
      <div className="bg-ribbon bg-ribbon-3" />
      <span className="star star-sm" style={{ top: "15%", left: "10%" }}>✦</span>
      <span className="star star-md" style={{ top: "30%", right: "15%" }}>✧</span>
      <span className="star star-lg" style={{ bottom: "20%", left: "20%" }}>✦</span>
      <span className="star star-sm" style={{ top: "60%", right: "25%" }}>✧</span>
      <span className="star star-md" style={{ bottom: "10%", right: "10%" }}>✦</span>
      <span className="star-twinkle" style={{ top: "25%", left: "45%" }}>✦</span>
      <span className="star-twinkle" style={{ top: "70%", left: "60%", animationDelay: "1s" }}>✧</span>
      <span className="star-twinkle" style={{ top: "45%", right: "40%", animationDelay: "2s" }}>✦</span>
    </>
  );
}