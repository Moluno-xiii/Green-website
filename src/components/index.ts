type SongsProp = {
  id: number;
  embed: string;
};

const songsData: SongsProp[] = [
  {
    embed: `<iframe className="border-radius:12px"
    src="https://open.spotify.com/embed/track/44gmXwbdHjwQsQvsiraj14?utm_source=generator&theme=0" width="100%"
    frameBorder="0" 
     allowFullScreen=${true} 
     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    id: 1,
  },
  {
    embed: `<iframe 
    className="border-radius:12px" 
    src="https://open.spotify.com/embed/track/0ZVIFoXWwjdyKJ6Jo6QdD2?utm_source=generator&theme=0" 
    width="100%" 
    frameBorder="0"
    allowFullScreen=${true}
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    id: 2,
  },
  {
    embed: `<iframe
        className="border-radius:12px"
        src="https://open.spotify.com/embed/track/79DPYZ6x8FfzgSgPoPhpC3?utm_source=generator"
        width="100%"
        frameBorder="0"
        allowFullScreen=${true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>`,
    id: 3,
  },
  {
    embed: `<iframe className="border-radius:12px" src="https://open.spotify.com/embed/track/5iHC401tsNlJRY46ECSYbo?utm_source=generator&theme=0" width="100%" frameBorder="0" allowFullScreen=${true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    id: 4,
  },
];

export default songsData;
