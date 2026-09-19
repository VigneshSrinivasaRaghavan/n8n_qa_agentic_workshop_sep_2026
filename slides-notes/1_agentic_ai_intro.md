## The QA Problem We Are Solving

**Why do QA engineers still spend 60% of their time on repetitive work?**

Think about a typical sprint.

- A new set of stories lands in Jira.
- Someone has to read each story, understand the acceptance criteria.
- write test cases, create test data, push everything into TestRail/Zephyr
- Run the regression, triage the failures, raise bugs with full context
- Send a summary to the team.
- Every single one of those steps requires a human to sit down, think, and do it manually.

AI tools like ChatGPT have been available for years. So why hasn't that number moved?

Because **using AI is not the same as having AI work for you.**

When you ask ChatGPT to write test cases, you still have to copy the output, paste it into Zephyr, link it to the Jira story, and repeat for every story in the sprint. ChatGPT answered your question. It did not do your job.

---

## The Three Levels of AI

To understand Agentic AI, you need to understand where it sits in the broader AI landscape. 

There are three distinct levels, and they are often confused with each other.

## Level 1 — Artificial Intelligence (AI)

AI is the broad field of building systems that can perform tasks that would normally require human intelligence — recognising patterns, making predictions, classifying data.

- Trained on data to detect patterns and produce outputs
- Examples: spam filters, fraud detection, image recognition, recommendation engines
- **Key trait: Reactive.** You give it an input, it produces an output. It does not plan, it does not remember, and it does not take actions on its own.

Think of traditional AI as a very fast, very accurate calculator. It is excellent at the specific task it was trained for — and nothing else.

## Level 2 — Generative AI (Gen AI)

Generative AI is a subset of AI that can **create new content** — text, code, images — based on patterns learned from enormous datasets. This is what powers ChatGPT, Gemini, and GitHub Copilot.

- Driven by Large Language Models (LLMs) such as GPT-4, Gemini, and Llama
- Works in a **prompt → response** model: you give it an instruction, it generates output
- Examples: writing test cases from a description, summarising a requirements document, suggesting a fix for a failing test
- **Key trait: Generative but passive.** It produces high-quality output, but it stops the moment it finishes responding. It waits for your next prompt. It does not go and do anything in the real world.

This is where most QA teams are today. They use ChatGPT to help write test cases or summarise logs. It is genuinely useful — but the human is still doing all the connecting, copying, filing, and following up.

## Level 3 — Agentic AI

Agentic AI is a step beyond Generative AI. It uses an LLM as its reasoning core, but wraps it with **autonomy, memory, tools, and the ability to take real-world actions** to pursue a goal across multiple steps — without needing a human prompt at every stage.

- Sets its own sub-goals to achieve a high-level objective
- Plans and executes multi-step workflows
- Uses tools: APIs, databases, browsers, ticketing systems, file systems
- Remembers context across steps and adapts when something goes wrong
- **Key trait: Autonomous and action-taking.** Given a goal, it works independently until the goal is achieved.

The shift is fundamental. You are no longer the one connecting the dots. The agent connects them.

## Side-by-Side Comparison

| Dimension | AI | Generative AI | Agentic AI |
| --- | --- | --- | --- |
| **What it does** | Classifies, predicts, detects | Creates content on demand | Pursues goals autonomously |
| **Interaction model** | Input → Output | Prompt → Response | Goal → Plan → Act → Learn |
| **Autonomy** | None | None | High |
| **Memory** | None | Short-term (conversation only) | Short-term + Long-term |
| **Tool usage** | No | Limited | Yes — APIs, Jira, browsers, file systems |
| **Takes real-world actions** | No | No | Yes |
| **QA Example** | "Is this log entry an error?" | "Write test cases for the login feature" | "Every time a new story is created in Jira, generate test cases, push them to Zephyr, write a Playwright test, commit it to GitHub, and raise a PR — automatically" |

## Anatomy of Agent

An agent has four things that a standard LLM does not:

1. **A Reasoning Engine**
    
    The LLM at the core — it reads the situation, thinks through the problem, and decides what to do next. It works like a senior QA engineer who can look at a failing test, read the logs, and decide whether it is a flaky test or a genuine bug.
    
2. **A Memory System**
    - *Short-term memory:* what happened earlier in this task (e.g., "I already generated test cases for the login story — don't repeat them")
    - *Long-term memory:* knowledge stored outside the agent and retrieved when needed (e.g., "this test has failed 3 times before — here is what fixed it")
3. **Tool Access**
    
    The agent can actually *use* external systems — read from Jira, write to Zephyr, commit to GitHub, open a browser, send a Slack message. Tools are what give the agent hands.
    
4. **An Action Loop**
    
    The agent does not stop after one response. It follows a continuous loop:
    
    ```
      Observe → Reason → Decide → Act → Observe → Reason → ...
    ```
    
    It keeps going until the goal is achieved or it hits a condition that requires human input.
    

## The Mindset Shift: Using AI vs Building AI Workers

Currently your relationship with AI looks like this:

> You open ChatGPT. You type a prompt. You read the response. You copy what you need. You go back to your work. You repeat.
> 

You are the one doing the work. AI is a tool you pick up and put down.

In Agentic AI, your relationship with AI looks like this:

> You design a workflow. You set the goal. The agent reads the Jira story, writes the test cases, pushes them to Zephyr/TestRail/Testmo, writes the automation test, commits it to GitHub, and raises the PR. You review the output.
> 

The agent is doing the work. You are the one setting direction and reviewing outcomes.

This is not about replacing QA thinking — it is about delegating the grunt work so your QA thinking can go where it actually matters.

## Three Scenarios: The Same Problem, Three Different Outcomes

**Scenario: Your nightly regression has just finished. There are 5 failures.** 

Solution 1: With Generative AI (ChatGPT):

You open ChatGPT. You paste the error logs one by one. You ask: *"Why did this test fail?"* It responds: *"This looks like a timeout issue — check your network configuration."* You take that advice, go to Jira, manually create a bug, fill in the fields, assign it, and move on to the next failure. You repeat this 5 times. It took 45 minutes.

Solution 2: With a Scheduled Script (Traditional Automation)

Your CI pipeline runs the tests at 2am and emails you a report. You wake up, read the report, and do the same manual triage as above. The script ran the tests. You still did everything else.

Solution 3: With an Agentic AI workflow

The agent runs the test suite at 2am. It detects 5 failures. It reads each failure log, classifies 2 as flaky tests and 3 as genuine bugs. It reruns the flaky tests to confirm. For the 3 real bugs, it creates Jira tickets with the full error log, stack trace, screenshot, and a suggested priority. It sends a Slack message to the QA channel with a summary. You wake up, read the Slack message, and review the 3 tickets that are already waiting for the dev team.

Same problem. Same nightly run. Completely different morning.

## Three Real QA Use Cases for Agentic AI

1. **Story-to-PR Pipeline**

A new Jira story is created. The agent reads it, generates test cases, pushes them to Zephyr Scale, writes a Playwright test file following POM structure, commits it to GitHub, and raises a Pull Request — all without a human touching it.

2. **Nightly Monitor & Self-Heal Pipeline**

A scheduled agent runs your full Playwright regression at 2am, analyses every failure, classifies each one, reruns flaky tests, attempts to auto-fix broken locators, and raises Jira bugs for anything it cannot fix — complete with logs and screenshots.

3. **Sprint Start Automation**

The moment a sprint begins, the agent pulls every story from Jira, generates test cases for each one, builds a Requirements Traceability Matrix, flags any story with missing or untestable acceptance criteria, and sends the QA team a sprint readiness summary in Slack.

## ✅ Summary

- Three levels of AI — traditional AI, Generative AI, and Agentic AI — and what makes each one distinct.
- Why Generative AI (like ChatGPT) is useful but passive: it responds to prompts but does not take actions in the real world.
- Agentic AI system has four core components — a reasoning engine, memory, tool access, and an action loop — that together allow it to pursue goals autonomously.