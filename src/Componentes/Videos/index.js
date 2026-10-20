import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaPlay } from 'react-icons/fa';
import {
  VideoBody,
  VideoCard,
  VideoFrame,
  VideoGrid,
  VideoPlayButton,
  VideoSection,
  VideoSectionTitle,
} from '../../Telas/Projetos/Projetostyle';

// O iframe do YouTube só carrega no clique: a página continua leve mesmo com vídeos longos.
const YoutubePlayer = ({ video }) => {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <>
      <img src={video.poster || `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`} alt="" loading="lazy" />
      <VideoPlayButton type="button" onClick={() => setPlaying(true)} aria-label={`Assistir: ${video.title}`}>
        <span>
          <FaPlay />
        </span>
      </VideoPlayButton>
    </>
  );
};

// As prévias ficam no Firebase: só baixam quando aparecem na tela, para poupar a cota de tráfego.
const PreviewPlayer = ({ video }) => {
  const { ref, inView } = useInView({ rootMargin: '200px', triggerOnce: true });

  return (
    <video
      ref={ref}
      src={inView ? video.preview : undefined}
      poster={video.poster}
      muted
      loop
      autoPlay
      playsInline
      preload="none"
      aria-label={video.title}
    />
  );
};

const ProjectVideos = ({ title, videos }) => {
  const available = videos.filter((video) => video.youtubeId || video.preview);

  if (!available.length) {
    return null;
  }

  return (
    <VideoSection>
      <VideoSectionTitle>{title}</VideoSectionTitle>
      <VideoGrid>
        {available.map((video) => (
          <VideoCard key={video.title}>
            <VideoFrame>
              {video.youtubeId ? <YoutubePlayer video={video} /> : <PreviewPlayer video={video} />}
            </VideoFrame>
            <VideoBody>
              {video.duration && <small>{video.duration}</small>}
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </VideoBody>
          </VideoCard>
        ))}
      </VideoGrid>
    </VideoSection>
  );
};

export default ProjectVideos;
