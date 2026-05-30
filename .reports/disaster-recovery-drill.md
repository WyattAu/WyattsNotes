# Disaster Recovery Drill Schedule

> Quarterly drill schedule and procedures for WyattsNotes deployment recovery.

---

## Drill Frequency

**Schedule:** Quarterly, on the first Monday of:
- **Q1:** January 6, 2025
- **Q2:** April 7, 2025
- **Q3:** July 7, 2025
- **Q4:** October 6, 2025

If the scheduled Monday falls on a holiday, defer to the next business day.

---

## Drill Scope

Rotate through scenarios each quarter to ensure all recovery paths are tested:

| Quarter | Primary Scenario | Secondary Scenario |
|---------|-----------------|-------------------|
| Q1 | Content Rollback (Scenario 1) | Config Rollback (Scenario 2) |
| Q2 | Dependency Rollback (Scenario 3) | Full Site Rollback (Scenario 4) |
| Q3 | Multi-Site Failure (Scenario 5) | Full Site Rollback (Scenario 4) |
| Q4 | All Scenarios (Full Drill) | — |

Scenarios are defined in `.reports/rollback-test-procedure.md`.

---

## Participants

| Role | Responsibility | Required |
|------|---------------|----------|
| Drill Lead | Coordinates drill, runs scenarios, documents results | Yes |
| Observer | Verifies recovery independently, challenges assumptions | Yes |
| Reviewer | Reviews results post-drill, approves updates to runbooks | Optional |

Minimum: 1 person (Drill Lead).
Recommended: 2 people (Drill Lead + Observer).

---

## Drill Steps

### 1. Preparation (Day Before)

```bash
# Verify main branch is green
gh run list --workflow=CI --branch=main --limit 1
# Create drill branch
git checkout main && git pull && git checkout -b drill/YYYY-QN
```

- [ ] Main branch builds successfully
- [ ] All sites verified live and healthy
- [ ] Drill branch created
- [ ] Timer/recording ready

### 2. Execution

Follow the selected scenario from `.reports/rollback-test-procedure.md`.
Record timestamps at each step.

- [ ] Scenario started: ____ UTC
- [ ] Breakage introduced: ____ UTC
- [ ] Breakage confirmed: ____ UTC
- [ ] Recovery initiated: ____ UTC
- [ ] Recovery confirmed: ____ UTC

### 3. Verification

Run the full verification checklist from `.reports/rollback-test-procedure.md`:

- [ ] All sites return HTTP 200
- [ ] Correct content on all sites
- [ ] Search functional
- [ ] No test artifacts remain
- [ ] No console errors

### 4. Cleanup

```bash
# Delete drill branch
git checkout main
git branch -D drill/YYYY-QN
git push origin --delete drill/YYYY-QN
# Close any test issues if created
```

---

## Success Criteria

| Priority | Recovery Time Target | Description |
|----------|---------------------|-------------|
| **P1 — Critical** | < 15 minutes | All sites down (Scenario 5) |
| **P2 — High** | < 1 hour | Single site down (Scenarios 1-3) |
| **P3 — Medium** | < 4 hours | Build broken but cached site still live |

A drill **passes** if recovery completes within the target time for the scenario's priority level.

A drill **fails** if:
- Recovery exceeds the target time
- Site is not fully restored after recovery steps
- New issues are introduced during recovery

---

## Post-Drill Review

Complete within 3 business days of the drill:

### Lessons Learned Template

```markdown
## Drill: YYYY-QN
**Date:** YYYY-MM-DD
**Scenario:** [Name]
**Result:** Pass / Fail
**Recovery Time:** XX minutes (target: XX minutes)

### What Went Well
-

### What Needs Improvement
-

### Runbook Updates Needed
-

### Action Items
| Action | Owner | Due Date |
|--------|-------|----------|
|        |       |          |
```

### Required Actions After Each Drill

1. Update `.github/INCIDENT_RESPONSE.md` if any steps need correction
2. Update `.reports/rollback-test-procedure.md` if any commands are outdated
3. File issues for any tooling improvements discovered during the drill
4. Share summary with repository owner

---

## First Drill Date

| Field | Value |
|-------|-------|
| Scheduled Date | Monday, January 6, 2025 |
| Primary Scenario | Content Rollback (Scenario 1) |
| Secondary Scenario | Config Rollback (Scenario 2) |
| Drill Lead | ________________________________ |
| Observer | ________________________________ |
| Status | Not Started / In Progress / Completed |
| Result | ________________________________ |
