import React from 'react';
import styled from 'styled-components';
import { PodcastSection } from '../../Components/PodcastSection';

const Wrapper = styled.div`
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const mffPods = [
  {
    title: 'Blått en podd',
    href: 'https://poddtoppen.se/podcast/1039767398/blatt-en-podd',
    description: 'SvenskaFans podcast med subjektiv information om nuläget.',
  },
  {
    title: 'Blått snack',
    href: 'https://poddtoppen.se/podcast/1085802878/blatt-snack',
    description:
      'Ole Törner och Skånesporten snackar skit och fotboll, ofta med någon intressant gäst!',
  },
  {
    title: 'MFF-podden',
    href: 'https://poddtoppen.se/podcast/911337512/mff-podden',
    description: 'Wiman och Sydsvenskan ger sin syn på allt omkring Malmö FF',
  },
  {
    title: 'Norra läktaren',
    href: 'https://poddtoppen.se/podcast/1278732007/norra-laktaren-podden',
    description:
      'Gustav och Victor drar anekdoter och annat om MFF, bortaresor och supporterlivet',
  },
  {
    title: 'Frustrationspodden',
    href: 'https://poddtoppen.se/podcast/1516464835/frustrationspodden',
    description:
      'Fotbollskånes mff/hif pod med separata avsnitt för de olika lagen',
  },
  {
    title: 'Tapper',
    href: 'https://poddtoppen.se/podcast/1434984950/tapper',
    description: 'En pod av Mikael Sjöblom (om Malmö FF)',
  },
  {
    title: 'För alltid nummer 1',
    href: 'https://anchor.fm/for-alltid-nummer-ett',
    description:
      'En supporterpodd med Martin och Gustav som kommer beröra det minsta och det mesta gällande Malmö FF.',
  },
];

const allsvenskanPods = [
  {
    title: 'Studio Allsvenskan',
    href: 'https://poddtoppen.se/podcast/1241871873/studio-allsvenskan',
    description:
      'Sveriges (tydligen) största podcast om Allsvensk fotboll. Av bl.a. Marcus Birro.',
  },
  {
    title: 'Allsvenska podden',
    href: 'https://poddtoppen.se/podcast/1095805585/allsvenska-podden',
    description:
      'Robert Laul och Per Bohman i frontlinjen för Sportbladets allsvenska podcast',
  },
  {
    title: 'Disco & Noa',
    href: 'https://poddtoppen.se/podcast/1457545266/disco-noa',
    description: 'Kristoffersson och Bachner snackar Allsvenskan',
  },
  {
    title: 'Ljugarbänken',
    href: 'https://podcasts.nu/poddar/ljugarbanken',
    description:
      'Bergman, Lindström och Edman pratar allsvenskan (sponsrad av ett bettingbolag)',
  },
];

const Podcasts = () => {
  return (
    <Wrapper className="podcasts">
      <h2>Rent MFF-relaterat</h2>
      {mffPods.map((pod, index) => (
        <PodcastSection
          key={index}
          title={pod.title}
          href={pod.href}
          description={pod.description}
        />
      ))}

      <h2>Allsvenskan och kanske relaterat</h2>
      {allsvenskanPods.map((pod, index) => (
        <PodcastSection
          key={index}
          title={pod.title}
          href={pod.href}
          description={pod.description}
        />
      ))}
    </Wrapper>
  );
};

export default Podcasts;
