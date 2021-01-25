import React, { memo } from 'react';
import BubbleDisplay from '../../../Components/BubbleDisplay/BubbleDisplay';
import TypeWriter from '../../../Components/TypeWriter/TypeWriter';
import { SectionIntroContainer } from './SectionIntroStyles';

const SectionIntro: React.FC = () => {
  return (
    <SectionIntroContainer>
      <div className="head-lines">
        <h1>
          Nam Nguyen The{' '}
          <TypeWriter
            writerTexts={['Developer', 'Designer', 'Learner']}
            pauseTime={1500}
          />
        </h1>
        <span>Welcome to my page!</span>
      </div>

      <div className="top-3-projects">
        <h2>Top 3 Projects</h2>
        <BubbleDisplay
          title="Natours"
          description="Sass | Advanced CSS"
          imgUr="/natour.webp"
          url="https://namnguyen191.github.io/Natours/"
        />
        <BubbleDisplay
          title="Sirvey"
          description="MERN stack"
          imgUr="/survey.webp"
          url="https://reactsirvey.herokuapp.com/"
        />
        <BubbleDisplay
          title="DatingApp"
          description="Angular | .net core"
          imgUr="/dating-app-crop.webp"
          url="https://udemydatingapp.azurewebsites.net/"
        />
      </div>
    </SectionIntroContainer>
  );
};

export default memo(SectionIntro);