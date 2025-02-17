import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

// Updated Dummy data with streaming links
const dummyData = [
  {
    adult: false,
    backdrop_path: "/6aYZjRsRCDGuzWbNo43Jsi2thh.jpg",
    genre_ids: [12, 14, 10749, 10751],
    id: 2270,
    original_language: "en",
    original_title: "Stardust",
    overview: "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm. His journey takes him into a world beyond his wildest dreams and reveals his true identity.",
    popularity: 32.938,
    poster_path: "/7zbFmxy3DqKYL2M8Hop6uylp2Uy.jpg",
    release_date: "2007-08-09",
    title: "Stardust",
    video: false,
    vote_average: 7.277,
    vote_count: 3937,
    stars: 0, // Add star count property
    streamingLinks: {
      'Netflix': 'https://www.netflix.com/watch/2270',
      'Hulu': 'https://www.hulu.com/watch/2270',
      'Prime Video': 'https://www.amazon.com/dp/B07Q8G6JP9',
      // Add other services...
    },
  },
  {
    adult: false,
    backdrop_path: "/gl0jzn4BupSbL2qMVeqrjKkF9Js.jpg",
    genre_ids: [12, 14, 16],
    id: 128,
    original_language: "ja",
    original_title: "もののけ姫",
    overview: "Ashitaka, a prince of the disappearing Emishi people, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
    popularity: 91.744,
    poster_path: "/cMYCDADoLKLbB83g4WnJegaZimC.jpg",
    release_date: "1997-07-12",
    title: "Princess Mononoke",
    video: false,
    vote_average: 8.338,
    vote_count: 7779,
    stars: 0, // Add star count property
    streamingLinks: {
      'Netflix': 'https://www.netflix.com/watch/128',
      'Hulu': 'https://www.hulu.com/watch/128',
      'Prime Video': 'https://www.amazon.com/dp/B01M7TE0ON',
      // Add other services...
    },
  },
  {
    adult: false,
    backdrop_path: "/sEDxbBJUgz3cM5cRr7HESlThTJS.jpg",
    genre_ids: [878, 35, 12, 10749],
    id: 11379,
    original_language: "en",
    original_title: "The Adventures of Buckaroo Banzai Across the 8th Dimension",
    overview: "Adventurer/surgeon/rock musician Buckaroo Banzai and his band of men, the Hong Kong Cavaliers, take on evil alien invaders from the 8th dimension.",
    popularity: 23.944,
    poster_path: "/a7K5OcylQbWtCbrUzegfi31yaSs.jpg",
    release_date: "1984-08-15",
    title: "The Adventures of Buckaroo Banzai Across the 8th Dimension",
    video: false,
    vote_average: 6.001,
    vote_count: 407,
    stars: 0, // Add star count property
    streamingLinks: {
      'Netflix': 'https://www.netflix.com/watch/11379',
      'Hulu': 'https://www.hulu.com/watch/11379',
      'Prime Video': 'https://www.amazon.com/dp/B00JAGK7UI',
      // Add other services...
    },
  },
  {
    adult: false,
    backdrop_path: "/nM0wz41xkEoVbRiEZLBAMaR9WfI.jpg",
    genre_ids: [18, 35, 53],
    id: 930564,
    original_language: "en",
    original_title: "Saltburn",
    overview: "Struggling to find his place at Oxford University, student Oliver Quick finds himself drawn into the world of the charming and aristocratic Felix Catton, who invites him to Saltburn, his eccentric family's sprawling estate, for a summer never to be forgotten.",
    popularity: 76.594,
    poster_path: "/zGTfMwG112BC66mpaveVxoWPOaB.jpg",
    release_date: "2023-11-16",
    title: "Saltburn",
    video: false,
    vote_average: 7,
    vote_count: 2129,
    stars: 0,
    streamingLinks: {
      'Netflix': 'https://www.netflix.com/watch/930564',
      'Hulu': 'https://www.hulu.com/watch/930564',
      'Prime Video': 'https://www.amazon.com/dp/B0BFH94K47',
      // Add other services...
    },
  },
  {
    adult: false,
    backdrop_path: "/961whEpBogUiP8JWvacwR7WWrLD.jpg",
    genre_ids: [12, 18, 35],
    id: 4538,
    original_language: "en",
    original_title: "The Darjeeling Limited",
    overview: "Three American brothers who have not spoken to each other in a year set off on a train voyage across India with a plan to find themselves and bond with each other -- to become brothers again like they used to be. Their \"spiritual quest\", however, veers rapidly off-course (due to events involving over-the-counter pain killers, Indian cough syrup, and pepper spray).",
    popularity: 24.891,
    poster_path: "/oSW5OVXTulaIXcoNwJAp5YEKpbP.jpg",
    release_date: "2007-09-07",
    title: "The Darjeeling Limited",
    video: false,
    vote_average: 7.166,
    vote_count: 3469,
    stars: 0,
    streamingLinks: {
      'Netflix': 'https://www.netflix.com/watch/4538',
      'Hulu': 'https://www.hulu.com/watch/4538',
      'Prime Video': 'https://www.amazon.com/dp/B000J2I3P2',
      // Add other services...
    },
  },
  {
    adult: false,
    backdrop_path: "/60qVuzQOKgyD57tsgBceT5ScCSX.jpg",
    genre_ids: [99, 10749, 53],
    id: 1214488,
    original_language: "en",
    original_title: "Skywalkers: A Love Story",
    overview: "Two real-life daredevils test the limits of their love and trust by illegally scaling one of the world's tallest buildings to perform an acrobatic stunt.",
    popularity: 35.386,
    poster_path: "/7A4x0D1gNTpmMn9E9BW9hWiaOkv.jpg",
    release_date: "2024-07-12",
    title: "Skywalkers: A Love Story",
    video: false,
    vote_average: 7.192,
    vote_count: 38,
    stars: 0, // Add star count property
    streamingLinks: {
      'Netflix': 'https://www.netflix.com/watch/1214488',
      'Hulu': 'https://www.hulu.com/watch/1214488',
      'Prime Video': 'https://www.amazon.com/dp/B0BFH6N9BN',
      // Add other services...
    },
  },
  {
    adult: false,
    backdrop_path: "/hMgv7XDGuAv7phKNjqMUAvDFjbN.jpg",
    genre_ids: [18],
    id: 97173,
    origin_country: ["GB"],
    original_language: "en",
    original_name: "Behind Her Eyes",
    overview: "A single mother enters a world of twisted mind games when she begins an affair with her psychiatrist boss while secretly befriending his mysterious wife.",
    popularity: 78.79,
    poster_path: "/sfd90NIf778KoBFmpdBTow4xTm7.jpg",
    first_air_date: "2021-02-17",
    name: "Behind Her Eyes",
    vote_average: 7.414,
    vote_count: 503,
    stars: 0,
    streamingLinks: {
      'Netflix': 'https://www.netflix.com/watch/97173',
      'Hulu': 'https://www.hulu.com/watch/97173',
      'Prime Video': 'https://www.amazon.com/dp/B08W9BN1K6',
      // Add other services...
    },
  },
];

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(dummyData);
  const [personalQueue, setPersonalQueue] = useState([]);

  // Effect to fetch data if needed (uncomment if you need to fetch actual data)
  /*
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch('/api/favorites'); // Example API endpoint
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setFavorites(data);
      } catch (error) {
        console.error('Failed to fetch favorites:', error);
      }
    };
    fetchFavorites();
  }, []);
  */

  const toggleFavorite = (item) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.find((fav) => fav.id === item.id);

      // Prevent multiple favoriting
      if (isFavorite && isFavorite.stars > 0) {
        return prevFavorites;
      }

      if (isFavorite) {
        return prevFavorites.map((fav) =>
          fav.id === item.id ? { ...fav, stars: fav.stars + 1 } : fav
        );
      } else {
        return [...prevFavorites, { ...item, stars: 1 }];
      }
    });
  };

  const addToPersonalQueue = (item) => {
    setPersonalQueue((prevQueue) => {
      if (!prevQueue.some((queueItem) => queueItem.id === item.id)) {
        const newQueue = [...prevQueue, item];
        return newQueue;
      }
      return prevQueue;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, personalQueue, toggleFavorite, addToPersonalQueue }}>
      {children}
    </FavoritesContext.Provider>
  );
};
