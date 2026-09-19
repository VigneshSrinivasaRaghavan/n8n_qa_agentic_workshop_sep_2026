You have heard the word "token" thrown around a lot in AI conversations. Cost per token. Token limits. Context window exceeded.

But what does any of that actually mean — and why should a QA engineer care?

Here is the short answer: tokens and context windows are the two most practical constraints you will hit when building agents. Ignore them and your agent will either cost you money you did not expect, produce incomplete output, or — worst of all — silently forget what it was supposed to be doing.

---

## SECTION 1 — What Is a Token?

A token is not a word. It is not a character. It is something in between.

LLMs do not read text the way you do. They break text into small chunks called tokens before processing it. Think of it as the LLM's unit of reading and writing.

Here is a practical rule of thumb:

- **1 token ≈ 4 characters** in English
- **100 tokens ≈ 75 words**

*"The user should be able to log in using a valid email and password combination and next time will be automatically logged-in."*

That sentence is 22 words. In tokens, it is 24 tokens — because punctuation, spaces, and word endings each count separately.

Now imagine your agent is reading a full sprint's worth of Jira stories — 12 stories, each with 5 acceptance criteria lines. You are already looking at 3,000 to 5,000 tokens before the agent has written a single test case.

---

## SECTION 2 — Why Tokens Matter: Cost, Speed, and Limits

Tokens affect your agent in three concrete ways.

**First: Cost.**

All cloud LLMs like Claude, ChatGpt and Gemini charge per token — both for what goes IN (your prompt and context) and what comes OUT (the agent's response). The more tokens your workflow uses per run, the higher your API bill. When you are running an agent across 50 Jira stories in a sprint, token efficiency is not optional — it is how you keep costs under control.

**Second: Speed.**

More tokens = more processing time. A lean, well-structured prompt gets a response in seconds. A bloated prompt with unnecessary context can take noticeably longer. In an automated pipeline that runs at sprint start, that difference compounds across every story.

**Third: Limits.**

Every LLM has a maximum number of tokens it can handle in a single interaction. Exceed that limit and the request fails — or worse, the model silently truncates your input and works with incomplete information.

This is where the context window comes in.

---

## SECTION 3 — What Is a Context Window?

The context window is the total amount of text — measured in tokens — that an LLM can see and work with at any one moment.

Think of it as a whiteboard. Everything written on that whiteboard is what the agent can currently see: your system message, the conversation history, the documents you passed in, and the agent's own previous responses.


Bigger context window = more the agent can hold in its working memory at once. But bigger does not mean unlimited — and even with a large window, there are performance and cost implications to filling it up.

---

## SECTION 4 — What Happens When the Context Window Is Full?

Here is the critical thing to understand: when the context window fills up, the agent does not pause and ask for more space. It forgets.

Specifically, older content gets pushed out to make room for new content. In a long-running agent workflow, this means the agent can forget:

- The system message instructions you gave it at the start
- The requirements document you passed in at step one
- The test cases it already generated in an earlier step

Let me give you a concrete QA example.

Imagine you have built an agent that reads a 50-page requirements document, generates test cases, then reviews them for coverage gaps — all in one workflow. If the requirements document alone consumes 40,000 tokens and your model has a 32,000-token context window, the agent never even sees the full document. It starts generating test cases based on a truncated version of your requirements — and you will not know unless you check.

This is not a hypothetical. This is one of the most common reasons QA agents produce incomplete or inconsistent output in the real world.

---

## SECTION 5 — Practical Tips: Working Within These Limits

You do not need to memorise token counts. You need to build habits that keep your workflows lean. Here are the ones that matter most.

**Tip 1: Keep your prompts lean.**

Every word in your system message costs tokens on every single run. Write tight, specific instructions. Cut anything that does not change the agent's behaviour. A system message that is 200 tokens instead of 800 tokens saves you real money at scale.

**Tip 2: Do not re-upload documents repeatedly.**

If your workflow has five steps and you pass the full requirements document into every step, you are paying for it five times. Pass the document once, extract what each step needs, and pass only that forward.

**Tip 3: Summarise before passing.**

If you need to give the agent context from an earlier step, summarise it — do not paste the full output. An agent that generated 30 test cases in step one does not need all 30 test cases passed verbatim into step two. Pass a structured summary: feature name, test count, coverage areas.

**Tip 4: Match your model to the task.**

For simple tasks — generating test data, formatting output, classifying a bug — a smaller, faster, cheaper model with a smaller context window is perfectly adequate. Save your large-context, high-cost model for tasks that genuinely need it: analysing a full requirements document, reviewing a complex test suite.

---

## Key Takeaway

Tokens and context windows are not abstract technical details. They are the practical constraints that determine whether your agent runs correctly, runs cheaply, and runs reliably at scale.