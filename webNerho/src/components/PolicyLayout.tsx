import React from 'react';

export const PolicyLayout: React.FC<{ title: string; children: React.ReactNode; updated?: string }> = ({ title, children, updated }) => (
  <article className="policy-page page-container">
    <h1>{title}</h1>
    {updated && <p className="policy-updated">Last updated: <time dateTime="2026-10-12">{updated}</time></p>}
    <div className="policy-content">{children}</div>
  </article>
);
