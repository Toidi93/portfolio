import React from 'react'
import TimelineCard from './TimelineCard'
import './Timeline.css'
import FranckLogo from '../assets/franck.png'

export default function Timeline() {
  return (
    <section className= "timeline">
      <TimelineCard
        company="Franck Miljø- & Geoteknik"
        description="Miljørådgiver"
        skills={['Qgis', 'Geogis', 'Jordhåndteringsopgaver', 'myndighedskontakt', 'rapportering', 'prøvetagning','OSV']}
        time="Feb 2020 - now"
        position="Miljørådgiver"
        image={FranckLogo}
      />

    </section>
  )
}