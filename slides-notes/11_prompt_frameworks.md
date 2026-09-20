You have now covered three prompting techniques — zero-shot, one-shot and few-shot, and Chain-of-Thought. Each one solves a specific problem. But here is the question you are probably asking: when you sit down to write a prompt from scratch, how do you actually put it all together?

That is what this topic gives you. A framework. A repeatable structure that works for any QA prompt — whether you are writing a one-off query in a chat interface or building the system message for an n8n agent that will run hundreds of times.

The framework has four parts: **Role, Task, Format, Examples.**

---

## Part 1 — Role

The first thing you tell the agent is who it is.

This is not cosmetic. When you assign a role, you are activating a specific body of knowledge and a specific behavioural pattern inside the LLM. A prompt that begins *"You are a senior QA engineer with ten years of experience in functional and regression testing"* produces fundamentally different output than one that begins with no role at all.

The role sets the lens through which the agent reads everything that follows. It determines the vocabulary it uses, the assumptions it makes, the level of detail it applies, and the professional judgement it brings to edge cases.

For QA agents, your role definition should always include:

- **The job title** — *"You are a senior QA engineer"*
- **The domain** — *"specialising in functional testing of web applications"*
- **The behavioural expectation** — *"You write test cases that are thorough, unambiguous, and ready to execute without clarification"*

That third element is the one most people skip. It is also the one that makes the biggest difference. You are not just telling the agent what it is — you are telling it what standard it is held to.

---

## Part 2 — Task

The task is what you want the agent to do. This sounds obvious, but most prompts fail here — not because the task is missing, but because it is vague.

*"Generate test cases"* is a task. But it leaves too much open. How many? For what specifically? What types — happy path only, or negative and edge cases too? Should it cover security? Performance? Accessibility?

A well-written task is specific enough that two different agents reading it would produce structurally similar output. If the task is ambiguous, the output will be inconsistent.

For QA prompts, your task definition should include:

- **The action** — generate, review, analyse, classify, summarise
- **The object** — test cases, a test plan, a bug report, an RTM
- **The scope** — how many, what types, what coverage is expected
- **Any constraints** — what to include, what to exclude, what to prioritise

Here is the difference in practice:

Vague: *"Write test cases for the checkout feature."*

Specific: *"Write 8 test cases for the checkout feature — 3 happy path, 3 negative, and 2 edge cases — covering payment processing, order confirmation, and error handling. Do not include performance or accessibility tests."*

Same intent. Completely different output quality.

---

## Part 3 — Format

Format tells the agent exactly how to structure its output.

This is where most QA prompts fall apart in production. The agent produces great content — but in a format that does not match your Zephyr/Xray fields, does not align with your team's test case template, or varies between runs in ways that break your downstream workflow.

Format removes that variability. You are not leaving the structure to chance — you are specifying it.

Your format definition should cover:

- **The structure** — table, numbered list, specific fields
- **The field names** — exactly as they appear in your test management tool
- **The order** — which field comes first, second, third
- **Any formatting rules** — sentence case for titles, numbered steps, specific labels for test type

For Zephyr Scale specifically, your format should mirror the fields Zephyr expects — Test Case ID, Title, Precondition, Steps, Expected Result, Priority, Type. Define those fields in the prompt and the output slots directly into Zephyr without manual reformatting.

---

## Part 4 — Examples

Examples are your one-shot or few-shot component — you show the agent what good output looks like before asking it to produce its own.

Within this framework, examples sit at the end — after Role, Task, and Format — because by the time the agent reaches the example, it already knows who it is, what it is doing, and how to structure the output. The example then confirms and reinforces all three.

If your format definition is already very precise, one example is usually enough. If your output needs to cover multiple types — positive, negative, edge — include one example of each type.

---

## Putting It Together — The Full Template

Here is the complete framework applied to a test case generation prompt:

---

**ROLE:**

*You are a senior QA engineer specialising in functional testing of web applications. You write test cases that are thorough, unambiguous, and ready to execute without clarification.*

**TASK:**

*Generate 6 test cases for the user story provided below — 2 happy path, 2 negative, and 2 edge cases — covering all acceptance criteria. Do not include performance or accessibility tests.*

**FORMAT:**

*Write each test case using the following fields in this exact order:*

*Test Case ID | Title | Precondition | Steps | Expected Result | Priority | Type*

*Steps must be numbered. Priority must be High, Medium, or Low. Type must be Positive, Negative, or Edge Case.*

**EXAMPLE:**

*Test Case ID: TC-001*

*Title: Successful login with valid credentials*

*Precondition: User has a registered account with verified email*

*Steps: 1. Navigate to the login page. 2. Enter a valid registered email. 3. Enter the correct password. 4. Click the Login button.*

*Expected Result: User is redirected to the dashboard and a welcome message is displayed.*

*Priority: High*

*Type: Positive*

**USER STORY:**

*[Paste user story and acceptance criteria here]*

---

That is your reusable template. Every QA prompt you write from this point — whether in a chat interface or as a system message in n8n — follows this structure. Role, Task, Format, Examples. In that order.

---

## Why the Order Matters

Role first — because it sets the context for everything that follows. The agent reads the task differently depending on who it believes it is.

Task second — because once the role is established, the agent needs to know what it is doing before it can understand how to do it.

Format third — because format constraints only make sense after the task is defined. You cannot specify output structure before the agent knows what output it is producing.

Examples last — because an example is most useful when the agent already understands the role, the task, and the format. The example then becomes confirmation, not instruction.

Swap the order and the prompt still works — but not as reliably. The framework is designed so that each part builds on the one before it.