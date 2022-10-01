import styles from './Bubble.module.css'

const Bubble = (props) => {


    return (
            <div className={`${styles.drop} ${styles[props.customClass]}`} key={props.i}>
                {props.children}
            </div>
    )
}

export default Bubble;