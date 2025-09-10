import React from "react";
import ReactMarkdown from "react-markdown";

export default function Recipe({ recipe }) {
    return (
        <section className="recipe-container" aria-live="polite">
            <h2 className="recipe-title">Chef Claude Recommends:</h2>
            <ReactMarkdown
                components={{
                    h2: ({ node, ...props }) => <h2 className="section-title" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="sub-section-title" {...props} />,
                    ul: ({ node, ...props }) => <ul className="ingredient-list" {...props} />,
                    li: ({ node, ...props }) => <li className="ingredient-item" {...props} />,
                    ol: ({ node, ...props }) => <ol className="instruction-list" {...props} />,
                    p: ({ node, ...props }) => <p className="instruction-step" {...props} />,
                }}
            >
                {recipe}
            </ReactMarkdown>
        </section>
    );
}
