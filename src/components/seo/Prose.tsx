// Plain editorial sections for hand-built pages, in the same visual style as
// <SeoPage />. Inline text supports [anchor](/href) and **bold**.
import { Rich } from "./SeoPage";

export type ProseSection = {
  h2: string;
  paras?: string[];
  list?: string[];
  table?: { head: string[]; rows: string[][]; caption?: string };
};

const S = { fontSize: 15, lineHeight: 1.8, color: "#333", marginBottom: 16 } as const;

export default function Prose({ sections }: { sections: ProseSection[] }) {
  return (
    <section style={{ padding: "56px 16px 8px" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        {sections.map((s) => (
          <div key={s.h2} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(1.3rem,2.6vw,1.7rem)", fontWeight: 900, color: "#1a1a4e", marginBottom: 16 }}>{s.h2}</h2>
            {s.paras?.map((p, i) => <p key={i} style={S}><Rich text={p} /></p>)}
            {s.list && (
              <ul style={{ ...S, paddingLeft: 22, listStyle: "disc" }}>
                {s.list.map((it, i) => <li key={i} style={{ marginBottom: 6 }}><Rich text={it} /></li>)}
              </ul>
            )}
            {s.table && (
              <div style={{ overflowX: "auto", marginBottom: 16, borderRadius: 14, border: "1px solid rgba(123,135,232,0.2)" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 480 }}>
                  {s.table.caption && <caption style={{ captionSide: "bottom", fontSize: 12, color: "#666", padding: 8 }}>{s.table.caption}</caption>}
                  <thead>
                    <tr style={{ background: "#5a5fcf" }}>
                      {s.table.head.map((h) => <th key={h} style={{ color: "#fff", textAlign: "left", padding: "12px 14px", fontWeight: 700 }}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((r, i) => (
                      <tr key={i} style={{ background: i % 2 ? "#fdf5ff" : "#fff" }}>
                        {r.map((c, j) => <td key={j} style={{ padding: "11px 14px", color: j === 0 ? "#1a1a4e" : "#444", fontWeight: j === 0 ? 700 : 400, borderTop: "1px solid rgba(123,135,232,0.12)" }}><Rich text={c} /></td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
