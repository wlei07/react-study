import styles from './Button.module.css';
/*
<Button
    onClick={() => {}}
    color='primary'// color is optional, default to 'primary'
>
    My Button
</Button>
*/

interface ButtonProps {
    children: string,
    color?: 'primary',
    onClick: () => void
}

function Button({children, onClick, color = 'primary'}: ButtonProps) {
    // btn btn- were introduced for bootstrap, however, now bootstrap disabled it won't have affect
    return (
        <button
            type="button"
            className={[styles.btn, styles['btn-' + color]].join(' ')}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
