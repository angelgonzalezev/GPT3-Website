import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whatgpt3">
      <div className="gpt3_whatgpt3-feature">
        <Feature
          title={"What is GPT-3"}
          text={
            "GPT-3 (short for 'Generative Pre-trained Transformer 3') is a state-of-the-art language generation model developed by OpenAI. It is one of the largest and most powerful language models currently available, with over 175 billion parameters. GPT-3 can be used for a wide range of natural language processing tasks, including translation, summarization, question answering, and text generation."
          }
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          <a
            href="https://beta.openai.com/docs/introduction"
            target="_blank"
            rel="noreferrer"
          >
            Explore The Library
          </a>
        </p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title={"Chatbots"}
          text={
            "GPT-3 is one of the most advanced and powerful tools for natural language processing currently available. Its ability to generate coherent and natural text makes it an excellent option for chatbots, as it can provide responses that are easily understandable for users."
          }
          column
        />
        <Feature
          title={"Knowledgebase"}
          text={
            "GPT-3 is provided through an API, so it's important to understand how APIs work and how they can be used to access GPT-3 services. Depending on how you want to integrate GPT-3 into your application or system, you may need to know a specific programming language. Some of the most popular languages that can be used to interact with GPT-3 are Python and JavaScript."
          }
          column
        />
        <Feature
          title={"Education"}
          text={
            "OpenAI provides a lot of documentation and tutorials on how to use GPT-3. These resources will provide you with information on how GPT-3 works and how it can be used to perform different natural language processing tasks."
          }
          column
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
