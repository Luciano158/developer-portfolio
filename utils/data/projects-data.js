import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'ERP',
        description: "My team and I developed a comprehensive ERP system equipped with all the essential functionalities a business needs, including Finance, Logistics, Warehousing, and Sales. The ERP seamlessly integrates with the eCommerce site, creating a fully unified platform for streamlined operations.",
        tools: ['Java', 'Postgres', 'Springboot', 'AWS', 'Jmix', 'Vaadin', 'Gradle'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Ecommerce Site',
        description: 'My team and I created an online eCommerce store that integrates seamlessly with ERP systems, ensuring real-time synchronization of sales and inventory data.',
        tools: ['NextJS', 'CahraUI', "Google Maps", "Typescript", "Vercel", "MongoDb"],
        role: 'Full Stack Developer',
        // code: '',
        // demo: '',
         image: ayla,
    },
    {
        id: 3,
        name: 'Mobile App',
        description: 'My team and I developed a mobile application for events, enabling users to check in and network by scanning each other\'s QR codes. Built with Flutter and Dart, the app is deployed on AWS and available on both the Google Play Store and the Apple App Store.',
        tools: ['Flutter', 'Dart', 'Aws', 'Mysql'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Internal Company Projects',
        description: "My team and I developed a suite of internal projects to streamline and automate key processes. We created a system that reads client emails to automate sales workflows, generating quotes instantly for faster response times. Additionally, we built several lead-generation forms for representatives to capture potential clients at events. Our solutions also include a POS system and a Pack Calculator to assist reps with accurate pack sales at events, eliminating miscalculation errors and ensuring smooth, error-free transactions.",
        tools: ['NextJS', 'Material UI', 'ChakraUI', 'Java', 'Javascript','Typescript', "Python", 'Vercel', 'MongoDb', 'AWS', 'Postgres', 'Springboot', 'Jmix', 'Vaadin', 'Gradle'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },