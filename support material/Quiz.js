import {React, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Quiz() {

  const types = [
    {
      res: 'hopper',
      name: 'Hopper',
       content: 'Hoppers enjoy variety and the spontaneity of switching tasks frequently, but may have trouble completing all the open items on their task list. Hoppers enjoy change of pace, and the freedom to switch from one activity to another. They may often be easily distracted, however, and thereby run the risk of going off-track and not finishing what they start. Having too many open items simultaneously can ultimately cause them to be unproductive.',
    },
    {
       res: 'hyperfocus',
       name: 'Hyper-Focus',
       content:'The Hyper Focus style is absorbed by detail but may have trouble stopping one activity to transition to something new. This style preference gets so involved in what they are doing that they may ignore reminders and cues to move on to the next priority. When Hyper Focus people are deeply involved in the task at hand, they can become so absorbed in the details, that they can lose track of time.',
    },
    {
    res: 'big_idea',
    name: 'Bigger Picture',
    content: 'Big Picture individuals are big thinkers but often leave the details out of their plans. They find details less attractive than global strategies and tasks that call for spontaneity. Their lofty vision and high speed of action can cause them to overlook or ignore the essential small pieces necessary for success.',
    },
    {
   res: 'perfectionist',   
    name: 'Perfectionist Plus',
    content:'Perfectionist Plus types thrive on details and an endless pursuit to "get things right". Because of their very high personal standards, they believe that they should be able to do nearly everything themselves and do it all well. They may be overly concerned about others approval and often have difficulty saying "No" to the requests of others for their time.',
    },
    {
    res: 'impulsive',
    name: 'Impulsive',
    content: 'Impulsive types love to leap but may forget to look first. Enjoying the rush of adrenaline, they would rather act spontaneously than follow a preset plan. However, lack of planning, or diminishing its importance, can result in missed deadlines and letting others down. Impulsives tend to get bored easily andcan find routine and maintenance tasks distasteful.',
    },
    {
    res: 'cliff_hanger',
    name: 'Cliff-Hanger',
    content: 'Cliff Hangers believe that they work most effectively when under the pressure of a deadline. Cliff Hangers like having an adrenaline rush to help them focus, but working under tight deadlines often doesn"t leave enough time to check work thoroughly or to handle things that might go wrong. Waiting to start until the last moment often causes added stress, tension and even missed deadlines.',
   }
   ]

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({mode: "onChange"});
  const [result, setResult] = useState(undefined);


  const onSubmit = data => {
  console.log(errors);

  axios.post('http://localhost:4000/api/questions', JSON.stringify(data))
       .then(response => {
      setResult(types.find(type => type.res === response.data));
      })
      .catch(error => {
          console.log(error)
      });
  };


  if (result == undefined) {
    
  return (
    <>
    <div className="quizContainer">
    <div className="quizOptions">
       <p>1: completely not agree 4: completely agree</p>
      </div> 
    <form onSubmit={handleSubmit(onSubmit)} className="quizForm">
    <div className="radioContainer"> 
    <label>I enjoy working on more than one project at a time.</label>
      <input {...register("enjoy", { required: true })} type="radio" value="completely-disagree" />
      <input {...register("enjoy", { required: true })} type="radio" value="I-disgree" />
      <input {...register("enjoy", { required: true })} type="radio" value="I-agree" />
      <input {...register("enjoy", { required: true })} type="radio" value="completely-agree" />
    </div>
    <div className="radioContainer">
    <label>If I have choice, I prefer to work alone rather than group work.</label>
      <input {...register("choice", { required: true })} type="radio" value="completely-disagree" />
      <input {...register("choice", { required: true })} type="radio" value="I-disgree" />
      <input {...register("choice", { required: true })} type="radio" value="I-agree" />
      <input {...register("choice", { required: true })} type="radio" value="completely-agree" />
      </div>
  <div className="radioContainer">
  <label>I like to seek thrill?</label>
    <input {...register("thrilled", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("thrilled", { required: true })} type="radio" value="I-disgree" />
    <input {...register("thrilled", { required: true })} type="radio" value="I-agree" />
    <input {...register("thrilled", { required: true })} type="radio" value="completely-agree" />
    </div>
    <div className="radioContainer">
  <label>I can be easily distracted during work or Study?</label>
    <input {...register("distraction", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("distraction", { required: true })} type="radio" value="I-disgree" />
    <input {...register("distraction", { required: true })} type="radio" value="I-agree" />
    <input {...register("distraction", { required: true })} type="radio" value="completely-agree" />
    </div>
   <div className="radioContainer">
  <label>I have high standard for my work or study</label>
    <input {...register("high-standard", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("high-standard", { required: true })} type="radio" value="I-disgree" />
    <input {...register("high-standard", { required: true })} type="radio" value="I-agree" />
    <input {...register("high-standard", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I like to switch between tasks.</label>
    <input {...register("switch-task", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("switch-task", { required: true })} type="radio" value="I-disgree" />
    <input {...register("switch-task", { required: true })} type="radio" value="I-agree" />
    <input {...register("switch-task", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I focus a lot on details.</label>
    <input {...register("focus", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("focus", { required: true })} type="radio" value="completely-agree" />
    <input {...register("focus", { required: true })} type="radio" value="I-disgree" />
    <input {...register("focus", { required: true })} type="radio" value="I-agree" />
    </div>
    <div className="radioContainer">
  <label>I usually dive into it when I get a new task.</label>
    <input {...register("concentrate", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("concentrate", { required: true })} type="radio" value="I-disgree" />
    <input {...register("concentrate", { required: true })} type="radio" value="I-agree" />
    <input {...register("concentrate", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I seek others approval.</label>
    <input {...register("approval", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("approval", { required: true })} type="radio" value="I-disgree" />
    <input {...register("approval", { required: true })} type="radio" value="I-agree" />
    <input {...register("approval", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I have a daily or weekly plan for my work or study.</label>
    <input {...register("plan", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("plan", { required: true })} type="radio" value="I-disgree" />
    <input {...register("plan", { required: true })} type="radio" value="I-agree" />
    <input {...register("plan", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I enjoy having big ideas.</label>
    <input {...register("ideas", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("ideas", { required: true })} type="radio" value="I-disgree" />
    <input {...register("ideas", { required: true })} type="radio" value="I-agree" />
    <input {...register("ideas", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I procrastinate often.</label>
    <input {...register("procrastinate", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("procrastinate", { required: true })} type="radio" value="I-disgree" />
    <input {...register("procrastinate", { required: true })} type="radio" value="I-agree" />
    <input {...register("procrastinate", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I find it hard to switch between tasks.</label>
    <input {...register("hard", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("hard", { required: true })} type="radio" value="I-disgree" />
    <input {...register("hard", { required: true })} type="radio" value="I-agree" />
    <input {...register("hard", { required: true })} type="radio" value="completely-agree" />
    </div>
    <div className="radioContainer">
  <label>I like spontaneous activities or I like to solve spontaneous tasks.</label>
    <input {...register("spontaneous", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("spontaneous", { required: true })} type="radio" value="I-disgree" />
    <input {...register("spontaneous", { required: true })} type="radio" value="I-agree" />
    <input {...register("spontaneous", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I spend a lot of time on finishing touches of my work.</label>
    <input {...register("finishing", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("finishing", { required: true })} type="radio" value="I-disgree" />
    <input {...register("finishing", { required: true })} type="radio" value="I-agree" />
    <input {...register("finishing", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I find it hard to focus for a long period.</label>
    <input {...register("period", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("period", { required: true })} type="radio" value="I-disgree" />
    <input {...register("period", { required: true })} type="radio" value="I-agree" />
    <input {...register("period", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label> I always know how to priortise my tasks.</label>
    <input {...register("priority", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("priority", { required: true })} type="radio" value="I-disgree" />
    <input {...register("priority", { required: true })} type="radio" value="I-agree" />
    <input {...register("priority", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I like instant gratificaton and find it hard to wait.</label>
    <input {...register("gratification", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("gratification", { required: true })} type="radio" value="I-disgree" />
    <input {...register("gratification", { required: true })} type="radio" value="I-agree" />
    <input {...register("gratification", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I prefer to finish one task before moving on to another.</label>
    <input {...register("settled", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("settled", { required: true })} type="radio" value="I-disgree" />
    <input {...register("settled", { required: true })} type="radio" value="I-agree" />
    <input {...register("settled", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I am usually the one who arrives late or miss an appointment.</label>
    <input {...register("appointment", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("appointment", { required: true })} type="radio" value="I-disgree" />
    <input {...register("appointment", { required: true })} type="radio" value="I-agree" />
    <input {...register("appointment", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I am more productive when I am busier.</label>
    <input {...register("productive", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("productive", { required: true })} type="radio" value="I-disgree" />
    <input {...register("productive", { required: true })} type="radio" value="I-agree" />
    <input {...register("productive", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I tend to make decision at the last minute.</label>
    <input {...register("decision", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("decision", { required: true })} type="radio" value="I-disgree" />
    <input {...register("decision", { required: true })} type="radio" value="I-agree" />
    <input {...register("decision", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I focus on big picture more than details of the project.</label>
    <input {...register("bigger-picture", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("bigger-picture", { required: true })} type="radio" value="I-disgree" />
    <input {...register("bigger-picture", { required: true })} type="radio" value="I-agree" />
    <input {...register("bigger-picture", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I work better when I can decide the deadline myself.</label>
    <input {...register("deadline", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("deadline", { required: true })} type="radio" value="I-disgree" />
    <input {...register("deadline", { required: true })} type="radio" value="I-agree" />
    <input {...register("deadline", { required: true })} type="radio" value="completely-agree" />
    </div>
    <div className="openQContainer">
       <label>What do you think/hope time management can help you to do?</label>
        <div><input type="text" placeholder="Your answer" size="94" {...register("openQuestion1", {required: false, min: 2})} /></div>
      </div>
      <div className="openQContainer"> 
      <label>Please tell us (as many as possible) the advices/methods/tools you find useful to you in your time management?</label>
        <div><input type="text" placeholder="Your answer" size="94" {...register("openQuestion2", {required: false, min: 2})} /></div>
      </div>  
      <div className="openQContainer"> 
      <label>Please tell us (as many as possible) the advices/methods/tools you find useless to you in your time management?</label>
      <div><input type="text" placeholder="Your answer" size="94" {...register("openQuestion3", {required: false, min: 2})} /></div>
  </div> 
  <div className='quizFooter'>
    <input type="submit" disabled={(!isValid)} className="primaryButton"/> 
    </div>
      </form>
      
      </div>
      </>
  );
  }

else {
return (<div>
        <div className="resultContainer">
    <div className="resultHead"><h3>My Quiz Result: {result.name}</h3></div>
    <div className="resultBody"><p>{result.content}</p></div>
        </div>
        </div>
  )
};
}


export default Quiz;