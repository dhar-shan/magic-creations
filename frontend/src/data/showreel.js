import Roto_1 from "../assets/services/roto_01.mp4"
import Roto_2 from "../assets/services/roto_02.mp4"
import CompVideo from "../assets/services/comp_01.mp4"
import PrepVideo from "../assets/services/prep_01.mp4"
import vid3d_01 from "../assets/services/3D_01.mp4"
import vid3d_02 from "../assets/services/3D_02.mp4"
import AI_01 from "../assets/services/AI_01.mp4"
import AI_02 from "../assets/services/AI_02.mp4"
import AI_03 from "../assets/services/AI_03.mp4"

export const showreelCategories = [
  "All",
  "Roto",
  "Prep",
  "Compositing",
  "3D",
  "AI",
  "Motion",
]

export const showreelVideos = [

  {
    id: 1,
    category: "Roto",
    title: "Rotoscoping",
    description: "Clean plate and object removal work.",
    video: Roto_1,
  },

  {
    id: 2,
    category: "Roto",
    title: "Plate Preparation",
    description: "Clean plate and object removal work.",
    video: Roto_2,
  },

  {
    id: 3,
    category: "Prep",
    title: "Object Removal",
    description: "Clean plate and object removal work.",
    video: PrepVideo,
  },

  {
    id: 4,
    category: "Compositing",
    title: "CG Integration",
    description: "CG integration and final shot compositing.",
    video: CompVideo,
  },

{
     id: 5,
     category: "3D",
     title: "3D Animation",
     description: "3D animation and modeling.",
     video: vid3d_01,
  },

  {
    id: 6,
    category: "3D",
    title: "3D Motion Design",
    description: "3D motion design and animation.",
    video: vid3d_02,
  },

  {
    id: 7,
    category: "AI",
    title: "AI Generated Content",
    description: "AI generated content and effects.",
    video: AI_01,
  },
  {
    id: 8,
    category: "AI",
    title: "AI Enhanced Effects",
    description: "AI enhanced effects and animations.",
    video: AI_02,
  },
  {
    id: 9,
    category: "AI",
    title: "AI Character Animation",
    description: "AI character animation and rigging.",
    video: AI_03,
  }
]