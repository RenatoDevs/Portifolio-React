import { motion } from 'framer-motion';
import styles from './ModelSection.module.css';

const ModelSection = (props) => {
    return (
        <div
            className={`${styles.model_section_container} ${styles[props.customClass]}`}
            animate={{ x: [50, 0] }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            {props.children}
        </div>
    )
}

export default ModelSection