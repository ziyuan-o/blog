import React, { useEffect, useState } from 'react'

import { useTrail, animated } from '@react-spring/web'
import Translate from '@docusaurus/Translate'
import { useThemeConfig} from '@docusaurus/theme-common'
import { ThemeConfig } from '@docusaurus/preset-classic'

import Link from '@docusaurus/Link'

import HeroMain from './img/hero_main.svg'

import JuejinIcon from '@site/static/svg/juejin.svg'
import { Icon } from '@iconify/react'

import styles from './styles.module.scss'

import video from '../../../static/video/数据挖掘.mp4'

function Hero() {
  const trails = useTrail(4, {
    from: { opacity: 0, transform: 'translate3d(0px, 2em, 0px)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    config: {
      mass: 3,
      tension: 460,
      friction: 45,
    },
  })

  const [ isShow, setIsShow ] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (event) => {
      if (isShow) {
        event.preventDefault(); // 阻止默认的滚轮行为
      }
    };

    window.addEventListener('wheel', handleScroll, {passive: false});

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isShow]);

  const showVideo = () =>{
    setIsShow(true)
    window.scrollTo(0,0)
  }

  const noShow = () =>{
    setIsShow(false)
  }

  
  
  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     // 在这里处理滚轮事件
  //     console.log('滚轮事件触发');
  //   };

  //   // 在组件挂载时订阅滚轮事件
  //   window.addEventListener('wheel', handleScroll);

  //   // 在组件卸载时取消订阅滚轮事件
  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);

  

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={trails[0]} className={styles.hero_text}>
          <Translate id="homepage.hero.greet">你好! 我是</Translate>
          <span className={styles.intro__name}>
            <Translate id="homepage.hero.name">资源挖掘博客</Translate>
          </span>
        </animated.div>
        <animated.p style={trails[1]}>
          <Translate id="homepage.hero.text">
            {`有很多资源都各种套路收费，对于囊中羞涩的伙伴来说能免费的最好，这里免费分享各种资源。`}
          </Translate>
          <br />
          <br />
          <Translate
            id="homepage.hero.look"
            values={{
              note: (
                <Link to="docs/赚钱资源/赚钱资源-intro">
                  <Translate id="hompage.hero.note">赚钱资源</Translate>
                </Link>
              ),
              project: (
                <Link to="docs/营销专区/营销专区-intro">
                  <Translate id="hompage.hero.project">营销资源</Translate>
                </Link>
              ),
              link: (
                <Link to="docs/学习专区/学习专区-intro">
                  <Translate id="hompage.hero.link">学习资源</Translate>
                </Link>
              ),
              idea: (
                <Link to="docs/办公专区/办公专区-intro">
                  <Translate id="hompage.hero.idea">办公资源</Translate>
                </Link>
              ),
            }}
          >
            {`你可以随处逛逛，查看{note}、{project}、{link}。`}
          </Translate>
        </animated.p>
        <SocialLinks style={trails[2]} />
        <animated.div style={trails[3]}>
          <a className={styles.intro} href={'./about'}>
            <Translate id="hompage.hero.introduce">自我介绍</Translate>
          </a>
          <a className={styles.intro} style={{marginLeft:'30px',cursor:'pointer'}}>
            <div onClick={showVideo}>介绍视频</div>
          </a>
        </animated.div>
      </div>
      <div className={styles.bloghome__image}>
        <HeroMain />
      </div>
      {
        isShow && (
          <div className={styles.videoShow}>

            <div className={styles.showTitle}>
              <div>介绍视频</div>
              <div onClick={noShow} className={styles.cursor}>×</div>
            </div>
            <div className={styles.line}></div>
            <div>
              <video src={video} controls></video>
            </div>

          </div>
        )
      }
    </animated.div>
  )
}

export function SocialLinks({ ...prop }) {
  const themeConfig = useThemeConfig() as ThemeConfig

  const socials = themeConfig.socials as {
    github: string
    twitter: string
    juejin: string
    csdn: string
    qq: string
    wx: string
    cloudmusic: string
    zhihu: string
    emial: string
  }

  return (
    <animated.div className={styles.social__links} {...prop}>
      <a href={socials.github} target="_blank">
        <Icon icon="ri:github-line" />
      </a>
      <a href={socials.juejin} target="_blank">
        <JuejinIcon />
      </a>
      <a href={socials.qq} target="_blank">
        <Icon icon="ri:qq-line" />
      </a>
      <a href={socials.twitter} target="_blank">
        <Icon icon="ri:twitter-line" />
      </a>
      <a href={socials.zhihu} target="_blank">
        <Icon icon="ri:zhihu-line" />
      </a>
    </animated.div>
  )
}

export default Hero
