import css from './Statistics.module.css'



export default function Statistics({title,stats}){
    const StatisticsList = stats.map(item=>
        <li className={css.item} key={item.id}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
        </li>);

        return(
            <section className={css.statistics}>
                {title && <h2 className={css.title}>{title}</h2>}
                <ul className={css.statList}>{StatisticsList}</ul>
            </section>
        )

}


