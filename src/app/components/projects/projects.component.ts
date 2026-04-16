import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title:"JobAgent",
      description:"Plataforma centralizadora de vagas, buscamos vagas de outras plataformas de acordo com as preferencias estabelecidas pelo usuario, para cada vaga o usuário pode gerar com base em seu curriculo atual um novo curriculo melhorado e mais pertinente com avaga.",
      image:"jobAgent.jpg",
      githubUrl:"https://github.com/v-L1ma/jobAgentApi",
      liveUrl:"https://job-agent-portal.vercel.app",
      techs:['Next.js', '.NET', 'Postgres'],
      techIcons:['Reacticon.svg', 'dotnet.svg', 'sqlicons.svg'],
      isFullWidth:false
    },
    {
      title:"Time4Barber",
      description:"Sistema de agendamento para barbearias, com lembretes via WhatsApp e email assincronos usando RabbitMQ",
      image:"timeforbarber.jpg",
      githubUrl:"https://github.com/v-L1ma/barber",
      liveUrl:"https://time4barber.netlify.app",
      techs:['Angular', 'Spring Boot', 'RabbitMQ','MySQL'],
      techIcons:['angularIcon.svg', 'springicons.svg', 'sqlicons.svg'],
      isFullWidth:false
    },
    {
      title:"Neobank",
      description:"Sistema bancário online completo, desenvolvido para oferecer praticidade e segurança aos usuários. A plataforma permite a realização de transações financeiras, como transferências entre contas, saques e depósitos, de forma rápida e intuitiva.",
      image:"neobank.jpg",
      githubUrl:"https://github.com/v-L1ma",
      liveUrl:"#",
      techs:['Angular', '.NET', 'MySQL'],
      techIcons:['angularIcon.svg', 'dotnet.svg', 'sqlicons.svg'],
      isFullWidth:false
    },
    {
      title:"Facilita RH",
      description:"O facilita RH, é um sistema voltado para solucionar problemas no processo de recrutamento e seleção, integrando um portal de vagas para quem busca uma oportunidade com um painel para os recrutadores.",
      image:"facilitarh.jpg",
      githubUrl:"https://github.com/v-L1ma/RH",
      liveUrl:"https://facilita-rh.netlify.app",
      techs:['React', '.NET', 'PostgreSQL'],
      techIcons:['Reacticon.svg', 'dotnet.svg', 'sqlicons.svg'],
      isFullWidth:false
    },
    {
      title:"AdotaAi.Pet",
      description:"O Adota aí é um site criado com a finalidade de facilitar o processo de adoção e de doação de animais, um site onde existem funcionalidades tanto para o adotante quanto para o doador.",
      image:"adotaaipet.png",
      githubUrl:"https://github.com/v-L1ma/AdotaAi.pet",
      liveUrl:"https://adotaai-pet.netlify.app",
      techs:['React Native', 'Spring Boot', 'Postgres'],
      techIcons:['Reacticon.svg', 'springicons.svg','sqlicons.svg'],
      isFullWidth:true
    }
  ]
}
