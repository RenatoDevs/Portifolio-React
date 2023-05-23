import Bubble from '../../components/Bubble/Bubble'
import styles from './MenuItem.module.css';
import { Link } from 'react-router-dom';

const MenuItem = ({ menuItem }) => {
    return (
        <div className={styles.grid_item}>
            
            {
                menuItem.map((item, i) => {
                    return (
                        <div className={styles.item} key={i} >
                            <span className={styles.stamp}/>
                            <img src={`../public-images/capas/${item.img}.png`} alt=""></img>
                            <div className={styles.item_description}>
                                <div className={styles.title_container}>
                                    <h2 className={styles.project_title}>{item.title}</h2>
                                </div>
                                <div className={styles.bubble_container}>
                                    {item.tec.map((tec, i) => (
                                        <Bubble customClass='small' key={i}>
                                            <img src={`../public-images/techs/${tec}.png`} alt=""></img>
                                        </Bubble>
                                    ))}
                                </div>
                                <Link className={styles.button} to={`project/${i}`}>Detalhes</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default MenuItem