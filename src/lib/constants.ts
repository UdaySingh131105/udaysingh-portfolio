export const myProjects = [
  {
    id: 0,
    title: "Farm Doctor - Maize Disease Prediction App",
    description:
      "A mobile-friendly web application that helps farmers diagnose maize crop diseases using machine learning.",
    subDescription: [
      "Developed a convolutional neural network (CNN) model to classify maize diseases from leaf images.",
      "Built a user-friendly interface with React for easy image upload and disease diagnosis.",
      "Implemented real-time predictions to assist farmers in making informed decisions.",
      "Aimed to improve crop yield and reduce losses due to diseases.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/farm-doctor.jpg",
    tags: [],
  },
  {
    id: 1,
    title: "UrCMS - Content Management System",
    description:
      "A headless content management system (CMS) that allows users to create, manage, and deliver content across multiple platforms.",
    subDescription: [
      "Built with Node.js and Express for the backend, and React for the frontend.",
      "Features a RESTful API for easy integration with various applications.",
      "Supports user authentication and role-based access control.",
      "Includes a rich text editor for content creation and management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/urcms.jpg",
    tags: [],
  },
  {
    id: 2,
    title: "Synopsize - AI Document Summarizer",
    description:
      "An AI-powered document summarization tool that condenses lengthy texts into concise summaries.",
    subDescription: [
      "Built with React for the frontend and Node.js for the backend.",
      "Utilizes OpenAI's GPT-4 API for generating accurate and coherent summaries.",
      "Supports multiple document formats including PDF, DOCX, and plain text.",
      "Features a user-friendly interface for easy document upload and summary retrieval.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/synopsize.jpg",
    tags: [],
  },
  {
    id: 3,
    title: "Symphony Scan",
    description:
      "An AI-powered music recommendation system that suggests songs based on user preferences and listening history.",
    subDescription: [
      "Developed using Python and popular ML libraries like TensorFlow and Scikit-learn.",
      "Implemented audio feature extraction and similarity analysis for better recommendations.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/symphony-scan.jpg",
    tags: [],
  },
  {
    id: 4,
    title: "Basic NFT Collection",
    description:
      "A simple NFT smart contract that demonstrates the fundamental working of NFTs on Ethereum.",
    subDescription: [
      "Deployed on Sepolia testnet and verified on Etherscan.",
      "Implements ERC721 standard with minting functionality.",
      "Used Hardhat for contract deployment and testing.",
      "Built as the foundation for further NFT experiments.",
    ],
    href: "https://sepolia.etherscan.io/address/0x65927914cf5022c4c9542b7c064a5c23551c0fcb#code",
    logo: "",
    image: "/assets/projects/basic-nft.jpg",
    tags: [
      { id: 1, name: "Solidity", path: "/assets/logos/solidity.svg" },
      { id: 2, name: "Hardhat", path: "/assets/logos/hardhat.svg" },
      { id: 3, name: "Etherscan", path: "/assets/logos/etherscan.svg" },
      { id: 4, name: "Sepolia", path: "/assets/logos/ethereum.svg" },
    ],
  },
  {
    id: 5,
    title: "Random IPFS NFT",
    description:
      "An NFT smart contract that stores metadata and assets on IPFS with randomized minting.",
    subDescription: [
      "Implemented Chainlink VRF for randomness in NFT allocation.",
      "Stored and retrieved assets from IPFS nodes.",
      "Enhanced decentralization by moving metadata off-chain.",
      "Deployed and verified on Sepolia testnet.",
    ],
    href: "https://sepolia.etherscan.io/address/0x23553d771f357acce3cf42c24c9aaa37b5cd0c38#code",
    logo: "",
    image: "/assets/projects/random-ipfs.jpg",
    tags: [
      { id: 1, name: "IPFS", path: "/assets/logos/ipfs.svg" },
      { id: 2, name: "Chainlink VRF", path: "/assets/logos/chainlink.svg" },
      { id: 3, name: "Solidity", path: "/assets/logos/solidity.svg" },
      { id: 4, name: "Hardhat", path: "/assets/logos/hardhat.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/udaysingh13112005/",
    icon: "/assets/socials/linkedin.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/Uday131105",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Twitter",
    href: "https://x.com/",
    icon: "/assets/socials/twitter.svg",
  },
];

export const experiences = [
  {
    title: "Blockchain Developer",
    job: "Freelance Projects",
    date: "2023-Present",
    contents: [
      "Built and deployed multiple NFT smart contracts on Sepolia.",
      "Gained hands-on experience with Solidity, Hardhat, and Chainlink.",
      "Worked with decentralized storage solutions like IPFS.",
    ],
  },
  {
    title: "AI/ML Developer",
    job: "Symphony Scan (Music Recommendation System)",
    date: "2024",
    contents: [
      "Developed a music recommendation system using ML models for personalized suggestions.",
      "Implemented audio feature extraction and similarity analysis for better recommendations.",
      "Built a clean UI with React to display personalized playlists.",
      "Explored collaborative and content-based filtering techniques.",
    ],
  },
  {
    title: "Final-Year Project",
    job: "Farm Doctor (Maize Disease Prediction App)",
    date: "2024",
    contents: [
      "Designed an ML model for detecting maize crop diseases from leaf images.",
      "Trained convolutional neural networks (CNNs) for accurate disease classification.",
      "Built a mobile-friendly interface to assist farmers in real-time diagnosis.",
      "Aimed to provide early disease detection and improve crop yield.",
    ],
  },
];

export const reviews = [
  {
    name: "CCIP Bootcamp Team",
    username: "@chainlink",
    body:
      "Uday showed strong skills in blockchain fundamentals and successfully earned the on-chain certificate.",
    img: "https://robohash.org/uday1",
  },
  {
    name: "Peers",
    username: "@college",
    body: "Uday consistently pushes boundaries in AI and blockchain projects.",
    img: "https://robohash.org/uday3",
  },
];
  