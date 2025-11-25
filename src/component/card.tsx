// app/components/Card.tsx
export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "1rem",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        marginBottom: "1rem"
      }}
    >
      {children}
    </div>
  );
}
