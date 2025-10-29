# 🔐 Reverse Shamir Secret Sharing

This repository contains an algorithm based on the **reverse logic of Shamir’s Secret Sharing**, utilizing **Lagrange interpolation** to reconstruct or derive values in a complementary way to the traditional secret sharing approach.

---

## 📘 Overview

In the classic **Shamir’s Secret Sharing Scheme**, a secret is divided into multiple shares using polynomial interpolation, and the original secret can be recovered only when a threshold number of shares are combined.

This project, however, explores the **reverse process** — instead of generating shares from a secret, it leverages the inverse logic to derive underlying values using **Lagrange’s interpolation formula**.

---

## 🧮 Mathematical Foundation

The algorithm relies on **Lagrange interpolation**, which reconstructs a polynomial given a set of points.  
The fundamental expression used here is derived from the interpolation formula:

\[
f(0) = \sum_i y_i \prod_{j \neq i} \frac{x_j}{x_j - x_i}
\]