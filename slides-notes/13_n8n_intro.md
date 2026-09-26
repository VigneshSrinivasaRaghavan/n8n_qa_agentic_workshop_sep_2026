# What is n8n?

## Introduction

n8n (pronounced "n-eight-n", short for "nodemation") is a **fair-code licensed workflow automation tool** that combines AI features with business process automation. It lets you connect different apps, APIs, databases, and AI models visually — using a node-based canvas — instead of writing custom integration code for every system.

n8n is distributed under the **Sustainable Use License** (a fair-code license, not strictly open-source under OSI's definition), and also offers a paid **Enterprise License**. It can be used via **n8n Cloud** (hosted) or **self-hosted** (Docker, npm, cloud VM).

## What is n8n?

- n8n is a **workflow automation platform** that gives technical teams "the flexibility of code with the speed of no-code."
- Workflows are built visually on a **canvas**, where you connect **nodes** — individual building blocks that trigger events, fetch/send/process data, apply logic, or call external services.
- Every workflow starts with a **trigger node** (e.g., a schedule, webhook, app event, form submission, or manual trigger) that determines when the workflow runs.
- n8n supports 400+ (1500+ per GitHub) app integrations, and where no pre-built node exists, you can use the **HTTP Request** node or write custom **JavaScript/Python code** directly inside a node.
- It natively integrates **AI/LLM capabilities** (via LangChain under the hood), letting you build not just automations but **AI Agents** within the same tool.

## Key Concepts You Need to Know

| Term | Meaning |
|---|---|
| **Node** | A single building block in a workflow (trigger, action, logic, or AI component) |
| **Workflow** | A collection of connected nodes that automate a process, starting from a trigger |
| **Trigger node** | Special node that starts workflow execution (schedule, webhook, chat message, etc.) |
| **Credential** | Stored authentication info (API key, OAuth, etc.) used by a node to connect to a service |
| **Expression** | JavaScript-based syntax to dynamically populate a node's inputs using data from earlier nodes |
| **AI Agent** | An AI system that uses an LLM to interpret requests, reason, and decide which **tools** to call to complete a task |
| **AI Tool** | An add-on resource (e.g., an API call, another workflow, a database) that an AI Agent can invoke to complete a specific task |
| **AI Memory** | Lets an AI Agent retain context across a conversation, instead of treating every message as isolated |
| **MCP Server** | n8n can act as an MCP (Model Context Protocol) client/server, allowing AI tools like Claude to connect to n8n workflows as tools |

*(Definitions sourced directly from n8n's official Key Concept Glossary.)*

## Why n8n for Building AI Agents (relevant for QA)

n8n's **AI Agent node** is essentially a reasoning loop: it takes a request, uses an LLM to decide what to do, calls one or more **tools** to gather information or take action, evaluates the result, and can iterate — rather than just answering a single fixed prompt.

For QA teams, this means:

- **Orchestration + Intelligence in one place**: n8n handles the *orchestration* (triggering test runs, fetching logs, routing data between systems), while the AI Agent provides the *intelligence* (reasoning about failures, generating test cases, summarizing results).
- **Connects test tools to AI**: You can feed test execution results (from Appium, Playwright, LambdaTest, Jira, etc.) into an AI Agent that analyzes failures, suggests root causes, or drafts bug reports — without writing custom integration scripts.
- **Test case generation**: An AI Agent can read requirement documents (via RAG — retrieval-augmented generation) and automatically generate/update test cases and expected results.
- **Human-in-the-loop control**: n8n lets you insert approval steps before AI-suggested changes (e.g., new/updated test cases) go live — important for QA governance.
- **Model flexibility**: You can swap the underlying LLM (OpenAI, Anthropic, local models, etc.) without rebuilding the whole workflow, useful for cost control and experimentation.
- **Full visibility**: Every workflow execution is logged, so QA engineers can trace exactly what data the AI agent received and what actions it took — critical for debugging agentic behavior.
- **Environment-aware**: Workflow variables let you point the same AI-driven QA workflow at different environments (staging, QA, production) without hardcoding values.

In short: n8n doesn't replace your test execution engines — it sits **above** them as the orchestration and intelligence layer, turning raw test signals into automated, reasoned actions (triaging failures, updating test cases, notifying teams, etc.).

## Sources
- [n8n Docs — Welcome](https://docs.n8n.io/)
- [n8n Docs — Key Concept Glossary](https://docs.n8n.io/key-concept-glossary)
- [n8n Docs — Integrate AI](https://docs.n8n.io/build/integrate-ai)
- [n8n.io — AI Agents](https://n8n.io/ai-agents/)
- [GitHub — n8n-io/n8n](https://github.com/n8n-io/n8n)