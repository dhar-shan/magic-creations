import PrepVideo_2 from "../assets/services/prep_02.mp4"
import CompVideo from "../assets/services/comp_01.mp4"
import PrepVideo from "../assets/services/prep_01.mp4"
import vid3d_01 from "../assets/services/3D_01.mp4"
import vid3d_02 from "../assets/services/3D_02.mp4"

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
    category: "Prep",
    title: "Plate Preparation",
    description: "Clean plate and object removal work.",
    video: PrepVideo_2,
  },

  {
    id: 2,
    category: "Prep",
    title: "Object Removal",
    description: "Clean plate and object removal work.",
    video: PrepVideo,
  },

  {
    id: 3,
    category: "Compositing",
    title: "CG Integration",
    description: "CG integration and final shot compositing.",
    video: CompVideo,
  },

{
     id: 4,
     category: "3D",
     title: "3D Animation",
     description: "3D animation and modeling.",
     video: vid3d_01,
  },

  {
    id: 5,
    category: "3D",
    title: "3D Motion Design",
    description: "3D motion design and animation.",
    video: vid3d_02,
  }
]