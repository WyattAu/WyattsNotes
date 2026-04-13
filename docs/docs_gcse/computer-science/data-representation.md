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

### 1.2 Converting Between Binary and Denary

**Binary to denary:** Add the values of the positions where there is a 1.

**Worked Example.** Convert 11010110 to denary.

$$128 + 64 + 16 + 4 + 2 = 214$$

**Denary to binary:** Find the largest power of 2 that fits, subtract, and repeat.

**Worked Example.** Convert 105 to binary.

$105 - 64 = 41$, $41 - 32 = 9$, $9 - 8 = 1$, $1 - 1 = 0$.

Binary: 1101001.

### 1.3 Units of Data

| Unit            | Number of bytes          |
| --------------- | ------------------------ |
| 1 Kilobyte (KB) | $2^{10} = 1024$ bytes    |
| 1 Megabyte (MB) | $2^{20} = 1048576$ bytes |
| 1 Gigabyte (GB) | $2^{30}$ bytes           |
| 1 Terabyte (TB) | $2^{40}$ bytes           |

:::warning
In computing, kilo means 1024 (not 1000) because computers use binary. However, storage
manufacturers often use 1000 for marketing purposes.
:::

## 2. Hexadecimal

### 2.1 The Hexadecimal System

**Hexadecimal** (base 16) uses digits 0--9 and letters A--F (where A=10, B=11, ..., F=15).

Hex is used as a shorthand for binary because:

- 4 binary digits = 1 hex digit
- Large binary numbers are easier to read and write in hex

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

**Hex to binary:** Convert each hex digit to 4 binary digits.

**Worked Example.** Convert 3F7 to binary.

3 = 0011, F = 1111, 7 = 0111

Result: 001111110111

### 2.3 Uses of Hexadecimal

- **Colour codes:** In HTML/CSS, colours are represented as #RRGGBB (e.g. #FF0000 = red)
- **MAC addresses:** 48-bit addresses represented as 12 hex digits (e.g. 00:1A:2B:3C:4D:5E)
- **Error codes:** Memory addresses and error messages often use hex
- **Assembly language:** Machine code instructions are shown in hex

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

**Worked Example.** What is stored in binary for the text "Hi"?

H = 72 = 1001000 i = 105 = 1101001

"Hi" in 8-bit ASCII: 01001000 01101001

### 3.3 Unicode

Unicode supports multiple languages and special characters. The first 128 characters of Unicode are
the same as ASCII (backwards compatible).

Unicode uses up to 4 bytes per character. Common encodings include UTF-8 (variable length, 1--4
bytes) and UTF-16.

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

### 4.2 Calculating Image File Size

$$\text{File size (bits)} = \text{width} \times \text{height} \times \text{colour depth}$$

**Worked Example.** An image is 1920 $\times$ 1080 pixels with 24-bit colour depth. Calculate the
file size in megabytes.

$$\text{File size} = 1920 \times 1080 \times 24 = 49766400 \text{ bits}$$
$$= \frac{49766400}{8} = 6220800 \text{ bytes}$$
$$= \frac{6220800}{1024 \times 1024} \approx 5.93 \text{ MB}$$

### 4.3 The Effect of Resolution and Colour Depth

- **Increasing resolution:** Sharper image, larger file size
- **Increasing colour depth:** More colours available, larger file size
- **Decreasing either:** Smaller file size, lower quality

## 5. Representing Sound

### 5.1 How Sound Is Stored

Sound is an analogue wave. To store it digitally:

1. The sound wave is sampled at regular intervals (**sampling rate**)
2. The amplitude at each sample is measured and stored as a binary value (**sample resolution** /
   **bit depth**)

This process is called **analogue to digital conversion (ADC)**.

### 5.2 Key Terms

| Term                          | Definition                                               |
| ----------------------------- | -------------------------------------------------------- |
| Sample rate                   | Number of samples taken per second (measured in Hz)      |
| Sample resolution (bit depth) | Number of bits per sample                                |
| Bit rate                      | Sample rate $\times$ sample resolution (bits per second) |

### 5.3 Calculating Sound File Size

$$\text{File size (bits)} = \text{sample rate} \times \text{sample resolution} \times \text{duration (seconds)}$$

**Worked Example.** A 3-minute audio clip is recorded at 44100 Hz with 16-bit resolution. Calculate
the file size.

$$\text{File size} = 44100 \times 16 \times 180 = 127008000 \text{ bits}$$
$$= \frac{127008000}{8} = 15876000 \text{ bytes} \approx 15.14 \text{ MB}$$

### 5.4 Effects of Sample Rate and Resolution

- **Higher sample rate:** More faithful reproduction of the original sound, larger file
- **Higher bit depth:** More precise amplitude values, larger file
- CD quality: 44100 Hz, 16-bit

## 6. Data Compression

### 6.1 Why Compress?

Compression reduces file size, saving storage space and reducing transmission time over networks.

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

## Common Pitfalls

- **Confusing bits and bytes.** 1 byte = 8 bits.
- **Forgetting that 1 KB = 1024 bytes, not 1000.** (Though in some contexts, kB = 1000 bytes.)
- **Not counting leading zeros in binary conversions.** An 8-bit number must have exactly 8 digits.
- **Confusing lossy and lossless compression.** Lossy = data permanently lost (JPEG); lossless = no
  data lost (PNG).
- **Calculating image file size incorrectly.** Remember to multiply by the colour depth in bits,
  then convert to bytes.
- **Forgetting to convert units when calculating file sizes.** Divide by 8 for bits to bytes, then
  by 1024 for KB, etc.

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
