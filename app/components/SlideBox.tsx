import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/page.module.scss';

const images = [
  '/1.webp',
  '/2.webp',
  '/3.webp',
  '/4.webp',
];

export const SlideBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // 画像を切り替える
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3秒ごとに画像を切り替える

    // コンポーネントがアンマウントされた場合、クリーンアップ
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.fadeImageContainer}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`${styles.fadeImage} ${index === currentIndex ? styles.fadeImageVisible : ''}`}
        >
          <Image
            src={src}
            width={1920}
            height={1280}
            alt={`Next Texh Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};