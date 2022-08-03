import { Component } from '@angular/core';

import { CuestionarioService } from "./providers/cuestionario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mbti';

  constructor( public _cs: CuestionarioService ) {
    this._cs.cargarCuestionarios();
  }


  ngOnInit(){
    document.querySelector("#type-details")!.classList.add("d-lg-none");
    document.querySelector("#scroll-down")!.classList.add("d-lg-none");
    document.querySelector("#results")!.classList.add("d-lg-none");

  }

   types = {
    ISTJ: {title: "The Traditionalist", percentage: "13.7%", description: "Dutiful, Practical, Logical, Methodical", site: "http://www.personalitypage.com/html/ISTJ.html"},
    ISFJ: {title: "The Protector", percentage: "12.7%", description: "Dutiful, Practical, Supportive, Meticulous", site: "http://www.personalitypage.com/html/ISFJ.html"},
    INFJ: {title: "The Guide", percentage: "1.7%", description: "Devoted, Innovative, Idealistic, Compassionate", site: "http://www.personalitypage.com/html/INFJ.html"},
    INTJ: {title: "The Visionary", percentage: "1.4%", description: "Independent, Innovative, Analytical, Purposeful", site: "http://www.personalitypage.com/html/INTJ.html"},
    ISTP: {title: "The Problem-Solver", percentage: "6.4%", description: "Expedient, Practical, Objective, Adaptable", site: "http://www.personalitypage.com/html/ISTP.html"},
    ISFP: {title: "The Harmonizer", percentage: "6.1%", description: "Tolerant, Realistic, Harmonious, Adaptable", site: "http://www.personalitypage.com/html/ISFP.html"},
    INFP: {title: "The Humanist", percentage: "3.2%", description: "Insightful, Innovative, Idealistic, Adaptable", site: "http://www.personalitypage.com/html/INFP.html"},
    INTP: {title: "The Conceptualizer", percentage: "2.4%", description: "Questioning, Innovative, Objective, Abstract", site: "http://www.personalitypage.com/html/INTP.html"},
    ESTP: {title: "The Activist", percentage: "5.8%", description: "Energetic, Practical, Pragmatic, Spontaneous", site: "http://www.personalitypage.com/html/ESTP.html"},
    ESFP: {title: "The Fun-Lover", percentage: "8.7%", description: "Spontaneous, Practical, Friendly, Harmonious", site: "http://www.personalitypage.com/html/ESFP.html"},
    ENFP: {title: "The Enthusiast", percentage: "6.3%", description: "Optimistic, Innovative, Compassionate, Versatile", site: "http://www.personalitypage.com/html/ENFP.html"},
    ENTP: {title: "The Entrepreneur", percentage: "2.8%", description: "Risk-Taking, Innovative, Outgoing, Adaptable", site: "http://www.personalitypage.com/html/ENTP.html"},
    ESTJ: {title: "The Coordinator", percentage: "10.4%", description: "Organized, Practical, Logical, Outgoing", site: "http://www.personalitypage.com/html/ESTJ.html"},
    ESFJ: {title: "The Supporter", percentage: "12.6%", description: "Friendly, Practical, Loyal, Organized", site: "http://www.personalitypage.com/html/ESFJ.html"},
    ENFJ: {title: "The Developer", percentage: "2.8%", description: "Friendly, Innovative, Supportive, Idealistic", site: "http://www.personalitypage.com/html/ENFJ.html"},
    ENTJ: {title: "The Reformer", percentage: "2.9%", description: "Determined, Innovative, Strategic, Outgoing", site: "http://www.personalitypage.com/html/ENTJ.html"}
  };
   e: any;
   i: any;
   s: any;
   n: any;
   t: any;
   f: any;
   j: any;
   p: any;

   type: string;

  resetScores() {
    this.e = this.i = this.s = this.n = this.t = this.f = this.j = this.p = 0;
    this.type = "";
  }

  getScores() {
    const inputs = document.getElementsByTagName("input");
    Array.prototype.forEach.call(inputs, (input) => {
      if (input.checked) {
        switch(input.value) {
          case 'e': this.e++; break;
          case 'i': this.i++; break;
          case 's': this.s++; break;
          case 'n': this.n++; break;
          case 't': this.t++; break;
          case 'f': this.f++; break;
          case 'j': this.j++; break;
          case 'p': this.p++; break;
        }
      }
    });
  }

  calculatePercentages() {
    this.e = Math.floor(this.e / 10 * 100);
    this.i = Math.floor(this.i / 10 * 100);
    this.s = Math.floor(this.s / 20 * 100);
    this.n = Math.floor(this.n / 20 * 100);
    this.t = Math.floor(this.t / 20 * 100);
    this.f = Math.floor(this.f / 20 * 100);
    this.j = Math.floor(this.j / 20 * 100);
    this.p = Math.floor(this.p / 20 * 100);
  }

  createCharts() {
    document.querySelector("#eScore")!.innerHTML = this.e;
    document.querySelector("#iScore")!.innerHTML = this.i;
    document.querySelector("#sScore")!.innerHTML = this.s;
    document.querySelector("#nScore")!.innerHTML = this.n;
    document.querySelector("#tScore")!.innerHTML = this.t;
    document.querySelector("#fScore")!.innerHTML = this.f;
    document.querySelector("#jScore")!.innerHTML = this.j;
    document.querySelector("#pScore")!.innerHTML = this.p;

    const e1 = document.querySelector("#eiChart") as HTMLElement;
    e1.style.marginLeft = this.i / 2 + "%";

    const e2 = document.querySelector("#snChart") as HTMLElement;
    e2.style.marginLeft = this.n / 2 + "%";

    const e3 = document.querySelector("#tfChart") as HTMLElement;
    e3.style.marginLeft = this.f / 2 + "%";

    const e4 = document.querySelector("#jpChart") as HTMLElement;
    e4.style.marginLeft = this.p / 2 + "%";

  }

  showResults() {
    this.type += (this.e >= this.i) ? "E" : "I";
    this.type += (this.s >= this.n) ? "S" : "N";
    this.type += (this.t >= this.f) ? "T" : "F";
    this.type += (this.j >= this.p) ? "J" : "P";

    document.querySelector("#type")!.innerHTML = this.type;
    document.querySelector("#type-title")!.innerHTML = this.types[this.type].title;
    document.querySelector("#type-percentage")!.innerHTML = this.types[this.type].percentage;
    document.querySelector("#type-description")!.innerHTML = this.types[this.type].description;

    const e3 = document.querySelector("#type-site") as HTMLAnchorElement;
    e3.href = this.types[this.type].site;

    document.querySelector("#type-details")!.classList.remove("d-lg-none");
    document.querySelector("#scroll-down")!.classList.remove("d-lg-none");
    document.querySelector("#results")!.classList.remove("d-lg-none");
  }

  validate(): boolean {
    const nombre = document.getElementById('nombre')["value"];
    if(nombre.trim() == "") {
        alert('Ingrese su nombre completo');
        return false;
    }

    const ci = document.getElementById('ci')["value"];
    if(ci.trim() == "") {
        alert('Ingrese su numero de documento');
        return false;
    }

    console.log(nombre);
    console.log(ci);
    return true;
  }

  sendResults() {
    const nombre = document.getElementById('nombre')["value"];
    const doc = document.getElementById('ci')["value"];

    this._cs.enviarCuestionario(nombre, doc, this.type)
        .then( () => console.log('Formulario Enviado'))
        .catch( (err) => console.log('Error al enviar', err));


  //  this.enviarCuestionario(nombre, doc, 'TTXX2');
  }




  procesar( ) {
    if (this.validate()){
      this.resetScores();
      this.getScores();
      this.calculatePercentages();
      this.createCharts();
      this.showResults();
      this.sendResults();
    }

  }

}
