import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;

  }

export function CardProjects({  children, ...rest }: ButtonProps){
    return(
        <button className={styles.button} {...rest}>
        {children}
</button>
);
}
