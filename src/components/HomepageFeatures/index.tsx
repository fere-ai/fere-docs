import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Product Docs',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Explore how to use FereAI to it's max potential. Do Your Crypto Research
        in a matter of minutes. Analyze Market Chatter. Or Invest your crypto
        via Investment Agent. These docs will help you get started.
      </>
    ),
    link: '/docs/intro',
  },
  {
    title: 'Developer',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Super charge your app with our APIs. Use our powerful APIs to build
        your own crypto research assistant. Or customize it to work with your
        own trading bot or platform. The possibilities are endless.
      </>
    ),
    link: '/docs/api/api-introduction',
  },
  {
    title: 'Support',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Get Support on product usage or API integration. We are here to help you.
      </>
    ),
    link: 'https://discord.com/invite/3fsm5XJNW8',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  const isExternalLink = link.startsWith('http') || link.startsWith('https');

  return (
    <div className={clsx(styles.herocard, 'col col--4')}>
      <a
        href={link}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
      >
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.featureRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}