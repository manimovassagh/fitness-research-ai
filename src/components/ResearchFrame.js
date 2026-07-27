import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ResearchFrame({src, title}) {
  const frameSrc = useBaseUrl(src);

  return (
    <div className="research-frame-shell">
      <iframe className="research-frame" src={frameSrc} title={title} />
    </div>
  );
}
