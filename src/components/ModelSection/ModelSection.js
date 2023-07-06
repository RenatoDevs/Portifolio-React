import styles from './ModelSection.module.css';

const ModelSection = ({ children, customClass }) => {
    return (
        <div
            className={`${styles.model_section_container} ${customClass}`}
        >
            {children}
        </div >
    )
}

export default ModelSection