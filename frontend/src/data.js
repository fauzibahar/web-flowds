import smotobento from './assets/img/portfolio/sm-otobento.jpg';
import smiter from './assets/img/portfolio/sm-iter.jpg';
import smhionigiri from './assets/img/portfolio/sm-hionigiri.jpg';
import smpreaktea from './assets/img/portfolio/sm-preaktea.jpg';
import wdfab from './assets/img/portfolio/wd-fab.jpg';
import wdbiaadabsolusi from './assets/img/portfolio/wd-biaadabsolusi.jpg';
import wdkotakado from './assets/img/portfolio/wd-kotakado.jpg';
import wdpondokkapilih from './assets/img/portfolio/wd-pondokkapilih.jpg';
import bocbc from './assets/img/portfolio/b-ocbc.jpg';
import blaveta from './assets/img/portfolio/b-laveta.jpg';

import ocbc from './assets/img/ocbc.png';
import { Code, Palette, Share2, Video, Camera } from 'lucide-react';

export const projects = [
  {
    name: 'Social Media Management',
    description: 'Oto Bento',
    image: smotobento,
  },
  {
    name: 'Social Media Management',
    description: 'Iter Creative Agency',
    image: smiter,
  },
  {
    name: 'Social Media Management',
    description: 'Hi Onigiri',
    image: smhionigiri,
  },
  {
    name: 'Social Media Management',
    description: 'Preaktea',
    image: smpreaktea,
  },
  {
    name: 'Web Development',
    description: 'FAB',
    image: wdfab,
  },
  {
    name: 'Web Development',
    description: 'Biaadab Solusi',
    image: wdbiaadabsolusi,
  },
  {
    name: 'Web Development',
    description: 'Kotakado',
    image: wdkotakado,
  },
  {
    name: 'Web Development',
    description: 'Pondok Kapilih',
    image: wdpondokkapilih,
  },
  {
    name: 'Visual Branding & Design',
    description: 'OCBC',
    image: bocbc,
  },
];

export const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications tailored to your needs.',
    icon: Code,
  },
  {
    title: 'Visual Branding & Design',
    description:
      'Create a unique and memorable brand identity that stands out.',
    icon: Palette,
  },
  {
    title: 'Social Media Management',
    description:
      'Engage your audience and grow your online presence effectively.',
    icon: Share2,
  },
  {
    title: 'Videography',
    description:
      'High-quality video production for marketing and storytelling.',
    icon: Video,
  },
  {
    title: 'Photography',
    description: 'Professional photography services for various purposes.',
    icon: Camera,
  },
];

export const clients = [
  { name: 'Client 1', logo: ocbc },
  { name: 'Client 1', logo: ocbc },
  { name: 'Client 1', logo: ocbc },
  { name: 'Client 1', logo: ocbc },
  { name: 'Client 1', logo: ocbc },
  { name: 'Client 1', logo: ocbc },
  { name: 'Client 1', logo: ocbc },
  { name: 'Client 1', logo: ocbc },
  { name: 'Client 1', logo: ocbc },
  { name: 'Client 1', logo: ocbc },
  { name: 'Client 1', logo: ocbc },
];

export const navLinks = [
  { name: 'Beranda', to: 'home' },
  { name: 'Tentang Kami', to: 'tentang-kami' },
  { name: 'Services', to: 'services' },
  { name: 'Portfolio', to: 'portfolio' },
  { name: 'Kontak', to: 'contact' },
];
