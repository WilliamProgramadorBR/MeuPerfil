import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import {
  ReelCard,
  ReelFrame,
  ReelsGrid,
  StoriesLayout,
  StoryBars,
  StoryFrame,
  StoryNav,
  StoryPlayButton,
  VerticalSection,
  VideoSectionTitle,
} from '../../Telas/Projetos/Projetostyle';

// Stories em sequência, como no Instagram: barras de progresso, avanço automático e toque nas laterais.
const StoriesPlayer = ({ stories }) => {
  const [atual, setAtual] = useState(0);
  const [iniciado, setIniciado] = useState(false);
  const [progresso, setProgresso] = useState(0);
  const video = useRef(null);

  useEffect(() => {
    setProgresso(0);
    if (iniciado && video.current) {
      video.current.play().catch(() => {});
    }
  }, [atual, iniciado]);

  const ir = (passo) => setAtual((i) => Math.min(stories.length - 1, Math.max(0, i + passo)));

  return (
    <StoryFrame>
      <StoryBars>
        {stories.map((story, i) => (
          <span key={story.src}>
            <i style={{ width: `${i < atual ? 100 : i === atual ? progresso : 0}%` }} />
          </span>
        ))}
      </StoryBars>
      <video
        ref={video}
        src={stories[atual].src}
        poster={stories[atual].poster}
        playsInline
        preload="none"
        onTimeUpdate={(e) => setProgresso((100 * e.target.currentTime) / (e.target.duration || 1))}
        onEnded={() => (atual < stories.length - 1 ? ir(1) : setIniciado(false))}
        aria-label={stories[atual].title}
      />
      {iniciado ? (
        <>
          <StoryNav type="button" $lado="esquerda" onClick={() => ir(-1)} aria-label="Story anterior">
            <FaChevronLeft />
          </StoryNav>
          <StoryNav type="button" $lado="direita" onClick={() => ir(1)} aria-label="Próximo story">
            <FaChevronRight />
          </StoryNav>
        </>
      ) : (
        <StoryPlayButton type="button" onClick={() => setIniciado(true)} aria-label="Assistir aos stories">
          <span>
            <FaPlay />
          </span>
        </StoryPlayButton>
      )}
    </StoryFrame>
  );
};

const ProjectVerticals = ({ stories, reels }) => (
  <VerticalSection>
    {stories && (
      <StoriesLayout>
        <div>
          <VideoSectionTitle>Stories</VideoSectionTitle>
          <p>
            A série completa em {stories.length} partes, na sequência: do problema que eu encontrei no PES 2021 até a
            solução com rede neural. Toque nas laterais para voltar ou avançar.
          </p>
          <ol>
            {stories.map((story) => (
              <li key={story.src}>{story.title}</li>
            ))}
          </ol>
        </div>
        <StoriesPlayer stories={stories} />
      </StoriesLayout>
    )}
    {reels && (
      <>
        <VideoSectionTitle>Reels</VideoSectionTitle>
        <ReelsGrid>
          {reels.map((reel) => (
            <ReelCard key={reel.src}>
              <ReelFrame>
                <video src={reel.src} poster={reel.poster} controls playsInline preload="none" aria-label={reel.title} />
              </ReelFrame>
              <h3>{reel.title}</h3>
            </ReelCard>
          ))}
        </ReelsGrid>
      </>
    )}
  </VerticalSection>
);

export default ProjectVerticals;
