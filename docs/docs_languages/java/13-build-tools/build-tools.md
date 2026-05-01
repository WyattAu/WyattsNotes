---
id: build-tools
title: Build Tools and Dependency Management
description:
  Build Tools and Dependency Management — Project Structure Conventions; Maven;
  POM Structure; Lifecycle Phases with worked examples and exam-style questions.
slug: build-tools
---

## Project Structure Conventions

Java projects follow a standard directory layout established by Maven and adopted by Gradle and most
IDEs:

```
my-project/
├── pom.xml or build.gradle
├── src/
│   ├── main/
│   │   ├── java/           # Production Java source files
│   │   │   └── com/example/
│   │   │       └── MyApp.java
│   │   ├── resources/      # Production resources (properties, XML, configs)
│   │   │   └── application.properties
│   │   └── java9+          # Module-info.java for Java 9+ modules
│   └── test/
│       ├── java/           # Test Java source files
│       │   └── com/example/
│       │       └── MyAppTest.java
│       └── resources/      # Test resources
│           └── test.properties
├── target/ or build/       # Build output (generated, in .gitignore)
└── .gitignore
```

**Key conventions:**

- Production code goes in `src/main/java`.
- Test code goes in `src/test/java`.
- Resources go alongside the Java source in `src/main/resources` and `src/test/resources`.
- The default package for production code is typically `com.yourcompany.project`.
- The output directory is `target/` (Maven) or `build/` (Gradle).

## Maven

### POM Structure

The Project Object Model (POM) is an XML file (`pom.xml`) that describes the project, its
dependencies, plugins, and build configuration.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>My Application</name>
    <description>A demonstration project</description>

    <properties>
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <junit.version>5.10.2</junit.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>${junit.version}</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.12.1</version>
                <configuration>
                    <source>21</source>
                    <target>21</target>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.2.5</version>
            </plugin>
        </plugins>
    </build>
</project>
```

**Coordinate system:** Every Maven artifact is identified by three coordinates:

- **`groupId`** — typically the reverse domain name (`com.example`, `org.apache.commons`).
- **`artifactId`** — the project or library name (`my-app`, `commons-lang3`).
- **`version`** — semantic version (`1.0.0`, `2.3.1-SNAPSHOT`).

### Lifecycle Phases

Maven's build lifecycle is a sequence of phases. Each phase delegates to plugins that implement the
behavior. Running a phase executes all prior phases in order.

| Phase      | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| `validate` | Validate project structure and POM correctness                      |
| `compile`  | Compile production source code                                      |
| `test`     | Compile and run unit tests                                          |
| `package`  | Package compiled code into JAR/WAR                                  |
| `verify`   | Run integration tests and verify quality checks                     |
| `install`  | Install the artifact into the local repository (`~/.m2/repository`) |
| `deploy`   | Copy the artifact to a remote repository                            |

```bash
# Run a specific phase (and all prior phases)
mvn compile       # compile production code only
mvn test          # compile + run tests
mvn package       # compile + test + package into JAR
mvn install       # package + install to local repo
mvn clean install # clean + full build + install

# Skip tests (not recommended as a habit)
mvn package -DskipTests
```

### Dependency Scopes

Maven scopes control when a dependency is available:

| Scope               | Compile | Test | Runtime | Package | Transitively Available |
| ------------------- | ------- | ---- | ------- | ------- | ---------------------- |
| `compile` (default) | Yes     | Yes  | Yes     | Yes     | Yes                    |
| `provided`          | Yes     | Yes  | No      | No      | No                     |
| `runtime`           | No      | Yes  | Yes     | Yes     | Yes                    |
| `test`              | No      | Yes  | No      | No      | No                     |
| `system`            | Yes     | Yes  | No      | Yes     | No                     |

```xml
<!-- compile (default) — needed for compilation, included in package -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.14.0</version>
</dependency>

<!-- provided — needed for compilation, but not included in package -->
<!-- (expected to be provided by the runtime environment) -->
<dependency>
    <groupId>jakarta.servlet</groupId>
    <artifactId>jakarta.servlet-api</artifactId>
    <version>6.0.0</version>
    <scope>provided</scope>
</dependency>

<!-- runtime — not needed for compilation, needed at runtime -->
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>8.3.0</version>
    <scope>runtime</scope>
</dependency>

<!-- test — only available during test compilation and execution -->
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.2</version>
    <scope>test</scope>
</dependency>
```

### Transitive Dependencies and Dependency Mediation

When your project depends on library A, and library A depends on library B, library B is a
**transitive dependency**. Maven resolves transitive dependencies automatically.

**Mediation rules (when version conflicts exist):**

1. **Nearest definition wins** — if two dependency paths provide the same artifact with different
   versions, the version from the nearest path (shortest path in the dependency tree) is selected.
2. **First declaration wins** — if two paths have the same depth, the version declared first in the
   POM wins.

```bash
# View the dependency tree
mvn dependency:tree

# Find dependency conflicts
mvn dependency:analyze

# Find unused declared dependencies
mvn dependency:analyze -DignoreNonCompile=true
```

### Maven Plugins

Plugins provide the actual build behavior for each lifecycle phase:

```xml
<!-- Compiler plugin — controls Java version and compilation flags -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.12.1</version>
    <configuration>
        <source>21</source>
        <target>21</target>
        <compilerArgs>
            <arg>-parameters</arg>
            <arg>-Xlint:all</arg>
        </compilerArgs>
    </configuration>
</plugin>

<!-- Surefire plugin — runs unit tests -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>3.2.5</version>
    <configuration>
        <includes>
            <include>**/*Test.java</include>
            <include>**/*Tests.java</include>
        </includes>
        <useModulePath>false</useModulePath>
    </configuration>
</plugin>

<!-- Failsafe plugin — runs integration tests -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-failsafe-plugin</artifactId>
    <version>3.2.5</version>
    <executions>
        <execution>
            <goals>
                <goal>integration-test</goal>
                <goal>verify</goal>
            </goals>
        </execution>
    </executions>
</plugin>

<!-- Shade plugin — creates an uber-jar with all dependencies -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-shade-plugin</artifactId>
    <version>3.5.2</version>
    <executions>
        <execution>
            <phase>package</phase>
            <goals>
                <goal>shade</goal>
            </goals>
            <configuration>
                <transformers>
                    <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                        <mainClass>com.example.Main</mainClass>
                    </transformer>
                </transformers>
                <filters>
                    <filter>
                        <artifact>*:*</artifact>
                        <excludes>
                            <exclude>META-INF/*.SF</exclude>
                            <exclude>META-INF/*.DSA</exclude>
                            <exclude>META-INF/*.RSA</exclude>
                        </excludes>
                    </filter>
                </filters>
            </configuration>
        </execution>
    </executions>
</plugin>
```

**Surefire vs Failsafe:** Surefire runs unit tests during the `test` phase. Failsafe runs
integration tests during the `integration-test` and `verify` phases. By convention, integration test
classes are named `*IT.java` or `*IntegrationTest.java`.

## Gradle

### Build Script Basics

Gradle uses Groovy or Kotlin DSL for build scripts. The Kotlin DSL (`build.gradle.kts`) is now the
default and recommended approach.

```kotlin
// build.gradle.kts
plugins {
    java
    application
}

group = "com.example"
version = "1.0.0-SNAPSHOT"

java {
    sourceCompatibility = JavaVersion.VERSION_21
    targetCompatibility = JavaVersion.VERSION_21
}

application {
    mainClass.set("com.example.Main")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.apache.commons:commons-lang3:3.14.0")
    testImplementation("org.junit.jupiter:junit-jupiter:5.10.2")
}

tasks.test {
    useJUnitPlatform()
}

tasks.jar {
    manifest {
        attributes("Main-Class" to "com.example.Main")
    }
}
```

### Gradle Tasks

Gradle's build model is based on tasks. Each task has inputs, outputs, and an action. Gradle's
incremental build system skips tasks whose inputs and outputs have not changed (up-to-date check).

```bash
# List all available tasks
./gradlew tasks

# Run specific tasks
./gradlew build        # compile + test + jar
./gradlew test         # run tests
./gradlew clean        # delete build output
./gradlew jar          # build JAR only
./gradlew bootRun      # run Spring Boot app (with Spring Boot plugin)

# See task details
./gradlew tasks --all
./gradlew help --task test
```

### Dependency Configurations

Gradle uses configurations to declare dependencies with different roles:

| Configuration        | Maven Equivalent | Description                                                             |
| -------------------- | ---------------- | ----------------------------------------------------------------------- |
| `implementation`     | `compile`        | Used for compilation and runtime, not exposed to dependents             |
| `api`                | `compile`        | Used for compilation and runtime, exposed to dependents (use sparingly) |
| `compileOnly`        | `provided`       | Needed for compilation only, not included in runtime classpath          |
| `runtimeOnly`        | `runtime`        | Needed at runtime only                                                  |
| `testImplementation` | `test`           | Used for compiling and running tests                                    |
| `testCompileOnly`    | N/A              | Needed for test compilation only                                        |
| `testRuntimeOnly`    | `test` (runtime) | Needed for running tests only                                           |

```kotlin
dependencies {
    // Implementation — standard production dependency
    implementation("com.fasterxml.jackson.core:jackson-databind:2.16.1")

    // API — exposes this dependency to consumers of this library
    // Use ONLY for dependencies that are part of this module's public API
    api("org.slf4j:slf4j-api:2.0.11")

    // Compile only — provided by the runtime (e.g., servlet API)
    compileOnly("jakarta.servlet:jakarta.servlet-api:6.0.0")

    // Runtime only — JDBC driver, logging implementation
    runtimeOnly("com.mysql:mysql-connector-j:8.3.0")
    runtimeOnly("ch.qos.logback:logback-classic:1.4.14")

    // Test dependencies
    testImplementation("org.junit.jupiter:junit-jupiter:5.10.2")
    testImplementation("org.mockito:mockito-core:5.11.0")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}
```

### Gradle Kotlin DSL Features

```kotlin
// Dependency constraints — enforce version ranges
dependencies {
    implementation("com.google.guava:guava")
    constraints {
        implementation("com.google.guava:guava:33.0.0-jre") {
            because("align guava version across modules")
        }
    }
}

// BOM (Bill of Materials) import
dependencies {
    implementation(platform("org.springframework.boot:spring-boot-dependencies:3.2.3"))
    implementation("org.springframework.boot:spring-boot-starter-web")
    // Version resolved by BOM — no explicit version needed
}

// Custom configurations
val integrationTest by configurations.creating {
    isCanBeConsumed = false
    isCanBeResolved = true
    extendsFrom(configurations["testImplementation"])
}

// Source sets
sourceSets {
    create("integrationTest") {
        java.srcDir("src/integrationTest/java")
        resources.srcDir("src/integrationTest/resources")
        compileClasspath += sourceSets["main"].output + configurations["testRuntimeClasspath"]
        runtimeClasspath += output + compileClasspath
    }
}
```

## Maven vs Gradle

| Aspect             | Maven                        | Gradle                                  |
| ------------------ | ---------------------------- | --------------------------------------- |
| Build model        | Phase-based lifecycle        | Task-based DAG                          |
| Configuration      | XML (verbose, declarative)   | Groovy/Kotlin DSL (concise, imperative) |
| Incremental builds | Limited (re-runs phases)     | Up-to-date checks per task              |
| Performance        | Slower for large projects    | Build cache, configuration avoidance    |
| Learning curve     | Lower (conventions)          | Higher (more flexible)                  |
| Multi-module       | Good (inheritance, profiles) | Excellent (composite builds)            |
| Ecosystem          | Central (Maven Central)      | Central (can consume Maven repos)       |
| Custom logic       | Plugins (Java/MXML)          | Any Groovy/Kotlin code in build script  |

## Version Management

### Semantic Versioning

```
MAJOR.MINOR.PATCH[-QUALIFIER]
```

- **MAJOR** — incompatible API changes.
- **MINOR** — backward-compatible feature additions.
- **PATCH** — backward-compatible bug fixes.

### SNAPSHOT vs RELEASE

- **`SNAPSHOT`** — a development version that may change. Maven repositories can serve the latest
  SNAPSHOT for each request (`-SNAPSHOT` suffix).
- **RELEASE** — a stable, immutable version. Once published, the artifact never changes.

```xml
<!-- SNAPSHOT — will check for updates on each build -->
<version>1.0.0-SNAPSHOT</version>

<!-- RELEASE — cached locally, never re-downloaded (unless forced) -->
<version>1.0.0</version>
```

### Dependency Version Ranges

Maven supports version ranges, but they are a source of non-reproducible builds. Use with caution:

```xml
<!-- Prefer exact versions -->
<version>3.14.0</version>

<!-- Avoid version ranges — they cause non-reproducible builds -->
<version>[3.12.0,4.0.0)</version>  <!-- >= 3.12.0, < 4.0.0 -->
<version>[3.14.0]</version>         <!-- exactly 3.14.0 -->
```

:::warning
Avoid version ranges in production. They make builds non-reproducible — a build that
works today may break tomorrow when a new compatible version is published. Pin exact versions and
update them deliberately through dependency review.
:::

## Multi-Module Projects

### Maven Multi-Module

```xml
<!-- Parent POM (pom.xml in project root) -->
<project>
    <groupId>com.example</groupId>
    <artifactId>my-project-parent</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>pom</packaging>

    <modules>
        <module>common</module>
        <module>service</module>
        <module>web</module>
    </modules>

    <properties>
        <spring-boot.version>3.2.3</spring-boot.version>
    </properties>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>${spring-boot.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
</project>
```

```xml
<!-- Child POM (common/pom.xml) -->
<project>
    <parent>
        <groupId>com.example</groupId>
        <artifactId>my-project-parent</artifactId>
        <version>1.0.0-SNAPSHOT</version>
    </parent>

    <artifactId>common</artifactId>
    <dependencies>
        <!-- Version managed by parent's dependencyManagement -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>
    </dependencies>
</project>
```

### Gradle Multi-Module

```kotlin
// settings.gradle.kts
rootProject.name = "my-project"
include("common", "service", "web")
```

```kotlin
// build.gradle.kts (root project)
subprojects {
    apply(plugin = "java")

    repositories {
        mavenCentral()
    }

    dependencies {
        val implementation by configurations
        val testImplementation by configurations

        testImplementation("org.junit.jupiter:junit-jupiter:5.10.2")
    }

    tasks.test {
        useJUnitPlatform()
    }
}
```

```kotlin
// service/build.gradle.kts
dependencies {
    implementation(project(":common"))
    implementation("org.springframework.boot:spring-boot-starter-web:3.2.3")
}
```

### Inter-Module Dependencies

```bash
# Maven — build all modules in dependency order
mvn clean install

# Gradle — build specific module and its dependencies
./gradlew :web:build
```

:::info
In Maven, a parent POM with `&lt;packaging&gt;pom&lt;/packaging&gt;` serves as an
aggregation point and a source of shared configuration. In Gradle, the `settings.gradle.kts` file
declares which modules belong to the build, and shared configuration is applied through convention
plugins or the `subprojects` block.
:::

## Common Pitfalls

### Dependency Hell — Version Conflicts

```bash
# Maven: analyze the dependency tree to find conflicts
mvn dependency:tree -Dverbose | grep "conflict"

# Gradle: view dependency tree
./gradlew dependencies --configuration runtimeClasspath
```

**Symptoms:** `NoSuchMethodError`, `ClassNotFoundException`, `NoClassDefFoundError` at runtime.
These occur when multiple versions of the same library are on the classpath.

**Fix:** Use `dependencyManagement` (Maven) or `constraints`/BOM (Gradle) to force a single version
across all modules.

### Forgetting `testImplementation` Scope

```xml
<!-- BUG — JUnit is a compile dependency, bundled in production JAR -->
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.2</version>
    <!-- Missing <scope>test</scope> -->
</dependency>
```

### `provided` Scope Misuse

```xml
<!-- BUG — using provided for a library that is NOT available at runtime -->
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <scope>provided</scope>
<!-- ^ guava is not part of any standard runtime environment -->
<!-- This will cause ClassNotFoundException at runtime -->
</dependency>
```

### SNAPSHOT Instability

SNAPSHOT versions are mutable — the same version number may resolve to different artifacts over
time. This can cause builds to succeed locally but fail on CI (which may have cached an older
snapshot), or two developers to get different results.

**Fix:** Use SNAPSHOT only during active development. Release stable versions frequently. Configure
your CI to clean the local Maven repository before building.

### Not Using a Dependency BOM

Without a BOM or `dependencyManagement`, each dependency version must be declared individually,
leading to version mismatches between related libraries:

```xml
<!-- BAD — individual versions may be incompatible -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>6.1.4</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>6.0.0</version>
<!-- ^ Incompatible with spring-core 6.1.4 -->
</dependency>

<!-- GOOD — use a BOM to manage compatible versions -->
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-dependencies</artifactId>
            <version>3.2.3</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

### Gradle Configuration Cache Issues

Gradle's configuration cache (enabled with `--configuration-cache`) caches the project configuration
between builds. Build scripts must be idempotent — they must not read system state that can change
between builds (e.g., `System.getenv()` outside of providers, `new Date()` in dependency
declarations).

```kotlin
// BAD — reads mutable system state during configuration
val buildTime = LocalDateTime.now()
version = "1.0.0-${buildTime}"

// GOOD — use providers for lazy evaluation
version = providers.gradleProperty("projectVersion").getOrElse("1.0.0-SNAPSHOT")
```

### Maven `system` Scope

```xml
<!-- AVOID — system scope references a local JAR file, making the build non-portable -->
<dependency>
    <groupId>com.oracle</groupId>
    <artifactId>ojdbc</artifactId>
    <version>19.0.0</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/lib/ojdbc19.jar</systemPath>
</dependency>
```

**Fix:** Install the JAR into your local Maven repository or a private Maven repository (Nexus,
Artifactory) and use it as a regular dependency.

## Repository Management

### Maven Repository Layout

Maven resolves dependencies from repositories in order:

1. **Local repository** (`~/.m2/repository`) — cached artifacts from all remote repos.
2. **Remote repositories** — Maven Central, corporate mirrors, private repositories.

```xml
<repositories>
    <repository>
        <id>central</id>
        <url>https://repo.maven.apache.org/maven2</url>
    </repository>
    <repository>
        <id>company-releases</id>
        <url>https://artifacts.company.com/maven/releases</url>
    </repository>
    <repository>
        <id>company-snapshots</id>
        <url>https://artifacts.company.com/maven/snapshots</url>
        <snapshots>
            <enabled>true</enabled>
            <updatePolicy>daily</updatePolicy>
        </snapshots>
    </repository>
</repositories>
```

### Gradle Repository Configuration

```kotlin
repositories {
    mavenCentral()
    mavenLocal()
    maven {
        url = uri("https://artifacts.company.com/maven/releases")
        credentials {
            username = project.findProperty("repoUser") as String? ?: ""
            password = project.findProperty("repoPassword") as String? ?: ""
        }
    }
    maven {
        url = uri("https://artifacts.company.com/maven/snapshots")
    }
    exclusiveContent {
        forRepository {
            maven("https://artifacts.company.com/maven3")
        }
        filter {
            includeGroup("com.company.internal")
        }
    }
}
```

### Publishing Artifacts

**Maven:**

```xml
<distributionManagement>
    <repository>
        <id>company-releases</id>
        <url>https://artifacts.company.com/maven/releases</url>
    </repository>
    <snapshotRepository>
        <id>company-snapshots</id>
        <url>https://artifacts.company.com/maven/snapshots</url>
    </snapshotRepository>
</distributionManagement>

<!-- Publish with: mvn deploy -->
```

**Gradle:**

```kotlin
plugins {
    `maven-publish`
}

publishing {
    repositories {
        maven {
            name = "company"
            url = uri(if (version.toString().endsWith("SNAPSHOT"))
                "https://artifacts.company.com/maven/snapshots"
            else
                "https://artifacts.company.com/maven/releases")
            credentials {
                username = project.findProperty("repoUser") as String? ?: ""
                password = project.findProperty("repoPassword") as String? ?: ""
            }
        }
    }
    publications {
        create<MavenPublication>("mavenJava") {
            from(components["java"])
            pom {
                name.set("My Library")
                description.set("A library for doing things")
                url.set("https://github.com/company/my-library")
            }
        }
    }
}

// Publish with: ./gradlew publish
```

### Private Repositories (Nexus, Artifactory)

Corporate environments typically run a private Maven repository manager (Sonatype Nexus, JFrog
Artifactory) that:

- **Proxies Maven Central** — reduces external bandwidth and provides a local cache.
- **Hosts internal libraries** — first-party artifacts not published to Maven Central.
- **Manages security** — authentication, authorization, and audit logging.
- **Supports multiple formats** — Maven, Gradle, npm, Docker, PyPI.

## Build Profiles

### Maven Profiles

Maven profiles activate different build configurations based on environment or parameters:

```xml
<profiles>
    <profile>
        <id>dev</id>
        <activation>
            <activeByDefault>true</activeByDefault>
        </activation>
        <properties>
            <env>dev</env>
            <db.url>jdbc:h2:mem:testdb</db.url>
        </properties>
    </profile>
    <profile>
        <id>prod</id>
        <properties>
            <env>prod</env>
            <db.url>jdbc:postgresql://db.company.com:5432/appdb</db.url>
        </properties>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-shade-plugin</artifactId>
                    <executions>
                        <execution>
                            <phase>package</phase>
                            <goals><goal>shade</goal></goals>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
    </profile>
</profiles>
```

```bash
# Activate a profile
mvn package -Pprod
mvn package -Pdev,ci
```

### Gradle Build Variants

Gradle does not have a direct equivalent of Maven profiles, but you can achieve similar behavior:

```kotlin
// Environment-specific source sets
val env: String by project

sourceSets {
    create("main-${env}") {
        resources {
            srcDir("src/main/resources-${env}")
        }
    }
}

dependencies {
    implementation(sourceSets["main-${env}"].output)
}
```

## Dependency Resolution and Caching

### Maven Dependency Resolution Order

1. Check the local repository (`~/.m2/repository`).
2. If not found, check remote repositories in declaration order.
3. Download the artifact and its POM (for transitive dependencies).
4. Resolve transitive dependencies recursively.
5. Apply mediation (nearest wins, then first declaration).

### Gradle Dependency Resolution

Gradle resolves dependencies lazily during task execution. Key features:

- **Configuration cache** — caches resolved dependency graphs between builds.
- **Build cache** — caches task outputs (including compiled classes) across builds.
- **File-based dependency locking** — pins resolved versions to a lock file.

```kotlin
// Dependency locking for reproducible builds
// Run once: ./gradlew dependencies --write-locks
// Then: ./gradlew build --lock-mode=STRICT
```

### Cleaning the Local Cache

```bash
# Maven — clean local repository
rm -rf ~/.m2/repository/com/example

# Maven — force update of SNAPSHOTs
mvn clean install -U

# Gradle — clean build cache
./gradlew cleanBuildCache
./gradlew clean
rm -rf ~/.gradle/caches
```

## Wrapper Scripts

Both Maven and Gradle provide wrapper scripts that ensure a consistent build tool version across all
environments, regardless of what is installed on the developer's machine.

### Maven Wrapper

```bash
# Generate wrapper (run once)
mvn wrapper:wrapper -Dmaven=3.9.6

# Build using wrapper (no Maven installation required)
./mvnw clean install
```

The wrapper downloads the specified Maven version to `~/.m2/wrapper/dists/` and uses it for the
build. Check `mvnw` and `.mvn/wrapper/maven-wrapper.properties` into version control.

### Gradle Wrapper

```bash
# Generate wrapper (run once)
gradle wrapper --gradle-version=8.5

# Build using wrapper (no Gradle installation required)
./gradlew build
```

The wrapper downloads the specified Gradle distribution to `~/.gradle/wrapper/dists/`. Check
`gradlew`, `gradlew.bat`, and `gradle/wrapper/gradle-wrapper.properties` into version control.

:::warning
Always use wrapper scripts. Never depend on a globally installed Maven or Gradle.
Different developers (and CI agents) may have different versions installed, leading to "works on my
machine" build failures. Pin the wrapper version in version control and update it deliberately
through a PR.
:::

