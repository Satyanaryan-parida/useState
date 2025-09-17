import { useState, useEffect } from "react";

const Popup = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <p>
          Open your console, then click on both buttons named DeepBlue to see
          what happens.
        </p>
        <button onClick={() => setVisible(false)}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
