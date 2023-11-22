import css from "./Statistics.module.css";

export const Statistics = ({stats, title}) => (
    <section class={css.statistics}>
    <h2 class={css.title}>Upload stats</h2>

    <ul class={css["stat-list"]}>
        <li class={css.item}>
        <span class={css.label}>.docx</span>
        <span class={css.percentage}>4%</span>
        </li>
        <li class={css.item}>
        <span class={css.label}>.mp3</span>
        <span class={css.percentage}>14%</span>
        </li>
        <li class={css.item}>
        <span class={css.label}>.pdf</span>
        <span class={css.percentage}>41%</span>
        </li>
        <li class={css.item}>
        <span class={css.label}>.mp4</span>
        <span class={css.percentage}>12%</span>
        </li>
    </ul>
    </section>
)