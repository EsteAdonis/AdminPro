import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {   // Note: When the constructor is more than 3 lines is better to create a Method
    //href="./assets/css/colors/default-dark.css"
    const theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', theme);    
  }
  
  changeTheme(theme: string): void {
    const url = `./assets/css/colors/${theme}.css`
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');

    links.forEach(elem  => {
     elem.classList.remove('working');
     const btnTheme = elem.getAttribute('data-theme');
     const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
     const currentTheme = this.linkTheme?.getAttribute('href');

     if (btnThemeUrl === currentTheme) {
       elem.classList.add('working');
     }
   })
 }  
}
