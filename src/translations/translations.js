// My tanslation what will use on this application (es/en)
export const translations = {

    "es": {
        "home": "Inicio",
        "resume": "Currículum",
        "portfolio": "Proyectos",
        "logo": "Portafolio",
        "name": "Adán Lazcano",
        "profile": "Full-Stack Developer",
        "desc": "Me encanta trabajar con stacks como Node.JS, React.JS, MongoDB, PHP & MySQL.",
        "btnCv": "Descargar CV",
        "contact": "Contacto",
        "education": "Educación",
        "degree": "Licenciatura en Informática",
        "skills": "Habilidades Técnicas",
        "languages": ["Idiomas", "Español", "Inglés"],
        "perfil": "Perfil",
        "perfilText": "Desarrollador Full-Stack con más de 10 años de experiencia, me considero una persona que le gustan los retos y la resolución de problemas. Me encanta el aprendizaje autodidacta y considero que tengo un alto sentido del compromiso y la responsabilidad, estoy acostumbrado a trabajar por objetivos y asumir los retos que se presenten. Me considero una persona de buena actitud y actualmente estoy en busca de nuevos proyectos que me lleven a un mayor crecimiento laboral.",
        "experience": "Experiencia",
        "jobs": [{
                "year": "2020-2021",
                "company": "Universidad de Guadalajara",
                "position": "Desarrollador Web",
                "stack": ['React.js', 'Express.js', 'MongoDB'],
                "desc": "Participe con un equipo de desarrolladores pertenecientes al departamento de sistemas de la Universidad de Guadalajara, me encomendaron automatizar el proceso de generación de actas para los estudiantes de el Centro Universitario de Ciencias Económico Administrativas (CUCEA) tales como CENEVAL, reporte de servicio social, reporte de prácticas profesionales y examen profesional, logrando eficientar el proceso anterior que consistía en realizar manualmente dicha acta en un editor de texto, en la actualidad se cuenta con el módulo en producción y te permite generar el acta por categoría, consultar en cualquier momento la lista de actas por estudiante, reduciendo el tiempo que duraba este proceso."
            },
            {
                "year": "2015-2020",
                "company": "PLANINCORP",
                "position": "Desarrollador Web",
                "stack": ['PHP', 'MySQL', 'React.js', 'Express.js', 'MongoDB'],
                "desc": "Empresa de OUTSOURCING dedicada ofrecer servicios de subcontratación para diversas empresas importantes de JALISCO, QUERETARO, LOS CABOS, MONTERREY y diversos estados del país. En la cual tuve la oportunidad de trabajar en diversos proyectos de innovación de algunos sistemas que ya estaban obsoletos, se realizó su análisis correspondiente y se estuvo trabajando en diversos sistemas de gestión (NOMINAS, FACTURACIÓN, MANEJO DE PERSONAL, COMPRAS Y CLIENTES). Tuve la oportunidad de participar en uno de los proyectos más importantes de la empresa el cual un sistema de facturación de más de 60 mil timbrados de manera mensual, en el cual estuvimos trabajando en la implementación de las actualizaciones de la guía del SAT de nóminas y facturación. Gracias a la innovación que se realizó en diversos sistemas se redujeron las jornadas laborales de los empleados, ya que normalmente el área de nóminas tenia jornadas muy pesadas en las cuales se realizaban muchas horas extras, se logró disminuir el tiempo en el que se realizaban diversos procesos en los sistemas de gestión de la empresa."
            },
            {
                "year": "2013-2020",
                "company": "FreeLancer",
                "position": "Desarrollador Web",
                "stack": ['React.js', 'Express.js', 'MongoDB', 'SQL Server', '.NET', 'PHP', 'MySQL'],
                "desc": "He participado en diversos proyectos de manera Freelance, por ejemplo: Diseño y desarrollo de paginas web, Carrito de compras, Ventas de software de tecnología. Desarrolle la capacidad de trabajar por objetivos y logre una mayor organización en mi tiempo, optimizando así el cumplimento en tiempo y forma de los proyectos para mis clientes."
            },
            {
                "year": "2008-2013",
                "company": "Secretaría de Educación",
                "position": "Responsable Informático",
                "stack": ['.NET', 'SQL Server', 'PHP', 'MySQL', 'Vanilla JavaScript'],
                "desc": "Capacitación de personal en temas de manejo de software (Ofimática, Programación C#, Programación Web).  Mantenimiento Preventivo y Correctivo de hardware y software. Generación de reportes y estadísticas, Monitoreo, Mantenimiento / desarrollo de sistemas, Estrategias de innovación de proyectos IT, Manejo y optimización de base de datos, Pruebas y corrección de errores. Se realizaron diversos proyectos los cuales se lograron concluir satisfactoriamente logrando así que los procesos que se manejaban de manera manual y tomaban demasiado tiempo, se pudieran llevar mediante un sistema y agilizar los tiempos, así como contar con la información en el momento que se necesite de forma rápida y sencilla."
            }
        ],

        "interest": ["Intereses", "Música", "Viajar", "Leer", "Ejercicio"],

        "projects": [{
                "name": "Generador de Actas",
                "img": "actasudg.png",
                "desc": "Este demo consta de 10 personas simulando pertenecer a la UDG como alumnos, con la finalidad de mostrar la generación de actas (CENEVAL, Informe de servicio social, Informe de prácticas profesionales, Examen Profesional) de cada uno de ellos. Este demo permite guardar el acta generada, mostrar la lista de las actas generadas, descargarlas en PDF y eliminar cualquier acta.",
                "stacks": ["React.JS", "Express.JS", "MongoDB"],
                "code": "https://github.com/adanlazcano/actas-udg-front-end",
                "page": "https://actas-udg.netlify.app"
            },
            {
                "name": "Aguarama",
                "img": "aguarama.png",
                "desc": "Registro de participantes que acuden a llenar su garrafón de agua. Al llenado de un garrafón, al cliente se le asigna una estrella, cuando acumula 5 llenados es merecedor de un boleto con folio generado por el sistema, para la rifa de una TV de 43''.",
                "stacks": ["React.JS", "Express.JS", "MongoDB"],
                "code": "https://github.com/adanlazcano/aguarama-star-counter-server",
                "page": "https://aguarama.netlify.app/"
            },
            {
                "name": "Yanel",
                "img": "yanel.png",
                "desc": "Carrito de compras en Vanilla Javascript & PHP mediante transferencias OpenPay, creado para Yanel bolsas y accesorios. Guadalajara, Jalisco MX.",
                "stacks": ["Vanilla JavaScript", "PHP", "MySQL"],
                "code": "https://github.com/adanlazcano/yanel",
                "page": "https://yanel.netlify.app/"
            },
            {
                "name": "Generador de Currículums",
                "img": "currigen.png",
                "desc": "Puedes generar tu curriculum a partir de una plantilla dinámica que puedes editar en cualquier momento que lo desees y tu información se almacenará de forma local en tu navegador y la puedes consultar en cualquier momento. La página te permite subir tu fotografía, datos personales , 1 o más Redes Sociales, Habilidades, Experiencia, Cursos, Idiomas e Intereses. Al finalizar de llenar tu información podrás descargar la plantilla en formato PDF.",
                "stacks": ["React.JS"],
                "code": "https://github.com/adanlazcano/resume_generator",
                "page": "https://currigene.netlify.app/"
            },
            {
                "name": "Sistema de compras",
                "img": "planincorp.png",
                "desc": "Este sistema te permite dar de alta personal, áreas, proveedores, categorías, productos y compras; también descargar los formatos de compras en PDF y el inventario exportarlo a EXCEL.",
                "stacks": ["JavaScript", "JQuery", "PHP (MVC)", "MySQL"],
                "code": "https://github.com/adanlazcano/planincorp",
                "page": "http://planincorp.42web.io/"
            },
            {
                "name": "Portafolio",
                "img": "portfolio.png",
                "desc": "Portafolio Personal donde muestro mis recientes y destacados proyectos a través de mi experiencia profesional y laboral, así como la descarga de mi CV en español e inglés.",
                "stacks": ["React.JS"],
                "code": "https://github.com/adanlazcano/portafolio",
                "page": "https://adanlazcano.netlify.app/"
            },
        ],

        "web": "Visita",
        "github": "Código",
        "downloadFile": "curriculum.pdf"

    },

    "en": {
        "home": "Home",
        "resume": "Resume",
        "portfolio": "Projects",
        "logo": "Portfolio",
        "name": "Adán Lazcano",
        "profile": "Full-Stack Developer",
        "desc": "I love working with stacks like Node.JS, React.JS, MongoDB, PHP & MySQL.",
        "btnCv": "Resume Download",
        "contact": "Contact",
        "education": "Education",
        "degree": "Bachelor Degree in Computer Science",
        "skills": "Technical Skills",
        "languages": ["Languages", "Spanish", "English"],
        "perfil": "Profile",
        "perfilText": "Full-Stack Developer with over 10 years experience, I consider myself a person who likes challenges and problem solving. I love self-taught learning and I consider that I have a high sense of commitment and responsibility, I am used to working for objectives and taking on the challenges that arise. I consider myself a person with a good attitude and I am currently looking for new projects that will lead me to greater job growth.",
        "experience": "Experience",
        "jobs": [{
                "year": "2020-2021",
                "company": "Universidad de Guadalajara",
                "position": "Web Developer",
                "stack": ['React.js', 'Express.js', 'MongoDB'],
                "desc": "I participated with a team of developers belonging to the systems department of the University of Guadalajara, I did the process of generating records for the students of the University Center for Administrative Economic Sciences (CUCEA) such as CENEVAL, social service report, report of professional practices and professional exam, making the previous process more efficient, which consisted of manually performing said report in a text editor, currently the module is in production and allows you to generate the report by category, consult the report at any time list of minutes per student, reducing the time that this process lasted."
            },
            {
                "year": "2015-2020",
                "company": "PLANINCORP",
                "position": "Web Developer",
                "stack": ['PHP', 'MySQL', 'React.js', 'Express.js', 'MongoDB'],
                "desc": "OUTSOURCING company dedicated to offering subcontracting services for several important companies in JALISCO, QUERETARO, LOS CABOS, MONTERREY and various states of the country. In which I had the opportunity to work on various innovation projects of some systems that were already obsolete, their corresponding analysis was carried out and work was carried out on various management systems (PAYROLL, INVOICING, STAFF, PURCHASING AND CUSTOMER MANAGEMENT). I had the opportunity to participate in one of the most important projects of the company which, with a billing system of more than 60 thousand stamps on a monthly, I was working on the implementation of the updates to the SAT guide for payroll and billing. The innovation that was carried out in various systems, the working hours of the employees were reduced, since normally the payroll area had very heavy days in which many overtime hours were performed, it was possible to reduce the time in which they worked various processes in the company's management systems."
            },
            {
                "year": "2013-2020",
                "company": "FreeLancer",
                "position": "Web Developer",
                "stack": ['React.js', 'Express.js', 'MongoDB', 'SQL Server', '.NET', 'PHP', 'MySQL'],
                "desc": "I participated in various projects in a Freelance way, for example: Design and development of web pages, Shopping cart, Sales of technology software. Develop the ability to work for objectives and achieve a greater organization in my time, I developing projects on time to clients."
            },
            {
                "year": "2008-2013",
                "company": "Secretaría de Educación",
                "position": "IT Manager",
                "stack": ['.NET', 'SQL Server', 'PHP', 'MySQL', 'Vanilla JavaScript'],
                "desc": "Training staff in software management issues (Office automation, C# Programming, Web Programming). Preventive and Corrective Maintenance of hardware and software. Generation of  reports and statistics, Monitoring, System maintenance /development, IT project innovation strategies, Database management and optimization, Testing and error correction. Various projects were carried out which were successfully concluded, thus achieving that the processes that were handled manually and took too much time, could be carried out through a system and speed up times, as well as having the information at the time it is needed. quickly and easily."
            }
        ],
        "interest": ["Interest", "Music", "Traveling", "Reading", "Work Out"],
        "projects": [{
                "name": "Certificates Generator",
                "img": "actasudg.png",
                "desc": "This demo consists of 10 people pretending to belong to the UDG as students. this demo shows the generation of certificates (CENEVAL, Social Service Report, Professional Practice Report, Professional Exam) of each of them. This demo allows you to save the certificates, display the list of generated certificates, download them in PDF and delete any certificate.",
                "stacks": ["Node.js", "React.js", "MongoDB"],
                "code": "https://github.com/adanlazcano/actas-udg-front-end",
                "page": "https://actas-udg.netlify.app"
            },
            {
                "name": "Aguarama",
                "img": "aguarama.png",
                "desc": "Registration of participants who come to fill their jug ​​of water. When filling a jug, the customer is assigned a star, when they accumulate 5 filled they are worthy of a ticket with folio generated by the system, for the contest of a 43 '' TV.",
                "stacks": ["React.JS", "Express.JS", "MongoDB"],
                "code": "https://github.com/adanlazcano/aguarama-star-counter-server",
                "page": "https://aguarama.netlify.app/"
            },

            {

                "name": "Yanel",
                "img": "yanel.png",
                "desc": "Shopping cart on Vanilla Javascript & PHP through OpenPay transfers, created to Yanel bags and accessories, Guadalajara, Jalisco MX.",
                "stacks": ["Vanilla JavaScript", "PHP", "MySQL"],
                "code": "https://github.com/adanlazcano/yanel",
                "page": "https://yanel.netlify.app/"

            },
            {
                "name": "Resume Generator",
                "img": "currigen.png",
                "desc": "You can generate your resume from a dynamic template that you can edit at any time you want and your information will be stored locally in your browser and you can consult it at any time. The page allows you to upload your photography, personal data, 1 or more Social Networks, Skills, Experience, Courses, Languages ​​and Interests. At the end of filling in your information you will be able to download the template in PDF format.",
                "stacks": ["React.JS"],
                "code": "https://github.com/adanlazcano/resume_generator",
                "page": "https://currigene.netlify.app/"
            },

            {
                "name": "Purchasing System",
                "img": "planincorp.png",
                "desc": "Purchasing system for the PLANINCORP outsourcing company located in Guadalajara city, Jalisco. This system allows you to register staff, areas, suppliers, categories, products and purchases, as well as download the purchase formats in PDF and export the inventory to EXCEL.",
                "stacks": ["JavaScript", "JQuery", "PHP (MVC)", "MySQL"],
                "code": "https://github.com/adanlazcano/planincorp",
                "page": "http://planincorp.42web.io/"
            },
            {
                "name": "Portfolio",
                "img": "portfolio.png",
                "desc": "Personal Portfolio where I show my recent and outstanding projects through my professional and work experience and download my CV in Spanish and English.",
                "stacks": ["React.JS"],
                "code": "https://github.com/adanlazcano/portafolio",
                "page": "https://adanlazcano.netlify.app/"
            },
        ],
        "web": "Visit",
        "github": "Code",
        "downloadFile": "resume.pdf"
    }

}