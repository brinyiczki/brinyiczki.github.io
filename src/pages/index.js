import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className="container">
      <div style={{ marginBottom: '20px' }}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons} style={{ marginBottom: '30px' }}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Check out past work by clicking here📦
          </Link>
        </div>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" href='https://sites.google.com/view/gripify' style={{ backgroundColor: 'rgb(255, 101, 101)' , border: 'none' }}>
            Check status
          </Link>
        </div>
      </div>
    </div>
  </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Lua programmer">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
