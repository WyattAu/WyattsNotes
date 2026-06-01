---
title: advanced topics
slug: ml/advanced-topics
date: 2026-05-30
tags:
  - Machine Learning
categories:
  - Machine Learning
description:
  'Advanced machine learning topics: transformers and attention mechanisms, generative adversarial
  networks, variational autoencoders, reinforcement learning,.'
---

## Attention Mechanisms and Transformers

Attention mechanisms allow a model to focus on different parts of an input sequence when producing
each element of an output. This capability — selectively attending to relevant information —
replaced recurrence as the dominant paradigm for sequence modeling.

### Self-Attention

Self-attention computes a weighted sum of all positions in a sequence, where the weights determine
how much each position contributes to the representation of another position. Given an input
sequence X, the self-attention output is:

```
Attention(Q, K, V) = softmax(Q * K^T / sqrt(d_k)) * V
```

Q (queries), K (keys), and V (values) are linear projections of the input:

```
Q = X * W_Q
K = X * W_K
V = X * W_V
```

Each position generates a query that is compared against all keys. The softmax normalization
produces attention weights that sum to 1. Multiplying these weights by the values produces a
context-aware representation for each position.

### Multi-Head Attention

A single attention head learns one type of relationship. Multi-head attention runs multiple
attention operations in parallel with different learned projections, then concatenates the results:

```
MultiHead(Q, K, V) = Concat(head_1, ..., head_h) * W_O
where head_i = Attention(Q * W_Q_i, K * W_K_i, V * W_V_i)
```

Different heads can attend to different relationships simultaneously — one head might track
syntactic structure while another tracks semantic proximity. This is the core mechanism that gives
transformers their expressiveness.

### Positional Encoding

Self-attention is permutation-invariant — it processes a set of vectors, not a sequence. Positional
encoding injects order information. The original transformer uses sinusoidal encodings:

```
PE(pos, 2i)   = sin(pos / 10000^(2i/d_model))
PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))
```

Learned positional embeddings are also common — a simple embedding matrix indexed by position, added
to the token embedding. Rotary positional embeddings (RoPE) apply rotations to queries and keys
based on position, combining absolute and relative position information.

### Transformer Architecture

The transformer consists of an encoder and a decoder. The encoder processes the input through
stacked layers of multi-head self-attention and feed-forward networks with residual connections and
layer normalization. The decoder adds masked self-attention (prevents attending to future tokens)
and cross-attention over the encoder output.

```
Encoder layer:
  x = x + MultiHeadAttention(x, x, x)
  x = LayerNorm(x)
  x = x + FeedForward(x)
  x = LayerNorm(x)

Decoder layer:
  x = x + MaskedMultiHeadAttention(x, x, x)
  x = LayerNorm(x)
  x = x + MultiHeadAttention(x, encoder_output, encoder_output)
  x = LayerNorm(x)
  x = x + FeedForward(x)
  x = LayerNorm(x)
```

### BERT and GPT

BERT (Bidirectional Encoder Representations from Transformers) uses the encoder stack for
understanding tasks — classification, question answering, named entity recognition. It is pretrained
with masked language modeling (predict randomly masked tokens) and next sentence prediction.

GPT (Generative Pre-trained Transformer) uses the decoder stack for generation tasks — text
completion, dialogue, code generation. It is pretrained with causal language modeling (predict the
next token given all previous tokens). Scaling up GPT models produced the large language model
family that underpins modern generative AI.

| Model | Architecture    | Training Objective | Primary Use   |
| ----- | --------------- | ------------------ | ------------- |
| BERT  | Encoder         | MLM + NSP          | Understanding |
| GPT   | Decoder         | Causal LM          | Generation    |
| T5    | Encoder-Decoder | Text-to-text       | Both          |
| BART  | Encoder-Decoder | Denoising          | Both          |

## Generative Models

Generative models learn the distribution of training data and can produce new samples from that
distribution. Three dominant families — VAEs, GANs, and diffusion models — approach this problem
with different trade-offs between sample quality, diversity, and training stability.

### Variational Autoencoders (VAEs)

A VAE consists of an encoder that maps input to a distribution in latent space and a decoder that
reconstructs samples from latent samples. Unlike a standard autoencoder, which maps to a fixed
point, a VAE maps to a probability distribution. This stochasticity enables generation: sample from
the latent prior and decode.

**Encoder-decoder structure:**

```
Input x → Encoder q(z|x) → Latent z ~ N(μ, σ²) → Decoder p(x|z) → Reconstruction x̂
```

The encoder outputs mean and variance parameters. During training, the loss function is the Evidence
Lower Bound (ELBO):

```
ELBO = E_q(z|x)[log p(x|z)] - KL(q(z|x) || p(z))

Reconstruction loss (first term) encourages accurate decoding.
KL divergence (second term) keeps latent distributions close to the prior.
```

**Key properties:**

- Latent space is continuous and structured — interpolation between latent vectors produces smooth
  transitions in output space
- Training is stable — the loss is a single scalar with no adversarial dynamics
- Generated samples tend to be blurry — the reconstruction objective averages over possible outputs,
  which smooths high-frequency detail

### Generative Adversarial Networks (GANs)

A GAN pits two networks against each other: a generator that produces fake samples and a
discriminator that attempts to distinguish real from fake. The generator improves by fooling the
discriminator; the discriminator improves by not being fooled.

**Minimax game:**

```
min_G max_D E_x[log D(x)] + E_z[log(1 - D(G(z))]

G: minimize the discriminator's ability to detect fakes
D: maximize its accuracy on real vs. fake
```

At equilibrium, the generator produces samples from the true data distribution and the discriminator
outputs 0.5 for everything.

**Training challenges:**

- Mode collapse — the generator produces a narrow range of outputs that fool the discriminator but
  cover only a few modes of the data distribution
- Training instability — the adversarial dynamics can oscillate without converging
- Vanishing gradients for the generator when the discriminator becomes too strong too early

**Architectures:**

| Variant  | Contribution                  | Key Innovation                          |
| -------- | ----------------------------- | --------------------------------------- |
| DCGAN    | Deep convolutional GANs       | Batch norm, transposed convs            |
| StyleGAN | Style-based generation        | Mapping network, adaptive instance norm |
| WGAN     | Wasserstein distance training | Weight clipping / gradient penalty      |
| CycleGAN | Unpaired image translation    | Cycle consistency loss                  |
| Pix2Pix  | Paired image translation      | Conditional GAN with L1 loss            |

StyleGAN progressively generates images through a series of style injections at different
resolutions, enabling fine-grained control over coarse attributes (pose, face shape) and fine
attributes (color, texture) independently.

### Diffusion Models

Diffusion models generate data by reversing a noise process. Forward diffusion gradually adds
Gaussian noise to data over T steps until the signal is destroyed. The model learns to reverse this
process: predict and remove noise at each step to recover the original data.

```
Forward: q(x_t | x_{t-1}) = N(x_t; sqrt(1-β_t) x_{t-1}, β_t I)
Reverse: p_θ(x_{t-1} | x_t) — learned neural network

Training objective: predict the noise ε added at each step
Loss = E_{x, ε, t}[||ε - ε_θ(x_t, t)||²]
```

Diffusion models produce the highest-quality samples among generative models and have become the
foundation for image generation (Stable Diffusion, DALL-E), audio generation, and video generation.
The cost is slow sampling — hundreds of sequential denoising steps. Techniques like DDIM and latent
diffusion (operating in a compressed latent space) accelerate this.

## Reinforcement Learning

Reinforcement learning (RL) trains agents to make sequences of decisions by maximizing cumulative
reward through trial and error. The agent interacts with an environment, receives observations and
rewards, and learns a policy that maps states to actions.

### Markov Decision Processes

An MDP formalizes the RL problem as a tuple (S, A, P, R, γ):

- **S**: set of states
- **A**: set of actions
- **P(s'|s,a)**: transition probability — probability of reaching state s' from state s after action
  a
- **R(s,a,s')**: reward received after transition
- **γ**: discount factor — how much to value future rewards vs. immediate ones

The objective is to find a policy π that maximizes the expected discounted return:

```
G_t = R_t + γ R_{t+1} + γ² R_{t+2} + ... = Σ γ^k R_{t+k}
```

### Value-Based Methods

**Q-learning** estimates the value of each state-action pair. The Q-function Q(s,a) represents the
expected return of taking action a in state s and following the optimal policy thereafter.

```
Q(s, a) ← Q(s, a) + α[R + γ max_a' Q(s', a') - Q(s, a)]
```

Deep Q-Networks (DQN) approximate Q(s,a) with a neural network. Key additions to make DQN stable:
experience replay (break temporal correlation), target networks (stabilize the learning target), and
double Q-learning (reduce overestimation).

### Policy Gradient Methods

Instead of learning a value function and deriving a policy, policy gradient methods directly
optimize the policy. The gradient of the expected return with respect to the policy parameters θ:

```
∇_θ J(θ) = E[Σ_t ∇_θ log π_θ(a_t | s_t) * G_t]
```

REINFORCE is the simplest policy gradient algorithm. It samples full trajectories, computes returns,
and updates the policy to increase probability of high-reward actions. The variance of gradient
estimates is high — baselines, advantage functions, and actor-critic methods reduce this.

### Actor-Critic Methods

Actor-critic methods combine policy gradient (actor) with value estimation (critic). The critic
provides a lower-variance estimate of the return, which the actor uses to update the policy.

```
Actor: π_θ(a|s) — selects actions
Critic: V_φ(s) or Q_φ(s,a) — estimates value
Advantage: A(s,a) = Q(s,a) - V(s) — how much better an action is than average
```

**PPO (Proximal Policy Optimization)** is the current standard for policy gradient training. It
clips the probability ratio between the new and old policy to prevent destructively large updates:

```
L(θ) = E[min(r_t(θ) * A_t, clip(r_t(θ), 1-ε, 1+ε) * A_t)]
where r_t(θ) = π_θ(a_t | s_t) / π_{θ_old}(a_t | s_t)
```

PPO is stable, sample-efficient enough for many tasks, and parallelizable — agents collect
experience in multiple environments simultaneously.

### Applications

| Domain    | Application                     | Key Challenge               |
| --------- | ------------------------------- | --------------------------- |
| Games     | Go (AlphaGo), Atari, Dota 2     | Massive state/action spaces |
| Robotics  | Manipulation, locomotion        | Sim-to-real transfer        |
| RLHF      | LLM alignment                   | Reward model accuracy       |
| Finance   | Trading, portfolio optimization | Non-stationarity            |
| Logistics | Routing, scheduling             | Combinatorial complexity    |

RLHF (Reinforcement Learning from Human Feedback) applies RL to align language models with human
preferences. A reward model trained on human comparisons of model outputs provides the reward signal
that PPO uses to fine-tune the language model.

## Transfer Learning

Transfer learning applies knowledge gained from one task or domain to a different but related task.
This is the dominant paradigm in modern deep learning — very few production models are trained from
random initialization.

### Fine-Tuning

Fine-tuning takes a pretrained model and continues training on a new task, in most cases with a
smaller learning rate. The model retains its general knowledge from pretraining while adapting to
the specific task.

```python
model = PretrainedModel.from_pretrained("base-model")

for param in model.parameters():
    param.requires_grad = False  # Freeze base layers

model.classifier = Linear(hidden_size, num_classes)  # Replace head
optimizer = Adam(model.classifier.parameters(), lr=1e-4)
```

**Layer-wise learning rates** — unfreeze layers gradually during training. Lower layers (general
features) get smaller learning rates; upper layers (task-specific features) get larger ones:

```python
optimizer = Adam([
    {'params': model.embeddings.parameters(), 'lr': 1e-6},
    {'params': model.encoder.parameters(), 'lr': 1e-5},
    {'params': model.classifier.parameters(), 'lr': 1e-4},
])
```

### Feature Extraction

Feature extraction freezes the entire pretrained model and uses its intermediate representations as
input features for a new classifier. This is effective when the downstream task is simple or the
dataset is small.

```python
model = PretrainedModel.from_pretrained("base-model")
model.eval()  # Disable dropout, batch norm updates

features = []
with torch.no_grad():
    for batch in dataloader:
        features.append(model.encoder(batch))
```

### Domain Adaptation

Domain adaptation handles the case where the source and target domains differ in distribution but
share the task. Techniques include:

- **Domain adversarial training** — a gradient reversal layer trains a domain classifier while the
  feature extractor learns to produce domain-invariant features
- **CORAL** — aligns the second-order statistics (covariance) of source and target feature
  distributions
- **Self-training** — the model generates pseudo-labels for unlabeled target data and retrains on
  them

### Few-Shot Learning

Few-shot learning trains models to generalize from very few examples — often 1 to 5 per class.
Approaches:

| Approach              | Mechanism                                             | Example              |
| --------------------- | ----------------------------------------------------- | -------------------- |
| Meta-learning         | Learn to learn — train across many tasks              | MAML, Reptile        |
| Prototypical networks | Compare to class prototypes in embedding space        | N-way K-shot         |
| Prompt tuning         | Adapt pretrained models with text prompts             | GPT-3 in-context     |
| LoRA                  | Low-rank adapters for parameter-efficient fine-tuning | Rank-4 decomposition |

## Model Deployment

Training a model is an engineering exercise. Deploying it is an operations exercise. The gap between
the two is where most production ML systems fail.

### ONNX

ONNX (Open Neural Network Exchange) is a cross-format representation for trained models. Convert a
PyTorch or TensorFlow model to ONNX for inference in environments that do not run the training
framework.

```python
import torch.onnx

torch.onnx.export(
    model,
    dummy_input,
    "model.onnx",
    input_names=["input"],
    output_names=["output"],
    dynamic_axes={"input": {0: "batch_size"}},
)
```

### TensorRT

TensorRT (NVIDIA) optimizes ONNX or native models for GPU inference. It performs layer fusion,
kernel auto-tuning, precision calibration (FP16, INT8), and memory optimization. Typical speedups
over naive inference range from 2x to 10x.

```python
import tensorrt as trt

builder = trt.Builder(trt.Logger(trt.Logger.WARNING))
network = builder.create_network(1 << int(trt.NetworkDefinitionCreationFlag.EXPLICIT_BATCH))
parser = trt.OnnxParser(network, trt.Logger(trt.Logger.WARNING))
parser.parse_from_file("model.onnx")

config = builder.create_builder_config()
config.set_memory_pool_limit(trt.MemoryPoolType.WORKSPACE, 1 << 30)
engine = builder.build_serialized_network(network, config)
```

### Model Serving

Production models run behind an API that handles request routing, batching, and scaling.

| Framework               | Strength                          | Use Case              |
| ----------------------- | --------------------------------- | --------------------- |
| TorchServe              | Native PyTorch, multi-model       | PyTorch-centric teams |
| TensorFlow Serving      | Versioned models, gRPC            | TF-centric teams      |
| Triton Inference Server | Multi-framework, dynamic batching | Heterogeneous fleets  |
| BentoML                 | Python-native, easy packaging     | Rapid prototyping     |
| vLLM                    | Optimized LLM serving             | Large language models |

Key operational concerns: cold start latency (loading model weights into GPU memory), request
batching (combining concurrent requests into a single forward pass), and hardware utilization
(keeping GPUs fed without oversubscribing memory).

### A/B Testing

Deploying a new model alongside the current production model allows direct comparison on real
traffic.

```
Metrics to track:
- Model accuracy / business metric (conversion rate, click-through)
- Latency (p50, p95, p99)
- Error rate and timeout rate
- Resource utilization (GPU memory, CPU, memory)
```

Proper A/B testing requires statistical rigor: define the metric, determine sample size, run for a
sufficient duration, and use a significance test (t-test, chi-squared) before concluding which model
is better.

### Monitoring Drift

Models degrade silently. Data drift (input distribution changes) and concept drift (the relationship
between input and output changes) are the two primary failure modes.

**Detection methods:**

- **Statistical tests** — KS test, Population Stability Index, Jensen-Shannon divergence on feature
  distributions between training and production data
- **Performance monitoring** — track prediction quality on labeled production data; alert on
  degradation beyond a threshold
- **Input feature tracking** — monitor that feature distributions, null rates, and value ranges
  remain within training-time bounds

## Worked Examples

### Example 1: Computing Self-Attention

**Problem:** Given input sequence X with two tokens, compute self-attention with d_k = 4. Token A =
[1, 0, 1, 0], Token B = [0, 1, 0, 1]. W_Q, W_K, W_V are identity matrices. Compute attention
weights. **Solution:** Q = K = V = X. QK^T = [[2, 0], [0, 2]]. Divide by sqrt(4) = 2:
[[1, 0], [0, 1]]. Softmax: [[1, 0], [0, 1]]. Output = V (identity attention). Token A attends 100%
to itself, Token B attends 100% to itself. This occurs because orthogonal queries produce zero dot
products.

### Example 2: Fine-Tuning a Pretrained Model

**Problem:** Fine-tune a BERT-base model (12 layers, hidden_size=768, 12 attention heads) for a
binary classification task with 1000 labelled examples. **Solution:** Load the model with
`from_pretrained`. Add a classification head: `Linear(768, 2)`. Freeze all encoder parameters. Train
only the head with Adam (lr=1e-4) for 10 epochs. If validation loss plateaus, unfreeze the top 4
encoder layers with lr=1e-5 and continue training. Use binary cross-entropy loss.

### Example 3: PPO Update Calculation

**Problem:** At time step t, the old policy assigns probability 0.3 to action a_t, and the new
policy assigns 0.5. The advantage is A_t = 0.8. epsilon = 0.2. Compute the clipped objective.
**Solution:** r_t(θ) = 0.5/0.3 = 1.667. Clipped r_t in [1-0.2, 1+0.2] = [0.8, 1.2]. r_t = 1.667 is
clipped to 1.2. L(θ) = min(1.667 × 0.8, 1.2 × 0.8) = min(1.333, 0.96) = 0.96. The clip prevents the
destructively large update from the high probability ratio.

1. **Treating accuracy as the only metric.** A model that is 99.5% accurate on an imbalanced dataset
   with a 99% majority class is performing worse than random guessing on the minority class. Use
   precision, recall, F1, AUC-ROC, or task-specific metrics that reflect the actual cost of errors.

2. **Training on test data.** Any information from the test set that leaks into the training
   pipeline — through feature selection, hyperparameter tuning, or preprocessing — inflates
   performance estimates and produces models that fail in deployment. Maintain strict
   train/validation/test splits.

3. **Ignoring distribution shift.** Models trained on historical data assume the future looks like
   the past. Financial data, user behavior, and sensor data all shift over time. Monitor for drift
   and retrain regularly.

4. **Deploying without observability.** A model in production is a running service. Without latency
   monitoring, error tracking, input validation, and prediction logging, failures are invisible
   until users report them.

5. **Overfitting to validation set during hyperparameter search.** Running hundreds of
   hyperparameter configurations and selecting the best validation score implicitly fits to the
   validation set. Use nested cross-validation or hold out a separate test set for final evaluation.

6. **Ignoring computational cost.** A transformer model that achieves 2% higher accuracy but
   requires 10x the compute may not be worth deploying. Consider latency, memory, energy
   consumption, and dollar-per-inference cost alongside model quality.

7. **Not versioning data and models.** A model is a function of its training data, code, and
   hyperparameters. If you cannot reproduce the exact conditions under which a model was trained,
   you cannot debug it, retrain it, or roll back to a previous version.

## Common Pitfalls

1. **Confusing the roles of generator and discriminator loss functions.** The generator minimizes
   the discriminator's output, not maximizes it. The discriminator maximizes real vs. fake
   classification accuracy. Getting this wrong produces nonsensical training loops.
2. **Using RL without proper reward scaling.** In PPO and policy gradient methods, unnormalised
   reward signals cause gradient explosion or vanishing. Rewards should be standardised (zero mean,
   unit variance) before use.
3. **Applying transfer learning without domain adaptation.** A model pretrained on ImageNet will
   perform poorly on medical or satellite imagery without fine-tuning or domain-specific adaptation.
4. **Overfitting the validation set through extensive hyperparameter search.** Running thousands of
   configurations against the same validation set implicitly fits to it. Use nested cross-validation
   or a separate test set.

## Summary

Modern machine learning rests on a stack of composable building blocks. Transformers replaced
recurrence for sequence modeling through attention. Generative models (VAEs, GANs, diffusion)
produce high-quality samples for images, text, and audio. Reinforcement learning trains sequential
decision-making through reward signals. Transfer learning makes pretrained models accessible for
downstream tasks with minimal data and compute. Deployment bridges the gap between research and
production through efficient inference runtimes, serving infrastructure, and monitoring systems. The
field moves fast, but the fundamentals — clean data, proper evaluation, and operational discipline —
do not change.
