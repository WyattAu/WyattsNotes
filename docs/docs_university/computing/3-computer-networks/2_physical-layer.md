---
title: Physical Layer
tags:
  - Computing
  - University
---

### 2.1 Transmission Media

**Guided media:** Twisted pair (UTP, STP), coaxial cable, fibre optic.

- **Twisted pair:** Category 5e/6/6a for Ethernet. Bandwidth up to 10 Gbps (Cat 6a, 100 m).
- **Fibre optic:** Single-mode (long distance, laser) and multi-mode (shorter distance, LED).
  Bandwidth up to 100+ Gbps.

**Unguided media:** Radio waves, microwaves, infrared. Subject to attenuation, interference, and
Line-of-sight constraints.

### 2.2 Signaling

**Analog vs. Digital.** Analog signals vary continuously; digital signals are discrete.

- **Bandwidth:** Range of frequencies a channel can carry, measured in Hz.
- **Bit rate:** Number of bits transmitted per second (bps).
- **Nyquist theorem:** For a noiseless channel of bandwidth $H$ Hz with $V$ discrete signal levels:

$$C = 2H \log_2 V \;\mathrm{bps}$$

**Theorem 2.1 (Nyquist--Shannon Sampling Theorem).** A bandlimited signal of bandwidth $H$ Hz can Be
perfectly reconstructed from samples taken at a rate of at least $2H$ samples per second.

_Proof._ Let $x(t)$ be a signal with Fourier transform $X(f)$ such that $X(f) = 0$ for
$\lvert f \rvert \gt H$. Sampling at rate $f_s$ produces
$x_s(t) = x(t) \cdot \sum_{n=-\infty}^{\infty} \delta(t - nT_s)$ Where $T_s = 1/f_s$. In the
frequency domain, $X_s(f) = f_s \sum_{k=-\infty}^{\infty} X(f - kf_s)$. When $f_s \geq 2H$The
spectral copies do not overlap, and $x(t)$ can be recovered by an ideal Lowpass filter with cutoff
$H$. When $f_s \lt 2H$Aliasing occurs and perfect recovery is Impossible. $\blacksquare$

- **Shannon capacity:** For a noisy channel with signal-to-noise ratio $\mathrm{SNR}$:

$$C = H \log_2(1 + \mathrm{SNR}) \;\mathrm{bps}$$

**Theorem 2.2 (Shannon--Hartley Theorem).** The channel capacity $C$ is the maximum error-free data
Rate achievable on a channel of bandwidth $H$ with signal-to-noise ratio $\mathrm{SNR}$.

_Proof._ For a bandlimited AWGN channel, the number of distinguishable signal levels is constrained
By the noise power. Let $\mathrm{SNR} = S/N$ where $S$ is signal power and $N = N_0 H$ is noise
Power. The number of distinguishable amplitude levels is proportional to $\sqrt{1 + \mathrm{SNR}}$.
With $\log_2$ levels per signal element and $2H$ signal elements per second (Nyquist), the maximum
Error-free rate is $C = 2H \cdot \tfrac{1}{2}\log_2(1 + \mathrm{SNR}) = H \log_2(1 + \mathrm{SNR})$.
$\blacksquare$

**Example.** A telephone line has $H = 3100$ Hz and $\mathrm{SNR} = 3162$ (35 dB). Shannon limit:
$C = 3100 \times \log_2(3163) \approx 34860$ bps.

<details>
<summary>Worked Example: Nyquist Bit Rate</summary>

A noiseless channel has a bandwidth of 4000 Hz. How many signal levels are needed to achieve a data
Rate of 56000 bps?

Using Nyquist's formula: $$C = 2H \log_2 V$$ $$56000 = 2 \times 4000 \times \log_2 V$$
$$\log_2 V = \frac{56000}{8000} = 7$$ $$V = 2^7 = 128$$

**Answer:** 128 signal levels are required.

</details>

<details>
<summary>Worked Example: Shannon Channel Capacity</summary>

A satellite channel has a bandwidth of 36 MHz and an SNR of 30 dB. Find the maximum data rate.

First convert SNR from dB to linear: $$\mathrm{SNR_}{\mathrm{linear} = 10^{30/10} = 1000}$$

Apply Shannon's formula: $$C = H \log_2(1 + \mathrm{SNR}) = 36 \times 10^6 \times \log_2(1001)$$
$$\log_2(1001) = \frac{\ln(1001)}{\ln(2)} \approx 9.967$$
$$C = 36 \times 10^6 \times 9.967 \approx 358.8 \times 10^6 \;\mathrm{bps} \approx 358.8\;\mathrm{Mbps}$$

**Answer:** The maximum achievable data rate is approximately 358.8 Mbps. Any attempt to exceed This
rate will result in an unacceptable error rate regardless of the modulation scheme used.

</details>

<details>
<summary>Worked Example: Comparing Nyquist and Shannon Limits</summary>

A channel has $H = 6000$ Hz and $\mathrm{SNR} = 1023$ (30 dB).

**Shannon limit:** $$C = 6000 \times \log_2(1024) = 6000 \times 10 = 60000\;\mathrm{bps}$$

**Nyquist limit with $V = 8$:**
$$C = 2 \times 6000 \times \log_2(8) = 12000 \times 3 = 36000\;\mathrm{bps}$$

The Nyquist limit (36 kbps) is below the Shannon limit (60 kbps), so 8 signal levels are Achievable.
With $V = 64$: $$C = 12000 \times 6 = 72000\;\mathrm{bps}$$

This exceeds Shannon's limit of 60 kbps, meaning 64 levels would produce errors. The maximum Number
of levels consistent with Shannon:
$$C_{\mathrm{Shannon} = 2H \log_2 V \implies 60000 = 12000 \times \log_2 V \implies V = 32}$$

**Answer:** At most 32 signal levels can be used reliably on this channel.

</details>

:::caution Common Pitfall Bandwidth (Hz) and bit rate (bps) are different quantities. Bandwidth is
the range of frequencies The channel can carry; bit rate is the number of bits transmitted per
second. Shannon's theorem Relates the maximum bit rate to bandwidth and SNR, but they are not
interchangeable.

### 2.3 Multiplexing

**Frequency-Division Multiplexing (FDM).** Divide bandwidth into non-overlapping frequency bands.
Each user gets a dedicated band. Used in radio and cable TV.

**Time-Division Multiplexing (TDM).** Divide time into fixed slots; each user gets a slot per cycle.
Synchronous TDM assigns slots statically; statistical TDM assigns dynamically based on demand.

**Wavelength-Division Multiplexing (WDM).** FDM for fibre optics. Multiple wavelengths share a
Single fibre. Dense WDM (DWDM) supports 80+ channels.

**Code-Division Multiple Access (CDMA).** Each user is assigned a unique code. All users transmit
Simultaneously on the same frequency; codes are mathematically orthogonal so receivers can isolate
Their signal.

### 2.4 Modulation

**Digital-to-analog modulation:** ASK (Amplitude Shift Keying), FSK (Frequency Shift Keying), PSK
(Phase Shift Keying). QAM combines ASK and PSK for higher data rates.

- 16-QAM encodes 4 bits per symbol (16 combinations of amplitude and phase).
- 256-QAM encodes 8 bits per symbol.
- 1024-QAM encodes 10 bits per symbol (used in Wi-Fi 6).

**Theorem 2.3 (QAM spectral efficiency).** An $M$-ary QAM scheme where $M = 2^{2k}$ has a spectral
Efficiency of $2k$ bits/symbol, i.e., the bit rate equals $2k \times B$ where $B$ is the bandwidth
In Hz.

_Proof._ QAM modulates both amplitude and phase of a carrier. With $M$ symbols, each symbol carries
$\log_2 M = 2k$ bits. The symbol rate equals the bandwidth $B$ (Nyquist: 2 symbols/Hz for Baseband,
1 symbol/Hz for passband). Therefore bit rate = $2k \times B$. $\blacksquare$

<details>
<summary>Worked Example: QAM Data Rate Calculation</summary>

A 256-QAM modem operates over a 20 MHz channel. What is the maximum data rate?

$$M = 256, \quad \log_2 256 = 8 \;\mathrm{bits}/symbol$$

$$\mathrm{Bit}\;rate = 8 \times 20 \times 10^6 = 160\;\mathrm{Mbps}$$

If the channel has SNR = 24 dB, verify against Shannon:

$$\mathrm{SNR_}{\mathrm{linear} = 10^{24/10} = 251.2}$$
$$C = 20 \times 10^6 \times \log_2(252.2) \approx 20 \times 10^6 \times 7.98 \approx 159.6\;\mathrm{Mbps}$$

The Nyquist-based rate (160 Mbps) is very close to the Shannon limit (159.6 Mbps), meaning 256-QAM
Is near-optimal for this channel but has almost no margin for noise or interference.

</details>

### 2.5 Line Coding

Line codes map binary data to signals suitable for the physical medium.

| Encoding                | Description                            | Example            |
| ----------------------- | -------------------------------------- | ------------------ |
| NRZ (L)                 | High = 1, Low = 0                      | USB                |
| NRZI                    | Transition = 1, no transition = 0      | USB                |
| Manchester              | Transition at mid-bit; low-to-high = 0 | 802.3 (10 Mbps)    |
| Differential Manchester | Transition at start of 0 bit only      | 802.5 (Token Ring) |
| 4B/5B                   | 4 data bits encoded as 5-bit codes     | 100BASE-TX         |
| 8B/10B                  | 8 data bits encoded as 10-bit codes    | Gigabit Ethernet   |
| 64B/66B                 | 64 data bits encoded as 66-bit codes   | 10GBASE-R          |

**Spectral efficiency.** Manchester encoding doubles the bandwidth requirement (two signal levels
per Bit). 4B/5B adds 25% overhead. 8B/10B adds 25%. 64B/66B adds only 3% overhead.

**Scrambling.** High-density bipolar 3 (HDB3) and other scrambling techniques ensure sufficient
Transitions for clock recovery, preventing long runs of identical bits.



