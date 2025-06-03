import Heading from '@theme/Heading';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Don't Assume User Retardation",
    Svg: require('@site/static/img/WyattsNotes/WyattsNotesLogoLeft.svg').default,
    description: (
      <>
        Explanations will only be written once, definitions for terminology should be linked. No
        babysitting is given to people who can't navigate hyperlinks.
      </>
    ),
  },
  {
    title: 'No Bullshit',
    Svg: require('@site/static/img/WyattsNotes/WyattsNotesLogoMiddle.svg').default,
    description: (
      <>
        Notes are written following the syllabus with derivations when needed. No interesting facts,
        ads, or any useless content are included.
      </>
    ),
  },
  {
    title: 'Feel Free to Correct Me',
    Svg: require('@site/static/img/WyattsNotes/WyattsNotesLogoLeft.svg').default,
    description: (
      <>
        Since these notes are created either during my time at the course or by request, there maybe
        incorrect or inaccurate content, feel free to contribute.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): ReactNode {
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
