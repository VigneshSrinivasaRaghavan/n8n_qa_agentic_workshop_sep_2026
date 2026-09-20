You have built up a solid prompting toolkit over the last six topics. You know how to structure a prompt, give examples, apply Chain-of-Thought, and use the Role-Task-Format-Examples framework. Now it is time to talk about where the most important prompt in any agentic workflow actually lives.

It is not the message you type into the chat. It is not the instruction you pass through the workflow. It is the system message — and if you get it wrong, no amount of clever prompting elsewhere will save you.

---

## User Prompt vs System Message — What Is the Difference?

Every interaction with an LLM has two layers of input.

The **user prompt** is the message that comes in at runtime — the question asked, the story pasted, the feature name passed through the workflow. It changes every time the agent runs. It is the input for that specific execution.

The **system message** is different. It is set once, before any conversation begins, and it persists across every interaction. The agent reads it first, before it reads anything else. It is the agent's permanent context — its identity, its rules, its behavioural contract.

Think of it this way. The user prompt is what you ask the agent to do right now. The system message is who the agent is and how it always behaves — regardless of what it is asked.

In n8n, the system message lives inside the AI Agent node. You write it once when you build the workflow. From that point, every execution — whether it runs once or ten thousand times — starts from that same foundation.

---

## Why System Messages Are the Most Important Prompt You Will Write

Here is what happens without a well-written system message.

You build a test case generator agent. You pass it a Jira story. It produces test cases. They look fine. You run it again with a different story — and the format has shifted. The steps are no longer numbered. The priority field is missing. The tone has changed from professional to casual. The agent is still generating test cases, but it is doing it differently every time because it has no permanent rules to anchor its behaviour.

A well-written system message eliminates that drift. It tells the agent exactly who it is, what standard it is held to, what format it always uses, and what it should never do. That consistency is what makes an agent production-ready — something your team can rely on, not just demo once.

---

## What a System Message Must Contain

A system message for a QA agent should cover four things:

**1. Identity** — Who is this agent? What is its role and domain expertise? This is the Role component from your framework, made permanent.

**2. Behavioural rules** — How does this agent always behave? What tone does it use? What does it do when information is missing? What does it never do?

**3. Output format** — What does every response look like? This is the Format component from your framework, locked in permanently so it never varies between runs.

**4. Boundaries** — What is outside this agent's scope? What should it refuse or escalate rather than attempt?

---

## QA Example — Bug Triage Agent System Message

The agent: a bug triage agent that receives a new Jira bug report and enriches it — adding severity, priority, affected component, and a duplicate check flag.

Here is what a weak system message looks like:

---

*You are a QA agent. Triage incoming bug reports and classify them.*

---

That will produce output. It will not produce consistent, reliable, production-ready output. The agent has no idea what fields to populate, what classification criteria to use, what to do when the bug description is incomplete, or what format the output should take.

Here is the same agent with a properly written system message:

---

*You are a senior QA engineer specialising in bug triage and defect management for web applications. You have deep experience classifying bugs by severity, identifying affected components, and detecting duplicate reports.*

*Every bug report you receive must be enriched with the following fields, in this exact order:*

*Severity: Critical / High / Medium / Low*

*Priority: P1 / P2 / P3 / P4*

*Affected Component: [e.g. Authentication, Checkout, API, UI]*

*Root Cause Hypothesis: One sentence describing the most likely cause based on the description*

*Duplicate Flag: Yes / No / Possible — with a one-line justification*

*Missing Information: List any details absent from the report that would be needed to reproduce the bug. If nothing is missing, write "None."*

*Classification rules:*

- *Critical: System is down or data is lost. No workaround exists.*
- *High: Core functionality is broken. A workaround exists but is not acceptable long-term.*
- *Medium: Non-core functionality is impaired. A workaround exists.*
- *Low: Cosmetic or minor issue with no functional impact.*

*If the bug description is too vague to classify with confidence, do not guess. Set Severity and Priority to "Needs Clarification" and populate the Missing Information field with specific questions.*

*Never add fields that are not listed above. Never provide commentary outside the structured output. Every response must follow this format exactly — no exceptions.*

---

Same agent. Completely different level of reliability. The second version will produce the same structured output on run one and run ten thousand. The first version will drift within five executions.

---

## The Behavioural Rules Section — Why It Matters

Notice the last paragraph of that system message: *"If the bug description is too vague to classify with confidence, do not guess."*

That single instruction handles one of the most dangerous failure modes in agentic QA — an agent that confidently produces wrong output rather than flagging uncertainty. Without that rule, the agent will classify every bug, even the ones where the description is three words long and missing reproduction steps. With it, the agent knows to stop and ask rather than hallucinate a classification.

Behavioural rules are where you encode your QA judgement into the agent permanently. Every professional standard you would apply as a senior QA — every "never do this", every "always check for that" — belongs in the system message as a behavioural rule.

---

## Boundaries — Telling the Agent What It Is Not

Every agent should know what it is not responsible for.

A bug triage agent is not a test case generator. A test case generator is not a test plan writer. When you build a multi-agent system later in this course — where a lead agent delegates to specialists — each specialist agent needs to know its scope precisely. If it does not, it will attempt tasks it is not equipped for, and the output quality will suffer.

Add a boundaries section to every system message:

---

*Your sole responsibility is bug triage and enrichment. Do not generate test cases, write test plans, or suggest fixes. If asked to perform any task outside bug triage, respond with: "This is outside my scope. Please route this request to the appropriate agent."*

---

That one paragraph prevents scope creep and keeps your multi-agent system clean and predictable.

---

## System Messages Are Living Documents

One final point. A system message is not written once and forgotten. It is the first thing you update when an agent starts producing unexpected output.

When something goes wrong in a workflow — and it will — the first place you look is the execution history. The second place you look is the system message. Nine times out of ten, the problem is either a missing rule, an ambiguous instruction, or a format definition that did not account for an edge case.

Treat your system messages the way a good QA treats test cases — as living documents that get refined with every run. The agents you build in this course will get better over time, and most of that improvement will come from iterating on the system message, not rebuilding the workflow.