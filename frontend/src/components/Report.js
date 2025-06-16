import { useLocation, useNavigate } from "react-router-dom";
import "../Style/reportStyle.css";

export default function ReportPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, age, result } = location.state || {};

  if (!result) {
    return (
      <div className="report-container classic-bg">
        <div className="report-card glass-effect slide-in">
          <h2 className="gradient-text">📄 No Report Found</h2>
          <button onClick={() => navigate("/")} className="btn golden-btn">
            ⬅ Go Back
          </button>
        </div>
      </div>
    );
  }

  // Download Report as .txt file
  const handleDownloadReport = () => {
    const data = `
      Bone Fracture Detection Report

      👤 Name: ${name}
      🎂 Age: ${age}
      🩻 Fracture Detected: ${result.fracture_detected ? "No" : "Yes"}
    `;
    const blob = new Blob([data], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}_report.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Download Heatmap Image
  const handleDownloadHeatmap = () => {
    const link = document.createElement("a");
    link.href = `data:image/png;base64,${result.heatmap}`;
    link.download = `${name}_heatmap.png`;
    link.click();
  };

  return (
    <div className="report-container classic-bg">
      <div className="report-card glass-effect slide-in">
        <h2 className="report-title gradient-text">🦴 Bone Fracture Detection Report</h2>

        <div className="report-details fade-in">
          <p><strong>👤 Name:</strong> {name}</p>
          <p><strong>🎂 Age:</strong> {age}</p>
          <p>
            <strong>🩻 Fracture Detected:</strong>{" "}
            <span className={result.fracture_detected ? "no-fracture" : "fracture"}>
              {result.fracture_detected ? "No" : "Yes"}
            </span>
          </p>
        </div>

        {result.fracture && (
          <div className="heatmap-section fade-in">
            <h3 className="gradient-text">🔥 Fracture Heatmap</h3>
            <img
              src={`data:image/png;base64,${result.heatmap}`}
              alt="Fracture Heatmap"
              className="heatmap"
            />
            <button onClick={handleDownloadHeatmap} className="btn neon-btn mt-2">
              📥 Download Heatmap
            </button>
          </div>
        )}

        <div className="button-group">
          <button onClick={handleDownloadReport} className="btn golden-btn">
            📄 Download Report
          </button>
          <button onClick={() => navigate("/")} className="btn neon-btn">
            🔁 New Report
          </button>
        </div>
      </div>
    </div>
  );
}
