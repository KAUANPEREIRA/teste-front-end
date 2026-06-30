const announcements = [
  { id: 1, text: "Compre 100% segura", highlight: "100% segura" },
  { id: 2, text: "Frete grátis acima de R$ 300", highlight: "Frete grátis" },
  { id: 3, text: "Parcele sua compra", highlight: "Parcele" },
];

export function TopBar() {
  return (
    <div className="text-[#9F9F9F] text-xs border-b border-[#F0F0F0]">
      <ul className="flex items-center justify-center gap-8 py-1.5">
        {announcements.map((item) => (
          <li key={item.id}>
            {item.highlight ? (
              <>
                {item.text.split(item.highlight)[0]}
                <span className="font-semibold text-[#3019B2]">
                  {item.highlight}
                </span>
                {item.text.split(item.highlight)[1]}
              </>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
