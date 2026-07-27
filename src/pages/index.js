import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Fitness Research AI"
      description="Evidence-based fitness research powered by LLMs">
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Fitness Research AI</h1>
            <p>Evidence-based fitness research powered by multiple LLMs</p>
            <div className={styles.buttons}>
              <Link className={styles.buttonPrimary} to="/docs/supplements-vs-steroids">
                Start Reading
              </Link>
              <Link className={styles.buttonSecondary} to="/blog">
                Updates
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>🧪 Evidence-Based</h3>
              <p>Research synthesized from multiple LLMs and cross-referenced with peer-reviewed studies</p>
            </div>
            <div className={styles.featureCard}>
              <h3>📚 Well-Documented</h3>
              <p>Detailed analysis with sources, limitations, and actionable conclusions</p>
            </div>
            <div className={styles.featureCard}>
              <h3>🎥 Media-Rich</h3>
              <p>Includes videos, charts, and interactive content to explain complex topics</p>
            </div>
            <div className={styles.featureCard}>
              <h3>🔄 Living Document</h3>
              <p>Updated regularly with new research and findings</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Current Research</h2>
          <p>Explore our latest findings on fitness and supplementation</p>
          <Link to="/docs/supplements-vs-steroids" className={styles.ctaButton}>
            Read Now →
          </Link>
        </section>
      </main>
    </Layout>
  );
}
