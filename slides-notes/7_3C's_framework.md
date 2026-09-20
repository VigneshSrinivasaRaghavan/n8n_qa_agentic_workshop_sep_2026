In the last section, you saw what happens when a prompt is vague — generic test cases, missed scenarios, hallucinated bugs. You understood the cost.

Now let's fix it.

There is a framework I use for every QA prompt I write. It has three parts. I call them the 3 C's — **Context, Constraints, and Clarity**.

Once you internalise these three, you will never stare at a blank prompt box wondering what to write. You will have a checklist.

Let's go through each one.

---

## C1 — Context

Context is the answer to the question: *does the LLM know enough about the situation to give a useful response?*

By default, an LLM knows nothing about your product, your team, your sprint, or your acceptance criteria. It only knows what you tell it in the prompt. So if you give it nothing, it fills the gaps with generic assumptions — and that is exactly where the generic test cases come from.

Context has two layers.

**The first layer is role context.** Tell the LLM who it is. Not because the LLM has an identity crisis, but because the role shapes the tone, depth, and focus of the output.

Compare these two openings:

> *"Write test cases for the checkout feature."*
> 

VS

> *"You are a senior QA engineer with expertise in e-commerce applications. Your job is to write test cases for the checkout feature."*
> 

The second one produces output that is more thorough, more risk-aware, and more aligned with what a senior QA would actually write. The role primes the model.

**The second layer is situational context.** Tell the LLM what it is working with. Paste in the user story. Include the acceptance criteria. Mention the tech stack if it is relevant. Tell it what environment the feature runs in.

Here is a real example. You are building a test case generator agent in n8n. The agent reads a Jira story and generates test cases. Without situational context, the agent generates test cases for a generic login feature. With situational context — the actual AC from the Jira story — the agent generates test cases that are specific to your product's login rules.

Same agent. Same model. The context is what changes the output.

---

## C2 — Constraints

Constraints are the answer to the question: *does the LLM know what it must NOT do, and what boundaries it must stay within?*

Without constraints, an LLM will do what it thinks is helpful — which is often more than you asked for, in a format you did not want, covering scope you did not intend.

Constraints come in three forms.

**Format constraints.** Tell the LLM exactly how you want the output structured. If you want test cases in a specific format for Zephyr/Xray, describe that format. If you want a JSON object, say so. If you want a numbered list with specific fields, define those fields.

For example:

> *"Format each test case as follows: Test Case ID | Title | Precondition | Steps (numbered) | Expected Result. Do not include any introductory text or summary — output the test cases only."*
> 

That last sentence — *"do not include any introductory text"* — is a constraint that saves you from getting two paragraphs of explanation before the actual test cases. In an automated agent, that preamble breaks your downstream parsing.

**Scope constraints.** Tell the LLM what is in scope and what is out of scope. If you only want functional test cases, say so. If you want to exclude performance testing from this run, say so. If the agent should only cover the acceptance criteria provided and not invent additional scenarios, say so.

**Quality constraints.** Set the bar. Tell the LLM how many test cases you want. Tell it to cover specific scenario types — happy path, negative, boundary, edge cases. Tell it to flag any AC that is ambiguous rather than making an assumption.

---

## C3 — Clarity

Clarity is the answer to the question: *is there any ambiguity in what I am asking for?*

This is the one most people skip, because they think they have been clear. But clarity is not about whether YOU understand what you meant. It is about whether the LLM can interpret your instruction in only one way.

Ambiguous instructions produce inconsistent outputs. And inconsistent outputs in an agent that runs hundreds of times means you get a different quality of test case every run.

Here is an example of an ambiguous instruction:

> *"Write comprehensive test cases."*
> 

What does comprehensive mean? The LLM will decide. Sometimes it writes 5 test cases. Sometimes 20. Sometimes it focuses on UI. Sometimes on API. You have no control.

Here is the same instruction made clear:

> *"Write exactly 10 test cases. Cover: 3 happy path scenarios, 4 negative scenarios, 2 boundary value scenarios, and 1 security scenario. Each test case must have a unique ID, a one-line title, numbered steps, and a single expected result per step."*
> 

Now there is no ambiguity. The agent produces the same quality of output every single time it runs.

Clarity also means being explicit about what you want the agent to do when it is uncertain. Should it make an assumption? Should it flag the ambiguity and stop? Should it ask a clarifying question? In an automated workflow, you need to tell it — because there is no human in the loop to catch it mid-run.

---

## Putting the 3 C's Together — A Live QA Example

The feature: a login screen with the following acceptance criteria:

- Users must enter a registered email and password
- Password must be between 8 and 64 characters
- Account locks after 3 consecutive failed attempts
- Session expires after 30 minutes of inactivity

**Step 1 — Add Context:**

> *"You are a senior QA engineer. You are generating test cases for the login feature of a web application. The acceptance criteria are: [AC pasted here]."*
> 

**Step 2 — Add Constraints:**

> *"Generate test cases covering: happy path login, invalid credentials, boundary values for the password field, account lockout behaviour, and session expiry. Do not generate test cases for features outside the AC provided. Format each test case as: ID | Title | Precondition | Steps | Expected Result."*
> 

**Step 3 — Add Clarity:**

> *"Generate exactly 12 test cases. If any AC is ambiguous or missing information needed to write a test case, flag it explicitly rather than making an assumption. Output only the test cases — no introductory text, no summary."*
> 

Now put it all together:

```
You are a senior QA engineer. You are generating test cases for the login feature
of a web application. The acceptance criteria are:

- Users must enter a registered email and password
- Password must be between 8 and 64 characters
- Account locks after 3 consecutive failed attempts
- Session expires after 30 minutes of inactivity

Generate exactly 12 test cases covering: happy path login, invalid credentials,
boundary values for the password field (min 8, max 64 characters), account lockout
after 3 failed attempts, and session expiry after 30 minutes of inactivity.

Do not generate test cases for features outside the AC provided. If any AC is
ambiguous, flag it explicitly rather than making an assumption.

Format each test case as:
ID | Title | Precondition | Steps (numbered) | Expected Result

Output only the test cases — no introductory text, no summary.
```

That is a prompt your agent can run reliably, every single time, across every story in your sprint.

---

## Why This Framework Scales to Agents

Here is the thing about the 3 C's — they are not just for one-off prompts. They are the foundation of every system message you will write for your n8n agents.

A system message is a permanent prompt that defines how your agent behaves across every single run. You will write system messages for your test case generator agent, your bug triage agent, your RTM generator, and every other agent in this course.

Every one of those system messages will be built on Context, Constraints, and Clarity.