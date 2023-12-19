import { useState } from "react";
import styles from "./rating-modal.module.css";
export const RatingModal = ({ likesCount, disLikesCount }) => {
    return (
        <>
            <div className={styles.rating__modal}>
                <span className={styles.rating__container}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>{likesCount}</span>
                </span>
                <span className={styles.rating__container}>
                    <i class="fa-solid fa-thumbs-down"></i>
                    <span>{disLikesCount}</span>
                </span>
            </div>
        </>
    );
};
