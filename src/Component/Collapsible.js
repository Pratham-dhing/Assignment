import { useState } from "react";

function Collapsible() {
    
    function SingleCollapse() {
    return (
    <div>
      <details>
        <summary>Know your goals and Prioritize Wisely</summary>
        <p>
          What are your priorities for the day? Make a list of your priorities and plan your day. 
          The tasks of the day must be outlined with the most important and urgent ones on top. 
          Likewise, determine your short-term and long-term goals and evaluate your progress frequently.
        </p>
      </details>
      <details>
        <summary>Be Focused And Eliminate Distractions</summary>
        <p>
          Are you really present physically and mentally. Try to block out all distractions so that you have
        </p>
      </details>
      <details>
        <summary>Chose the right mentor to Succeed in career</summary>
        <p>
            There is a big difference between a mentor and a coach
            Mentoring is a long-term process based on mutual trust and respect. Coaching, on the other hand, is for a short period of time.
            The topmost priority of a mentor is to help develop skills that are not just relevant for the mentees in their present job, but also for the future. A mentor has the first-hand experience in the industry
        </p>
        </details>
        </div>
        );
    }

    function MultipleCollapse() {
    return (
    <div>
      <details>
        <summary>Collaborate with Colleagues</summary>
        <p>
            Teach and learn from each other

            Collaborate on lesson plans-Two minds are better than one.

            Build your own social network

            Get feedback regularly

            Work together to solve problems

            Become a teacher-leader

            Adopt a team mentality

            Ask for help

            Find a mentor

            Be open to new ideas
        </p>
      </details>
      <details>
        <summary>Learn Anything Quickly</summary>
        <p>
        Learn by doing. Always play with the code while learning1.

        Ask for help. You’ll need it

        TEACH SOMEONE ELSE

        FOCUS ON THE 20%

        Identifying the problem that needs solving

        Seek out more online resources. There’s a wealth of content

        Don’t just read the sample code. Tinker with it!

        Take breaks when debugging

        Keep Calm and Keep On Coding
        </p>
      </details>
      <details>
        <summary>Reasons People Give up on their Goals Too Quickly</summary>
        <p>
            They want the outcome more than they want to obtain a skill

            They do not have the discipline to stick with their idea long enough to see it live

            They get distracted by what someone else is doing

            They don't believe in themselves enough.

            They fail once--and never try again

            They don't learn how to discipline themselves

            They care more about the end result, not the process

            They surround themselves with people who are a negative influence.

            They would rather settle for short-term rewards

            They don't have a guaranteed path to achieve success

            They don’t have the discipline to work hard enough

            They become distracted by other aspects of their life

            They don't know that failure is normal
        </p>
        </details>
        <details>
        <summary>Signs of Setting For Less in Life</summary>
        <p>
        You are always tired

        You keep saying "after"

        You don’t think you can

        You think a lot, but do little

        You are playing small and you think it’s OK

        WhatsApp, Facebook, and TV are the highlight of your day

        You are not ready to break comfort

        You rely on escapism

        You have the exact same friends

        You have no idea what you want

        You don't think you deserve better
        </p>
      </details>
        </div>
        );
    }

    const[activeTab,setActiveTab] = useState('');
    const handleChange = (e) =>{
        setActiveTab(e);
    }

    return ( 
        <div>
            <button onClick={()=>{handleChange("Single")}}>Single Collapsible</button> 
            <button onClick={()=>{handleChange("Multiple")}}>Multiple Collapsible</button>
        
            <div>
                {activeTab==="Single" && <SingleCollapse />}
                {activeTab==="Multiple" && <MultipleCollapse />}
            </div>
        </div>
    );
}

export default Collapsible;