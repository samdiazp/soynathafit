type FaqItem = {
  question: string;
  answer: string;
};

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details className="faq-item" key={item.question} open={index === 0}>
          <summary>{item.question} <span className="icn">+</span></summary>
          <div className="answer">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
