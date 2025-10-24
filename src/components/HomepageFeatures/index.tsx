import Heading from '@theme/Heading';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

import WyattsNotesLogoLeft from '@site/static/img/WyattsNotes/WyattsNotesLogoLeft.svg';
import WyattsNotesLogoMiddle from '@site/static/img/WyattsNotes/WyattsNotesLogoMiddle.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Free and Open Source',
    Svg: WyattsNotesLogoLeft,
    description: (
      <>
        This site will never charge any fees for information and all information is licensed under{' '}
        <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank">
          AGPLv3
        </a>
        .
      </>
    ),
  },
  {
    title: 'No Overhead',
    Svg: WyattsNotesLogoMiddle,
    description: (
      <>
        Notes are written following the syllabus with derivations when needed. No interesting facts,
        ads, or any useless content are included.
      </>
    ),
  },
  {
    title: 'Feel Free to Correct Me',
    Svg: WyattsNotesLogoLeft,
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

export default function HomepageFeatures(): React.ReactNode {
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
