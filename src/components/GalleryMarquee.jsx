import Image from 'next/image';
import styles from './GalleryMarquee.module.css';

const images = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', 
  'HUEvents3.jpg', 'HUHackstorm.jpg', 'HUHackstorm3.jpg', 
  'HUHackstorm4.jpg', 'HUHackstorm5.jpg', 'HUHackstorm6.jpg', 
  'HUHackstorm7.jpg', 'HUHackstormw2.jpg', 'HuEvents1.jpg', 
  'HuEvents2.jpg', 'HuEvents4.jpg', 'HuEvents5.jpg', 
  'HuEvents6.jpg', 'HuEvents7.jpg', 'HuTeam.jpg',
  'Event_Orchestration.png',
  'hackstorm_speaker.jpg',
  'hackstorm_booth.jpg',
  'hackstorm_stage.jpg',
  'hackstorm_inauguration.jpg',
  'stellar_bootcamp.jpg',
  'hackstorm_discussions.jpg',
  'hackstorm_hall.jpg',
  'hackstorm_winners.jpg',
  'hackstorm_letters.jpg',
  'hive_mentors.jpg',
  'hackstorm_developers.jpg',
  'hackstorm_focus.jpg',
  'hackstorm_mentoring.jpg'
];

export default function GalleryMarquee() {
  // Split images into two rows for the marquee
  const row1 = images.slice(0, 18);
  const row2 = images.slice(18);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrackLeft}>
          {[...row1, ...row1].map((src, index) => (
            <div key={`row1-${index}`} className={styles.imageCard}>
              <Image 
                src={`/gallery/${src}`} 
                alt={`Community Moment ${index + 1}`} 
                fill 
                className={styles.image} 
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrackRight}>
          {[...row2, ...row2].map((src, index) => (
            <div key={`row2-${index}`} className={styles.imageCard}>
              <Image 
                src={`/gallery/${src}`} 
                alt={`Community Moment ${index + 1}`} 
                fill 
                className={styles.image} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
