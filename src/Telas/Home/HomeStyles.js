import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const Main = styled.main`
  display: block;
`;

export const Hero = styled.section`
  min-height: clamp(660px, calc(100vh - 72px), 880px);
  display: grid;
  align-items: stretch;
  background: #101820;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const HeroBackdrop = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  background-image: ${({ $image }) =>
    `linear-gradient(90deg, rgba(6, 12, 20, 0.96) 0%, rgba(6, 12, 20, 0.88) 46%, rgba(6, 12, 20, 0.38) 100%), linear-gradient(180deg, rgba(16, 24, 32, 0.1), rgba(16, 24, 32, 0.88)), url(${$image})`};
  background-size: cover;
  background-position: center right;
`;

export const HeroInner = styled.div`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 82px 0 64px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 390px);
  gap: 54px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 34px;
    align-items: start;
  }
`;

export const HeroContent = styled.div`
  max-width: 760px;
  color: #ffffff;
`;

export const Eyebrow = styled.p`
  width: fit-content;
  margin: 0 0 18px;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid rgba(125, 211, 199, 0.32);
  background: rgba(18, 107, 99, 0.2);
  color: #8ee7db;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  max-width: 820px;
  font-size: clamp(3.1rem, 8vw, 6.8rem);
  line-height: 0.94;
  letter-spacing: 0;
`;

export const HeroLead = styled.p`
  max-width: 700px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.84);
  font-size: clamp(1.06rem, 2vw, 1.26rem);
  line-height: 1.68;
`;

export const HeroActions = styled.div`
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const ActionLink = styled.a`
  min-height: 48px;
  padding: 0 18px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${({ $variant }) => ($variant === 'primary' ? 'transparent' : 'rgba(255, 255, 255, 0.34)')};
  background: ${({ $variant }) => ($variant === 'primary' ? '#126b63' : 'rgba(255, 255, 255, 0.08)')};
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ $variant }) => ($variant === 'primary' ? '#0f5a53' : 'rgba(255, 255, 255, 0.16)')};
    border-color: ${({ $variant }) => ($variant === 'primary' ? 'transparent' : 'rgba(255, 255, 255, 0.72)')};
  }

  &:focus-visible {
    outline: 3px solid rgba(94, 234, 212, 0.45);
    outline-offset: 3px;
  }
`;

export const SignalStrip = styled.div`
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const SignalItem = styled.div`
  min-height: 86px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.07);

  strong {
    display: block;
    color: #ffffff;
    font-size: 1.02rem;
  }

  span {
    display: block;
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.88rem;
    line-height: 1.45;
  }
`;

export const HeroPanel = styled.aside`
  align-self: center;
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(12, 18, 28, 0.68);
  color: #ffffff;
  backdrop-filter: blur(18px);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.26);
`;

export const HeroProfile = styled.div`
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`;

export const HeroPhoto = styled.img`
  width: 76px;
  height: 76px;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.4);
`;

export const HeroPanelTitle = styled.h2`
  margin: 0;
  font-size: 1.15rem;
  line-height: 1.2;
`;

export const HeroPanelText = styled.p`
  margin: 6px 0 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.9rem;
  line-height: 1.45;
`;

export const HeroMeta = styled.div`
  display: grid;
  gap: 14px;
`;

export const HeroMetaItem = styled.div`
  display: grid;
  gap: 4px;

  strong {
    font-size: 1.08rem;
  }

  span {
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.9rem;
    line-height: 1.45;
  }
`;

export const Section = styled.section`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 86px 0;

  @media (max-width: 760px) {
    padding: 58px 0;
  }
`;

export const SectionBand = styled.section`
  padding: 86px 0;
  background: ${({ theme }) => theme.surfaceAlt};

  @media (max-width: 760px) {
    padding: 58px 0;
  }
`;

export const BandInner = styled.div`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  max-width: 800px;
  margin-bottom: 32px;
`;

export const SectionEyebrow = styled.p`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.primaryColor};
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const StyledH2 = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: clamp(1.9rem, 3vw, 3.05rem);
  line-height: 1.08;
  letter-spacing: 0;
`;

export const StyledP = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.textMuted};
  font-size: 1rem;
  line-height: 1.75;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 380px);
  gap: 34px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutText = styled.div`
  display: grid;
  gap: 18px;
`;

export const HighlightsGrid = styled.div`
  display: grid;
  gap: 12px;
`;

export const HighlightItem = styled.div`
  padding: 18px;
  border-radius: 8px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: ${({ theme }) => theme.shadow};

  strong {
    display: block;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.text};
  }

  span {
    color: ${({ theme }) => theme.textMuted};
    line-height: 1.55;
  }
`;

export const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: 34px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const StoryContent = styled.div`
  display: grid;
  gap: 18px;
`;

export const StoryParagraph = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textMuted};
  font-size: 1.03rem;
  line-height: 1.82;
`;

export const EducationPanel = styled.div`
  display: grid;
  gap: 14px;
`;

export const EducationCard = styled.article`
  padding: 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: ${({ theme }) => theme.shadow};

  small {
    display: block;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.primaryColor};
    font-size: 0.76rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  h3 {
    margin: 0;
    font-size: 1.02rem;
    line-height: 1.38;
  }

  p {
    margin: 12px 0 0;
    color: ${({ theme }) => theme.textMuted};
    line-height: 1.62;
  }
`;

export const EducationMeta = styled.div`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Timeline = styled.div`
  display: grid;
  gap: 16px;
`;

export const TimelineItem = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
  gap: 14px;
`;

export const TimelineMarker = styled.span`
  width: 14px;
  height: 14px;
  margin-top: 7px;
  border-radius: 999px;
  background: ${({ theme }) => theme.primaryColor};
  box-shadow: 0 0 0 7px ${({ theme }) => theme.hoverBackground};
`;

export const TimelineContent = styled.div`
  padding: 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: ${({ theme }) => theme.shadow};

  h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  p {
    margin: 12px 0 0;
    color: ${({ theme }) => theme.textMuted};
    line-height: 1.68;
  }
`;

export const TimelinePeriod = styled.div`
  margin: 8px 0 0;
  color: ${({ theme }) => theme.accentColor};
  font-size: 0.84rem;
  font-weight: 800;
`;

export const FeaturedApp = styled.article`
  padding: 30px;
  border-radius: 8px;
  color: #ffffff;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
  gap: 34px;
  align-items: center;
  background:
    radial-gradient(circle at 82% 18%, rgba(34, 211, 238, 0.3), transparent 34%),
    linear-gradient(135deg, #07101f 0%, #2563eb 50%, #7c3aed 100%);
  box-shadow: ${({ theme }) => theme.shadow};

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 24px;
  }
`;

export const FeaturedAppContent = styled.div`
  max-width: 620px;
`;

export const FeaturedTitle = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1;
`;

export const FeaturedText = styled.p`
  margin: 18px 0 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.04rem;
  line-height: 1.7;
`;

export const FeatureList = styled.div`
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

export const FeatureItem = styled.span`
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.88);
  font-weight: 800;
  font-size: 0.82rem;
`;

export const FeaturedActions = styled.div`
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const FeaturedAppPreview = styled.div`
  display: grid;
  justify-items: center;
`;

export const PhoneMock = styled.div`
  width: min(300px, 76vw);
  min-height: 520px;
  padding: 16px;
  border-radius: 26px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: rgba(8, 13, 20, 0.78);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34);
`;

export const PhoneScreen = styled.div`
  min-height: 488px;
  padding: 18px;
  border-radius: 18px;
  background: #f7fafc;
  color: #111827;
  display: grid;
  align-content: start;
  gap: 14px;
`;

export const PhoneHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  strong {
    font-family: "Sora", "Plus Jakarta Sans", sans-serif;
    font-size: 1.05rem;
  }

  span {
    padding: 6px 8px;
    border-radius: 8px;
    background: #e8f4f1;
    color: #126b63;
    font-size: 0.74rem;
    font-weight: 800;
  }
`;

export const PhoneTaskList = styled.div`
  display: grid;
  gap: 10px;
`;

export const PhoneTask = styled.div`
  min-height: 72px;
  padding: 12px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #e1e7ef;
  display: grid;
  gap: 5px;

  strong {
    color: #111827;
    font-size: 0.92rem;
  }

  span {
    color: #64748b;
    font-size: 0.78rem;
    line-height: 1.35;
  }
`;

export const AppFeatureGrid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const AppFeatureCard = styled.article`
  min-height: 188px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.surface};

  svg {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 1.24rem;
    margin-bottom: 14px;
  }

  h3 {
    margin: 0 0 10px;
    font-size: 1.02rem;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.textMuted};
    line-height: 1.62;
  }
`;

export const AppSpecGrid = styled.div`
  margin-top: 18px;
  margin-bottom: 42px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const AppSpecItem = styled.div`
  padding: 14px;
  border-radius: 8px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};

  span {
    display: block;
    color: ${({ theme }) => theme.textMuted};
    font-size: 0.78rem;
    font-weight: 700;
  }

  strong {
    display: block;
    margin-top: 5px;
    color: ${({ theme }) => theme.text};
    line-height: 1.36;
  }
`;

export const SkillGroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillGroup = styled.article`
  padding: 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};

  h3 {
    margin: 0 0 14px;
    font-size: 1rem;
  }
`;

export const SkillPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SkillPill = styled.span`
  padding: 7px 9px;
  border-radius: 8px;
  background: ${({ theme }) => theme.hoverBackground};
  color: ${({ theme }) => theme.primaryColor};
  font-size: 0.78rem;
  font-weight: 800;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.article`
  min-height: 204px;
  padding: 22px;
  border-radius: 8px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.primaryColor};
    box-shadow: ${({ theme }) => theme.shadow};
  }

  svg {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 1.35rem;
    margin-bottom: 18px;
  }

  h3 {
    margin: 0 0 10px;
    font-size: 1.02rem;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.textMuted};
    line-height: 1.62;
  }
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const ProcessStep = styled.article`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.surface};

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    margin-bottom: 16px;
    background: ${({ theme }) => theme.accentSoft};
    color: ${({ theme }) => theme.accentColor};
    font-weight: 900;
  }

  h3 {
    margin: 0 0 10px;
    font-size: 1rem;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.textMuted};
    line-height: 1.62;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Project = styled.article`
  min-height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.projectBackground};
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 206px;
  display: block;
  object-fit: cover;
  background: ${({ theme }) => theme.surfaceAlt};
`;

export const ProjectBody = styled.div`
  padding: 22px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 14px;
`;

export const ProjectEyebrow = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.28rem;
`;

export const ProjectText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textMuted};
  line-height: 1.62;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  padding: 6px 9px;
  border-radius: 8px;
  color: ${({ theme }) => theme.primaryColor};
  background: ${({ theme }) => theme.hoverBackground};
  font-size: 0.78rem;
  font-weight: 800;
`;

export const CardActions = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ButtonLink = styled.a`
  min-height: 42px;
  padding: 0 14px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ $variant, theme }) => ($variant === 'primary' ? theme.primaryColor : theme.surface)};
  color: ${({ $variant, theme }) => ($variant === 'primary' ? '#ffffff' : theme.text)};
  text-decoration: none;
  font-weight: 800;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.55 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primaryColor};
    background: ${({ $variant, theme }) => ($variant === 'primary' ? theme.primaryColorHover : theme.hoverBackground)};
  }
`;

export const AppsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const AppCard = styled.article`
  min-height: 100%;
  padding: 22px;
  border-radius: 8px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const AppImage = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 8px;
  object-fit: contain;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.background};
`;

export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 14px;
`;

export const AppMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const StatusPill = styled.span`
  padding: 6px 9px;
  border-radius: 8px;
  background: ${({ theme }) => theme.hoverBackground};
  color: ${({ theme }) => theme.primaryColor};
  font-size: 0.78rem;
  font-weight: 900;
`;

export const TechGrid = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(118px, 1fr));
  gap: 14px;
`;

export const TechItem = styled.div`
  min-height: 118px;
  padding: 18px 12px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  gap: 10px;
  text-align: center;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.text};
  font-weight: 800;
`;

export const TechImage = styled.img`
  width: 52px;
  height: 52px;
  object-fit: contain;
`;

export const ContactBand = styled.section`
  padding: 86px 0;
  background: ${({ theme }) => theme.footerBackground};
  color: #ffffff;
`;

export const ContactInner = styled.div`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 24px;
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactTitle = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.04;
`;

export const ContactText = styled.p`
  max-width: 680px;
  margin: 16px 0 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
`;

export const ContactActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
