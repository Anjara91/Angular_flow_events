import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { characters } from './utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'Eventos & Control flow';
  selectValue = "";
  inputValue = "";
  charactersList = characters;
  name = "Cristian";
  isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
  }


  handleClick(name: any) {
    alert(`Hola ${name}`);
  }

  handleChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.selectValue = value;
  }

  handleInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputValue = value;
    
  }

  handleMouseOver() {
   alert("Has pasado por encima del elemento");
  }

  handleKeydown(event: KeyboardEvent) {
    console.log(event.key);
  }

  deleteCharacter(idx : any){
    this.charactersList = this.charactersList.filter((character: any, index) => index !== idx)
  }


}
