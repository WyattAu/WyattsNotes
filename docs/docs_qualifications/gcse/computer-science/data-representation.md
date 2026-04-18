---
title: Data Representation
date: 2026-04-14
tags:
  - Computer Science
  - GCSE
categories:
  - Computer Science
slug: data-representation
---

## Data Representation

:::info
Board Coverage AQA Paper 1 | Edexcel Paper 1 | OCR J277 Paper 1 | WJEC Unit 1
:::

## 1. Binary

### 1.1 The Binary Number System

Computers use **binary** (base 2), which has only two digits: 0 and 1. Each binary digit is called a
**bit** (binary digit).

A group of 8 bits is called a **byte**.

| Bit position | 128   | 64    | 32    | 16    | 8     | 4     | 2     | 1     |
| ------------ | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Power of 2   | $2^7$ | $2^6$ | $2^5$ | $2^4$ | $2^3$ | $2^2$ | $2^1$ | $2^0$ |

**Why binary?** Digital circuits are built from transistors, which have two states: on (high
voltage) and off (low voltage). These two states map naturally to 1 and 0. Binary arithmetic can be
implemented with simple logic gates (AND, OR, NOT), making hardware design tractable.

### 1.2 Converting Between Binary and Denary

**Binary to denary:** Add the values of the positions where there is a 1.

**Worked Example.** Convert 11010110 to denary.

$$128 + 64 + 16 + 4 + 2 = 214$$

**Worked Example.** Convert 01011101 to denary.

$$64 + 16 + 8 + 4 + 1 = 93$$

**Denary to binary:** Find the largest power of 2 that fits, subtract, and repeat.

**Worked Example.** Convert 105 to binary.

$105 - 64 = 41$, $41 - 32 = 9$, $9 - 8 = 1$, $1 - 1 = 0$.

Binary: 1101001.

In 8 bits: 01101001.

**Alternative method: repeated division by 2.** Divide the number by 2 repeatedly and record the
remainders. Read the remainders from bottom to top.

**Worked Example.** Convert 214 to binary.

$214 / 2 = 107$ r 0 $107 / 2 = 53$ r 1 $53 / 2 = 26$ r 1 $26 / 2 = 13$ r 0 $13 / 2 = 6$ r 1
$6 / 2 = 3$ r 0 $3 / 2 = 1$ r 1 $1 / 2 = 0$ r 1

Reading bottom to top: 11010110.

### 1.3 Units of Data

| Unit            | Number of bytes          |
| --------------- | ------------------------ |
| 1 Kilobyte (KB) | $2^{10} = 1024$ bytes    |
| 1 Megabyte (MB) | $2^{20} = 1048576$ bytes |
| 1 Gigabyte (GB) | $2^{30}$ bytes           |
| 1 Terabyte (TB) | $2^{40}$ bytes           |

:::warning
In computing, kilo means 1024 (not 1000) because computers use binary. However, storage
manufacturers often use 1000 for marketing purposes. A "500 GB" hard drive advertised by the
manufacturer is actually about 465 GiB when measured in binary. The IEC prefixes KiB, MiB, GiB refer
specifically to powers of 1024.
:::

### 1.4 Binary Addition

Binary addition follows the same rules as denary addition, but with only two digits:

| $0 + 0$ | $0 + 1$ | $1 + 0$ | $1 + 1$        |
| ------- | ------- | ------- | -------------- |
| 0       | 1       | 1       | 10 (0 carry 1) |

**Worked Example.** $0110 + 0101$

```
  0110
+ 0101
------
  1011
```

**Worked Example.** $1101 + 1011$

```
  1101
+ 1011
------
 11000
```

**Worked Example with overflow.** $1100 + 1100$

```
  1100
+ 1100
------
 11000
```

The result (11000) requires 5 bits, but we are working with 4-bit numbers. The leftmost 1 is lost,
giving an incorrect result of 1000. This is called **overflow** and occurs when the result of an
operation exceeds the number of bits available.

### 1.5 Binary Subtraction Using Two's Complement (Higher Tier)

To subtract, add the two's complement of the number being subtracted.

**Two's complement:** Invert all bits (1's complement), then add 1.

**Worked Example.** Calculate $6 - 3$ in 4-bit binary.

$6 = 0110$, $3 = 0011$

Two's complement of 3: invert $0011 \to 1100$, add $1 \to 1101$.

$0110 + 1101 = 10011$.

Discard the overflow bit: $0011 = 3$. Correct.

**Worked Example.** Calculate $3 - 6$ in 4-bit binary.

$3 = 0011$, $6 = 0110$.

Two's complement of 6: invert $0110 \to 1001$, add $1 \to 1010$.

$0011 + 1010 = 1101$.

In two's complement, $1101 = -8 + 4 + 0 + 1 = -3$. Correct.

**Worked Example.** Calculate $15 - 8$ in 5-bit binary.

$15 = 01111$, $8 = 01000$.

Two's complement of 8: invert $01000 \to 10111$, add $1 \to 11000$.

$01111 + 11000 = 100111$.

Discard the overflow bit: $00111 = 7$. Correct.

**Proof that two's complement negation works.** For an $n$-bit number $x$ with
$0 \lt x \lt 2^{n-1}$, let $y$ be the bitwise complement of $x$ plus 1. Then $y = 2^n - x$. When we
compute $x + y = x +
(2^n - x) = 2^n$. In $n$-bit arithmetic, the leading 1 overflows and is
discarded, leaving 0. Therefore $y = -x$ in two's complement arithmetic. $\blacksquare$

### 1.6 Logical Binary Shifts (Higher Tier)

A **logical left shift** moves all bits to the left by a specified number of positions. Zeros fill
the vacated positions on the right. Each left shift multiplies by 2.

**Example.** $00001100$ (12) shifted left by 2: $00110000$ (48).

**Formal justification.** Shifting left by $k$ positions multiplies each bit's positional value by
$2^k$. The new value is the original value times $2^k$.

A **logical right shift** moves all bits to the right. Each right shift divides by 2 (integer
division).

**Example.** $00001100$ (12) shifted right by 1: $00000110$ (6).

**Worked Example.** What is $00010110$ shifted left by 3?

$00010110 = 22$. After shifting left by 3: $10110000 = 176$. Check:
$22 \times 2^3 = 22 \times 8
= 176$. Correct.

## 2. Hexadecimal

### 2.1 The Hexadecimal System

**Hexadecimal** (base 16) uses digits 0--9 and letters A--F (where A=10, B=11, ..., F=15).

Hex is used as a shorthand for binary because:

- 4 binary digits = 1 hex digit
- Large binary numbers are easier to read and write in hex
- Hex is easier for humans to work with than long strings of 0s and 1s

| Binary | Hex | Denary |
| ------ | --- | ------ |
| 0000   | 0   | 0      |
| 0001   | 1   | 1      |
| 0010   | 2   | 2      |
| 0011   | 3   | 3      |
| 0100   | 4   | 4      |
| 0101   | 5   | 5      |
| 0110   | 6   | 6      |
| 0111   | 7   | 7      |
| 1000   | 8   | 8      |
| 1001   | 9   | 9      |
| 1010   | A   | 10     |
| 1011   | B   | 11     |
| 1100   | C   | 12     |
| 1101   | D   | 13     |
| 1110   | E   | 14     |
| 1111   | F   | 15     |

### 2.2 Conversions

**Binary to hex:** Group the binary digits into groups of 4 (from the right), then convert each
group.

**Worked Example.** Convert 110101101011 to hex.

Group: 1101 0110 1011

Convert: D 6 B

Result: D6B

**Worked Example.** Convert 10110 to hex.

Pad with leading zeros: 0001 0110

Convert: 1 6

Result: 16

**Hex to binary:** Convert each hex digit to 4 binary digits.

**Worked Example.** Convert 3F7 to binary.

3 = 0011, F = 1111, 7 = 0111

Result: 001111110111

**Hex to denary:** Multiply each hex digit by its positional value ($16^0, 16^1, 16^2$, etc.) and
sum.

**Worked Example.** Convert 2AF to denary.

$2 \times 16^2 + 10 \times 16^1 + 15 \times 16^0 = 2 \times 256 + 10 \times 16 + 15 = 512 + 160 +
15 = 687$

**Denary to hex:** Repeatedly divide by 16 and record remainders.

**Worked Example.** Convert 300 to hex.

$300 / 16 = 18$ r 12 (C) $18 / 16 = 1$ r 2 $1 / 16 = 0$ r 1

Result: 12C

### 2.3 Uses of Hexadecimal

- **Colour codes:** In HTML/CSS, colours are represented as #RRGGBB (e.g. #FF0000 = red, #00FF00 =
  green, #0000FF = blue). Each pair is a hex value from 00 to FF (0 to 255 in denary).
- **MAC addresses:** 48-bit addresses represented as 12 hex digits (e.g. 00:1A:2B:3C:4D:5E)
- **Error codes:** Memory addresses and error messages often use hex
- **Assembly language:** Machine code instructions are shown in hex

**Why hex for colours?** Each colour channel (red, green, blue) uses 8 bits (0-255). Two hex digits
represent 8 bits exactly, so #RRGGBB gives precise control over each channel in a compact format.

**Worked Example.** What colour is #40FF00?

Red = 40 hex = 64 denary (moderate red), Green = FF hex = 255 denary (maximum green), Blue = 00 hex
= 0 denary (no blue). This is a bright yellow-green colour.

**Worked Example.** What is the denary value of the MAC address byte 3C?

$3 \times 16 + 12 = 48 + 12 = 60$.

## 3. Representing Text

### 3.1 Character Sets

A **character set** is a collection of characters that a computer can recognise. Each character is
assigned a unique binary code.

| Character Set  | Description                                        | Characters                              |
| -------------- | -------------------------------------------------- | --------------------------------------- |
| ASCII          | American Standard Code for Information Interchange | 128 characters (7 bits)                 |
| Extended ASCII | Extended version                                   | 256 characters (8 bits)                 |
| Unicode        | Universal character set                            | Over 140,000 characters (up to 32 bits) |

### 3.2 ASCII

ASCII uses 7 bits, giving $2^7 = 128$ possible characters:

- 0--31: Control characters (non-printable, e.g. carriage return, tab)
- 32--127: Printable characters (letters, digits, punctuation, symbols)

**Key ASCII values:**

| Character | ASCII Code | Character | ASCII Code |
| --------- | ---------- | --------- | ---------- |
| A         | 65         | a         | 97         |
| B         | 66         | b         | 98         |
| Z         | 90         | z         | 122        |
| 0         | 48         | 9         | 57         |
| Space     | 32         | !         | 33         |

**Useful pattern:** The ASCII code for 'a' is 97, for 'b' is 98, ..., for 'z' is 122. The code for
'A' is 65, for 'B' is 66, ..., for 'Z' is 90. The difference between uppercase and lowercase is 32.
So to convert 'A' to 'a', add 32 to its ASCII code.

**Worked Example.** What is stored in binary for the text "Hi"?

H = 72 = 1001000 i = 105 = 1101001

"Hi" in 8-bit ASCII: 01001000 01101001

**Worked Example.** How many bytes are needed to store the word "COMPUTER" in ASCII?

Each character is 1 byte (8 bits). "COMPUTER" has 8 characters, so 8 bytes.

**Worked Example (Higher Tier).** Write the binary for "Cat" in 8-bit ASCII.

C = 67 = 01000011, a = 97 = 01100001, t = 116 = 01110100.

"Cat" = 01000011 01100001 01110100 (3 bytes).

### 3.3 Unicode

Unicode supports multiple languages and special characters. The first 128 characters of Unicode are
the same as ASCII (backwards compatible).

Unicode uses up to 4 bytes per character. Common encodings include UTF-8 (variable length, 1--4
bytes) and UTF-16.

**Why Unicode replaced ASCII:** ASCII can only represent 128 characters, which is insufficient for
languages like Chinese, Japanese, Arabic, and Hindi, and cannot represent emojis or mathematical
symbols. Unicode assigns a unique code point to every character in every language.

**UTF-8 encoding efficiency.** UTF-8 uses 1 byte for ASCII characters, 2 bytes for most Latin-based
scripts, 3 bytes for Asian scripts, and 4 bytes for emojis and rare characters. This means plain
English text is stored efficiently in UTF-8, while still supporting the full range of Unicode.

## 4. Representing Images

### 4.1 Bitmap Images

A **bitmap image** is made up of tiny squares called **pixels** (picture elements). Each pixel is
assigned a binary value that represents its colour.

**Image resolution:** The number of pixels in the image (width $\times$ height).

**Colour depth:** The number of bits used to represent each pixel.

| Colour Depth      | Number of Colours      |
| ----------------- | ---------------------- |
| 1 bit             | 2 (black and white)    |
| 8 bits (1 byte)   | 256                    |
| 16 bits           | 65536                  |
| 24 bits (3 bytes) | 16777216 (True Colour) |
| 32 bits           | Over 4 billion         |

**Why $2^n$ colours?** With $n$ bits per pixel, there are $2^n$ possible combinations of 0s and 1s.
Each combination maps to a unique colour. So 24 bits gives $2^{24} = 16,777,216$ possible colours.

### 4.2 Calculating Image File Size

$$\mathrm{File size (bits)} = \mathrm{width} \times \mathrm{height} \times \mathrm{colour depth}$$

**Worked Example.** An image is 1920 $\times$ 1080 pixels with 24-bit colour depth. Calculate the
file size in megabytes.

$$\mathrm{File size} = 1920 \times 1080 \times 24 = 49766400 \mathrm{ bits}$$
$$= \frac{49766400}{8} = 6220800 \mathrm{ bytes}$$
$$= \frac{6220800}{1024 \times 1024} \approx 5.93 \mathrm{ MB}$$

**Worked Example.** An image is 800 $\times$ 600 pixels with 32-bit colour depth.

$$
\mathrm{File size} = 800 \times 600 \times 32 = 15360000 \mathrm{ bits} = 1920000 \mathrm{ bytes} \approx
1.83 \mathrm{ MB}
$$

**Worked Example (Higher Tier).** A 4-megapixel image has a file size of 3 MB. What is the colour
depth?

$4 \times 10^6$ pixels $\times$ colour depth = $3 \times 1024 \times 1024 \times 8$ bits.

$\mathrm{Colour depth} = \frac{3 \times 1048576 \times 8}{4000000} = \frac{25165824}{4000000} \approx
6.29$
bits.

This is not an exact number, which suggests the file may include a header or metadata. Without
metadata, a 4-megapixel image at 24-bit colour depth would be: $4000000 \times 24 / 8 = 12000000$
bytes $\approx 11.44$ MB.

### 4.3 The Effect of Resolution and Colour Depth

- **Increasing resolution:** Sharper image, larger file size
- **Increasing colour depth:** More colours available, larger file size
- **Decreasing either:** Smaller file size, lower quality

**Trade-off.** Higher resolution and colour depth produce better images but require more storage and
take longer to transmit. Web designers often compress images to balance quality against file size.

**Worked Example.** An image is 1024 $\times$ 768 with 16-bit colour. If the colour depth is
increased to 24-bit, what is the percentage increase in file size?

Original: $1024 \times 768 \times 16 = 12582912$ bits.

New: $1024 \times 768 \times 24 = 18874368$ bits.

Increase: $(18874368 - 12582912) / 12582912 \times 100 = 50\%$.

### 4.4 Vector Images (Higher Tier)

**Vector images** store images as mathematical descriptions of shapes (lines, curves, colours)
rather than as pixels.

**Advantages of vector images:**

- Scale without losing quality (no pixelation)
- Smaller file sizes for simple graphics (logos, icons)
- Easy to edit individual components

**Disadvantages:**

- Not suitable for photographs (too complex)
- Rendering can be slower for very complex images

**Bitmap vs Vector comparison:**

| Feature        | Bitmap                      | Vector                      |
| -------------- | --------------------------- | --------------------------- |
| Representation | Grid of pixels              | Mathematical descriptions   |
| Scaling        | Loses quality when enlarged | No quality loss at any size |
| File size      | Depends on resolution       | Depends on complexity       |
| Best for       | Photographs                 | Logos, icons, diagrams      |
| Editing        | Pixel-level manipulation    | Edit individual shapes      |

## 5. Representing Sound

### 5.1 How Sound Is Stored

Sound is an analogue wave. To store it digitally:

1. The sound wave is sampled at regular intervals (**sampling rate**)
2. The amplitude at each sample is measured and stored as a binary value (**sample resolution** /
   **bit depth**)

This process is called **analogue to digital conversion (ADC)**.

**Intuition.** Imagine drawing a smooth curve on graph paper by only plotting points at regular
intervals along the x-axis. The more points you plot (higher sample rate) and the more precisely you
measure each y-value (higher bit depth), the more accurately your plotted points will match the
original curve.

### 5.2 Key Terms

| Term                          | Definition                                               |
| ----------------------------- | -------------------------------------------------------- |
| Sample rate                   | Number of samples taken per second (measured in Hz)      |
| Sample resolution (bit depth) | Number of bits per sample                                |
| Bit rate                      | Sample rate $\times$ sample resolution (bits per second) |

### 5.3 Calculating Sound File Size

$$\mathrm{File size (bits)} = \mathrm{sample rate} \times \mathrm{sample resolution} \times \mathrm{duration (seconds)} \times \mathrm{channels}$$

**Worked Example.** A 3-minute audio clip is recorded at 44100 Hz with 16-bit resolution (mono).
Calculate the file size.

$$\mathrm{File size} = 44100 \times 16 \times 180 = 127008000 \mathrm{ bits}$$
$$= \frac{127008000}{8} = 15876000 \mathrm{ bytes} \approx 15.14 \mathrm{ MB}$$

**Worked Example.** A 2-minute stereo audio clip at 48000 Hz with 24-bit resolution.

$$\mathrm{File size} = 48000 \times 24 \times 120 \times 2 = 276480000 \mathrm{ bits} \approx 32.94 \mathrm{ MB}$$

**Worked Example (Higher Tier).** A 5-minute mono recording at 22050 Hz has a file size of 12.5 MB.
What is the bit depth?

$\mathrm{File size in bits} = 12.5 \times 1024 \times 1024 \times 8 = 104857600$ bits.

$\mathrm{Bit depth} = \frac{104857600}{22050 \times 300} = \frac{104857600}{6615000} \approx 15.85$.

This is closest to 16-bit, which gives: $22050 \times 16 \times 300 = 105840000$ bits $\approx
12.62$
MB. The small difference is due to file header overhead.

### 5.4 Effects of Sample Rate and Resolution

- **Higher sample rate:** More faithful reproduction of the original sound, larger file
- **Higher bit depth:** More precise amplitude values, larger file
- CD quality: 44100 Hz, 16-bit
- Studio quality: 96000 Hz, 24-bit
- Telephone quality: 8000 Hz, 8-bit

**Nyquist theorem.** To accurately reproduce a sound, the sample rate must be at least twice the
highest frequency in the sound. Human hearing ranges up to about 20,000 Hz, so a sample rate of
44,100 Hz (just above $2 \times 20000$) is sufficient for CD quality.

**Proof sketch of the Nyquist theorem.** If a signal has maximum frequency $f_{\max}$, then the
signal completes at most $f_{\max}$ cycles per second. If we sample at rate $f_s \ge 2 f_{\max}$, we
take at least 2 samples per cycle. Two samples per cycle are sufficient to uniquely determine the
amplitude and phase of a sinusoidal component. If $f_s \lt 2 f_{\max}$, different frequencies
produce the same sample values (aliasing), making reconstruction ambiguous. $\blacksquare$

**Aliasing in practice.** If a 30,000 Hz tone is sampled at 44,100 Hz, the reconstructed frequency
is $|44100 - 30000| = 14100$ Hz, which is completely wrong. Anti-aliasing filters remove frequencies
above the Nyquist limit before sampling.

## 6. Data Compression

### 6.1 Why Compress?

Compression reduces file size, saving storage space and reducing transmission time over networks.
Without compression, a 2-hour HD film could require hundreds of gigabytes.

### 6.2 Lossy Compression

Lossy compression permanently removes some data to reduce file size. The original file cannot be
perfectly reconstructed.

**Examples:** JPEG (images), MP3 (audio), MP4 (video)

**Advantages:**

- Much smaller file sizes
- Suitable for images, audio, and video where perfect accuracy is not needed

**Disadvantages:**

- Quality loss
- Not suitable for text or programs (every bit matters)

**How JPEG works:** JPEG exploits the fact that human vision is less sensitive to fine colour detail
than to fine brightness detail. It converts the image to a frequency representation, then discards
high-frequency components that are less perceptible. This is why heavily compressed JPEGs show
"blocky" artefacts.

**Compression ratio comparison:**

| Format | Type     | Typical Compression Ratio | Quality      |
| ------ | -------- | ------------------------- | ------------ |
| PNG    | Lossless | 2:1 to 3:1                | Perfect      |
| JPEG   | Lossy    | 10:1 to 20:1              | Good to poor |
| FLAC   | Lossless | 2:1                       | Perfect      |
| MP3    | Lossy    | 10:1 to 12:1              | Good         |

### 6.3 Lossless Compression

Lossless compression reduces file size without losing any data. The original file can be perfectly
reconstructed.

**Examples:** PNG (images), FLAC (audio), ZIP (general files)

**Techniques:**

- **Run-length encoding (RLE):** Replaces repeated sequences with a count and value. Example:
  AAAABBBCCD $\to$ 4A3B2C1D.
- **Huffman coding:** Uses shorter codes for more frequent characters and longer codes for less
  frequent ones.

**Advantages:**

- No quality loss
- Suitable for text, code, and documents

**Disadvantages:**

- Smaller reduction in file size compared to lossy

### 6.4 Run-Length Encoding Example

**Worked Example.** Compress the following bitmap row using RLE: WWWWWBBBWWWWWW.

W5 B3 W6

Original: 12 bytes. Compressed: 6 bytes (assuming 1 byte per character and 1 byte per count).

**When RLE is ineffective:** RLE works well when there are long runs of the same value. For data
like ABABABABAB, RLE produces A1B1A1B1A1B1A1B1A1B1, which is **larger** than the original.

**Worked Example.** Compress the following data using RLE: AAAAAAABBBBCCCCCCDDDE.

A7 B4 C6 D3 E1.

Original: 21 bytes. Compressed: 10 bytes. Compression ratio: 21/10 = 2.1:1.

**Worked Example (Higher Tier).** A bitmap image has 64 pixels per row. Each row consists of 32
black pixels followed by 32 white pixels. What is the compressed size using RLE (1 byte per count, 1
byte per value)?

Two runs per row: B32 W32 = 4 bytes per row. If the image is 64 rows tall, compressed size = 64
$\times$ 4 = 256 bytes. Original size = $64 \times 64 = 4096$ bytes. Compression ratio = 16:1.

### 6.5 Huffman Coding (Higher Tier)

Huffman coding assigns variable-length codes to characters based on their frequency. More frequent
characters get shorter codes, and no code is a prefix of another (prefix-free property).

**Example.** For the string "BCCABBDDAECCBBAEDDCC":

| Character | Frequency | Huffman Code |
| --------- | --------- | ------------ |
| B         | 5         | 00           |
| C         | 6         | 01           |
| D         | 4         | 10           |
| A         | 3         | 110          |
| E         | 2         | 111          |

The most frequent character (C, 6 occurrences) gets the shortest code (01). The least frequent (E, 2
occurrences) gets the longest code (111).

**Why prefix-free?** If the code for A were "1" and the code for B were "10", then "10" could be
decoded as either B or A followed by the start of another character. Prefix-free codes eliminate
this ambiguity, making decoding unambiguous.

**Worked Example.** Calculate the total number of bits to encode "BCCABBDDAECCBBAEDDCC" using the
Huffman codes above.

$5 \times 2 + 6 \times 2 + 4 \times 2 + 3 \times 3 + 2 \times 3 = 10 + 12 + 8 + 9 + 6 = 45$ bits.

If fixed-width 3-bit codes were used (5 distinct characters need $\lceil \log_2 5 \rceil = 3$ bits):
$20 \times 3 = 60$ bits.

Savings: $(60 - 45) / 60 \times 100 = 25\%$.

**Huffman tree construction.** The Huffman tree is built by repeatedly combining the two
lowest-frequency nodes:

1. Start with: A(3), B(5), C(6), D(4), E(2)
2. Combine E(2) and A(3) to form EA(5)
3. Combine D(4) and EA(5) to form DEA(9)
4. Combine B(5) and C(6) to form BC(11)
5. Combine DEA(9) and BC(11) to form the root

The left branch gets 0 and the right branch gets 1 at each merge. This gives the codes shown in the
table above.

## 7. Additional Worked Examples (Higher Tier)

### 7.1 Two's Complement Range

For an $n$-bit two's complement number, the range is:

$$-2^{n-1} \mathrm{ to } 2^{n-1} - 1$$

| Bits | Range                     |
| ---- | ------------------------- |
| 4    | -8 to 7                   |
| 8    | -128 to 127               |
| 16   | -32768 to 32767           |
| 32   | -2147483648 to 2147483647 |

**Why this asymmetry?** There is one more negative number than positive number because zero is
represented as all zeros (positive). The pattern $100\ldots0$ (MSB = 1, rest = 0) represents
$-2^{n-1}$, and there is no corresponding positive value $2^{n-1}$.

### 7.2 Binary Multiplication (Higher Tier)

Binary multiplication is performed using long multiplication, similar to denary.

**Worked Example.** Calculate $6 \times 3$ in binary.

$6 = 0110$, $3 = 0011$.

```
      0110
    x 0011
    ------
      0110   (0110 x 1, shifted 0)
     0110    (0110 x 1, shifted 1)
    ------
     10010  = 18
```

## Common Pitfalls

- **Confusing bits and bytes.** 1 byte = 8 bits. A 24-bit colour depth is 3 bytes per pixel.
- **Forgetting that 1 KB = 1024 bytes, not 1000.** (Though in some contexts, kB = 1000 bytes.)
- **Not counting leading zeros in binary conversions.** An 8-bit number must have exactly 8 digits.
  The number 5 in 8-bit binary is 00000101, not 101.
- **Confusing lossy and lossless compression.** Lossy = data permanently lost (JPEG); lossless = no
  data lost (PNG).
- **Calculating image file size incorrectly.** Remember to multiply by the colour depth in bits,
  then convert to bytes (divide by 8), then to KB (divide by 1024).
- **Forgetting to convert units when calculating file sizes.** Divide by 8 for bits to bytes, then
  by 1024 for KB, then by 1024 for MB.
- **Forgetting to multiply by the number of channels** when calculating audio file size. Stereo has
  2 channels, so the file size is doubled compared to mono.
- **Assuming RLE always reduces file size.** RLE increases file size when there are few or no
  repeated values.
- **Forgetting to pad binary numbers** when converting to hexadecimal. Always group from the right;
  add leading zeros if necessary.
- **Confusing the MSB in two's complement** with a simple sign bit. In two's complement, the MSB
  carries a negative weight of $-2^{n-1}$, not just a sign.

## Practice Questions

1. Convert the binary number 10110101 to denary and to hexadecimal.

2. Convert the hexadecimal number 2AF to binary and to denary.

3. A bitmap image is 1024 $\times$ 768 pixels with a colour depth of 16 bits. Calculate the file
   size in megabytes.

4. A sound file is recorded at 22050 Hz with 8-bit resolution for 2 minutes. Calculate the file size
   in megabytes.

5. Use run-length encoding to compress: AAAAABBCCCCCCCCCCDD.

6. Explain the difference between lossy and lossless compression, giving an appropriate use for
   each.

7. Why is the character 'A' stored as 1000001 in ASCII? Explain what this binary value represents.

8. An image file is 2.5 MB. If the colour depth is increased from 8 bits to 24 bits, what will the
   new file size be?

9. Explain why hexadecimal is often used to represent binary values in computing.

10. Calculate the file size of a 30-second stereo (2 channels) audio recording at 48000 Hz with
    16-bit resolution.

11. **(Higher Tier)** Calculate 1101 + 0111 in binary. Show all working.

12. **(Higher Tier)** Calculate $15 - 8$ using two's complement in 5-bit binary. Show all working.

13. **(Higher Tier)** Explain the difference between a bitmap image and a vector image. Give an
    appropriate use case for each.

14. **(Higher Tier)** A 4-minute stereo audio file is 25 MB. If the sample rate is 44100 Hz, what is
    the bit depth?

15. **(Higher Tier)** Calculate $9 \times 5$ in binary using long multiplication. Show all working.

16. **(Higher Tier)** The string "MISSISSIPPI" is to be encoded using Huffman coding. Calculate the
    frequency of each character and determine which character would receive the shortest code.

17. **(Higher Tier)** Explain why the two's complement representation of $-128$ in 8 bits is
    10000000, but there is no representation of $+128$ in 8-bit two's complement.

18. **(Higher Tier)** An image has resolution 2048 $\times$ 1536. Compressed with RLE, each row
    averages 12 runs. If each run uses 1 byte for the count and 1 byte for the pixel value,
    calculate the compressed file size in KB and the compression ratio for a 24-bit image.
