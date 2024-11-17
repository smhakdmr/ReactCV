import Header from './components/Header';
import "./App.scss";
import { Icon } from '@iconify/react';
import { Row, Col } from 'reactstrap';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App = () => {

  const skills = {
    "icons": [
      {
        "name": ".Net",
        "class": "skill-icons:dotnet",
        "level": "65"
      },
      {
        "name": "React",
        "class": "logos:react",
        "level": "60"
      },
      {
        "name": "TypeScript",
        "class": "devicon:typescript",
        "level": "90"
      },
      {
        "name": "JavaScript",
        "class": "devicon:javascript",
        "level": "70"
      },
      {
        "name": "HTML 5",
        "class": "skill-icons:html",
        "level": "95"
      },
      {
        "name": "CSS 3",
        "class": "skill-icons:css",
        "level": "95"
      },
      {
        "name": "MsSql",
        "class": "vscode-icons:file-type-sql",
        "level": "60"
      },
      {
        "name": "PostSql",
        "class": "devicon:postgresql",
        "level": "60"
      },
      {
        "name": "Docker",
        "class": "skill-icons:docker",
        "level": "60"
      },
      {
        "name": "Jenkins",
        "class": "devicon:jenkins",
        "level": "60"
      }
    ]
  }

  const projects = [
    {
      "title": "Animal Shelter",
      "startDate": "2020",
      "description": "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
      "images": [
        "images/portfolio/animal-shelter/p1.jpg",
        "images/portfolio/animal-shelter/p2.jpg"
      ],
      "url": "",
      "technologies": [
        {
          "class": "devicon-angularjs-plain",
          "name": "Angular"
        },
        {
          "class": "devicon-typescript-plain",
          "name": "TypeScript"
        },
        {
          "class": "devicon-csharp-plain",
          "name": "C#"
        }
      ]
    },
    {
      "title": "Photography",
      "startDate": "2018",
      "description": "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
      "images": [
        "images/portfolio/photography/p1.jpg",
        "images/portfolio/photography/p2.jpg"
      ],
      "url": "https://github.com",
      "technologies": [
        {
          "class": "devicon-react-original",
          "name": "React"
        },
        {
          "class": "devicon-javascript-plain",
          "name": "JavaScript"
        }
      ]
    },
    {
      "title": "3D Object Viewer",
      "startDate": "2015",
      "description": "One of the first apps I was working on my internship. I had to develop front-end implementation for app that shows 3D models of known buildings. This was also my first project in Angular framework. I've learned a lot!",
      "images": [
        "images/portfolio/adventure/p1.jpg",
        "images/portfolio/adventure/p2.jpg"
      ],
      "url": "https://github.com",
      "technologies": [
        {
          "class": "devicon-angularjs-plain",
          "name": "Angular"
        },
        {
          "class": "devicon-typescript-plain",
          "name": "TypeScript"
        },
        {
          "class": "devicon-csharp-plain",
          "name": "C#"
        }
      ]
    }
  ]

  const experience = [
    {
      "company": "Pudo Akıllı Gönderi Sistemleri",
      "title": "Full-Stack Developer",
      "years": "12.2022 - Günümüz",
      "mainTech": [
        ".Net", "React"
      ],
      "technologies": [
        "JavaScript",
        "TypeScript",
        "PostgreSQL",
        "EF Core",
        "Docker",
        "Jenkins",
        "Jira"
      ],
      "description": "Pudonun iç ve dış müşterilerine sunmuş olduğu projelerin geliştirilmesinde aktif olarak yer almaktayım.",
      "icon": "images/logos/pudo.png",
    },
    {
      "company": "BIS Çözüm",
      "title": "Full-Stack Developer",
      "years": "04.2022 - 12.2022",
      "mainTech": [
        ".Net", "React"
      ],
      "technologies": [
        "JavaScript",
        "MsSQL",
        "EF Core",
        "Azure"
      ],
      "description": "Backend tarafında Entity Framework Core ve .NET Core kullanarak Code-First yaklaşımı ile Frontend tarafında ise React kullanarak MaterialUI, AntDesign, Bootstrap, Formik, React Hook Form ve KendoUI ile özel kütüphaneler üzerinde geliştirilmiş projelerde yer almaktayım.",
      "icon": "images/logos/bis.png",
    },
    {
      "company": "Eksim Holding",
      "title": "Full-Stack Developer",
      "years": "07.2020 - 04.2022",
      "mainTech": [
        ".Net", "HTML"
      ],
      "technologies": [
        ".Net Framework",
        ".Net MVC",
        ".Net Core",
        "JavaScript",
        "JQuery",
        "HTML",
        "CSS",
        "MsSQL",
        "EF Core",
        "ADO.NET"
      ],
      "description": "Eksim Holding bünyesinde Yazılım Geliştirme Müdürlüğü çatısı altında gerçekleştirilen web tabanlı projelerde full-stack developer olarak görev alıyorum. Bu projeler .Net Core ve .Net framework altyapıları üzerinde C#, Javascript, Html, Css vb. kullanılarak geliştirilmektedir.",
      "icon": "images/logos/eksim.png",
    },
    {
      "company": "Netaş",
      "title": "Intern",
      "years": "07.2019 - 08.2019",
      "mainTech": [
        "C#"
      ],
      "technologies": [
        "Selenium",
        "Appium",
        "Jira",
        "Git",
        "BitBucket"
      ],
      "description": "Netaş Siber Güvenlik Çözümleri departmanında 1 aylık zorunlu stajımı tamamladım. Burada C# dilinde Test Mühendisliği alanında tecrübe kazandım. Stajım süresince Git- Bash, Bitbucket, Sellenium ve Appium kullanımı öğrendim. POM yapısı üzerinde tecrübe kazandım.",
      "icon": "images/logos/netas.png",
    }
  ]

  const basicInfo = {
    "description_header": "Merhaba,",
    "description": "Benim adım İlyas Semih Akdemir. Lisans eğitimimi Yıldız Teknik Üniversitesi Matematik Mühendisliği bölümünde tamamladıktan sonra yüksek lisans eğitimimi Galatasaray Üniversitesi Bilişim Teknolojileri alanında tamamladım. Çalıştığım projelerde web ağırlıklı olarak geliştirmelerde bulundum. Bu projelerin analiz, geliştirme, test, dokümantasyon ve son kullanıcı deneyimine kadar her aşamasında yer aldım. Sürekli olarak son teknolojileri takip eder, bilgi sahibi olup, uygulamaya çalışırım. Yeniliğe açık birisiyimdir.",
    "section_name": {
      "about": "Hakkımda",
      "projects": "Projelerim",
      "skills": "Yeteneklerim",
      "experience": "Deneyimlerim"
    }
  }

  const network = [
    {
      "name": "github",
      "url": "https://github.com",
      "class": "fab fa-github"
    },
    {
      "name": "instagram",
      "url": "https://www.instagram.com",
      "class": "fab fa-instagram"
    }
  ]

  return (
    <div>
      <Header />
      {/* <Row>
        <Col md={12}>
          <div
            className="col-md-12"
            style={{
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <div
              style={{ display: "inline" }}
            >
              <Icon
                className="iconify language-icon mr-5"
                icon="twemoji-flag-for-flag-united-kingdom"
                data-inline="false"
              />
            </div>
            <div
              style={{ display: "inline" }}
            >
              <Icon
                className="iconify language-icon"
                icon="twemoji-flag-for-flag-turkey"
                data-inline="false"
              />
            </div>
          </div>
        </Col>
      </Row> */}
      <About resumeBasicInfo={basicInfo} />
      <Skills sharedSkills={skills} />
      <Experience resumeExperience={experience} />
      {/* <Projects resumeProjects={projects} /> */}
      <Footer sharedBasicInfo={network} />
    </div>
  );
}

export default App;
