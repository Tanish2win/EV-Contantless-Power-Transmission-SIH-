export default function ControlPanel() {
  return (
    <div
      style={{
        border: "2px solid #ff4081",
        padding: "20px",
        borderRadius: "8px",
        marginTop: "20px",
        width: "300px",
        textAlign: "center"
      }}
    >
      <h2>Control Panel</h2>
      <button
        onClick={() => alert("Control Activated!")}
        style={{
          padding: "10px 15px",
          fontSize: "1rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Activate
      </button>
    </div>
  );
}
