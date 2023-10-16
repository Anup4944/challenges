import React, { useState } from "react";
import styles from "./rating.module.css";

const Rating = () => {
  const [selected, setSelected] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOnRatingClicked = (rating: number) => {
    setSelected(rating);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return isSubmitted ? (
    <div>Thanks</div>
  ) : (
    <form className={styles.panel} onSubmit={handleOnSubmit}>
      <h2 className={styles.star}>⭐ </h2>
      <h1 className={styles.title}> How did we do?</h1>
      <p className={styles.description}>
        Please let us know how we did with your report. All feedback is
        appreciated to help us improve our offering.
      </p>
      <div className={styles.group}>
        {[1, 2, 3, 4, 5].map((item, idx) => (
          <button
            key={idx}
            type="button"
            disabled={selected === null}
            className={styles.rating}
            onClick={() => handleOnRatingClicked(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <button className={styles.submit}>Submit</button>
    </form>
  );
};

export default Rating;
