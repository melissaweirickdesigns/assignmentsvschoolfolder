import '../task-manager.scss'
import '../App.css'

export default function TaskManager() {

    //Just added the open source design for now and did not add JS as I am just practicing react app links and router.
    //Design of the POC comes from Dwinawan ( https://dribbble.com/shots/14552329--Exploration-Task-Management-Dashboard)


    return (
        
<div class='app main-container'>
  <main class='project'>
    <div class='project-info'>
      <h1>Tasks to be completed</h1>
      <div class='project-participants'>
        <span></span>
        <span></span>
        <span></span>
        <button class='project-participants__add'>Add Participant</button>
          
        </div>
    </div>
    <div class='project-tasks'>
      <div class='project-column'>
        <div class='project-column-heading'>
          <h2 class='project-column-heading__title'>Task Ready</h2><button class='project-column-heading__options'><i class="fas fa-ellipsis-h"></i></button>
        </div>
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--copyright'>Leak</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Jones: Leaking Faucet</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>3</span>
            <span><i class="fas fa-paperclip"></i>7</span>
            <span class='task__owner'></span>
          </div>
        </div>
        
                <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--design'>Leak/Clog</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Mcbride: Broken Toilet</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>2</span>
            <span><i class="fas fa-paperclip"></i>5</span>
            <span class='task__owner'></span>
          </div>
        </div>
        
                <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--copyright'>Leak</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Stevenson: Pipe Burst</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>2</span>
            <span><i class="fas fa-paperclip"></i>3</span>
            <span class='task__owner'></span>
          </div>
        </div>
      </div>
      <div class='project-column'><div class='project-column-heading'>
          <h2 class='project-column-heading__title'>In Progress</h2><button class='project-column-heading__options'><i class="fas fa-ellipsis-h"></i></button>
        </div>
          
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--design'>Installation</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Macri: Add a garbage disposal</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>5</span>
            <span><i class="fas fa-paperclip"></i>5</span> 
            <span class='task__owner'></span>
          </div>
        </div>
        
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--illustration'>Installation</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Hyde: NDA Corporate - add plumb for new development</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>8</span>
            <span><i class="fas fa-paperclip"></i>7</span>
            <span class='task__owner'></span>
          </div>
        </div>
        
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--copyright'>Clog</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Mitchell: Clogged Tub childrens toy</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>12</span>
            <span><i class="fas fa-paperclip"></i>11</span>
            <span class='task__owner'></span>
          </div>
        </div>
        
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--illustration'>Installation</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Weirick: install sprinklers</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>4</span>
            <span><i class="fas fa-paperclip"></i>8</span>
            <span class='task__owner'></span>
          </div>
        </div>
        
        </div>
      <div class='project-column'><div class='project-column-heading'>
          <h2 class='project-column-heading__title'>Needs Review</h2><button class='project-column-heading__options'><i class="fas fa-ellipsis-h"></i></button>
        </div>
          
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--copyright'>Leak</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Davis: Fix Sink</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>4</span>
            <span><i class="fas fa-paperclip"></i>0</span>
            <span class='task__owner'></span>
          </div>
        </div>
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--design'>Installation</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Capson: Run Water line to cat bowl</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>0</span>
            <span><i class="fas fa-paperclip"></i>5</span>
            <span class='task__owner'></span>
          </div>
        </div>
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--illustration'>Clog</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>VSchool: Sink Clog</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>2</span>
            <span><i class="fas fa-paperclip"></i>2</span>
            <span class='task__owner'></span>
          </div>
        </div>
        </div>
      <div class='project-column'><div class='project-column-heading'>
          <h2 class='project-column-heading__title'>Done</h2><button class='project-column-heading__options'><i class="fas fa-ellipsis-h"></i></button>
        </div>
        
         <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--illustration'>Installation</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Hawks: Add Two Toilets</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>12</span>
            <span><i class="fas fa-paperclip"></i>5</span>
            <span class='task__owner'></span>
          </div>
        </div>
        
         <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--illustration'>Installation</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Adamson: Add 3 Sinks</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>3</span>
            <span><i class="fas fa-paperclip"></i>7</span>
            <span class='task__owner'></span>
          </div>
        </div>
        
         <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--copyright'>Demolition</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Okedirk: Remove water pipe from baby room</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>8</span>
            <span><i class="fas fa-paperclip"></i>16</span>
            <span class='task__owner'></span>
          </div>
        </div>
        
        </div>
      
    </div>
  </main>
</div>
    )
}