# Prompt for AC Review Agent + Requirement Risk Agent + Requirement Question Generator + Test plan + Test Case Generator

```
Story: PROJ-1042 - Password Reset via Email

As a registered user, I want to reset my password via email so that I can regain access to my account if I forget my password.

Acceptance Criteria:
- User can request a password reset from the login page
- System sends a reset link to the user's email
- User can set a new password using the link
- The new password should be secure
- System should respond quickly
- Reset link works properly
```

```
Story: PROJ-1087 - Apply Promo Code at Checkout

As a shopper, I want to apply a promo code at checkout so that I can receive a discount on my order.

Acceptance Criteria:
1. Given a shopper is on the checkout page with items in the cart, when they enter a valid, active promo code and click "Apply", then the discount is calculated and displayed, and the order total updates to reflect the new amount.
2. Given a shopper enters a promo code that does not exist, when they click "Apply", then the system displays the message "This promo code is invalid" and the order total remains unchanged.
3. Given a shopper enters a promo code that has expired, when they click "Apply", then the system displays the message "This promo code has expired" and the order total remains unchanged.
4. Given a shopper enters a promo code that has already reached its maximum redemption limit, when they click "Apply", then the system displays the message "This promo code is no longer available" and the order total remains unchanged.
5. Given a shopper has already applied a promo code, when they attempt to apply a second promo code, then the system replaces the first discount with the second one and displays a confirmation message.
6. Given a shopper applies a promo code and then removes an item from the cart that drops the order below the code's minimum spend requirement, when the cart updates, then the discount is automatically removed and the shopper is notified with the message "Promo code removed: order no longer meets the minimum spend of $X".
7. Promo code input is case-insensitive and trims leading/trailing whitespace.
8. The discount amount is capped at a maximum of $50 regardless of the percentage calculated, as configured per promo code.
```
---

# Test Case Review Agent Prompt

```
Story: PROJ-2051 - Account Lockout After Failed Login Attempts

As a registered user, I want my account to be temporarily locked after multiple failed login attempts so that my account is protected from brute-force attacks.

Acceptance Criteria:
1. Given a user enters an incorrect password 5 times in a row for the same account, when the 5th failed attempt is submitted, then the account is locked for 15 minutes and the user sees the message "Account locked due to too many failed attempts. Try again in 15 minutes."
2. Given an account is locked, when the user attempts to log in with the correct password during the lockout period, then the login is rejected and the same lockout message is shown.
3. Given an account is locked and 15 minutes have passed, when the user attempts to log in with the correct password, then the login succeeds and the failed attempt counter is reset to 0.
4. Given a user enters an incorrect password fewer than 5 times, when they then enter the correct password, then the login succeeds and the failed attempt counter is reset to 0.

Test Cases:

TC-01
Title: Verify account locks after 5 failed login attempts
Type: Positive
Priority: High
Preconditions: User has a valid registered account with a known correct password
Steps: 1. Attempt login with incorrect password 5 times in a row for the account. 2. Observe system response after the 5th attempt.
Expected Result: Account is locked for 15 minutes and the message "Account locked due to too many failed attempts. Try again in 15 minutes." is displayed.

TC-02
Title: Verify locked account rejects correct password during lockout
Type: Negative
Priority: High
Preconditions: None
Steps: 1. Lock the account by failing login 5 times. 2. Attempt login with the correct password while still locked.
Expected Result: Login is rejected and the lockout message is shown.

TC-03
Title: Verify failed attempt counter resets after successful login
Type: Positive
Priority: Medium
Preconditions: User has a valid registered account
Steps: 1. Enter incorrect password 2 times. 2. Enter correct password on 3rd attempt.
Expected Result: Login succeeds.

TC-04
Title: Verify login works correctly
Type: Positive
Priority: Medium
Preconditions: User has a valid registered account
Steps: 1. Enter incorrect password 3 times. 2. Enter correct password.
Expected Result: It works fine and user is logged in.

TC-05
Title: Verify account unlocks and allows login after lockout period passes
Type: Edge Case
Priority: Medium
Preconditions: Account is currently locked
Steps: 1. Wait for the lockout period to pass. 2. Attempt login with correct password.
Expected Result: Login is rejected.
```
---
# JIRA Sample story content

```
Title : Add to Cart feature

Description:
As a customer, I want to add items to my shopping cart so that I can purchase multiple products in a single checkout.

Acceptance Criteria:

Given a customer is viewing a product page, when they click "Add to Cart", then the item is added to the cart and the cart icon updates to show the correct item count.

Given a customer adds the same product to the cart more than once, when they view the cart, then the quantity for that product increases instead of creating a duplicate line item.

Given a product is out of stock, when the customer views its product page, then the "Add to Cart" button is disabled and a message "Currently out of stock" is displayed.

Given a customer has items in their cart, when they remove an item from the cart, then the item is removed and the cart total updates accordingly.
```
---
# Jira Smart Bug Report Prompt

```
KAN-1: promo code field doesn't trim leading spaces, discount doesn't apply
```

```
KAN-1: when I add the same product to cart twice, it creates two separate line items instead of combining them into one with quantity 2
```
---

# Grounded Test Case Generator Prompt

```
Write API test cases for POST /orders (Create Order)
```
```
Write API test cases for GET /orders/{orderId}
```
---