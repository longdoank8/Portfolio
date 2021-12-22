import Highway from '@dogstudio/highway';
import Tween from 'gsap';
import {TimelineLite} from 'gsap';


class Fade extends Highway.Transition{
  in({from, to, done}){
    const tl = new TimelineLite();
    tl.fromTo(to, 0.5, {left: '-100%', top:'50%'}, {left:'0%'})
    .fromTo(to, 0.5, {height: '2vh'}, {height: '90vh', top: '10%', onComplete: function(){
      from.remove(); //löscht den home bereich im html
      done();
    }}
  )
    .fromTo(to.children[0], 2, {opacity:0}, {opacity:1}) //selektiert von der from-seite(index.html) das erste Kindelement(div home-content)
  }

  out({from,done}){

    done();
  }

}

export default Fade;
