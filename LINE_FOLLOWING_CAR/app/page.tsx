export default function Page() {
  return (
    <main style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5"
    }}>
      <h1 style={{ fontSize: "2.5rem", color: "#333" }}>
        Line Following Car Testing Website
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#666", marginTop: "10px" }}>
        Welcome! This is the home page for testing your Line Following Car project.
      </p>
      <button 
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          fontSize: "1rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
        onClick={() => alert("Test started! 🚗")}
      >
        Start Test
      </button>
    </main>
  );
}
