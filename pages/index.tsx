import Head from 'next/head';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LayersIcon from '@material-ui/icons/Layers';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';

import Navbar from '../Components/Navbar/Navbar';
import RotatingCard from '../Components/RotatingCard/RotatingCard';
import styles from '../styles/Home.module.css';
import Footer from '../Components/Footer/Footer';
import FloatingCard from '../Components/FloatingCard/FloatingCard';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar bgColor="#23232e">
        <ul className="nav">
          <li className="nav-item">
            <a href="#home" title="Home" className="nav-link">
              <HomeIcon />
              <span className="link-text">Home</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#about" title="About" className="nav-link">
              <AccountCircleIcon />
              <span className="link-text">About</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#stacks" title="Stacks" className="nav-link">
              <LayersIcon />
              <span className="link-text">Stacks</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#projects" title="Projects" className="nav-link">
              <CodeIcon />
              <span className="link-text">Projects</span>
            </a>
          </li>

          <li className="nav-item bottom">
            <a
              href="https://github.com/namnguyen191"
              title="GitHub"
              target="_blank"
              className="nav-link"
              rel="noopener"
            >
              <GitHubIcon />
              <span className="link-text">Github</span>
            </a>
          </li>
        </ul>
      </Navbar>

      <main className={styles.main}>
        <FloatingCard
          title="front-end"
          items={[
            'html | css | javascript',
            'sass | bootstrap | materialize',
            'figma | adobexd',
            'react & redux | angular'
          ]}
          imgSrc="front-end.svg"
        />
      </main>

      <Footer>
        &copy; 2020 by Nam Nguyen. All rights reserved. Free to use for learning
        purposes.
      </Footer>
    </div>
  );
};

export default Home;
