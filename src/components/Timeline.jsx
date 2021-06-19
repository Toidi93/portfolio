import React from 'react'
import TimelineCard from './TimelineCard'
import styles from './Timeline.css'

export default function Timeline() {
  return (
    <section className= "timeline">
      <TimelineCard
        company="Novicell"
        description="Web development working with Vue, Angular, and React."
        skills={['Vue', 'Angular', 'React', 'JavaScript']}
        time="Apr 2021 - now"
        position="Web Developer"
        image="/work/novicell-icon.jpeg"
      />

      <TimelineCard
        company="Raven Biosciences"
        description="Web app for testing PCR pipelines."
        skills={['Vue', 'Python', 'WebAssembly', 'JavaScript']}
        time="Feb 2021 - Mar 2021 ~ 2 months"
        position="Web Developer"
        image="/work/raven-icon.png"
      />
    </section>
  )
}