import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt='Email icon'/>
                <a href='mailto: kirilmuliar@gmail.com' target="_blank">kirilmuliar@gmail.com</a>
            </li>
            {/* <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt='Linkedin icon'/>
                <a href='/' target="_blank">myemail@gmail.com</a>
            </li> */}
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt='GitHub icon'/>
                <a href='https://github.com/Kiril-Muliar' target="_blank">GitHub</a>
            </li>
        </ul>
    </footer>
  )
}
