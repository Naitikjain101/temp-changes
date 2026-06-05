import styles from './LogoMarquee.module.css';
import { sponsorLogos } from '@/data/sponsors';

export default function LogoMarquee() {
  const logos = [...sponsorLogos, ...sponsorLogos];
  return (
    <div className={styles.marquee} aria-label="Partner companies">
      <div className={styles.track}>
        {logos.map((item, i) => (
          <div key={i} className={styles.logo}>
            <img src={item.logo} alt={item.name} className={styles.logoImg} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
