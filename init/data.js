const posts = [
    {
      title: "Surfer Riding a Massive Wave in Hawaii",
      description: "A skilled surfer gracefully rides a towering wave off the coast of Oahu, Hawaii. The crystal-clear water and vibrant blue sky create a stunning backdrop for this exhilarating sport.",
      image: {
        url: "https://media.istockphoto.com/id/1440982560/photo/surfer-riding-a-wave-in-the-ocean-on-a-sunny-day-in-kailua-kona-big-island-in-hawaii.jpg?s=1024x1024&w=is&k=20&c=TODI_Y55BJyKKdka0pLQDhjaN01mWdaTEnx-Oj5vI0c=",
        filename: "surfer-hawaii.jpg"
      }
    },
    {
      title: "Lion Cub Cuddling with Its Mother in South Africa",
      description: "A heartwarming scene of a lion cub nuzzling up to its mother in the wilds of South Africa. The cub's playful energy and the mother's protective love are captured in this tender moment.",
      image: {
        url: "https://images.unsplash.com/photo-1496368047060-2225dc0a96b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "lion-cub-mother.jpg"
      }
    },
    {
      title: "Colorful Street Art in London's Brick Lane",
      description: "A vibrant mural painted on a brick wall in London's Brick Lane neighborhood showcases the city's diverse and creative spirit. The artwork's bold colors and intricate patterns create a visually arresting scene.",
      image: {
        url: "https://images.unsplash.com/photo-1582144503536-8b7465bc07b3?q=80&w=1537&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "brick-lane-street-art.jpg"
      }
    },
    {
      title: "Hiking to a Breathtaking Mountain Summit in Nepal",
      description: "A group of hikers reach the peak of a mountain in Nepal, rewarding themselves with panoramic views of the snow-capped Himalayas. The sense of accomplishment and the awe-inspiring scenery make this a truly unforgettable experience.",
      image: {
        url: "https://images.unsplash.com/photo-1516477485464-abbcea8f9b1f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "nepal-mountain-summit.jpg"
      }
    },
    {
      title: "Chef Preparing a Delicious Sushi Platter in Tokyo",
      description: "A skilled sushi chef meticulously crafts a colorful platter of fresh seafood, showcasing the precision and artistry of Japanese cuisine. The vibrant colors and delicate presentation make this dish a feast for the eyes as well as the taste buds.",
      image: {
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "sushi-platter-tokyo.jpg"
      }
    },
    {
        title: "Stargazing Under a Milky Way Galaxy in Chile",
        description: "Experience the awe of a starry night sky like never before, gazing up at the Milky Way's countless stars and mesmerizing swirls of light in the remote wilderness of Chile.",
        image: {
          url: "https://images.unsplash.com/photo-1443479579455-1860f114bf77?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "milky-way-chile.jpg"
        }
    },
    {
        title:"Autumn Hike Through Vibrant Foliage",
        description:" Immerse yourself in the breathtaking beauty of autumn with this scenic hike through a forest ablaze with fiery oranges, deep reds, and golden yellows. Crisp air, crunching leaves underfoot, and stunning vistas await.",
        image:{
            url:"https://img.freepik.com/premium-photo/forest-trail-through-vibrant-autumn-foliage_419341-105365.jpg?w=740",
            filename:"forest-tail.jpg",
        }
    },
    {
        title:"Cozy Coffee Shop Vibes",
        description:"Escape the hustle and bustle and find your zen in a charming coffee shop. Warm aroma of freshly brewed coffee, soft jazz playing in the background, and a comfy armchair to curl up with a good book - pure bliss.",
        image:{
            url:"https://img.freepik.com/premium-photo/cozy-vibes-coffee-shop-corner_506134-7020.jpg",
            filename:"shopcorner.jpg",
        }
    },
    {
        title:"Stargazing Under a Milky Way Canvas",
        description:"Lie back and be mesmerized by the celestial spectacle of the Milky Way galaxy. Countless stars twinkle like diamonds against the inky black canvas, leaving you feeling humbled and awestruck by the vastness of the universe.",
        image:{
            url:"https://afar.brightspotcdn.com/dims4/default/903d115/2147483647/strip/false/crop/1600x1067+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fce%2F35%2Fd452fd24a3d5b92e8bf9462fb254%2Foriginal-under-20canvas-20lake-20powell-101-travisburke.jpg",
            filename:"tarskin.jpg",
        }
    },
    {
        title:"Bustling Cityscape Panorama",
        description:"Take in the vibrant energy of a bustling cityscape from a rooftop vantage point. Skyscrapers pierce the clouds, streets teem with activity, and twinkling lights paint the night sky. It's a symphony of urban life.",
        image:{
            url:"https://as1.ftcdn.net/v2/jpg/05/72/19/58/1000_F_572195846_MR08BdQ51VrLInApG4kCKi88Idy6z13B.jpg",
            filename:"busting.jpg",
        }
    },
    {
        title:"Serene Sunrise Over Calm Waters",
        description:" Witness the gentle magic of a sunrise over a tranquil lake or ocean. Soft pastel hues paint the sky, reflecting in the mirror-like stillness of the water. It's a moment of pure serenity and hope for a new day.",
        image:{
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5kX9jiAxGrg7zVQkWRn07UPj9FZSJPgKniw&usqp=CAU",
            filename:"sunrise.jpg",
        }
    },
    {
        title:"Masterful Baker Crafting Artisan Bread",
        description:"Observe the artistry of a baker kneading dough, shaping loaves, and watching them rise to golden perfection in a wood-fired oven. The aroma of fresh bread fills the air, promising a feast for the senses.",
        image:{
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX6BiZ6Ma8-IkgRIxBWwbY2egxwpMa5Yt0A&usqp=CAU",
            filename:"bread.jpg",
        }
    },
    {
        title:"Playful Puppies Frolicking in a Park ",
        description:"Sun-kissed fur dances in the breeze as a whirlwind of fluffy pups pirouette across the emerald expanse. Tiny paws patter a playful rhythm, punctuated by gleeful barks and the rustle of leaves surrendering to puppy kisses.",
        image:{
            url:"https://as2.ftcdn.net/v2/jpg/05/75/45/79/1000_F_575457928_NXWjMduj5SNbgHwK818YPtW7hjNwtaCQ.jpg",
            filename:"Unleash your inner child and be charmed by the boundless energy of puppies frolicking in a park. Chasing butterflies, wrestling with each other, and rolling in the grass - pure joy in its simplest form.",
        }
    },
    {
        title:" Vibrant Coral Reef teeming with Life",
        description:"Dive into the underwater wonderland of a vibrant coral reef teeming with colorful fish, graceful sea turtles, and playful dolphins. It's a kaleidoscope of life and a reminder of the importance of protecting our oceans.",
        image:{
            url:"https://static.vecteezy.com/system/resources/previews/030/627/074/large_2x/vibrant-coral-reefs-teeming-with-life-free-photo.jpg",
            filename:"coral.jpg",
        }
    },
    {
        title:"Majestic Redwoods Soaring Towards the Sky",
        description:"Stand in awe beneath the towering giants of a redwood forest. Ancient trees reaching for the sky, sunlight filtering through the canopy, and a sense of timelessness pervading the air - a humbling experience.",
        image:{
            url:"https://static.wixstatic.com/media/db9336_b0303628c6f844aeb79f21d929ec21b1~mv2.jpeg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/db9336_b0303628c6f844aeb79f21d929ec21b1~mv2.jpeg",
            filename:"redwood.jpg",
        }
    },
    {
        title:"Live Music Captivating a Crowded Arena",
        description:"Feel the energy pulsate through a packed arena as a band belts out electrifying music. Dazzling lights, synchronized movements, and shared passion unite the crowd in a moment of collective euphoria.",
        image:{
            url:"https://images.travelandleisureasia.com/wp-content/uploads/sites/7/2023/06/07164915/Concerts-in-KL-FI-1600x900.jpg",
            filename:"consert.jpg",
        }
    },
    {
        title: "Web Development Tips: CSS Grid",
        description: "Exploring the power of CSS Grid for responsive web design. It's a game-changer! #WebDevelopment #CSSGrid",
        image:{
            url:"https://cdn.mos.cms.futurecdn.net/7vpUPMSbPfhxiUNYj5XnE6.jpg",
            filename:"grid.jpg",
        }
    },
    {
        title: "Book Club Pick: 'The Great Gatsby'",
        description: "Our book club is diving into 'The Great Gatsby' this month. Classic literature discussions await! #BookClub #Literature",
        image:{
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvh7ORzm_OXk6-9_vKxUSFCwYUJSfd4_S75A&usqp=CAU",
            filename:"bookclub.jpg",
        }
    },
    {
        title: "Fitness Challenge: 30 Days of Yoga",
        description: "Joining a 30-day yoga challenge to improve flexibility and overall well-being. Let's do this! #Fitness #Yoga",
        image:{
            url:"https://i.pinimg.com/originals/65/55/a2/6555a23f76f1603906bdc4922e70ca2b.jpg",
            filename:"yoga.jpg",
        }
    },
    {
        title: "Coffee Chronicles: Espresso Adventures",
        description: "Embarking on a journey to discover the perfect espresso. Coffee enthusiasts, any recommendations? #CoffeeLover #Espresso",
        image:{
            url:"https://media.istockphoto.com/id/1400194993/photo/cappuccino-art.webp?s=1024x1024&w=is&k=20&c=i3jaDBeWPUBrDC7qU4-sb1FuxcpbDvlglGjQw7AYuf0=",
            filename:"coffee.jpg",
        }
    },
    {
        title: "Fitness Challenge: 100 Push-ups a Day",
        description: "Taking on the 100 push-ups a day challenge for improved strength and endurance. Day 1, here we go! #FitnessChallenge #Workout",
        image:{
            url:"https://images.unsplash.com/photo-1527933053326-89d1746b76b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename:"fit.jpg",
        }
    },
    {
        title: "Technology Trends: AI and Machine Learning",
        description: "Exploring the latest trends in AI and machine learning. The future is now! #TechTrends #AI",
        image:{
            url:"https://media.istockphoto.com/id/1463261378/photo/artificial-intelligence-concept-cpu-quantum-computing.jpg?s=1024x1024&w=is&k=20&c=1xrnfwW5wnVQTQmDaGKlEVi2iuGEldAtL5XPzKG_zKE=",
            filename:"machine.jpg",
        }
    },
    {
        title: "Movie Buff Marathon: Classic Hollywood Films",
        description: "Planning a movie marathon featuring classic Hollywood films. Time to appreciate the golden age of cinema! #MovieBuff #ClassicFilms",
        image:{
            url:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename:"movie.jpg",
        }
    },
    {
        title: "Gourmet Cooking: French Cuisine Delights",
        description: "Embarking on a culinary journey to master classic French dishes. Bon appétit! #Cooking #FrenchCuisine",
        image:{
            url:"https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename:"cooking.jpg",
        }
    },
    {
        title: "Movie Night Recommendation: 'Inception'",
        description: "Revisited the mind-bending movie 'Inception.' Christopher Nolan's masterpiece never gets old! #MovieNight #Recommendation",
        image:{
            url:"https://m.media-amazon.com/images/S/pv-target-images/26677df38123a3a1553d704477c100af81b641e1d539bc1991f99f89935f18b0.jpg",
            filename:"inception.jpg",
        }

    }
  
]

module.exports={posts};