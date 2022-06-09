import React from 'react';
import classNames from 'classnames';

import styles from './SlotReel.module.scss';

const slotsData = [
  { id: 1, price: 2, image: 'assets/slots/slot-1-512.png', name: 'cherry' },
  { id: 2, price: 4, image: 'assets/slots/slot-2-512.png', name: 'dollar' },
  { id: 3, price: 8, image: 'assets/slots/slot-3-512.png', name: 'seven' },
  { id: 4, price: 16, image: 'assets/slots/slot-4-512.png', name: 'grape' },
  { id: 5, price: 32, image: 'assets/slots/slot-5-512.png', name: 'bar' },
];

export const SlotReel: React.FC = () => {
  return (
    <>
      <div className={classNames(styles.reel)}>
        <div className={styles.slotsWrapper}>
          {slotsData.map(({ id, image, name }) => (
            <img key={id} className={styles.slot} src={image} alt={`Slot-${name}`} />
          ))}
        </div>
      </div>
    </>
  );
};
