import React, {useEffect, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

async function loadScript(src) {
  if (document.querySelector(`script[data-research-script="${src}"]`)) {
    return;
  }

  await new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = src;
    script.dataset.researchScript = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
}

function scopeSelector(selector, scopeClass) {
  const trimmed = selector.trim();

  if (!trimmed) {
    return trimmed;
  }

  if (trimmed.startsWith('@')) {
    return trimmed;
  }

  if (trimmed.startsWith(':root') || trimmed.startsWith('html') || trimmed.startsWith('body')) {
    return scopeClass;
  }

  if (trimmed.startsWith('*')) {
    return `${scopeClass} *${trimmed.slice(1)}`;
  }

  return `${scopeClass} ${trimmed}`;
}

function scopeCss(css, scopeClass) {
  return css.replace(/([^{}]+)\{([^{}]*)\}/g, (match, selectors, body) => {
    const trimmedSelectors = selectors.trim();

    if (trimmedSelectors.startsWith('@')) {
      return match;
    }

    const scopedSelectors = selectors
      .split(',')
      .map((selector) => scopeSelector(selector, scopeClass))
      .join(', ');

    return `${scopedSelectors} {${body}}`;
  });
}

export default function ResearchHtmlViewer({src, title}) {
  const resolvedSrc = useBaseUrl(src);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');
  const [styles, setStyles] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setContent('');
      setStyles('');

      const response = await fetch(resolvedSrc);
      const html = await response.text();
      if (cancelled) {
        return;
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const styleText = Array.from(doc.querySelectorAll('style'))
        .map((node) => node.textContent || '')
        .join('\n');

      setStyles(scopeCss(styleText, '.research-html-scope'));
      setContent(doc.body.innerHTML);
      setLoading(false);

      const scripts = Array.from(doc.querySelectorAll('script'));
      for (const script of scripts) {
        const srcValue = script.getAttribute('src');
        if (srcValue) {
          await loadScript(srcValue);
          continue;
        }

        const inlineScript = document.createElement('script');
        inlineScript.textContent = script.textContent || '';
        document.body.appendChild(inlineScript);
        inlineScript.remove();
      }
    }

    load().catch((error) => {
      if (!cancelled) {
        setLoading(false);
        setContent(`<p>Failed to load research content: ${error.message}</p>`);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [resolvedSrc]);

  return (
    <section className="research-html-viewer" aria-label={title}>
      {styles ? <style>{styles}</style> : null}
      <div className="research-html-viewer__frame research-html-scope">
        {loading ? (
          <div className="research-html-viewer__loading">Loading research…</div>
        ) : (
          <div dangerouslySetInnerHTML={{__html: content}} />
        )}
      </div>
    </section>
  );
}
