// Renders text with **double-asterisk** words wrapped in a highlighter mark.
export const Emphasis = ({ text }: { text: string }) => (
    <>
        {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
            i % 2 === 1 ? <span key={i} className="marker">{part}</span> : part
        )}
    </>
)
