import styles from './TimelineCard.css'

export default function TimelineBlock({
  description,
  skills,
  time,
  position,
  company,
  image,
} ) {

  return (
    <div className="block">
      <div className="timeline__img">
        <img
          src={image}
          height="50"
          width="50"
          alt="company logo"
        />
      </div>

      <div className= "block__content">
        <h2>{ company }</h2>
        <div className="content__info">
          <span className="title">
            { position }
          </span>
          <span className="date">
            { time }
          </span>
        </div>
        <p>{ description }</p>
        <ul className="content__skills">
          {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </div>
  )
}