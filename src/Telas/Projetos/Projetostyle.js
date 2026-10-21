import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 72px);
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const Main = styled.main`
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 64px 0 88px;
`;

export const BackLink = styled.button`
  min-height: 42px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primaryColor};
    background: ${({ theme }) => theme.hoverBackground};
  }
`;

export const ProjectDetailsContainer = styled.article`
  margin-top: 34px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 380px);
  gap: 42px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectHero = styled.div`
  display: grid;
  gap: 22px;
  align-content: start;
`;

export const ProjectKicker = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
`;

export const ProjectTitle = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: clamp(2.3rem, 5vw, 4.5rem);
  line-height: 1;
  letter-spacing: 0;
`;

export const ProjectDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textMuted};
  font-size: 1.08rem;
  line-height: 1.75;
`;

export const ProjectHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectHighlight = styled.div`
  min-height: 92px;
  padding: 14px;
  border-radius: 8px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};

  span {
    display: block;
    color: ${({ theme }) => theme.accentColor};
    font-size: 0.76rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-top: 7px;
    color: ${({ theme }) => theme.text};
    line-height: 1.4;
  }
`;

export const ProjectImagePanel = styled.div`
  padding: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: ${({ theme }) => theme.shadow};
  display: grid;
  gap: 20px;
  position: sticky;
  top: 96px;

  @media (max-width: 860px) {
    position: static;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: contain;
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TechImage = styled.img`
  width: 48px;
  height: 48px;
  padding: 7px;
  object-fit: contain;
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const LinkButton = styled.a`
  min-height: 42px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ $variant, theme }) => ($variant === 'primary' ? theme.primaryColor : theme.surface)};
  color: ${({ $variant }) => ($variant === 'primary' ? '#ffffff' : 'inherit')};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 800;
  opacity: ${({ $disabled }) => ($disabled ? 0.58 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primaryColor};
    background: ${({ $variant, theme }) => ($variant === 'primary' ? theme.primaryColorHover : theme.hoverBackground)};
  }
`;

export const GalleryButton = styled.button`
  min-height: 42px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.primaryColor};
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 800;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.primaryColorHover};
  }
`;

export const VideoSection = styled.section`
  margin-top: 56px;
  display: grid;
  gap: 18px;
`;

export const VideoSectionTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  line-height: 1.15;
`;

export const VerticalSection = styled.section`
  margin-top: 56px;
  display: grid;
  gap: 22px;
`;

export const StoriesLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 340px);
  gap: 32px;
  align-items: center;

  p,
  li {
    color: ${({ theme }) => theme.textMuted};
    line-height: 1.7;
  }

  ol {
    margin: 0;
    padding-left: 20px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const vertical = `
  position: relative;
  aspect-ratio: 9 / 16;
  border-radius: 14px;
  overflow: hidden;
  background: #000000;

  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StoryFrame = styled.div`
  ${vertical}
  width: 100%;
  max-width: 340px;
  justify-self: center;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const StoryBars = styled.div`
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  gap: 4px;

  span {
    flex: 1;
    height: 3px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.35);
    overflow: hidden;
  }

  i {
    display: block;
    height: 100%;
    background: #ffffff;
  }
`;

export const StoryNav = styled.button`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  ${({ $lado }) => ($lado === 'esquerda' ? 'left: 0;' : 'right: 0;')}
  width: 30%;
  border: 0;
  background: transparent;
  color: #ffffff;
  font-size: 1.3rem;
  cursor: pointer;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: ${({ $lado }) => ($lado === 'esquerda' ? 'flex-start' : 'flex-end')};
  padding: 0 10px;
  transition: opacity 0.2s ease;

  &:hover,
  &:focus-visible {
    opacity: 0.9;
  }
`;

export const StoryPlayButton = styled.button`
  position: absolute;
  z-index: 2;
  inset: 0;
  border: 0;
  background: rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: grid;
  place-items: center;

  span {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primaryColor};
    color: #ffffff;
    display: grid;
    place-items: center;
    font-size: 1.6rem;
  }
`;

export const ReelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ReelCard = styled.article`
  display: grid;
  gap: 10px;
  align-content: start;

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.text};
    font-size: 0.98rem;
    line-height: 1.35;
  }
`;

export const ReelFrame = styled.div`
  ${vertical}
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const VideoCard = styled.article`
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  display: grid;
  align-content: start;
  grid-column: ${({ $destaque }) => ($destaque ? '1 / -1' : 'auto')};
`;

export const VideoFrame = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background: #000000;

  video,
  iframe,
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    object-fit: cover;
  }
`;

export const VideoPlayButton = styled.button`
  position: absolute;
  inset: 0;
  width: 100%;
  border: 0;
  padding: 0;
  cursor: pointer;
  background: transparent;
  display: grid;
  place-items: center;

  span {
    position: relative;
    z-index: 1;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primaryColor};
    color: #ffffff;
    display: grid;
    place-items: center;
    font-size: 1.6rem;
    transition: transform 0.2s ease;
  }

  &:hover span {
    transform: scale(1.08);
  }
`;

export const VideoBody = styled.div`
  padding: 16px 18px 18px;
  display: grid;
  gap: 8px;

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.text};
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.textMuted};
    line-height: 1.6;
  }

  small {
    color: ${({ theme }) => theme.accentColor};
    font-weight: 800;
  }
`;

export const DetailGrid = styled.div`
  margin-top: 42px;
  display: grid;
  gap: 14px;
`;

export const StyledParagraph = styled.p`
  margin: 0;
  padding: 18px;
  border-radius: 8px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.textMuted};
  line-height: 1.7;
`;
