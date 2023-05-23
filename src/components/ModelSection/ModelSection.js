import styles from './ModelSection.module.css';

const ModelSection = ({ children, customClass }) => {
    return (
        <div
            className={`${styles.model_section_container} ${customClass}`}
            animate={{ x: [50, 0] }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            {children}
        </div >
    )
}

export default ModelSection