import { Component } from '@angular/core';

@Component({
  selector: 'directiva-for',
  standalone: true,
  imports: [],
  templateUrl: './directiva-for.component.html',
  styleUrl: './directiva-for.component.css'
})
export class DirectivaForComponent {
  myTechnologies = [
    {technology: 'Html', img: 'https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white'},
    {technology: 'Css', img: 'https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white'},
    {technology: 'Javascript', img: 'https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black'},
    {technology: 'Angular', img: 'https://img.shields.io/badge/Angular-0F0F11.svg?style=for-the-badge&logo=Angular&logoColor=red'},
    {technology: 'Tailwindcss', img: 'https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white'},
    {technology: 'Typescript', img: 'https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white'},
    {technology: 'Nodejs', img: 'https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white'},
    {technology: 'Mysql', img: 'https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white'},
  ]
}
