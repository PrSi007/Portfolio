import image1 from '../../images/education.svg'
import image2 from '../../images/internship.svg'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Education',
  description1: 'Currently persuing Btech in Computer Science and Engineering from SRM IST (Current CGPA - 9.86)',
  description2: 'Higher Secondary School - Hartmann College    (Class  10th- 94.4%              Class  12th - 93.75%)',
  buttonLabel: '👨‍🎓',
  imgStart: false,
  img: image1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false 
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Internships',
    description1: 'Front End Developer - The Experitos Studio ... (May 2021-July 2021)',
    description2: 'Full Stack Developer - Eamvey (July 2021-Present)',
    buttonLabel: '💻',
    imgStart: true,
    img: image2,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true 
  };
