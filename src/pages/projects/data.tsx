import React from 'react'

import { LinkText } from '@/components/linkText/LinkText'
import Aisle5 from '@/images/aisle-5.png'
import Background from '@/images/background.png'
import Bloutand from '@/images/bloutand.png'
import ByrnaPistolHolster from '@/images/byrna-pistol-holster.png'
import Calmulate from '@/images/calmulate.png'
import CVD19ZA from '@/images/cvd19za.png'
import Dbl from '@/images/dbl.png'
import FatBuckV1 from '@/images/fat-buck-v1.png'
import FatBuckV4 from '@/images/fat-buck-v4.png'
import Flavazz from '@/images/flavazz.png'
import GoodspeedOrigins from '@/images/goodspeed-origins.png'
import HouseReno1 from '@/images/house-reno-1.png'
import HouseReno2 from '@/images/house-reno-2.png'
import IdeaMe from '@/images/idea-me.png'
import KissesEmoji from '@/images/kisses-emoji.png'
import Launchasaur from '@/images/launchasaur.png'
import NouBraai from '@/images/nou-braai.png'
import PatioRoof from '@/images/patio-roof.png'
import PixelsMinutes from '@/images/pixels-minutes.png'
import RecycledFilament from '@/images/recycled-filament.png'
import SpiceChef from '@/images/spice-chef.png'
import SwingAndFling from '@/images/swing-and-fling.png'
import TheShell from '@/images/the-shell.png'
import TMPlayerBoard from '@/images/tm-player-board.png'
import UltimateGuide from '@/images/ultimate-guide.png'
import VeggieGarden from '@/images/veggie-garden.png'
import WineMe from '@/images/wine-me.png'

import { ProjectProps } from './Project'

export const PROJECTS: ProjectProps[] = [
  {
    image: SwingAndFling,
    title: 'Swing and Fling',
    description: (
      <>
        "Daddy, please can you make a game where the monkey poops on the people?" - Isla.
        <br /> <br />
        Enter Swing and Fling, a simple 2D platformer where you play as a monkey and throw poop at
        the foresters before they cut down your trees 💩 I'm currently digesting{' '}
        <LinkText href="https://phaser.io/">Phaser.js</LinkText>. The game is a work in progress.
      </>
    ),
    tags: ['Games', 'Typescript', 'Phaser.js'],
  },
  {
    image: Background,
    title: 'This Website',
    description: (
      <>
        After moving to Australia at the beginning of 2023, I built this website to host my
        projects. I recently decided to give it a bit of an update since I had already learnt so
        much since then 🤓 It's now using a more modern tech stack with Vite as the build system and
        TailwindCSS for styling, to name a few. I also added a menu that's pretty fun to play with.
      </>
    ),
    tags: ['Apps', 'Typescript', 'React'],
  },
  {
    image: TheShell,
    title: 'The Shell',
    description: (
      <>
        The ultimate boilerplate for building SaaS applications with React, Firebase, Stripe,
        TailwindCSS and TypeScript. I built this to transform 8 weeks of development a few hours 🚀
        Go check it out for yourself!
      </>
    ),
    tags: ['Typescript', 'React', 'Firebase', 'Stripe'],
    href: 'https://github.com/shaunsaker/the-shell',
  },
  {
    image: Calmulate,
    title: 'Calmulate',
    description: (
      <>
        Calmulate was an idea I had to analyse your calendar and wearable data and optimise your day
        in terms of decreasing stress and increasing productivity and work-life balance ✌️ I built a
        prototype for feedback, but it didn't gain much traction. I'm still proud of it though, it
        was a lot of fun to build and I learnt a lot.
      </>
    ),
    tags: ['Apps', 'Typescript', 'React', 'Firebase'],
    href: 'https://app.calmulate.com/',
  },
  {
    image: KissesEmoji,
    title: 'Kisses Emoji',
    description: (
      <>
        "Daddy, I want to play emoji!"
        <br /> <br />
        Isla often asked to play with the emoji keyboard on my phone, so I built a simple app for
        her where she could select emojis to her heart's content, named by my muse herself 😘 It
        also taught her how to use the mouse, scroll, click and clear.
        <br /> <br />
        Fun fact: It's not that easy to render a list of emojis. Give it a try yourself! Hint:
        You're going to need hardware acceleration, translateZ(0) to the rescue 🦸
      </>
    ),
    tags: ['Apps', 'Typescript', 'React', 'Firebase'],
    href: 'https://kissesemoji.com/',
  },
  {
    image: FatBuckV4,
    title: 'Fat Buck v4',
    description: (
      <>
        The world's healthiest, fastest growing and undervalued stocks in your inbox, daily! Or so I
        thought 😂
        <br />
        <br />I rehashed an old project of mine, thinking I'd nail it with my newfound experience
        this time round. It turns out stock analysis is a lot harder than it looks, especially when
        you're relying on tons of third-party data that may or may not be accurate. I learnt a lot
        about the stock market and value investing techniques, but in the end, I decided that I did
        not have the necessary domain expertise and pivoted to a different project.
      </>
    ),
    tags: ['Apps', 'Typescript', 'React', 'Firebase'],
    href: 'https://npe4209mbs20.umso.co/',
  },
  {
    image: GoodspeedOrigins,
    title: 'Goodspeed Origins',
    description: (
      <>
        My wife gave me a DNA test as my Christmas present in 2023. I was so stoked to find out that
        I was 34% Scottish, 28% German and 22% English (there is even 1% Bengal in there, someone
        enjoyed their time in the colony 😉). Naturally, I had to figure this out all for myself so
        I built a family tree. It turns out my family on my late Father's side is from German
        nobility 🤯 Kotze was my original surname, which means something rather unfortunate in
        modern German (🤮) but back in the day, it was related to coats 😅
        <br />
        <br />
        On my Mom's side, we found Scottish links (as expected) but we also dove deeper into a known
        English link to missionaries that came to South Africa in the 1800s, namely Holloway
        Helmore's family who was later murdered by a tribe in Central Africa. There also happened to
        be links to English royalty, this all made me feel very posh 😂
        <br />
        <br />
        This all culminated in a presentation given to my South African family who had come to visit
        in Australia in Christmas of 2023.
      </>
    ),
    tags: ['Misc', 'Genealogy'],
  },
  {
    image: PixelsMinutes,
    title: 'Pixels Minutes',
    description: (
      <>
        I met a guy in Australia who owned a creative agency and had told me about his problem with
        tracking time for his clients. Existing solutions weren't working for him so I decided to
        build a small prototype. Using Node.js file watchers, the app is able to automatically track
        time towards a project based on the files you're working on. It's a bit of a hack, but it
        works! <LinkText href="https://timeular.com/">Timeular</LinkText> recently released a
        similar capability and is far fancier than my prototype, but it was a fun project to build.
      </>
    ),
    tags: ['Typescript', 'React', 'Electron'],
    href: '',
  },
  {
    image: TMPlayerBoard,
    title: 'Terraforming Mars Player Board',
    description: (
      <>
        I love board games. My cousin and I try and play every month. Terraforming Mars is one of
        our favourites but the physical player boards tend to get knocked around during the
        excitement and we often lost track of our resources. I built a simple web app to track our
        resources and it's been a game changer! 🚀
      </>
    ),
    tags: ['Games', 'Apps', 'Typescript', 'React', 'Firebase'],
    href: 'https://terraforming-mars-player-board.netlify.app/',
  },
  {
    image: Flavazz,
    title: 'Flavazz',
    description: (
      <>
        When OpenAI released their GPT-3 API, I was super excited to play with it. I built a simple
        web app that would generate a recipe based on the ingredients you have in your kitchen.
        While it was a fun project, I felt that GPT-3 was not quite there yet as the recipes it
        generated were often a bit off. So I parked it for a while but have recently discovered the
        OpenAI has published a GPT using GPT-4 specifically for this purpose, I'll leave this one
        for the pros 😄
      </>
    ),
    tags: ['Apps', 'Typescript', 'React', 'Open AI API'],
    href: 'https://flavazz-frontend.netlify.app/',
  },
  {
    image: UltimateGuide,
    title: 'The Ultimate Guide to Selling your Home Privately in South Africa!',
    description: (
      <>
        After selling both our homes in South Africa privately without any agents (and their fat
        commissions), we figured we should create a guide and share it with others. It was a lot of
        fun to write and we even had a few downloads 💪🤣
      </>
    ),
    tags: ['Misc', 'Real Estate', 'Sales'],
    href: 'https://sakerbos.gumroad.com/l/frehn',
  },
  {
    image: VeggieGarden,
    title: 'Veggie Garden',
    description: (
      <>
        Our home in South Africa had a decently-sized area in the front portion of the yard that was
        not being utilised. I decided to build a veggie garden to grow our own food 🧑‍🌾 It was quite
        a process, even involving some Figma design as pictured above, but after months of toil with
        the help of our Malawian gardener Gerard, the results were impressive! We must have
        harvested 150+ tomatoes from one bush. The size of our eggplants were massive (we had
        eggplant parmigiana for days!). Even our domestic worker had her own section where she grew
        Covo (a type of spinach from Zimbabwe) and she was so stoked. This was one of my all-time
        favourite projects. I can't wait to build another one in Australia (when I can figure out
        how to manage the intense Queensland heat 😅).
      </>
    ),
    tags: ['Home', 'Gardening', 'Figma'],
  },
  {
    image: SpiceChef,
    title: 'Spice Chef',
    description: (
      <>
        Every year for Christmas, our massive South African family met at a family farm along the
        Qwelera River in the Eastern Cape. We'd spend two weeks there, swimming, skiing, fishing and
        of course braaing. In 2022, I decided that my secret Santa gift would be a collection of
        spices (which is what I would've wanted). Once I had all the spices nicely packaged into
        little containers and hosued in a custom wooden tray, I figured there should be an app to
        help me remember what to use them for. So I built Spice Chef to do just that. It's a simple
        app that allows you to add your spices and then search for recipes that use them 🧑‍🍳 My
        cousin was super stoked to have received this as her gift 😍
      </>
    ),
    tags: ['Apps', 'Typescript', 'React', 'Firebase'],
    href: 'https://spice-chef.vercel.app/',
  },
  {
    image: HouseReno2,
    title: 'House Reno #2',
    description: (
      <>
        We bought our second home in South Africa and it was in a bit of a state, which is what we
        liked, because that meant we could give it a reno! My wife and I project-managed the reno
        ourselves again, this time it was way more stressful and so much went wrong. But in the end,
        we produced a beautiful home that we were proud of. We even managed to sell it for a profit
        a year later, which was a huge win for us 💪 I miss it that home a lot now though!
      </>
    ),
    tags: ['Home', 'Construction', 'Renovation', 'Figma'],
  },
  {
    image: Dbl,
    title: 'Daily Bitcoin Lottery',
    description: (
      <>
        One of my favourite personal projects, I created a lottery on the Bitcoin blockchain
        (it&apos;s the TODO app of 2022 okay 😂). This was a huge learning curve for me as it
        involved a lot of research into a very unknown territory. In the end, I discovered Ethereum
        Smart Contracts, which prompted me to complete a full course in{' '}
        <LinkText href="https://www.youtube.com/watch?v=gyMwXuJrbJQ">
          Blockchain, Solidity and Full Stack Web3 development
        </LinkText>
        .
      </>
    ),
    tags: ['Apps', 'Typescript', 'React', 'React-Native', 'Firebase', 'Blockchain'],
    href: '',
  },
  {
    image: RecycledFilament,
    title: 'Recycled Filament',
    description: (
      <>
        Before leaving South Africa, I took on an (overly) ambitious project, with the aim of
        providing jobs to people living in the townships by collecting recyclable plastic and
        turning it into 3D printer filament PLA. This was a huge project and involved a bit of
        everything, 3D design and printing, electronics, mechanical engineering and coding of
        course. I got as far as ordering all the parts and built the filament puller unit. After
        receiving our Australian visa, I had to handover the reigns to someone else. It was good fun
        though!
      </>
    ),
    tags: ['3D Printing', 'Electronics', 'Arduino', 'Fusion 360'],
    href: 'https://cults3d.com/en/3d-model/various/filament-extruder-puller',
  },
  {
    image: ByrnaPistolHolster,
    title: 'Byrna Pistol Holster',
    description: (
      <>
        I had an air pistol for self-defence (just South African things) and needed a place to keep
        it in my bakkie (aka UTE, pickup truck). I designed and 3D printed a holster that fitted
        perfectly in the center console. It was a fun project and I felt like a cowboy every time I
        pulled it out 😂
      </>
    ),
    tags: ['3D Printing', 'Fusion 360', 'Busting caps'],
    href: 'https://cults3d.com/en/3d-model/tool/byrna-pistol-holster-for-ford-ranger-centre-console',
  },
  {
    image: NouBraai,
    title: 'Nou Braai',
    description: (
      <>
        During my electronics obsession phase, I built a mobile app that connects to my home-made
        bluetooth temperature sensor to be used in &quot;braaing&quot; aka cooking on fire because
        yolo 🔥
      </>
    ),
    tags: ['Apps', 'Typescript', 'React', 'React-Native', 'Arduino', 'Electronics', 'Bluetooth'],
    href: '',
  },
  {
    image: FatBuckV1,
    title: 'Fat Buck (v1, v2)',
    description: (
      <>
        Another crypto-based personal project, Fat Buck was <LinkText href="">originally</LinkText>{' '}
        created to analyse stocks on the NYSE, JSE and Australian stock market using{' '}
        <LinkText href="https://www.investopedia.com/terms/b/bengraham.asp">
          Benjamin Graham&apos;s value investing techniques
        </LinkText>
        . After realising that everything on the market was significantly overvalued, I pivoted to a
        crypto trading bot (naturally 😂). After a year of usage, I broke even lol.
      </>
    ),
    tags: ['Apps', 'Typescript', 'React', 'React-Native', 'Firebase', 'Python'],
    href: '',
  },
  {
    image: Launchasaur,
    title: 'Launchasaur',
    description: (
      <>
        Before I started using a Macbook and discovered Shortcuts (Windows meh), I created a{' '}
        cross-platform Electron app that would allow me to trigger multiple open/close
        apps/files/links actions at once, e.g. Open Spotify, Open VSCode, Open Terminus, Open
        Calendar, Open Email in one action.
      </>
    ),
    tags: ['Apps', 'Typescript', 'React', 'Electron', 'Firebase'],
    href: 'https://github.com/shaunsaker/launchasaur',
  },
  {
    image: Bloutand,
    title: 'Bloutand',
    description: (
      <>
        An Electron app that used the experimental Web Bluetooth api to scan for nearby BLE devices,
        connect/disconnect to them and read and display battery level values from the connected
        device 🔵🦷
      </>
    ),
    tags: ['Apps', 'Typescript', 'React', 'React-Native', 'Firebase', 'Bluetooth', 'BLE'],
    href: 'https://github.com/shaunsaker/bloutand',
  },
  {
    image: Aisle5,
    title: 'Aisle 5',
    description: (
      <>
        A mobile app predicts your grocery usage the more you use it, no more shopping lists!
        Automatic grocery ordering WIP.
      </>
    ),
    tags: ['Apps', 'Typescript', 'React', 'React-Native', 'Firebase'],
    href: 'https://github.com/shaunsaker/aisle-5-v2',
  },
  {
    image: CVD19ZA,
    title: 'CVD19ZA',
    description: (
      <>
        A mobile app that automatically notified users of new COVID stats in South Africa (it was
        such a hot topic back then 😅).
      </>
    ),
    tags: ['Apps', 'Javascript', 'React', 'React-Native', 'Firebase'],
    href: 'https://github.com/shaunsaker/covid-19-south-africa-app',
  },
  {
    image: PatioRoof,
    title: 'Patio Roof',
    description: (
      <>
        After our first home reno, the existing patio roof was really letting the house down. I
        designed and built a new one from scratch. It was an awesome, rewarding project 🏡
      </>
    ),
    tags: ['Home', 'Construction', 'Figma'],
  },
  {
    image: HouseReno1,
    title: 'House Reno #1',
    description: (
      <>
        First home, first reno project! We bought a fixer-upper in South Africa and project-managed
        it ourselves, keeping the costs fairly low in the process.
      </>
    ),
    tags: ['Home', 'Construction', 'Renovation', 'Figma'],
  },
  {
    image: WineMe,
    title: 'Wine Me',
    description: (
      <>
        Who doesn't love a good wine farm! One of my first projects was to build a mobile app that
        helps you to find the next best wine farm that you haven&apos;t visited, closest to you!
      </>
    ),
    tags: ['Apps', 'Javascript', 'React', 'React-Native', 'Firebase'],
    href: 'https://github.com/shaunsaker/wine-me',
  },
  {
    image: IdeaMe,
    title: 'Idea Me',
    description: (
      <>
        The OG in my repertoire 😎 A mobile app that allows you to capture and organise your ideas,
        thoughts and notes.
      </>
    ),
    tags: ['Apps', 'Javascript', 'React', 'React-Native', 'Firebase'],
    href: 'https://github.com/shaunsaker/idea-me-app',
  },
]
