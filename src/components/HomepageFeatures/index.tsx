import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Simple & Effective',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        FereAI is built to be simple to use and effective in its purpose. It
        provides a simple interface to interact with the AI. It's ability to
        process tons of pricing data, historical trends, social media and news
        data, and much more, makes it a powerful tool for any investor.
      </>
    ),
  },
  {
    title: 'A.I. (Accurate Information)',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        FereAI is connected to internet and various other data providers, which
        allows it to provide accurate information and predictions. It's
        algorithms are constantly learning and improving, which makes it
        extremely accurate.
      </>
    ),
  },
  {
    title: 'Features you\'ll love',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Pin your chats to build your own powerful dashboard. Or share them with
        your friends to get input on your decisions. FereAI is a powerful tool
        that you'll love to use.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
