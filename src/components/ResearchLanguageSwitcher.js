import React, {useMemo, useState} from 'react';
import ResearchHtmlViewer from '@site/src/components/ResearchHtmlViewer';

const LANGUAGES = [
  {
    key: 'en',
    label: 'English',
    direction: 'ltr',
    src: '/research/supplements-vs-steroids.html',
    title: 'Supplements vs Steroids research',
    description: 'Evidence-based comparison of legal supplements and anabolic steroids.',
  },
  {
    key: 'fa',
    label: 'فارسی',
    direction: 'rtl',
    src: '/research/mokammel-shabe-esteroeid-fa.html',
    title: 'Persian supplement research',
    description: 'نسخهٔ فارسی همین پژوهش با همان ساختار و محتوای اصلی.',
  },
];

export default function ResearchLanguageSwitcher() {
  const [activeKey, setActiveKey] = useState('en');
  const activeLanguage = useMemo(
    () => LANGUAGES.find((language) => language.key === activeKey) ?? LANGUAGES[0],
    [activeKey],
  );

  return (
    <section className="research-switcher">
      <div className="research-switcher__bar">
        <div>
          <div className="research-switcher__eyebrow">Language</div>
          <h2 className="research-switcher__title">Switch between English and Persian</h2>
          <p className="research-switcher__description">{activeLanguage.description}</p>
        </div>

        <div className="research-switcher__buttons" role="tablist" aria-label="Research language">
          {LANGUAGES.map((language) => {
            const isActive = language.key === activeKey;

            return (
              <button
                key={language.key}
                type="button"
                className={`research-switcher__button${isActive ? ' research-switcher__button--active' : ''}`}
                aria-pressed={isActive}
                onClick={() => setActiveKey(language.key)}
              >
                {language.label}
              </button>
            );
          })}
        </div>
      </div>

      <div dir={activeLanguage.direction}>
        <ResearchHtmlViewer src={activeLanguage.src} title={activeLanguage.title} />
      </div>
    </section>
  );
}
