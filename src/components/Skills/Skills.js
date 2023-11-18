import React from 'react'
import allIcons from 'simple-icons'
import { v4 } from 'uuid'
import { IconCloud } from 'react-icon-cloud'
import './skills.scss'

const Skills = () => {
  const tagCanvasOptions = {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: '#0000',

    reverse: true,
    tooltip: 'native', // null | 'div'
    tooltipDelay: 0,
    wheelZoom: true,
  }
  const iconSlugs = [
    'airfrance',
    'arlo',
    'dart',
    'java',
    'react',
    'flutter',
    'android',
    'andela',
    'html5',
    'audible',
    'nodedotjs',
    'express',
    'nextdotjs',
    'prisma',
    'amazonaws',
    'postgresql',
    'firebase',
    'battledotnet',
    'nginx',
    'vercel',
    'canva',
    'testinglibrary',
    'jest',
    'cypress',
    'docker',
    'git',
    'figshare',
    'jira',
    'github',
    'gitlab',
    'electron',
    'visualstudiocode',
    'androidstudio',
    'sonarqube',
    'figma',
  ]
  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug),
  }));

  return (
    <div className='sphere'>
      <IconCloud
        key={v4()}
        id={'icon'}
        minContrastRatio={1}
        iconSize={40}
        backgroundHexColor={'#fff'}
        fallbackHexColor={'#000'}
        tags={iconTags}
        tagCanvasOptions={tagCanvasOptions}
        // Додайте клас для обертання на осі Y
        className={'icon-rotate'}
      />
    </div>
  );
};

export default Skills;