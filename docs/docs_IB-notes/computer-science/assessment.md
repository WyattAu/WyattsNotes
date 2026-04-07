---
title: Assessment
sidebar_position: 1
---

# Assessment objective

## SL

| Index | Objective                                           | Paper 1 | Paper 2 | IA    | Sum |
| ----- | --------------------------------------------------- | ------- | ------- | ----- | --- |
| 1     | Demonstration of knowledge and understanding        | 24      | 13      | 9     | 46  |
| 2     | Application                                         | 13      | 7       | 8     | 28  |
| 3     | Construction, analysis, evaluation, and formulation | 8       | 5       | 4     | 17  |
| 4     | Skills usage                                        | n/a     | n/a     | 9     | 9   |
| n/a   | Weighting                                           | $0.45$  | $0.25$  | $0.3$ | 1   |

| 4 | Skills usage | n/a | n/a | 9 | 9 | | n/a | Weighting | $0.45$ | $0.25$ | $0.3$ | 1 |

## Paper 1 — Written Response

Paper 1 is a **2-hour** examination (SL) or **2 hours 15 minutes** (HL) that tests knowledge and
understanding of the core syllabus.

### Structure

| Component           | SL                          | HL                             |
| ------------------- | --------------------------- | ------------------------------ |
| Section A           | Short-answer questions      | Short-answer questions         |
| Section B           | Extended-response questions | Extended-response questions    |
| Section C (HL only) | n/a                         | Extended-response on HL topics |
| Total marks         | 80                          | 100                            |

### What examiners look for

- **Definitions**: Always use the exact IB terminology. For example, define "abstraction" as "hiding
  unnecessary details to reduce complexity," not just "simplifying things."
- **Command terms**: Pay close attention to the verb at the start of each question. "Describe"
  requires detail; "Explain" requires a reason; "Compare" requires similarities AND differences;
  "Evaluate" requires a judgment with supporting evidence.
- **Extended responses**: Use PEEL (Point, Evidence, Explanation, Link) paragraphs. Aim for 3–4
  well-developed points per essay question.

### Common pitfalls

- Writing everything you know about a topic instead of answering the specific question asked.
- Confusing SL and HL content — only use HL material in Paper 1 if you are an HL student and the
  question targets HL objectives.
- Leaving diagrams unlabeled. Every diagram must have a title and clear labels.

### Exam tips

- Spend roughly 1 minute per mark. For a 6-mark extended response, aim for about 6 minutes of
  writing.
- Read all questions before starting. Answer the questions you are most confident about first to
  secure easy marks.
- Use the mark allocation as a guide for depth. A 2-mark question needs a brief answer; a 10-mark
  question needs a structured essay with examples.

## Paper 2 — Problem Solving

Paper 2 is a **1-hour** examination (SL) or **1 hour 45 minutes** (HL) focused on applying
computational thinking to unseen problems.

### Structure

| Component           | SL                          | HL                          |
| ------------------- | --------------------------- | --------------------------- |
| Section A           | Scenario-based short answer | Scenario-based short answer |
| Section B (HL only) | n/a                         | HL-only scenario question   |
| Total marks         | 45                          | 70                          |

### Key skills tested

- **Tracing algorithms**: You may be given pseudocode or Python code and asked to determine the
  output for a given input.
- **Writing algorithms**: Given a problem description, you must produce a solution in pseudocode or
  Python.
- **Data structures**: Be prepared to manipulate arrays, linked lists, stacks, queues, trees, and
  hash tables (HL).
- **Computational thinking**: Decomposition, pattern recognition, abstraction, and algorithm design.

### Worked example: Tracing an algorithm

Consider the following Python code:

```python
def mystery(data):
    result = 0
    for i in range(len(data)):
        if data[i] &gt; data[i - 1]:
            result += data[i]
    return result

print(mystery([3, 7, 2, 9, 5]))
```

**Trace table:**

| i   | data[i] | data[i-1] | Condition | result |
| --- | ------- | --------- | --------- | ------ |
| 0   | 3       | 5         | False     | 0      |
| 1   | 7       | 3         | True      | 7      |
| 2   | 2       | 7         | False     | 7      |
| 3   | 9       | 2         | True      | 16     |
| 4   | 5       | 9         | False     | 16     |

**Output:** `16`

> **Exam tip**: When i = 0, `data[i - 1]` accesses the last element (index -1 in Python). Watch for
> this wrap-around behavior in exam questions.

### Worked example: Writing an algorithm

**Question**: Write an algorithm that takes a list of integers and returns the two largest distinct
values.

```python
def two_largest(data):
    if len(data) &lt; 2:
        return None
    largest = max(data[0], data[1])
    second = min(data[0], data[1])
    for value in data[2:]:
        if value &gt; largest:
            second = largest
            largest = value
        elif value &gt; second and value != largest:
            second = value
    return largest, second
```

> **Exam tip**: Always consider edge cases — empty lists, single-element lists, lists with all
> identical values. State your assumptions clearly.

## Internal Assessment (IA)

The IA accounts for **30%** of the total grade and consists of a computational solution to a
client-identified problem.

### Requirements

| Criterion | Description                                 | Maximum marks |
| --------- | ------------------------------------------- | ------------- |
| A         | Planning                                    | 6             |
| B         | Solution Overview                           | 6             |
| C         | Development                                 | 12            |
| D         | Functionality and extensibility of solution | 4             |
| E         | Evaluation                                  | 6             |
| F         | Abstract                                    | 2             |
|           | **Total**                                   | **36**        |

### Planning (Criterion A)

- Identify a clearly defined **client** and a genuine problem they face.
- The problem must have a **computational** solution — avoid trivial projects.
- Define the **success criteria** (at least 3 measurable criteria the solution must meet).
- Justify why the chosen techniques (e.g., programming language, data structures) are appropriate.

### Development (Criterion C)

- Use **appropriate data structures** and explain why you chose them.
- Include evidence of **iterative development** (screenshots of versions, test logs).
- Write **well-structured, documented code** with meaningful variable names.
- Handle **errors and invalid input** gracefully.

### Evaluation (Criterion E)

- Test against your **success criteria** from Criterion A.
- Include **user feedback** from your client.
- Discuss **limitations** of your solution and suggest improvements.
- Be honest — examiners value genuine self-reflection over hollow praise.

### Common IA mistakes

- Choosing a project that is too simple (e.g., a basic calculator) or too complex (e.g., a full
  social network).
- Failing to include meaningful client interaction throughout the process.
- Not testing edge cases or not documenting test results.
- Writing code comments that merely restate the code rather than explaining the purpose.

## Command Terms Reference

Understanding command terms is critical for Paper 1 and Paper 2:

| Command Term   | What it means                                                                 |
| -------------- | ----------------------------------------------------------------------------- |
| Define         | Give the precise meaning of a term                                            |
| Describe       | Give a detailed account                                                       |
| Explain        | Give a detailed account including reasons or causes                           |
| Discuss        | Offer a considered and balanced review that includes a range of arguments     |
| Evaluate       | Make an appraisal by weighing up the strengths and limitations                |
| Compare        | Give an account of the similarities and differences between two or more items |
| Justify        | Give valid reasons or evidence to support an answer or conclusion             |
| Outline        | Give a brief account or summary                                               |
| Analyse        | Break down in order to bring out the essential elements or structure          |
| To what extent | Consider the merits or otherwise of an argument or concept                    |

> **Exam tip**: Underline or circle the command term in the exam question before you begin writing.
> This ensures you address the question at the correct cognitive level.

## Grade Boundaries

Grade boundaries vary each examination session. As a general guide for a recent session:

| Grade | SL (approx.) | HL (approx.) |
| ----- | ------------ | ------------ |
| 7     | 75–100%      | 73–100%      |
| 6     | 64–74%       | 62–72%       |
| 5     | 52–63%       | 50–61%       |
| 4     | 40–51%       | 38–49%       |
| 3     | 27–39%       | 25–37%       |

> **Note**: These are approximate boundaries and shift each year. Always check the most recent IB
> subject report for your session.

## Time Management Strategy

A recommended approach for the final revision period:

1. **Weeks 1–2**: Review all core topics. Create summary sheets for each topic area.
2. **Weeks 3–4**: Practice past papers under timed conditions. Focus on understanding mark schemes.
3. **Weeks 5–6**: Target weak areas identified from practice papers. Revise IA notes and ensure all
   criteria are fully addressed.
4. **Final week**: Light review of command terms and key definitions. Practice one full Paper 1 and
   one Paper 2 under exam conditions.

## Topic Weighting Guide

Understanding which topics carry the most marks helps you prioritize your revision.

### SL Core Topics

| Topic                  | Approximate Paper 1 Weight | Paper 2 Relevance |
| ---------------------- | -------------------------- | ----------------- |
| System Fundamentals    | High                       | Scenario-based    |
| Computer Organization  | Medium                     | Trace questions   |
| Networks               | Medium                     | Scenario-based    |
| Computational Thinking | Very High                  | Algorithm design  |

### HL Additional Topics

| Topic                    | Approximate Paper 1 Weight | Paper 2 Relevance |
| ------------------------ | -------------------------- | ----------------- |
| Abstract Data Structures | High                       | Algorithm tracing |
| Resource Management      | Medium                     | Scenario-based    |
| Control                  | Medium                     | Scenario-based    |

### Options

| Option                      | Paper 1 Weight | Paper 2 Relevance |
| --------------------------- | -------------- | ----------------- |
| Databases                   | Medium         | SQL queries       |
| Modelling and Simulation    | Medium         | Scenario-based    |
| Web Science                 | Medium         | Scenario-based    |
| Object-Oriented Programming | Medium         | Code tracing      |

> **Exam tip**: Computational Thinking consistently carries the highest mark allocation. Ensure you
> are comfortable with algorithm design, tracing, and Big-O notation before focusing on other areas.

## Worked Example: Answering a 10-Mark Question

**Question**: "Evaluate the impact of cloud computing on data storage and processing in modern
organizations."

**Sample answer structure** (using PEEL):

**Point**: Cloud computing has significantly reduced the cost of data storage for organizations.

**Evidence**: Instead of purchasing and maintaining expensive on-premises servers, organizations can
rent storage space from providers such as AWS, Google Cloud, or Microsoft Azure on a pay-as-you-go
basis. Small businesses that previously could not afford enterprise-grade infrastructure can now
access the same capabilities.

**Explanation**: This cost reduction is achieved through economies of scale — cloud providers serve
millions of customers and can spread infrastructure costs across them. Additionally, the cloud model
converts capital expenditure (buying hardware) into operational expenditure (monthly subscription),
improving cash flow.

**Link**: This demonstrates that cloud computing has democratized access to powerful computing
resources, though it also introduces dependencies on third-party providers and potential security
concerns.

**Point**: However, cloud computing raises significant data privacy and security concerns.

**Evidence**: When data is stored on third-party servers, organizations must trust the provider's
security measures. High-profile breaches (e.g., the Capital One data breach in 2019, which exposed
100 million customer records) illustrate the risks. Additionally, data sovereignty laws (such as
GDPR in the EU) restrict where data can be stored and processed.

**Explanation**: Organizations must carefully evaluate their cloud provider's compliance with
relevant regulations and implement additional security measures (encryption, access controls). The
shared responsibility model means that while the provider secures the infrastructure, the customer
is responsible for securing their data.

**Link**: Therefore, while cloud computing offers clear advantages in cost and scalability,
organizations must balance these benefits against the risks of data breaches and regulatory
non-compliance.

> **Exam tip**: For a 10-mark question, aim for 4–5 well-developed points. Each point should include
> specific evidence and explanation. The conclusion should synthesize your arguments rather than
> simply restating them.

## Common Mistakes by Criterion

### Paper 1 — Knowledge and Understanding

- Vague definitions that lack precision (e.g., defining "algorithm" as "a way to solve a problem"
  without mentioning finiteness or step-by-step nature).
- Confusing related concepts (e.g., confusing "abstraction" with "encapsulation" or "compilation"
  with "interpretation").
- Failing to use examples to illustrate definitions.

### Paper 2 — Application and Problem Solving

- Not reading the scenario carefully and missing key details.
- Writing code that is syntactically correct but logically flawed.
- Not testing algorithms with appropriate test data.
- Missing edge cases in algorithm design.

### IA — Internal Assessment

- Choosing a project that lacks a genuine client need.
- Writing a solution overview that is too vague (Criterion B).
- Not including enough evidence of iterative development (Criterion C).
- Providing a superficial evaluation that does not genuinely assess the solution against success
  criteria (Criterion E).

## Revision Checklist

Use this checklist to track your preparation:

- [ ] I can define all key terms from the syllabus
- [ ] I can explain the machine instruction cycle (fetch-decode-execute)
- [ ] I can trace algorithms using trace tables
- [ ] I can write algorithms in pseudocode and Python
- [ ] I can implement and explain common data structures (arrays, stacks, queues)
- [ ] I can compare sorting and searching algorithms by efficiency
- [ ] I understand network topologies, protocols, and security
- [ ] I can discuss ethical issues related to computing (privacy, AI bias, digital divide)
- [ ] I have completed at least 5 past papers for each paper under timed conditions
- [ ] I have reviewed my IA against all criteria and made improvements
- [ ] I know the command terms and can identify them in exam questions
