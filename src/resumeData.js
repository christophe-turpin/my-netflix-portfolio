import background from "./assets/background.png";
import INHNI from "./assets/INHNI.png";
import WILD from "./assets/WILD.png";
import OPEN from "./assets/OPEN.png";
import SIMPLON from "./assets/SIMPLON.png";
import FORMADIS from "./assets/FORMADIS.png";
import master_INHNI from "./assets/master_INHNI.jpg";
import attest_WILD from "./assets/attest_WILD.png";
import attest_OPEN from "./assets/attest_OPEN.png";
import attest_FORMADIS from "./assets/attest_FORMADIS.png";
import attest_SIMPLON from "./assets/attest_SIMPLON.png";
import logoBlanc from "./assets/logoBlancC.png";
import management from "./assets/management.jpg";
import nettoyage from "./assets/nettoyage.jpeg";
import Angular from "./assets/Angular.png";
import CSS3 from "./assets/CSS3.png";
import HTML5 from "./assets/HTML5.png";
import JavaScript from "./assets/JavaScript.png";
import MySQL from "./assets/MySQL.png";
import Node from "./assets/Node.png";
import Python from "./assets/Python.png";
import React from "./assets/React.png";
import Scrum from "./assets/Scrum.png";
import Swift from "./assets/Swift.png";
import WordPress from "./assets/WordPress.png";
import chris from "./assets/chris.jpg";
import CV_Christophe_TURPIN from "./assets/CV_Christophe_TURPIN.pdf";
import recursif from "./assets/recursif.png";

let resumeData = {
  imagebaseurl: background,
  name: "Christophe TURPIN",
  role: "Développeur web et mobile fullstack junior",
  linkedinId: "christophe-turpin",
  skypeid: "Your skour LinkedIn Idypeid",
  roleDescription:
    "Présentant une certaine appétance pour le front-end je reste à l'aise en back-end et cherche surtout à monter en compétences afin de pouvoir mener un maximum de projets à leur terme.",
  blockchain: "Blockchain enthousiaste",
  picture: chris,
  CV: CV_Christophe_TURPIN,
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/christophe-turpin/",
      className: "fa fa-linkedin",
    },
    {
      name: "Github",
      url: "https://github.com/christophe-turpin",
      className: "fa fa-github",
    },
    {
      url: "https://www.malt.fr/profile/christopheturpin",
      image:
        "https://res.cloudinary.com/hopwork/image/upload/rebranding2020/malt-logo/malt-red.svg",
    },
  ],
  aboutme:
    "Je suis actuellement à la recherche d'un poste en tant que développeur web et web mobile Junior et travaille en tant que Freelance afin de gagner en expérience et en compétence.",
  address: "Rennes, France",
  website: "daisukeleblonx@gmail.com",
  education: [
    {
      id: "education1",
      type: "education",
      place: "Formadis / LinedIn Learning",
      title: "Développeur web et web mobile Angular",
      period: "Septembre 2020",
      Achievements: "",
      src: attest_FORMADIS,
      background: FORMADIS,
    },
    {
      id: "education2",
      type: "education",
      place: "Wild Code School",
      title:
        "Développeur web et web mobile fullstack junior Javascript(NodeJs, ReactJs)",
      period: "Juillet 2020",
      Achievements: "3 projets, 2 hackathons",
      src: attest_WILD,
      background: WILD,
    },
    {
      id: "education3",
      type: "education",
      place: "Simplon.co",
      title: "Initiation à SWIFT et SWIFT UI",
      period: "Février 2020",
      Achievements: "",
      src: attest_SIMPLON,
      background: SIMPLON,
    },
    {
      id: "education4",
      type: "education",
      place: "OpenClassrooms",
      title: "Démarrez votre projet avec Python",
      period: "Octobre 2019",
      Achievements: "",
      src: attest_OPEN,
      background: OPEN,
    },
    {
      id: "education5",
      type: "education",
      place: "INHNI",
      title: "Master de management du développement du multiservice",
      period: "Octobre 2013",
      Achievements: "",
      src: master_INHNI,
      background: INHNI,
    },
  ],
  work: [
    {
      id: "work1",
      place: "Freelance",
      title: "Nathalie TURPIN Secrétariat",
      period: "De Janvier 2021 à Février 2021",
      Achievements:
        "Site Vitrine pour l'activité de secrétaire Freelance pour le compte de Nathalie TURPIN.",
      hover: "https://zupimages.net/up/21/08/ry3g.png",
      background: logoBlanc,
    },
    {
      id: "work2",
      place: "Freelance",
      title: "Marche Rose Combourg",
      period: "De Juillet 2020 à Septembre 2020",
      Achievements:
        "Page internet d'information, et réservation à l'occasion de la marche contre le cancer organisée par le Rotary Club de Combourg(35).",
      hover: "https://zupimages.net/up/20/37/81yi.png",
      background: logoBlanc,
    },
    {
      id: "work13",
      place: "Freelance",
      title: "STORPE",
      period: "De Mai 2020 à Juillet 2020",
      Achievements: "Application web de paris sportifs communautaires.",
      hover: "https://zupimages.net/up/20/42/6mgf.png",
      background: logoBlanc,
    },
    {
      id: "work5",
      place: "Secteur du nettoyage industriel",
      title: "Manager",
      period: "2008-2019",
      Achievements:
        "Management de contrats d'entretien, relation commerciale et managériale",
      background: nettoyage,
      hover: management,
    },
  ],
  skills: [
    {
      id: "skill1",
      title: "HTML5",
      description: "HyperText Markup Language",
      background: HTML5,
    },
    {
      id: "skill2",
      title: "CSS3",
      description: "Cascading Style Sheets",
      background: CSS3,
    },
    {
      id: "skill3",
      title: "JavaScript",
      description:
        "JavaScript désigne un langage de développement informatique, et plus précisément un langage de script orienté objet.",
      background: JavaScript,
    },
    {
      id: "skill4",
      title: "React",
      description:
        "React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013.",
      background: React,
    },
    {
      id: "skill5",
      title: "Node",
      description:
        "Environnement d'exécution JavaScript pouvant être utilisé pour écrire des services côté serveur appelés API (Application Programming Interface).",
      background: Node,
    },
    {
      id: "skill6",
      title: "MySQL",
      description:
        "Le SQL dans 'MySQL' signifie 'Structured Query Language' : le langage standard pour les traitements de bases de données.",
      background: MySQL,
    },
    {
      id: "skill7",
      title: "Scrum",
      description:
        "Scrum est une méthode de développement agile orientée projet informatique dont les ressources sont régulièrement actualisées.",
      background: Scrum,
    },
    {
      id: "skill8",
      title: "Angular",
      description:
        "Développé par Google, Angular est un Framework open source écrit en JavaScript qui permet la création d'applications Web.",
      background: Angular,
    },
    {
      id: "skill9",
      title: "Python",
      description:
        "Python est un langage de programmation interprété, ... À partir de Python 3.0, print et exec ne sont plus des mots-clés du langage, mais des fonctions du module builtins.",
      background: Python,
    },
    {
      id: "skill10",
      title: "Swift",
      description:
        "Swift est un langage de programmation objet compilé, multi-paradigmes, qui se veut simple, performant et sûr.",
      background: Swift,
    },
    {
      id: "skill11",
      title: "WordPress",
      description:
        "WordPress est un système de gestion de contenu (SGC ou content management system (CMS) en anglais) gratuit, libre et open-source.",
      background: WordPress,
    },
  ],
  portfolio: [
    {
      id: "project1",
      type: "project",
      title: "Le récursif",
      description: "Portfolio récursif.",
      background: recursif,
      url: "https://cv-christophe-turpin.netlify.app",
    },
    {
      id: "project2",
      type: "project",
      title: "Dev Story, la story des devs",
      description:
        "Application de chat que j'améliore et complète dès que je le peux. La version mobile n'est pas encore optimale et sera l'objet d'une prochaine mise à niveau.",
      background: "https://zupimages.net/up/21/11/5omw.png",
      url: "https://devstory-53c17.web.app/",
    },
    {
      id: "project3",
      type: "project",
      title: "Nathalie TURPIN Secrétariat",
      description:
        "Site Vitrine pour l'activité de secrétaire Freelance pour le compte de Nathalie TURPIN.",
      background: "https://zupimages.net/up/21/08/ry3g.png",
      url: "https://www.nathalie-turpin-secretariat.com",
    },
    {
      id: "project4",
      type: "project",
      title: "Marche Rose Combourg",
      description:
        "Page internet d'information, et réservation à l'occasion de la marche contre le cancer organisée par le Rotary Club de Combourg(35).",
      background: "https://zupimages.net/up/20/37/81yi.png",
      url: "https://marche-rose-combourg2020.netlify.app/",
    },
    {
      id: "project5",
      type: "project",
      title: "STORPE",
      description: "Application web de paris sportifs communautaires.",
      background: "https://zupimages.net/up/20/42/6mgf.png",
      url: "https://www.storpe.club/",
    },
    {
      id: "project6",
      type: "project",
      title: "Trizz",
      description:
        "Application React faisant appel à différentes API, cette application possède un quizz et la possibilité de participer à la reforestation mondiale",
      background: "https://zupimages.net/up/20/21/vmaa.png",
      url: "https://trizz.netlify.app/",
    },
    {
      id: "project7",
      type: "project",
      title: "Covid Escape",
      description:
        "Application React réalisée lors d'un hackaton de 24h avec pour thème 'Voyager depuis son canapé'",
      background: "https://zupimages.net/up/20/21/w1yb.png",
      url: "https://goofy-jones-6004d7.netlify.app/",
    },
    {
      id: "project8",
      type: "project",
      title: "WildJourney",
      description:
        "Premier projet d'étude réalisé avec HTML5, CSS3 & Javascript",
      background: "https://zupimages.net/up/20/21/6cv4.png",
      url: "https://christophe-turpin.github.io/WildJourney/index.html",
    },
  ],
  testimonials: [
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
  ],
};

export default resumeData;
