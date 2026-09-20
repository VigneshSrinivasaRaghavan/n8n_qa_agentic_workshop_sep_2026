Let's talk about a problem you have probably already hit.

You write a prompt. You ask the agent to generate test cases for a login feature. The output comes back — and it looks fine. But then you run the same prompt again for a different feature, and the format is completely different. Different columns, different structure, different level of detail. You spend time reformatting it before it can go into Zephyr/Xray. That is not an agent problem. That is a prompting problem. And one-shot and few-shot prompting is how you fix it.

---

## What Does "One-Shot" Mean?

Zero-shot — which you covered in the last topic — gives the agent no examples. You describe what you want and trust it to figure out the format.

One-shot means you give the agent **exactly one example** of what a good output looks like. You show it one test case — the structure, the fields, the level of detail — and then you say: *"Now generate the rest in this exact format."*

That single example does more work than a paragraph of instructions. The agent does not have to guess what you mean by "a good test case." You have shown it.

---

## What Does "Few-Shot" Mean?

Few-shot is the same idea, scaled up. Instead of one example, you give the agent **two, three, or four examples** — typically covering different scenarios.

Why more than one? Because a single example might be ambiguous. If your one example is a happy path test case, the agent might assume all test cases should be happy path. Give it one happy path example, one negative test, and one edge case — and now it understands the full range of what you expect.

The rule of thumb: use one-shot when your format is simple and consistent. Use few-shot when your output needs to cover multiple types of scenarios.

---

## Why This Matters for QA

Think about what consistency means in a real QA workflow.

Your test cases are going into Zephyr/Xray. They need to follow your team's format — specific fields, specific naming conventions, a particular level of detail in the steps. If the agent produces a different structure every time, someone has to clean it up before it can be used. That person is probably you.

One-shot and few-shot prompting eliminates that cleanup. You define the format once, in the example, and the agent follows it every time.

Here is what that looks like in practice.

---

## QA Example — One-Shot Prompt

Say you are generating test cases for a login feature. Here is how a one-shot prompt is structured:

---
```
*You are a senior QA engineer. Generate test cases for the feature described below. Follow the exact format of the example provided.*

*Example:*

*Test Case ID: TC-001*

*Title: Successful login with valid credentials*

*Precondition: User has a registered account*

*Steps:*

*1. Navigate to the login page*

*2. Enter a valid email address*

*3. Enter the correct password*

*4. Click the Login button*

*Expected Result: User is redirected to the dashboard and sees a welcome message*

*Priority: High*

*Type: Positive*

*Feature to test: Password reset via email link*

*Generate 5 test cases in the exact same format.*
```

Notice what happened there. You did not write a long description of what a test case should contain. You showed it. The agent now knows: there is an ID, a title, a precondition, numbered steps, an expected result, a priority, and a type. It will reproduce that structure for every test case it generates.

---

## QA Example — Few-Shot Prompt

Now let's say you want the agent to cover positive, negative, and edge cases — and you want each type formatted correctly. Here is a few-shot version:

```
*You are a senior QA engineer. Generate test cases for the feature described below. Use the examples to understand the format and the range of test types expected.*

*Example 1 — Positive:*

*Test Case ID: TC-001*

*Title: Successful login with valid credentials*

*Precondition: User has a registered account*

*Steps: 1. Navigate to login page. 2. Enter valid email. 3. Enter correct password. 4. Click Login.*

*Expected Result: User is redirected to the dashboard*

*Priority: High*

*Type: Positive*

*Example 2 — Negative:*

*Test Case ID: TC-002*

*Title: Login fails with incorrect password*

*Precondition: User has a registered account*

*Steps: 1. Navigate to login page. 2. Enter valid email. 3. Enter incorrect password. 4. Click Login.*

*Expected Result: Error message displayed: "Invalid credentials. Please try again."*

*Priority: High*

*Type: Negative*

*Example 3 — Edge Case:*

*Test Case ID: TC-003*

*Title: Login attempt with password at maximum character limit*

*Precondition: User account exists with a 64-character password*

*Steps: 1. Navigate to login page. 2. Enter valid email. 3. Enter a 64-character password. 4. Click Login.*

*Expected Result: User is logged in successfully*

*Priority: Medium*

*Type: Edge Case*

*Feature to test: Account registration with email verification*

*Generate 6 test cases — 2 positive, 2 negative, 2 edge cases — in the exact same format.*

```

Three examples. The agent now understands not just the format, but the three types of tests you expect and how each one is written. The output will be structured, typed, and consistent — ready to go into Zephyr without reformatting.

---

## When to Use Which

Here is the decision:

**Use zero-shot** when you are exploring — you want to see what the agent produces before you lock in a format. Good for early drafts.

**Use one-shot** when you have a clear, consistent format and your output is a single type of content. Most test case generation tasks fall here.

**Use few-shot** when your output needs to cover multiple types — positive, negative, edge cases — or when one example is not enough to make the format unambiguous.

In the n8n workflows you build later in this course, your agent's system message will include examples. Those examples are your few-shot prompts, baked in permanently. Every time the agent runs, it already knows what good output looks like — because you showed it.

---

## The Principle Behind It

Here is why this works.

LLMs are pattern-matching machines at their core. When you give them an example, you are not just describing a format — you are activating a pattern. The model recognizes the structure, the vocabulary, the level of detail, and it continues that pattern for the new content you give it.

A paragraph of instructions tells the agent what to do. An example shows it. And showing is always more precise than telling.