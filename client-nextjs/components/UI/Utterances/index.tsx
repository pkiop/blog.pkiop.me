import React, { createRef, useLayoutEffect } from 'react';

const src = 'https://utteranc.es/client.js';
const repo = 'pkiop/blog.pkiop.me';
const theme = 'photon-dark';
function Utterances() {
  const containerRef = createRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
      src,
      repo,
      theme,
      'issue-term': 'pathname',
      label: '✨💬 comments ✨',
      crossOrigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current!.appendChild(utterances);
  }, []);

  return <div ref={containerRef} />;
}

Utterances.displayName = 'Utterances';

export default Utterances;
