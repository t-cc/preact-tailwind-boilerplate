import {h, render} from 'preact';
import './styles/app.css';
import config from '../package.json'
import * as styles from './index.css'

/**
 * @constructor
 */
const App = () => {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span>Configuration for</span>
                    <span>Parcel, Tailwind, Preact & TypeScript</span>
                </h1>
                <ul className={styles.deps}>
                    <li>Parcel <span>{config.devDependencies.parcel}</span></li>
                    <li>Tailwind & Tailwind/jit <span>{config.devDependencies.tailwindcss} & {config.devDependencies["@tailwindcss/jit"]}</span></li>
                    <li>Preact <span>{config.dependencies.preact}</span></li>
                    <li>TypeScript <span>{config.devDependencies.typescript}</span></li>
                </ul>
                <div className={styles.buttons}>
                    <div className={styles.web}>
                        <a href="https://josepvidal.dev">
                            My Webpage
                        </a>
                    </div>
                    <div className={styles.github}>
                        <a href="https://github.com/jvidalv">
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </main>

    )
}

render(<App/>, document.getElementById('root'));