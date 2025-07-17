import { Wrench } from "lucide-react";

export const IconBox = ({ icon: Icon }) => {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#2563eb",
        borderRadius: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon size={24} color="#fff" />
    </div>
  );
};
