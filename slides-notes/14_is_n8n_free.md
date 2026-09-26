# Is n8n Free?

## Quick Answer

n8n is **not open source** (by the strict OSI definition) — it's **"fair-code"** licensed under the **Sustainable Use License**. In simple terms:

- ✅ **Free** to self-host and use for internal business purposes, personal use, or non-commercial use — with **almost the complete feature set**.
- ❌ **Paid** if your office wants Enterprise-grade features (SSO, advanced governance, dedicated support) or wants n8n to host and manage it for them (n8n Cloud).

Since you're teaching via **Docker (self-hosted)**, your students will be running the free **Community Edition** — which is exactly what most companies start with too.

---

## Section 1: Is n8n 100% Free for Personal Use?

**Yes — for personal use, n8n is free**, whether self-hosted or otherwise, under the **Sustainable Use License** (a "fair-code" license, not OSI-approved open source).

The license grants free rights to **use, modify, create derivative works, and redistribute**, with 3 conditions:
1. You may use/modify the software only for your **own internal business purposes**, or for **non-commercial or personal use**.
2. You may distribute or share the software with others only **free of charge**, for non-commercial purposes.
3. You may not remove or alter licensing/copyright notices.

**What you get for free (self-hosted Community Edition):**
- Full editor UI and canvas
- All integrations/nodes
- Unlimited workflows and unlimited users
- Code steps (JS/Python), custom API calls, webhooks
- Custom nodes
- Basic execution logging and error workflows

**Why it's not called "open source":** The Open Source Initiative (OSI) says a license can't include usage restrictions to qualify as "open source." Since n8n restricts *commercial resale/hosting*, n8n calls its model **"fair-code"** instead — source code is visible and free to use, but with limits on reselling it as a service.

---

## Section 2: Is n8n 100% Free for Office/Company Use?

**Mostly yes — with important exceptions.** For internal business use (i.e., your company using n8n to automate its own internal processes), the free **Community Edition** is fully allowed and covers the vast majority of features.

### ✅ What's ALLOWED for free at a company:
- Using n8n to sync/automate data your company controls (e.g., CRM → internal database)
- Building an internal AI agent, QA automation, or any internal workflow
- Self-hosting on an internal company server, even with IT maintaining it
- Offering consulting services (building workflows for clients)

### ❌ What's NOT allowed under the free license:
- **White-labeling** n8n and reselling it to your own customers
- **Hosting n8n and charging other people/customers** to access it
- Building a product where the *core value* comes from n8n functionality, sold to external customers

> If your company only uses n8n **internally** (which covers nearly all real-world office use cases, including QA automation), the **free self-hosted Community Edition is enough** — no license fee required.

### When a company WOULD need to pay

Paid plans become relevant when the company needs:
- **n8n Cloud** (fully managed hosting by n8n — no server/infra to maintain)
- **Enterprise features**: SSO/SAML/LDAP, environments (dev/staging/prod), Git-based version control, advanced RBAC, audit logging, external secret stores, log streaming, dedicated support with SLA

These features are **not required to just build and run workflows** — they matter for larger teams needing governance, compliance, and scale.

---

## Section 3: Pricing — If Office Wants Cloud/Enterprise, How Much?

n8n Cloud pricing is based on **monthly workflow executions** (1 execution = 1 full workflow run, regardless of steps/complexity), **not** per step or per user. All plans include unlimited users and workflows.

| Plan | Price (billed annually) | Executions/month | Hosting | Best for |
|---|---|---|---|---|
| **Starter** | €20/month | 2,500 | n8n Cloud (hosted) | Individuals, small projects |
| **Pro** | €50/month | 10,000 | n8n Cloud (hosted) | Power users, small teams |
| **Business** | €667/month | 40,000 | Self-hosted (with license key) | Companies <100 employees needing SSO, environments, Git version control |
| **Enterprise** | Custom (Contact Sales) | Custom | Cloud or Self-hosted | Orgs needing strict compliance, dedicated support, SLA |

**Extra notes for your students:**
- **Self-hosted is always free at the Community Edition tier** — Business/Enterprise self-hosted just require applying a **paid license key** to unlock extra features (SSO, environments, Git version control, etc.). The core product is identical.
- **Start-ups (<20 employees)** can get **50% off the Business plan**.
- **Overage on Business plan**: €4,000 per extra 300,000 executions if you exceed your quota (workflows keep running regardless — you just get billed later).
- Free 14-day trial available for Cloud plans (no credit card needed for Starter/Pro trial; card required only for Business trial).

---

## Key Takeaway for Students

> "When your office asks — tell them: **n8n is free to self-host for internal business use, with nearly the full feature set.** You only pay if you want n8n to host it for you (Cloud) or need enterprise-grade governance features like SSO, Git-based environments, or dedicated support. For a QA automation use case within the company, the free Community Edition (exactly what we used in this Docker training) is almost always sufficient to get started."

## Sources
- [n8n Docs — Choose how to use n8n](https://docs.n8n.io/choose-how-to-use-n8n)
- [n8n Docs — Sustainable Use License / Fair-code](https://docs.n8n.io/choose-n8n/faircode-license)
- [n8n.io — Pricing](https://n8n.io/pricing/)