import css from "./Statistics.module.css";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

export const Statistics = ({stats, title}) => (
    <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css["stat-list"]}>
      {stats.map(stat => (
        <li className={css.item} key={stat.id} style={{backgroundColor: getRandomHexColor()}} >
             <span className={css.label}>{stat.label}</span>
             <span className={css.percentage}>{stat.percentage}</span>
        </li>
      ))}
    </ul>
    </section>
)