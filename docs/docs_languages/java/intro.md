---
id: intro
title: Introduction to Java
description:
  'Rigorous programming language notes covering Introduction to Java. Includes definitions,
  derivations, worked examples, and exam-style problems.'
slug: intro
sidebar_position: 1
---

## Abstract

This resource is created as an aggregation of best practices in Java. If you are learning Java for a
specific course, please refer to the IB Computer Science notes on this site for JETS.

## Topics Covered

### Core Language

- **Syntax and semantics** — primitive types, operators, control flow, arrays
- **Object-oriented programming** — classes, objects, inheritance, polymorphism, interfaces,
  abstract classes
- **Exception handling** — checked vs. unchecked exceptions, `try`/`catch`/`finally`, custom
  exceptions
- **Generics** — type parameters, bounded types, wildcards, type erasure

### Standard Library

- **Collections Framework** — `List` (`ArrayList`, `LinkedList`), `Set` (`HashSet`, `TreeSet`),
  `Map` (`HashMap`, `TreeMap`); choosing the right collection
- **Streams API** — functional-style operations on collections: `filter`, `map`, `reduce`, `collect`
- **I/O** — byte streams, character streams, buffered I/O, NIO
- **Concurrency** — `Thread`, `Runnable`, `ExecutorService`, `synchronized`, `java.util.concurrent`

### Best Practices

- **Effective Java** items — favour composition over inheritance, program to interfaces, minimise
  mutability
- **Design patterns** — Singleton, Factory, Observer, Strategy, Builder
- **Testing** — JUnit 5, test-driven development, mocking with Mockito
- **Build tools** — Maven and Gradle project structures, dependency management

## Code Examples

All code examples compile under Java 17 (LTS) unless otherwise noted.

<div className="godbolt-container">
 <iframe
 width="100%"
 height="800"
 src="https://godbolt.org/e#z:OYLghAFBqd5QCxAFwE4FN0BoCWIIDGAtgIYDW6AgqsAM4gDkAtACIDCAspQNICiA%2BgCEAqgEkAMi34AVAJoAFXgFIAzCxboARgFdgDLAQD2RAA44ANulTiSAO2DaSwdKIAmIAFYkAbiQPbaZGMAeW1kEzCAMQt0WxIidEZ9ADMY%2Blh0Vxwg1DcQACYsVMs8gEYimLiEkHQAD3iTSwA6L18sUAZ9HFpRWwJzbVdMxgAGLtoOEhxbAGVDbVQCRIYx3Fpgk1jR/XM7YDyCJXzBI8EASjO1znJ0eVRDD3QCZEZS/Q8Qctt0AHdokvc%2BUu5kYAFZ9LZtlhDIxpBh0ABqI4qN5YF4rBiXCBIIxDXhZHK4fDFWLxRJ1BrNVp%2BZKGWzIGYEEiWT6FWn04S0W61KEfQq7eyeHx%2BLmWZ44On4WKuNiGAZESGglRYaXiaboABy2iImisnwAnFgTIZaNkJbZZfLFcrjabkOa1d8tTq9aVDaKnva6TNkCRUMhLdrrVgPeLvb7/Y7NdrdagDSGIwG5UGQEqE37kFHnbGDZdaPNFssIppzDgCAj%2BiRaLQERTTJYkQB2E4jSgI9sI4ul8uBEj28veQw4VwI0jTCA%2B1DTYBKUEnUEsBF%2BuhnJsttsdzepOLmBHTZAIn5ItQIgAcIywCIQx8X%2BQALJfSLVRMgrDeEaURiNVOvN1vpsyCKTtOFYIH6NaqIuRz5AiTQgEwkGnAAVMiRyggAAtBP5KK2f4djhG54bSqAIhA%2B4IgAnu%2B34qIIlHHmwV4/pRpynKuSjNgReF4a48wloiOCkMA76lE0IwIkwCL5GJCJIfRAD0TG0Vx3GbsB9iCNoFhDCR9xHpBCLfEe6nAJp2lWBAZzYbhqkdsRpHkbU1HMU5qiMT8Lmscc7GcTZtl/rx2j8QiGCAQZKhNKCskIk5ilHpJ0mgtZhH%2BR2gXBQAXiRBkXgiGU4M5yl%2Bal7bkQVOXJSVm4/AgMSkVlSFZUixx5TgjXlSobAGXeMlHAAbP1e4MaOJDPq%2BqA%2Bb%2BVU8XxDbIKY74NU1kn5e1zV0aF5iVdNf75e%2B%2BSNaga2nHuQnbTtHZNQZ80mOdF17l5JxFSlJUcSwKnTXpTQkCYmy2K4ZE3gZT4vm%2BqiRAiYAMJD0MgKB4FNAQYGoJQyCA2h8OoLQTSWPYyAIJZFx3apb0fbZMwUYE6BEE08zIE0JhTvS5i2BAelWc9JONu9xWk62fOUJiWAggw4JYJCGLQjU9T1ugLTCmi2wXFgZAgI2on6qUjann1%2BT3n1jaa42D4i3e%2BhEKmF4S6sMKdCGnyKxiWIwIgIB0xEyBEoQxhmJYqAamSjAeK4ZBSaJIxNPkKR0gyTIsqUbIx5y3K8g7aCYMODs/KgP2vELIti9b%2Bi26E4RhAihjJAiweh/k4eR6RsqmDE2X5CiZz6OiYxYjiPst17RjN37Qq%2BHXIxshY430BAmhQpoAGoBRedYPPcSL8EmiPM8y%2BDwk9LBLY5hL5LQw6MAbDMuY9AMKiQykPYLInzgGDit46DX6sdRPGEyyrPu6Ai1WKWTQOdF6yiGFCNAgll5v1QJoE06AND32AKWQUTsii7DoAANRwL8DYWwb7R3pIyZkiRSgPnZMgZO8geSSw%2BOUAUoBqTCxwJodIlloQmC9LYa%2BxdYFTiGOwvMADPTmilP9QMCoHaqnVNmV0RoTRmjpJIyE5RbRKNsFmGM8jQzcJ9BmFRDtdHmn0ZGWR2i4zlF7P6QxVjExaJdJYy46cyHAjBBCKEttq4hzDmJBuEA4SYGau3TuStLgIHQCQHS%2BA3EMDNlgC2oIraeKSPbC8XdMSXFVp%2BC8IsVAeMlrbUJTtLiwNNJKO8QA%3D%3D"
 title="Compiler Explorer"
 sandbox="allow-scripts allow-same-origin"
 loading="lazy"
 ></iframe>
</div>
