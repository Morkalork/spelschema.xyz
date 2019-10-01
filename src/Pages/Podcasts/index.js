import React from 'react';
import styled from 'styled-components';
import {PodcastSection} from "../../Components/PodcastSection";

const Wrapper = styled.div`
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const mffPods = [{
    title: 'Blått en podd',
    href: 'https://poddtoppen.se/podcast/1039767398/blatt-en-podd',
    description: 'SvenskaFans podcast med subjektiv information om nuläget.'
}, {
    title: 'Blått snack',
    href: 'https://poddtoppen.se/podcast/1085802878/blatt-snack',
    description: 'Ole Törner och Skånesporten snackar skit och fotboll, ofta med någon intressant gäst!'
}, {
    title: 'MFF-podden',
    href: 'https://poddtoppen.se/podcast/911337512/mff-podden',
    description: 'Wiman och Sydsvenskan ger sin syn på allt omkring Malmö FF'
}, {
    title: 'Norra läktaren',
    href: 'https://poddtoppen.se/podcast/1278732007/norra-laktaren-podden',
    description: 'Gustav och Victor drar anekdoter och annat om MFF, bortaresor och supporterlivet'
}, {
    title: 'Vårt blåa lag',
    href: 'https://poddtoppen.se/podcast/1252795901/vart-blaa-lag',
    description: 'Supporterpodcast av supportrar för supportrar'
}, {
    title: 'Tapper',
    href: 'https://poddtoppen.se/podcast/1434984950/tapper',
    description: 'En pod av Mikael Sjöblom (om Malmö FF)'
}];

const allsvenskanPods = [{
    title: 'Studio Allsvenskan',
    href: 'https://poddtoppen.se/podcast/1241871873/studio-allsvenskan',
    description: 'Sveriges (tydligen) största podcast om Allsvensk fotboll. Av bl.a. Marcus Birro.'
}, {
    title: 'Alltid Allsvenskan',
    href: 'https://poddtoppen.se/podcast/1364474466/alltid-allsvenskan-med-jonas-dahlquist-mikael-stahre',
    description: 'Jonas Dahlquist och Stahre snackar allsvenskan. Nytt avsnitt varje tisdag efter allsvensk omgång'
}, {
    title: '3-5-2',
    href: 'https://poddtoppen.se/podcast/1220605973/3-5-2',
    description: 'Fjäll, Bachner och ett par nissar pratar fotboll med fokus på Allsvenskan'
}, {
    title: 'Disco & Noa',
    href: 'https://poddtoppen.se/podcast/1457545266/disco-noa',
    description: 'Kristoffersson och Bachner snackar Allsvenskan'
}, {
    title: 'Ljugarbänken',
    href: 'https://podcasts.nu/poddar/ljugarbanken',
    description: 'Bergman, Lindström och Edman pratar allsvenskan (sponsrad av ett bettingbolag)'
}];

const Podcasts = () => {
    return <Wrapper className='podcasts'>
        <h2>Rent MFF-relaterat</h2>
        {mffPods.map((pod, index) => <PodcastSection key={index}
                                                     title={pod.title}
                                                     href={pod.href}
                                                     description={pod.description}/>)}

        <h2>Allsvenskan och kanske relaterat</h2>
        {allsvenskanPods.map((pod, index) => <PodcastSection key={index}
                                                             title={pod.title}
                                                             href={pod.href}
                                                             description={pod.description}/>)}
    </Wrapper>;
};

export default Podcasts;