import "../styles/layouts/projects.scss";
import { ProjectsArticle } from "../components/projects-article";
import rickAndMorty_mob from "../images/r&m/rym_mobile.png";
import rickAndMorty_desk  from "../images/r&m/rym_desktop.png";
import mpservice_desk from "../images/mpservice/mpservice_deskt.png";
import mpservice_mob from "../images/mpservice/mpservice_mob.png"
import taskList_desk from "../images/task-list/taskList_desktop.png"
import taskList_mob from "../images/task-list/taskList_mobile.png"
import casaCanto_mob from "../images/casa-canto/casaCanto_mobile.png";
import casaCanto_desk from "../images/casa-canto/casaCanto_desktop.png";
import cardCreator_desk from "../images/card-creator/card-creator_desktop.png";
import cardCreator_mob from "../images/card-creator/card-creator_mobile.png";
import restApp_mob from "../images/restaurant-app/restApp_mobile.png";
import restApp_desk from "../images/restaurant-app/restApp_desktop.png";
import secForm_mob from "../images/secure-form/form_mob.png";
import secForm_desk from "../images/secure-form/form_desk.png"
import af_pictures_desk from "../images/af_pictures/afpictures_desk.png";
import af_pictures_mob from "../images/af_pictures/afpictures_mob.png"
import abito_mob from "../images/abito/abito_mob.png";
import abito_desk from "../images/abito/abito_deskt.png"
import doggynetes_img from "../images/doggynetes.png"
import Modal from "../components/modal";

const Projects =({showModal,handleModals, RandMProject, matchPointService, casaCantoProject, taskListProject, cardCreator, restaurantApp, afPictures, abitoProject, secureForm, doggynetes})=>{
 
   return (
    <section className="projects">
      <h2 className="projects__title">Muestras de proyectos</h2>
      <ul className="projects__container">
        <ProjectsArticle
        id={'rickAndMorty'}
        handleModals={handleModals}
        tech={['React','API']}        
        img={rickAndMorty_mob}
        alt={'Buscador de personajes de Rick and Morty'}
        link={RandMProject.link}
        title={'Buscador de personajes de Rick and Morty'}/>
         
         <ProjectsArticle
        id={'doggynetes'}
        handleModals={handleModals}
        tech={['JS','Python','Firebase']}        
        img={doggynetes_img}
        alt={'Aplicación con base de datos desplegada en Kubernetes'}
        link={doggynetes.link}
        title={'Aplicación con base de datos desplegada en Kubernetes'}/>

        <ProjectsArticle
        id={'matchPoint'}
        handleModals={handleModals}
        tech={['React', 'PHP']}        
        img={mpservice_mob}
        alt={'Web para Match Point Service'}
        link={matchPointService.link}
        title={'Web para Match Point Service'}/>

        <ProjectsArticle
        id={'casaCanto'}
        handleModals={handleModals}
        tech={['Wordpress']}
        img={casaCanto_mob}
        alt={'web Casa Canto'}
        link={casaCantoProject.link}
        title={'Casa Canto - alquiler vacacional'}/>

         <ProjectsArticle
        id={'taskList'}
        handleModals={handleModals}
        tech={['React', 'Local Storage']}        
        img= {taskList_desk}
        alt={'Web para crear tu lista de tareas'}
        link={taskListProject.link}
        title={'Lista de tareas con local storage'}/>

         <ProjectsArticle
        id={'restaurantApp'}
        handleModals={handleModals}
        tech={['React', 'Sass']}        
        img= {restApp_desk}
        alt={'Aplicación para reservar en restaurantes'}
        link={restaurantApp.link}
        title={'Diseño para una aplicación de reservas en restaurantes'}/>

         <ProjectsArticle
        id={'secureForm'}
        handleModals={handleModals}
        tech={['MERN', 'Tailwind CSS']}        
        img= {secForm_mob}
        alt={'Aplicación full-stack con formulario de contacto'}
        link={secureForm.link}
        title={'Aplicación web con implementaciones para minimizar las posibles vulnerabilidades'}/>

         <ProjectsArticle
        id={'abito'}
        handleModals={handleModals}
        tech={['HTML/CSS']}        
        img={abito_mob}
        alt={'Web de Abito Studio'}
        link={abitoProject.link}
        title={'Web de Abito Studio'}/>

        <ProjectsArticle
        id={'af_Pictures'}
        handleModals={handleModals}
        tech={['PHP']}        
        img={af_pictures_mob}
        alt={'Web de AF Pictures'}
        link={afPictures.link}
        title={'Web de AF Pictures'}/>
         
         <ProjectsArticle
        id={'cardCreator'}
        handleModals={handleModals}
        tech={['React', 'NodeJS']}        
        img={cardCreator_desk}
        alt={'Web para crear tarjetas de visita'}
        link={cardCreator.link}
        title={'Card Generator: crea tu tarjeta de visita'}/>
        
        <Modal projectObject={RandMProject} id='rickAndMorty' showModal={showModal} handleModal={handleModals} img={{img:rickAndMorty_desk, text:"Versión desktop"}} imgClass='modal__img desktop'/>

        <Modal projectObject={matchPointService} id='matchPoint' showModal={showModal} handleModal={handleModals} img={{img:mpservice_desk, text:"Vista del final del landing de la web"}} imgClass='modal__img desktop'/> 

        <Modal projectObject={casaCantoProject} id='casaCanto' showModal={showModal} handleModal={handleModals} img={{img:casaCanto_desk, text:"Versión desktop"}} imgClass='modal__img desktop'/>

        <Modal projectObject={taskListProject} id='taskList' showModal={showModal} handleModal={handleModals} img={{img:taskList_mob, text:"Versión para móvil"}} imgClass='modal__img mobile'/>

        <Modal projectObject={cardCreator} id='cardCreator' showModal={showModal} handleModal={handleModals} img={{img:cardCreator_mob, text:"Versión para móvil"}} imgClass='modal__img mobile'/>

        <Modal projectObject={restaurantApp} id='restaurantApp' showModal={showModal} handleModal={handleModals} img={{img:restApp_mob, text:"Versión para móvil"}} imgClass='modal__img mobile'/> 
           
        <Modal projectObject={afPictures} id='af_Pictures' showModal={showModal} handleModal={handleModals} img={{img:af_pictures_desk, text:"Vista del landing en versión desktop"}} imgClass='modal__img desktop'/> 

        <Modal projectObject={secureForm} id='secureForm' showModal={showModal} handleModal={handleModals} img={{img:secForm_desk, text:"Vista del dashboard del administrador en desktop"}} imgClass='modal__img desktop'/>

        <Modal projectObject={abitoProject} id='abito' showModal={showModal} handleModal={handleModals} img={{img:abito_desk, text:"Vista versión desktop de reseñas de clientes"}} imgClass='modal__img desktop'/>

         <Modal projectObject={doggynetes} id='doggynetes' showModal={showModal} handleModal={handleModals} img={{img:doggynetes_img, text:"Vista versión desktop de la aplicación, con el formulario para crear perros y todos los resultados que contiene la base de datos"}} imgClass='modal__img desktop'/>     
      </ul>      
    </section>
   )
}
export default Projects;
