import type { ReactNode } from 'react'
import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

import logo from '@site/static/img/logo.svg'
import azure from '@site/static/img/azure.svg'
import opensource from '@site/static/img/oss.svg'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: ReactNode
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Powered by Azure',
    Svg: azure,
    description: (
      <>
        We run all our services on Microsoft Azure, thanks to the Microsoft
        Sponsorship for Nonprofits.{' '}
        <a href="https://nonprofit.microsoft.com/it-it" target="_blank">
          Learn more
        </a>
        .
      </>
    ),
  },
  {
    title: '100% Open Source',
    Svg: opensource,
    description: (
      <>
        We are very serious about Open Source. All our projects are fully open
        source and available on GitHub. Freedom of information is a core value
        for us, we even wrote it in our{' '}
        <a
          href="https://raw.githubusercontent.com/PoliNetworkOrg/Statuto/document/Document.pdf"
          target="_blank"
        >
          Statute
        </a>
        , and this will never change.
      </>
    ),
  },
  {
    title: 'By Students, For Students',
    Svg: logo,
    description: (
      <>
        PoliNetwork is a student association, and we are all students. Our main
        goal is to improve campus life and empower students communications. If
        you want to contribute to our vision, join us on{' '}
        <a href="https://t.me/+C2Qb3SVo5qQwMzRk" target="_blank">
          Telegram
        </a>
        !
      </>
    ),
  },
]

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
  )
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
  )
}
